/* Accelerator General API v 1.2 */
var logShow = '';
// Alternative to console.log
// log function provides console.log and allows you to hide console.log output with the variable logShow
// use the word 'hide' to not show any console.log
// use log() instead of console.log
// pass a variable and / or a title to log()
// use logS() and logE() together to group, and time
// place logS() and logE() between what you want to group and time
if (logShow !== 'hide') {
    function log(variable, title) {
        // not all browser support console/logging
        if (window.console) {
            if (!title) {
                window.console.log(variable);
            } else {
                window.console.log(title + ': ' + variable);
            }
        }
    }

    function logS(title) {
        if (window.console) {
            window.console.groupCollapsed(title);
            window.console.warn("Group Start: " + title);
            window.console.time(title);
        }
    }

    function logE(title) {
        if (window.console) {
            window.console.timeEnd(title);
            console.warn("Group End: " + title);
            console.groupEnd(title);
        }
    }
} else {

    function log(variable, msg) {
    }

    function logS(title) {
    }

    function logE(title) {
    }

}

function consoleStub() {
    if (!window.console) {
        window.console = {}; //moved line for clarity
    }

    //This code always executes.
    var console = window.console; //moar opera errors around this - console wasn't defined below, yes it wasn't resolving to window.console for some reason.
    var noop = function noop() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml',
        'error', 'exception', 'group', 'groupCollapsed',
        'groupEnd', 'info', 'log', 'markTimeline', 'profile',
        'profileEnd', 'markTimeline', 'table', 'time',
        'timeEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    while (length--) {
        //only add method if it's not already defined.
        if (!console[methods[length]]) {
            console[methods[length]] = noop;
        }
    }
}
consoleStub();

// Cookies
// createCookie(name,value,days)
// readCookie(name)
// eraseCookie(name)
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

// Arranges the horizontal web for bootstrap
function responsiveWebPartZoneHorizontal($, options) {

    var
        $item = $.extend({
            webPartBreakPoint: 'sm'  // Bootstrap breakpoint - xs, sm, md, lg
        }, options);

    log($(window).width(), 'ViewPort :');

    if ($(window).width() > 768) {

        var
            webPartZonesData = [];

        $('.ms-webpart-zone').each(function (i) {

            logS(i + " responsiveWebPartZoneHorizontalAssessment");

            var
                itemCount = $(this).find('.ms-webpart-cell-horizontal').length,
                webPartZoneID = 'webPartID' + i,
                itemMath = 0,
                itemsWidthValue = 0,
                itemWebPartStyleWidths = 0,
                webPartCols = '',
                webPartColsTotal = '',
                widthZero = false,
                widthZeroCount = 0,
                webPartCount = 0;

            // Add an ID to the Web Part Zone if it is horizontal
            if (itemCount > 0) {
                $(this)
                    .addClass(webPartZoneID)
                    .addClass('row');
            }

            // Gets Web Parts Total Width
            $(this).find('.ms-webpart-cell-horizontal').each(function (a) {

                var
                    itemWidth = $(this).width(),
                    itemWebPartStyleWidth = $(this).find('.ms-WPBody[style*="width"]').length;
                itemWebPartStyleWidths += itemWebPartStyleWidth;

                log('itemWidth ' + itemWidth);

                log(itemWebPartStyleWidth, 'itemWebPartStyleWidth');

                // If Web Part has a defined width added from the Tool Pane capture its width
                if (itemWebPartStyleWidth === 1) {

                    log('Width');
                    var
                        itemWidth = $(this).find('.ms-WPBody').width();

                    // For webparts that are set to less than 100px.
                    if (itemWidth < 100) {
                        itemWidth = 100;
                    }

                    // Otherwise assume web part does not have a defined width
                } else {
                    log(itemWidth, 'checking for item width');
                    widthZero = true;
                    var
                        itemWidth = 0;
                    ++widthZeroCount;
                }

                // Capture the total width of all web parts with a defined width
                itemsWidthValue += itemWidth;
                log('itemsWidthValue ' + itemsWidthValue);

                // Cont all the webs in the web part zone
                ++webPartCount;

                log(webPartCount, 'Web Part Count');
                log(widthZero, 'width Zero Status');
                log(widthZeroCount, 'width Zero Count');
                log(webPartZoneID);
                log(itemWidth);
                log(itemsWidthValue);

            });


            // Calculate the bootsrtap for each web part zone.
            $(this).find('.ms-webpart-cell-horizontal').each(function (b) {

                var
                    itemWebPartStyleWidth = $(this).find('.ms-WPBody[style*="width"]').length,
                    itemWidth = $(this).width(),
                    itemsWidthCheck = itemsWidthValue,
                    itemsWidth = itemsWidthValue;

                log(itemWidth, 'itemWidth 2nd')

                // When the web part has no width calculates it bootstrap
                if (widthZero === true) {

                    itemsWidth = 1200;

                    log(itemWidth, 'web part width');

                    if (itemWidth === 0 || itemWebPartStyleWidth === 0) {

                        log(itemsWidthCheck, 'itemsWidthCheck');

                        var
                            itemWidth = (1200 - itemsWidthCheck) / widthZeroCount;

                        log(itemWidth, 'zero math');
                    }

                }

                log(itemWidth, 'each item width');

                // When the web part has a defined width calculate its width
                if (itemWebPartStyleWidth === 1) {

                    var
                        itemWidth = $(this).find('.ms-WPBody').width();

                    // For webparts that are set to less than 100px.
                    if (itemWidth < 100) {
                        itemWidth = 100;
                    }

                }

                // Calculate the bootstrap based on the itemWidth
                var
                    webPartMath = Math.round(((itemWidth / itemsWidth) * 10) * 1.2);

                // Total the bootstrap numbers
                itemMath += webPartMath;
                webPartColsTotal = itemMath;

                // Capture the bootrap numbers
                webPartCols += webPartMath + '||';

                log("webPartMath..................." + webPartMath);
                log("itemWidth....................." + itemWidth);

            });

            log("itemWebPartStyleWidths ......." + itemWebPartStyleWidths);

            // Collect the data to an object
            webPartZonesData.push({
                webPartZoneID: webPartZoneID,
                webPartCols: webPartCols,
                webPartColsTotal: webPartColsTotal,
                itemWebPartStyleWidths: itemWebPartStyleWidths
            });

            logE(i + " responsiveWebPartZoneHorizontalAssessment");

        });

        //apply the results to each web part zone.
        $.each(webPartZonesData, function (f, eachItem) {

            logS(f + " responsiveWebPartZoneHorizontalChanges");

            var
                webPartZoneID = this.webPartZoneID,
                webPartColsEach = this.webPartCols.toString().split('||'),
                webPartColsTotal = this.webPartColsTotal,
                itemCount = $('.' + webPartZoneID + ' .ms-webpart-cell-horizontal').length,
                itemWebPartStyleWidths = this.itemWebPartStyleWidths;

            // Find each horizontal web part in the zone based on ID
            $('.' + webPartZoneID + ' .ms-webpart-cell-horizontal').each(function (ii) {

                log(itemWebPartStyleWidths, 'itemWebPartStyleWidths');

                // If all web parts have not width then they are to be evenly displayed
                if (itemWebPartStyleWidths === 0) {

                    var
                        webPartCols = Math.round((12 / (itemCount))),
                        className = 'col-' + $item.webPartBreakPoint + '-' + webPartCols,
                        evalResult = itemCount;

                    log(className, 'preClass');

                    // Else one or more web parts have a defined width
                } else {

                    var
                        webPartCols = parseInt(webPartColsEach[ii]),
                        className = 'col-' + $item.webPartBreakPoint + '-' + webPartCols,
                        // ignor the item count when there is a custom width
                        evalResult = '';


                }

                log("MESSAGE.............NEW ITEM");
                log("webPartCols..................." + webPartCols);
                log("webPartColsTotal.............." + webPartColsTotal);
                log("itemCount ...................." + itemCount);
                log("evalResult ..................." + evalResult);

                // If the evalResult is not a event spilt boostrap 12 then it uses css bbostrap solution to evenly space the web parts
                switch (evalResult) {

                    case 5:

                        var className = 'col-' + $item.webPartBreakPoint + '-15 col-' + $item.webPartBreakPoint + '-3';

                        break;

                    case 7:

                        var className = 'col-' + $item.webPartBreakPoint + '-21 col-' + $item.webPartBreakPoint + '-3';

                        break;

                    case 8:

                        var className = 'col-' + $item.webPartBreakPoint + '-24 col-' + $item.webPartBreakPoint + '-3';

                        break;


                    case 9:

                        var className = 'col-' + $item.webPartBreakPoint + '-27 col-' + $item.webPartBreakPoint + '-3';

                        break;

                    case 10:

                        var className = 'col-' + $item.webPartBreakPoint + '-15 col-' + $item.webPartBreakPoint + '-3';

                        break;

                    case 11:

                        var className = 'col-' + $item.webPartBreakPoint + '-33 col-' + $item.webPartBreakPoint + '-3';

                        break;

                }

                // There is a div that add spacing that is removed
                $('.' + webPartZoneID).find('div[style="padding:0;"]').remove();

                // Wraps the web part with the new boostrap classes
                $(this).wrap('<div class="' + className + ' col-xs-12"></div>');

                // Eliminates the hard coded widths and sets the widths to auto
                $('.' + webPartZoneID + ' .ms-webpart-chrome, .' + webPartZoneID + ' .ms-webpart-chrome-title, .' + webPartZoneID + ' .ms-WPBody').each(function () {

                    $(this).css('width', 'auto');
                    $(this).find('div:eq(0)').css('width', 'auto');

                });

                // Shows the web parts and adds an inline display attribute
                $('.ms-webpart-cell-horizontal').show().css('display', 'inline');

            });

            logE(f + " responsiveWebPartZoneHorizontalChanges")
        });

    } else {

        $('.ms-webpart-zone').each(function (i) {

            var
                itemCount = $(this).find('.ms-webpart-cell-horizontal').length;

            // Add an ID to the Web Part Zone if it is horizontal
            if (itemCount > 0) {
                $(this)
                    .addClass('webPartZoneHorisontal row');
            }


        });

        $('.webPartZoneHorisontal .ms-webpart-cell-horizontal').each(function (b) {

            // There is a div that add spacing that is removed
            $(this).find('div[style="padding:0;"]').remove();

            // Wraps the web part with the new boostrap classes
            $(this).wrap('<div class="col-xs-12"></div>');

            // Eliminates the hard coded widths and sets the widths to auto
            $(this).find('.ms-webpart-chrome, .ms-webpart-chrome-title, .ms-WPBody').each(function () {

                $(this).css('width', 'auto');
                $(this).find('div:eq(0)').css('width', 'auto');
                $(this).find('div:eq(2)').css('width', 'auto');

            });

            // Shows the web parts and adds an inline display attribute
            $(this).show().css('display', 'inline');


        });

    }

}

