/**
 * Created by SergST on 30.09.2016.
 */

$(document).ready(function() {

	$("#owl-example").owlCarousel({

		// Most important owl features
		items : 3,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		singleItem : true,
		itemsScaleUp : false,

		//Basic Speeds
		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,

		//Autoplay
		autoPlay : false,
		stopOnHover : true,

		//Pagination
		pagination : true,
		paginationNumbers: false,

		// Responsive
		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window
	});

});