$(document).ready(function(){

    //add random logo on home page
    if($('.page-home').length > 0){
        var zuffi = Math.floor((Math.random() * 4) + 1);
        var $logo = $('.logo-h4c');
        $logo.attr('alt','Hack your city').attr('src','/img/svg/h4c_logo_big_lab'+zuffi+'.svg');
    }



	$('.sticky-stuff').stick_in_parent({ 
		offset_top: 100,
		bottoming: true
		});

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


  
});



