$(document).ready(function(){


	$('.switcher').each(function(){

		var _picEl = $(this),
			_switchEl = $(this).find('.switchNav'),
			_switchers =  $(this).find('.switch');

		_switchers.click(function(){
			
			var thisEl = $(this);
			if(thisEl.hasClass('.active')) {return;}

			_switchEl.find('.active').removeClass('active');
			thisEl.addClass('active ');

			var oldLayout = _picEl.find('.switchSelected');
			oldLayout.removeClass('switchSelected');

			var id = thisEl.attr('id').split('for_')[1];
			var newLayout = jQuery('#' + id);
			newLayout.addClass('switchSelected');

			console.log('ok');

		});

	});
	
});