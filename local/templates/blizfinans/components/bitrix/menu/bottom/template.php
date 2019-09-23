<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>

<ul>
<?foreach ($arResult as $n => $arItem):?>

	<li>
		<a href="<?=$arItem['LINK']?>"><?=$arItem['TEXT']?></a>
	</li>
	
<?endforeach?>
</ul>

<?endif;?>