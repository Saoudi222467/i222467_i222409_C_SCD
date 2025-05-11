( function( $ ) {

"use strict";

// *** On ready *** //
$( document ).on( "ready" , function() {
	responsiveClasses();
	dataCustomOptions();
	fitVideos();
	scrollProgress();
	fullscreenSection();
	bannerScrollEffect();
	imageBG();
	BGVideoYTPlayer();
	mobileMenu();
	superfishMenu();
	onePageNav();
	stickyNav();
	bannerSlider();
	popularPackagesSlider();
	ourServicesTabs();
	portfolioIsotope();
	portfolioSingleSlider();
	lightboxIframe();
	lightboxImage();
	lightboxGallery();
	tourGuideSlider();
	testmonialsSlider();
	clientsSlider();
	sliderImageBG();
	optimizeSliderImageBG();
	contactFormValidation();
});

// *** On load *** //
$( window ).on( "load" , function() {
	websiteLoading();
	sliderImageBG();
	parallaxStellar();
	portfolioSingleExpander();
});

// *** On resize *** //
$( window ).on( "resize" , function() {
	optimizeSliderImageBG();
	responsiveClasses();
	fullscreenSection();
	parallaxStellar();
});

// *** On scroll *** //
$( window ).on( "scroll" , function() {
	scrollProgress();
	bannerScrollEffect();
	stickyNav();
	scrollTopButton();
});


// *** jQuery noConflict *** //
var $ = jQuery.noConflict();


// *** General Variables *** //
var $window = $( window ),
	$this = $( this ),
	$body = $( "body" );


// *** Data Custom Options *** //
function dataCustomOptions() {

	// *** Background Options *** //

	// Custom background color
	$( "*[data-bg-color]" ).each(function() {
		var customBackgroundColor = $( this ).data( "bg-color" );
		$( this ).css( "background-color" , customBackgroundColor );
	});

	// Custom background color opacity
	$( "*[data-bg-color-opacity]" ).each(function() {
		var customBackgroundColorOpacity = $( this ).data( "bg-color-opacity" ),
			backgroundColor = $( this ).css( "background-color" );

		// Conversion of rgb to rgba
		var rgbaBackgroundColor = backgroundColor.replace( "rgb" , "rgba" ).replace( ")" , ", " + customBackgroundColorOpacity + ")" );
		$( this ).css( "background-color" , rgbaBackgroundColor );
	});

	// Custom background image
	$( "*[data-bg-img]" ).each(function() {
		var customBackgroundImage = $( this ).data( "bg-img" );
		$( this ).css( "background-image" , "url('" + customBackgroundImage + "')" );
	});

	// Custom parallax background image
	$( "*[data-parallax-bg-img]" ).each(function() {
		var customParallaxBackgroundImage = $( this ).data( "parallax-bg-img" );
		$( this ).css( "background-image" , "url('" + "./images/files/parallax-bg/" + customParallaxBackgroundImage + "')" );
	});
}


// *** Responsive Classes *** //
function responsiveClasses() {
	var jRes = jRespond([
		{
			label: "smallest",
			enter: 0,
			exit: 479
		},{
			label: "handheld",
			enter: 480,
			exit: 767
		},{
			label: "tablet",
			enter: 768,
			exit: 991
		},{
			label: "laptop",
			enter: 992,
			exit: 1199
		},{
			label: "desktop",
			enter: 1200,
			exit: 10000
		}
	]);
	jRes.addFunc([
		{
			breakpoint: "desktop",
			enter: function() { $body.addClass( "device-lg" ); },
			exit: function() { $body.removeClass( "device-lg" ); }
		},{
			breakpoint: "laptop",
			enter: function() { $body.addClass( "device-md" ); },
			exit: function() { $body.removeClass( "device-md" ); }
		},{
			breakpoint: "tablet",
			enter: function() { $body.addClass( "device-sm" ); },
			exit: function() { $body.removeClass( "device-sm" ); }
		},{
			breakpoint: "handheld",
			enter: function() { $body.addClass( "device-xs" ); },
			exit: function() { $body.removeClass( "device-xs" ); }
		},{
			breakpoint: "smallest",
			enter: function() { $body.addClass( "device-xxs" ); },
			exit: function() { $body.removeClass( "device-xxs" ); }
		}
	]);
}


// *** RTL Case *** //
var HTMLDir = $( "html" ).css( "direction" ),
	owlRtl;

// If page is RTL
if ( HTMLDir == "rtl" ) { 
	// Owl Carousel
	owlRtl = true 
} else { 
	owlRtl = false 
}


// *** Website Loading *** //
function websiteLoading() {
	$( "#website-loading" ).find( ".loader" ).delay( 0 ).fadeOut( 100 );
	$( "#website-loading" ).delay( 100 ).fadeOut( 100 );
}


// *** Fit Videos *** //
function fitVideos() {
	$( "#full-container" ).fitVids();
}


// *** Image Background *** //
function imageBG() {
	$( ".img-bg" ).each(function() {
		var imgSrc = $( this ).find( "img" ).attr( "src" );
		$( this ).css( "background-image", "url('" + imgSrc + "')"  );
		$( this ).find( "img" ).css({ "opacity" : 0 , "visibility" : "hidden" });
	});
}


// *** Fullscreen Section *** //
function fullscreenSection() {
	$( ".fullscreen" ).css( "height", $( window ).height() );
}


// *** Scroll Progress *** //
function scrollProgress() {
    var docheight = $(document).height();
    var winheight = $(window).height();
    var height = docheight - winheight;
    var scroll = $(document).scrollTop();
    var scrollperc = scroll/(height/100);
    $("#scroll-progress").width(scrollperc+'%');
    $(".scroll-percent").text(scrollperc.toFixed(0)+'%');	
}


// *** Scroll Top Button *** //
function scrollTopButton() {
	var windowScroll = $( window ).scrollTop();
	if ( $( window ).scrollTop() > 800 ) {
		$( ".scroll-top" ).addClass( "show" );
	} else {
		$( ".scroll-top" ).removeClass( "show" );
	}
}

$( ".scroll-top, .scroll-top-btn" ).click( function(e) {
	e.preventDefault();
	console.log( "button clicked...." );
    $( "html, body" ).animate({
        scrollTop: 0
    }, 700 ); //1200 easeInOutExpo
});


// *** Stellar Parallax *** //
function parallaxStellar() {
	$(function() {
		if ( $body.hasClass( "device-lg" ) || $body.hasClass( "device-md" ) || $body.hasClass( "device-sm" ) ) {
			$.stellar({
				horizontalScrolling: false, // don't change this option
				// verticalScrolling: false,
				verticalOffset: 0,
		    	responsive: true, // false
			});
        }
	});
}


// *** Mobile Menu *** //
function mobileMenu() {
	$( "#main-menu" ).clone().appendTo( "#mobile-menu" ).removeClass().addClass( "mobile-menu" );

	// For Scroll Purpose
	var mobMenuScroll = document.querySelector( "#mobile-menu" );
	SimpleScrollbar.initEl( mobMenuScroll );

	// Dropdown
	$( ".mobile-menu" ).superfish({
		popUpSelector: "ul, .megamenu",
		cssArrows: true,
		delay: 300,
		speed: 150,
		speedOut: 150,
		animation: { opacity : "show", height : "show" }, //  , height : "show"
		animationOut: { opacity : "hide", height: "hide" }
	});


	// Toggle Mobile Menu
	$( ".mobile-menu-btn" ).on( "click", function(e) {
		e.preventDefault();
		$( this ).toggleClass( "is-active" );
		$( "#mobile-menu" ).slideToggle( 250 );
	});	
}


// *** Dropdown Menu *** //
function superfishMenu() {
	// Firing Superfish plugin
	$( ".main-menu" ).superfish({
		popUpSelector: "ul",
		cssArrows: true,
		delay: 300,
		speed: 100,
		speedOut: 100,
		animation: { opacity : "show" }, //  , height : "show"
		animationOut: { opacity : "hide" }
	});
}

// *** One Page Nav *** //
function onePageNav() {
	$.scrollIt({
      upKey: false,           
      downKey: false,         
      scrollTime: 0,          
	  activeClass: 'current',
      onPageChange: null,     
	  topOffset: -90
	});

    $("#main-menu li a").on("click", function(e) {
		// Check if the href attribute starts with '#', indicating an internal link
		if ($(this).attr('href').startsWith('#')) {
			e.preventDefault(); // Prevent default action for internal links
			var $anchor = $(this);
			$("html, body").stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 90
			}, 1200, 'easeInOutExpo');
	
			var classCases = $body.hasClass("device-sm") || $body.hasClass("device-xs") || $body.hasClass("device-xxs");
			if (classCases) {
				$("#mobile-menu").slideUp(250);
				$(".mobile-menu-btn").removeClass("is-active");
			}
		}
		// For external links or links without '#', allow default action (navigation)
	}); 
}