function responsiveWebPartWidthSelectionEditMode($, options) {

    logS('responsiveWebPartWidthSelectionEditMode');

    var
        $item = $.extend({
            webPartName: 'Page Content,'
        }, options),
        toolPaneName = $('.ms-ToolPaneTitle').text(),
        $itemElement = $('input[title="Type a number for the Width."]'),
        itemWidthWP = $itemElement.val();

    $item.webPartName = $item.webPartName.split(",");

    $.each($item.webPartName, function (i, item) {

        if (toolPaneName.indexOf(item) !== -1 && item !== '') {

            $itemElement.before('<select id="boostrapPCWidth" style="width:100px">' +
                '<option value="100">100</option>' +
                '<option value="200">200</option>' +
                '<option value="300">300</option>' +
                '<option value="400">400</option>' +
                '<option value="500">500</option>' +
                '<option value="600">600</option>' +
                '<option value="700">700</option>' +
                '<option value="800">800</option>' +
                '<option value="900">900</option>' +
                '<option value="1000">1000</option>' +
                '<option value="1100">1100</option>' +
                '<option value="1200">1200</option>' +
                '</select>');
            $('td > span:contains("Should the Web Part have a fixed width?")').replaceWith('<span>Select the length for the web part:</span>');

            $itemElement.hide();
            $itemElement.next('select').hide();

            if (itemWidthWP !== '') {

                $('#boostrapPCWidth').val(itemWidthWP);
            }

            $(document).on('change', '#boostrapPCWidth', function () {

                var
                    thisValue = $(this).val();

                $itemElement.val(thisValue);


            });


        }

    });

    logE('responsiveWebPartWidthSelectionEditMode');

}

