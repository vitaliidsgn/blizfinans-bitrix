<?
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php');
$APPLICATION->SetTitle('Деньги в нужное время');
?>

    <aside class="first-screen">
        <div class="first-screen__img">
            <picture>
                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--320@1x.webp 1x, <?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--320@2x.webp 2x" media="(max-width: 320px)" type="image/webp">
                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--360@1x.webp 1x, <?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--360@2x.webp 2x" media="(max-width: 360px)" type="image/webp">
                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--414@1x.webp 1x, <?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--414@2x.webp 2x" media="(max-width: 414px)" type="image/webp">
                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--768@1x.webp 1x, <?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--768@2x.webp 2x" media="(max-width: 768px)" type="image/webp">
                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--1336@1x.webp 1x, <?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--1336@2x.webp 2x" media="(max-width: 1336px)" type="image/webp">
                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--1440@1x.webp 1x, <?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--1440@2x.webp 2x" media="(max-width: 1400px)" type="image/webp">
                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--1920@1x.webp 1x, <?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--1920@2x.webp 2x" type="image/webp">

                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--320@1x.jpg 1x, <?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--320@2x.jpg 2x" media="(max-width: 320px)">
                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--360@1x.jpg 1x, <?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--360@2x.jpg 2x" media="(max-width: 360px)">
                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--414@1x.jpg 1x, <?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--414@2x.jpg 2x" media="(max-width: 414px)">
                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--768@1x.jpg 1x, <?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--768@2x.jpg 2x" media="(max-width: 768px)">
                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--1336@1x.jpg 1x, <?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--1336@2x.jpg 2x" media="(max-width: 1336px)">
                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--1440@1x.jpg 1x, <?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--1440@2x.jpg 2x" media="(max-width: 1400px)">
                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--1920@1x.jpg 1x, <?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--1920@2x.jpg 2x">

                <img src="<?= SITE_TEMPLATE_PATH; ?>/img/first-screen/photo--1440@1x.jpg" alt="Деньги в нужное время">
            </picture>
        </div>

        <div class="center">
            <h1 class="first-screen__title h1">
                <? $APPLICATION->ShowTitle(false); ?>
            </h1>

            <div class="first-screen__calculator">
                <? $APPLICATION->IncludeComponent(
                    "bitrix:news.list",
                    "calculator",
                    array(
                        "COMPONENT_TEMPLATE" => "calculator",
                        "IBLOCK_TYPE" => "CALCULATOR",
                        "IBLOCK_ID" => "6",
                        "NEWS_COUNT" => "1",
                        "SORT_BY1" => "SORT",
                        "SORT_ORDER1" => "ASC",
                        "SORT_BY2" => "ID",
                        "SORT_ORDER2" => "ASC",
                        "FILTER_NAME" => "",
                        "FIELD_CODE" => array(),
                        "PROPERTY_CODE" => array("RATE"),
                        "CHECK_DATES" => "Y",
                        "DETAIL_URL" => "",
                        "AJAX_MODE" => "N",
                        "AJAX_OPTION_JUMP" => "N",
                        "AJAX_OPTION_STYLE" => "N",
                        "AJAX_OPTION_HISTORY" => "N",
                        "AJAX_OPTION_ADDITIONAL" => "",
                        "CACHE_TYPE" => "A",
                        "CACHE_TIME" => "604800",
                        "CACHE_FILTER" => "N",
                        "CACHE_GROUPS" => "N",
                        "PREVIEW_TRUNCATE_LEN" => "",
                        "ACTIVE_DATE_FORMAT" => "d.m.Y",
                        "SET_TITLE" => "N",
                        "SET_BROWSER_TITLE" => "N",
                        "SET_META_KEYWORDS" => "N",
                        "SET_META_DESCRIPTION" => "N",
                        "SET_LAST_MODIFIED" => "N",
                        "INCLUDE_IBLOCK_INTO_CHAIN" => "N",
                        "ADD_SECTIONS_CHAIN" => "N",
                        "HIDE_LINK_WHEN_NO_DETAIL" => "N",
                        "PARENT_SECTION" => "",
                        "PARENT_SECTION_CODE" => "",
                        "INCLUDE_SUBSECTIONS" => "N",
                        "STRICT_SECTION_CHECK" => "N",
                        "PAGER_TEMPLATE" => ".default",
                        "DISPLAY_TOP_PAGER" => "N",
                        "DISPLAY_BOTTOM_PAGER" => "N",
                        "PAGER_TITLE" => "Новости",
                        "PAGER_SHOW_ALWAYS" => "N",
                        "PAGER_DESC_NUMBERING" => "N",
                        "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
                        "PAGER_SHOW_ALL" => "N",
                        "PAGER_BASE_LINK_ENABLE" => "N",
                        "SET_STATUS_404" => "N",
                        "SHOW_404" => "N",
                        "MESSAGE_404" => ""
                    ),
                    false
                ); ?>
            </div>
        </div>
    </aside>