// *** Sticky Nav *** //
function stickyNav() {
	var headerTopDistance = $( "#header" ).offset().top,
		windowScroll = $( window ).scrollTop(),
		navBar = $( "#header" ),
		navBarHeight = parseInt( $( "#header" ).height() , 10 ),
		bannerHeight = parseInt( $( ".banner-parallax" ).height() , 10 );

	if ( navBar.hasClass( "style-2" ) ) {
		if ( windowScroll > ( bannerHeight - navBarHeight - 120 ) ) {
			navBar.addClass( "sticky" );
		} else {
			navBar.removeClass( "sticky" );
		}
	} else {
		if ( windowScroll > headerTopDistance ) {
			navBar.addClass( "sticky" );
		} else {
			navBar.removeClass( "sticky" );
		}		
	}
}


// *** Banner Slider *** //
function bannerSlider() {
	var bannerSlider = $( ".banner-slider > .owl-carousel" );
	bannerSlider.owlCarousel({
		items: 1,
		rtl: owlRtl,
		autoplay: false,
		autoplaySpeed: 600, // Sliding autoplay speed
		autoplayTimeout: 3000, // Autoplay interval timeout.
		dragEndSpeed: 500, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: true,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 10, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: false, // show prev and next buttons
		dots: true, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        // items : 1
		    },
		    480 : {
		        // items : 2
		    },
		    768 : {
		        // items : 3
		    }
		},
		autoHeight: false,
		autoWidth: false,
		// animateOut: 'goDownOut',
	    // animateIn: 'goDownIn',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 500,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 500 // Sliding speed by using dots
	});

	bannerSlider.on("translated.owl.carousel",function(a){var b=bannerSlider.find(".owl-item.active .banner-center-box"),c=parseInt(b.children("h1, .description, .btn").css("top"),10);0!=c&&setTimeout(function(){setTimeout(function(){b.children("h1").css("top",100).animate({opacity:1},{duration:400,queue:!1}).animate({top:0},{duration:600,easing:"easeOutExpo"})},0),setTimeout(function(){b.children(".description").css("top",100).animate({opacity:1},{duration:400,queue:!1}).animate({top:0},{duration:600,easing:"easeOutExpo"})},100),setTimeout(function(){b.children(".btn").css("top",100).animate({opacity:1},{duration:400,queue:!1}).animate({top:0},{duration:600,easing:"easeOutExpo"})},200)},150)}),bannerSlider.on("drag.owl.carousel",function(a){bannerSlider.find(".owl-item:not( .active )").find(".banner-center-box > *").animate({opacity:0},150).css("top",1)}),bannerSlider.on("changed.owl.carousel",function(a){bannerSlider.find(".banner-center-box > *").animate({opacity:0},150).css("top",1)}),bannerSlider.on("resized.owl.carousel",function(a){bannerSlider.find(".banner-center-box > *").animate({opacity:1},150)});
}