function webPartToolPanePlacement($, options) {

    var
        $webPartToolPaneCaption = $('#MSOTlPn_ToolPaneCaption'),
        $item = $.extend({
            positionLeftRight: 'right',
            distanceLeftRight: '20px',
            distanceTop: '164px',
            heightMax: '500px',
            sideBar: '260px',
            webPartHighlight: '',
            webPartContent: '',
            webPartZIndex: 3000
        }, options),
        toolPaneCSS = '#DeltaWebPartAdderUpdatePanelContainer { z-index: 3001; }' +
            '#MSOTlPn_MainTD { background: none repeat scroll 0 0 transparent;  display: block; overflow-y: auto; position: fixed; ' + $item.positionLeftRight + ': ' + $item.distanceLeftRight + ';top: ' + $item.distanceTop + '; width: auto !important; z-index: ' + $item.webPartZIndex + '; max-height: ' + $item.heightMax + '; }' +
            '#MSOTlPn_MainTD > table{ margin-right: 19px; position: static; width: 100%; }' +
            '.ms-TPBorder { width: 100%; }' +
            '.ms-ToolPaneTitle { cursor: pointer; }' +
            '.collapseProperties, .expandProperties { padding-left: 4px; width: auto; background-color: ' + $item.webPartHighlight + ';}' +
            '.toolPaneJump { width: 46%; display: inline-block; text-align: right; padding-right: 4px; cursor: pointer;}' +
            '.toolPaneProperties { width: 48%; display: inline-block;}' +
            '.toolPaneSpacer { width: 4%; display: inline-block; }' +
            '.ms-ToolPaneTitle, .ms-ToolPaneClose { background-color: ' + $item.webPartHighlight + '; }' +
            '.ms-SPZone > .s4-wpActive, .ms-rtestate-write > .ms-rte-wpbox > div > .s4-wpActive { background-color: ' + $item.webPartHighlight + '; }' +
            '.s4-wpActive .ms-WPBody { background-color: ' + $item.webPartContent + ' !important; }';

    $(document).on('click', '#showHideToolPaneProperties', function (e) {

        e.preventDefault();

        var
            itemClass = $(this).attr('class');

        if (itemClass.indexOf('collapseProperties') > -1) {

            $(this)
                .removeClass('collapseProperties')
                .addClass('expandProperties')
                .html('<span class="toolPaneProperties"><a title="Expand: Proporties" style="cursor:hand; text-decoration: none;" href="#"><img border="0" src="/_layouts/15/images/TPMax2.gif" alt="Expand: Properties" > Properties</a></span><span class="toolPaneSpacer"> | </span><span class="toolPaneJump">Jump To Web Part</span>');

            $('#MSOTlPn_Parts').hide();

        } else {

            $(this)
                .removeClass('expandProperties')
                .addClass('collapseProperties')
                .html('<span class="toolPaneProperties"><a title="Collapse: Proporties" style="cursor:hand; text-decoration: none;" href="#"><img border="0" src="/_layouts/15/images/TPMin2.gif" alt="Collapse: Properties"> Properties</a></span><span class="toolPaneSpacer"> | </span><span class="toolPaneJump">Jump To Web Part</span>');

            $('#MSOTlPn_Parts').show();

        }

    });

    $(document).on('click', '.toolPaneJump', function (e) {

        e.preventDefault();

        var
            itemTitle = $('#MSOTlPn_TlPnCaptionSpan').text().trim();

        log(itemTitle);
        log($('.ms-webpart-titleText:contains("' + itemTitle + '")').length);

        $('#s4-workspace')
            .scrollTop(0)
            .stop()
            .animate({
                scrollTop: $('.ms-webpart-titleText:contains("' + itemTitle + '")')
                    .offset()
                    .top - 310
            },
                500
            );
        return false;

    });

    if ($webPartToolPaneCaption.length) {

        var
            itemTitle = $('#MSOTlPn_TlPnCaptionSpan').text().trim();

        log('create cookie');

        $('head').append('<style type="text/css">' + toolPaneCSS + '</style>');

        $('#MSO_tblPageBody > tbody > tr').append('<td valign="top" style="width:' + $item.sideBar + ' !important;"><div ></div></td>');

        $webPartToolPaneCaption.append('<div id="showHideToolPaneProperties" class="collapseProperties UserSectionTitle"><span class="toolPaneProperties"><a title="Collapse: Properties" style="cursor:hand; text-decoration: none;" href="#"><img border="0" src="/_layouts/15/images/TPMin2.gif" alt="Collapse: Proporties"> Properties</a></span><span class="toolPaneSpacer"> | </span><span class="toolPaneJump">Jump To Web Part</span></div>');

        createCookie('webPartZoneJump', itemTitle);

        setTimeout(function () {
            $('.toolPaneJump').click();
        }, 700);

    } else {

        var
            webPartZoneJump = readCookie('webPartZoneJump') || '';

        log('read cookie');
        log(webPartZoneJump);

        if (webPartZoneJump !== '' && $('.ms-webpart-titleText:contains("' + webPartZoneJump + '")').length) {

            setTimeout(function () {

                $('#s4-workspace')
                    .scrollTop(0)
                    .stop()
                    .animate({
                        scrollTop: $('.ms-webpart-titleText:contains("' + webPartZoneJump + '")')
                            .offset()
                            .top - 310
                    },
                        500
                    );

                eraseCookie('webPartZoneJump');

                return false;

            }, 700);

        }
    }

}

function webPartZoneJumpTo($, options) {

    var
        siteURLComplete = document.location.href,
        webPartZoneJump = readCookie('webPartZoneJump') || '',
        $item = $.extend({
        }, options);

    log(webPartZoneJump);

    $(document).on('click', '.ms-WPAddButton', function () {

        var
            webPartZoneTitle = $(this).parents('#MSOZone').prev('.ms-SPZoneLabel').text().trim();

        log('webPartZoneTitle ' + webPartZoneTitle);

        $(document).on('click', '.ms-wpadder-buttonArea > button:eq(0), a[title="Delete"]', function () {

            var
                itemText = $(this).text();

            log(itemText);
            log('webPartZoneTitle ' + webPartZoneTitle);

            createCookie('webPartZoneJump', webPartZoneTitle);

        });

    });

    $(document).on('mouseenter', '#MSOMenu_Delete', function () {

        var
            webPartZoneTitle = $(this).parents('#MSOZone').prev('.ms-SPZoneLabel').text().trim(),
            itemText = $(this).text();

        log(itemText);

        if (itemText === 'Delete') {


            log('webPartZoneTitle ' + webPartZoneTitle);

            createCookie('webPartZoneJump', webPartZoneTitle);

        }

    }).on('mouseleave', '#MSOMenu_Delete', function () {

        log('erase cookie');

        eraseCookie('webPartZoneJump');

    });

    $(document).on('click', 'div[id^="MSOZoneCell_"]', function () {

        log('clicked section');

        var
            itemTitle = $(this).find('.ms-webpart-titleText').text().trim();

        log(itemTitle);

        createCookie('webPartZoneJump', itemTitle);

    });

    if (webPartZoneJump !== '' && $('.ms-SPZoneLabel:contains("' + webPartZoneJump + '")').length) {

        log(webPartZoneJump);

        $('#s4-workspace')
            .scrollTop(0)
            .stop()
            .animate({
                scrollTop: $('.ms-SPZoneLabel:contains("' + webPartZoneJump + '")')
                    .offset()
                    .top - 310
            },
                500
            );

        //eraseCookie('webPartZoneJump');

        return false;

    }

}

function webPartZoneTagging($) {

    logS('webPartZoneTagging');

    $('td[id^="_invisibleIfEmpty"], div.ms-webpart-zone').each(function (i) {

        $(this).addClass('web-part-zone-' + i);

    });

    $('.ms-webpartzone-cell').each(function () {

        var
            itemTitle = $(this).find('.ms-webpart-titleText').first().text() || 'blank-title';

        $(this)
            .attr('web-part-name', itemTitle.replace(/\s/g, "").replace(/[^a-zA-Z 0-9]+/g, ''))
            .addClass('wp-' + itemTitle.toLowerCase().trim().replace(/[^a-zA-Z 0-9]+/g, '').replace(/\s/g, '-'));

    });

    logE('webPartZoneTagging');

}

