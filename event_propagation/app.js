$(function() {
	$("h5").on("click", function(event) {
		alert("You clicked the header");
		event.stopPropagation();
	});
	$("div").on("click", function() {
		alert("You clicked the div")
	});
});