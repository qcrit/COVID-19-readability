/**
 * @description Utah.gov header with built in accessibility controls and options.
 * @author DTS User Experience Team, Joseph Sharp <jmsharp@utah.gov>
 * @license Free to use for any utah.gov website
 */

/* --- See function "loadUtahHeader" for the list of available options.  -- */

var globalsUT ={};
globalsUT.CONST_DEFAULT_HEADER_FONT_SIZE = 16;
/* ---------------- Utility Functions -------------------------------------------------- */
Element.prototype.hasClass = function (className) {
    if (this.classList) {
        return this.classList.contains(className);
    } else {
        return !!this.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
};

Element.prototype.addClass = function (className) {
    if (this.classList) {
        this.classList.add(className)
    } else if (!this.hasClass(className)) {
        this.className += " " + className;
    }
};

Element.prototype.removeClass = function (className) {
    if (this.classList) {
        this.classList.remove(className)
    } else if (this.hasClass(className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        this.className = this.className.replace(reg, ' ');
    }
};

Element.prototype.setAttributes = function (attrs) {
    for (var idx in attrs) {
        if ((idx === 'style') && (typeof attrs[idx] === 'object')) {
            for (var prop in attrs[idx]){this.style[prop] = attrs[idx][prop];}
        } else if (idx === 'html') {
            this.innerHTML = attrs[idx];
        } else {
            this.setAttribute(idx, attrs[idx]);
        }
    }
};

function createMenuItem(text,url) {
    var menuItem = document.createElement('li');
    var menuLink = document.createElement('a');
    menuLink.setAttribute('href',url);
    menuLink.appendChild(document.createTextNode(text));
    menuItem.appendChild(menuLink);
    return menuItem;
}

function mergeObj() {
    var obj = {},
        i = 0,
        il = arguments.length,
        key;
    for (; i < il; i++) {
        for (key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                obj[key] = arguments[i][key];
            }
        }
    }
    return obj;
}

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toUTCString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}


// ------------------------------ Site Settings & Cookies ------------------------------ //
globalsUT.CONST_COOKIE_NAME = 'Accessibility_Settings';
function writeSiteSetting(key, val) {
    //set a site setting value by key
    var c = readSiteCookie();
    var sitesettings = {};
    if (c) {
        sitesettings = JSON.parse(c);
    }
    sitesettings[key] = val;

    createCookie(globalsUT.CONST_COOKIE_NAME,JSON.stringify(sitesettings),365);
}
function readSiteSetting(key) {
    //read a site setting value by key
    var retval = null;
    var c = readSiteCookie();
    if (c) {
        c = JSON.parse(readSiteCookie());
        if (c) {
            retval = c[key];
        }
    }
    return retval;
}
function deleteSiteSetting(key) {
    var c = readSiteCookie();
    if (c) {
        c = JSON.parse(readSiteCookie());
        if (c) {
            if (c[key]) {
                delete c[key];
                createCookie(globalsUT.CONST_COOKIE_NAME, JSON.stringify(c), 365);
            }
        }
    }
}

function readSiteCookie() {
    var c = readCookie(globalsUT.CONST_COOKIE_NAME);
    return c;
}

/* ---------------- Site Settings Functions -------------------------------------------------- */

globalsUT.CONST_ACCESSIBILITY_VIEW = 'AccessibilityView';
globalsUT.CONST_FONT_SIZE = 'FontSizeAdjustment';
globalsUT.CONST_HEADER_FONT_SIZE = 'HeaderFontSize';
globalsUT.CONST_FONT_WEIGHT = 'FontWeight';
function turnOnAccessibilityView() {
    //The user has specified they want accessibility view.
    document.body.addClass('accessibilityview');
    var btn = document.getElementById('accessibilityViewState');
    btn.addClass('bg-red');
    btn.textContent = 'ON';
    writeSiteSetting(globalsUT.CONST_ACCESSIBILITY_VIEW, true);
}
function turnOffAccessibilityView() {
    document.body.removeClass('accessibilityview');
    var btn = document.getElementById('accessibilityViewState');
    btn.removeClass('bg-red');
    btn.textContent = 'OFF';
    deleteSiteSetting(globalsUT.CONST_ACCESSIBILITY_VIEW);
}