(function ($) {

    $.fn.spParallax = function (options) {

        var
            $item = $.extend({
                selectWidth: '400px',
                selectName: '',
                showMobile: 'yes',
                callBack: null
            }, options),
            itemIDClass = this.selector,
            item = $('#centerarea'),
            pageWidth = $('#s4-workspace').width(),
            paddT = item.innerWidth() - item.width(),
            margT = item.outerWidth(true) - item.outerWidth(),
            spacing = (paddT / 2) + (margT / 2) + 10 + 'px';

        return this.each(function () {
            var
                itemClass = '.spBackgroundParallax',
                itemType = $(this).find(itemClass).attr('background-type'),
                itemImage = $(this).find(itemClass).attr('background-image'),
                itemColor = $(this).find(itemClass).attr('background-color'),
                itemSize = $(this).find(itemClass).attr('background-size') || 'cover',
                itemHeight = $(this).find(itemClass).attr('band-height'),
                itemMobile = $(this).find(itemClass).attr('show-mobile') || $item.showMobile,
                itemGradient = $(this).find(itemClass).attr('band-gradient') || '',
                viewportWidth = $('#s4-workspace').width();

            log('viewportWidth ' + viewportWidth);

            if (itemMobile === 'no' && viewportWidth < 650) {
                $(this)
                    .css('background-color', itemColor)
                    .addClass('parallax-band');
            } else if (itemType === 'static') {

                $(this)
                    .css('background-color', itemColor)
                    .css('background-image', 'url(' + itemImage + ')')
                    .css('background-attachment', 'relative')
                    .css('background-repeat', 'no-repeat')
                    .css('background-size', itemSize)
                    .css('background-position', 'center center')
                    .css('height', '200px')
                    .css('left', '-' + spacing)
                    .css('width', pageWidth)
                    .css('position', 'relative')
                    .css('height', itemHeight)
                    .addClass('parallax-band');

            } else if (itemImage !== undefined) {

                $(this)
                    .css('background-color', itemColor)
                    .css('background-image', 'url(' + itemImage + ')')
                    .css('background-attachment', 'fixed')
                    .css('background-repeat', 'no-repeat')
                    .css('background-size', itemSize)
                    .css('background-position', 'center center')
                    .css('height', itemHeight)
                    .css('left', '-' + spacing)
                    .css('width', pageWidth)
                    .css('position', 'relative')
                    .attr('data-stellar-background-ratio', '0.2')
                    .addClass('parallax-band');

            }

            if (itemGradient !== '') {
                var
                    itemGClass = makeRandomIDClass($, {
                        itemLength: 10,
                        itemSelection: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
                    }),
                    itemStyles = '.' + itemGClass + '::before ' + '{ background:' + itemGradient + ';' +
                        'content: "";' +
                        'display: block;' +
                        'height: 100%;' +
                        'position: absolute;' +
                        'top: 0;' +
                        'left: 0;' +
                        'width: 100%; ' +
                        '}';

                $('head').append('<style type="text/css">' + itemStyles + '</style>');

                $(this).addClass(itemGClass);

            }

            if (typeof $item.callBack === 'function') { // make sure the callback is a function
                $item.callBack.call(this); // brings the scope to the callback
            }
        });

    };

}(jQuery));

// Adjust the bands to color them and show only the bands that have content
(function ($) {

    $.fn.bandAdjustments = function (options) {


        var
            $item = $.extend({
                pageMode: '',           // Page mode "edit" or leave blank for view
                contentLength: 0,       // Number of characters or less to hide band Default: 0
                webPartLength: 0,       // Number of web parts or less to hide band Default: 0
                imageLength: 0,         // Number of images or less to hide band Default: 0
                googleMapLength: 0,     // Number of google maps or less to hide band Default: 0
                parallaxLength: 0       // Number of parallax web parts or less to hide band Default: 0
            }, options),
            bandNum = 0;


        // Changes what classes are use base on the pageMode provided.
        if ($item.pageMode === 'edit') {

            var
                rowClassFirst = 'rowFirstEdit',
                rowClassEven = 'rowEvenEdit',
                rowClassOdd = 'rowOddEdit';

        } else {

            var
                rowClassFirst = 'rowFirst',
                rowClassEven = 'rowEven',
                rowClassOdd = 'rowOdd';

        }

        return this.each(function (rowNumber) {

            logS("bandAdjustments");

            // Checks for different types of content with in the row band
            var
                contentLength = $(this).text().trim().length,
                webPartLength = $(this).find('.ms-webpart-chrome').length,
                imageLength = $(this).find('img').length,
                googleMapLength = $(this).find('#map-canvas').length,
                parallaxLength = $(this).find('.spBackgroundParallax').length;

            // Hides Band where there is no content based on these variable checks.
            if (contentLength <= $item.contentLength && webPartLength <= $item.webPartLength && imageLength <= $item.imageLength && googleMapLength <= $item.googleMapLength && parallaxLength <= $item.parallaxLength) {

                $(this).hide();

            } else {

                // Alternates the colors of the band when they are showing.
                if (bandNum === 0) {

                    $(this).addClass(rowClassFirst);

                } else if (bandNum % 2 === 0) {

                    $(this).addClass(rowClassOdd);

                } else {

                    $(this).addClass(rowClassEven);

                }

                bandNum++;

            }

            log("Band Number..................." + bandNum);
            log("contentLength................." + contentLength);
            log("webPartLength................." + webPartLength);
            log("imageLength .................." + imageLength);
            log("googleMapLength..............." + googleMapLength);
            log("parallaxLength................" + parallaxLength);

            logE("bandAdjustments");


        });
    }
}(jQuery));


function cdphSocialMedia() {

    // Twitter
    $('.twittercontent').html('<a class="twitter-timeline" href="https://twitter.com/CAPublicHealth" data-widget-id="709343924280623104">Tweets by @CAPublicHealth</a>');

    // Facebook
    $('.facebookcontent').html('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCAPublicHealth&tabs=timeline&width=300&height=379&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=848054818617317" width="300" height="379" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>');

    // Instagram

    var html = "";
    var boolSetZero = false;
    var token = '2160922221.dad1cde.23610a34025e4a4481d095bac04f6900';

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        data: { access_token: token, count: 12 },
        async: true,
        cache: true,
        url: 'https://api.instagram.com/v1/users/self/media/recent',
        success: function (data) {
            if (typeof data.meta.error_message != 'undefined') {
                $('.flickrcontent').text("Error - " + data.meta.error_message);
            }
            else {
                var j = 0;
                for (x in data.data) {
                    if (j == 0) { html += '<div class="flickrRow">'; }

                    // if (data.data[x].type == 'video') {
                    //  html += '<div class="flickrItem"><a href="' + data.data[x].link + '" target="_blank"><img src="' + data.data[x].images.standard_resolution.url + '" alt=""/></a></div>'
                    // } else if (data.data[x].type == 'image') {
                    html += '<div class="flickrItem"><a href="' + data.data[x].link + '" target="_blank"><img src="' + data.data[x].images.standard_resolution.url + '" alt=""/></a></div>'
                    //}

                    if (j == 2) {
                        html += '</div>'
                        j = 0;
                        boolSetZero = true;
                    }
                    if (!boolSetZero) { j = j + 1; }
                    boolSetZero = false;
                }

                html += '<div class="pull-left"><a target="_blank" href="https://www.instagram.com/capublichealth/" class="text-CDPHGrayLnk text-0dot9em">MORE INSTAGRAM MEDIA<em class="fa fa-external-link marginLeft5"></em><span class="sr-only">MORE INSTAGRAM MEDIA</span></a></div>';

            }
            $('.flickrcontent').text("");
            $('.flickrcontent').append(html);
        },
        error: function (data) {
            $('.flickrcontent').text("Error - " + data.statusText);
        }
    });
}

