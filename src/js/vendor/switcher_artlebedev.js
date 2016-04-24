function switcher_separate(picElement,switchElement,params){
	var obj = this;
	var _pic = picElement;
	var _switch = switchElement;
	var _hop = typeof params == "object" && typeof params.hop != "undefined" ? params.hop : true;

	var _switchers = _switch.find('.switch');

	_switchers.click(function(){
		var thisElement = jQuery(this);
		if(thisElement.hasClass('.active')) return;
		
		var scrollBase = document.body.scrollTop;
		
		_switch.find('.active').removeClass('active');
		thisElement.addClass('active');
		
		var oldLayout = _pic.find('.selected_layout');
		var heightOld = oldLayout.height();
		oldLayout.removeClass('selected_layout');
		
		var id = thisElement.attr('id').split('for_')[1];
		var newLayout = jQuery('#' + id);
		newLayout.addClass('selected_layout');
		var heightNew = newLayout.height();

		if(_hop==true){
			var scrollChange = document.body.scrollTop;
			var scrollOffset = scrollBase - scrollChange;
			var heightOffset = heightNew - heightOld;
			document.body.scrollTop = document.body.scrollTop + scrollOffset + heightOffset;
		}
	});

	_pic.each(function() {
		jQuery(this).find('img').click(function() {
			var imageId = jQuery(this).parents('.switch_screenshot')[0].id;
			var nextItem = _switchers.filter('#for_' + imageId).next('.switch');

			if (nextItem.length === 0) {
				nextItem = _switchers.eq(0);
			}

			nextItem.trigger('click');
		});
	})
}
jQuery(function(){
	jQuery('.switcher').each(function(){
		var thisElement = (jQuery(this));
		if(!thisElement.hasClass('switcher-separate')){
			var picElement = thisElement;
			var switchElement = thisElement.find('div.descr');
		
			new switcher_separate(picElement,switchElement);
		}
	});
});