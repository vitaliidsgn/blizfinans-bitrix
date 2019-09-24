<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
$APPLICATION->SetTitle('Главная');
?> 

	<aside class="first-screen">

			<div class="first-screen__img">

				<picture>

					<source srcset="/local/templates/blizfinans/img/first-screen/photo--320@1x.webp 1x, /local/templates/blizfinans/img/first-screen/photo--320@2x.webp 2x" media="(max-width: 320px)" type="image/webp">
					<source srcset="/local/templates/blizfinans/img/first-screen/photo--360@1x.webp 1x, /local/templates/blizfinans/img/first-screen/photo--360@2x.webp 2x" media="(max-width: 360px)" type="image/webp">
					<source srcset="/local/templates/blizfinans/img/first-screen/photo--414@1x.webp 1x, /local/templates/blizfinans/img/first-screen/photo--414@2x.webp 2x" media="(max-width: 414px)" type="image/webp">
					<source srcset="/local/templates/blizfinans/img/first-screen/photo--768@1x.webp 1x, /local/templates/blizfinans/img/first-screen/photo--768@2x.webp 2x" media="(max-width: 768px)" type="image/webp">
					<source srcset="/local/templates/blizfinans/img/first-screen/photo--1336@1x.webp 1x, /local/templates/blizfinans/img/first-screen/photo--1336@2x.webp 2x" media="(max-width: 1336px)" type="image/webp">
					<source srcset="/local/templates/blizfinans/img/first-screen/photo--1440@1x.webp 1x, /local/templates/blizfinans/img/first-screen/photo--1440@2x.webp 2x" media="(max-width: 1400px)" type="image/webp">
					<source srcset="/local/templates/blizfinans/img/first-screen/photo--1920@1x.webp 1x, /local/templates/blizfinans/img/first-screen/photo--1920@2x.webp 2x" type="image/webp">

					<source srcset="/local/templates/blizfinans/img/first-screen/photo--320@1x.jpg 1x, /local/templates/blizfinans/img/first-screen/photo--320@2x.jpg 2x" media="(max-width: 320px)">
					<source srcset="/local/templates/blizfinans/img/first-screen/photo--360@1x.jpg 1x, /local/templates/blizfinans/img/first-screen/photo--360@2x.jpg 2x" media="(max-width: 360px)">
					<source srcset="/local/templates/blizfinans/img/first-screen/photo--414@1x.jpg 1x, /local/templates/blizfinans/img/first-screen/photo--414@2x.jpg 2x" media="(max-width: 414px)">
					<source srcset="/local/templates/blizfinans/img/first-screen/photo--768@1x.jpg 1x, /local/templates/blizfinans/img/first-screen/photo--768@2x.jpg 2x" media="(max-width: 768px)">
					<source srcset="/local/templates/blizfinans/img/first-screen/photo--1336@1x.jpg 1x, /local/templates/blizfinans/img/first-screen/photo--1336@2x.jpg 2x" media="(max-width: 1336px)">
					<source srcset="/local/templates/blizfinans/img/first-screen/photo--1440@1x.jpg 1x, /local/templates/blizfinans/img/first-screen/photo--1440@2x.jpg 2x" media="(max-width: 1400px)">
					<source srcset="/local/templates/blizfinans/img/first-screen/photo--1920@1x.jpg 1x, /local/templates/blizfinans/img/first-screen/photo--1920@2x.jpg 2x">

					<img src="/local/templates/blizfinans/img/first-screen/photo--1440@1x.jpg" alt="">

				</picture>

			</div>

			<div class="center">

				<h1 class="first-screen__title h1">
					Деньги в нужное время
				</h1>

				<div class="first-screen__calculator">















<div class="calculator">

	<form class="calculator__form" action="/" autocomplete="off" novalidate="novalidate">

				<div class="calculator__param">

					<script>

						window.CALCULATOR = {

							param : {

								sumMin : 1000,
								sumMax : 30000,
								sumStep : 100,
								sumValue : 14000,

								dateMin : 1,
								dateMax : 30,
								dateStep : 1,
								dateValue : 15,

								stavka : 1,

								maxSumFirstLoad: 15000

							},

							days : ['день', 'дня', 'дней'],
							months : ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
							monthsShort : ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],

							selectLabel : ['Сумма займа', 'Срок займа']

						}

					</script>

					<input type="hidden" name="LOAN_SUM" class="calculator__param-loan-sum">
					<input type="hidden" name="LOAN_TIME" class="calculator__param-loan-time">

				</div>

				<div class="calculator__control-row">

					<div class="calculator__control">

						<div class="calculator__control-head">

							<label for="sum-set" class="calculator__control-label">Сумма займа:</label>

							<div class="calculator__input calculator__input--sum">

								<input type="tel" class="input" id="sum-set" value="14000" maxlength="6">

								<span class="calculator__input-text calculator__input-text--sum">14000</span>

								<span class="calculator__input-suf calculator__input-suf--sum">руб.</span>

							</div>

						</div>

						<button type="button" class="calculator__btn-step calculator__btn-step--sum-minus button hide">уменьшить сумму на 100 рублей</button>

						<button type="button" class="calculator__btn-step calculator__btn-step--sum-plus button hide">увеличить сумму на 100 рублей</button>

						<div class="calculator__slider calculator__slider--sum"></div>

						<div class="calculator__extreme">

							<span class="calculator__min-sum">1 000</span>
							<span class="calculator__extreme-sum">15 000</span>
							<span class="calculator__max-sum">30 000</span>

						</div>

						<div class="calculator__max-sum-first-load">
							Сумма свыше 10 000 руб. доступна со второго займа
						</div>

					</div>

					<div class="calculator__control">

						<div class="calculator__control-head">

							<label for="date-set" class="calculator__control-label">Срок займа:</label>

							<div class="calculator__input calculator__input--date">

								<input type="tel" class="input" id="date-set" value="15" maxlength="2">

								<span class="calculator__input-text calculator__input-text--date">15</span>

								<span class="calculator__input-suf calculator__input-suf--date">дней</span>

							</div>

						</div>

						<button type="button" class="calculator__btn-step calculator__btn-step--date-minus button hide">уменьшить дату на 1 день</button>

						<button type="button" class="calculator__btn-step calculator__btn-step--date-plus button hide">увеличить дату на 1 день</button>

						<div class="calculator__slider calculator__slider--date"></div>

						<div class="calculator__extreme">

							<span class="calculator__min-date">1</span>
							<span class="calculator__extreme-date">15</span>
							<span class="calculator__max-date">30</span>

						</div>

					</div>

				</div>

			<div class="calculator__foot">

				<ul class="calculator__result">

					<li class="calculator__result-item">
						<span class="calculator__result-name">Сумма займа</span>
						<span class="calculator__result-value">
							<b class="calculator__sum-text">1 000</b> руб.
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
							<b class="calculator__sum-return">16 100 </b> руб.
						</span>
					</li>

				</ul>

				<button class="calculator__submit btn btn--red">
					<span>Получить деньги</span>
				</button>

			</div>

	</form>