function responsiveColumnsEvenSpaced($,options){

    var
        $item = $.extend({
            numberOfColumns: '1'
        }, options);

    $item.numberOfColumns = $item.numberOfColumns.toString();

    var cases = {
        1: 'col-sm-12',
        2: 'col-sm-6',
        3: 'col-sm-4',
        4: 'col-sm-3',
        5: 'col-sm-15 col-sm-3',
        6: 'col-sm-4 col-md-2',
        7: 'col-sm-21 col-sm-3',
        8: 'col-sm-24 col-sm-3',
        9: 'col-sm-27 col-sm-3',
        10: 'col-sm-15 col-sm-3'
    };

    return {
        responsiveCSS: cases[$item.numberOfColumns]
    };

}

// display templates iterate through items.
function iterateCurrentItemValues(ctx) {
    for (var p in ctx.CurrentItem) {
        var pLength = 25 - p.length;
        for (var i = 0; i < pLength; i++) {
            var dash = '.';
            var dashes = dashes + dash;
        }
        var dashes = '';
    }
}

function webAccessibility($,options){

    logS('webAccessibility');

    var
        $item = $.extend({
        }, options);

    // Add alt tag to SP hidden images
    $('#imgPrefetch img').each(function(){
        $(this).attr('alt','hidden image');
        log('found');

    });

    // Add hidden text to web part titles with no H2 title
    $('.ms-webpart-titleText').each(function(){
        console.log($(this).text());
        console.log($(this).text().length);

        var
            itemText = $(this).text().length;

        if ( itemText === 0 ){
            $(this).append('<span class="hidden-off-screen">No Title</span>');
        }

    });

    // Add alt tag to google translate images
    $('.goog-te-gadget').checkForNewElement({
        callback: function(){
            $('#goog-gt-tt .logo img').attr('alt','translate logo');
            $('#google_translate_element .goog-logo-link img').attr('alt','translate logo');
        }
    });

    $('#goog-gt-tt .logo img').attr('alt','translate logo');
    $('#google_translate_element .goog-logo-link img').attr('alt','translate logo');

    logE('webAccessibility');

}

// jQuery plugin that allows you to check for a new class or id.
(function($) {

    $.fn.checkForNewElement = function(options) {

        logS('checkForNewElement');

        var
            element = this.selector,
            $item = $.extend({
                ie9CheckforTimes: 10000,
                ie9CheckInterval: 500,
                callback: null
            }, options);

        // Detect the Browser and Version
        navigator.browserInfo = (function() {
            var
                ua = navigator.userAgent,
                tem,
                M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE ' + (tem[1] || '');
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
            return {
                'browser': M[0],
                'version': M[1]
            };
        })();

        // If Browser is IE 9 or earlier then CSS3 Animation does not work and revert to setInterval to check for element.
        if (navigator.browserInfo.browser === 'MSIE' && navigator.browserInfo.version <= 9) {

            var checkFor = 0;

            var interval = setInterval(function() {

                checkFor++;

                // When the element is detected run the callback and return
                if ($(element).length > 0) {

                    clearInterval(interval);
                    log('found element in IE9');
                    if (typeof $item.callback == 'function') { // make sure the callback is a function
                        $item.callback.call(this); // brings the scope to the callback
                        return;
                    }

                } else if (checkFor === $item.ie9CheckforTimes) {

                    clearInterval(interval);

                }

            }, $item.ie9CheckInterval);

            // If any other browser than IE 9 or earlier use CSS3 Animation to detect new elements.
        } else {

            var
                idClass = element,
                idClassPlain = idClass.substr(1),
                timesRun = 0,
                cssClasses = '@keyframes ' + idClassPlain + 'nodeInserted { from { opacity: 0.99; } to { opacity: 1; } } ' +
                    '@-ms-keyframes ' + idClassPlain + 'nodeInserted { from { opacity: 0.99; } to { opacity: 1; } } ' +
                    '@-webkit-keyframes ' + idClassPlain + 'nodeInserted { from { opacity: 0.99; } to { opacity: 1; } } ' +
                    idClass + ' { ' +
                    'animation-duration: 0.001s; ' +
                    '-webkit-animation-duration:  0.001s; ' +
                    'animation-name: ' + idClassPlain + 'nodeInserted; ' +
                    '-webkit-animation-name: ' + idClassPlain + 'nodeInserted;}';

            $('head').append('<style type="text/css">' + cssClasses + '</style>');

            log(cssClasses);

            // When the element is detected run the callback and return
            var insertListener = function(event) {

                log('timesRun Start: ' + timesRun);

                if (event.animationName == idClassPlain + 'nodeInserted' && timesRun === 0) {

                    ++timesRun;

                    log(typeof $item.callback);

                    //if (typeof $item.callback === 'function') { // make sure the callback is a function
                    if ($item.callback !== null) { // make sure the callback is a function

                        $item.callback.call(this); // brings the scope to the callback
                        log('timesRun Function: ' + timesRun);
                        timesRun = 0;
                        return;

                    }
                }
            };

            // Determine which EventListener to use based on the Browser.
            if (navigator.browserInfo.browser === 'MSIE') {

                log('1 ' + navigator.browserInfo.browser);

                document.addEventListener("MSAnimationStart", insertListener); // IE

            } else if (navigator.browserInfo.browser === 'Chrome' || navigator.browserInfo.browser === 'Safari') {

                log('2 ' + navigator.browserInfo.browser);

                document.addEventListener("webkitAnimationStart", insertListener); // Chrome + Safari

            } else {

                log('3 ' + navigator.browserInfo.browser);

                document.addEventListener("animationstart", insertListener); // standard + firefox

            }

        }

        logE('checkForNewElement');

    }

}(jQuery));






































