<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

use Bitrix\Main\Application;

CModule::IncludeModule("form");



$request = Application::getInstance()->getContext()->getRequest();
$phone = $request->getPost("phone");

if ( $phone ) {

	$WEB_FORM_ID = 1;

	$arValues = array(
		"form_text_1"	=> $phone
	);
	
	
	if ($RESULT_ID = CFormResult::Add($WEB_FORM_ID, $arValues))
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



