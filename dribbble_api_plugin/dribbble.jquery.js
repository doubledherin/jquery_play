(function($) {
	var ajaxCall = function(url, data, callback) {
		return $.ajax({
			url: "http://api.dribbble.com" + url,
			dataType: "jsonp",
			data: data
		}).done(callback);
	};

	$.dribbble = {
		getShot: function(opts) {
			var settings = {
				callback: function() {}
			};
			var options = $.extend({}, settings, opts);
			ajaxCall("/shots/" + options.id, {}, options.callback);
		},
		getShots: function(opts) {
			var settings = {
				callback: function() {},
				per_page: 10,
				page: 1
			};
			var options = $.extend({}, settings, opts);
			ajaxCall("/shots/everyone", {
				page: options.page,
				per_page: options.per_page
			}, options.callback)
		},
		getPlayerShots: function(opts) {
			var settings = {
				player: "sturobson",
				callback: function() {},
				per_page: 10,
				page: 1
			};
			var options = $.extend({}, settings, opts);
			ajaxCall("/players/" + options.player + "/shots", {
				page: options.page,
				per_page: options.per_page
			}, options.callback)
		}
	};
}) (jQuery);