// *** Banner Scroll Effect *** //
function bannerScrollEffect() {
	var scrollingDistance = $( window ).scrollTop(),
		banHeadVertDistance = $( ".banner-slider" ).height() + $( "#header" ).height();

	if ( $body.hasClass( "device-lg" ) || $body.hasClass( "device-md" ) || $body.hasClass( "device-sm" ) ) {
		// Move Scroll Effect
		if ( scrollingDistance < banHeadVertDistance ) {
			$( ".banner-slider" )
				.css({ 
					"transform" : "translateY(" + scrollingDistance * 0.4 + "px)"
				});
		}

		// Opacity Scroll Effect
		if ( scrollingDistance < banHeadVertDistance ) {
			$( ".slide-content" )
				.css({
					"opacity": 1 - ( ( scrollingDistance - 120 ) / 400 )
				});
		}
    }
}


// *** Slider Image BG *** //
function sliderImageBG() {
	$( ".slider-img-bg .owl-item > li" ).each(function() {
		var imgSrc = $( this ).find( ".slide" ).children( "img" ).attr( "src" );
		$( this ).css({
			"background-image" : "url('" + imgSrc + "')",
			"background-color" : "#ccc",
    		"background-position" : "top center",
    		"background-size" : "cover",
    		"background-repeat" : "no-repeat"

		});
	});
}


