<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) exit;
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */

$this->setFrameMode(true);
?>


<form class="modal-form form form--auth form--validate form--ajax"
      action="<?= $arParams['API_SERVER']; ?>/main/rest/login"
      data-url-redirect="<?= $arParams['API_SERVER']; ?>/main/client/overview.shtml"
      method="post"
      autocomplete="off"
      novalidate="novalidate">

    <h3 class="modal-form__title h3">Вход в личный кабинет</h3>

    <label class="modal-form__input input-box">
        <input class="input-box__input input inputmask inputmask--phone"
               type="tel"
               name="phone"
               required>

        <span class="input-box__label">Телефон</span>

        <span class="input-box__text hide">Введен не правильный номер телефона</span>
    </label>

    <label class="modal-form__input input-box">
        <input class="input-box__input input"
               type="password"
               required
               name="password">

        <span class="input-box__label">Пароль</span>

        <span class="input-box__text hide">Не введен пароль</span>
    </label>

    <div class="form-errors"></div>

    <div class="modal-form__links">
        <button class="modal-form__links-red button" type="button" data-modal="reset">
            Забыли пароль?
        </button>

        <a class="modal-form__links-dark button" href="/main/anketa/">
            Регистрация
        </a>
    </div>

    <button class="modal-form__submit form__submit btn btn--big btn--red">
        <span>Войти</span>
    </button>
</form>