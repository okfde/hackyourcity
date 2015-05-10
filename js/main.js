$(document).ready(function(){

    //add random logo on home page
    if($('.page-home').length > 0){
        var zuffi = Math.floor((Math.random() * 4) + 1);
        var $logo = $('.logo-h4c');
        $logo.attr('src','/img/svg/h4c_logo_big_lab'+zuffi+'.svg');
    }

    /* getting viewport width */
    var responsive_viewport = $(window).width();

    //sticky header on lab pages
    if($('.page-lab').length > 0 && (responsive_viewport >= 768)){

        var $navBar = $('.navbar');
        var nvH = $navBar.height();
        var hasBeenIn = false; 
        var offset = 400;

        $( document ).scroll(function() {
            var scrollTop = $(document).scrollTop();
            if(scrollTop >= nvH ){
                //add sticky header

                if(!$navBar.hasClass('navbar-fixed')){
                    $navBar.addClass('navbar-fixed');
                }


                if(scrollTop >= nvH + offset ){
                    //slide in
                    if(!$navBar.hasClass('navbar-fixed-in')){
                        $navBar.addClass('navbar-fixed-in');
                    }

                    if($navBar.hasClass('navbar-fixed-out')){
                        $navBar.removeClass('navbar-fixed-out');
                    }

                    hasBeenIn = true;

                } else {
                    // slide out
                    if($navBar.hasClass('navbar-fixed-in')){
                        $navBar.removeClass('navbar-fixed-in');
                    }

                    if(!$navBar.hasClass('navbar-fixed-out') && hasBeenIn ){
                        $navBar.addClass('navbar-fixed-out');
                    }

                }


            } else {
                //remove sticky header

                if($navBar.hasClass('navbar-fixed')){
                    $navBar.removeClass('navbar-fixed');
                    $navBar.removeClass('navbar-fixed-out');
                    hasBeenIn = false;

                }

            }

        });
    }

	/*$('.sticky-stuff').stick_in_parent({ 
		offset_top: 100,
		bottoming: true
		});*/

	$('.slick-slider').slick({
	      dots: true,
	      infinite: true,
	      autoplay: true,
	      arrows: false,
	      speed: 300,
	      slidesToShow: 3,
	      variableWidth: true,
	      responsive: [
	          {
	            breakpoint: 480,
	            settings: {
	              slidesToShow: 1,
	              variableWidth: false
	            }
	          }
	          // You can unslick at a given breakpoint now by adding:
	          // settings: "unslick"
	          // instead of a settings object
	        ]
	});

	$('.link-more[data-toggle=collapse]').on('click', function() {
		$(this).css('display','none');
	});
  
});



