
// BEGIN: Layout Go To Top
var LayoutGo2Top = function () {

	var handle = function () {
		var currentWindowPosition = $(window).scrollTop(); // current vertical position
		if (currentWindowPosition > 300) {
			$(".fixed-link .item.go2top").addClass("active");
		} else {
			$(".fixed-link .item.go2top").removeClass("active");
		};
		if (currentWindowPosition > 120) {
			$(".header-fixed").fadeIn();
		} else {
			$(".header-fixed").fadeOut();
		};
	};

	return {

		//main function to initiate the module
		init: function () {

			handle(); // call headerFix() when the page was loaded

			if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
				$(window).bind("touchend touchcancel touchleave", function (e) {
					handle();
				});
			} else {
				$(window).scroll(function () {
					handle();
				});
			}

			$(".fixed-link .item.go2top").on('click', function (e) {
				e.preventDefault();
				$("html, body").animate({
					scrollTop: 0
				}, 600);
			});
		}

	};
}();
// END: Layout Go To Top





// BEGIN: OwlCarousel
var ContentOwlcarousel = function () {

	var _initInstances = function () {
		$("[data-slider='owl'] .owl-carousel").each(function () {
			var parent = $(this).parent();

			var items;
			var itemsDesktop;
			var itemsDesktopSmall;
			var itemsTablet;
			var itemsTabletSmall;
			var itemsMobile;

			if (parent.data("single-item") == "true") {
				items = 1;
				itemsDesktop = 1;
				itemsDesktopSmall = 1;
				itemsTablet = 1;
				itemsTabletSmall = 1;
				itemsMobile = 1;
			} else {
				items = parent.data('items');
				itemsDesktop = [1199, parent.data('desktop-items') ? parent.data('desktop-items') : items];
				itemsDesktopSmall = [979, parent.data('desktop-small-items') ? parent.data('desktop-small-items') : 3];
				itemsTablet = [480, parent.data('tablet-items') ? parent.data('tablet-items') : 1];
				itemsMobile = [320, parent.data('mobile-items') ? parent.data('mobile-items') : 1];
			}

			$(this).owlCarousel({

				items: items,
				itemsDesktop: itemsDesktop,
				itemsDesktopSmall: itemsDesktopSmall,
				itemsTablet: itemsTablet,
				itemsTabletSmall: itemsTablet,
				itemsMobile: itemsMobile,

				navigation: parent.data("navigation") ? true : false,
				navigationText: false,
				slideSpeed: parent.data('slide-speed'),
				paginationSpeed: parent.data('pagination-speed'),
				singleItem: parent.data("single-item") ? true : false,
				autoPlay: parent.data("auto-play")
			});
		});
	};

	return {

		//main function to initiate the module
		init: function () {

			_initInstances();
		}

	};
}();
// END: OwlCarousel

// BEGIN: OwlCarousel
var ContentOwlcarousel2 = function () {

	var _initInstances = function () {
		$("[data-slider='owl2'] .owl-carousel").each(function () {
			var parent = $(this).parent();

			var items;
			var itemsDesktop;
			var itemsDesktopSmall;
			var itemsTablet;
			var itemsTabletSmall;
			var itemsMobile;

			if (parent.data("single-item") == "true") {
				items = 1;
				itemsDesktop = 1;
				itemsDesktopSmall = 1;
				itemsTablet = 1;
				itemsTabletSmall = 1;
				itemsMobile = 1;
			} else {
				items = parent.data('items');
				itemsDesktop = [1199, parent.data('desktop-items') ? parent.data('desktop-items') : items];
				itemsDesktopSmall = [979, parent.data('desktop-small-items') ? parent.data('desktop-small-items') : 3];
				itemsTablet = [480, parent.data('tablet-items') ? parent.data('tablet-items') : 4];
				itemsMobile = [320, parent.data('mobile-items') ? parent.data('mobile-items') : 2];
			}

			$(this).owlCarousel({

				items: items,
				itemsDesktop: itemsDesktop,
				itemsDesktopSmall: itemsDesktopSmall,
				itemsTablet: itemsTablet,
				itemsTabletSmall: itemsTablet,
				itemsMobile: itemsMobile,

				navigation: parent.data("navigation") ? true : false,
				navigationText: false,
				slideSpeed: parent.data('slide-speed'),
				paginationSpeed: parent.data('pagination-speed'),
				singleItem: parent.data("single-item") ? true : false,
				autoPlay: parent.data("auto-play")
			});
		});
	};

	return {

		//main function to initiate the module
		init: function () {

			_initInstances();
		}

	};
}();
// END: OwlCarousel

var revealAnimate = function() {
	var _init = function() {
		wow = new WOW(
		{
			animateClass: 'animated',
			offset:100,
			live: true,
			mobile: false
		});
	}
	return {
		//main function to initiate the module
		init: function() {
			_init();
		}
	};
}();




