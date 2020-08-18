﻿
jQuery(document).ready(function($) {
    var f = $("#main_folding"),
        l = $("#main_left");
    //	r=$("#main_right") 
    //	intervalf

    // f.removeClass("open");
    // l.addClass("reduce").removeClass("unfold");
    f.click(function(e) {
        if (!$(this).hasClass("open")) {
            $(this).addClass("open");
            l.addClass("unfold");
            $("#main_left .searchBox").removeClass("open")
        } else {
            $(this).removeClass("open");
            l.removeClass("unfold");
            $("#main_left .searchBox").removeClass("open")
        }
    });

    /*	
		l.mouseleave(function(e) {
			function out(e){
				f.removeClass("open");
				l.removeClass("unfold");
				$("#main_left .searchBox").removeClass("open");
			}
			interval = setInterval(out,500); 
		})
		l.mouseover(function(e) {
			clearTimeout(interval);
		})
	*/

    $("#main_left.reduce #searchaction").click(function(e) {
        if ($(this).parent(".searchBox").hasClass("open")) {
            $(this).parent(".searchBox").removeClass("open")
        } else {
            $(this).parent(".searchBox").addClass("open")
        }
    });
    $("#main_left #dnngo_megamenu .primary_structure").children("li").each(function() {
        if ($(this).children("a").children("span").find("img").length < 1) {
            $(this).children("a").children("span").append("<i>" + $(this).children("a").children("span").html().substring(0, 1) + "</i>")
        }
    });

    //menu
    var leftsubmenu = l.find("#dnngo_megamenu").find(".dnngo_boxslide");
    leftsubmenu.each(function() {
        var e = $(this);
        e.parent().parent().mouseenter(function() {
            if (e.height() > $(window).height()) {
                e.css({
                    "height": $(window).height(),
                    "overflow": "auto",
                    "marginRight": "-20px",
                    "width": e.parent(".dnngo_menuslide").width() + 18
                });
                if (!e.parent().hasClass("submenu_box")) {
                    e.wrap("<div class='submenu_box'></div>").parent(".submenu_box").css({
                        "overflow": "hidden"
                    })
                }
            } else {
                e.attr("style", " ")
                if (e.parent().hasClass("submenu_box")) {
                    e.unwrap();
                }
            }
        })


    });

})

jQuery(document).ready(function($) {
    var f = $("#right_folding"),
        r = $("#main_right"),
        c = $("#rightClose");
    f.click(function(e) {
        if (!$(this).hasClass("open")) {
            $(this).addClass("open");
            r.addClass("unfold");
        } else {
            $(this).removeClass("open");
            r.removeClass("unfold");
        }
    });
    c.click(function(e) {
        f.removeClass("open");
        r.removeClass("unfold");
    });
})

jQuery(document).ready(function($) {
    if ($(".Login").find(".buttonGroup").find("li").length > 2) {
        $(".Login").addClass("info");
    }
})

//Top:
jQuery(document).ready(function($) {
	jQuery('#to_top').click(function() {
		jQuery('body,html').animate({
			scrollTop: 0
		},
		800);
	});
	
	var backtop=function(){
	Math.max.call(window.scrollTop, document.body.scrollTop, document.documentElement.scrollTop)>245?jQuery('#to_top').fadeIn(300):jQuery('#to_top').fadeOut(300)
	}
	$(window).load(function(){
		backtop();
	})
	$(window).scroll(function(){
		backtop();
	})
	
});

jQuery(document).ready(function ($) {
	$(".dnngo_slide_menu").each(function(index, element) {
		$(this).parent().addClass("slide")
	});
})

function animationShow(e,option){
		var e=$(e),
			option=$(option);
		e.click(function() {
			var interval;	
			
			if(!e.hasClass("Open")){
				e.addClass("Open");
				option.fadeIn();
			} 
			else{
				e.removeClass("Open");
				option.fadeOut();
			}
			e.parent().mouseover(function() {
			clearTimeout(interval);
			})
			e.parent().mouseout(function() {
				interval = setInterval(function(){e.removeClass("Open");option.fadeOut();clearTimeout(interval);},1000); 
			})
		})
}
	
jQuery(document).ready(function($) {
	animationShow(".searchbut",".searchBox");
	
	$(".searchbut").on("click",function() {
		$(".searchBox").find(".NormalTextBox").focus();
	})
	
	$("#mobile_search").on("click",function() {
		$("#search2").fadeToggle(300);
		$("#search2").find(".NormalTextBox").focus();
		$(this).toggleClass("Open");
		
	})
	
})




