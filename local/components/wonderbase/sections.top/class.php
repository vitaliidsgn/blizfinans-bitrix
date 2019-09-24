<?php

use Bitrix\Iblock\Component\Tools;
use Bitrix\Main\Loader;

class WonderbaseSectionsTopComponent extends CBitrixComponent
{
    public function onPrepareComponentParams($arParams)
    {
        $arParams['IBLOCK_ID'] = (int)$arParams['IBLOCK_ID'];

        $arParams['ONLY_ACTIVE'] = $this->checkBoolParam($arParams['ONLY_ACTIVE']);
        $arParams['CHECK_DATES'] = $this->checkBoolParam($arParams['CHECK_DATES']);
        $arParams['CHECK_PERMISSIONS'] = $this->checkBoolParam($arParams['CHECK_PERMISSIONS']);

        $arParams['SECTIONS_COUNT'] = (int)$arParams['SECTIONS_COUNT'];
        $arParams['ELEMENTS_COUNT'] = (int)$arParams['ELEMENTS_COUNT'];

        $arParams['CACHE_TIME'] = (int)$arParams['CACHE_TIME'];
        if ($arParams['CACHE_TIME'] <= 0)
            $arParams['CACHE_TIME'] = 604800;

        if (empty($arParams['SORT_BY']))
            $arParams['SORT_BY'] = 'SORT';

        if (empty($arParams['SORT_ORDER']))
            $arParams['SORT_ORDER'] = 'ASC';

        return $arParams;
    }

    protected function checkBoolParam($value, $default = 'N')
    {
        if ($value !== 'Y' && $value !== 'N')
            $value = $default;

        return $value;
    }

    public function executeComponent()
    {
        if ($this->startResultCache()) {
            \Bitrix\Main\Loader::includeModule('iblock');

            $this->arResult = $this->getSection();

            if (!$this->arResult) {
                $this->abortResultCache();
                Tools::process404('', true, true, true);
                return;
            }

            $this->arResult['SECTIONS'] = $this->getSections($this->arResult['ID']);

            $this->setResultCacheKeys(['ID', 'IBLOCK_ID']);

            $this->includeComponentTemplate();
        }

        $this->addAdminButtons();
    }

    protected function getSection()
    {
        if (empty($this->arParams['SECTION_ID']) && empty($this->arParams['SECTION_CODE']))
            return [];

        $arFilter = [
            'IBLOCK_ID' => $this->arParams['IBLOCK_ID']
        ];

        if ($this->arParams['ONLY_ACTIVE'] == 'Y') {
            $arFilter['ACTIVE'] = 'Y';
            $arFilter['GLOBAL_ACTIVE'] = 'Y';
        }

        if ($this->arParams['SECTION_ID'])
            $arFilter['ID'] = $this->arParams['SECTION_ID'];
        else
            $arFilter['CODE'] = $this->arParams['SECTION_CODE'];

        $arSection = CIBlockSection::GetList(
            ['ID' => 'ASC'],
            $arFilter,
            false,
            false,
            ['nTopCount' => 1]
        )->GetNext(true, false);

        if (!$arSection)
            return [];

        $obIPropValues = new Bitrix\Iblock\InheritedProperty\SectionValues($arSection['IBLOCK_ID'], $arSection['ID']);
        $arSection['IPROPERTY_VALUES'] = $obIPropValues->getValues();

        Tools::getFieldImageData(
            $arSection,
            ['PICTURE'],
            Tools::IPROPERTY_ENTITY_SECTION
        );

        return $arSection;
    }

    protected function getSections($iSectionId)
    {
        if ($iSectionId <= 0)
            return [];

        $arFilter = [
            'IBLOCK_ID' => $this->arParams['IBLOCK_ID'],
            'SECTION_ID' => $iSectionId
        ];

        if ($this->arParams['ONLY_ACTIVE'] == 'Y') {
            $arFilter['ACTIVE'] = 'Y';
            $arFilter['GLOBAL_ACTIVE'] = 'Y';
        }

        $rsSections = CIBlockSection::GetList(
            ['SORT' => 'ASC', 'ID' => 'ASC'],
            $arFilter,
            false,
            false,
            ['nTopCount' => $this->arParams['SECTIONS_COUNT']]
        );

        $arSections = [];

        while ($arSection = $rsSections->GetNext(true, false)) {
            $arSection['ITEMS'] = $this->getItems($arSection['ID']);

            if (empty($arSection['ITEMS'])) continue;

            $arSections[] = $arSection;
        }

        return $arSections;
    }

