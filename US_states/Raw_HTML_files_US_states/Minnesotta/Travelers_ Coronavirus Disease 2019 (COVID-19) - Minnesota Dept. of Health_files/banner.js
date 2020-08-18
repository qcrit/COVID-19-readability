$(function() {
    var headerImg = $(".bannerImg");
	var headerImgSmall = $(".bannerImg-small");
	var headerTitle = $(".title");
	var navigation = $("#navigation");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();  
        if (scroll >= 50) {
            headerImg.addClass('hidden');
        } else {
            headerImg.removeClass('hidden');
        }
    });	
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        if (scroll >= 50) {
			headerImgSmall.removeClass('bannerImg-small hidden').addClass('bannerImg-small');
        } else {
			headerImgSmall.addClass('bannerImg-small hidden').removeClass('bannerImg-small');  
        }
    });	
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        if (scroll >= 50) {
            headerTitle.removeClass('hidden');
			navigation.addClass("hidden");
        } else {
            headerTitle.addClass('hidden');
			navigation.removeClass("hidden");
        }
    });
});