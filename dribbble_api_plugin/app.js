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
		player: "mariagroenlund",
		callback: function(data) {
			console.log(data);
		}
	});
});
