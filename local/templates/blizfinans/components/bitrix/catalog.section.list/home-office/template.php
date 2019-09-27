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

<article class="loan-in-office">
    <div class="center">
        <div class="loan-in-office__content">
            <h1 class="loan-in-office__title h2">Оформите займ в ближайшем офисе</h1>

            <p class="loan-in-office__intro">
                Для оформления займа выберите один из офисов <br>в Вашем регионе
            </p>

            <ul class="loan-in-office__list">
                <? foreach ($arResult['SECTIONS'] as $arSection): ?>
                    <?
                    $this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'SECTION_EDIT'));
                    $this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'SECTION_DELETE'));
                    ?>
                    <li id="<?= $this->GetEditAreaId($arSection['ID']); ?>">
                        <a href="<?= $arSection['SECTION_PAGE_URL']; ?>"><?= $arSection['NAME']; ?></a>
                    </li>
                <? endforeach; ?>
            </ul>

            <div class="loan-in-office__foot">
                <a href="<?= CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'LIST_PAGE_URL'); ?>" class="btn btn--red"><span>Адреса офисов</span></a>
                <a href="/" class="loan-in-office__info">Не нашли подходящего офиса?</a>
            </div>
        </div>
    </div>

    <div class="loan-in-office__bg">
        <picture>
            <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/loan-in-office/img--mobile.svg" media="(max-width: 1199px)">
            <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/loan-in-office/img.svg">
            <img src="<?= SITE_TEMPLATE_PATH; ?>/img/loan-in-office/img.svg" alt="Оформите займ в ближайшем офисе">
        </picture>
    </div>
</article>