//For Menu Lavalamp:

/*jQuery(document).ready(function($) {		
	animatedcollapse.addDiv('search', 'fade=1,speed=200,group=mobile,hide=1')
	animatedcollapse.init()
});
*/
//Mega_menu

jQuery(document).ready(function($) {		

$(".HeadPane_mobile").html($(".HeadPane .contentpane").html())
})
	
	
jQuery(document).ready(function ($) {
		var e=$(".roll_menu");
		if(e.length!=0){
			e.roll_menu({ MTop:e.offset().top+e.height()+100 });
		} 
});

	
$(window).load(function () {
	
	
	/* Set CSS3 Animations via class: http://daneden.me/animate/ 
	---------------------------------------------*/
	$("#dnn_pnav li").hover(
		function () { $("ul", this).removeClass().addClass('fadeInDown'); },
		function () { $("ul", this).removeClass().addClass('fadeOutUp'); }
	);
	$("#dnn_pnav li ul li").hover(
		function () { $("ul", this).removeClass().addClass('fadeInLeft'); },
		function () { $("ul", this).removeClass().addClass('fadeOutRight'); }
	);
}); 



if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement("style");
  msViewportStyle.appendChild(
    document.createTextNode(
      "@-ms-viewport{width:auto!important}"
    )
  );
  document.getElementsByTagName("head")[0].
    appendChild(msViewportStyle);
}



(function($,window,undefined) {

	var nua = navigator.userAgent;
	var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));

	function browserSize(){
			wh = $(window).height();
			ww = $(window).width();
			dh = $(document).height();
			ar = ww/wh;
	};

function init() {
    browserSize();
    if (is_android) {
        $('html').addClass('android-browser');
    } else {
        $('html').addClass('no-android-browser');
    }    
    $('html').addClass('loaded');
    eventHandlersOnce();
};



})(jQuery, window);


//chart 
$(window).load(function() {
	"use strict";
	var e_1 = $(".percentage");
	e_1.easyPieChart({
		animate: 2000,
		barColor: e_1.css('color'),
		trackColor: "#e7e7e7",
		size: 140,
		lineWidth: 5,
		lineCap: 'round',
		scaleColor: false,
		onStep: function(e) {
			this.$el.find("span").text(~~e)
		}
	});
	var e_2 = $(".percentage2");
	e_2.easyPieChart({
		animate: 2000,
		barColor: e_2.css('color'),
		trackColor: "#e7e7e7",
		size: 140,
		lineWidth: 16,
		scaleColor: false,
		onStep: function(e) {
			this.$el.find("span").text(~~e)
		}
	});
	var e_2 = $(".percentage3");
	e_2.easyPieChart({
		animate: 2000,
		barColor: e_2.css('color'),
		trackColor: "#F3F3F3",
		size: 150,
		lineWidth:6,
		lineCap: 'round',
		scaleColor: false,
		onStep: function(e) {
			this.$el.find("span").text(~~e)
		}
	})

});



$(document).ready(function() {
	$(".carousel_1").each(function() {
  		$(this).owlCarousel({
				items :	$(this).attr("data-items")	    ? $(this).data("items")		  :4,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true
		});
	})
	$(".carousel_2").each(function() {
		$(this).owlCarousel({
				items :	$(this).attr("data-items")	    ? $(this).data("items")		  :3,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true
		});
	})
	$(".carousel_3").each(function() {
		var e=$(this);
			e.owlCarousel({
		   singleItem : true,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true,
		  afterAction : function () {var current = this.currentItem;e.find(".owl-item").eq(current).addClass("synced").siblings().removeClass("synced")}
		});
	})
	$(".carousel_4").each(function() {
		$(this).owlCarousel({
		items :	$(this).attr("data-items")	   			? $(this).data("items")		  :5,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true,
		 itemsDesktop : [1550,4],
	itemsDesktopSmall : [1250,3],	  
		  itemsTablet : [930,2],
		  itemsMobile : [620,1]
		});
	})
	$(".carousel_5").each(function() {
  		$(this).owlCarousel({
				items :	$(this).attr("data-items")	    ? $(this).data("items")		  :3,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true
		});
	})
	$(".carousel_6").each(function() {
  		$(this).owlCarousel({
				items :	$(this).attr("data-items")	    ? $(this).data("items")		  :4,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true
		});
	})
	$(".carousel_7").each(function() {
  		$(this).owlCarousel({
		items :	$(this).attr("data-items")	   			? $(this).data("items")		  :5,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true,
		 itemsDesktop : [1550,4],
	itemsDesktopSmall : [1250,3],	  
		  itemsTablet : [930,2],
		  itemsMobile : [620,1]
		});
	})
	
		$(".carousel_8").each(function() {
  		$(this).owlCarousel({
				items :	$(this).attr("data-items")	    ? $(this).data("items")		  :5,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true
		  
		});
	})
	
	
	
	
});