<? $APPLICATION->IncludeComponent(
    "bitrix:news.list",
    "steps",
    array(
        "COMPONENT_TEMPLATE" => "steps",
        "IBLOCK_TYPE" => "info",
        "IBLOCK_ID" => "5",
        "NEWS_COUNT" => "4",
        "SORT_BY1" => "SORT",
        "SORT_ORDER1" => "ASC",
        "SORT_BY2" => "ID",
        "SORT_ORDER2" => "ASC",
        "FILTER_NAME" => "",
        "FIELD_CODE" => array(),
        "PROPERTY_CODE" => array(),
        "CHECK_DATES" => "Y",
        "DETAIL_URL" => "",
        "AJAX_MODE" => "N",
        "AJAX_OPTION_JUMP" => "N",
        "AJAX_OPTION_STYLE" => "N",
        "AJAX_OPTION_HISTORY" => "N",
        "AJAX_OPTION_ADDITIONAL" => "",
        "CACHE_TYPE" => "A",
        "CACHE_TIME" => "604800",
        "CACHE_FILTER" => "N",
        "CACHE_GROUPS" => "N",
        "PREVIEW_TRUNCATE_LEN" => "",
        "ACTIVE_DATE_FORMAT" => "d.m.Y",
        "SET_TITLE" => "N",
        "SET_BROWSER_TITLE" => "N",
        "SET_META_KEYWORDS" => "N",
        "SET_META_DESCRIPTION" => "N",
        "SET_LAST_MODIFIED" => "N",
        "INCLUDE_IBLOCK_INTO_CHAIN" => "N",
        "ADD_SECTIONS_CHAIN" => "N",
        "HIDE_LINK_WHEN_NO_DETAIL" => "N",
        "PARENT_SECTION" => "",
        "PARENT_SECTION_CODE" => "",
        "INCLUDE_SUBSECTIONS" => "N",
        "STRICT_SECTION_CHECK" => "N",
        "PAGER_TEMPLATE" => ".default",
        "DISPLAY_TOP_PAGER" => "N",
        "DISPLAY_BOTTOM_PAGER" => "N",
        "PAGER_TITLE" => "Новости",
        "PAGER_SHOW_ALWAYS" => "N",
        "PAGER_DESC_NUMBERING" => "N",
        "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
        "PAGER_SHOW_ALL" => "N",
        "PAGER_BASE_LINK_ENABLE" => "N",
        "SET_STATUS_404" => "N",
        "SHOW_404" => "N",
        "MESSAGE_404" => ""
    ),
    false
); ?>

    <article class="loan-in-lk">

        <div class="center">

            <div class="loan-in-lk__content">

                <h1 class="loan-in-lk__title h2">
                    Отправьте заявку <br>в личном кабинете
                </h1>

                <p class="loan-in-lk__intro">
                    Получите деньги уже через несколько минут!
                </p>

                <div class="loan-in-lk__btn">

                    <a href="/" class="btn btn--red">
                        <span>Получить деньги</span>
                    </a>

                </div>

            </div>

        </div>

        <div class="loan-in-lk__bg">

            <picture>

                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/loan-in-lk/img.webp 1x, <?= SITE_TEMPLATE_PATH; ?>/img/loan-in-lk/img@2x.webp 2x" type="image/webp">

                <source srcset="<?= SITE_TEMPLATE_PATH; ?>/img/loan-in-lk/img.png 1x, <?= SITE_TEMPLATE_PATH; ?>/img/loan-in-lk/img@2x.png 2x">

                <img src="<?= SITE_TEMPLATE_PATH; ?>/img/loan-in-lk/img.png" alt="Отправьте заявку в личном кабинете">

            </picture>

        </div>

    </article>

