/**
 * Created by SergST on 30.09.2016.
 */

$(document).ready(function () {

	//================== Carousel ===============

	$("#owl-example").owlCarousel({

		// Most important owl features
		items: 3,
		itemsCustom: false,
		itemsDesktop: [1199, 4],
		itemsDesktopSmall: [980, 3],
		itemsTablet: [768, 2],
		itemsTabletSmall: false,
		itemsMobile: [479, 1],
		singleItem: true,
		itemsScaleUp: false,

		//Basic Speeds
		slideSpeed: 200,
		paginationSpeed: 800,
		rewindSpeed: 1000,

		//Autoplay
		autoPlay: true,
		stopOnHover: true,

		//Pagination
		pagination: true,
		paginationNumbers: false,

		// Responsive
		responsive: true,
		responsiveRefreshRate: 200,
		responsiveBaseWidth: window
	});

	//============Accordeon=================

	var $accHead = $('.accordeon .accordeon-item__header');
	var $accArticle = $('.accordeon .accordeon-item__article');

	function hide(a, b) {
		a.slideUp('slow');
		b.removeClass('accordeon-item__header--open')
	}

	hide($accArticle, $accHead);

	$accHead.eq(0)
		.addClass('accordeon-item__header--open')
		.siblings('.accordeon-item__article')
		.slideDown('slow');

	$accHead.click(function () {

		if ($(this).hasClass('accordeon-item__header--open')) {
			hide($(this).siblings('.accordeon-item__article'), $(this));
		}
		else {
			hide($accArticle, $accHead);
			$(this).toggleClass('accordeon-item__header--open')
				.siblings('.accordeon-item__article')
				.slideDown('slow');
		}
	});

//	lodash Работа с массивами.

//	1. Массив скиллов (поле skills) всех людей, не
// должно быть повторяющихся скиллов, так же они должны быть
// отсортированы по алфавиту;

	console.log("\n------- Исходный объект ------");
	console.log(data);

	var skillsArr =
		_.chain(data)       //цепочный вызов
			.map('skills')    //получаем массивы из поля skills
			.flattenDeep()    //достаем элементы из вложенных масивов
			.uniq()           //оставляем уникальные значения
			.sort()           // сортировка
			.value();         //возвращаем полученное значение

	console.log("\n------- Отсортированный массив скилов------");
	console.log(skillsArr);

//2. Массив имен (поле name) людей, отсортированных в
// зависимости от количества их друзей (friends)

	var nameArr =
		_.chain(data)       //цепочный вызов
		//получаем массив объектов = {'name', 'friends'}
			.map(function (el) {
				return _.pick(el, ['name', 'friends'])
			})
			// сортировка по количеству друзей
			.sortBy([function (el) {
				return el.friends.length;
			}])
			.map('name')       //получаем массив из поля name
			.value();         //возвращаем полученное

	console.log("\n------- Отсортированный массив имен по количеству друзей------");
	console.log(nameArr);


	//3. Массив всех друзей всех пользователей, не должно быть повторяющихся людей

	var friendsNameArr =
		_.chain(data)       //цепочный вызов
			.map('friends')    //получаем массивы из поля friends
			.flattenDeep()    //достаем элементы (обьекты) из вложенных масивов
			.map('name')     //получаем массив из поля name
			.uniq()           //оставляем уникальные значения
			.value();         //возвращаем полученное значение

	console.log("\n------- Массив друзей ------");
	console.log(friendsNameArr);
});