// JavaScript Document
function changefontsize(fontsize) {
    var getfontsize = $("body").css('font-size');

    getfontsize = getfontsize.replace(/\D/g, '');



    if (fontsize == "plus") {
        getfontsize++;
        getfontsize++;
        if (screen.width == 768) {
            if (getfontsize > 20) getfontsize = 20;
        }
        else if (screen.width < 768) {
            if (getfontsize > 19) getfontsize = 19;
        }
        else {
            if (getfontsize > 22) getfontsize = 22;
        }

        $('body').css("font-size", getfontsize + "px");
    }
    else if (fontsize == "minus") {
        getfontsize--;
        getfontsize--;

        if (screen.width == 768) {
            if (getfontsize < 16) getfontsize = 16;
        }
        else if (screen.width < 768) {
            if (getfontsize < 15) getfontsize = 15;
        }
        else {
            if (getfontsize < 18) getfontsize = 18;
        }
        

        $('body').css("font-size", getfontsize + "px");
    }
    else if (fontsize == "0Mobile") {
        getfontsize = 15;
        $('body').css("font-size", getfontsize + "px");
    }
    else {
        getfontsize = 18;
        $('body').css("font-size", getfontsize + "px");
    }


}

function closeothermenu(menuid) {
    //alert(menuid);
    $('#' + menuid).removeClass("in");

}

// Dropdown Menu Fade    
jQuery(document).ready(function () {
    $(".mouseovermenu .dropdown").hover(
        function () {
            $('.mouseovermenu .dropdown-menu', this).stop().fadeIn("fast");
        },
        function () {
            $('.mouseovermenu .dropdown-menu', this).stop().fadeOut("fast");
        });
});

// hides ada verified check box  
$(document).ready(function () {

    $("#ctl00_PlaceHolderMain_ctl00_ctl00_ctl00_BooleanField").parent().parent().parent().hide();

})