function adjustFontSize(adjustment, options) {
    var size = readSiteSetting(globalsUT.CONST_FONT_SIZE);
    var headerSize = readSiteSetting(globalsUT.CONST_HEADER_FONT_SIZE);
    if (size) {
        size += adjustment;
    } else {
        size = options.defaultFontSize + adjustment;
    }
	if (headerSize) {
		headerSize += adjustment;
	} else {
		headerSize = globalsUT.CONST_DEFAULT_HEADER_FONT_SIZE + adjustment;
	}
    document.getElementsByTagName(options.defaultRootEl)[0].style.fontSize = size + 'px';
    document.getElementById("utahGovHeaderWrapper").style.fontSize = headerSize + 'px';
	document.getElementById("siteSettings").style.fontSize = headerSize + 'px';
    writeSiteSetting(globalsUT.CONST_FONT_SIZE, size);
	writeSiteSetting(globalsUT.CONST_HEADER_FONT_SIZE, headerSize);
}
function resetFontSize(options) {
	document.getElementsByTagName(options.defaultRootEl)[0].style.fontSize = '';
	document.getElementById("utahGovHeaderWrapper").style.fontSize = '';
	document.getElementById("siteSettings").style.fontSize = '';
    deleteSiteSetting(globalsUT.CONST_FONT_SIZE);
	deleteSiteSetting(globalsUT.CONST_HEADER_FONT_SIZE);
}

function setFontWeight(weight) {
    document.body.style.fontWeight = weight;
    var storedweight = readSiteSetting(globalsUT.CONST_FONT_WEIGHT);
    if (storedweight !== weight) {
        writeSiteSetting(globalsUT.CONST_FONT_WEIGHT, weight);
    }
}
function resetFontWeight(defaultWeight) {
    document.body.style.fontWeight = '';
    document.getElementById('siteSettings_FontWeightOptions').value = defaultWeight;
    deleteSiteSetting(globalsUT.CONST_FONT_WEIGHT);
}

function loadSiteSettings(options) {
    var fontSizeAdj = readSiteSetting(globalsUT.CONST_FONT_SIZE);
    var fontWeight = readSiteSetting(globalsUT.CONST_FONT_WEIGHT);
    var accessibilityView = readSiteSetting(globalsUT.CONST_ACCESSIBILITY_VIEW);
    if (fontSizeAdj) {
        document.getElementsByTagName(options.defaultRootEl)[0].style.fontSize = fontSizeAdj + 'px';
    }
    if (fontWeight) {
        document.body.style.fontWeight = fontWeight;
    }
    if (accessibilityView) {
        document.body.addClass('accessibilityview');
    }
}

function escKeyListener(e) {
    if (e.key=='Escape' || e.key=='Esc' || e.keyCode==27) {
        document.getElementById('siteSettings_CloseButton').click();
    }
}

function loadSiteSettingsPanel(options) {
    var siteSettingPanelWrapper = document.getElementById('siteSettingsPanelWrapper');
    if (!siteSettingPanelWrapper) {
        siteSettingPanelWrapper = document.createElement('div');
        siteSettingPanelWrapper.setAttribute('id', 'siteSettingsPanelWrapper');
        siteSettingPanelWrapper.innerHTML = '\
                <div id="siteSettingsBackdrop"></div>\
                <div id="siteSettings" role="dialog" aria-labelledby="siteSettings_title" aria-modal="true">\
                    <button id="siteSettings_CloseButton" class="utahGovHeader_CloseButton red">Close</button>\
                    <h2 id="siteSettings_title">Accessibility Settings</h2>\
                    <ul id="siteSettingsUL">\
                        <li class="align-center padded">\
                            <div id="siteSettings_contrast-label" tabindex="-1" style="padding-bottom: 5px;">Contrast:</div>\
                                <button id="accessibilityViewToggle" class="button">Accessibility View <span id="accessibilityViewState" class="button">OFF</span></button>\
                        </li>\
                        <li class="align-center padded">\
                            <div style="padding-bottom: 5px;">Font Sizes:</div>\
                                <button id="siteSettings_FontLarger" class="button">Font +</button>\
                                <button id="siteSettings_FontReset" class="button">Font Reset</button>\
                                <button id="siteSettings_FontSmaller" class="button">Font &minus;</button>\
                        </li>\
                        <li class="align-center padded">\
                            <label for="siteSettings_FontWeightOptions" style="display:block; padding-bottom: 5px;">Font Weight: </label>\
                            <div>\
                                <select id="siteSettings_FontWeightOptions">\
                                </select>\
                            </div>\
                            <button id="siteSettings_ResetFontWeight" class="button">Reset Font Weight</button>\
                        </li>\
                    </ul>\
                </div>\
                ';
        document.body.appendChild(siteSettingPanelWrapper);
        var fontWeightOptions = document.getElementById('siteSettings_FontWeightOptions');
        for (var i = 0; i < options.fontWeights.length; i++) {
            var optionEle = document.createElement('option');
            optionEle.setAttributes({
                'value': options.fontWeights[i],
                'html': options.fontWeights[i]
            });
            if (options.fontWeights[i] == options.defaultFontWeight) {
                optionEle.setAttribute('selected', 'selected');
            }
            fontWeightOptions.appendChild(optionEle);
        }
        document.getElementById('siteSettings_contrast-label').focus();
        //Hook up Events -------------------------------------------------------------------
        var accessibililtyButton = document.getElementById('accessibilityViewToggle');
        accessibililtyButton.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            var accessibilityView = readSiteSetting(globalsUT.CONST_ACCESSIBILITY_VIEW);
            if (accessibilityView) {
                //toggle off
                turnOffAccessibilityView();
            } else {
                //toggle on
                turnOnAccessibilityView();
            }
        });

        var fontSizeLarger = document.getElementById('siteSettings_FontLarger');
        fontSizeLarger.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            adjustFontSize(1, options);
        });
        var fontSizeReset = document.getElementById('siteSettings_FontReset');
        fontSizeReset.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            resetFontSize(options);
        });
        var fontSizeSmaller = document.getElementById('siteSettings_FontSmaller');
        fontSizeSmaller.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            adjustFontSize(-1, options);
        });

        var fontWeightSelect = document.getElementById('siteSettings_FontWeightOptions');
        fontWeightSelect.addEventListener('change', function (event) {
            if (this.value == options.defaultFontWeight) {
                resetFontWeight(options.defaultFontWeight);
            } else {
                setFontWeight(this.value);
            }
        });
        var fontWeightReset = document.getElementById('siteSettings_ResetFontWeight');
        fontWeightReset.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            resetFontWeight(options.defaultFontWeight);
        });

        setupCloseForPopup('settingsLink'); // #id of where to return focus

        var accessibilityView = readSiteSetting(globalsUT.CONST_ACCESSIBILITY_VIEW);
        if (accessibilityView) {
            turnOnAccessibilityView();
        }
        var fontWeight = readSiteSetting(globalsUT.CONST_FONT_WEIGHT);
        if (!fontWeight) {
            fontWeight = options.defaultFontWeight;
        }
        document.getElementById('siteSettings_FontWeightOptions').value = fontWeight;

        // Manually loop tabbing within the modal (eg last focusable element focuses to first on tab)
        fontWeightReset.addEventListener('keydown', function(event) {
            if (event.keyCode === 9 && !event.shiftKey) {
                event.preventDefault();
                document.getElementById('siteSettings_CloseButton').focus();
            }
        });
        document.getElementById('siteSettings_CloseButton').addEventListener('keydown', function(event) {
            if (event.shiftKey && event.keyCode == 9) { // Shift + Tab to go back
                event.preventDefault();
                fontWeightReset.focus();
            }
        });

        document.addEventListener('keydown', escKeyListener);
    }
}