$(document).ready(function() {
 $(".sync_carousel_1").each(function() {
		var sync = $(this),
		sync1 = sync.find(".carousel_main"),
		sync2 = sync.find(".carousel_nav");
		sync1.owlCarousel({
			singleItem: true,
			slideSpeed: 1000,
			navigation: false,
			pagination: false,
			afterAction: syncPosition,
			responsiveRefreshRate: 200,
		});
		sync2.owlCarousel({
			items: 6,
			itemsDesktop: [1199, 6],
			itemsDesktopSmall: [979, 6],
			itemsTablet: [768, 4],
			itemsMobile: [479, 3],
			pagination: false,
			responsiveRefreshRate: 100,
			afterInit: function(el) {
				el.find(".owl-item").eq(0).addClass("synced");
			}
		});
		function syncPosition(el) { 
			var current = this.currentItem;
			sync2.find(".owl-item").removeClass("synced").eq(current).addClass("synced");
			if (sync2.data("owlCarousel") !== undefined) {
				center(current)
			}
		}
		sync2.on("click", ".owl-item",
		function(e) {
			e.preventDefault();
			var number = $(this).data("owlItem");
			sync1.trigger("owl.goTo", number);
		});
		function center(number) {
			var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for (var i in sync2visible) {
				if (num === sync2visible[i]) {
					var found = true;
				}
			}
			if (found === false) {
				if (num > sync2visible[sync2visible.length - 1]) {
					sync2.trigger("owl.goTo", num - sync2visible.length + 2)
				} else {
					if (num - 1 === -1) {
						num = 0;
					}
					sync2.trigger("owl.goTo", num);
				}
			} else if (num === sync2visible[sync2visible.length - 1]) {
				sync2.trigger("owl.goTo", sync2visible[1])
			} else if (num === sync2visible[0]) {
				sync2.trigger("owl.goTo", num - 1)
			}
		}
	})
})



$(document).ready(function() {
 $(".sync_carousel_2").each(function() {
		var sync = $(this),
		sync1 = sync.find(".carousel_main"),
		sync2 = sync.find(".carousel_nav");
		sync1.owlCarousel({
			singleItem: true,
			slideSpeed: 1000,
			navigation: true,
			pagination: false,
			afterAction: syncPosition,
			responsiveRefreshRate: 200,
		});
		sync2.owlCarousel({
			items: 6,
			itemsDesktop: [1199, 6],
			itemsDesktopSmall: [979, 6],
			itemsTablet: [768, 4],
			itemsMobile: [479, 3],
			pagination: false,
			responsiveRefreshRate: 100,
			afterInit: function(el) {
				el.find(".owl-item").eq(0).addClass("synced");
			}
		});
		function syncPosition(el) { 
			var current = this.currentItem;
			sync2.find(".owl-item").removeClass("synced").eq(current).addClass("synced");
			if (sync2.data("owlCarousel") !== undefined) {
				center(current)
			}
		}
		sync2.on("click", ".owl-item",
		function(e) {
			e.preventDefault();
			var number = $(this).data("owlItem");
			sync1.trigger("owl.goTo", number);
		});
		function center(number) {
			var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for (var i in sync2visible) {
				if (num === sync2visible[i]) {
					var found = true;
				}
			}
			if (found === false) {
				if (num > sync2visible[sync2visible.length - 1]) {
					sync2.trigger("owl.goTo", num - sync2visible.length + 2)
				} else {
					if (num - 1 === -1) {
						num = 0;
					}
					sync2.trigger("owl.goTo", num);
				}
			} else if (num === sync2visible[sync2visible.length - 1]) {
				sync2.trigger("owl.goTo", sync2visible[1])
			} else if (num === sync2visible[0]) {
				sync2.trigger("owl.goTo", num - 1)
			}
		}
	})
})
//source_code 
jQuery(document).ready(function($) {
	var $source=$(".source_code");
	 $source.find("a").click(
	 function(){
		   $(this).siblings("pre").css("display")=="none" ? $(this).siblings("pre").slideDown(200):$(this).siblings("pre").slideUp(200);
		   return false;
	})
})



