$(function() {
	$.ajax({
		"url": "/sampled.json",
		"type": "get",
		"dataType": "json",
		"success": function(data) {
			console.log(data);
		},
		"error": function(jqXHR, status, error) {
			console.log(status, error);
		}
	});
});