function loadUtahGovSearch() {
	var siteSettingPanelWrapper = document.getElementById('siteSettingsPanelWrapper');
	if (!siteSettingPanelWrapper) {
		siteSettingPanelWrapper = document.createElement('div');
		siteSettingPanelWrapper.setAttribute('id', 'siteSettingsPanelWrapper');
		siteSettingPanelWrapper.innerHTML = '\
                <div id="siteSettingsBackdrop" role="dialog" aria-labelledby="siteSettings_search-title" aria-modal="true"></div>\
                <div id="siteSettings">\
                    <a id="siteSettings_CloseButton" class="utahGovHeader_CloseButton red" href="#">Close</a>\
                    <label id="siteSettings_search-title" for="searchUtahGovInput">Search all of Utah.gov</label>\
                    <input type="text" id="searchUtahGovInput" name="searchUtahGovInput">\
                    <a href="#" id="searchUtahGovButton" class="button">Search</a>\
                </div>\
                ';
		document.body.appendChild(siteSettingPanelWrapper);
	}
	setupCloseForPopup('utahGovLink'); // #id of where to return focus
	var searchInput = document.getElementById('searchUtahGovInput');
	var searchButton = document.getElementById('searchUtahGovButton');
	var doSearch = function (event) {
        event.stopPropagation();
        var queryTerms = searchInput.value;
        queryTerms = queryTerms.replace(/ /g,'+');
        if ((event.keyCode === 13 && queryTerms.length > 0) || (event.type === 'click' && queryTerms.length > 0)) {
			event.preventDefault();
			window.location.href = 'https://www.utah.gov/search-results.html?q=' + queryTerms;
        }
	};
	searchInput.addEventListener('keypress',doSearch);
	searchButton.addEventListener('click',doSearch);
    searchInput.focus();

    // Manually loop tabbing within the modal (eg last focusable element focuses to first on tab)
    searchButton.addEventListener('keydown', function(event) {
        if (event.keyCode === 9 && !event.shiftKey) {
            event.preventDefault();
            document.getElementById('siteSettings_CloseButton').focus();
        }
    });
    document.getElementById('siteSettings_CloseButton').addEventListener('keydown', function(event) {
        if (event.shiftKey && event.keyCode == 9) { // Shift + Tab to go back
            event.preventDefault();
            searchButton.focus();
        }
    });

    document.addEventListener('keydown', escKeyListener);
}

