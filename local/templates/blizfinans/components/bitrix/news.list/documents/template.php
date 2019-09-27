<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);

if (empty($arResult['ITEMS'])) return;
?>

<ul class="documents">
    <? foreach ($arResult['ITEMS'] as $arItem): ?>
        <?
        $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem['IBLOCK_ID'], 'ELEMENT_EDIT'));
        $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem['IBLOCK_ID'], 'ELEMENT_DELETE'), ['CONFIRM' => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')]);

        $arFile = pathinfo($arItem['DISPLAY_PROPERTIES']['FILE']['FILE_VALUE']['SRC']);
        ?>

        <li id="<?= $this->GetEditAreaId($arItem['ID']); ?>"
            class="documents__item"
            data-size="<?= formatSizeUnits($arItem['DISPLAY_PROPERTIES']['FILE']['FILE_VALUE']['FILE_SIZE']); ?>"
            data-type="<?= strtoupper($arFile['extension']); ?>">
            <a class="documents__link" href="<?= $arItem['DISPLAY_PROPERTIES']['FILE']['FILE_VALUE']['SRC']; ?>"
               target="_blank">
                <?= $arItem['NAME']; ?>
            </a>
        </li>
    <? endforeach; ?>
</ul>