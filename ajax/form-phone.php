<?
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

use Bitrix\Main\Application;

$request = Application::getInstance()->getContext()->getRequest();
$arPost = $request->getPostList()->toArray();

$arResult = ['success' => false];

if (!empty($arPost['WEB_FORM_ID']) && \Bitrix\Main\Loader::includeModule('form')) {
    $iResultId = CFormResult::Add($arPost['WEB_FORM_ID'], $arPost);

    if ($iResultId) {
        CFormResult::Mail($iResultId);

        $arResult = [
            'success' => true,
            'message' => 'Сообщение успешно отправлено.<br/>Мы перезвоним Вам в ближайшее время'
        ];
    } else {
        $arResult = [
            'success' => false,
            'error' => 'Произошла ошибка. Попробуйте еще раз позже.'
        ];
    }
}

header('Content-type: application/json; charset=utf-8');
echo json_encode($arResult);

require_once $_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/epilog_after.php';