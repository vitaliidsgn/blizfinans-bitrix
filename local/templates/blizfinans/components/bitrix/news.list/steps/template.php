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

<aside class="it-we">
    <div class="center">
        <h2 class="it-we__title h2">Всего 4 шага</h2>

        <p class="it-we__intro">Индивидуальный подход к каждому клиенту.</p>

        <ul class="it-we__list">
            <? foreach ($arResult['ITEMS'] as $arItem): ?>
                <?
                $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem['IBLOCK_ID'], 'ELEMENT_EDIT'));
                $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem['IBLOCK_ID'], 'ELEMENT_DELETE'), ['CONFIRM' => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')]);
                ?>
                <li id="<?= $this->GetEditAreaId($arItem['ID']); ?>" class="it-we__item">
                    <? if (!empty($arItem['PREVIEW_TEXT'])): ?>
                        <span class="it-we__ico">
                            <?= $arItem['PREVIEW_TEXT']; ?>
                        </span>
                    <? endif; ?>

                    <span class="it-we__text"><?= $arItem['NAME']; ?></span>
                </li>
            <? endforeach; ?>
        </ul>
    </div>
</aside>