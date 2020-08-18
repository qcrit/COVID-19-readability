// all the js for internet facelift goes here

function popularLinksAdjust() {

    var itemHeight = 0;

    $('.hero').each(function () {

        var
            itemH = $(this).outerHeight();

        itemHeight = itemHeight + itemH;
    });

    $('.link-list').height(itemHeight);

}

function markEditMode() {
    var IsEditMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;
    // Detect edit mode on system pages
    // g_disableCheckoutInEditMode is only useful on publishing pages

    if ((typeof g_disableCheckoutInEditMode !== "undefined" && g_disableCheckoutInEditMode === true) || IsEditMode == "1") {
        $("HTML").addClass("pm-edit-mode");
    }
    else {
        $("HTML").addClass("pm-display-mode");
    }
};

// Accessability Function
function checkAccessability() {

    // This will look for any pre-fetched image add an alt tag to it. id=4
    $('#imgPrefetch img').each(function () {

        $(this).attr('role', 'presentation').attr('alt', '');

    });

    // This will look for any empty H1 or H2 tags and will remove them to make the ADA compliant id=11
 $('h1,h2').each(function () {

        var
            itemText = $(this).text(),
            id = $(this).attr("id");

        if (itemText === '' && id === '') {
            $(this).remove();

        }

    });

    // This will change all DataProvider id's to have a number apanded so that they will be unique. id=12
    if ($('div[id="DataProvider"]').length > 1) {

        $('div[id="DataProvider"]').each(function (i) {

            var
                itemName = 'DataProvider';

            $(this).attr('id', itemName + i);

        });

    }

    // Changes the AccessKey for Search Povider to P. id=16
    if ($('#centeredSearchProv').length > 0) {

        $('#centeredSearchProv input').attr('accesskey', 'P');

    }

    //Removes access key for Facebook and State Benefits headers
    $('a[href="/VetServices/Pages/State-Benefits.aspx"]').removeAttr('accesskey');
    $('a[href="https://www.facebook.com/CalVetServices"]').removeAttr('accesskey');

    // fix .NET contact form label issue. id=25
    //var formFieldsToProcess = [ "txtFirstName", "txtLastName", "txtEmail", "txtPhone", "ddlTopics" ];
    //$.each( formFieldsToProcess, function( index, value ){
    //            var fieldID = $('label[for="' + value + '"]').parent().parent().find('[name*="' + value + '"]').attr("id");
    //            $('label[for="' + value + '"]').attr("for",fieldID);
    //});

    // fix imgPrefetch to hide it from screen readers. id=13
    $('#imgPrefetch img').attr("aria-hidden", "true");

    // Remove search icon and duplicate. id=21
    $('#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_SearchLink > img').remove();
    //$('#centeredSearchProv #SearchBox').attr('id','SearchBox1');
    //$('#centeredSearchProv #searchImg').attr('id','searchImg1');

    if ($("#searchBox").length > 1) {

    }

    // Change duplicate Accesskey. id=35
    $('a[title="Open Menu"]').attr('accesskey', 'O');

    // if (getComputedStyle(document.querySelector('#ms-designer-ribbon')).display == "none") {
    //     $('#ms-designer-ribbon').attr('aria-hidden', 'true');
    //     // remove (hidden) notificationArea to avoid duplicate IDs. id=34
    //     $('#ms-designer-ribbon').find('#notificationArea').detach();
    // }

    // Add presentation role to form. id=6
    $('#aspnetForm').attr('role', 'presentation');

    // Romove Hidden Zone.  id=22
    $('#hidZone').remove();

    // Change duplicate id's. id=20
    if ($('span[id="__publishingReusableFragment"]').length > 1) {

        $('span[id="__publishingReusableFragment"]').each(function (i) {

            var
                itemName = '__publishingReusableFragment';

            $(this).attr('id', itemName + i);

        });

    }

    // Fix Refiners. id=17

    // Label Refiners group
    if ($('.ms-ref-refiner[name="Group"]').length > 1) {
        $('.ms-ref-refiner[name="Group"]').each(function () {
            var label = $(this).find('.ms-ref-refinername .ms-displayInlineBlock').attr('id');
            $(this).attr('role', 'group').attr('aria-labelledby', label);
        });
    }

    // Fix label groupings that have spaces id=52 start
    if ($('.ms-ref-refiner[name="Group"]').length > 1) {
        $('.ms-ref-refiner[name="Group"] .refiner-value').each(function () {
            var input = $(this).find('input').attr('id');
            var label = $(this).find('label').attr('for');
            $(this).find('input').attr('id', input.replace(/ /g, ''));
            $(this).find('label').attr('for', label.replace(/ /g, ''));
        });

    }

    //id=52 end

    // Fix images on pagination 
    $('.ms-promlink-button-left-disabled').attr('alt', 'Disabled left button');
    $('.ms-promlink-button-right-disabled').attr('alt', 'Disabled right button');

    // Duplicate ID's id=21 start
    // change duplicate IDs in refiners id=51 start
    var idsToReplace = [
        "#UnselectedSection",
        "#Container",
        "#Value",
        "#unselShortList",
        '#FilterLink',
        '#RefinementName',
        '#EmptyContainer',
        '#Searchbox',
        '#searchImg',
        '#AutoCompContainer',
        '#_atssh',
        '#service-icons-0',
        '#lightboxOverlay'
    ];

    $('#Refinement').checkForNewElement({                          // wait for element to show and then execute
        callback: function () {

            $.each(idsToReplace, function (i, value) {
                if ($('.ms-ref-refiner ' + value).length > 1) {
                    console.log("found " + value);
                    $('.ms-ref-refiner ' + value).each(function (index) {
                        $(this).attr('id', value + i + "_" + index);
                        if (value == "#Value") {
                            $(this).addClass("refiner-value");
                        }
                    });
                }
            });

        }
    });
    // Duplicate ID's id=21 end and id=51 end

    if ($('.ms-ref-refiner > DIV').length > 1) {
        // remove expand arrow to fix duplicate IDs
        $('#refinerExpandCollapseArrow').detach();
    }

    // remove duplicate IDs from search nav. id=31
    $('.ms-srchnav-list').find('a.ms-srchnav-link').removeAttr('id');

    // add SPAN.sr-only around Home icon text
    // var homeText = $('.cv-menu > LI:first-child > a')[0].innerText;
    // $('.cv-menu > LI:first-child > a')[0].innerText = "";
    // $($('.cv-menu > LI:first-child > a')[0]).append('<span class="sr-only">' + homeText + '</span>');

    // Iframe title
    setTimeout(function () {
        $('iframe').each(function () {

            var
                itemTitle = $(this).attr('title');

            console.log('itemTitle: ', itemTitle);

            if (itemTitle === '' || !itemTitle) {
                $(this).attr('title', 'Content');
            }

        });

        // Removes the left navigation on the home page
        console.log('page layout: ', $('#pageLayout').text().trim())
        if ($('#pageLayout').text().trim() === 'CDPH HomePage with Bands') {
            $('#leftNav').remove();
        }

    }, 2000);

}
