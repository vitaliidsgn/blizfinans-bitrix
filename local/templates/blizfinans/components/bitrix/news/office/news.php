<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
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

$arSection = \Bitrix\Iblock\SectionTable::getRow([
    'order' => ['SORT' => 'ASC', 'ID' => 'ASC'],
    'filter' => [
        'IBLOCK_ID' => $arParams['IBLOCK_ID'],
        'ACTIVE' => 'Y'
    ],
    'select' => ['ID', 'CODE'],
    'cache' => ['ttl' => $arParams['CACHE_TIME']]
]);

$arResult['VARIABLES']['SECTION_CODE'] = $arSection['CODE'];

include 'section.php';