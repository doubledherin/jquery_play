$(function() {
	$("a").on("click", function(event) {
		$("div").css("background", "blue");
		event.preventDefault();
	});
});