; (function ($, window, document, undefined) {

    var pluginName = 'stellar',
        defaults = {
            scrollProperty: 'scroll',
            positionProperty: 'position',
            horizontalScrolling: true,
            verticalScrolling: true,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: false,
            parallaxBackgrounds: true,
            parallaxElements: true,
            hideDistantElements: true,
            hideElement: function ($elem) { $elem.hide(); },
            showElement: function ($elem) { $elem.show(); }
        },

        scrollProperty = {
            scroll: {
                getLeft: function ($elem) { return $elem.scrollLeft(); },
                setLeft: function ($elem, val) { $elem.scrollLeft(val); },

                getTop: function ($elem) { return $elem.scrollTop(); },
                setTop: function ($elem, val) { $elem.scrollTop(val); }
            },
            position: {
                getLeft: function ($elem) { return parseInt($elem.css('left'), 10) * -1; },
                getTop: function ($elem) { return parseInt($elem.css('top'), 10) * -1; }
            },
            margin: {
                getLeft: function ($elem) { return parseInt($elem.css('margin-left'), 10) * -1; },
                getTop: function ($elem) { return parseInt($elem.css('margin-top'), 10) * -1; }
            },
            transform: {
                getLeft: function ($elem) {
                    var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
                    return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0);
                },
                getTop: function ($elem) {
                    var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
                    return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0);
                }
            }
        },

        positionProperty = {
            position: {
                setLeft: function ($elem, left) { $elem.css('left', left); },
                setTop: function ($elem, top) { $elem.css('top', top); }
            },
            transform: {
                setPosition: function ($elem, left, startingLeft, top, startingTop) {
                    $elem[0].style[prefixedTransform] = 'translate3d(' + (left - startingLeft) + 'px, ' + (top - startingTop) + 'px, 0)';
                }
            }
        },

        // Returns a function which adds a vendor prefix to any CSS property name
        vendorPrefix = (function () {
            var prefixes = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                style = $('script')[0].style,
                prefix = '',
                prop;

            for (prop in style) {
                if (prefixes.test(prop)) {
                    prefix = prop.match(prefixes)[0];
                    break;
                }
            }

            if ('WebkitOpacity' in style) { prefix = 'Webkit'; }
            if ('KhtmlOpacity' in style) { prefix = 'Khtml'; }

            return function (property) {
                return prefix + (prefix.length > 0 ? property.charAt(0).toUpperCase() + property.slice(1) : property);
            };
        }()),

        prefixedTransform = vendorPrefix('transform'),

        supportsBackgroundPositionXY = $('<div />', { style: 'background:#fff' }).css('background-position-x') !== undefined,

        setBackgroundPosition = (supportsBackgroundPositionXY ?
            function ($elem, x, y) {
                $elem.css({
                    'background-position-x': x,
                    'background-position-y': y
                });
            } :
            function ($elem, x, y) {
                $elem.css('background-position', x + ' ' + y);
            }
        ),

        getBackgroundPosition = (supportsBackgroundPositionXY ?
            function ($elem) {
                return [
                    $elem.css('background-position-x'),
                    $elem.css('background-position-y')
                ];
            } :
            function ($elem) {
                return $elem.css('background-position').split(' ');
            }
        ),

        requestAnimFrame = (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                setTimeout(callback, 1000 / 60);
            }
        );

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {
        init: function () {
            this.options.name = pluginName + '_' + Math.floor(Math.random() * 1e9);

            this._defineElements();
            this._defineGetters();
            this._defineSetters();
            this._handleWindowLoadAndResize();
            this._detectViewport();

            this.refresh({ firstLoad: true });

            if (this.options.scrollProperty === 'scroll') {
                this._handleScrollEvent();
            } else {
                this._startAnimationLoop();
            }
        },
        _defineElements: function () {
            if (this.element === document.body) this.element = window;
            this.$scrollElement = $(this.element);
            this.$element = (this.element === window ? $('body') : this.$scrollElement);
            this.$viewportElement = (this.options.viewportElement !== undefined ? $(this.options.viewportElement) : (this.$scrollElement[0] === window || this.options.scrollProperty === 'scroll' ? this.$scrollElement : this.$scrollElement.parent()));
        },
        _defineGetters: function () {
            var self = this,
                scrollPropertyAdapter = scrollProperty[self.options.scrollProperty];

            this._getScrollLeft = function () {
                return scrollPropertyAdapter.getLeft(self.$scrollElement);
            };

            this._getScrollTop = function () {
                return scrollPropertyAdapter.getTop(self.$scrollElement);
            };
        },
        _defineSetters: function () {
            var self = this,
                scrollPropertyAdapter = scrollProperty[self.options.scrollProperty],
                positionPropertyAdapter = positionProperty[self.options.positionProperty],
                setScrollLeft = scrollPropertyAdapter.setLeft,
                setScrollTop = scrollPropertyAdapter.setTop;

            this._setScrollLeft = (typeof setScrollLeft === 'function' ? function (val) {
                setScrollLeft(self.$scrollElement, val);
            } : $.noop);

            this._setScrollTop = (typeof setScrollTop === 'function' ? function (val) {
                setScrollTop(self.$scrollElement, val);
            } : $.noop);

            this._setPosition = positionPropertyAdapter.setPosition ||
                function ($elem, left, startingLeft, top, startingTop) {
                    if (self.options.horizontalScrolling) {
                        positionPropertyAdapter.setLeft($elem, left, startingLeft);
                    }

                    if (self.options.verticalScrolling) {
                        positionPropertyAdapter.setTop($elem, top, startingTop);
                    }
                };
        },
        _handleWindowLoadAndResize: function () {
            var self = this,
                $window = $(window);

            if (self.options.responsive) {
                $window.bind('load.' + this.name, function () {
                    self.refresh();
                });
            }

            $window.bind('resize.' + this.name, function () {
                self._detectViewport();

                if (self.options.responsive) {
                    self.refresh();
                }
            });
        },
        refresh: function (options) {
            var self = this,
                oldLeft = self._getScrollLeft(),
                oldTop = self._getScrollTop();

            if (!options || !options.firstLoad) {
                this._reset();
            }

            this._setScrollLeft(0);
            this._setScrollTop(0);

            this._setOffsets();
            this._findParticles();
            this._findBackgrounds();

            // Fix for WebKit background rendering bug
            if (options && options.firstLoad && /WebKit/.test(navigator.userAgent)) {
                $(window).load(function () {
                    var oldLeft = self._getScrollLeft(),
                        oldTop = self._getScrollTop();

                    self._setScrollLeft(oldLeft + 1);
                    self._setScrollTop(oldTop + 1);

                    self._setScrollLeft(oldLeft);
                    self._setScrollTop(oldTop);
                });
            }

            this._setScrollLeft(oldLeft);
            this._setScrollTop(oldTop);
        },
        _detectViewport: function () {
            var viewportOffsets = this.$viewportElement.offset(),
                hasOffsets = viewportOffsets !== null && viewportOffsets !== undefined;

            this.viewportWidth = this.$viewportElement.width();
            this.viewportHeight = this.$viewportElement.height();

            this.viewportOffsetTop = (hasOffsets ? viewportOffsets.top : 0);
            this.viewportOffsetLeft = (hasOffsets ? viewportOffsets.left : 0);
        },
        _findParticles: function () {
            var self = this,
                scrollLeft = this._getScrollLeft(),
                scrollTop = this._getScrollTop();

            if (this.particles !== undefined) {
                for (var i = this.particles.length - 1; i >= 0; i--) {
                    this.particles[i].$element.data('stellar-elementIsActive', undefined);
                }
            }

            this.particles = [];

            if (!this.options.parallaxElements) return;

            this.$element.find('[data-stellar-ratio]').each(function (i) {
                var $this = $(this),
                    horizontalOffset,
                    verticalOffset,
                    positionLeft,
                    positionTop,
                    marginLeft,
                    marginTop,
                    $offsetParent,
                    offsetLeft,
                    offsetTop,
                    parentOffsetLeft = 0,
                    parentOffsetTop = 0,
                    tempParentOffsetLeft = 0,
                    tempParentOffsetTop = 0;

                // Ensure this element isn't already part of another scrolling element
                if (!$this.data('stellar-elementIsActive')) {
                    $this.data('stellar-elementIsActive', this);
                } else if ($this.data('stellar-elementIsActive') !== this) {
                    return;
                }

                self.options.showElement($this);

                // Save/restore the original top and left CSS values in case we refresh the particles or destroy the instance
                if (!$this.data('stellar-startingLeft')) {
                    $this.data('stellar-startingLeft', $this.css('left'));
                    $this.data('stellar-startingTop', $this.css('top'));
                } else {
                    $this.css('left', $this.data('stellar-startingLeft'));
                    $this.css('top', $this.data('stellar-startingTop'));
                }

                positionLeft = $this.position().left;
                positionTop = $this.position().top;

                // Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
                marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
                marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

                offsetLeft = $this.offset().left - marginLeft;
                offsetTop = $this.offset().top - marginTop;

                // Calculate the offset parent
                $this.parents().each(function () {
                    var $this = $(this);

                    if ($this.data('stellar-offset-parent') === true) {
                        parentOffsetLeft = tempParentOffsetLeft;
                        parentOffsetTop = tempParentOffsetTop;
                        $offsetParent = $this;

                        return false;
                    } else {
                        tempParentOffsetLeft += $this.position().left;
                        tempParentOffsetTop += $this.position().top;
                    }
                });

                // Detect the offsets
                horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
                verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

                // Add our object to the particles collection
                self.particles.push({
                    $element: $this,
                    $offsetParent: $offsetParent,
                    isFixed: $this.css('position') === 'fixed',
                    horizontalOffset: horizontalOffset,
                    verticalOffset: verticalOffset,
                    startingPositionLeft: positionLeft,
                    startingPositionTop: positionTop,
                    startingOffsetLeft: offsetLeft,
                    startingOffsetTop: offsetTop,
                    parentOffsetLeft: parentOffsetLeft,
                    parentOffsetTop: parentOffsetTop,
                    stellarRatio: ($this.data('stellar-ratio') !== undefined ? $this.data('stellar-ratio') : 1),
                    width: $this.outerWidth(true),
                    height: $this.outerHeight(true),
                    isHidden: false
                });
            });
        },
        _findBackgrounds: function () {
            var self = this,
                scrollLeft = this._getScrollLeft(),
                scrollTop = this._getScrollTop(),
                $backgroundElements;

            this.backgrounds = [];

            if (!this.options.parallaxBackgrounds) return;

            $backgroundElements = this.$element.find('[data-stellar-background-ratio]');

            if (this.$element.data('stellar-background-ratio')) {
                $backgroundElements = $backgroundElements.add(this.$element);
            }

            $backgroundElements.each(function () {
                var $this = $(this),
                    backgroundPosition = getBackgroundPosition($this),
                    horizontalOffset,
                    verticalOffset,
                    positionLeft,
                    positionTop,
                    marginLeft,
                    marginTop,
                    offsetLeft,
                    offsetTop,
                    $offsetParent,
                    parentOffsetLeft = 0,
                    parentOffsetTop = 0,
                    tempParentOffsetLeft = 0,
                    tempParentOffsetTop = 0;

                // Ensure this element isn't already part of another scrolling element
                if (!$this.data('stellar-backgroundIsActive')) {
                    $this.data('stellar-backgroundIsActive', this);
                } else if ($this.data('stellar-backgroundIsActive') !== this) {
                    return;
                }

                // Save/restore the original top and left CSS values in case we destroy the instance
                if (!$this.data('stellar-backgroundStartingLeft')) {
                    $this.data('stellar-backgroundStartingLeft', backgroundPosition[0]);
                    $this.data('stellar-backgroundStartingTop', backgroundPosition[1]);
                } else {
                    setBackgroundPosition($this, $this.data('stellar-backgroundStartingLeft'), $this.data('stellar-backgroundStartingTop'));
                }

                // Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
                marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
                marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

                offsetLeft = $this.offset().left - marginLeft - scrollLeft;
                offsetTop = $this.offset().top - marginTop - scrollTop;

                // Calculate the offset parent
                $this.parents().each(function () {
                    var $this = $(this);

                    if ($this.data('stellar-offset-parent') === true) {
                        parentOffsetLeft = tempParentOffsetLeft;
                        parentOffsetTop = tempParentOffsetTop;
                        $offsetParent = $this;

                        return false;
                    } else {
                        tempParentOffsetLeft += $this.position().left;
                        tempParentOffsetTop += $this.position().top;
                    }
                });

                // Detect the offsets
                horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
                verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

                self.backgrounds.push({
                    $element: $this,
                    $offsetParent: $offsetParent,
                    isFixed: $this.css('background-attachment') === 'fixed',
                    horizontalOffset: horizontalOffset,
                    verticalOffset: verticalOffset,
                    startingValueLeft: backgroundPosition[0],
                    startingValueTop: backgroundPosition[1],
                    startingBackgroundPositionLeft: (isNaN(parseInt(backgroundPosition[0], 10)) ? 0 : parseInt(backgroundPosition[0], 10)),
                    startingBackgroundPositionTop: (isNaN(parseInt(backgroundPosition[1], 10)) ? 0 : parseInt(backgroundPosition[1], 10)),
                    startingPositionLeft: $this.position().left,
                    startingPositionTop: $this.position().top,
                    startingOffsetLeft: offsetLeft,
                    startingOffsetTop: offsetTop,
                    parentOffsetLeft: parentOffsetLeft,
                    parentOffsetTop: parentOffsetTop,
                    stellarRatio: ($this.data('stellar-background-ratio') === undefined ? 1 : $this.data('stellar-background-ratio'))
                });
            });
        },
        _reset: function () {
            var particle,
                startingPositionLeft,
                startingPositionTop,
                background,
                i;

            for (i = this.particles.length - 1; i >= 0; i--) {
                particle = this.particles[i];
                startingPositionLeft = particle.$element.data('stellar-startingLeft');
                startingPositionTop = particle.$element.data('stellar-startingTop');

                this._setPosition(particle.$element, startingPositionLeft, startingPositionLeft, startingPositionTop, startingPositionTop);

                this.options.showElement(particle.$element);

                particle.$element.data('stellar-startingLeft', null).data('stellar-elementIsActive', null).data('stellar-backgroundIsActive', null);
            }

            for (i = this.backgrounds.length - 1; i >= 0; i--) {
                background = this.backgrounds[i];

                background.$element.data('stellar-backgroundStartingLeft', null).data('stellar-backgroundStartingTop', null);

                setBackgroundPosition(background.$element, background.startingValueLeft, background.startingValueTop);
            }
        },
        destroy: function () {
            this._reset();

            this.$scrollElement.unbind('resize.' + this.name).unbind('scroll.' + this.name);
            this._animationLoop = $.noop;

            $(window).unbind('load.' + this.name).unbind('resize.' + this.name);
        },
        _setOffsets: function () {
            var self = this,
                $window = $(window);

            $window.unbind('resize.horizontal-' + this.name).unbind('resize.vertical-' + this.name);

            if (typeof this.options.horizontalOffset === 'function') {
                this.horizontalOffset = this.options.horizontalOffset();
                $window.bind('resize.horizontal-' + this.name, function () {
                    self.horizontalOffset = self.options.horizontalOffset();
                });
            } else {
                this.horizontalOffset = this.options.horizontalOffset;
            }

            if (typeof this.options.verticalOffset === 'function') {
                this.verticalOffset = this.options.verticalOffset();
                $window.bind('resize.vertical-' + this.name, function () {
                    self.verticalOffset = self.options.verticalOffset();
                });
            } else {
                this.verticalOffset = this.options.verticalOffset;
            }
        },
        _repositionElements: function () {
            var scrollLeft = this._getScrollLeft(),
                scrollTop = this._getScrollTop(),
                horizontalOffset,
                verticalOffset,
                particle,
                fixedRatioOffset,
                background,
                bgLeft,
                bgTop,
                isVisibleVertical = true,
                isVisibleHorizontal = true,
                newPositionLeft,
                newPositionTop,
                newOffsetLeft,
                newOffsetTop,
                i;

            // First check that the scroll position or container size has changed
            if (this.currentScrollLeft === scrollLeft && this.currentScrollTop === scrollTop && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight) {
                return;
            } else {
                this.currentScrollLeft = scrollLeft;
                this.currentScrollTop = scrollTop;
                this.currentWidth = this.viewportWidth;
                this.currentHeight = this.viewportHeight;
            }

            // Reposition elements
            for (i = this.particles.length - 1; i >= 0; i--) {
                particle = this.particles[i];

                fixedRatioOffset = (particle.isFixed ? 1 : 0);

                // Calculate position, then calculate what the particle's new offset will be (for visibility check)
                if (this.options.horizontalScrolling) {
                    newPositionLeft = (scrollLeft + particle.horizontalOffset + this.viewportOffsetLeft + particle.startingPositionLeft - particle.startingOffsetLeft + particle.parentOffsetLeft) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionLeft;
                    newOffsetLeft = newPositionLeft - particle.startingPositionLeft + particle.startingOffsetLeft;
                } else {
                    newPositionLeft = particle.startingPositionLeft;
                    newOffsetLeft = particle.startingOffsetLeft;
                }

                if (this.options.verticalScrolling) {
                    newPositionTop = (scrollTop + particle.verticalOffset + this.viewportOffsetTop + particle.startingPositionTop - particle.startingOffsetTop + particle.parentOffsetTop) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionTop;
                    newOffsetTop = newPositionTop - particle.startingPositionTop + particle.startingOffsetTop;
                } else {
                    newPositionTop = particle.startingPositionTop;
                    newOffsetTop = particle.startingOffsetTop;
                }

                // Check visibility
                if (this.options.hideDistantElements) {
                    isVisibleHorizontal = !this.options.horizontalScrolling || newOffsetLeft + particle.width > (particle.isFixed ? 0 : scrollLeft) && newOffsetLeft < (particle.isFixed ? 0 : scrollLeft) + this.viewportWidth + this.viewportOffsetLeft;
                    isVisibleVertical = !this.options.verticalScrolling || newOffsetTop + particle.height > (particle.isFixed ? 0 : scrollTop) && newOffsetTop < (particle.isFixed ? 0 : scrollTop) + this.viewportHeight + this.viewportOffsetTop;
                }

                if (isVisibleHorizontal && isVisibleVertical) {
                    if (particle.isHidden) {
                        this.options.showElement(particle.$element);
                        particle.isHidden = false;
                    }

                    this._setPosition(particle.$element, newPositionLeft, particle.startingPositionLeft, newPositionTop, particle.startingPositionTop);
                } else {
                    if (!particle.isHidden) {
                        this.options.hideElement(particle.$element);
                        particle.isHidden = true;
                    }
                }
            }

            // Reposition backgrounds
            for (i = this.backgrounds.length - 1; i >= 0; i--) {
                background = this.backgrounds[i];

                fixedRatioOffset = (background.isFixed ? 0 : 1);
                bgLeft = (this.options.horizontalScrolling ? (scrollLeft + background.horizontalOffset - this.viewportOffsetLeft - background.startingOffsetLeft + background.parentOffsetLeft - background.startingBackgroundPositionLeft) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueLeft);
                bgTop = (this.options.verticalScrolling ? (scrollTop + background.verticalOffset - this.viewportOffsetTop - background.startingOffsetTop + background.parentOffsetTop - background.startingBackgroundPositionTop) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueTop);

                setBackgroundPosition(background.$element, bgLeft, bgTop);
            }
        },
        _handleScrollEvent: function () {
            var self = this,
                ticking = false;

            var update = function () {
                self._repositionElements();
                ticking = false;
            };

            var requestTick = function () {
                if (!ticking) {
                    requestAnimFrame(update);
                    ticking = true;
                }
            };

            this.$scrollElement.bind('scroll.' + this.name, requestTick);
            requestTick();
        },
        _startAnimationLoop: function () {
            var self = this;

            this._animationLoop = function () {
                requestAnimFrame(self._animationLoop);
                self._repositionElements();
            };
            this._animationLoop();
        }
    };

    $.fn[pluginName] = function (options) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            return this.each(function () {
                var instance = $.data(this, 'plugin_' + pluginName);
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
                if (options === 'destroy') {
                    $.data(this, 'plugin_' + pluginName, null);
                }
            });
        }
    };

    $[pluginName] = function (options) {
        var $window = $(window);
        return $window.stellar.apply($window, Array.prototype.slice.call(arguments, 0));
    };

    // Expose the scroll and position property function hashes so they can be extended
    $[pluginName].scrollProperty = scrollProperty;
    $[pluginName].positionProperty = positionProperty;

    // Expose the plugin class so it can be modified
    window.Stellar = Plugin;
}(jQuery, this, document));