<? $APPLICATION->IncludeComponent(
    "bitrix:form.result.new",
    "loan",
    array(
        "CACHE_TIME" => "36000000",
        "CACHE_TYPE" => "A",
        "CHAIN_ITEM_LINK" => "",
        "CHAIN_ITEM_TEXT" => "",
        "EDIT_URL" => "result_edit.php",
        "IGNORE_CUSTOM_TEMPLATE" => "N",
        "LIST_URL" => "result_list.php",
        "SEF_MODE" => "N",
        "SUCCESS_URL" => "",
        "USE_EXTENDED_ERRORS" => "N",
        "VARIABLE_ALIASES" => array(
            "RESULT_ID" => "RESULT_ID",
            "WEB_FORM_ID" => "WEB_FORM_ID",
        ),
        "WEB_FORM_ID" => "1"
    ),
    false
); ?>

<? $APPLICATION->IncludeComponent(
    "bitrix:catalog.section.list",
    "home-office",
    array(
        "COMPONENT_TEMPLATE" => "home-office",
        "IBLOCK_TYPE" => "info",
        "IBLOCK_ID" => "3",
        "SECTION_ID" => "",
        "SECTION_CODE" => "",
        "COUNT_ELEMENTS" => "N",
        "TOP_DEPTH" => "1",
        "SECTION_FIELDS" => array(),
        "SECTION_USER_FIELDS" => array(),
        "FILTER_NAME" => "",
        "SECTION_URL" => "",
        "CACHE_TYPE" => "A",
        "CACHE_TIME" => "604800",
        "CACHE_GROUPS" => "N",
        "CACHE_FILTER" => "N",
        "ADD_SECTIONS_CHAIN" => "N"
    ),
    false
); ?>

<? $APPLICATION->IncludeComponent(
    "bitrix:main.include",
    "",
    array(
        "AREA_FILE_SHOW" => "file",
        "AREA_FILE_SUFFIX" => "",
        "EDIT_TEMPLATE" => "",
        "PATH" => "/includes/timer.php"
    ), false
); ?>

<? $APPLICATION->IncludeComponent(
    "bitrix:catalog.sections.top",
    "faq",
    array(
        "COMPONENT_TEMPLATE" => "faq",
        "IBLOCK_TYPE" => "info",
        "IBLOCK_ID" => "4",
        "SECTION_FIELDS" => array(),
        "SECTION_USER_FIELDS" => array(),
        "SECTION_SORT_FIELD" => "sort",
        "SECTION_SORT_ORDER" => "asc",
        "ELEMENT_SORT_FIELD" => "sort",
        "ELEMENT_SORT_ORDER" => "asc",
        "ELEMENT_SORT_FIELD2" => "id",
        "ELEMENT_SORT_ORDER2" => "asc",
        "FILTER_NAME" => "",
        "SECTION_COUNT" => "10",
        "ELEMENT_COUNT" => "20",
        "LINE_ELEMENT_COUNT" => "3",
        "PROPERTY_CODE" => array(),
        "SECTION_URL" => "",
        "DETAIL_URL" => "",
        "BASKET_URL" => "/personal/basket.php",
        "ACTION_VARIABLE" => "action",
        "PRODUCT_ID_VARIABLE" => "id",
        "PRODUCT_QUANTITY_VARIABLE" => "quantity",
        "PRODUCT_PROPS_VARIABLE" => "prop",
        "SECTION_ID_VARIABLE" => "SECTION_ID",
        "CACHE_TYPE" => "A",
        "CACHE_TIME" => "604800",
        "CACHE_FILTER" => "N",
        "CACHE_GROUPS" => "N",
        "DISPLAY_COMPARE" => "N",
        "USE_MAIN_ELEMENT_SECTION" => "N",
        "PRICE_CODE" => array(),
        "USE_PRICE_COUNT" => "N",
        "SHOW_PRICE_COUNT" => "1",
        "PRICE_VAT_INCLUDE" => "Y",
        "PRODUCT_PROPERTIES" => array(),
        "USE_PRODUCT_QUANTITY" => "N"
    ),
    false
); ?>

