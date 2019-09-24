<?
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
	die();
?>

<? if (!\CSite::InDir(SITE_DIR . 'index.php')): ?>
        </div>
    </article>
<? endif; ?>

<? if ($APPLICATION->GetProperty('SHOW_TIMER') === 'Y'): ?>
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

    <hr class="hidden-md">
<? endif; ?>

<article class="why-we">
    <div class="center">
        <h1 class="why-we__title h3">
            <? $APPLICATION->IncludeComponent(
                "bitrix:main.include",
                "",
                Array(
                    "AREA_FILE_SHOW" => "file",
                    "AREA_FILE_SUFFIX" => "",
                    "EDIT_TEMPLATE" => "",
                    "PATH" => "/includes/index/why-we-header.php"
                ), false
            ); ?>
        </h1>

        <div class="why-we__text">
            <? $APPLICATION->IncludeComponent(
                "bitrix:main.include",
                "",
                Array(
                    "AREA_FILE_SHOW" => "file",
                    "AREA_FILE_SUFFIX" => "",
                    "EDIT_TEMPLATE" => "",
                    "PATH" => "/includes/index/why-we-text.php"
                ), false
            ); ?>
        </div>
    </div>
</article>

</main>

	<footer class="footer">

		<div class="center">

			<div class="footer__top">

				<div class="footer__left">

					<div class="footer__logo">

						<a href="/">
							<img src="/local/templates/blizfinans/img/logo.svg" alt="" width="240" height="50">
						</a>

					</div>

					<p class="footer__copyright hidden-md">
                        <? $APPLICATION->IncludeComponent(
                            "bitrix:main.include",
                            "",
                            Array(
                                "AREA_FILE_SHOW" => "file",
                                "AREA_FILE_SUFFIX" => "",
                                "EDIT_TEMPLATE" => "",
                                "PATH" => "/includes/footer/copyright.php"
                            ), false
                        ); ?>
                    </p>
				</div>

				<div class="footer__right">

					<div class="footer__menu">

						<h3 class="footer__menu-head">
							Меню
						</h3>


						<?$APPLICATION->IncludeComponent(
							"bitrix:menu",
							"bottom",
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
						

					</div>

					<div class="footer__contact">

						<div class="footer__tel">

							<a href="tel:88007006202">
								<svg class="icon-bxs-phone-call" width="19" height="19" viewBox="0 0 19 19">
									<use xlink:href="/local/templates/blizfinans/images/sprite.svg#bxs-phone-call"/>
								</svg>
								8 800 700 62 02
							</a>

						</div>

                        <p class="footer__address">
                            <? $APPLICATION->IncludeComponent(
                                "bitrix:main.include",
                                "",
                                Array(
                                    "AREA_FILE_SHOW" => "file",
                                    "AREA_FILE_SUFFIX" => "",
                                    "EDIT_TEMPLATE" => "",
                                    "PATH" => "/includes/footer/address.php"
                                ), false
                            ); ?>

                            <? $APPLICATION->IncludeComponent(
                                "bitrix:main.include",
                                "",
                                Array(
                                    "AREA_FILE_SHOW" => "file",
                                    "AREA_FILE_SUFFIX" => "",
                                    "EDIT_TEMPLATE" => "",
                                    "PATH" => "/includes/footer/reg_number.php"
                                ), false
                            ); ?>
                        </p>

                        <div class="footer__developer hidden-md">
                            <? $APPLICATION->IncludeComponent(
                                "bitrix:main.include",
                                "",
                                Array(
                                    "AREA_FILE_SHOW" => "file",
                                    "AREA_FILE_SUFFIX" => "",
                                    "EDIT_TEMPLATE" => "",
                                    "PATH" => "/includes/footer/developer.php"
                                ), false
                            ); ?>
                        </div>
					</div>
				</div>

                <div class="visible-md">

					<span class="footer__address visible-sm">
                        <? $APPLICATION->IncludeComponent(
                            "bitrix:main.include",
                            "",
                            Array(
                                "AREA_FILE_SHOW" => "file",
                                "AREA_FILE_SUFFIX" => "",
                                "EDIT_TEMPLATE" => "",
                                "PATH" => "/includes/footer/reg_number.php"
                            ), false
                        ); ?>
					</span>

                    <p class="footer__copyright">
                        <? $APPLICATION->IncludeComponent(
                            "bitrix:main.include",
                            "",
                            Array(
                                "AREA_FILE_SHOW" => "file",
                                "AREA_FILE_SUFFIX" => "",
                                "EDIT_TEMPLATE" => "",
                                "PATH" => "/includes/footer/copyright.php"
                            ), false
                        ); ?>
                    </p>

                    <div class="footer__developer">
                        <? $APPLICATION->IncludeComponent(
                            "bitrix:main.include",
                            "",
                            Array(
                                "AREA_FILE_SHOW" => "file",
                                "AREA_FILE_SUFFIX" => "",
                                "EDIT_TEMPLATE" => "",
                                "PATH" => "/includes/footer/developer.php"
                            ), false
                        ); ?>
                    </div>
				</div>
			</div>
		</div>

        <div class="footer__bottom">
            <p class="center">
                <? $APPLICATION->IncludeComponent(
                    "bitrix:main.include",
                    "",
                    array(
                        "AREA_FILE_SHOW" => "file",
                        "AREA_FILE_SUFFIX" => "",
                        "EDIT_TEMPLATE" => "",
                        "PATH" => "/includes/footer/bottom.php"
                    ), false
                ); ?>
            </p>
        </div>

	</footer>

</div>

	<div class="modal">

		<div class="modal__box">

			<div class="modal__item modal__item--lk">

				<form class="modal-form" action="/" autocomplete="off" novalidate="novalidate">

					<h3 class="modal-form__title h3">
						Вход в личный кабинет
					</h3>

					<label class="modal-form__input input-box">

						<input class="input-box__input input" name="email" type="email">

						<span class="input-box__label">
							Email
						</span>

					</label>

					<label class="modal-form__input input-box">

						<input class="input-box__input input" name="password" type="password">

						<span class="input-box__label">
							Пароль
						</span>

					</label>

					<div class="modal-form__links">

						<button class="modal-form__links-red button" type="button" data-modal="reset">
							Забыли пароль?
						</button>

						<button class="modal-form__links-dark button" type="button" data-modal="reg">
							Регистрация
						</button>

					</div>

					<button class="modal-form__submit btn btn--big btn--red">
						<span>Войти</span>
					</button>

				</form>

			</div>

			<div class="modal__item modal__item--reset">

				<form class="modal-form" action="/" autocomplete="off" novalidate="novalidate">

					<h3 class="modal-form__title h3">
						Восстановление пароля
					</h3>

					<label class="modal-form__input input-box input-box--error">

						<input class="input-box__input input input--error" name="email" type="email">

						<span class="input-box__label">
							Email
						</span>

						<span class="input-box__text">
							Не верно введён e-mail
						</span>

					</label>

					<button class="modal-form__submit btn btn--big btn--red">
						<span>Отправить</span>
					</button>

				</form>

			</div>

			<button type="button" class="modal__close modal__close-btn button">
				Закрыть
			</button>

		</div>

	</div>

<script data-skip-moving="true" defer src="/local/templates/blizfinans/js/scripts.js?nc=<?=filectime($_SERVER['DOCUMENT_ROOT'].'/local/templates/blizfinans/js/scripts.js')?>"></script>

</body>
</html>						