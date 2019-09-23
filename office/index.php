<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("office");
?>




	<article class="page">

		<div class="center">

			<h1 class="page__title h2">
				Офисы
			</h1>

			<ul class="office-list">

				<li>
					Удмуртская республика
				</li>
				<li>
					<a href="/">Пермский край</a>
				</li>
				<li>
					<a href="/">Республика Башкоркастан</a>
				</li>
				<li>
					<a href="/">Республика Татарстан</a>
				</li>
				<li>
					<a href="/">Кировская область</a>
				</li>
				<li>
					<a href="/">Республика Крым</a>
				</li>

			</ul>

			<hr>

			<div class="office-map">

				<h2 class="office-map__title h3">
					Удмуртская республика
				</h2>

				<div class="office-map__map" id="map">

				<script src="//api-maps.yandex.ru/2.1/?lang=ru_RU"></script>

				<script>

					function initMap() {

						var myMap = new ymaps.Map('map', {
							center: [56.475285, 53.813856],
							zoom: 17,
							controls: []
						});

						var zoomControl = new ymaps.control.ZoomControl({
							options: {
								visible: true
							}
						});

						myMap.controls.add(zoomControl);

/* что должно быть на карте необходимо уточниьть */
						myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
							hintContent: 'ул. Красноармейская д. 85 (р-н "Центр")',
							balloonContent: 'тел. 8912-747-90-08'
						}, {
							iconLayout: 'default#image',
				/*            iconImageHref: 'images/myIcon.gif',
							iconImageSize: [30, 42],
							iconImageOffset: [-5, -38]
				*/      });


						myMap.geoObjects.add(myPlacemark);

					}

					ymaps.ready(initMap);

				</script>

				</div>

			</div>

			<div class="office-city office-city--primary">

				<svg class="icon-home">
					<use xlink:href="/local/templates/blizfinans/images/sprite.svg#home"/>
				</svg>

				<h3 class="office-city__name">
					г.Сарапул
				</h3>

				<div class="office-column">





					<div class="office-column__item">

						<p class="office-city__address">

							ул. Красноармейская д. 85 (р-н "Центр")

							<br>

							<a href="tel:89127479008">
								тел. 8912-747-90-08
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>



					<div class="office-column__item">

						<p class="office-city__address">

							ул. Площадь Свободы д. 1 (Цетральный Рынок), пав 58

							<br>

							<a href="tel:89097158272">
								тел. 8909-715-82-72
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>



					<div class="office-column__item">

						<p class="office-city__address">

							ул. К. Маркса д. 60 (здание Автовокзала)

							<br>

							<a href="tel:89127636858">
								тел. 8912-763-68-58
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>



					<div class="office-column__item">

						<p class="office-city__address">

							ул. Озерная д. 20 (р-н "Поворот")

							<br>

							<a href="tel:89128587171">
								тел. 8912-858-71-71
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>



					<div class="office-column__item">

						<p class="office-city__address">

							ул. Ленина д. 62 (р-н "ж/д Вокзал", м-н БестПрайс)

							<br>

							<a href="tel:89124548448">
								тел. 8912-454-84-48
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>



					<div class="office-column__item">

						<p class="office-city__address">

							ул. Ленина, 2а

							<br>

							<a href="tel:89097158185">
								тел. 8909-715-81-85
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>



					<div class="office-column__item">

						<p class="office-city__address">

							ул. 20 Лет Победы д. 1а (р-н "Элеконд", ТЦ&nbsp;МЕЧТА)

							<br>

							<a href="tel:89127573883">
								тел. 8912-757-38-83
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>



				</div>

			</div>

			<div class="office-column office-column--second">





				<div class="office-column__item office-column__item--second">

					<div class="office-city">

						<svg class="icon-home-alt">
							<use xlink:href="/local/templates/blizfinans/images/sprite.svg#home-alt"/>
						</svg>

						<h3 class="office-city__name">
							с.Каракулино
						</h3>

						<p class="office-city__address">

							ул. Каманина д. 34

							<br>

							<a href="tel:89120187888">
								тел. 8912-018-78-88
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>

				</div>



				<div class="office-column__item office-column__item--second">

					<div class="office-city">

						<svg class="icon-home-alt">
							<use xlink:href="/local/templates/blizfinans/images/sprite.svg#home-alt"/>
						</svg>

						<h3 class="office-city__name">
							с.Дебесы
						</h3>

						<p class="office-city__address">

							ул. Каманина д. 34

							<br>

							<a href="tel:89120187888">
								тел. 8912-018-78-88
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>

				</div>



				<div class="office-column__item office-column__item--second">

					<div class="office-city">

						<svg class="icon-home-alt">
							<use xlink:href="/local/templates/blizfinans/images/sprite.svg#home-alt"/>
						</svg>

						<h3 class="office-city__name">
							с.Шаркан
						</h3>

						<p class="office-city__address">

							ул.Советская, д. 48а, ТЦ «Зангари»

							<br>

							<a href="tel:89508329202">
								тел. 8950-832-92-02
							</a>,

							<a href="tel:8(34136)32080">
								8(34136) 3-20-80
							</a>

							

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>

				</div>



				<div class="office-column__item office-column__item--second">

					<div class="office-city">

						<svg class="icon-home-alt">
							<use xlink:href="/local/templates/blizfinans/images/sprite.svg#home-alt"/>
						</svg>

						<h3 class="office-city__name">
							п.Ува
						</h3>

						<p class="office-city__address">

							ул. Каманина д. 34

							<br>

							<a href="tel:89120187888">
								тел. 8912-018-78-88
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>

				</div>



				<div class="office-column__item office-column__item--second">

					<div class="office-city">

						<svg class="icon-home-alt">
							<use xlink:href="/local/templates/blizfinans/images/sprite.svg#home-alt"/>
						</svg>

						<h3 class="office-city__name">
							п.Кез
						</h3>

						<p class="office-city__address">

							ул. Пушкина, д. 8а

							<br>

							<a href="tel:89124620338">
								тел. 8912-462-03-38
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>

				</div>



				<div class="office-column__item office-column__item--second">

					<div class="office-city">

						<svg class="icon-home-alt">
							<use xlink:href="/local/templates/blizfinans/images/sprite.svg#home-alt"/>
						</svg>

						<h3 class="office-city__name">
							с.Грахово
						</h3>

						<p class="office-city__address">

							ул. Колпакова д. 10

							<br>

							<a href="tel:89821244220">
								тел. 8982-124-42-20
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>

				</div>



				<div class="office-column__item office-column__item--second">

					<div class="office-city">

						<svg class="icon-home-alt">
							<use xlink:href="/local/templates/blizfinans/images/sprite.svg#home-alt"/>
						</svg>

						<h3 class="office-city__name">
							п.Кизнер
						</h3>

						<p class="office-city__address">

							ул. Карла Маркса д. 15

							<br>

							<a href="tel:89199120778">
								тел. 8919-912-07-78
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>

				</div>



				<div class="office-column__item office-column__item--second">

					<div class="office-city">

						<svg class="icon-home">
							<use xlink:href="/local/templates/blizfinans/images/sprite.svg#home"/>
						</svg>

						<h3 class="office-city__name">
							г.Камбарка
						</h3>

						<p class="office-city__address">

							ул. Суворова д. 2

							<br>

							<a href="tel:89128717047">
								тел. 8912-871-70-47
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>

				</div>



				<div class="office-column__item office-column__item--second">

					<div class="office-city">

						<svg class="icon-home-alt">
							<use xlink:href="/local/templates/blizfinans/images/sprite.svg#home-alt"/>
						</svg>

						<h3 class="office-city__name">
							с.Алнаши
						</h3>

						<p class="office-city__address">

							ул. Ленина д. 43

							<br>

							<a href="tel:89829903093">
								тел. 8982-990-30-93
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>

				</div>



				<div class="office-column__item office-column__item--second">

					<div class="office-city">

						<svg class="icon-home-alt">
							<use xlink:href="/local/templates/blizfinans/images/sprite.svg#home-alt"/>
						</svg>

						<h3 class="office-city__name">
							с. Кильмезь
						</h3>

						<p class="office-city__address">

							ул. Зеленая д. 12г, ТЦ "Рубин", 2 этаж

							<br>

							<a href="tel:89615664483">
								тел. 8961-566-44-83
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>

				</div>



				<div class="office-column__item office-column__item--second">

					<div class="office-city">

						<svg class="icon-home-alt">
							<use xlink:href="/local/templates/blizfinans/images/sprite.svg#home-alt"/>
						</svg>

						<h3 class="office-city__name">
							с.Сюмси
						</h3>

						<p class="office-city__address">

							ул. Советская д. 58, ТЦ "Верещагино"

							<br>

							<a href="tel:89630660228">
								тел. 8963-066-02-28
							</a>

							<br>

							<a class="office-city__link" href="/" target="_blank" rel="nofollow">
								смотреть на карте
							</a>

						</p>

					</div>

				</div>



			</div>

		</div>

	</article>

		<aside class="timer-money" data-timer="15">

			<div class="center">

				<h3 class="h3">
					При онлайн-оформлении <br class="visible-sm"> деньги будут у вас в
				</h3>

				<div class="timer-money__tablo">

					<span class="timer-money__tablo-item hide"></span>
					<span class="timer-money__tablo-item hide"></span>
					<span class="timer-money__tablo-sep">Через 15 минут</span>
					<span class="timer-money__tablo-item hide"></span>
					<span class="timer-money__tablo-item hide"></span>

				</div>

				<div class="timer-money__btn">

					<a href="/" class="btn btn--red btn--big">
						<span>Получить деньги</span>
					</a>

				</div>

			</div>

		</aside>

	<hr class="hidden-md">


		<article class="why-we why-we--office">

			<div class="center">

				<h1 class="why-we__title h3">
					Почему выбирают <br>ООО МКК "ПолтинниКъ?
				</h1>

				<div class="why-we__text">

					<p>
						Срочно нужны деньги, а взять их негде! Знакомая ситуация? И сумма-то необходимая сравнительно невелика, но перехватить <br>не у кого, а до зарплаты еще несколько дней...
					</p>

					<p>
						Для решения моментальных финансовых проблем, будь то поломка авто, срочная покупка или другие непредвиденные обстоятельства, существует такой вид займа, как микрозайм.
					</p>

					<p>
						На самом деле, микрозайм – это тот же кредит, только оформляемый очень быстро.
					</p>

					<p>
						Как правило, на его оформление уходит около двадцати минут. <br>Из документов необходимо предоставить только паспорт и ИНН. <br class="hidden-sm">Работают такие микрозаймы под девизом «Не суетись, перехватись». <br>И действительно, они это делают.
					</p>

					<p>
						Компания «ПолтинниКъ» - это способ взять <br class="visible-sm">деньги в долг, быстро <br>и просто. Это займы без залога, без справок и без поручителей.
					</p>

				</div>

			</div>

		</article>



	


<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>