<? $APPLICATION->IncludeComponent(
    "bitrix:news.list",
    "feedback",
    array(
        "ACTIVE_DATE_FORMAT" => "d.m.Y",
        "ADD_SECTIONS_CHAIN" => "N",
        "AJAX_MODE" => "N",
        "AJAX_OPTION_ADDITIONAL" => "",
        "AJAX_OPTION_HISTORY" => "N",
        "AJAX_OPTION_JUMP" => "N",
        "AJAX_OPTION_STYLE" => "Y",
        "CACHE_FILTER" => "N",
        "CACHE_GROUPS" => "N",
        "CACHE_TIME" => "36000000",
        "CACHE_TYPE" => "A",
        "CHECK_DATES" => "N",
        "DETAIL_URL" => "",
        "DISPLAY_BOTTOM_PAGER" => "N",
        "DISPLAY_DATE" => "Y",
        "DISPLAY_NAME" => "Y",
        "DISPLAY_PICTURE" => "Y",
        "DISPLAY_PREVIEW_TEXT" => "Y",
        "DISPLAY_TOP_PAGER" => "N",
        "FIELD_CODE" => array(),
        "FILTER_NAME" => "",
        "HIDE_LINK_WHEN_NO_DETAIL" => "N",
        "IBLOCK_ID" => "1",
        "IBLOCK_TYPE" => "info",
        "INCLUDE_IBLOCK_INTO_CHAIN" => "N",
        "INCLUDE_SUBSECTIONS" => "N",
        "MESSAGE_404" => "",
        "NEWS_COUNT" => "10",
        "PAGER_BASE_LINK_ENABLE" => "N",
        "PAGER_DESC_NUMBERING" => "N",
        "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
        "PAGER_SHOW_ALL" => "N",
        "PAGER_SHOW_ALWAYS" => "N",
        "PAGER_TEMPLATE" => ".default",
        "PAGER_TITLE" => "Новости",
        "PARENT_SECTION" => "",
        "PARENT_SECTION_CODE" => "",
        "PREVIEW_TRUNCATE_LEN" => "",
        "PROPERTY_CODE" => array(
            "INFO"
        ),
        "SET_BROWSER_TITLE" => "N",
        "SET_LAST_MODIFIED" => "N",
        "SET_META_DESCRIPTION" => "N",
        "SET_META_KEYWORDS" => "N",
        "SET_STATUS_404" => "N",
        "SET_TITLE" => "N",
        "SHOW_404" => "N",
        "SORT_BY1" => "SORT",
        "SORT_BY2" => "ID",
        "SORT_ORDER1" => "ASC",
        "SORT_ORDER2" => "ASC",
        "STRICT_SECTION_CHECK" => "N",
        "COMPONENT_TEMPLATE" => ".default"
    ),
    false
); ?>


<? $APPLICATION->IncludeComponent(
    "bitrix:form.result.new",
    "help",
    array(
        "CACHE_TIME" => "36000000",
        "CACHE_TYPE" => "A",
        "CHAIN_ITEM_LINK" => "",
        "CHAIN_ITEM_TEXT" => "",
        "EDIT_URL" => "result_edit.php",
        "IGNORE_CUSTOM_TEMPLATE" => "N",
        "LIST_URL" => "result_list.php",
        "SEF_MODE" => "N",
        "SUCCESS_URL" => "",
        "USE_EXTENDED_ERRORS" => "N",
        "VARIABLE_ALIASES" => array(
            "RESULT_ID" => "RESULT_ID",
            "WEB_FORM_ID" => "WEB_FORM_ID",
        ),
        "WEB_FORM_ID" => "1"
    ),
    false
); ?>

<? require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/footer.php'); ?>