function setupCloseForPopup(returnFocusTo) {
	var closeButton = document.getElementById('siteSettings_CloseButton');
	closeButton.addEventListener('click', function (event) {
		event.preventDefault();
		event.stopPropagation();
		closeSiteSettingsPanel(returnFocusTo);
	});
	var backDrop = document.getElementById('siteSettingsBackdrop');
	backDrop.addEventListener('click', function (event) {
		event.preventDefault();
		event.stopPropagation();
		closeSiteSettingsPanel(returnFocusTo);
	});
}

function closeSiteSettingsPanel(returnFocusTo) {
    var siteSettingsPanel = document.getElementById('siteSettingsPanelWrapper');
    if (siteSettingsPanel.parentNode) {
        siteSettingsPanel.parentNode.removeChild(siteSettingsPanel);
    }
    document.getElementById(returnFocusTo).focus();
    document.removeEventListener('keydown', escKeyListener);
}

function loadUtahCSS(options) {
    var css = '\
.admin-bar #utahGovHeaderWrapper {\
    top: 32px;\
}\
#utahGovHeaderWrapper {\
    font-family: sans-serif;\
    display: -webkit-flex;\
	display: -ms-flexbox;\
	display: flex;\
	-webkit-box-pack: justify;\
	-webkit-justify-content: space-between;\
	-ms-flex-pack: justify;\
	justify-content: space-between;\
    position: absolute;\
    z-index: 10000;\
    top: 0;\
    left: 0;\
    width: 100%;\
    height: bHEIGHT;\
    background: bBACKGROUND;\
    font-size: 16px;\
}\
#utahGovHeaderWrapper > div {\
    line-height: bHEIGHT;\
}\
#utahGovHeaderWrapper a, #utahGovHeaderWrapper div {\
    text-decoration: none;\
    color: bCOLOR;\
    transition: all 400ms;\
    display: block;\
}\
#utahGovSection, #settingsSection {\
    display: block;\
    float: left;\
    height: 100%;\
    min-width: 150px;\
}\
#skipNavLink {\
    position: absolute;\
    width: 1px;\
    height: 1px;\
    padding: 0;\
    overflow: hidden;\
    clip: rect(0,0,0,0);\
    white-space: nowrap;\
    clip-path: inset(50%);\
    border: 0;\
}\
#skipNavLink:focus {\
    position: fixed;\
    width: auto;\
    height: auto;\
    padding: .5rem;\
    overflow: visible;\
    clip: auto;\
    white-space: normal;\
    clip-path: none;\
    z-index: 23000;\
    background: #fff;\
    color: #000;\
}\
#utahGovLink {\
    width: 100%;\
    height: 100%;\
    background: highLightCOLOR;\
    background-size: 39px;\
    padding: 0 10px 0 60px;\
    box-sizing: border-box;\
}\
#utahGovLink svg, #settingsLink svg {\
    position: absolute;\
	top: 50%;\
	-webkit-transform: translateY(-50%);\
	transform: translateY(-50%);\
	left: 0;\
	height: 80%;\
    max-height: 32px;\
    width: 56px;\
}\
#utahGovAgencySection {\
    display: block;\
    height: 100%;\
    text-align: center;\
    overflow: hidden;\
    padding: 0 20px;\
}\
#utahGovAgencySection:hover, #utahGovAgencySection a:focus {\
    background: highLightCOLOR;\
}\
#utahGovAgencySection img {\
    vertical-align: middle;\
}\
#settingsSection {\
    position: relative;\
}\
#agencyShortName {\
    display: none;\
}\
#settingsLink svg {\
    left: auto;\
    right: 10px;\
    height: 60%;\
    max-height: 22px;\
    width: 22px;\
}\
#settingsLink {\
    width: 100%;\
    height: 100%;\
    background: highLightCOLOR;\
    padding: 0 60px 0 10px;\
    box-sizing: border-box;\
    text-align: right;\
}\
#settingsLink:hover, #settingsLink:focus,\
#utahGovLink:hover, #utahGovLink:focus {\
    background-color: hoverCOLOR;\
}\
#utahGovSection nav ul {\
    display: none;\
    list-style-type: none;\
    margin: 0;\
    padding: 0;\
    background: bBACKGROUND;\
    position: absolute;\
    z-index: 2000;\
    top: bHEIGHT;\
}\
#utahGovSection nav ul.show {\
    display: block;\
}\
#utahGovSection nav ul li a {\
    display: block;\
    padding: 0 35px;\
    background: highLightCOLOR\
}\
#utahGovSection nav ul li a:hover,\
#utahGovSection nav ul li a:focus {\
    background: hoverCOLOR\
}\
#siteSettingsPanelWrapper, #siteSettingsBackdrop {\
    display: block;\
    position: fixed;\
    width: 100%;\
    height: 100%;\
    z-index: 20000;\
    background: rgba(0,0,0,0.25);\
    top: 0;\
    left: 0;\
}\
#siteSettings {\
    display: inline-block;\
    position: fixed;\
    left: 50%;\
    width: 500px;\
    padding: 50px;\
    background: #ffffff;\
    margin: 100px 0 0 -250px;\
    z-index: 21000;\
    box-sizing: border-box;\
    text-align: center;\
    font-size: 16px;\
}\
#siteSettings h2 {\
    margin: 0 0 .8rem 0;\
    font-size: 1.5em;\
    color: #333 !important;\
}\
#siteSettings ul {\
    list-style-type: none;\
    padding: 0;\
    margin: 0;\
}\
#siteSettings ul li {\
    margin: 15px 0 0 0;\
}\
.utahGovHeader_CloseButton {\
    display: block;\
    width: 30px;\
    height: 30px;\
    border: none;\
    border-radius: 15px;\
    text-indent: -9999px;\
    overflow: hidden;\
    background: #444444;\
    position: absolute;\
    right: -15px;\
    top: -15px;\
    transition: all 400ms;\
    padding: 0;\
}\
.utahGovHeader_CloseButton.red {\
    background: #ff5400;\
}\
.utahGovHeader_CloseButton:hover, .utahGovHeader_CloseButton:focus {\
    background: #111111;\
}\
.utahGovHeader_CloseButton:before, .utahGovHeader_CloseButton:after {\
    content: "";\
    display: block;\
    height: 3px;\
    width: 22px;\
    background: #ffffff;\
    position: absolute;\
    top: calc(50% - 1px);\
    left: calc(50% - 11px);\
}\
.utahGovHeader_CloseButton:before {\
    transform: rotate(45deg);\
\
}\
.utahGovHeader_CloseButton:after {\
    transform: rotate(-45deg);\
}\
#siteSettings .button {\
    background: #444444;\
    color: #ffffff;\
    display: inline-block;\
    padding: 14px 20px;\
    text-decoration: none;\
    border: none;\
    border-radius: 3px;\
    transition: all 400ms;\
    font-size: 1em;\
    font-weight: normal;\
    line-height: 1rem;\
}\
#siteSettings .button:hover, #siteSettings .button:focus {\
    background: #111111;\
}\
#siteSettings .button .button {\
    background: #eeeeee;\
    padding: 5px;\
    color: #444444;\
}\
#siteSettings .button.bg-red {\
    background: #ff5400;\
    color: #ffffff;\
}\
#siteSettings label {\
    font-weight: normal;\
}\
#siteSettings input[type="text"] {\
    border: 1px solid #444;\
	border-radius: 3px;\
	padding: 12px 10px;\
	width: 65%;\
	display: inline-block;\
	line-height: 1rem;\
}\
#siteSettings_FontWeightOptions {\
    margin-bottom: 8px;\
    width: 170px;\
}\
#siteSettings_search-title {\
    font-size: 1.35rem;\
    display: block;\
    margin-bottom: .75rem;\
}\
#importantMessageBox {\
    background: #ff8537;\
    color: #fff;\
	position: absolute;\
	top: bHEIGHT;\
	z-index: 20000;\
	padding: 0 20px 20px;\
	width: 80%;\
	max-width: 600px;\
	text-align: center;\
	left: 50%;\
	-webkit-transform: translateX(-50%);\
	transform: translateX(-50%);\
}\
#importantMessageBox .button {\
    background: #fff;\
    color: #ff8537;\
    display: inline-block;\
    padding: 10px 20px;\
    text-decoration: none;\
    border: none;\
    border-radius: 3px;\
    transition: all 400ms;\
}\
@media only screen and (max-width: 782px) {\
    .admin-bar #utahGovHeaderWrapper {\
        top: 45px;\
    }\
}\
@media only screen and (max-width: 640px) {\
    #utahGovSection, #settingsSection {\
        width: auto;\
        min-width: 0;\
    }\
    #utahGovSection span.text,\
    #settingsSection span.text,\
    #agencyFullName {\
        display: none;\
    }\
    #agencyShortName {\
        display: inline;\
    }\
    #settingsLink svg {\
        right: 16px;\
    }\
    #utahGovHeaderWrapper #utahGovAgencySection {\
        display: -webkit-box;\
        display: -webkit-flex;\
        display: -ms-flexbox;\
        display: flex;\
        -webkit-box-align: center;\
        -webkit-align-items: center;\
        -ms-flex-align: center;\
        align-items: center;\
        line-height: normal;\
    }\
    #siteSettings {\
	    width: 92%;\
	    margin: 60px 0 0 -46%;\
	    padding: 10px;\
    }\
}\
    ';
    css = css.replace(new RegExp('bHEIGHT', 'g'), options.height);
    css = css.replace(new RegExp('bBACKGROUND', 'g'), options.backgroundColor);
    css = css.replace(new RegExp('bCOLOR', 'g'), options.foregroundColor);
    if (options.darkColorScheme) {
        css = css.replace(new RegExp('highLightCOLOR', 'g'), 'rgba(255,255,255,0.05)');
        css = css.replace(new RegExp('hoverCOLOR', 'g'), 'rgba(255,255,255,0.15)');
    } else {
        css = css.replace(new RegExp('highLightCOLOR', 'g'), 'rgba(0,0,0,0.05)');
        css = css.replace(new RegExp('hoverCOLOR', 'g'), 'rgba(0,0,0,0.1)');
    }
    return css;
}

