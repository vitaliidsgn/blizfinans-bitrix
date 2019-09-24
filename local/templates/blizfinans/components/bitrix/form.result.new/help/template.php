<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<aside class="help-contacts">
    <div class="center">
        <div class="help-contacts__box">
            <div class="help-contacts__content">
                <h2 class="help-contacts__title h2">
                    Остались вопросы?
                </h2>

                <p class="help-contacts__intro">
                    Мы Вам поможем! <br> <a class="h3" href="tel:88007006202">8 800 700 62 02</a>
                </p>
            </div>

            <form action="/" class="help-contacts__form" novalidate="novalidate">
                <div class="help-contacts__form-input">
                    <svg class="icon-flag-russia">
                        <use xlink:href="/local/templates/blizfinans/images/sprite.svg#flag-russia"/>
                    </svg>

                    <input type="hidden" name="WEB_FORM_ID" value="<?= $arResult["arForm"]["ID"] ?>">

                    <div class="form-input-note"></div>

                    <? foreach ($arResult["QUESTIONS"] as $arQuestion): ?>
                        <input placeholder="+7 ___ ___ __ __" type="tel" class="input inputmask inputmask--phone" required="required" name="form_<?= $arQuestion["STRUCTURE"][0]["FIELD_TYPE"] ?>_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>" value="">
                    <? endforeach ?>
                </div>

                <button class="btn btn--red">
                    <span>Перезвонить мне</span>
                </button>
            </form>
        </div>
    </div>
</aside>