// *** Optimize Slider Image BG *** //
function optimizeSliderImageBG() {
	$( ".slider-img-bg" ).each( function() {
		var imgHeight = $( this ).closest( "div" ).height();

		if ( $( ".banner-parallax" ).children( ".banner-slider" ).length > 0 ) {
			$( ".banner-parallax" ).height( $( ".banner-slider" ).height() );
		}

		$( this ).find( ".owl-item > li .slide" ).children( "img" ).css({
			"display" : "block",
			"height"  : imgHeight,
			"opacity" : 0
		});
	});
}


// *** Background Videos *** //
function BGVideoYTPlayer() {
	$(".video-background").each( function() {
		$( this ).YTPlayer({
			mute: false,
			autoPlay: true,
			opacity: 1,
			containment: ".video-background",
			showControls: false,
			startAt: 0,
			addRaster: true,
			showYTLogo: false,
			stopMovieOnBlur: false
		});
	});
}


// *** Our Services Tabs *** //
function ourServicesTabs() {
	// Variables
	var clickedTab 		= $( ".os-tabs > .active" );
	var tabWrapper 		= $( ".os-tabs-content" );
	var activeTab 		= tabWrapper.find( ".active" );
	var activeTabHeight = activeTab.outerHeight();

	// Show tab on page load
	activeTab.show();

	// Set height of wrapper on page load
	tabWrapper.height( activeTabHeight );

	$( ".os-tabs > li" ).on( "click", function() {

		if ( ! $( this ).hasClass( "active" ) ) {
			// Remove class from active tab
			$( ".os-tabs > li" ).removeClass( "active" );

			// Add class active to clicked tab
			$(this).addClass( "active" );

			// Update clickedTab variable
			clickedTab = $( ".os-tabs .active" );

			// fade out active tab
			activeTab.fadeOut( 200, function() {

				// Remove active class all tabs
				$( ".os-tabs-content > li" ).removeClass( "active" );

				// Get index of clicked tab
				var clickedTabIndex = clickedTab.index();

				// Add class active to corresponding tab
				$( ".os-tabs-content > li" ).eq(clickedTabIndex).addClass( "active" );

				// update new active tab
				activeTab = $( ".os-tabs-content > .active" );

				// Update variable
				activeTabHeight = activeTab.outerHeight();

				// Animate height of wrapper to new tab height
				tabWrapper.stop().delay(0).animate({
					height: activeTabHeight
				}, 200, function() {

					// Fade in active tab
					activeTab.delay(50).css( "top" , 30 )
						.animate( { top : 0 } , { duration : 250 , queue : false } ).fadeIn(200);

				});
			});
		}
	});
}


