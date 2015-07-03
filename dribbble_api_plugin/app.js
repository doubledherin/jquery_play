// $(function() {
// 	$.dribbble.getShot({
// 		id: "2126182-Eagle",
// 		callback: function(data) {
// 			console.log(data);
// 		}
// 	});
// });

$(function() {
	$.dribbble.getPlayerShots({
		id: "mariagroenlund",
		callback: function(data) {
			console.log(data);
		}
	});
});
