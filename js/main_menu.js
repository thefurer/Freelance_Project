jQuery(document).ready(function($) {

  $('.ds-slider').slick({
	    dots: false,
	    infinite: true,
	    arrows: false,
	    speed: 600,
	    centerMode: true,
	  	slidesToShow: 3,
	  	prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='ri-arrow-left-line' ></i></button>",
	  	nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='ri-arrow-right-line'></i></button>",
	  	responsive: [
	  	    {
	  	      breakpoint: 1024,
	  	      settings: {
	  	        slidesToShow: 3,
	  	        infinite: true,
	  	        dots: true
	  	      }
	  	    },
	  	    {
	  	      breakpoint: 600,
	  	      settings: {
	  	        slidesToShow: 2,
	  	      }
	  	    },
	  	    {
	  	      breakpoint: 480,
	  	      settings: {
	  	        slidesToShow: 1,
	  	      }
	  	    }
	  	    // You can unslick at a given breakpoint now by adding:
	  	    // settings: "unslick"
	  	    // instead of a settings object
	  	  ]
  });
   

});