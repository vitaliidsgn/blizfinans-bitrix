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

if (empty($arResult['SECTIONS'])) return;
?>

<ul class="office-list">
    <? foreach ($arResult['SECTIONS'] as $arSection): ?>
        <?
        $this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'SECTION_EDIT'));
        $this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'SECTION_DELETE'));
        ?>
        <li id="<?= $this->GetEditAreaId($arSection['ID']); ?>">
            <? if ($arSection['CODE'] == $arParams['CURRENT_SECTION_CODE']): ?>
                <?= $arSection['NAME']; ?>
            <? else: ?>
                <a href="<?= $arSection['SECTION_PAGE_URL']; ?>"><?= $arSection['NAME']; ?></a>
            <? endif; ?>
        </li>
    <? endforeach; ?>
</ul>