$(".header-nav .item a, .nav-mobile .item a").click(nav_handler);

function nav_handler(e){
	switch(this.id){
		case "js-nav-1": toP01(); $(this).addClass("active"); break;
		case "js-nav-2": toP02(); $(this).addClass("active"); break;
		case "js-nav-3": toP03(); $(this).addClass("active"); break;
		case "js-nav-4": toP04(); $(this).addClass("active"); break;
		case "js-nav-5": toP05(); $(this).addClass("active"); break;
		case "js-nav-6": toP06(); $(this).addClass("active"); break;
		case "js-nav-7": toP07(); $(this).addClass("active"); break;
		case "js-nav-8": toP08(); $(this).addClass("active"); break;
	};
	$(".nav-mobile").fadeOut();
	$(".nav-toggle .icon-bar").fadeIn();
	$(".nav-toggle .icon").fadeOut();
}


if(document.body.clientWidth < 992){
	function toP01(){var pos = $("#top").offset().top - 50;$("html, body").animate({scrollTop: pos}, 1000);$(".header .item a, .nav-mobile .item a").removeClass("active");}
} else{
	function toP01(){var pos = $("#top").offset().top - 0;$("html, body").animate({scrollTop: pos}, 1000);$(".header .item a, .nav-mobile .item a").removeClass("active");}
}
function toP02(){var pos = $(".m-wraper-01").offset().top - 50;$("html, body").animate({scrollTop: pos}, 1000);$(".header-nav .item a, .nav-mobile .item a").removeClass("active");}
function toP03(){var pos = $(".m-wraper-02").offset().top - 50;$("html, body").animate({scrollTop: pos}, 1000);$(".header-nav .item a, .nav-mobile .item a").removeClass("active");}
function toP04(){var pos = $(".m-service").offset().top - 50;$("html, body").animate({scrollTop: pos}, 1000);$(".header-nav .item a, .nav-mobile .item a").removeClass("active");}
function toP05(){var pos = $(".m-wraper-03").offset().top - 50;$("html, body").animate({scrollTop: pos}, 1000);$(".header-nav .item a, .nav-mobile .item a").removeClass("active");}











// Main theme initialization
$(document).ready(function() {
	// init layout handlers
	LayoutGo2Top.init();
	ContentOwlcarousel.init();
	revealAnimate.init();
	new WOW().init();

	$(".nav-mobile .item.sub").click(function(){
		$(this).toggleClass("on");
		$(this).children(".drop").stop().slideToggle(200);
	});

	$(".nav-toggle").click(function(){
		$(".nav-mobile").fadeToggle();
		$(".nav-toggle .icon-bar").fadeToggle();
		$(".nav-toggle .icon").fadeToggle();
	});

	$(".header .search input[type=text]").focus(function(){
		$(".header .search").addClass("active");
	});

	$(".header .search input[type=text]").blur(function(){
		$(".header .search").removeClass("active");
	});

	$("form.form textarea").blur(function(){
		if($(this).val()==''){
			$(this).parent(".el-form-item").removeClass("visited");
			$(this).removeClass("valid");
		} else {
			$(this).parent(".el-form-item").addClass("visited");
		}
	});

	$("form.form input[type=text]").blur(function(){
		if($(this).val()==''){
			$(this).parent(".el-form-item").removeClass("visited");
		} else {
			$(this).parent(".el-form-item").addClass("visited");
		}
	});

	$("form.form input[type=tel]").blur(function(){
		if($(this).val()==''){
			$(this).parent(".el-form-item").removeClass("visited");
		} else {
			$(this).parent(".el-form-item").addClass("visited");
		}
	});

	$("form.form .el-form-item label").click(function(){
		$(this).parent().children("input").focus();
		$(this).parent().children("textarea").focus();
	});

	$("form.form .el-form-item.item02 button").click(function(){
		$(this).addClass("visited");
		$(this).children("span").html("验证码已发送");
	});
	
	//$("form.form .submint button").click(function(){
	//	$(this).addClass("disabled");
	//	$(this).children("span").html("已送出");
	//});
	
	if(document.body.clientWidth < 992){
		$(".footer .item-link .name .icon").click(function(){
			$(this).toggleClass("on");
			$(this).parent().parent().children(".content").slideToggle();
		});
	};

	$(".fixed-link .tel").hover(function(){
		$(this).children(".float-wrap-tel").stop().fadeIn();
	},function(){
		$(this).children(".float-wrap-tel").stop().fadeOut();
	});

	$(".fixed-link .qrcode").hover(function(){
		$(this).children(".float-wrap-qrcode").stop().fadeIn();
	},function(){
		$(this).children(".float-wrap-qrcode").stop().fadeOut();
	});




});








