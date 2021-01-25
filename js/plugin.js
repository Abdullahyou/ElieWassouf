$(document).ready(function () {
  /* -- Style navbar for resaponsive -- */
	if($(window).innerWidth() <= 1200 && $(window).innerWidth() > 991) {
		var space_side = ($(window).innerWidth() - 970) / 2;
		$('.navbar').css({
			right: space_side + 'px'
		})
	}
	if($(window).innerWidth() <= 991 && $(window).innerWidth() > 767) {
		var space_side = ($(window).innerWidth() - 750) / 2;
		$('.navbar').css({
			right: space_side + 'px'
		})
	}
	if($(window).innerWidth() <= 767) {
		var space_side = ($(window).innerWidth() - 750) / 2;
		$('.navbar').css({
			right: '15px'
		})
	}
	$(window).resize(function(){
		if($(window).innerWidth() <= 1200 && $(window).innerWidth() > 991) {
			var space_side = ($(window).innerWidth() - 970) / 2;
			$('.navbar').css({
				right: space_side + 'px'
			})
		}
		if($(window).innerWidth() <= 991 && $(window).innerWidth() > 767) {
			var space_side = ($(window).innerWidth() - 750) / 2;
			$('.navbar').css({
				right: space_side + 'px'
			})
		}
		if($(window).innerWidth() <= 767) {
			var space_side = ($(window).innerWidth() - 750) / 2;
			$('.navbar').css({
				right: '15px'
			})
		}
	});
	$('.navbar-toggle').on('click',function(){
		$('.navbar-collapse').addClass('opened');
		$('.opacity-all').fadeIn(500);
	});
	$('.opacity-all').on('click',function(){
		$('.navbar-collapse').removeClass('opened');
		$(this).fadeOut(500);
		$('.search-area').removeClass('sticky')
	})
	/* -- ./Style navbar for resaponsive -- */ 
    
    $('.main-carousel').flickity({
        cellAlign: 'left',
		wrapAround: true,
        fade: 'true',
        pageDots: false
	});
	/* -- ./Slider -- */
   
   // shuffle //
    var grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        originLeft: false,
        layoutMode: 'fitRows',
  });
  $('.filter button').on('click',function(){
        var value = $(this).attr('data-name');
        $(grid).isotope({
              filter: value
        });
  })
    
})