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

<form class="modal-form form form--send-code form--validate form--ajax"
      action="<?= $arParams['API_SERVER']; ?>/main/rest/remind-by-phone"
      method="post"
      autocomplete="off"
      novalidate="novalidate">

    <h3 class="modal-form__title h3">Восстановление пароля</h3>

    <label class="modal-form__input input-box">
        <input class="input-box__input input inputmask inputmask--phone" type="tel" name="phone">

        <span class="input-box__label">Телефон</span>

        <span class="input-box__text hide">Введен не правильный номер телефона</span>
    </label>

    <div class="form-errors"></div>

    <button class="modal-form__submit form__submit btn btn--big btn--red">
        <span>Отправить</span>
    </button>
</form>

<form class="modal-form form form--change-password form--validate form--ajax hide"
      action="<?= $arParams['API_SERVER']; ?>/main/rest/remind-by-phone"
      method="post"
      autocomplete="off"
      novalidate="novalidate">

    <h3 class="modal-form__title h3">Восстановление пароля</h3>

    <label class="modal-form__input input-box">
        <input class="input-box__input input"
               type="text"
               name="code"
               required
               maxlength="6">

        <span class="input-box__label">Код из смс</span>

        <span class="input-box__text hide">Введен не правильный код из смс</span>
    </label>

    <label class="modal-form__input input-box">
        <input class="input-box__input input"
               type="password"
               name="password"
               required>

        <span class="input-box__label">Новый пароль</span>

        <span class="input-box__text hide">Введен не правильный код из смс</span>
    </label>

    <label class="modal-form__input input-box">
        <input class="input-box__input input"
               type="password"
               name="password-confirm"
               required>

        <span class="input-box__label">Новый пароль еще раз</span>

        <span class="input-box__text hide">Введен не правильный код из смс</span>
    </label>

    <div class="form-errors"></div>

    <button class="modal-form__submit form__submit btn btn--big btn--red">
        <span>Восстановить</span>
    </button>
</form>

<div class="modal-form hide">

    <h3 class="modal-form__title h3">Пароль успешно изменен</h3>

    <div class="align-center">
        Ваш пароль был изменен, теперь вы можете авторизоваться по новому паролю
    </div>

    <br>

    <button class="btn btn--big btn--red" type="button" data-modal="lk">
        <span>Вернуться к авторизации</span>
    </button>
</div>