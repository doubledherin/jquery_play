(function($) {
	$.dribbble = {
		getShot: function(id, callback) {
			var req = $.ajax({
				url: "http://api.dribbble.com/shots/" + id,
				dataType: "jsonp"
			});
			req.done(callback);
		},
		getShots: function(limit, callback) {
			if($.isFunction(limit)) {
				callback = limit;
				limit = 10;
			}
			var req = $.ajax({
				url: "http://api.dribbble.com/shots/everyone",
				data: {
					page: 1, 
					per_page: limit
				},
				dataType: "jsonp"
			});
			req.done(callback);
		}
	};
}) (jQuery);