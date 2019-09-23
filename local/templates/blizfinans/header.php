<?
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
	die();

use \Bitrix\Main\Page\Asset;

Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/css/styles.css');


CJSCore::Init(array("jquery"));
Asset::getInstance()->addJs( SITE_TEMPLATE_PATH . '/js/addon.js');



if (CMain::IsHTTPS()) {
	$siteUrl = "https://".SITE_SERVER_NAME;	
} else {
	$siteUrl =  "http://".SITE_SERVER_NAME;	
}



	

?><!DOCTYPE html>
<html lang="ru" prefix="og: https://ogp.me/ns#">
<head>
	<title><?$APPLICATION->ShowTitle();?></title>

	<?$APPLICATION->ShowHead();?>
	

	<link href="/local/templates/blizfinans/css/styles.css?nc=<?=filectime($_SERVER['DOCUMENT_ROOT'].'/local/templates/blizfinans/css/styles.css')?>" rel="preload" as="style">
	<link href="/local/templates/blizfinans/js/scripts.js?nc=<?=filectime( $_SERVER['DOCUMENT_ROOT'].'/local/templates/blizfinans/js/scripts.js')?>"  rel="preload" as="script">

	<link href="/local/templates/blizfinans/img/favicon.png" rel="apple-touch-icon-precomposed">

	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="theme-color" content="#ffffff">

	<meta property="og:locale" content="ru_RU">
	<meta property="og:url" content="<?=$siteUrl?>/">
	<meta property="og:type" content="website">
	<meta property="og:title" content="<?$APPLICATION->ShowProperty("og:title");?>">
	<meta property="og:description" content="<?$APPLICATION->ShowProperty("og:description");?>">

	<meta property="og:site_name" content="<?$APPLICATION->ShowProperty("og:site_name");?>">
	<meta property="og:image" content="<?=$siteUrl?><?$APPLICATION->ShowProperty("og:image");?>">
	<meta property="og:image:secure_url" content="<?=$siteUrl?><?$APPLICATION->ShowProperty("og:image");?>">
	<meta property="og:image:width" content="<?$APPLICATION->ShowProperty("og:image:width");?>">
	<meta property="og:image:height" content="<?$APPLICATION->ShowProperty("og:image:height");?>">

	<meta name="twitter:card" content="<?$APPLICATION->ShowProperty("twitter:card");?>">
	<meta name="twitter:description" content="<?$APPLICATION->ShowProperty("twitter:description");?>">
	<meta name="twitter:title" content="<?$APPLICATION->ShowProperty("twitter:title");?>">
	<meta name="twitter:image" content="<?=$siteUrl?><?$APPLICATION->ShowProperty("twitter:image");?>">

	
</head>
<body>
	<div id="panel">
		<?$APPLICATION->ShowPanel();?>
	</div>
	
<header class="header">

		<div class="center">

			<div class="header__logo">

				<a href="/">
					<img src="/local/templates/blizfinans/img/logo.svg" alt="" width="240" height="50">
				</a>

			</div>

			<div class="visible-md">

				<button type="button" data-modal="lk" class="header__lk-ico button" aria-label="Личный кабинет">
					<svg class="icon-bx-log-in visible-md" width="15" height="15" viewBox="0 0 15 15">
						<use xlink:href="/local/templates/blizfinans/images/sprite.svg#bx-log-in"/>
					</svg>
				</button>

				<button class="button btn-menu-toggle" type="button">
					<span>открыть меню</span>
				</button>

			</div>

			<div class="header__right">

				<button class="button btn-menu-toggle btn-menu-toggle--close" type="button">
					<span>закрыть меню</span>
				</button>

				<nav class="header__menu">


						<?$APPLICATION->IncludeComponent(
							"bitrix:menu",
							"top",
							Array(
								"ALLOW_MULTI_SELECT" => "N",
								"CHILD_MENU_TYPE" => "",
								"DELAY" => "N",
								"MAX_LEVEL" => "1",
								"MENU_CACHE_GET_VARS" => array(""),
								"MENU_CACHE_TIME" => "360000",
								"MENU_CACHE_TYPE" => "A",
								"MENU_CACHE_USE_GROUPS" => "N",
								"ROOT_MENU_TYPE" => "top",
								"USE_EXT" => "N",
								"CACHE_SELECTED_ITEMS" => "N",
							)
						);?>	
						
						

				</nav>

				<div class="header__tel">

					<a href="tel:88007006202">
						<svg class="icon-bxs-phone-call" width="19" height="19" viewBox="0 0 19 19">
							<use xlink:href="/local/templates/blizfinans/images/sprite.svg#bxs-phone-call"/>
						</svg>
						8 800 700 62 02
					</a>

				</div>

				<div class="header__lk">

					<button type="button" data-modal="lk" class="btn btn--tealish">
						<span>Личный кабинет</span>
					</button>

				</div>

			</div>

		</div>

	</header>

	<main class="main">



	