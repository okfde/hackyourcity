$(document).ready(function(){

    //add random logo on home page
    if($('.page-home').length > 0){
        var zuffi = Math.floor((Math.random() * 4) + 1);
        var $logo = $('.logo-h4c');
        $logo.attr('src','/img/svg/h4c_logo_big_lab'+zuffi+'.svg');
    }

    //sticky header on lab pages
    if($('.page-lab').length > 0){

        var $navBar = $('.navbar');
        var nvH = $navBar.height();

        $( document ).scroll(function() {
            var scrollTop = $(document).scrollTop();

            if(scrollTop >= nvH){
                //add sticky header

                if(!$navBar.hasClass('navbar-fixed')){
                    $navBar.addClass('navbar-fixed');
                }

            } else {
                //remove sticky header

                if($navBar.hasClass('navbar-fixed')){
                    $navBar.removeClass('navbar-fixed');
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