jQuery(function() {
	jQuery(".player").mb_YTPlayer({
		onReady: function() {
			jQuery("#eventListener").append(" (Player is ready)");
		}
	}).each(function() {
		var e = $(this),
	    n = 1;
		e.children(".Play").click(function() {
			if (n == 0) {
				e.playYTP();
				$(this).addClass("pause").removeClass("plays");
				n = 1;
			} else {
				e.pauseYTP();
				$(this).addClass("plays").removeClass("pause");
				n = 0;
			}
		});
	});
});

jQuery(document).ready(function ($) {
	$("#header_slide").on("click",function(){
	 var e=$(this),box=$("#box-container"),ri=$(".rightmain");
	 if(box.length!=0){
	  if(box.hasClass("delay")) return false;	
	  if(!box.hasClass("active")){
		box.addClass("active");
		e.removeClass("active");
		 $(this).delay(500).queue(function(){
			ri.one("click",function(){
				box.removeClass("active").addClass("delay").delay(500).queue(function(){$(this).removeClass("delay").dequeue()});
				e.addClass("active");
			})
			$(window).one("scroll",function(){
				box.removeClass("active").addClass("delay").delay(500).queue(function(){$(this).removeClass("delay").dequeue()});
				e.addClass("active");
			})
			$(this).dequeue();
		 }) 
		}else{
			box.toggleClass("active");
			e.toggleClass("active");
		}
	}else{
		e.toggleClass("active");
		$(".left-menu").toggleClass("active");
	}	
		
	})
})


jQuery(document).ready(function($) {
    $(".full_screen_pic").each(function() {
        var full = $(this).find("li");
        full.height($(window).height());
        $(window).resize(function() {
            full.height($(window).height())
        })
    });
    $("#nextPage,#H7_nextPage").click(function() {
            jQuery('body,html').animate({
                scrollTop: $(window).height()
            }, 500);
        })
        //	runs();

})


 //Google Map
//jQuery(document).ready(function($){
//	if(document.getElementById('gmap')){
//		jQuery('#gmap').gMap({
//			address:'Bear city, ny ',
//			zoom:11,	
//			markers:[
//				{address:'Bear city, ny ',html:'marker 1'},
//				{address:' 579 Allen Road Basking Ridge, NJ 07920 ',html:'marker 1'},
//				{address:' Mount Arlington, NJ 07856',html:'marker 1'}
//				]
//		}); 
//		}
//	if(document.getElementById('gmap2')){	
//	jQuery('#gmap2').gMap({
//			address:'Bear city, ny ',
//			zoom:11,	
//			markers:[
//				{address:'Bear city, ny ',html:'marker 1'},
//				{address:' 579 Allen Road Basking Ridge, NJ 07920 ',html:'marker 1'},
//				{address:' Mount Arlington, NJ 07856',html:'marker 1'}
//				]
//	});
//	}
//	jQuery('#gmap3').gMap({
//			address:'Bear city, ny ',
//			maptype:'hybrid',
//			zoom:8,			
//			scaleControl:true,
//			navigationControl:true,
//			markers:[
//				{address:'Bear city, ny ',html:'marker 1'},
//				{address:' 579 Allen Road Basking Ridge, NJ 07920 ',html:'marker 1'},
//				{address:' Mount Arlington, NJ 07856',html:'marker 1'}
//				]
//		}); 
		

//});


jQuery(document).ready(function ($) {
	if($("#dnn_content").offset().top<$(".header_bg").height()){
		$("#dnn_content").css("paddingTop",$(".header_bg").height())
	}
}) 

jQuery(document).ready(function ($) {
	if (!$(".HeaderPane").hasClass("DNNEmptyPane")) {
	$(".HeaderPane_mobile").html($(".HeaderPane .Normal").html())
	}
})
 
 
 
jQuery(document).ready(function($) {
var title=$(".price-table8 .price_border").eq(0);
	$(".price-table8 .price_border").each(function(index) {
		if(index!=0){
			$(this).find(".price_holder li").each(function(index) {
				$(this).prepend("<span class=\"price8_itm\">" + title.find(".price_holder li").eq(index).html()+":" + "<span>" )
			})
		}
	});
	 
 var priceTable8=function(){
		if($(window).width()<979){
			$(".price8_itm").show()
			title.hide();
		}else{
			$(".price8_itm").hide()
			title.show();
		}
	}
	priceTable8();
	$(window).resize(function() {
        priceTable8();
    });
})



jQuery(document).ready(function($) { 
	$(".modal").each(function() {$(this).insertAfter("body")}); 
});