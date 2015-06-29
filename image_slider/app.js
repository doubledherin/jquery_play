$(function() {
	var sliderWrapper = $("#slider");
	var sliderList = sliderWrapper.children("ul");
	var sliderItems = sliderList.children("li");
	var buttons = $(".button");

	var animateSlider = function(direction, duration) {
		if(direction === "+") {
			sliderList.animate({
				"margin-left" : "+=300px"
			}, duration);
		} else {
			sliderList.animate({
				"margin-left" : "-=300px"
			}, duration);
		}
	};
	buttons.on("click", function() {
		if($(this).hasClass("back")) {
			animateSlider("+", 1000);
		} else {
			animateSlider("-", 1000);
		};
	});
})