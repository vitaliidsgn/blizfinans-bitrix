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

if (!$arResult) return;

$arMapPlaceMarks = [];

foreach ($arResult['SECTIONS'] as $arSection) {
    foreach ($arSection['ITEMS'] as $arItem) {
        if (empty($arItem['PROPERTIES']['COORDINATES']['VALUE'])) continue;

        $arCoordinates = explode(',', $arItem['PROPERTIES']['COORDINATES']['VALUE']);

        $arMapPlaceMarks[] = [
            'title' => $arItem['NAME'],
            'phone' => !empty($arItem['PROPERTIES']['PHONE']['VALUE']) ? 'тел. ' . implode(', ', $arItem['PROPERTIES']['PHONE']['VALUE']) : '',
            'lat' => $arCoordinates[0],
            'let' => $arCoordinates[1]
        ];
    }
}

$arSectionsPrimary = array_filter($arResult['SECTIONS'], function ($arSection) {
    return count($arSection['ITEMS']) > 1;
});

$arSectionsSecond = array_filter($arResult['SECTIONS'], function ($arSection) {
    return count($arSection['ITEMS']) === 1;
});
?>


    <div class="office-map">
        <h2 class="office-map__title h3"><?= $arResult['NAME']; ?></h2>

        <div class="office-map__map" id="map">
            <script src="//api-maps.yandex.ru/2.1/?lang=ru_RU"></script>

            <script>
                ymaps.ready(function () {
                    var map = new ymaps.Map('map', {
                        center: [56.475285, 53.813856],
                        zoom: 17,
                        controls: []
                    });

                    var zoomControl = new ymaps.control.ZoomControl({options: {visible: true}});

                    map.controls.add(zoomControl);

                    var placemarks = <?= \CUtil::PhpToJSObject($arMapPlaceMarks); ?>;

                    placemarks.forEach(function (data) {
                        var placemark = new ymaps.Placemark(
                            [data.lat, data.let],
                            {
                                hintContent: data.title,
                                balloonContent: data.phone
                            },
                            {
                                iconLayout: 'default#image',
                            }
                        );

                        map.geoObjects.add(placemark);
                    });

                    map.setBounds(map.geoObjects.getBounds());

                    $('.office-city__link').on('click', function (e) {
                        e.preventDefault();
                        var link = $(this);
                        map.setCenter([link.data('lat'), link.data('let')], 16);

                        var scrollElement = document.querySelector('.office-map');

                        //scrollElement.scrollIntoView({behavior: 'smooth'});

                        scrollIntoViewIfNeeded($(scrollElement));
                    });

                    function scrollIntoViewIfNeeded($target) {
                        if ($target.position()) {
                            if ($target.position().top < $(window).scrollTop()) {
                                $('html,body').animate({scrollTop: $target.position().top});
                            } else if ($target.position().top + $target.height() >
                                $(window).scrollTop() + (
                                    window.innerHeight || document.documentElement.clientHeight
                                )) {
                                $('html,body').animate({
                                    scrollTop: $target.position().top - (window.innerHeight || document.documentElement.clientHeight) + $target.height() + 15
                                });
                            }
                        }
                    }
                });
            </script>
        </div>
    </div>

<? foreach ($arSectionsPrimary as $arSection): ?>
    <div class="office-city office-city--primary">
        <svg class="icon-home">
            <use xlink:href="/local/templates/blizfinans/images/sprite.svg#home"/>
        </svg>

        <h3 class="office-city__name"><?= $arSection['NAME']; ?></h3>

        <div class="office-column">
            <? foreach ($arSection['ITEMS'] as $arItem): ?>
                <div class="office-column__item">
                    <? include 'blocks/office.php'; ?>
                </div>
            <? endforeach; ?>
        </div>
    </div>
<? endforeach; ?>


<? if ($arSectionsSecond): ?>
    <div class="office-column office-column--second">
        <? foreach ($arSectionsSecond as $arSection): ?>
            <div class="office-column__item office-column__item--second">
                <div class="office-city">
                    <svg class="icon-home-alt">
                        <use xlink:href="/local/templates/blizfinans/images/sprite.svg#home-alt"/>
                    </svg>

                    <h3 class="office-city__name"><?= $arSection['NAME']; ?></h3>

                    <?
                    $arItem = reset($arSection['ITEMS']);

                    include 'blocks/office.php';
                    ?>
                </div>
            </div>
        <? endforeach; ?>
    </div>
<? endif; ?>