</div>

				</div>

			</div>

		</aside>
		<aside class="it-we">

			<div class="center">

				<h2 class="it-we__title h2">
					Всего 4 шага
				</h2>

				<p class="it-we__intro">
					Индивидуальный подход к каждому клиенту.
				</p>

				<ul class="it-we__list">

					<li class="it-we__item">
						<span class="it-we__ico">
							<svg width="80" height="80" viewBox="0 0 80 80">
								<path fill="#5DCAD9" d="M73.333 0H6.667C3.18 0 .255 2.89 0 6.667v34.666a1.334 1.334 0 0 0 2.667 0L2.664 6.757c.137-2.01 1.672-4.09 4.003-4.09h66.666c2.206 0 4 1.794 4 4v48c0 2.28-1.718 4-4 4H6.667c-2.28 0-4-1.72-4-4V48h70.666a1.333 1.333 0 0 0 1.281-1.7c-2.697-9.444-7.575-16.381-7.714-16.567-.495-.857-1.37-1.51-2.397-1.793-1.044-.29-2.144-.163-3.019.341a3.851 3.851 0 0 0-1.085.946 4.82 4.82 0 0 0-2.312-1.398 4.801 4.801 0 0 0-3.672.484 4.792 4.792 0 0 0-1.944 2.091 4.823 4.823 0 0 0-1.338-.584 4.813 4.813 0 0 0-3.674.484 4.812 4.812 0 0 0-1.863 1.93l-7.97-11.086c-2.52-3.44-5.111-2.475-6.107-1.899-1.136.656-1.887 1.704-2.115 2.951-.205 1.13.035 2.363.695 3.505l10.096 16.33a1.335 1.335 0 0 0 2.27-1.403L32.387 24.337c-.325-.561-.452-1.15-.36-1.66.087-.477.364-.853.824-1.118.37-.215 1.243-.718 2.615 1.154l10.29 14.315a1.333 1.333 0 0 0 2.239-1.444 2.159 2.159 0 0 1-.217-1.65c.15-.562.51-1.031 1.013-1.322a2.164 2.164 0 0 1 1.65-.217c.562.15 1.03.51 1.32 1.013l.877 1.519v.001a1.335 1.335 0 0 0 2.31-1.333l-.001-.003a2.159 2.159 0 0 1-.216-1.648c.15-.561.51-1.03 1.015-1.321a2.172 2.172 0 0 1 1.65-.218c.562.151 1.03.511 1.322 1.014l1.314 2.278a1.335 1.335 0 0 0 2.311-1.333v-.001a1.287 1.287 0 0 1-.107-.98 1.3 1.3 0 0 1 .58-.791c.264-.152.619-.181.978-.081.353.097.65.304.861.66.045.064 4.233 6.03 6.875 14.162H1.333c-.736 0-1.333.598-1.333 1.334v8c0 3.738 2.928 6.666 6.667 6.666h66.666c3.739 0 6.667-2.928 6.667-6.666v-48A6.674 6.674 0 0 0 73.333 0"/>
								<path fill="#5CCAD9" fill-rule="nonzero" d="M40 50.667a2.668 2.668 0 0 1 2.667 2.666A2.668 2.668 0 0 1 40 56a2.67 2.67 0 0 1-2.667-2.667A2.67 2.67 0 0 1 40 50.667M52 72h-4v-6.667a1.333 1.333 0 1 0-2.667 0v8c0 .736.596 1.334 1.334 1.334H52c1.497 0 3.06 1.218 3.7 2.666H24.3c.64-1.448 2.203-2.666 3.7-2.666h13.333a1.333 1.333 0 1 0 0-2.667h-6.666v-6.667a1.334 1.334 0 0 0-2.667 0V72h-4c-3.427 0-6.667 3.24-6.667 6.667 0 .736.598 1.333 1.334 1.333h34.666c.738 0 1.334-.597 1.334-1.333C58.667 75.24 55.427 72 52 72"/>
								<path fill="#D10808" fill-rule="nonzero" d="M26.733 27.381l-3.77 3.77a1.332 1.332 0 0 0 .942 2.276c.342 0 .682-.13.943-.391l3.77-3.77a1.334 1.334 0 0 0-1.885-1.885m-8.066-4.714c0 .736.597 1.333 1.333 1.333h5.332a1.333 1.333 0 1 0 0-2.667H20c-.736 0-1.333.598-1.333 1.334m9.952-6.599l-3.771-3.772a1.334 1.334 0 0 0-1.885 1.885l3.77 3.772a1.33 1.33 0 0 0 1.886 0c.52-.52.52-1.365 0-1.885m15.084-1.885a1.332 1.332 0 0 0 0-1.886 1.332 1.332 0 0 0-1.886 0l-3.772 3.771a1.334 1.334 0 0 0 1.886 1.885l3.772-3.77zm-9.038.484V9.333a1.334 1.334 0 0 0-2.666 0v5.334a1.334 1.334 0 0 0 2.666 0"/>
							</svg>
						</span>
						<span class="it-we__text">
							Определите нужную сумму и срок займа
						</span>
					</li>

					<li class="it-we__item">
						<span class="it-we__ico">
							<svg width="68" height="73" viewBox="0 0 68 73">
								<defs>
									<linearGradient id="it-we__ico-2-a" x1="50%" x2="50%" y1="0%" y2="100%">
										<stop offset="0%" stop-color="#5DCAD9"/>
										<stop offset="100%" stop-color="#25B0BD"/>
									</linearGradient>
									<linearGradient id="it-we__ico-2-b" x1="50%" x2="50%" y1="0%" y2="100%">
										<stop offset="0%" stop-color="#5DCAD9"/>
										<stop offset="100%" stop-color="#25B0BD"/>
									</linearGradient>
									<linearGradient id="it-we__ico-2-c" x1="50%" x2="50%" y1="0%" y2="100%">
										<stop offset="0%" stop-color="#5DCAD9"/>
										<stop offset="100%" stop-color="#25B0BD"/>
									</linearGradient>
									<linearGradient id="it-we__ico-2-d" x1="50%" x2="50%" y1="0%" y2="100%">
										<stop offset="0%" stop-color="#D10808"/>
										<stop offset="100%" stop-color="#A41212"/>
									</linearGradient>
									<linearGradient id="it-we__ico-2-e" x1="50%" x2="50%" y1="0%" y2="100%">
										<stop offset="0%" stop-color="#D10808"/>
										<stop offset="100%" stop-color="#A41212"/>
									</linearGradient>
								</defs>
								<g fill="none" fill-rule="evenodd">
									<path fill="url(#it-we__ico-2-a)" d="M21.818 30.303c0 .67-.543 1.212-1.212 1.212h-7.273c-.669 0-1.212-.543-1.212-1.212V23.03c0-.669.543-1.212 1.212-1.212h7.273c.67 0 1.212.543 1.212 1.212v7.273zm-7.273-1.212h4.849v-4.849h-4.849v4.849zm-2.424 23.03c0-.669.543-1.212 1.212-1.212h7.273c.67 0 1.212.543 1.212 1.212v7.273c0 .669-.543 1.212-1.212 1.212h-7.273c-.669 0-1.212-.543-1.212-1.212V52.12zm2.424 6.06h4.849v-4.848h-4.849v4.849z"/>
									<path fill="url(#it-we__ico-2-b)" d="M38.788 71.515c0 .67-.543 1.212-1.212 1.212H6.06A6.067 6.067 0 0 1 0 66.667V6.06A6.067 6.067 0 0 1 6.06 0h38.788c.322 0 .63.127.857.355l12.122 12.121a1.21 1.21 0 1 1-1.714 1.714L44.347 2.424H6.06a3.64 3.64 0 0 0-3.637 3.637v60.606a3.64 3.64 0 0 0 3.637 3.636h31.515c.669 0 1.212.543 1.212 1.212z"/>
									<path fill="#5CCAD9" fill-rule="nonzero" d="M46.06 13.333v-6.06a1.213 1.213 0 0 0-2.424 0v6.06a6.067 6.067 0 0 0 6.061 6.06h10.91v23.031a1.213 1.213 0 0 0 2.423 0V18.182c0-.67-.543-1.212-1.212-1.212H49.697a3.64 3.64 0 0 1-3.636-3.637z"/>
									<path fill="url(#it-we__ico-2-c)" d="M37.576 58.182a1.213 1.213 0 0 1 0 2.424h-9.697a1.213 1.213 0 0 1 0-2.424zm7.272-7.273a1.213 1.213 0 0 1 .124 2.418l-.124.006h-2.424a1.213 1.213 0 0 1-.124-2.418l.124-.006h2.424zm-7.272 0a1.213 1.213 0 0 1 .124 2.418l-.124.006h-9.697a1.213 1.213 0 0 1-.124-2.418l.124-.006h9.697zm0-7.273a1.213 1.213 0 0 1 .124 2.418l-.124.007h-9.697a1.213 1.213 0 0 1-.124-2.418l.124-.007h9.697zm4.848 0h7.273a1.213 1.213 0 0 1 .124 2.418l-.124.007h-7.273a1.213 1.213 0 0 1-.124-2.418l.124-.007h7.273zm-12.121-7.272a1.213 1.213 0 0 1 .124 2.418l-.124.006h-2.424a1.213 1.213 0 0 1-.124-2.418l.124-.006h2.424zm16.97 0a1.213 1.213 0 0 1 .124 2.418l-.124.006H35.152a1.213 1.213 0 0 1-.124-2.418l.124-.006h12.12zM35.152 29.09a1.213 1.213 0 0 1 .123 2.418l-.123.006h-7.273a1.213 1.213 0 0 1-.124-2.418l.124-.006h7.273zm14.545 0a1.213 1.213 0 0 1 .124 2.418l-.124.006H40a1.213 1.213 0 0 1-.124-2.418L40 29.09h9.697zM40 21.818a1.213 1.213 0 0 1 .124 2.418l-.124.006H27.879a1.213 1.213 0 0 1-.124-2.418l.124-.006H40z"/>
									<path fill="url(#it-we__ico-2-d)" d="M14.9 45.705a1.213 1.213 0 0 0 1.866-.184l4.849-7.273a1.213 1.213 0 0 0-2.017-1.345l-4.028 6.042-1.38-1.378a1.21 1.21 0 1 0-1.714 1.714l2.425 2.424z"/>
									<path fill="url(#it-we__ico-2-e)" d="M64.01 47.504l2.425 2.424c1.931 1.933 1.931 4.632 0 6.563L50.554 72.372a1.214 1.214 0 0 1-.857.355h-7.273c-.669 0-1.212-.543-1.212-1.212v-7.273c0-.32.129-.63.355-.857l15.881-15.88c1.861-1.86 4.7-1.864 6.563 0zm-20.374 17.24v5.559h5.56l-5.56-5.559zm15.882-8.608l-10.531 10.53 1.922 1.923L61.44 58.06l-1.922-1.923zm-3.637-3.637L45.351 63.03l1.922 1.923 10.53-10.531-1.922-1.923zm3.281-3.28l-1.567 1.566 5.559 5.56 1.567-1.568c.98-.98.98-2.153 0-3.135l-2.424-2.424c-.962-.961-2.177-.956-3.135 0z"/>
								</g>
							</svg>
						</span>
						<span class="it-we__text">
							Заполните анкету
						</span>
					</li>

					<li class="it-we__item">
						<span class="it-we__ico">
							<svg width="73" height="73" viewBox="0 0 73 73">
								<defs>
									<linearGradient id="it-we__ico-3-a" x1="50%" x2="50%" y1="0%" y2="100%">
										<stop offset="0%" stop-color="#5DCAD9"/>
										<stop offset="100%" stop-color="#25B0BD"/>
									</linearGradient>
									<linearGradient id="it-we__ico-3-b" x1="50%" x2="50%" y1="0%" y2="100%">
										<stop offset="0%" stop-color="#D10808"/>
										<stop offset="100%" stop-color="#A41212"/>
									</linearGradient>
									<linearGradient id="it-we__ico-3-c" x1="50%" x2="50%" y1="0%" y2="100%">
										<stop offset="0%" stop-color="#D10808"/>
										<stop offset="100%" stop-color="#A41212"/>
									</linearGradient>
									<linearGradient id="it-we__ico-3-d" x1="50%" x2="50%" y1="0%" y2="100%">
										<stop offset="0%" stop-color="#D10808"/>
										<stop offset="100%" stop-color="#A41212"/>
									</linearGradient>
									<linearGradient id="it-we__ico-3-e" x1="50%" x2="50%" y1="0%" y2="100%">
										<stop offset="0%" stop-color="#D10808"/>
										<stop offset="100%" stop-color="#A41212"/>
									</linearGradient>
									<linearGradient id="it-we__ico-3-f" x1="50%" x2="50%" y1="0%" y2="100%">
										<stop offset="0%" stop-color="#5DCAD9"/>
										<stop offset="100%" stop-color="#25B0BD"/>
									</linearGradient>
								</defs>
								<g fill="none" fill-rule="evenodd">
									<path fill="url(#it-we__ico-3-a)" d="M71.151 47.362c-.127.041-3.133 1.01-4.8 1.458-1.571.42-3.215.965-4.958 1.607.33 3.92.178 7.993-.49 13.576-.058.493-.41.9-.89 1.027l-28.08 7.525a1.232 1.232 0 0 1-.328.045c-.485 0-.931-.29-1.12-.744C25.057 60.943 12.447 50.838 5.279 46.7c-1.493-.863-4.145-2.578-4.258-2.65a1.048 1.048 0 0 1-.112-.082c-.926-.761-1.16-1.908-.63-3.067.018-.04.039-.078.062-.116l.406-.68c.776-1.345 2.59-2.519 4.841-3.122 2.251-.605 4.409-.496 5.771.29l5.683 3.282a1.212 1.212 0 1 1-1.212 2.1l-5.683-3.282c-.791-.457-2.336-.478-3.93-.05-1.596.428-2.922 1.217-3.38 2.01l-.375.628a.695.695 0 0 0-.035.111c.481.31 2.773 1.783 4.064 2.529 7.244 4.182 19.876 14.285 25.746 25.36l26.355-7.06c1.373-12.124.1-16.882-3.529-30.425L50.67 16.084c-.589-2.198-2.413-3.116-3.84-2.737-.714.191-1.348.712-1.74 1.431-.318.58-.622 1.55-.268 2.872l3.759 14.052a1.211 1.211 0 0 1-.857 1.484 1.206 1.206 0 0 1-1.485-.857l-5.96-22.247c-.644-2.396-2.688-3.045-3.862-2.73-1.2.323-2.598 2.038-1.992 4.299l5.96 22.246a1.212 1.212 0 1 1-2.342.628L31.14 8.765c-.261-.978-.864-1.776-1.697-2.246-.821-.465-1.8-.58-2.755-.324-.962.258-1.755.842-2.233 1.647-.484.818-.604 1.815-.339 2.806l6.9 25.76a1.212 1.212 0 1 1-2.34.628l-6.59-24.589c-.291-1.094-.88-1.904-1.7-2.344-.775-.416-1.751-.497-2.753-.227a3.61 3.61 0 0 0-2.207 1.694 3.612 3.612 0 0 0-.363 2.758l7.842 29.273a1.21 1.21 0 0 1-.857 1.483 1.208 1.208 0 0 1-1.485-.857l-3.676-13.722c-.681 1.111-1.46 2.623-1.968 4.423a1.214 1.214 0 0 1-1.497.835 1.211 1.211 0 0 1-.836-1.496c.95-3.356 2.677-5.82 3.475-6.841l-3.34-12.47a6.013 6.013 0 0 1 .606-4.599 6.025 6.025 0 0 1 3.68-2.823c1.6-.428 3.205-.275 4.524.432.073.04.146.081.218.124a5.865 5.865 0 0 1 .622-1.484c.802-1.353 2.112-2.33 3.69-2.752 1.572-.422 3.197-.225 4.575.554a5.93 5.93 0 0 1 2.401 2.548c.717-.966 1.695-1.662 2.75-1.944 2.528-.675 5.863.828 6.832 4.444l.893 3.333c.701-.871 1.645-1.503 2.69-1.783 2.578-.692 5.827.785 6.81 4.45l4.392 16.39c1.853 6.918 3.102 11.596 3.717 16.106 1.598-.574 3.133-1.08 4.603-1.474 1.434-.384 4.014-1.208 4.572-1.388.008-.02.01-.059.004-.12l-.195-.687c-.522-1.948-4.627-4.32-6.559-3.801a1.213 1.213 0 0 1-.628-2.342c3.228-.866 8.658 2.27 9.524 5.498l.21.747c.013.041.023.084.03.127.213 1.257-.312 2.304-1.402 2.8a1.653 1.653 0 0 1-.129.05z"/>
									<path fill="url(#it-we__ico-3-b)" d="M7.628 9.343a1.209 1.209 0 0 0 1.714 0 1.21 1.21 0 0 0 0-1.714L6.918 5.205a1.21 1.21 0 1 0-1.714 1.714l2.424 2.424z"/>
									<path fill="url(#it-we__ico-3-c)" d="M14.675 4.18a1.21 1.21 0 0 0 1.625.542c.599-.3.843-1.028.543-1.627L15.63.671a1.212 1.212 0 1 0-2.169 1.084l1.214 2.424z"/>
									<path fill="url(#it-we__ico-3-d)" d="M4.849 16.97h2.424a1.213 1.213 0 0 0 0-2.423H4.85a1.213 1.213 0 0 0 0 2.424z"/>
									<path fill="url(#it-we__ico-3-e)" d="M8.102 21.881l-3.636 1.213a1.213 1.213 0 1 0 .766 2.3l3.636-1.212a1.213 1.213 0 0 0-.766-2.3z"/>
									<path fill="url(#it-we__ico-3-f)" d="M42.613 3.584c1.197-1.29 2.877-1.39 3.848-.83 1.074.62 1.98 2.637.813 4.664l-.002.004a1.213 1.213 0 1 0 2.102 1.207l1.815-3.144c1.037-1.797 3.173-2.369 4.968-1.333 1.824 1.055 2.384 3.145 1.332 4.97l-.58 1.003-1.858 2.806a1.212 1.212 0 1 0 2.022 1.338l1.873-2.828c.007-.01.007-.024.014-.035.007-.01.017-.016.025-.028v-.002c1.342-2.316 3.443-2.203 4.965-1.323a3.608 3.608 0 0 1 1.693 2.206 3.611 3.611 0 0 1-.362 2.76l-6.834 11.836a1.214 1.214 0 0 0 2.1 1.212L67.38 16.23a6.015 6.015 0 0 0 .606-4.597 6.013 6.013 0 0 0-2.823-3.68c-1.576-.91-3.233-1.12-4.717-.695.014-2.075-1.076-4.049-3.076-5.205-2.57-1.482-5.666-.928-7.542 1.194-.443-1.121-1.207-2.046-2.155-2.593-1.828-1.054-4.764-.953-6.836 1.283a1.211 1.211 0 1 0 1.777 1.647z"/>
								</g>
							</svg>
						</span>
						<span class="it-we__text">
							Получите одобрение заявки
						</span>
					</li>

					<li class="it-we__item">
						<span class="it-we__ico">
							<svg width="75" height="68" viewBox="0 0 75 68">
								<defs>
									<linearGradient id="it-we__ico-4-a" x1="50%" x2="50%" y1="0%" y2="100%">
										<stop offset="0%" stop-color="#5DCAD9"/>
										<stop offset="100%" stop-color="#25B0BD"/>
									</linearGradient>
									<linearGradient id="it-we__ico-4-b" x1="50%" x2="50%" y1="0%" y2="100%">
										<stop offset="0%" stop-color="#5DCAD9"/>
										<stop offset="100%" stop-color="#25B0BD"/>
									</linearGradient>
								</defs>
								<g fill="none" fill-rule="evenodd">
									<path fill="url(#it-we__ico-4-a)" d="M75 43.75a6.26 6.26 0 0 1-4.073 5.859A6.23 6.23 0 0 1 72.5 53.75a6.258 6.258 0 0 1-5.707 6.226c.447.746.707 1.611.707 2.524 0 2.616-2.382 5-5 5H43.75c-5.862 0-8.208-1.294-10.477-2.545-1.733-.955-3.523-1.942-7.2-2.468a1.25 1.25 0 1 1 .354-2.474c4.128.59 6.213 1.738 8.052 2.752C36.654 63.964 38.53 65 43.75 65H62.5c1.263 0 2.5-1.239 2.5-2.5 0-1.309-1.191-2.5-2.5-2.5a1.25 1.25 0 1 1 0-2.5h3.75A3.755 3.755 0 0 0 70 53.75 3.755 3.755 0 0 0 66.25 50a1.25 1.25 0 1 1 0-2.5h2.5a3.755 3.755 0 0 0 3.75-3.75A3.755 3.755 0 0 0 68.75 40a1.25 1.25 0 1 1-.136-2.492c3.886-.427 3.886-2.406 3.886-3.056 0-2.016-1.672-4.452-3.75-4.452h-17.5C49.089 30 45 28.694 45 23.75a1.25 1.25 0 1 1 2.5 0c0 3.529 3.13 3.742 3.758 3.75H68.75c3.576 0 6.25 3.671 6.25 6.953 0 1.26-.381 3.152-2.382 4.39A6.241 6.241 0 0 1 75 43.75zM26.25 32.5c3.714 0 8.413-4.145 10.884-6.616C42.5 20.517 42.5 13.847 42.5 3.75c0-.783.468-1.25 1.25-1.25C48.072 2.5 50 4.428 50 8.75v15a1.25 1.25 0 1 0 2.5 0v-15C52.5 3.025 49.474 0 43.75 0 41.578 0 40 1.577 40 3.75c0 9.811 0 15.733-4.634 20.366C31.738 27.745 28.244 30 26.25 30a1.25 1.25 0 1 0 0 2.5z"/>
									<path fill="url(#it-we__ico-4-b)" d="M21.25 27.5c.691 0 1.25.56 1.25 1.25v37.5c0 .69-.559 1.25-1.25 1.25h-20A1.25 1.25 0 0 1 0 66.25v-37.5c0-.69.559-1.25 1.25-1.25h20zM20 30H2.5v35H20V30z"/>
									<path fill="#D10808" d="M11.25 61.25c1.379 0 2.5-1.121 2.5-2.5s-1.121-2.5-2.5-2.5a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5z"/>
								</g>
							</svg>
						</span>
						<span class="it-we__text">
							Деньги у вас <br>в кармане
						</span>
					</li>

				</ul>

			</div>

		</aside>
		<article class="loan-in-lk">

			<div class="center">

				<div class="loan-in-lk__content">

					<h1 class="loan-in-lk__title h2">
						Отправьте заявку <br>в личном кабинете
					</h1>

					<p class="loan-in-lk__intro">
						Получите деньги уже через несколько минут!
					</p>

					<div class="loan-in-lk__btn">

						<a href="/" class="btn btn--red">
							<span>Получить деньги</span>
						</a>

					</div>

				</div>

			</div>

			<div class="loan-in-lk__bg">

				<picture>

					<source srcset="/local/templates/blizfinans/img/loan-in-lk/img.webp 1x, /local/templates/blizfinans/img/loan-in-lk/img@2x.webp 2x" type="image/webp">

					<source srcset="/local/templates/blizfinans/img/loan-in-lk/img.png 1x, /local/templates/blizfinans/img/loan-in-lk/img@2x.png 2x">

					<img src="/local/templates/blizfinans/img/loan-in-lk/img.png" alt="">

				</picture>

			</div>

		</article>
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
							Просто назовите нам свои данные, желаемую сумму займа и&nbsp;получите деньги на карту в течение нескольких минут (при&nbsp;активации услуги в салоне «Блиц-Финанс»).
						</p>

						<form action="/" class="loan-in-phone__form" novalidate="novalidate">

							<div class="loan-in-phone__form-input">

								<svg class="icon-flag-russia">
									<use xlink:href="/local/templates/blizfinans/images/sprite.svg#flag-russia"/>
								</svg>

								<div class="form-input-note"></div>
								<input placeholder="+7 ___ ___ __ __" type="tel" class="input inputmask inputmask--phone" required="required">

							</div>
							
							<button class="btn btn--red">
								<span>Перезвонить мне</span>
							</button>
							

						</form>

					</div>

				</div>

			</div>

		</article>
		<article class="loan-in-office">

			<div class="center">

				<div class="loan-in-office__content">

					<h1 class="loan-in-office__title h2">
						Оформите займ в ближайшем офисе
					</h1>

					<p class="loan-in-office__intro">
						Для оформления займа выберите один из офисов <br>в Вашем регионе
					</p>

					<ul class="loan-in-office__list">

						<li>
							<a href="/">Удмуртская республика</a>
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

					<div class="loan-in-office__foot">

						<a href="/office/" class="btn btn--red">
							<span>Адреса офисов</span>
						</a>

						<a href="/" class="loan-in-office__info">
							Не нашли подходящего офиса?
						</a>

					</div>

				</div>

			</div>

			<div class="loan-in-office__bg">

				<picture>

					<source srcset="/local/templates/blizfinans/img/loan-in-office/img--mobile.svg" media="(max-width: 1199px)">
					<source srcset="/local/templates/blizfinans/img/loan-in-office/img.svg">

					<img src="/local/templates/blizfinans/img/loan-in-office/img.svg" alt="">

				</picture>

			</div>

		</article>


		<aside class="timer-money" data-timer="15">

			<div class="center">

				<h3 class="h3">
					Деньги будут у вас в
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

		<section class="faq">

			<div class="center">

				<h2 class="faq__title h2">
					Погашение займа
				</h2>

				<div class="faq__box swiper-container swiper-container--faq">

					<ul class="faq__nav hidden-sm">

						<li class="faq__nav-item">
							<a href="#faq-1" class="faq__nav-link faq__nav-link--active">
								<span class="faq__nav-ico">
									<svg width="42" height="40" viewBox="0 0 42 40">
										<path d="M40.6 28.7c0 1.02-1.08 2.1-2.1 2.1h-35c-1.02 0-2.1-1.08-2.1-2.1V3.5c0-1.02 1.08-2.1 2.1-2.1h35c1.02 0 2.1 1.08 2.1 2.1v25.2zM38.5 0h-35C1.701 0 0 1.701 0 3.5v25.2c0 1.799 1.701 3.5 3.5 3.5h35c1.799 0 3.5-1.701 3.5-3.5V3.5C42 1.701 40.299 0 38.5 0zM28.205 8.195a.7.7 0 1 1 .99-.99l5.6 5.6a.7.7 0 1 1-.99.99l-5.6-5.6zM21.721 28.7a.7.7 0 0 1-.7.7.703.703 0 0 1-.704-.7c0-.386.31-.7.697-.7h.007a.7.7 0 0 1 .7.7zM32.405 8.195a.7.7 0 1 1 .99-.99l1.4 1.4a.7.7 0 1 1-.99.99l-1.4-1.4zM30.8 38.5a.7.7 0 0 1-.7.7H11.9a.7.7 0 0 1 0-1.4h4.9v-3.5a.7.7 0 0 1 1.4 0v3.5h5.6v-3.5a.7.7 0 0 1 1.4 0v3.5h4.9a.7.7 0 0 1 .7.7zm7-13.3H4.2v-21h33.6v21zm.7-22.4h-35a.7.7 0 0 0-.7.7v22.4a.7.7 0 0 0 .7.7h35a.7.7 0 0 0 .7-.7V3.5a.7.7 0 0 0-.7-.7z"/>
									</svg>
								</span>
								Погашение онлайн
							</a>
						</li>

						<li class="faq__nav-item">
							<a href="#faq-2" class="faq__nav-link">
								<span class="faq__nav-ico">
									<svg width="42" height="42" viewBox="0 0 42 42">
										<path d="M13.78 15.426a.7.7 0 0 0-.863.483 8.41 8.41 0 0 0-.317 2.29c0 4.633 3.768 8.4 8.4 8.4 4.632 0 8.4-3.767 8.4-8.4 0-.776-.107-1.547-.317-2.289a.7.7 0 0 0-1.347.38A7.007 7.007 0 0 1 21 25.2a7.008 7.008 0 0 1-6.736-8.909.7.7 0 0 0-.482-.864zM18.9 16.8a.7.7 0 1 0 0-1.4c-1.301 0-2.388.896-2.7 2.1h-.1a.7.7 0 0 0 0 1.4h.099a2.797 2.797 0 0 0 2.7 2.1c1.546 0 2.8-1.256 2.8-2.8 0-.772.63-1.4 1.4-1.4.773 0 1.4.628 1.4 1.4 0 .772-.627 1.4-1.4 1.4a.7.7 0 0 0 0 1.4 2.797 2.797 0 0 0 2.702-2.1h.099a.7.7 0 1 0 0-1.4h-.1a2.798 2.798 0 0 0-2.701-2.1 2.803 2.803 0 0 0-2.8 2.8c0 .772-.628 1.4-1.4 1.4-.772 0-1.4-.628-1.4-1.4 0-.772.628-1.4 1.4-1.4zM31.5 6.3a.7.7 0 1 0 0-1.4h-7a.7.7 0 0 0 0 1.4h7zm6.3-.7c0-.772-.628-1.4-1.4-1.4-.772 0-1.4.628-1.4 1.4 0 .772.628 1.4 1.4 1.4.772 0 1.4-.628 1.4-1.4zM9.1 15.4a.7.7 0 0 0-.7.7v18.2a.7.7 0 0 0 .7.7c1.93 0 3.5 1.57 3.5 3.5a.7.7 0 0 0 .7.7h15.4a.7.7 0 0 0 .7-.7c0-1.93 1.57-3.5 3.5-3.5a.7.7 0 0 0 .7-.7V16.1a.7.7 0 1 0-1.4 0v17.55a4.91 4.91 0 0 0-4.15 4.15h-14.1a4.91 4.91 0 0 0-4.15-4.15V16.1a.7.7 0 0 0-.7-.7zm28.7.7a.7.7 0 1 0 1.4 0v-5.6a.7.7 0 0 0-.7-.7h-35a.7.7 0 0 0-.7.7v5.6a.7.7 0 1 0 1.4 0v-4.9h33.6v4.9zM38.5 0h-35C1.57 0 0 1.57 0 3.5v15.4c0 1.93 1.57 3.5 3.5 3.5a.7.7 0 1 0 0-1.4c-1.158 0-2.1-.942-2.1-2.1V3.5c0-1.158.942-2.1 2.1-2.1h35c1.158 0 2.1.942 2.1 2.1v15.4c0 1.158-.942 2.1-2.1 2.1a.7.7 0 0 0 0 1.4c1.93 0 3.5-1.57 3.5-3.5V3.5C42 1.57 40.43 0 38.5 0zm-2.1 13.3v25.2c0 1.93-1.57 3.5-3.5 3.5H9.1c-1.93 0-3.5-1.57-3.5-3.5V13.3a.7.7 0 0 1 .7-.7h26.6a.7.7 0 1 1 0 1.4H7v24.5c0 1.158.942 2.1 2.1 2.1h23.8c1.158 0 2.1-.942 2.1-2.1V13.3a.7.7 0 0 1 1.4 0z"/>
									</svg>
								</span>
								Через терминалы и&nbsp;банкоматы
							</a>
						</li>

						<li class="faq__nav-item">
							<a href="#faq-3" class="faq__nav-link">
								<span class="faq__nav-ico">
									<svg width="42" height="42" viewBox="0 0 42 42">
										<path d="M42 41.3a.7.7 0 0 1-.7.7H.7a.7.7 0 0 1 0-1.4h40.6a.7.7 0 0 1 .7.7zM4.9 18.2a.7.7 0 0 0 .7-.7V7h30.8v10.5a.7.7 0 0 0 1.4 0V6.3a.7.7 0 0 0-.7-.7H21V1.4h3.5v1.4h-2.1a.7.7 0 0 0 0 1.4h2.8a.7.7 0 0 0 .7-.7V.7a.7.7 0 0 0-.7-.7h-4.9a.7.7 0 0 0-.7.7v4.9H4.9a.7.7 0 0 0-.7.7v11.2a.7.7 0 0 0 .7.7zm7.7 20.3a.7.7 0 0 0 .7.7h15.4a.7.7 0 0 0 0-1.4H13.3a.7.7 0 0 0-.7.7zm-8.4-.7V21h-.7a.7.7 0 0 1 0-1.4h35a.7.7 0 0 1 0 1.4h-.7v16.8h.7a.7.7 0 0 1 0 1.4h-7a.7.7 0 0 1 0-1.4h.7V21H9.8v16.8h.7a.7.7 0 0 1 0 1.4h-7a.7.7 0 0 1 0-1.4h.7zm29.4 0h2.8V21h-2.8v16.8zm-28 0h2.8V21H5.6v16.8zm20.3-1.4a.7.7 0 0 0 .7-.7v-9.8a.698.698 0 0 0-.205-.495C26.329 25.34 24.746 23.8 21 23.8c-3.746 0-5.33 1.54-5.395 1.605a.698.698 0 0 0-.205.495v9.8a.7.7 0 0 0 1.4 0v-9.461c.428-.294 1.538-.893 3.5-1.013V32.2a.7.7 0 0 0 0 1.4v2.1a.7.7 0 0 0 1.4 0v-2.1a.7.7 0 0 0 0-1.4v-6.974c1.966.121 3.076.72 3.5 1.012V35.7a.7.7 0 0 0 .7.7zm-14-26.6a.7.7 0 0 1 .7.7v4.2a.7.7 0 0 1-.7.7H9.1a.7.7 0 0 1-.7-.7v-4.2a.7.7 0 0 1 .7-.7h2.8zM9.8 14h1.4v-2.8H9.8V14zm23.1-4.2a.7.7 0 0 1 .7.7v4.2a.7.7 0 0 1-.7.7h-2.8a.7.7 0 0 1-.7-.7v-4.2a.7.7 0 0 1 .7-.7h2.8zM30.8 14h1.4v-2.8h-1.4V14zm-4.9-4.2a.7.7 0 0 1 .7.7v4.2a.7.7 0 0 1-.7.7h-2.8a.7.7 0 0 1-.7-.7v-4.2a.7.7 0 0 1 .7-.7h2.8zM23.8 14h1.4v-2.8h-1.4V14zm-4.9-4.2a.7.7 0 0 1 .7.7v4.2a.7.7 0 0 1-.7.7h-2.8a.7.7 0 0 1-.7-.7v-4.2a.7.7 0 0 1 .7-.7h2.8zM16.8 14h1.4v-2.8h-1.4V14z"/>
									</svg>
								</span>
								В офисах компании
							</a>
						</li>

						<li class="faq__nav-item">
							<a href="#faq-4" class="faq__nav-link">
								<span class="faq__nav-ico">
									<svg width="42" height="42" viewBox="0 0 42 42">
										<path d="M17.5 35h.7a.7.7 0 0 0 0-1.4h-.7a.7.7 0 0 0 0 1.4zm0-4.2h.7a.7.7 0 0 0 0-1.4h-.7a.7.7 0 0 0 0 1.4zm0-4.2h.7a.7.7 0 0 0 0-1.4h-.7a.7.7 0 0 0 0 1.4zm3.5 7a.7.7 0 0 0 0 1.4h5.6a.7.7 0 1 0 0-1.4H21zm7-3.5a.7.7 0 0 0-.7-.7H21a.7.7 0 0 0 0 1.4h6.3a.7.7 0 0 0 .7-.7zm4.9-14.7a.7.7 0 1 0 0-1.4h-4.2a.7.7 0 1 0 0 1.4h4.2zm-15.4 0h8.4a.7.7 0 1 0 0-1.4h-8.4a.7.7 0 0 0 0 1.4zM21 26.6h4.9a.7.7 0 1 0 0-1.4H21a.7.7 0 0 0 0 1.4zm-3.5-7h18.2a.7.7 0 1 0 0-1.4H17.5a.7.7 0 0 0 0 1.4zm15.363 12.042h2.01v.865h-2.01v2.143h-1.207v-2.143H30.45v-.865h1.206v-.839H30.45v-.865h1.206v-4.472c.6-.177 1.314-.266 2.145-.266.733 0 1.311.087 1.736.26.424.173.733.46.925.865.192.403.288.96.288 1.67 0 .719-.09 1.287-.268 1.704-.179.417-.454.714-.824.891-.371.178-.856.267-1.455.267-.196 0-.424-.014-.683-.04a7.252 7.252 0 0 1-.657-.093v.918zm0-1.717h.938c.42 0 .755-.058 1.005-.173.25-.115.436-.313.557-.592.12-.28.18-.668.18-1.165s-.06-.885-.18-1.165a1.102 1.102 0 0 0-.557-.592c-.25-.115-.585-.173-1.005-.173h-.938v3.86zM42 9.1v32.2a.7.7 0 0 1-.7.7H11.9a.7.7 0 0 1-.7-.7v-4.9H7.7a.7.7 0 0 1 0-1.4h3.5V9.1c0-1.158-.942-2.1-2.1-2.1C7.942 7 7 7.942 7 9.1v23.8c0 1.93-1.57 3.5-3.5 3.5S0 34.83 0 32.9V.7A.7.7 0 0 1 .7 0h29.4a.7.7 0 0 1 .7.7v2.8a.7.7 0 1 1-1.4 0V1.4h-28v31.5c0 1.158.942 2.1 2.1 2.1 1.158 0 2.1-.942 2.1-2.1V9.1c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v31.5h28V9.1c0-1.158-.942-2.1-2.1-2.1H14a.7.7 0 0 1 0-1.4h24.5c1.93 0 3.5 1.57 3.5 3.5z"/>
									</svg>
								</span>
								Другие варианты
							</a>
						</li>

					</ul>

					<div class="faq__body swiper-wrapper">



						<div id="faq-1" class="faq__block swiper-slide">

							<h3 class="faq__nav-item visuallyhidden faq__visuallyhidden">
								<span class="faq__nav-ico">
									<svg width="42" height="40" viewBox="0 0 42 40">
										<path d="M40.6 28.7c0 1.02-1.08 2.1-2.1 2.1h-35c-1.02 0-2.1-1.08-2.1-2.1V3.5c0-1.02 1.08-2.1 2.1-2.1h35c1.02 0 2.1 1.08 2.1 2.1v25.2zM38.5 0h-35C1.701 0 0 1.701 0 3.5v25.2c0 1.799 1.701 3.5 3.5 3.5h35c1.799 0 3.5-1.701 3.5-3.5V3.5C42 1.701 40.299 0 38.5 0zM28.205 8.195a.7.7 0 1 1 .99-.99l5.6 5.6a.7.7 0 1 1-.99.99l-5.6-5.6zM21.721 28.7a.7.7 0 0 1-.7.7.703.703 0 0 1-.704-.7c0-.386.31-.7.697-.7h.007a.7.7 0 0 1 .7.7zM32.405 8.195a.7.7 0 1 1 .99-.99l1.4 1.4a.7.7 0 1 1-.99.99l-1.4-1.4zM30.8 38.5a.7.7 0 0 1-.7.7H11.9a.7.7 0 0 1 0-1.4h4.9v-3.5a.7.7 0 0 1 1.4 0v3.5h5.6v-3.5a.7.7 0 0 1 1.4 0v3.5h4.9a.7.7 0 0 1 .7.7zm7-13.3H4.2v-21h33.6v21zm.7-22.4h-35a.7.7 0 0 0-.7.7v22.4a.7.7 0 0 0 .7.7h35a.7.7 0 0 0 .7-.7V3.5a.7.7 0 0 0-.7-.7z"/>
									</svg>
								</span>
								Погашение онлайн
							</h3>



							<article class="faq__item">

								<h4 class="faq__question h4">
									Погашение онлайн
								</h4>

								<div class="faq__answer">

									<p>Чтобы воспользоваться услугой погашения займа с помощью Личного кабинета на сайте, необходимо ввести свои личные данные и мобильный телефон, указанный при оформлении договора и провести оплату со своей банковской карты.</p> <p>В данном случае взимается комиссия 2,5% от суммы платежа и средства зачисляются в считанные минуты. В случае возникновения любых вопросов</p>

									<a href="/" target="_blank" class="faq__answer-link">
										<svg class="icon-arrow-right">
											<use xlink:href="/local/templates/blizfinans/images/sprite.svg#arrow-right"/>
										</svg>
										смотреть инструкцию
									</a>

								</div>

							</article>



							<article class="faq__item">

								<h4 class="faq__question h4">
									На сайте сервиса «Золотая корона-погашение кредитов»
								</h4>

								<div class="faq__answer">

									<p>С помощью этого сервиса вы можете погасить или оплатить займ без комиссии с мгновенным зачислением средств на счет. В поле "Номер договора" при оплате микрозайма, по которому должен быть совершен платеж необходимо ввести 10 цифр серии и номера паспорта заемщика. За дополнительной информацией о возможностях сервиса вы можете обратиться в Информационный центр по телефону 8-495-211-07-00 (круглосуточно)</p>

									<a href="/" target="_blank" class="faq__answer-link">
										<svg class="icon-arrow-right">
											<use xlink:href="/local/templates/blizfinans/images/sprite.svg#arrow-right"/>
										</svg>
										смотреть инструкцию
									</a>

								</div>

							</article>



							<article class="faq__item">

								<h4 class="faq__question h4">
									На сайте ПАО СБЕРБАНК
								</h4>

								<div class="faq__answer">

									<p>При наличии карты ПАО СБЕРБАНК вы можете зарегистрироваться на сайте банка и через ваш личный кабинет погашать или оплачивать займы ООО «МФК «Деньгимигом»  с комиссией 1% от суммы платежа. Зачисление оплаты происходит в течение 1-3 рабочих дней после внесения средств.</p>

									<a href="/" target="_blank" class="faq__answer-link">
										<svg class="icon-arrow-right">
											<use xlink:href="/local/templates/blizfinans/images/sprite.svg#arrow-right"/>
										</svg>
										смотреть инструкцию
									</a>

								</div>

							</article>



						</div>

						<div id="faq-2" class="faq__block swiper-slide visuallyhidden faq__visuallyhidden">

							<h3 class="faq__nav-item visuallyhidden faq__visuallyhidden">
								<span class="faq__nav-ico">
									<svg width="42" height="42" viewBox="0 0 42 42">
										<path d="M13.78 15.426a.7.7 0 0 0-.863.483 8.41 8.41 0 0 0-.317 2.29c0 4.633 3.768 8.4 8.4 8.4 4.632 0 8.4-3.767 8.4-8.4 0-.776-.107-1.547-.317-2.289a.7.7 0 0 0-1.347.38A7.007 7.007 0 0 1 21 25.2a7.008 7.008 0 0 1-6.736-8.909.7.7 0 0 0-.482-.864zM18.9 16.8a.7.7 0 1 0 0-1.4c-1.301 0-2.388.896-2.7 2.1h-.1a.7.7 0 0 0 0 1.4h.099a2.797 2.797 0 0 0 2.7 2.1c1.546 0 2.8-1.256 2.8-2.8 0-.772.63-1.4 1.4-1.4.773 0 1.4.628 1.4 1.4 0 .772-.627 1.4-1.4 1.4a.7.7 0 0 0 0 1.4 2.797 2.797 0 0 0 2.702-2.1h.099a.7.7 0 1 0 0-1.4h-.1a2.798 2.798 0 0 0-2.701-2.1 2.803 2.803 0 0 0-2.8 2.8c0 .772-.628 1.4-1.4 1.4-.772 0-1.4-.628-1.4-1.4 0-.772.628-1.4 1.4-1.4zM31.5 6.3a.7.7 0 1 0 0-1.4h-7a.7.7 0 0 0 0 1.4h7zm6.3-.7c0-.772-.628-1.4-1.4-1.4-.772 0-1.4.628-1.4 1.4 0 .772.628 1.4 1.4 1.4.772 0 1.4-.628 1.4-1.4zM9.1 15.4a.7.7 0 0 0-.7.7v18.2a.7.7 0 0 0 .7.7c1.93 0 3.5 1.57 3.5 3.5a.7.7 0 0 0 .7.7h15.4a.7.7 0 0 0 .7-.7c0-1.93 1.57-3.5 3.5-3.5a.7.7 0 0 0 .7-.7V16.1a.7.7 0 1 0-1.4 0v17.55a4.91 4.91 0 0 0-4.15 4.15h-14.1a4.91 4.91 0 0 0-4.15-4.15V16.1a.7.7 0 0 0-.7-.7zm28.7.7a.7.7 0 1 0 1.4 0v-5.6a.7.7 0 0 0-.7-.7h-35a.7.7 0 0 0-.7.7v5.6a.7.7 0 1 0 1.4 0v-4.9h33.6v4.9zM38.5 0h-35C1.57 0 0 1.57 0 3.5v15.4c0 1.93 1.57 3.5 3.5 3.5a.7.7 0 1 0 0-1.4c-1.158 0-2.1-.942-2.1-2.1V3.5c0-1.158.942-2.1 2.1-2.1h35c1.158 0 2.1.942 2.1 2.1v15.4c0 1.158-.942 2.1-2.1 2.1a.7.7 0 0 0 0 1.4c1.93 0 3.5-1.57 3.5-3.5V3.5C42 1.57 40.43 0 38.5 0zm-2.1 13.3v25.2c0 1.93-1.57 3.5-3.5 3.5H9.1c-1.93 0-3.5-1.57-3.5-3.5V13.3a.7.7 0 0 1 .7-.7h26.6a.7.7 0 1 1 0 1.4H7v24.5c0 1.158.942 2.1 2.1 2.1h23.8c1.158 0 2.1-.942 2.1-2.1V13.3a.7.7 0 0 1 1.4 0z"/>
									</svg>
								</span>
								Через терминалы и&nbsp;банкоматы
							</h3>

							<article class="faq__item">

								<h4 class="faq__question h4">
									Через терминалы и банкоматы
								</h4>

								<div class="faq__answer">

									<a href="/" target="_blank" class="faq__answer-link">
										<svg class="icon-arrow-right">
											<use xlink:href="/local/templates/blizfinans/images/sprite.svg#arrow-right"/>
										</svg>
										смотреть инструкцию
									</a>

								</div>

							</article>

						</div>

						<div id="faq-3" class="faq__block swiper-slide visuallyhidden faq__visuallyhidden">

							<h3 class="faq__nav-item visuallyhidden faq__visuallyhidden">
								<span class="faq__nav-ico">
									<svg width="42" height="42" viewBox="0 0 42 42">
										<path d="M42 41.3a.7.7 0 0 1-.7.7H.7a.7.7 0 0 1 0-1.4h40.6a.7.7 0 0 1 .7.7zM4.9 18.2a.7.7 0 0 0 .7-.7V7h30.8v10.5a.7.7 0 0 0 1.4 0V6.3a.7.7 0 0 0-.7-.7H21V1.4h3.5v1.4h-2.1a.7.7 0 0 0 0 1.4h2.8a.7.7 0 0 0 .7-.7V.7a.7.7 0 0 0-.7-.7h-4.9a.7.7 0 0 0-.7.7v4.9H4.9a.7.7 0 0 0-.7.7v11.2a.7.7 0 0 0 .7.7zm7.7 20.3a.7.7 0 0 0 .7.7h15.4a.7.7 0 0 0 0-1.4H13.3a.7.7 0 0 0-.7.7zm-8.4-.7V21h-.7a.7.7 0 0 1 0-1.4h35a.7.7 0 0 1 0 1.4h-.7v16.8h.7a.7.7 0 0 1 0 1.4h-7a.7.7 0 0 1 0-1.4h.7V21H9.8v16.8h.7a.7.7 0 0 1 0 1.4h-7a.7.7 0 0 1 0-1.4h.7zm29.4 0h2.8V21h-2.8v16.8zm-28 0h2.8V21H5.6v16.8zm20.3-1.4a.7.7 0 0 0 .7-.7v-9.8a.698.698 0 0 0-.205-.495C26.329 25.34 24.746 23.8 21 23.8c-3.746 0-5.33 1.54-5.395 1.605a.698.698 0 0 0-.205.495v9.8a.7.7 0 0 0 1.4 0v-9.461c.428-.294 1.538-.893 3.5-1.013V32.2a.7.7 0 0 0 0 1.4v2.1a.7.7 0 0 0 1.4 0v-2.1a.7.7 0 0 0 0-1.4v-6.974c1.966.121 3.076.72 3.5 1.012V35.7a.7.7 0 0 0 .7.7zm-14-26.6a.7.7 0 0 1 .7.7v4.2a.7.7 0 0 1-.7.7H9.1a.7.7 0 0 1-.7-.7v-4.2a.7.7 0 0 1 .7-.7h2.8zM9.8 14h1.4v-2.8H9.8V14zm23.1-4.2a.7.7 0 0 1 .7.7v4.2a.7.7 0 0 1-.7.7h-2.8a.7.7 0 0 1-.7-.7v-4.2a.7.7 0 0 1 .7-.7h2.8zM30.8 14h1.4v-2.8h-1.4V14zm-4.9-4.2a.7.7 0 0 1 .7.7v4.2a.7.7 0 0 1-.7.7h-2.8a.7.7 0 0 1-.7-.7v-4.2a.7.7 0 0 1 .7-.7h2.8zM23.8 14h1.4v-2.8h-1.4V14zm-4.9-4.2a.7.7 0 0 1 .7.7v4.2a.7.7 0 0 1-.7.7h-2.8a.7.7 0 0 1-.7-.7v-4.2a.7.7 0 0 1 .7-.7h2.8zM16.8 14h1.4v-2.8h-1.4V14z"/>
									</svg>
								</span>
								В офисах компании
							</h3>

							<article class="faq__item">

								<h4 class="faq__question h4">
									В офисах компании
								</h4>

								<div class="faq__answer">

									<a href="/" target="_blank" class="faq__answer-link">
										<svg class="icon-arrow-right">
											<use xlink:href="/local/templates/blizfinans/images/sprite.svg#arrow-right"/>
										</svg>
										смотреть инструкцию
									</a>

								</div>

							</article>

						</div>

						<div id="faq-4" class="faq__block swiper-slide visuallyhidden faq__visuallyhidden">

							<h3 class="faq__nav-item visuallyhidden faq__visuallyhidden">
								<span class="faq__nav-ico">
									<svg width="42" height="42" viewBox="0 0 42 42">
										<path d="M17.5 35h.7a.7.7 0 0 0 0-1.4h-.7a.7.7 0 0 0 0 1.4zm0-4.2h.7a.7.7 0 0 0 0-1.4h-.7a.7.7 0 0 0 0 1.4zm0-4.2h.7a.7.7 0 0 0 0-1.4h-.7a.7.7 0 0 0 0 1.4zm3.5 7a.7.7 0 0 0 0 1.4h5.6a.7.7 0 1 0 0-1.4H21zm7-3.5a.7.7 0 0 0-.7-.7H21a.7.7 0 0 0 0 1.4h6.3a.7.7 0 0 0 .7-.7zm4.9-14.7a.7.7 0 1 0 0-1.4h-4.2a.7.7 0 1 0 0 1.4h4.2zm-15.4 0h8.4a.7.7 0 1 0 0-1.4h-8.4a.7.7 0 0 0 0 1.4zM21 26.6h4.9a.7.7 0 1 0 0-1.4H21a.7.7 0 0 0 0 1.4zm-3.5-7h18.2a.7.7 0 1 0 0-1.4H17.5a.7.7 0 0 0 0 1.4zm15.363 12.042h2.01v.865h-2.01v2.143h-1.207v-2.143H30.45v-.865h1.206v-.839H30.45v-.865h1.206v-4.472c.6-.177 1.314-.266 2.145-.266.733 0 1.311.087 1.736.26.424.173.733.46.925.865.192.403.288.96.288 1.67 0 .719-.09 1.287-.268 1.704-.179.417-.454.714-.824.891-.371.178-.856.267-1.455.267-.196 0-.424-.014-.683-.04a7.252 7.252 0 0 1-.657-.093v.918zm0-1.717h.938c.42 0 .755-.058 1.005-.173.25-.115.436-.313.557-.592.12-.28.18-.668.18-1.165s-.06-.885-.18-1.165a1.102 1.102 0 0 0-.557-.592c-.25-.115-.585-.173-1.005-.173h-.938v3.86zM42 9.1v32.2a.7.7 0 0 1-.7.7H11.9a.7.7 0 0 1-.7-.7v-4.9H7.7a.7.7 0 0 1 0-1.4h3.5V9.1c0-1.158-.942-2.1-2.1-2.1C7.942 7 7 7.942 7 9.1v23.8c0 1.93-1.57 3.5-3.5 3.5S0 34.83 0 32.9V.7A.7.7 0 0 1 .7 0h29.4a.7.7 0 0 1 .7.7v2.8a.7.7 0 1 1-1.4 0V1.4h-28v31.5c0 1.158.942 2.1 2.1 2.1 1.158 0 2.1-.942 2.1-2.1V9.1c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v31.5h28V9.1c0-1.158-.942-2.1-2.1-2.1H14a.7.7 0 0 1 0-1.4h24.5c1.93 0 3.5 1.57 3.5 3.5z"/>
									</svg>
								</span>
								Другие варианты
							</h3>

							<article class="faq__item">

								<h4 class="faq__question h4">
									Другие варианты
								</h4>

								<div class="faq__answer">

									<a href="/" target="_blank" class="faq__answer-link">
										<svg class="icon-arrow-right">
											<use xlink:href="/local/templates/blizfinans/images/sprite.svg#arrow-right"/>
										</svg>
										смотреть инструкцию
									</a>

								</div>

							</article>

						</div>

					</div>

				</div>

			</div>

		</section>
		<section class="feedback">

			<div class="center">

				<h2 class="feedback__title h2">
					Отзывы клиентов
				</h2>

				<div class="feedback__slider swiper-container-style">

					<div class="swiper-container swiper-container--feedback">

						<div class="swiper-wrapper">

