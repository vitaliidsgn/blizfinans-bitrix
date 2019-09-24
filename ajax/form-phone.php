<?
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

use Bitrix\Main\Application;

$request = Application::getInstance()->getContext()->getRequest();
$arPost = $request->getPostList()->toArray();

if (!empty($arPost['WEB_FORM_ID']) && \Bitrix\Main\Loader::includeModule('form')) {
    $iResultId = CFormResult::Add($arPost['WEB_FORM_ID'], $arPost);

    if ($iResultId) {
        CFormResult::Mail($iResultId);
        echo 'Сообщение успешно отправлено.<br/>Мы перезвоним Вам в ближайшее время';
    } else {
        echo 'Произошла ошибка. Попробуйте позднее.';
    }
}

require_once $_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/epilog_after.php';