// *** Porfolio Isotope *** //
// Initialize Isotope
var $portfolioIsotope = $( ".portfolio-items" ).isotope({
		itemSelector: ".portfolio-item",
		isResizeBound: true,
		stagger: 0,
		transitionDuration: '0.5s',
		hiddenStyle: {
		  opacity: 0,
		  transform: 'scale(0.009)'
		},
		visibleStyle: {
		  opacity: 1,
		  transform: 'scale(1)'
		}
});
function portfolioIsotope() {	
	$( ".portfolio-categories a" ).on( "click" , function(e) {
		e.preventDefault();
		$( ".portfolio-categories a" ).removeClass( "active" );
		$( this ).addClass( "active" );
		
		var dataFilter = $( this ).data( "filter" );
		$portfolioIsotope.isotope({
			filter: dataFilter
		});
	});


	// Filter with selector
	$portfolioIsotope.isotope({
		// filter: ".portfolio-item:not(.pi-ocean-tour):first"
	});

	// Load Portfolio Items
    var x = 0;
	$(".loadmore-pi").click(function(a){a.preventDefault();var b=$(this).text(),c=$(this).data("text-loading"),d=$(this).data("text-loading-finished"),e=c?c:"Loading!",f=d?d:"No More!",g=$(".portfolio-items").data("pi-load-file"),h=g?g:"loadmore-portfolio-items.html";$(this).addClass("loading").find("span").text(e),$.ajax({type:"GET",url:h,success:function(a){$(".portfolio-items").waitForImages({finished:function(){console.log(".portfolio-items background image loaded"),setTimeout(function(){$(".loadmore-pi").removeClass("loading").find("span").text(b)},2500),setTimeout(function(){var c,b=$(a).find(".portfolio-item").length;$body.hasClass("device-lg")?c=4:$body.hasClass("device-md")?c=3:$body.hasClass("device-sm")||$body.hasClass("device-xs")?c=2:$body.hasClass("device-xxs")&&(c=1);var d=x+c,e=$(a).find(".portfolio-item").slice(x,d).addClass("loaded").appendTo(".portfolio-items");if(x=x+c<=b?x+c:b,imageBG(),portfolioSingleExpander(),lightboxGallery(),$portfolioIsotope.isotope("appended",e),x>=b)return $(".loadmore-pi").removeClass("colorful").addClass("dark animated shake").text(f),!1},3e3)},waitForAll:!0})}})});
}


// *** Portfolio Single Slider *** //
function portfolioSingleSlider() {
	var portfolioSingleSlider = $( ".portfolio-single-slider > .owl-carousel" );
	portfolioSingleSlider.owlCarousel({
		items: 1,
		rtl: owlRtl,
		autoplay: true,
		autoplaySpeed: 600, // Sliding autoplay speed
		autoplayTimeout: 3000, // Autoplay interval timeout.
		dragEndSpeed: 500, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: true,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 10, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: false, // show prev and next buttons
		dots: false, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        // items : 1
		    },
		    480 : {
		        // items : 2
		    },
		    768 : {
		        // items : 3
		    }
		},
		autoHeight: false,
		autoWidth: false,
		// animateOut: 'goDownOut',
	    // animateIn: 'goDownIn',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 500,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 500 // Sliding speed by using dots
	});

	$( ".portfolio-single-slider .controls" ).find( ".next" ).click( function() {
	    portfolioSingleSlider.trigger('next.owl.carousel');
	})

	$( ".portfolio-single-slider .controls" ).find( ".prev" ).click( function() {
	    portfolioSingleSlider.trigger('prev.owl.carousel');
	})
}

// Single Portfolio Expander
function portfolioSingleExpander() {
    ( function() {
		$(".portfolio-item .portfolio-single-link").on("click",function(){$("#portfolio-single-content").removeClass("opened");var c,a=$(window).scrollTop()+90,b=parseInt($(".portfolio-top").offset().top,10);a!==b?($("html, body").animate({scrollTop:$(".portfolio-top").offset().top-90},{easing:"easeInOutExpo",duration:1e3}),c=1200):c=0;var d=$(this).find(".open-portfolio-single").attr("href")+" .portfolio-single-load";setTimeout(function(){$("#portfolio-single-wrap").addClass("opened").animate({height:95},0,function(){setTimeout(function(){$(".portfolio-single-loader").addClass("opened"),setTimeout(function(){$("#portfolio-single-content").load(d,function(a){$("#portfolio-single-content").waitForImages({finished:function(){$("#portfolio-single-wrap").removeClass("opened"),$(".portfolio-single-loader").removeClass("opened"),portfolioSingleSlider(),sliderImageBG(),optimizeSliderImageBG(),dataCustomOptions(),setTimeout(function(){$("#portfolio-single-wrap, #portfolio-single-content").height($(".portfolio-single-load").outerHeight()),$("#portfolio-single-content").addClass("opened")},500)},waitForAll:!0})})},1e3)},600)})},c)}),$(document).on("click",".project-close",function(a){return $("#portfolio-single-content").removeClass("opened"),$("#portfolio-single-wrap").removeClass("opened"),setTimeout(function(){$("#portfolio-single-wrap").height(0)},500),setTimeout(function(){$(".portfolio-single-load").remove()},500),setTimeout(function(){$("html, body").animate({scrollTop:$(".portfolio-top").offset().top-90},600)},1200),!1});      
    })();
}



