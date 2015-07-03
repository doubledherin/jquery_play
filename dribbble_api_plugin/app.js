// $(function() {
// 	$.dribbble.getShot({
// 		id: "2126182-Eagle",
// 		callback: function(data) {
// 			console.log(data);
// 		}
// 	});
// });

$(function() {
	$.dribbble.getPlayerShotsFollowing({
		id: "mariagroenlund",
		callback: function(data) {
			console.log(data);
		}
	});
});
