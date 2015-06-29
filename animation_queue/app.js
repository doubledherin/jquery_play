$(function() {
	$("div")
	.animate({ "height" : 300 }, 3000)
	.hide(3000)
	.show(3000)
	.animate({ "width": 100 }, 3000)
	.css({"background": "red"})
});