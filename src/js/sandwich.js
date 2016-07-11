$(document).ready(function(){

	(function($) {

		$('.header__sandwich').click(function(e){
			e.preventDefault();
			$('.header__nav').toggleClass('header__nav--expanded');
			$('body').toggleClass('darkenSite');
		});
	
		$('.site-cache').click(function(e){
			$('.header__nav').removeClass('header__nav--expanded');
			$('body').removeClass('darkenSite');
		});

		$('.header').hover(function(e){
			
			$('.header__next').addClass('headerHover');
		}, function(){
			$('.header__next').removeClass('headerHover');
		});

	})(jQuery);

});
