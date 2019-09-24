<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<article class="loan-in-phone">
    <div class="center">
        <div class="loan-in-phone__box">
            <div class="loan-in-phone__img">
                <svg width="532" height="254" viewBox="0 0 532 254">
                    <defs>
                        <linearGradient id="loan-in-phone__bg" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stop-color="#D10808"/>
                            <stop offset="100%" stop-color="#A41212"/>
                        </linearGradient>
                    </defs>
                    <path fill="url(#loan-in-phone__bg)" fill-rule="evenodd" d="M239 657h422c5.523 0 10 4.477 10 10v244H139V757c0-55.228 44.772-100 100-100z" transform="matrix(-1 0 0 1 671 -657)"/>
                </svg>

                <img src="/local/templates/blizfinans/img/loan-in-phone/phone.svg" alt="">
            </div>

            <div class="loan-in-phone__content">
                <h1 class="loan-in-phone__title h2">
                    Оформите займ по&nbsp;телефону <br>
                    <a href="tel:88007006202">8 800 700 62 02</a>
                </h1>

                <p class="loan-in-phone__intro">
                    Просто назовите нам свои данные, желаемую сумму займа и&nbsp;получите деньги на карту в течение
                    нескольких минут (при&nbsp;активации услуги в салоне «Блиц-Финанс»).
                </p>

                <form action="/" class="loan-in-phone__form" novalidate="novalidate">
                    <div class="loan-in-phone__form-input">
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
    </div>
</article>