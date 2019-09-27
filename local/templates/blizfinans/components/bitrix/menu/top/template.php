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

if (!$arResult) return;
?>

<ul class="menu">
    <? foreach ($arResult as $n => $arItem): ?>
        <li class="menu__item<? if ($arItem["SELECTED"]): ?> menu__item--active<? endif ?>">
            <a class="menu__link" href="<?= $arItem['LINK'] ?>"><?= $arItem['TEXT'] ?></a>
        </li>
    <? endforeach ?>
</ul>