// *** Most Popular Slider *** //
function popularPackagesSlider() {
	var popularPackagesSlider = $( ".popular-packages-slider > .owl-carousel" );
	popularPackagesSlider.owlCarousel({
		// items: 3,
		rtl: owlRtl,
		autoplay: false,
		autoplaySpeed: 600, // Sliding autoplay speed
		autoplayTimeout: 3000, // Autoplay interval timeout.
		dragEndSpeed: 500, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: false,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 30, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: false, // show prev and next buttons
		dots: true, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        items : 1
		    },
		    480 : {
		        items : 1
		    },
		    768 : {
		        items : 2
		    },
		    1200 : {
		        items : 3
		    }
		},
		autoHeight: false,
		autoWidth: false,
		// animateOut: 'goDownOut',
	    // animateIn: 'goDownIn',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 500,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 500 // Sliding speed by using dots
	});

	// After end sliding
	popularPackagesSlider.on( "translated.owl.carousel" , function(e) {
		// popularPackagesSlider.find( ".owl-item" ).animate({ opacity : 1 , top : 0 } , { duration : 300 } );
	});

	// After dargging
	popularPackagesSlider.on( "drag.owl.carousel" , function(e) {
		// popularPackagesSlider.find( ".owl-item:not( .active )" ).css({ "opacity" : 0 , "top" : 30 });
	});

	// After dargging and change
	popularPackagesSlider.on( "changed.owl.carousel" , function(e) {
		// popularPackagesSlider.find( ".owl-item:not( .active )" ).css({ "opacity" : 0 , "top" : 30 });
	});
}


// *** Lightbox Iframe *** //
function lightboxIframe() {
	$( ".lightbox-iframe" ).magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});	
}


// *** Lightbox Image *** //
function lightboxImage() {
	$( ".lightbox-img" ).magnificPopup({
		type: 'image',
		gallery:{
			enabled: false
		},
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});	
}

// *** Lightbox Gallery *** //
function lightboxGallery() {
	$( ".lightbox-gallery" ).magnificPopup({
		type: 'image',
		gallery:{
			enabled: true
		},
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});	
}


// *** Tour Guide Slider *** //
function tourGuideSlider() {
	var tourGuideSlider = $( ".tour-guide-slider > .owl-carousel" );
	tourGuideSlider.owlCarousel({
		// items: 3,
		rtl: owlRtl,
		autoplay: false,
		autoplaySpeed: 600, // Sliding autoplay speed
		autoplayTimeout: 3000, // Autoplay interval timeout.
		dragEndSpeed: 500, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: false,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 30, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: false, // show prev and next buttons
		dots: true, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        items : 1
		    },
		    480 : {
		        items : 1
		    },
		    768 : {
		        items : 2
		    },
		    1200 : {
		        items : 3
		    }
		},
		autoHeight: false,
		autoWidth: false,
		// animateOut: 'goDownOut',
	    // animateIn: 'goDownIn',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 500,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 500 // Sliding speed by using dots
	});
}


// *** Testmonials Slider *** //
function testmonialsSlider() {
	var testmonialsSlider = $( ".testmonials-slider > .owl-carousel" );
	testmonialsSlider.owlCarousel({
		items: 1,
		rtl: owlRtl,
		autoplay: false,
		autoplaySpeed: 600, // Sliding autoplay speed
		autoplayTimeout: 3000, // Autoplay interval timeout.
		dragEndSpeed: 500, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: false,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 30, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: false, // show prev and next buttons
		dots: true, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        items : 1
		    },
		    480 : {
		        items : 1
		    },
		    768 : {
		        items : 1
		    }
		},
		autoHeight: false,
		autoWidth: false,
		// animateOut: 'goDownOut',
	    // animateIn: 'goDownIn',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 500,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 500 // Sliding speed by using dots
	});

	// After end sliding
	testmonialsSlider.on( "translated.owl.carousel" , function(e) {
		// testmonialsSlider.find( ".owl-item" ).animate({ opacity : 1 , top : 0 } , { duration : 300 } );
	});

	// After dargging
	testmonialsSlider.on( "drag.owl.carousel" , function(e) {
		// testmonialsSlider.find( ".owl-item:not( .active )" ).css({ "opacity" : 0 , "top" : 30 });
	});

	// After dargging and change
	testmonialsSlider.on( "changed.owl.carousel" , function(e) {
		// tourGuideSlider.find( ".owl-item:not( .active )" ).css({ "opacity" : 0 , "top" : 30 });
	});
}


