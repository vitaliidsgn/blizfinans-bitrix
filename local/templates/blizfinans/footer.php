<?
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
	die();
?>
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
						Займы предоставляются ООО МКК «ПолтинниКъ» <br>@ ООО МКК «ПолтинниКъ» 2017-2019. Все права защещены <br>ИНН 1838020818 <br>ОГРН 1171832014034
					</p>

				</div>

				<div class="footer__right">

					<div class="footer__menu">

						<h3 class="footer__menu-head">
							Меню
						</h3>

						<ul>
							<li><a href="/">Главная</a></li>
							<li><a href="/documents">Документы</a></li>
							<li><a href="/office">Офисы</a></li>
						</ul>

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

							427960, Удмуртская Республика, <br class="visible-md">г. Сарапул, <br class="visible-sm">ул.Красноармейская, д.&nbsp;85, оф.12. <br> <span class="hidden-sm">Регистрационный номер в государственном реестре МФО: №&nbsp;17&nbsp;03394008529.</span>

						</p>

						<div class="footer__developer hidden-md">

							<a rel="nofollow" target="_blank" href="https://sptnk.co/ru/">
								Разработка сайта <b>Sputnik</b>
							</a>

						</div>

					</div>

				</div>

				<div class="visible-md">

					<span class="footer__address visible-sm">
						Регистрационный номер в государственном реестре МФО: №&nbsp;17&nbsp;03394008529.
					</span>

					<p class="footer__copyright">
						Займы предоставляются ООО МКК «ПолтинниКъ» <br>@ ООО МКК «ПолтинниКъ» 2017-2019. Все права защещены <br>ИНН 1838020818 <br>ОГРН 1171832014034
					</p>

					<div class="footer__developer">

						<a rel="nofollow" target="_blank" href="https://sptnk.co/ru/">
							Разработка сайта <b>Sputnik</b>
						</a>

					</div>

				</div>

			</div>

		</div>

		<div class="footer__bottom">

			<p class="center">
				ООО МКК «ПолтинниКъ»
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