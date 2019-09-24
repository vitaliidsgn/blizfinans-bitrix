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
?>

<? $APPLICATION->IncludeComponent(
    'bitrix:catalog.section.list',
    '',
    array(
        'IBLOCK_TYPE' => $arParams['IBLOCK_TYPE'],
        'IBLOCK_ID' => $arParams['IBLOCK_ID'],
        'SECTION_ID' => '',
        'SECTION_CODE' => '',
        'CACHE_TYPE' => $arParams['CACHE_TYPE'],
        'CACHE_TIME' => $arParams['CACHE_TIME'],
        'CACHE_GROUPS' => $arParams['CACHE_GROUPS'],
        'COUNT_ELEMENTS' => 'N',
        'TOP_DEPTH' => 1,
        'SECTION_URL' => $arResult['FOLDER'] . $arResult['URL_TEMPLATES']['section'],
        'SHOW_PARENT_NAME' => 'N',
        'HIDE_SECTION_NAME' => 'N',
        'ADD_SECTIONS_CHAIN' => $arParams['ADD_SECTIONS_CHAIN'],
        'CURRENT_SECTION_CODE' => $arResult['VARIABLES']['SECTION_CODE']
    ),
    $component,
    array('HIDE_ICONS' => 'Y')
); ?>

    <hr>

<? $APPLICATION->IncludeComponent(
    'wonderbase:sections.top',
    '',
    array(
        'IBLOCK_TYPE' => $arParams['IBLOCK_TYPE'],
        'IBLOCK_ID' => $arParams['IBLOCK_ID'],
        'SECTION_ID' => $arResult['VARIABLES']['SECTION_ID'],
        'SECTION_CODE' => $arResult['VARIABLES']['SECTION_CODE'],
        'CACHE_TYPE' => $arParams['CACHE_TYPE'],
        'CACHE_TIME' => $arParams['CACHE_TIME'],
        'CACHE_GROUPS' => $arParams['CACHE_GROUPS'],
        'SECTIONS_COUNT' => '100',
        'ELEMENTS_COUNT' => '100',
        'ONLY_ACTIVE' => 'Y',
        'CHECK_DATES' => $arParams['CHECK_DATES'],
        'CHECK_PERMISSIONS' => $arParams['USE_PERMISSIONS']
    ),
    $component,
    array('HIDE_ICONS' => 'Y')
); ?>