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

if (empty($arResult['ITEMS'])) return;

$arItem = reset($arResult['ITEMS']);
?>

<div class="calculator">
    <form class="calculator__form" action="/main/anketa/" autocomplete="off" novalidate="novalidate">
        <div class="calculator__param">
            <script>
                window.CALCULATOR = {
                    param: {
                        sumMin: <?= (int)$arItem['PROPERTIES']['SUM_MIN']['VALUE']; ?>,
                        sumMax: <?= (int)$arItem['PROPERTIES']['SUM_MAX']['VALUE']; ?>,
                        sumStep: <?= (int)$arItem['PROPERTIES']['SUM_STEP']['VALUE']; ?>,
                        sumValue: <?= (int)$arItem['PROPERTIES']['SUM_VALUE']['VALUE']; ?>,

                        dateMin: <?= (int)$arItem['PROPERTIES']['DATE_MIN']['VALUE']; ?>,
                        dateMax: <?= (int)$arItem['PROPERTIES']['DATE_MAX']['VALUE']; ?>,
                        dateStep: <?= (int)$arItem['PROPERTIES']['DATE_STEP']['VALUE']; ?>,
                        dateValue: <?= (int)$arItem['PROPERTIES']['DATE_VALUE']['VALUE']; ?>,

                        stavka: <?= (int)$arItem['PROPERTIES']['RATE']['VALUE']; ?>,

                        maxSumFirstLoad: <?= (int)$arItem['PROPERTIES']['MAX_SUM_FIRST_LOAD']['VALUE']; ?>
                    },

                    days: ['день', 'дня', 'дней'],
                    months: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
                    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],

                    selectLabel: ['Сумма займа', 'Срок займа']
                }
            </script>

            <input type="hidden" name="initialSum" class="calculator__param-loan-sum">
            <input type="hidden" name="initialDays" class="calculator__param-loan-time">
        </div>

        <div class="calculator__control-row">
            <div class="calculator__control">
                <div class="calculator__control-head">
                    <label for="sum-set" class="calculator__control-label">Сумма займа:</label>

                    <div class="calculator__input calculator__input--sum">
                        <input id="sum-set" class="input" type="tel" value="<?= (int)$arItem['PROPERTIES']['SUM_VALUE']['VALUE']; ?>" maxlength="6">

                        <span class="calculator__input-text calculator__input-text--sum"><?= number_format($arItem['PROPERTIES']['SUM_VALUE']['VALUE'], 0, '', ' '); ?></span>

                        <span class="calculator__input-suf calculator__input-suf--sum">руб.</span>
                    </div>
                </div>

                <button type="button" class="calculator__btn-step calculator__btn-step--sum-minus button hide">
                    уменьшить сумму на <?= (int)$arItem['PROPERTIES']['SUM_STEP']['VALUE']; ?> рублей
                </button>

                <button type="button" class="calculator__btn-step calculator__btn-step--sum-plus button hide">
                    увеличить сумму на <?= (int)$arItem['PROPERTIES']['SUM_STEP']['VALUE']; ?> рублей
                </button>

                <div class="calculator__slider calculator__slider--sum"></div>

                <div class="calculator__extreme">
                    <span class="calculator__min-sum"><?= number_format($arItem['PROPERTIES']['SUM_MIN']['VALUE'], 0, '', ' '); ?></span>
                    <span class="calculator__extreme-sum"><?= number_format($arItem['PROPERTIES']['SUM_VALUE']['VALUE'], 0, '', ' '); ?></span>
                    <span class="calculator__max-sum"><?= number_format($arItem['PROPERTIES']['SUM_MAX']['VALUE'], 0, '', ' '); ?></span>
                </div>

                <div class="calculator__max-sum-first-load">
                    Сумма свыше 10 000 руб. доступна со второго займа
                </div>
            </div>

            <div class="calculator__control">
                <div class="calculator__control-head">
                    <label for="date-set" class="calculator__control-label">Срок займа:</label>

                    <div class="calculator__input calculator__input--date">
                        <input id="date-set" class="input" type="tel" value="<?= (int)$arItem['PROPERTIES']['DATE_VALUE']['VALUE']; ?>" maxlength="2">
                        <span class="calculator__input-text calculator__input-text--date"><?= (int)$arItem['PROPERTIES']['DATE_VALUE']['VALUE']; ?></span>
                        <span class="calculator__input-suf calculator__input-suf--date">дней</span>
                    </div>
                </div>

                <button type="button" class="calculator__btn-step calculator__btn-step--date-minus button hide">
                    уменьшить дату на <?= (int)$arItem['PROPERTIES']['DATE_STEP']['VALUE']; ?> день
                </button>

                <button type="button" class="calculator__btn-step calculator__btn-step--date-plus button hide">
                    увеличить дату на <?= (int)$arItem['PROPERTIES']['DATE_STEP']['VALUE']; ?> день
                </button>

                <div class="calculator__slider calculator__slider--date"></div>

                <div class="calculator__extreme">
                    <span class="calculator__min-date"><?= (int)$arItem['PROPERTIES']['DATE_MIN']['VALUE']; ?></span>
                    <span class="calculator__extreme-date"><?= (int)$arItem['PROPERTIES']['DATE_VALUE']['VALUE']; ?></span>
                    <span class="calculator__max-date"><?= (int)$arItem['PROPERTIES']['DATE_MAX']['VALUE']; ?></span>
                </div>
            </div>
        </div>

        <div class="calculator__foot">

            <ul class="calculator__result">

                <li class="calculator__result-item">
                    <span class="calculator__result-name">Сумма займа</span>
                    <span class="calculator__result-value">
							<b class="calculator__sum-text"><?= number_format($arItem['PROPERTIES']['SUM_VALUE']['VALUE'], 0, '', ' '); ?></b> руб.
						</span>
                </li>

                <li class="calculator__result-item">
                    <span class="calculator__result-name">Дата возврата</span>
                    <span class="calculator__result-value">
                        <span class="calculator__date-return"></span>
                    </span>
                </li>

                <li class="calculator__result-item">
                    <span class="calculator__result-name">Сумма возврата</span>
                    <span class="calculator__result-value">
                        <b class="calculator__sum-return"><?= number_format(16100, 0, '', ' '); ?> </b> руб.
                    </span>
                </li>
            </ul>

            <button class="calculator__submit btn btn--red">
                <span>Получить деньги</span>
            </button>
        </div>
    </form>
</div>