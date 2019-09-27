<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
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

            <form action="/ajax/form-phone.php" class="help-contacts__form form form--validate form--ajax form--callback" novalidate="novalidate">
                <div class="help-contacts__form-input input-box">
                    <svg class="icon-flag-russia">
                        <use xlink:href="/local/templates/blizfinans/images/sprite.svg#flag-russia"/>
                    </svg>

                    <input type="hidden" name="WEB_FORM_ID" value="<?= $arResult['arForm']['ID']; ?>">

                    <? foreach ($arResult["QUESTIONS"] as $arQuestion): ?>
                        <input placeholder="+7 ___ ___ __ __" type="tel" class="input inputmask inputmask--phone" required="required" name="form_<?= $arQuestion['STRUCTURE'][0]['FIELD_TYPE']; ?>_<?= $arQuestion['STRUCTURE'][0]['ID']; ?>" value="">
                    <? endforeach ?>

                    <div class="input-box__text hide">Укажите корректный номер телефона</div>

                    <div class="form-errors hide"></div>
                </div>

                <button class="btn btn--red">
                    <span>Перезвонить мне</span>
                </button>
            </form>
        </div>
    </div>
</aside>