/* ---------------- Utah.gov Header Functions -------------------------------------------------- */
function loadUtahHeader(options) {
    var optionsDefault = {
        backgroundColor: '#E8E7E6',
        foregroundColor: '#333333',
        darkColorScheme: false,
        height: '32px',
        agencyName: '',
        agencyShortName: '',
        agencyLogoUrl: '',
        agencyLink: '', //Link for the logo or text of the agency.
        fontWeights: [200,300,400,500,600,700,800],
        defaultFontWeight: 300,
        defaultFontSize: 16,
        defaultRootEl: 'body',
        skipNav: false,
        mainContentId: 'maincontent'
    };
    var _options = mergeObj(optionsDefault,options);

    var jStyle = document.createElement('style');
    jStyle.innerHTML = loadUtahCSS(_options);
    var domHead = document.getElementsByTagName('head')[0];
    domHead.insertBefore(jStyle, domHead.childNodes[0]);

    var utahBannerWrapper = document.createElement('header');
    utahBannerWrapper.setAttribute('id','utahGovHeaderWrapper');
    document.body.insertBefore(utahBannerWrapper, document.body.childNodes[0]);

    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

    //Skip Navigation
    if (_options.skipNav && !isIE11) {
        var skipNavLink = document.createElement('a');
        skipNavLink.innerHTML = 'skip to main content';
        skipNavLink.setAttributes({
            'href': '#' + _options.mainContentId,
            'id': 'skipNavLink'
        });
        utahBannerWrapper.appendChild(skipNavLink);
    }

    //Utah.gov Section
    var utahGovSection = document.createElement('div');
    utahGovSection.setAttribute('id','utahGovSection');
    
    utahBannerWrapper.appendChild(utahGovSection);

	//Utah.gov Link
    var utahGovLink = document.createElement('a');
    utahGovLink.setAttributes({
        'href': 'http://www.utah.gov',
        'id': 'utahGovLink'
    });
    utahGovSection.appendChild(utahGovLink);

	var logoReversed = '<svg viewBox="0 0 56 56" x="0px" y="0px" width="56px" height="56px" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M0 35.5c0-4.8 3.9-8.7 8.7-8.7 4.8 0 8.7 3.9 8.7 8.7 0 4.8-3.9 8.7-8.7 8.7S0 40.3 0 35.5z" fill="#E6B42A"></path><path d="M3 12v10.9c0 2.6 1.1 3.9 3.4 3.9 1 0 1.9-0.3 2.7-0.9 0.8-0.6 1.4-1.2 1.6-2v-12h3v17h-3v-2.4c-0.3 0.7-1 1.3-2 1.8 -1 0.6-2 0.8-3 0.8 -1.9 0-3.3-0.5-4.3-1.6S0 24.9 0 22.9V11.7H3L3 12 3 12zM17.2 14.4h-2V12h2V8.4l3-1.2v4.7h4.7v2.4h-4.7v8.5c0 1.4 0.2 2.4 0.7 3.1 0.5 0.6 1.3 0.9 2.3 0.9 0.8 0 1.6-0.2 2.4-0.6l0.4 2.7c-1.3 0.3-2.6 0.5-4.1 0.5 -1.3 0-2.5-0.5-3.4-1.5 -0.9-1-1.4-2.3-1.4-3.8L17.2 14.4 17.2 14.4zM36.8 27.1c-1.2 1.5-3.1 2.3-5.6 2.3 -1.3 0-2.5-0.5-3.5-1.5 -1-1-1.5-2.2-1.5-3.6 0-1.7 0.8-3.2 2.3-4.4 1.5-1.2 3.4-1.8 5.8-1.8 0.6 0 1.4 0.1 2.2 0.4 0-2.8-1.2-4.1-3.7-4.1 -1.9 0-3.3 0.5-4.4 1.5l-1.3-2.5c0.6-0.5 1.4-0.9 2.4-1.2 1-0.3 2-0.5 2.9-0.5 2.5 0 4.3 0.6 5.4 1.7 1.1 1.1 1.7 2.9 1.7 5.4v6.1c0 1.5 0.4 2.5 1.3 3v1.5c-1.2 0-2.2-0.2-2.8-0.5C37.5 28.5 37.1 27.9 36.8 27.1zM36.5 20.7c-1-0.2-1.6-0.3-2-0.3 -1.5 0-2.8 0.4-3.7 1.2 -1 0.8-1.4 1.7-1.4 2.8 0 1.8 1 2.7 3.1 2.7 1.5 0 2.9-0.7 4.1-2.2L36.5 20.7 36.5 20.7zM53 29.1V18.4c0-1.3-0.3-2.3-0.9-3 -0.6-0.7-1.5-1.1-2.6-1.1 -0.7 0-1.5 0.2-2.2 0.6 -0.7 0.4-1.3 0.9-1.7 1.5v12.7h-3v-23l3-1V14c0.4-0.6 1.1-1.1 1.9-1.6 0.9-0.4 1.8-0.6 2.8-0.6 1.8 0 3.2 0.6 4.2 1.8 1 1.2 1.5 2.8 1.5 4.9v10.7L53 29.1 53 29.1z" fill="UTAH_COLOR"></path><path d="M16.9 49l1.4-2.1c1.5 1 3 1.5 4.3 1.5 1.2 0 2.1-0.2 2.8-0.6s1-0.9 1-1.5c0-1.2-0.9-1.8-2.6-1.8 -0.3 0-0.8 0.1-1.6 0.2 -0.8 0.1-1.4 0.2-1.8 0.2 -2.1 0-3.2-0.8-3.2-2.4 0-0.5 0.2-0.9 0.7-1.3 0.5-0.4 1.1-0.7 1.8-0.9 -2.1-1-3.1-2.7-3.1-5.1 0-1.6 0.5-2.9 1.6-3.9 1.1-1 2.4-1.6 4-1.6 1.5 0 2.6 0.3 3.4 0.9l1.3-1.6 1.7 1.6L27 31.8c0.7 0.9 1 2 1 3.5 0 1.5-0.5 2.8-1.4 3.8 -0.9 1-2.2 1.6-3.7 1.8l-2.2 0.2c-0.3 0-0.6 0.1-1 0.3 -0.4 0.2-0.7 0.4-0.7 0.7 0 0.4 0.5 0.6 1.4 0.6 0.4 0 1-0.1 1.9-0.2 0.8-0.1 1.5-0.2 1.9-0.2 1.5 0 2.6 0.4 3.4 1.1 0.8 0.7 1.2 1.7 1.2 2.9 0 1.4-0.6 2.5-1.8 3.3 -1.2 0.8-2.8 1.3-4.7 1.3 -1 0-2-0.2-3-0.5C18.4 49.9 17.6 49.5 16.9 49zM22.5 31.8c-0.9 0-1.7 0.3-2.2 1 -0.6 0.6-0.9 1.4-0.9 2.4 0 1 0.3 1.9 0.8 2.6 0.6 0.7 1.3 1 2.3 1 0.9 0 1.7-0.3 2.2-1 0.5-0.7 0.8-1.5 0.8-2.6 0-0.9-0.3-1.7-0.9-2.4C24.1 32.2 23.4 31.8 22.5 31.8zM28.8 37.4c0-2.3 0.6-4.2 1.9-5.6 1.2-1.4 2.9-2.1 4.9-2.1 2.1 0 3.8 0.7 5 2 1.2 1.4 1.8 3.2 1.8 5.7 0 2.4-0.6 4.3-1.8 5.7 -1.2 1.4-2.8 2.1-4.9 2.1 -2.1 0-3.8-0.7-5-2.1C29.4 41.7 28.8 39.8 28.8 37.4zM31.5 37.4c0 3.7 1.3 5.6 4 5.6 1.2 0 2.2-0.5 2.9-1.5s1.1-2.4 1.1-4.1c0-3.7-1.3-5.5-4-5.5 -1.2 0-2.2 0.5-2.9 1.5C31.9 34.3 31.5 35.7 31.5 37.4zM49.5 45.2h-0.7L42.4 30h2.9l3.9 10.4 4-10.4H56L49.5 45.2z" fill="GOV_COLOR"></path></svg> <span class="text">Utah.gov</span>';

	var utahColor, govColor;
	if (!_options.darkColorScheme) {
	    utahColor = '#416E92';
	    govColor = '#593830'
    } else {
	    utahColor = '#ffffff';
	    govColor = '#ffffff';
    }
    logoReversed = logoReversed.replace(new RegExp('UTAH_COLOR', 'g'), utahColor);
	logoReversed = logoReversed.replace(new RegExp('GOV_COLOR', 'g'), govColor);
	utahGovLink.innerHTML = logoReversed;

    //Menu
    var utahGovNav = document.createElement('nav');
    utahGovSection.appendChild(utahGovNav);
    var utahGovMenu = document.createElement('ul');
    utahGovMenu.appendChild(createMenuItem('Visit Utah.gov','http://www.utah.gov'));
    utahGovMenu.appendChild(createMenuItem('Services','http://www.utah.gov/services/'));
    utahGovMenu.appendChild(createMenuItem('Agencies','http://www.utah.gov/government/agencylist.html'));
    var searchLink = createMenuItem('Search Utah.gov','http://www.utah.gov');
    searchLink.addEventListener('click',function (event) {
        event.stopPropagation();
        event.preventDefault();
        loadUtahGovSearch();
        utahGovMenu.removeClass('show');
	});
    utahGovMenu.appendChild(searchLink);
    utahGovNav.appendChild(utahGovMenu);

    utahGovLink.addEventListener('click',function (event) {
        event.preventDefault();
        event.stopPropagation();
		if (utahGovMenu.hasClass('show')) {
			utahGovMenu.removeClass('show');
		} else {
			utahGovMenu.addClass('show');
		}
    });
    window.addEventListener('click', function (event) {
        if (utahGovMenu.hasClass('show')) {
            utahGovMenu.removeClass('show');
        }
    });

    //Agency Section
    var agencySection = document.createElement('div');
    agencySection.setAttribute('id', 'utahGovAgencySection');
    utahBannerWrapper.appendChild(agencySection);
    if (_options.agencyLink) {
        var link = document.createElement('a');
        link.setAttributes({
            'href': _options.agencyLink
        });
        agencySection.appendChild(link);
        agencySection = link;
    }
    if (_options.agencyLogoUrl) {
        var agencyImg = document.createElement('img');
        agencyImg.setAttributes({
            'src': _options.agencyLogoUrl,
            'alt': _options.agencyName
        });
        agencySection.appendChild(agencyImg);
    } else if (_options.agencyName) {
        var fullName = document.createElement('span');
        fullName.innerText = _options.agencyName;
        fullName.setAttribute('id', 'agencyFullName');
        agencySection.appendChild(fullName);
        
        if (_options.agencyShortName) {
            var shortName = document.createElement('span')
            shortName.innerText = _options.agencyShortName;
            shortName.setAttribute('id', 'agencyShortName');
            agencySection.appendChild(shortName);
        }
    }

    //Settings Section
    var settingsSection = document.createElement('div');
    settingsSection.setAttribute('id','settingsSection');
    utahBannerWrapper.appendChild(settingsSection);

    //Settings Link
    var settingsLink = document.createElement('a');
    settingsLink.setAttributes({
        'href': '#settings',
        'id': 'settingsLink'
    });

    var gearIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><title>Settings</title><path d="M27.24,11.81l-2.07-.52a1,1,0,0,1-.71-.66A10.89,10.89,0,0,0,23.78,9a1,1,0,0,1,0-1l1.1-1.83A1,1,0,0,0,24.76,5L23,3.24a1,1,0,0,0-1.22-.15L20,4.18a1,1,0,0,1-1,0,10.85,10.85,0,0,0-1.64-.68,1,1,0,0,1-.66-.71L16.19.76a1,1,0,0,0-1-.76H12.78a1,1,0,0,0-1,.76l-.52,2.07a1,1,0,0,1-.67.71A10.92,10.92,0,0,0,9,4.22a1,1,0,0,1-1,0L6.18,3.09A1,1,0,0,0,5,3.24L3.24,5a1,1,0,0,0-.15,1.22L4.19,8a1,1,0,0,1,0,1,10.89,10.89,0,0,0-.68,1.64,1,1,0,0,1-.71.66l-2.07.52a1,1,0,0,0-.76,1v2.44a1,1,0,0,0,.76,1l2.07.52a1,1,0,0,1,.71.66A10.92,10.92,0,0,0,4.22,19a1,1,0,0,1,0,1l-1.1,1.83A1,1,0,0,0,3.24,23L5,24.76a1,1,0,0,0,1.22.15L8,23.81a1,1,0,0,1,1,0,11,11,0,0,0,1.64.68,1,1,0,0,1,.66.71l.52,2.07a1,1,0,0,0,1,.76h2.44a1,1,0,0,0,1-.76l.52-2.07a1,1,0,0,1,.67-.71A10.92,10.92,0,0,0,19,23.78a1,1,0,0,1,1,0l1.83,1.1A1,1,0,0,0,23,24.76L24.76,23a1,1,0,0,0,.15-1.22L23.81,20a1,1,0,0,1,0-1,10.94,10.94,0,0,0,.68-1.64,1,1,0,0,1,.71-.67l2.07-.52a1,1,0,0,0,.76-1V12.78A1,1,0,0,0,27.24,11.81ZM14,19a5,5,0,1,1,5-5A5,5,0,0,1,14,19Z" style="fill:GEAR_COLOR"/></svg><span class="text">Settings</span>';
    var gearColor = '#000';
    if (_options.darkColorScheme) {
        gearColor = '#fff';
    }
	gearIcon = gearIcon.replace(new RegExp('GEAR_COLOR', 'g'), gearColor);
    settingsLink.innerHTML = gearIcon;

	settingsSection.appendChild(settingsLink);
    settingsLink.addEventListener('click',function (event) {
        event.stopPropagation();
        event.preventDefault();
        loadSiteSettingsPanel(_options);
    });

    loadSiteSettings(_options);
}
