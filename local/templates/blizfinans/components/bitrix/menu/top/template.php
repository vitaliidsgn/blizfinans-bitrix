<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
<ul class="menu">
<?foreach ($arResult as $n => $arItem):?>

	<li class="menu__item<?if ($arItem["SELECTED"]):?> menu__item--active<?endif?>">
		<a class="menu__link" href="<?=$arItem['LINK']?>"><?=$arItem['TEXT']?></a>
	</li>
	
<?endforeach?>
</ul>

<?endif;?>