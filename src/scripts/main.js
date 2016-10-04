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
		autoPlay: false,
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

});