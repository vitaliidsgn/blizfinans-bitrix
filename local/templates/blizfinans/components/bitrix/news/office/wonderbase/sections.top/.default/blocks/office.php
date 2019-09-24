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
/** @var array $arItem */
?>

<p id="<?= $arItem['CONTROL_ID']; ?>" class="office-city__address">
    <?= $arItem['NAME']; ?>

    <? if (!empty($arItem['PROPERTIES']['PHONE']['VALUE'])): ?>
        <br>

        тел.

        <? foreach ($arItem['PROPERTIES']['PHONE']['VALUE'] as $sPhone): ?>
            <a href="tel:<?= clearPhone($sPhone); ?>"><?= $sPhone; ?></a>
        <? endforeach; ?>
    <? endif; ?>

    <? if (!empty($arItem['PROPERTIES']['COORDINATES']['VALUE'])): ?>
        <?
        $arCoordinates = explode(',', $arItem['PROPERTIES']['COORDINATES']['VALUE']);
        ?>

        <br>

        <button class="office-city__link button"
                type="button"
                data-lat="<?= $arCoordinates[0]; ?>"
                data-let="<?= $arCoordinates[1]; ?>">
            смотреть на карте
        </button>
    <? endif; ?>
</p>