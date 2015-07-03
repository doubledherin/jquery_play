(function($) {

	var baseSettings = {
		callback: function() {},
		per_page: 10,
		page: 1,
		id: ""
	}
	var ajaxCall = function(url, options, pagination) {
		var data = {};
		if(pagination) {
			data.page = options.page
			data.per_page = options.per_page
		}
		return $.ajax({
			url: "http://api.dribbble.com" + url,
			dataType: "jsonp",
			data: data
		}).done(options.callback);
	};

	$.dribbble = {
		getShot: function(opts) {
			var options = $.extend({}, baseSettings, opts);
			ajaxCall("/shots/" + options.id, options, false);
		},
		getShots: function(opts) {
			var options = $.extend({}, baseSettings, opts);
			ajaxCall("/shots/everyone", options, true);
		},
		getPlayerShots: function(opts) {
			var options = $.extend({}, baseSettings, opts);
			ajaxCall("/players/" + options.id + "/shots", options, true);
		},
		getPlayerShotsFollowing: function(opts) {
			var options = $.extend({}, baseSettings, opts);
			ajaxCall("/players/" + options.id + "/shots/following", options, true);			
		}
	};
}) (jQuery);