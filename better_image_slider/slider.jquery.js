(function($) {
	$.fn.slider = function(options) {
		var defaults = {};
		var settings = $.extend({}, defaults, options);
		debugger;
		return this.each(function() {
			var $slider = $(this);
			var $sliderList = $slider.children("ul");
			var $sliderItems = $sliderList.children("li");
			var $allButtons = $slider.find(".button");
			var $buttons = {
				next: $allButtons.filter(".next"),
				back: $allButtons.filter(".back")
			};
			debugger;
			var animateSlider = function(direction, duration, callback) {
				$sliderList.stop(true, true).animate({
					"margin-left" : direction + "=300px"
				}, duration, callback);
			};
			$allButtons.on("click", function(event) {
				var isBackButton = $(this).hasClass("back");
				animateSlider((isBackButton ? "+" : "-"), 1000);
				event.preventDefault();
			});
		});
	};
}) (jQuery);