$(document).ready(function(){
    
	$('.sticky-stuff').stick_in_parent({ 
		offset_top: 100,
		bottoming: true,
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