<?$APPLICATION->IncludeComponent("bitrix:news.list", "feedback", Array(
	"ACTIVE_DATE_FORMAT" => "d.m.Y",	// Формат показа даты
		"ADD_SECTIONS_CHAIN" => "N",	// Включать раздел в цепочку навигации
		"AJAX_MODE" => "N",	// Включить режим AJAX
		"AJAX_OPTION_ADDITIONAL" => "",	// Дополнительный идентификатор
		"AJAX_OPTION_HISTORY" => "N",	// Включить эмуляцию навигации браузера
		"AJAX_OPTION_JUMP" => "N",	// Включить прокрутку к началу компонента
		"AJAX_OPTION_STYLE" => "Y",	// Включить подгрузку стилей
		"CACHE_FILTER" => "N",	// Кешировать при установленном фильтре
		"CACHE_GROUPS" => "N",	// Учитывать права доступа
		"CACHE_TIME" => "36000000",	// Время кеширования (сек.)
		"CACHE_TYPE" => "A",	// Тип кеширования
		"CHECK_DATES" => "N",	// Показывать только активные на данный момент элементы
		"DETAIL_URL" => "",	// URL страницы детального просмотра (по умолчанию - из настроек инфоблока)
		"DISPLAY_BOTTOM_PAGER" => "N",	// Выводить под списком
		"DISPLAY_DATE" => "Y",	// Выводить дату элемента
		"DISPLAY_NAME" => "Y",	// Выводить название элемента
		"DISPLAY_PICTURE" => "Y",	// Выводить изображение для анонса
		"DISPLAY_PREVIEW_TEXT" => "Y",	// Выводить текст анонса
		"DISPLAY_TOP_PAGER" => "N",	// Выводить над списком
		"FIELD_CODE" => array(	// Поля
			0 => "",
			1 => "",
		),
		"FILTER_NAME" => "",	// Фильтр
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",	// Скрывать ссылку, если нет детального описания
		"IBLOCK_ID" => "1",	// Код информационного блока
		"IBLOCK_TYPE" => "info",	// Тип информационного блока (используется только для проверки)
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",	// Включать инфоблок в цепочку навигации
		"INCLUDE_SUBSECTIONS" => "N",	// Показывать элементы подразделов раздела
		"MESSAGE_404" => "",	// Сообщение для показа (по умолчанию из компонента)
		"NEWS_COUNT" => "10",	// Количество новостей на странице
		"PAGER_BASE_LINK_ENABLE" => "N",	// Включить обработку ссылок
		"PAGER_DESC_NUMBERING" => "N",	// Использовать обратную навигацию
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",	// Время кеширования страниц для обратной навигации
		"PAGER_SHOW_ALL" => "N",	// Показывать ссылку "Все"
		"PAGER_SHOW_ALWAYS" => "N",	// Выводить всегда
		"PAGER_TEMPLATE" => ".default",	// Шаблон постраничной навигации
		"PAGER_TITLE" => "Новости",	// Название категорий
		"PARENT_SECTION" => "",	// ID раздела
		"PARENT_SECTION_CODE" => "",	// Код раздела
		"PREVIEW_TRUNCATE_LEN" => "",	// Максимальная длина анонса для вывода (только для типа текст)
		"PROPERTY_CODE" => array(	// Свойства
			0 => "INFO",
			1 => "",
		),
		"SET_BROWSER_TITLE" => "N",	// Устанавливать заголовок окна браузера
		"SET_LAST_MODIFIED" => "N",	// Устанавливать в заголовках ответа время модификации страницы
		"SET_META_DESCRIPTION" => "N",	// Устанавливать описание страницы
		"SET_META_KEYWORDS" => "N",	// Устанавливать ключевые слова страницы
		"SET_STATUS_404" => "N",	// Устанавливать статус 404
		"SET_TITLE" => "N",	// Устанавливать заголовок страницы
		"SHOW_404" => "N",	// Показ специальной страницы
		"SORT_BY1" => "SORT",	// Поле для первой сортировки новостей
		"SORT_BY2" => "NAME",	// Поле для второй сортировки новостей
		"SORT_ORDER1" => "ASC",	// Направление для первой сортировки новостей
		"SORT_ORDER2" => "ASC",	// Направление для второй сортировки новостей
		"STRICT_SECTION_CHECK" => "N",	// Строгая проверка раздела для показа списка
		"COMPONENT_TEMPLATE" => ".default"
	),
	false
);?>
						</div>

					</div>

				</div>

			</div>

		</section>
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

							<div class="form-input-note"></div>
							<input placeholder="+7 ___ ___ __ __" type="tel" class="input inputmask inputmask--phone" required="required">

						</div>

						<button class="btn btn--red">
							<span>Перезвонить мне</span>
						</button>
						
						

					</form>

				</div>

			</div>

		</aside>
	
	
<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php');
?>