    public function getItems($iSectionId)
    {
        $arFilter = [
            'IBLOCK_ID' => $this->arParams['IBLOCK_ID'],
            'SECTION_ID' => $iSectionId
        ];

        if ($this->arParams['ONLY_ACTIVE'] == 'Y')
            $arFilter['ACTIVE'] = 'Y';

        if ($this->arParams['CHECK_DATES'] == 'Y')
            $arFilter['ACTIVE_DATE'] = 'Y';

        if ($this->arParams['CHECK_PERMISSIONS'] == 'Y')
            $arFilter['CHECK_PERMISSIONS'] = 'Y';

        $rsItems = \CIBlockElement::GetList(
            ['SORT' => 'ASC', 'ID' => 'ASC'],
            $arFilter,
            false,
            ['nTopCount' => $this->arParams['ELEMENTS_COUNT']]
        );

        $arItems = [];

        while ($obItem = $rsItems->GetNextElement(true, false)) {
            $arItem = $obItem->GetFields();
            $arItem['PROPERTIES'] = $obItem->GetProperties();

            foreach (['FROM', 'TO'] as $sDate) {
                if (!empty($this->arParams['ACTIVE_DATE_FORMAT']) && strlen($arItem['ACTIVE_' . $sDate]) > 0)
                    $arItem['DISPLAY_ACTIVE_' . $sDate] = \CIBlockFormatProperties::DateFormat($this->arParams['ACTIVE_DATE_FORMAT'], MakeTimeStamp($arItem['ACTIVE_' . $sDate], CSite::GetDateFormat()));
                else
                    $arItem['DISPLAY_ACTIVE_' . $sDate] = '';
            }

            $obIPropValues = new Bitrix\Iblock\InheritedProperty\ElementValues($arItem['IBLOCK_ID'], $arItem['ID']);
            $arItem['IPROPERTY_VALUES'] = $obIPropValues->getValues();

            Tools::getFieldImageData(
                $arItem,
                ['PREVIEW_PICTURE', 'DETAIL_PICTURE'],
                Tools::IPROPERTY_ENTITY_ELEMENT
            );

            $this->addElementControls($arItem);

            $arItems[] = $arItem;
        }

        return $arItems;
    }

    /**
     * Добавление элементов управления
     * @param $arItem
     * @return bool
     */
    public function addElementControls(&$arItem)
    {
        if (!$arItem['IBLOCK_ID'] || !$arItem['ID']) return false;

        $arButtons = CIBlock::GetPanelButtons(
            $arItem['IBLOCK_ID'],
            $arItem['ID'],
            0,
            array('SECTION_BUTTONS' => false, 'SESSID' => false)
        );

        $arItem['EDIT_LINK'] = $arButtons['edit']['edit_element']['ACTION_URL'];
        $arItem['DELETE_LINK'] = $arButtons['edit']['delete_element']['ACTION_URL'];
        $arItem['CONTROL_ID'] = $this->getEditAreaId($arItem['ID']);
    }

    /**
     * Добавляем кнопки добавления|редактирования|удаления для элементов и разделов инфоблока
     */
    public function addAdminButtons()
    {
        global $APPLICATION;
        if ($APPLICATION->GetShowIncludeAreas() && Loader::includeModule('iblock')) {
            $arButtons = CIBlock::GetPanelButtons(
                $this->arResult['IBLOCK_ID'],
                0,
                $this->arResult['ID'],
                array('SECTION_BUTTONS' => true)
            );

            $this->addIncludeAreaIcons(CIBlock::GetComponentMenu($APPLICATION->GetPublicShowMode(), $arButtons));
        }
    }
}