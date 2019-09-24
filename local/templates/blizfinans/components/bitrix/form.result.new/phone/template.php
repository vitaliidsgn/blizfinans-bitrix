<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
?>

<input type="hidden" name="WEB_FORM_ID" value="<?=$arResult["arForm"]["ID"]?>">

<div class="form-input-note"></div>
<?foreach ($arResult["QUESTIONS"] as $arQuestion):?>
	<input  placeholder="+7 ___ ___ __ __" type="tel" class="input inputmask inputmask--phone" required="required" name="form_<?=$arQuestion["STRUCTURE"][0]["FIELD_TYPE"]?>_<?=$arQuestion["STRUCTURE"][0]["ID"]?>" value="">
<?endforeach?>	
