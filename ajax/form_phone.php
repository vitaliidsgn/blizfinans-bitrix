<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

use Bitrix\Main\Application;

CModule::IncludeModule("form");



$request = Application::getInstance()->getContext()->getRequest();
$arPost = $request->getPostList()->toArray();


if ( $arPost["WEB_FORM_ID"] ) {

	
	if ($RESULT_ID = CFormResult::Add($arPost["WEB_FORM_ID"], $arPost))
	{
		CFormResult::Mail($RESULT_ID);
		echo "Сообщение успешно отправлено.<br/>Мы перезвоним Вам в ближайшее время";
	}
	else
	{
		//global $strError;
		//echo $strError;
		echo "Произошла ошибка. Попробуйте позднее.";

	}
	
}