// *** Clients Slider *** //
function clientsSlider() {
	var clientsSlider = $( ".clients-slider > .owl-carousel" );
	clientsSlider.owlCarousel({
		items: 4,
		rtl: owlRtl,
		autoplay: false,
		autoplaySpeed: 600, // Sliding autoplay speed
		autoplayTimeout: 3000, // Autoplay interval timeout.
		dragEndSpeed: 500, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: false,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 30, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: false, // show prev and next buttons
		dots: false, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        items : 1
		    },
		    480 : {
		        items : 2
		    },
		    768 : {
		        items : 3
		    },
		    992 : {
		        items : 4
		    }
		},
		autoHeight: false,
		autoWidth: false,
		// animateOut: 'goDownOut',
	    // animateIn: 'goDownIn',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 500,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 500 // Sliding speed by using dots
	});
}


// *** Contact Form *** //
function contactFormValidation() {
	$( "#contact-form" ).validate({
		// rules
		rules: {
			cfName: {
				required: true,
				minlength: 3
			},
			cfEmail: {
				required: true,
				email: true
			},
			cfMessage: {
				required: true,
				minlength: 8,
				maxlength: 500
			}
		}
	});

	var errorMsgData = $( ".cf-notifications" ).data( "error-msg" ),
		errorMsgDefault = 'Please Follow Error Messages and Complete as Required',
		errorMsg = ( errorMsgData ) ? ( errorMsgData ) : errorMsgDefault;

	// Submit event
	$( "#contact-form" ).on( "submit" , function( event ) {
	    if ( event.isDefaultPrevented() ) {
		    var errorContent = '<i class="cf-error-icon fa fa-close"></i>' +
		                       errorMsg;
			cfSubmitMSG(false, errorContent);
	        cfError();
	    } else {
	        event.preventDefault();
	        cfSubmitForm();
	    }
	});
}

function cfSubmitForm(){
    // Initiate Variables With Form Content
    var name = $( "#cfName" ).val();
    var email = $( "#cfEmail" ).val();
    var message = $( "#cfMessage" ).val();

    $.ajax({
        type: "POST",
        url: "./php/cf-process.php",
        data: "cfName=" + name + "&cfEmail=" + email + "&cfMessage=" + message,
        success : function(text){
            if ( text == "success" ){
                cfSuccess();
            } else {
                cfError();
                cfSubmitMSG( false, text );
            }
        }
    });
}

function cfSuccess() {
	var successMsgData=$(".cf-notifications").data("success-msg"),successMsgDefault="Thank you for your submission :)",successMsg=successMsgData?successMsgData:successMsgDefault;$("#contact-form")[0].reset();var successContent='<i class="cf-success-icon fa fa-check"></i>'+successMsg;cfSubmitMSG(!0,successContent),$(".cf-notifications-cont").addClass("sent"),$(".cf-notifications").css("opacity",0),$(".cf-notifications").slideDown(300).animate({opacity:1},300).delay(5e3).slideUp(400);
}

function cfError() {
	$( ".cf-notifications" ).css( "opacity", 0 );
    $( ".cf-notifications" ).slideDown( 300 ).animate( { "opacity" : 1 } , 300 );
	$( ".cf-notifications-cont" ).removeClass( "sent" );
}

function cfSubmitMSG( valid, msg ) {
	var msgClasses;msgClasses=valid?"shake animated":"bounce animated",$(".cf-notifications").delay(300).addClass(msgClasses).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("shake bounce animated")}),$(".cf-notifications").children(".cf-notifications-cont").html(msg);
}


} )( jQuery );

