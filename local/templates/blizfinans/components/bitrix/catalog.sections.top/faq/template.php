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

<section class="faq">
    <div class="center">
        <h2 class="faq__title h2">Погашение займа</h2>

        <div class="faq__box swiper-container swiper-container--faq">
            <ul class="faq__nav hidden-sm">
                <? foreach ($arResult['SECTIONS'] as $iKey => $arSection): ?>
                    <?
                    $this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'SECTION_EDIT'));
                    $this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'SECTION_DELETE'));
                    ?>
                    <li id="<?= $this->GetEditAreaId($arSection['ID']); ?>" class="faq__nav-item">
                        <a href="#faq-<?= $arSection['ID']; ?>" class="<?= classesToStr([
                            'faq__nav-link',
                            'faq__nav-link--active' => !$iKey,
                        ]); ?>">
                            <? if (!empty($arSection['DESCRIPTION'])): ?>
                                <span class="faq__nav-ico"><?= $arSection['DESCRIPTION']; ?></span>
                            <? endif; ?>

                            <?= $arSection['NAME']; ?>
                        </a>
                    </li>
                <? endforeach; ?>
            </ul>

            <div class="faq__body swiper-wrapper">
                <? foreach ($arResult['SECTIONS'] as $iKey => $arSection): ?>
                    <div id="faq-<?= $arSection['ID']; ?>" class="<?= classesToStr([
                        'faq__block',
                        'swiper-slide',
                        'visuallyhidden' => $iKey > 0,
                        'faq__visuallyhidden' => $iKey > 0
                    ]); ?>">

                        <h3 class="faq__nav-item visuallyhidden faq__visuallyhidden">
                            <? if (!empty($arSection['DESCRIPTION'])): ?>
                                <span class="faq__nav-ico"><?= $arSection['DESCRIPTION']; ?></span>
                            <? endif; ?>

                            <?= $arSection['NAME']; ?>
                        </h3>

                        <? foreach ($arSection['ITEMS'] as $arItem): ?>
                            <?
                            $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem['IBLOCK_ID'], 'ELEMENT_EDIT'));
                            $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem['IBLOCK_ID'], 'ELEMENT_DELETE'), ['CONFIRM' => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')]);
                            ?>
                            <article id="<?= $this->GetEditAreaId($arItem['ID']); ?>" class="faq__item">
                                <h4 class="faq__question h4"><?= $arItem['NAME']; ?></h4>

                                <div class="faq__answer">
                                    <? if ($arItem['PREVIEW_TEXT_TYPE'] === 'html'): ?>
                                        <?= $arItem['PREVIEW_TEXT']; ?>
                                    <? else: ?>
                                        <p><?= $arItem['PREVIEW_TEXT']; ?></p>
                                    <? endif; ?>
                                </div>
                            </article>
                        <? endforeach; ?>
                    </div>
                <? endforeach; ?>
            </div>
        </div>
    </div>
</section>