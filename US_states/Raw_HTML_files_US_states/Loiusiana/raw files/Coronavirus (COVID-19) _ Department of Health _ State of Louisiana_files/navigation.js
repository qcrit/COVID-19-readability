$(function() {
	var relative_url = window.location.href.replace(/^(?:\/\/|[^\/]+)*\//, "");
	
	var newsroom_li = null;
	var calendar_li = null;
	
	$("ul.navbar-nav>li").each(function() {
		var main_li = $(this);
		
		var main_h = main_li.find("a").first().attr("href");
		if ( main_h == relative_url || main_h == ('/' + relative_url)) {
			main_li.addClass("active");
			return false;
		}		
		
		if (main_li.find("a").first().html().toLowerCase() == "newsroom") newsroom_li = main_li;
		if (main_li.find("a").first().html().toLowerCase() == "events") calendar_li = main_li;
		
		var sub_ul = main_li.find("ul").first();
		
		if (sub_ul.length > 0) {
			sub_ul.find("li").each(function() {
				var h = $(this).find("a").attr("href");				
				if (h == relative_url || h == ('/' + relative_url)) {
					main_li.addClass("active");
					return false;
				}
			});	
		}
	});
	
	//dealing with Newsroom Nav	
	if (newsroom_li != null) {
		if (relative_url.indexOf("news/") != -1 || relative_url.indexOf("newsroom/") != -1) {
			newsroom_li.addClass("active");
			return false;
		}
	}
	
	//dealing with Events Nav	
	if (calendar_li != null) {
		if (relative_url.indexOf("calendar/") != -1) {
			calendar_li.addClass("active");
			return false;
		}
	}
});