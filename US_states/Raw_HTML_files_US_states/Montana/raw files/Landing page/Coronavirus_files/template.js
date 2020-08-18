//Injected by MTJSModule
window.templateDomain="https://template.mt.gov";
window.mtgovDomain="https://mt.gov";

/**********     CONTENTS                           **********/
/**********     MODERNIZR Line 14                  **********/
/**********     TEMPLATE MARKUP                    **********/
/**********     BACKGROUND SWITCHER                **********/
/**********     MOBILE SEARCH                      **********/

/**********MODERNIZR BEGIN**********/
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
	* Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
	*/
;


window.Modernizr = (function (window, document, undefined) {

    var version = '2.6.2',

	Modernizr = {},

	enableClasses = true,

	docElement = document.documentElement,

	mod = 'modernizr',
	modElem = document.createElement(mod),
	mStyle = modElem.style,

	inputElem = document.createElement('input'),

	smile = ':)',

	toString = {}.toString,

	prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



	omPrefixes = 'Webkit Moz O ms',

	cssomPrefixes = omPrefixes.split(' '),

	domPrefixes = omPrefixes.toLowerCase().split(' '),

	ns = { 'svg': 'http://www.w3.org/2000/svg' },

	tests = {},
	inputs = {},
	attrs = {},

	classes = [],

	slice = classes.slice,

	featureName,


	injectElementWithStyles = function (rule, callback, nodes, testnames) {

	    var style, ret, node, docOverflow,
			div = document.createElement('div'),
					body = document.body,
					fakeBody = body || document.createElement('body');

	    if (parseInt(nodes, 10)) {
	        while (nodes--) {
	            node = document.createElement('div');
	            node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
	            div.appendChild(node);
	        }
	    }

	    style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
	    div.id = mod;
	    (body ? div : fakeBody).innerHTML += style;
	    fakeBody.appendChild(div);
	    if (!body) {
	        fakeBody.style.background = '';
	        fakeBody.style.overflow = 'hidden';
	        docOverflow = docElement.style.overflow;
	        docElement.style.overflow = 'hidden';
	        docElement.appendChild(fakeBody);
	    }

	    ret = callback(div, rule);
	    if (!body) {
	        fakeBody.parentNode.removeChild(fakeBody);
	        docElement.style.overflow = docOverflow;
	    } else {
	        div.parentNode.removeChild(div);
	    }

	    return !!ret;

	},



	isEventSupported = (function () {

	    var TAGNAMES = {
	        'select': 'input', 'change': 'input',
	        'submit': 'form', 'reset': 'form',
	        'error': 'img', 'load': 'img', 'abort': 'img'
	    };

	    function isEventSupported(eventName, element) {

	        element = element || document.createElement(TAGNAMES[eventName] || 'div');
	        eventName = 'on' + eventName;

	        var isSupported = eventName in element;

	        if (!isSupported) {
	            if (!element.setAttribute) {
	                element = document.createElement('div');
	            }
	            if (element.setAttribute && element.removeAttribute) {
	                element.setAttribute(eventName, '');
	                isSupported = is(element[eventName], 'function');

	                if (!is(element[eventName], 'undefined')) {
	                    element[eventName] = undefined;
	                }
	                element.removeAttribute(eventName);
	            }
	        }

	        element = null;
	        return isSupported;
	    }
	    return isEventSupported;
	})(),


	_hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
        hasOwnProp = function (object, property) {
            return _hasOwnProperty.call(object, property);
        };
    }
    else {
        hasOwnProp = function (object, property) {
            return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
        };
    }


    if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(that) {

            var target = this;

            if (typeof target != "function") {
                throw new TypeError();
            }

            var args = slice.call(arguments, 1),
				bound = function () {

				    if (this instanceof bound) {

				        var F = function () { };
				        F.prototype = target.prototype;
				        var self = new F();

				        var result = target.apply(
							self,
							args.concat(slice.call(arguments))
						);
				        if (Object(result) === result) {
				            return result;
				        }
				        return self;

				    } else {

				        return target.apply(
							that,
							args.concat(slice.call(arguments))
						);

				    }

				};

            return bound;
        };
    }

    function setCss(str) {
        mStyle.cssText = str;
    }

    function setCssAll(str1, str2) {
        return setCss(prefixes.join(str1 + ';') + (str2 || ''));
    }

    function is(obj, type) {
        return typeof obj === type;
    }

    function contains(str, substr) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps(props, prefixed) {
        for (var i in props) {
            var prop = props[i];
            if (!contains(prop, "-") && mStyle[prop] !== undefined) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps(props, obj, elem) {
        for (var i in props) {
            var item = obj[props[i]];
            if (item !== undefined) {

                if (elem === false) return props[i];

                if (is(item, 'function')) {
                    return item.bind(elem || obj);
                }

                return item;
            }
        }
        return false;
    }

    function testPropsAll(prop, prefixed, elem) {

        var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
			props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        if (is(prefixed, "string") || is(prefixed, "undefined")) {
            return testProps(props, prefixed);

        } else {
            props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
            return testDOMProps(props, prefixed, elem);
        }
    } tests['flexbox'] = function () {
        return testPropsAll('flexWrap');
    }; tests['canvas'] = function () {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function () {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };



    tests['webgl'] = function () {
        return !!window.WebGLRenderingContext;
    };


    tests['touch'] = function () {
        var bool;

        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
            bool = true;
        } else {
            injectElementWithStyles(['@media (', prefixes.join('touch-enabled),('), mod, ')', '{#modernizr{top:9px;position:absolute}}'].join(''), function (node) {
                bool = node.offsetTop === 9;
            });
        }

        return bool;
    };



    tests['geolocation'] = function () {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function () {
        return !!window.postMessage;
    };


    tests['websqldatabase'] = function () {
        return !!window.openDatabase;
    };

    tests['indexedDB'] = function () {
        return !!testPropsAll("indexedDB", window);
    };

    tests['hashchange'] = function () {
        return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    tests['history'] = function () {
        return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function () {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    tests['websockets'] = function () {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    tests['rgba'] = function () {
        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function () {
        setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function () {
        setCss('background:url(https://),url(https://),red url(https://)');

        return (/(url\s*\(.*?){3}/).test(mStyle.background);
    }; tests['backgroundsize'] = function () {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function () {
        return testPropsAll('borderImage');
    };



    tests['borderradius'] = function () {
        return testPropsAll('borderRadius');
    };

    tests['boxshadow'] = function () {
        return testPropsAll('boxShadow');
    };

    tests['textshadow'] = function () {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function () {
        setCssAll('opacity:.55');

        return (/^0.55$/).test(mStyle.opacity);
    };


    tests['cssanimations'] = function () {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function () {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function () {
        var str1 = 'background-image:',
			str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
			str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
						(str1 + '-webkit- '.split(' ').join(str2 + str1) +
						prefixes.join(str3 + str1)).slice(0, -str1.length)
		);

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function () {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function () {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function () {

        var ret = !!testPropsAll('perspective');

        if (ret && 'webkitPerspective' in docElement.style) {

            injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function (node, rule) {
                ret = node.offsetLeft === 9 && node.offsetHeight === 3;
            });
        }
        return ret;
    };


    tests['csstransitions'] = function () {
        return testPropsAll('transition');
    };



    tests['fontface'] = function () {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function (node, rule) {
            var style = document.getElementById('smodernizr'),
				sheet = style.sheet || style.styleSheet,
				cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

            bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };

    tests['generatedcontent'] = function () {
        var bool;

        injectElementWithStyles(['#', mod, '{font:0/0 a}#', mod, ':after{content:"', smile, '";visibility:hidden;font:3px/1 a}'].join(''), function (node) {
            bool = node.offsetHeight >= 3;
        });

        return bool;
    };
    tests['video'] = function () {
        var elem = document.createElement('video'),
			bool = false;

        try {
            if (bool = !!elem.canPlayType) {
                bool = new Boolean(bool);
                bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '');

                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '');
            }

        } catch (e) { }

        return bool;
    };

    tests['audio'] = function () {
        var elem = document.createElement('audio'),
			bool = false;

        try {
            if (bool = !!elem.canPlayType) {
                bool = new Boolean(bool);
                bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
                bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/, '');

                bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
                bool.m4a = (elem.canPlayType('audio/x-m4a;') ||
								elem.canPlayType('audio/aac;')).replace(/^no$/, '');
            }
        } catch (e) { }

        return bool;
    };


    tests['localstorage'] = function () {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch (e) {
            return false;
        }
    };

    tests['sessionstorage'] = function () {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch (e) {
            return false;
        }
    };


    tests['webworkers'] = function () {
        return !!window.Worker;
    };


    tests['applicationcache'] = function () {
        return !!window.applicationCache;
    };


    tests['svg'] = function () {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    tests['inlinesvg'] = function () {
        var div = document.createElement('div');
        div.innerHTML = '<svg/>';
        return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    tests['smil'] = function () {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };


    tests['svgclippaths'] = function () {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    function webforms() {
        Modernizr['input'] = (function (props) {
            for (var i = 0, len = props.length; i < len; i++) {
                attrs[props[i]] = !!(props[i] in inputElem);
            }
            if (attrs.list) {
                attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        Modernizr['inputtypes'] = (function (props) {

            for (var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                if (bool) {

                    inputElem.value = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {

                        docElement.appendChild(inputElem);
                        defaultView = document.defaultView;

                        bool = defaultView.getComputedStyle &&
				defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
																	(inputElem.offsetHeight !== 0);

                        docElement.removeChild(inputElem);

                    } else if (/^(search|tel)$/.test(inputElemType)) {
                    } else if (/^(url|email)$/.test(inputElemType)) {
                        bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                        bool = inputElem.value != smile;
                    }
                }

                inputs[props[i]] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
    }
    for (var feature in tests) {
        if (hasOwnProp(tests, feature)) {
            featureName = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    Modernizr.input || webforms();


    Modernizr.addTest = function (feature, test) {
        if (typeof feature == 'object') {
            for (var key in feature) {
                if (hasOwnProp(feature, key)) {
                    Modernizr.addTest(key, feature[key]);
                }
            }
        } else {

            feature = feature.toLowerCase();

            if (Modernizr[feature] !== undefined) {
                return Modernizr;
            }

            test = typeof test == 'function' ? test() : test;

            if (typeof enableClasses !== "undefined" && enableClasses) {
                docElement.className += ' ' + (test ? '' : 'no-') + feature;
            }
            Modernizr[feature] = test;

        }

        return Modernizr;
    };


    setCss('');
    modElem = inputElem = null;

    ; (function (window, document) {
        var options = window.html5 || {};

        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        var supportsHtml5Styles;

        var expando = '_html5shiv';

        var expanID = 0;

        var expandoData = {};

        var supportsUnknownElements;

        (function () {
            try {
                var a = document.createElement('a');
                a.innerHTML = '<xyz></xyz>';
                supportsHtml5Styles = ('hidden' in a);

                supportsUnknownElements = a.childNodes.length == 1 || (function () {
                    (document.createElement)('a');
                    var frag = document.createDocumentFragment();
                    return (
						typeof frag.cloneNode == 'undefined' ||
						typeof frag.createDocumentFragment == 'undefined' ||
						typeof frag.createElement == 'undefined'
					);
                }());
            } catch (e) {
                supportsHtml5Styles = true;
                supportsUnknownElements = true;
            }

        }()); function addStyleSheet(ownerDocument, cssText) {
            var p = ownerDocument.createElement('p'),
				parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

            p.innerHTML = 'x<style>' + cssText + '</style>';
            return parent.insertBefore(p.lastChild, parent.firstChild);
        }

        function getElements() {
            var elements = html5.elements;
            return typeof elements == 'string' ? elements.split(' ') : elements;
        }

        function getExpandoData(ownerDocument) {
            var data = expandoData[ownerDocument[expando]];
            if (!data) {
                data = {};
                expanID++;
                ownerDocument[expando] = expanID;
                expandoData[expanID] = data;
            }
            return data;
        }

        function createElement(nodeName, ownerDocument, data) {
            if (!ownerDocument) {
                ownerDocument = document;
            }
            if (supportsUnknownElements) {
                return ownerDocument.createElement(nodeName);
            }
            if (!data) {
                data = getExpandoData(ownerDocument);
            }
            var node;

            if (data.cache[nodeName]) {
                node = data.cache[nodeName].cloneNode();
            } else if (saveClones.test(nodeName)) {
                node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
            } else {
                node = data.createElem(nodeName);
            }

            return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;
        }

        function createDocumentFragment(ownerDocument, data) {
            if (!ownerDocument) {
                ownerDocument = document;
            }
            if (supportsUnknownElements) {
                return ownerDocument.createDocumentFragment();
            }
            data = data || getExpandoData(ownerDocument);
            var clone = data.frag.cloneNode(),
				i = 0,
				elems = getElements(),
				l = elems.length;
            for (; i < l; i++) {
                clone.createElement(elems[i]);
            }
            return clone;
        }

        function shivMethods(ownerDocument, data) {
            if (!data.cache) {
                data.cache = {};
                data.createElem = ownerDocument.createElement;
                data.createFrag = ownerDocument.createDocumentFragment;
                data.frag = data.createFrag();
            }


            ownerDocument.createElement = function (nodeName) {
                if (!html5.shivMethods) {
                    return data.createElem(nodeName);
                }
                return createElement(nodeName, ownerDocument, data);
            };

            ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
				'var n=f.cloneNode(),c=n.createElement;' +
				'h.shivMethods&&(' +
						getElements().join().replace(/\w+/g, function (nodeName) {
						    data.createElem(nodeName);
						    data.frag.createElement(nodeName);
						    return 'c("' + nodeName + '")';
						}) +
				');return n}'
			)(html5, data.frag);
        } function shivDocument(ownerDocument) {
            if (!ownerDocument) {
                ownerDocument = document;
            }
            var data = getExpandoData(ownerDocument);

            if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
                data.hasCSS = !!addStyleSheet(ownerDocument,
							'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
							'mark{background:#FF0;color:#000}'
				);
            }
            if (!supportsUnknownElements) {
                shivMethods(ownerDocument, data);
            }
            return ownerDocument;
        } var html5 = {

            'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',

            'shivCSS': (options.shivCSS !== false),

            'supportsUnknownElements': supportsUnknownElements,

            'shivMethods': (options.shivMethods !== false),

            'type': 'default',

            'shivDocument': shivDocument,

            createElement: createElement,

            createDocumentFragment: createDocumentFragment
        }; window.html5 = html5;

        shivDocument(document);

    }(this, document));

    Modernizr._version = version;

    Modernizr._prefixes = prefixes;
    Modernizr._domPrefixes = domPrefixes;
    Modernizr._cssomPrefixes = cssomPrefixes;


    Modernizr.hasEvent = isEventSupported;

    Modernizr.testProp = function (prop) {
        return testProps([prop]);
    };

    Modernizr.testAllProps = testPropsAll;


    Modernizr.testStyles = injectElementWithStyles;
    Modernizr.prefixed = function (prop, obj, elem) {
        if (!obj) {
            return testPropsAll(prop, 'pfx');
        } else {
            return testPropsAll(prop, obj, elem);
        }
    };


    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

													(enableClasses ? ' js ' + classes.join(' ') : '');

    return Modernizr;

})(this, this.document);

/*yepnope1.5.4|WTFPL*/

(function (a, b, c) { function d(a) { return "[object Function]" == o.call(a) } function e(a) { return "string" == typeof a } function f() { } function g(a) { return !a || "loaded" == a || "complete" == a || "uninitialized" == a } function h() { var a = p.shift(); q = 1, a ? a.t ? m(function () { ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1) }, 0) : (a(), h()) : q = 0 } function i(a, c, d, e, f, i, j) { function k(b) { if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) { "img" != a && m(function () { t.removeChild(l) }, 50); for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload() } } var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = { t: d, s: c, e: f, a: i, x: j }; 1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () { k.call(this, r) }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l)) } function j(a, b, c, d, f) { return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this } function k() { var a = B; return a.loader = { load: j, i: 0 }, a } var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) { return "[object Array]" == o.call(a) }, x = [], y = {}, z = { timeout: function (a, b) { return b.length && (a.timeout = b[0]), a } }, A, B; B = function (a) { function b(a) { var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = { url: c, origUrl: c, prefixes: a }, e, f, g; for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g)); for (f = 0; f < b; f++) c = x[f](c); return c } function g(a, e, f, g, h) { var i = b(a), j = i.autoCallback; i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () { k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2 }))) } function h(a, b) { function c(a, c) { if (a) { if (e(a)) c || (j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function () { var b = 0, c; for (c in a) a.hasOwnProperty(c) && b++; return b }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() } : j[n] = function (a) { return function () { var b = [].slice.call(arguments); a && a.apply(this, b), l() } }(k[n])), g(a[n], j, b, n, h)) } else !c && l() } var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n; c(h ? a.yep : a.nope, !!i), i && c(i) } var i, j, l = this.yepnope.loader; if (e(a)) g(a, 0, l, 0); else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l) }, B.addPrefix = function (a, b) { z[a] = b }, B.addFilter = function (a) { x.push(a) }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () { b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) { var k = b.createElement("script"), l, o, e = e || B.errorTimeout; k.src = a; for (o in d) k.setAttribute(o, d[o]); c = j ? h : c || f, k.onreadystatechange = k.onload = function () { !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null) }, m(function () { l || (l = 1, c(1)) }, e), i ? k.onload() : n.parentNode.insertBefore(k, n) }, a.yepnope.injectCss = function (a, c, d, e, g, i) { var e = b.createElement("link"), j, c = i ? h : c || f; e.href = a, e.rel = "stylesheet", e.type = "text/css"; for (j in d) e.setAttribute(j, d[j]); g || (n.parentNode.insertBefore(e, n), m(c, 0)) } })(this, document);
Modernizr.load = function () { yepnope.apply(window, [].slice.call(arguments, 0)); };
;

/**********MODERNIZR END**********/




/**********TEMPLATE MARKUP BEGIN**********/
var MTGOV = {
    pageInitted: false,
    screenMode: '',
    tryFastLoad: function () {
        ++MTGOV.fastLoadAttempts;

        if (!MTGOV.pageInitted && MTGOV.fastLoadAttempts < 500) {
            if (document.getElementById('template-footer') != null)
                MTGOV.initPage();
            else
                window.setTimeout(MTGOV.tryFastLoad, 10);
        }
    },
    onLoad: function () {
        if (!MTGOV.pageInitted)
            MTGOV.initPage();
    },
    windowResize: function () {
        var body = document.body;
        var currentScreenMode = (MTGOV.getWindowWidth() > 768) ? 'desktop' : 'mobile';
        if (currentScreenMode !== MTGOV.screenMode) {
            var className = body.className.replace(" mobile", "").replace("mobile ", "").replace("mobile", "").replace(" desktop", "").replace("desktop ", "").replace("desktop", "");
            var search = document.getElementById("template-search-wrap");
            if ((className.length > 0) && (className.charAt(className.length - 1) !== " ")) { className = className + " "; }
            if (currentScreenMode === 'desktop') {
                className = className + "desktop";
                document.getElementById("template-search").appendChild(search);
            } else if (currentScreenMode === 'mobile') {
                className = className + "mobile";
                document.getElementById("template-header").appendChild(search);
            }
            MTGOV.screenMode = currentScreenMode;
            body.className = className;
            //console.log('screen size set to ' + MTGOV.screenMode);
        }
    },
    getWindowWidth: function () {
        var screenWidth;
        if (window.innerWidth) {
            screenWidth = window.innerWidth;
        }
        else if (document.documentElement && document.documentElement.clientWidth) {
            screenWidth = document.documentElement.clientWidth;
        }
        else if (document.body) {
            screenWidth = document.body.clientWidth;
        }
        return screenWidth;
    },
    addEvent: function (objectRef, eventName, funcRef) {
        if (objectRef.addEventListener)
            objectRef.addEventListener(eventName, funcRef);
        else if (window.attachEvent)
            objectRef.attachEvent("on" + eventName, funcRef);
    },
    fadeIn: function (e, o) {
        if (o == null) {
            e.style.opacity = 0;
            e.style.display = "block";
            MTGOV.fadeIn(e, 0.02);
        } else if (o < 1) {
            e.style.opacity = o;
            o = o + 0.02;
            setTimeout(function () { MTGOV.fadeIn(e, o); }, 1);
        } else {
            e.style.opacity = "";
        }
    },
    fadeOut: function (e, o) {
        if (o == null) {
            e.style.opacity = 1;
            MTGOV.fadeOut(e, 1);
        } else if (o > 0) {
            e.style.opacity = o;
            o = o - 0.02;
            setTimeout(function () { MTGOV.fadeOut(e, o); }, 1);
        } else {
            e.style.opacity = "";
            e.style.display = "none";
        }
    },
    Search: function () {
        var qs = "";
        var wrap = document.getElementById("template-search-wrap");
        for (var i = 0; i < wrap.childNodes.length; i++) {
            if (wrap.childNodes[i].getAttribute("name") != null) {
                qs = qs + "&" + escape(wrap.childNodes[i].getAttribute("name")) + "=" + escape(wrap.childNodes[i].value);
            }
        }
        qs = qs.replace(/&/, '?');
        window.location.href = "https://montana.gov/search.aspx" + qs;
    }
};

MTGOV.initPage = function () {
    //Create #template-header if it doesn't exist.
    var templateHeader = document.getElementById("template-header");
    if (templateHeader == null) {
        templateHeader = document.createElement("header");
        templateHeader.setAttribute("id", "template-header");
        document.body.insertBefore(templateHeader, document.body.firstChild);
    }

    //Create #template-footer it it doesn't exist.
    var templateFooter = document.getElementById("template-footer");
    if (templateFooter == null) {
        templateFooter = document.createElement("footer");
        templateFooter.setAttribute("id", "template-footer");
        document.body.appendChild(templateFooter);
    }

    //HEADER
    var templateHeaderNav = document.createElement("ul");
    templateHeaderNav.setAttribute("id", "template-header-nav");
    if (templateHeader.childNodes.length > 0) {
        templateHeader.insertBefore(templateHeaderNav, templateHeader.firstChild);
    } else {
        templateHeader.appendChild(templateHeaderNav);
    }

    var Services = document.createElement("a");
    Services.setAttribute("href",  "https://directory.mt.gov/online-services");
    Services.innerHTML = "Services";
    var li = document.createElement("li");
    li.appendChild(Services);
    templateHeaderNav.appendChild(li);

    var Agencies = document.createElement("a");
    Agencies.setAttribute("href", "https://mt.gov/govt/agencylisting.aspx");
    Agencies.innerHTML = "Agencies";
    li = document.createElement("li");
    li.appendChild(Agencies);
    templateHeaderNav.appendChild(li);

    var Login = document.createElement("a");
    Login.setAttribute("href", "https://app.mt.gov/epass/epass");
    Login.innerHTML = "Login";
    li = document.createElement("li");
    li.appendChild(Login);
    templateHeaderNav.appendChild(li);

    var templateSearchWrap = document.createElement("div");
    templateSearchWrap.setAttribute("id", "template-search-wrap");
    li = document.createElement("li");
    li.setAttribute("id", "template-search");
    li.appendChild(templateSearchWrap);
    templateHeaderNav.appendChild(li);

    var searchitem = document.createElement("input");
    searchitem.setAttribute("id", "template-search-item");
    searchitem.setAttribute("type", "text");
    //searchitem.setAttribute("value", "SEARCH");
    searchitem.setAttribute("placeholder", "SEARCH MONTANA.GOV");
    searchitem.setAttribute("name", "q");
    searchitem.setAttribute("aria-label", "Search Montana.gov input field");
    MTGOV.addEvent(searchitem, "click", function (evt) {
        if (!evt.target) {
            event.srcElement.value = "";
        } else {
            evt.target.value = "";
        }
    });
    templateSearchWrap.appendChild(searchitem);

    var via = document.createElement("input");
    via.setAttribute("type", "hidden");
    via.setAttribute("value", "homepage");
    via.setAttribute("name", "via");
    templateSearchWrap.appendChild(via);

    var cx = document.createElement("input");
    cx.setAttribute("type", "hidden");
    cx.setAttribute("value", "013380590290877010950:3ubczas3i44");
    cx.setAttribute("name", "cx");
    templateSearchWrap.appendChild(cx);

    var cof = document.createElement("input");
    cof.setAttribute("type", "hidden");
    cof.setAttribute("value", "FORID:11");
    cof.setAttribute("name", "cof");
    templateSearchWrap.appendChild(cof);

    var ie = document.createElement("input");
    ie.setAttribute("type", "hidden");
    ie.setAttribute("value", "UTF-8");
    ie.setAttribute("name", "ie");
    templateSearchWrap.appendChild(ie);

    var q = document.createElement("input");
    q.setAttribute("id", "template-search-button");
    q.setAttribute("type", "image");
    q.setAttribute("alt", "MT.gov Search Button");
    q.setAttribute("aria-label", "MT.gov Search Button");
    q.setAttribute("src", window.templateDomain + "/resources/template/search-icon.png");
    templateSearchWrap.appendChild(q);

    var headerHomeAnchor = document.createElement("a");
    headerHomeAnchor.setAttribute("href", window.mtgovDomain);
    templateHeader.insertBefore(headerHomeAnchor, templateHeader.firstChild);

    var mtlogo = document.createElement("img");
    mtlogo.setAttribute("id", "template-header-logo");
    mtlogo.setAttribute("src", window.templateDomain + "/resources/template/montanalogo.png");
    mtlogo.setAttribute("alt", "MONTANA.GOV logo");
    mtlogo.setAttribute("width", "248");
    mtlogo.setAttribute("height", "48");
    headerHomeAnchor.appendChild(mtlogo);

    templateHeaderNav.appendChild(li);

    //FOOTER
    var footerlink = document.createElement("a");
    footerlink.setAttribute("href", window.mtgovDomain);
    templateFooter.appendChild(footerlink);

    var footerlogo = document.createElement("img");
    footerlogo.setAttribute("id", "template-footer-logo");
    footerlogo.setAttribute("src", window.templateDomain + "/resources/template/montanalogo.png");
    footerlogo.setAttribute("alt", "mt.gov logo");
    footerlogo.setAttribute("width", "248");
    footerlogo.setAttribute("height", "48");
    footerlink.appendChild(footerlogo);

    var footernav = document.createElement("ul");
    footernav.setAttribute("id", "template-footer-nav");
    templateFooter.appendChild(footernav);

    var privacy = document.createElement("a");
    li = document.createElement("li");
    privacy.setAttribute("href", "https://mt.gov/1240-X06.pdf");
    privacy.setAttribute("title", "Privacy & Security Policy");
    privacy.setAttribute("target", "_blank");
    privacy.innerHTML = "Privacy & Security";
    li.appendChild(privacy);
    footernav.appendChild(li);

    var accessibility = document.createElement("a");
    li = document.createElement("li");
    accessibility.setAttribute("href", "https://mt.gov/discover/disclaimer.aspx#accessibility");
    accessibility.setAttribute("title", "Accessibility Information");
    accessibility.innerHTML = "Accessibility";
    li.appendChild(accessibility);
    document.getElementById("template-footer-nav").appendChild(li);


    //background image
    var bgimg = document.createElement("img");
    bgimg.id = "bgImg";
    bgimg.className = "bg";
    bgimg.source = "";
    bgimg.alt = "page background";
    document.getElementById("template-page-wrapper").appendChild(bgimg);

    var bgInfoText = {/*
        "background01": { "Photo": "Absaroka-Beartooth Wilderness", "TakenBy": "Donnie Sexton", "Description": "Birdâ€™s eye view of Absaroka-Beartooth Wilderness", "Location": "Absaroka-Beartooth Wilderness, Montana" },
        "background02": { "Photo": "Sunrise", "TakenBy": "Donnie Sexton", "Description": "Sunrise at Glacier National Park as seen from Highway 2", "Location": "Glacier National Park, Montana" },
        "background03": { "Photo": "Crazy Mountains", "TakenBy": "Donnie Sexton", "Description": "Early spring view of the Crazy Mountains", "Location": "Near Big Timber, Montana" },
        "background04": { "Photo": "Spring Storm", "TakenBy": "Donnie Sexton", "Description": "View along Highway 287", "Location": "North of Wolf Creek, Montana" },
        "background05": { "Photo": "Wildflowers", "TakenBy": "Donnie Sexton", "Description": "Summer color near the shores of Hebgen Lake", "Location": "Hebgen Lake, Montana" },
        "background06": { "Photo": "Spring Rains", "TakenBy": "Donnie Sexton", "Description": "Spring rains near the community of Augusta", "Location": "Augusta, Montana" },
        "background07": { "Photo": "Big Hole National Battlefield", "TakenBy": "Donnie Sexton", "Description": "Big Hole National Battlefield", "Location": "Big Hole National Battlefield, Montana" },
        "background08": { "Photo": "Yellowstone River", "TakenBy": "Donnie Sexton", "Description": "Yellowstone River", "Location": "Paradise Valley, Montana" },
        "background09": { "Photo": "Fall Frost", "TakenBy": "Donnie Sexton", "Description": "Fall colors near the town of Boulder", "Location": "Near Boulder, Montana" },
        "background10": { "Photo": "Fall Foliage", "TakenBy": "Donnie Sexton", "Description": "Fall colors at Hamilton, in the shadow of the Bitterroot Mountains", "Location": "Hamilton, Montana" },
        "background11": { "Photo": "Missouri River", "TakenBy": "Donnie Sexton", "Description": "Sunset on the Missouri River near Bainville", "Location": "Near Bainville, Montana" },
        "background12": { "Photo": "Wild Goose Island", "TakenBy": "Donnie Sexton", "Description": "Wild Goose Island in the middle of St. Mary Lake", "Location": "Glacier National Park, Montana" },
        "background13": { "Photo": "Early Spring, St. Mary Lake in Glacier National Park", "TakenBy": "Donnie Sexton", "Description": "St. Mary Lake and surrounding mountains in Glacier National Park.", "Location": "St. Mary Lake, Glacier National Park" },
        "background14": { "Photo": "Rising Wolf Mountain, Two Medicine region", "TakenBy": "Donnie Sexton", "Description": "Early morning light on Rising Wolf Mountain in the Two Medicine Region of Glacier National Park.", "Location": "Glacier National Park" },
        "background15": { "Photo": "Montana Wheatfields", "TakenBy": "Donnie Sexton", "Description": "Wheatfields of Montana meet with the Rocky Mountain Front.", "Location": "Rocky Mountain Front" },
        "background16": { "Photo": "Big Hole National Battlefield", "TakenBy": "Donnie Sexton", "Description": "North fork of the Big Hole River, beginning of Autumn.", "Location": "North Fork Big Hole River" },
        "background17": { "Photo": "Great Fountain Geyser", "TakenBy": "Donnie Sexton", "Description": "Sunset, Great Fountain Geyser as seen from Firehole Lake Drive", "Location": "Yellowstone National Park" },
        "background18": { "Photo": "Beargrass", "TakenBy": "Donnie Sexton", "Description": "Beargrass in full bloom along the Going-To-The-Sun Highway", "Location": "Glacier National Park" },
        "background19": { "Photo": "Mission Mountains", "TakenBy": "Donnie Sexton", "Description": "Mission Mountains as seen from Highway 93 near Ninepipe National Wildlife Refuge at sunset", "Location": "Mission Valley of Northwest Montana" },
        "background20": { "Photo": "Montana Badlands", "TakenBy": "Donnie Sexton", "Description": "Badlands of eastern Montana as seen from Highway 24", "Location": "East of Fort Peck Lake" },
        "background21": { "Photo": "Madison River Sunrise", "TakenBy": "Donnie Sexton", "Description": "Early morning light on the Madison River in Autumn", "Location": "Outside of West Yellowstone" },
        "background22": { "Photo": "Dupuyer Grainfields", "TakenBy": "John Ansotegui", "Description": "Overcast early spring sky over grainfields with the Rocky Mountain Front", "Location": "Outside of Dupuyer, on Highway 89" },
        "background23": { "Photo": "Thunderbird Mountain", "TakenBy": "Bob Webster", "Description": "A spectacular view of Thunderbird Mountain from Hole In The Wall campground", "Location": "Glacier National Park" },
        "background24": { "Photo": "Spring Flowers", "TakenBy": "Donnie Sexton", "Description": "Early spring, Rocky Mountain Front", "Location": "Near Augusta, MT" },
        "background25": { "Photo": "Madison River Sunrise", "TakenBy": "Donnie Sexton", "Description": "Beautiful spring sunrise on the Madison River", "Location": "Near West Yellowstone" },
        "background26": { "Photo": "Lower Two Medicine Lake", "TakenBy": "Donnie Sexton", "Description": "View of Lower Two Medicine Lake from Looking Glass Highway", "Location": "Glacier National Park" },
        "background27": { "Photo": "Eye of the Needle", "TakenBy": "Donnie Sexton", "Description": "Eye of the Needle, part of the Upper Missouri River Breaks National Monument", "Location": "Along the Missouri River" },
        "background28": { "Photo": "Spring Flowers", "TakenBy": "Donnie Sexton", "Description": "Spring flowers bloom in the Cut Bank Creek region", "Location": "Glacier National Park" },
        "background29": { "Photo": "Montana Capitol Dome", "TakenBy": "Marissa Kozel", "Description": "Montana Capitol Building Dome at night", "Location": "Helena, Montana" },
        //"background30": { "Photo": "Montana Capitol Building", "TakenBy": "Marissa Kozel", "Description": "Montana Capitol Building at night", "Location": "Helena, Montana" },
        "background31": { "Photo": "Blackfeet Indian Reservation", "TakenBy": "Donnie Sexton", "Description": "Teepee on the Blackfeet Indian Reservation", "Location": "Blackfeet Indian Reservation" },
        "background32": { "Photo": "Glacier National Park", "TakenBy": "Bob Webster", "Description": "Hiker with Red backpack enjoying view in Glacier", "Location": "Glacier National Park" },
        "background33": { "Photo": "Bighorn Canyon National Recreation Area", "TakenBy": "Bob Webster", "Description": "Hiker enjoying view of Bighorn Canyon National Recreation Area", "Location": "Bighorn Canyon National Recreation Area" },
        "background34": { "Photo": "Yellowstone National Park - Wyoming", "TakenBy": "Michael Lewis", "Description": "Bison in the mist", "Location": "Yellowstone National Park - Wyoming" },
        "background35": { "Photo": "Sunrise on Lake McDonald with Boats, Glacier National Park, Montana", "TakenBy": "Morey Milbradt", "Description": "Sunrise on Lake McDonald with Boats, Glacier National Park, Montana", "Location": "Glacier National Park" },
        "background36": { "Photo": "Whitefish Lake", "TakenBy": "Donnie Sexton", "Description": "Whitefish Lake", "Location": "Whitefish Lake" },
        "background37": { "Photo": "Missouri River Breaks", "TakenBy": "Tony Bynum", "Description": "Missouri River Breaks", "Location": "Missouri River Breaks" },
        "background38": { "Photo": "Bitter Creek, Montana", "TakenBy": "Tony Bynum", "Description": "Bitter Creek Wilderness, Montana", "Location": "Bitter Creek Wilderness" },
        "background39": { "Photo": "Russell Country Hikers", "TakenBy": "Tony Bynum", "Description": "Russell Country Hikers", "Location": "Russell Country Hikers" },
        "background41": { "Photo": "Reedpoint Dancers", "TakenBy": "Lynn Donaldson", "Description": "Reedpoint Dancers", "Location": "Reedpoint" },
        "background42": { "Photo": "Glacier National Park", "TakenBy": "Donnie Sexton", "Description": "Glacier National Park", "Location": "Glacier National Park" },
        "background43": { "Photo": "Fly Fishing Paradise Valley", "TakenBy": "Tony Bynum", "Description": "Fall Fly Fishing in Paradise Valley", "Location": "Paradise Valley" },
        "background44": { "Photo": "Hyalite Creek near Bozeman", "TakenBy": "Dusan Smetana", "Description": "Fishing Hyalite Creek near Bozeman", "Location": "Hyalite Creek near Bozeman" },
        "background45": { "Photo": "Spring Creek - Paradise Valley", "TakenBy": "Dusan Smetana", "Description": "Fishing Spring Creek - Paradise Valley", "Location": "Paradise Valley" },
        "background46": { "Photo": "Hidden Lake - Glacier National Park", "TakenBy": "Dusan Smetana", "Description": "Hidden Lake in Glacier National Park", "Location": "Glacier National Park" },
        "background47": { "Photo": "Approach to Stoney Indian", "TakenBy": "?", "Description": "East side Approach to Stoney Indian", "Location": "Stoney Indian" },
        "background48": { "Photo": "Glacier Park - Crown Continent", "TakenBy": "?", "Description": "Glacier Park Peaks representing the Crown of the Continent", "Location": "Glacier National Park" },
        "background49": { "Photo": "Badlands near Glendive", "TakenBy": "Chuck Haney", "Description": "Badlands near Glendive", "Location": "Near Glendive" },
        "background50": { "Photo": "Hell Creek Badlands", "TakenBy": "Chuck Haney", "Description": "Hell Creek Badlands", "Location": "Badlands" },
        "background51": { "Photo": "Hot Springs near Chico", "TakenBy": "iStock", "Description": "Hot Springs near Chico", "Location": "Near Chico" },
        "background52": { "Photo": "Autumn in Montana", "TakenBy": "superstock", "Description": "Autumn in Montana", "Location": "unknown" },
        "background53": { "Photo": "Augusta", "TakenBy": "Tony Bynum", "Description": "Reflection in Augusta", "Location": "Augusta" },
        "background54": { "Photo": "Missouri Monument", "TakenBy": "Tony Bynum", "Description": "Missouri Monument", "Location": "Missouri River" },
        "background55": { "Photo": "Cross Country Skiing", "TakenBy": "Tony Bynum", "Description": "Cross Country Skiing in Whitefish", "Location": "Whitefish" },
        */
        //added 2017/2
        "background101": { "Photo": "Glacier Scenic Landscape", "TakenBy": "Donnie Sexton", "Description": "Scenic in Glacier National Park", "Location": "Glacier National Park" },
        "background102": { "Photo": "Aspens", "TakenBy": "Donnie Sexton", "Description": "Aspens, Southwest Montana", "Location": "Southwest Montana" },
        "background103": { "Photo": "Missouri River Breaks", "TakenBy": "Tony Bynum", "Description": "Missouri River Breaks area near the White Cliffs", "Location": "Missouri River Breaks " },
        "background104": { "Photo": "Badlands", "TakenBy": "Donnie Sexton", "Description": "Terry Badlands", "Location": "Southeast Montana" },
        "background105": { "Photo": "National Wild and Scenic Missouri River", "TakenBy": "Donnie Sexton", "Description": "Canoeing", "Location": "Missouri River" },
        "background106": { "Photo": "North Fork Big Hole River", "TakenBy": "Donnie Sexton", "Description": "North Fork Big Hole River", "Location": "Big Hole National Battlefield, Southwest Montana" },
        "background107": { "Photo": "Chief Mountain", "TakenBy": "Bob Webster", "Description": "Chief Mountain, Glacier National Park", "Location": "Glacier National Park" },
        "background108": { "Photo": "Lake McDonald", "TakenBy": "Bob Webster", "Description": "Lake McDonald, Glacier National Park", "Location": "Glacier National Park" },
        "background109": { "Photo": "Scenic near West Yellowstone", "TakenBy": "Donnie Sexton", "Description": "Scenic near West Yellowstone", "Location": "Yellowstone Country" },
        "background110": { "Photo": "Glacier National Park", "TakenBy": "Bob Webster", "Description": "Glacier National Park", "Location": "Glacier National Park" },
        "background111": { "Photo": "Bighorn Canyon National Recreation Area, Southeast Montana", "TakenBy": "Bob Webster", "Description": "Bighorn Canyon National Recreation Area, Southeast Montana", "Location": "Southeast Montana" },
        "background112": { "Photo": "Mary Lake, Glacier National Park", "TakenBy": "Donnie Sexton", "Description": "Glacier National Park", "Location": "Glacier Country" },
        "background113": { "Photo": "Canola fields", "TakenBy": "Donnie Sexton", "Description": "Canola fields along Hwy 89 near Choteau", "Location": "Central Montana" },
        "background114": { "Photo": "Fields", "TakenBy": "Donnie Sexton", "Description": "Fields in Central Montana", "Location": "Central Montana" },
        "background115": { "Photo": "Square Butte", "TakenBy": "Donnie Sexton", "Description": "Square Butte near Great Falls", "Location": "Central Montana" },
        "background116": { "Photo": "Tom Miner Basin", "TakenBy": "Donnie Sexton", "Description": "Tom Miner Basin Yellowstone Country", "Location": "Yellowstone Country" },
        "background117": { "Photo": "Long Lake", "TakenBy": "Donnie Sexton", "Description": "Long Lake, Beartooth Highway – a National Scenic Byways All-American Road", "Location": "Yellowstone Country" },
        "background118": { "Photo": "Sunset", "TakenBy": "Bob Webster", "Description": "Sunset over the Missouri River, near Cascade", "Location": "Central Montana" },
        "background119": { "Photo": "Sunset Teepees", "TakenBy": "Bob Webster", "Description": "North American Indian Days 2016", "Location": "Browning, Glacier Country" },
        "background120": { "Photo": "Teepees,", "TakenBy": "Bob Webster", "Description": "North American Indian Days 2016", "Location": "Browning, Glacier Country" }
    };

    //This script needs to go back to displaying at random. Put all of these in each season in the interest of time.
    //var winter = ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"];
    //var spring = ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"];
    //var summer = ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"];
    //var autumn = ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"];
    var currentBGs = ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"];
    //var autumn = ["31", "32", "33", "34", "35", "36", "38", "39", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55"]; //- old set 

    //var month = new Date().getMonth() + 1;
    //if ((month > 0) && (month <= 3)) {
    //    bgName = getImg(winter);
    //} else if ((month >= 4) && (month <= 6)) {
    //    bgName = getImg(spring);
    //} else if ((month >= 7) && (month <= 9)) {
    //    bgName = getImg(summer);
    //} else if ((month >= 10) && (month <= 12)) {
    //    bgName = getImg(autumn);
    //}
    bgName = getImg(currentBGs);
    //console.log('bgName = "' + bgName + '"');

    var Photo = "n/a";
    var TakenBy = "n/a";
    var Description = "n/a";
    var Location = "n/a";
    var backgroundURL = '';
    var bodyClass = 'bgCenter';

    var bgTopImgs = { "background106": "1", "background107": "1", "background109": "1", "background111": "1", "background120": "1" };
    var bgBottomImgs = { "background102": "1", "background105": "1", "background112": "1", "background113": "1", "background114": "1", "background115": "1" };

    
    if (bgTopImgs[bgName]) {
        bodyClass = 'bgTop';
        //console.log('bgTop');
    }
    if (bgBottomImgs[bgName]) {
        bodyClass = 'bgBottom';
        //console.log('bgBottom');
    }

    if (bgInfoText[bgName]) {
        Photo = bgInfoText[bgName].Photo;
        TakenBy = bgInfoText[bgName].TakenBy;
        Description = bgInfoText[bgName].Description;
        Location = bgInfoText[bgName].Location;
    }

    //SET BACKGROUND IMAGE
    if (document.body.clientWidth < 768) {
        backgroundURL = window.templateDomain + '/resources/template/images/' + bgName + '_mobile.jpg';
        //document.getElementById("bgImg").setAttribute("src", backgroundURL);
    } else {
        backgroundURL = window.templateDomain + '/resources/template/images/' + bgName + '.jpg';
       // document.getElementById("bgImg").setAttribute("src", backgroundURL);
    }

    //disable local IMG and move background to body
    document.getElementById("bgImg").style.display = "none";
    var documentBody = document.getElementsByTagName('body')[0];
    documentBody.style.backgroundImage = 'url(' + backgroundURL + ')';
    documentBody.className += " " + bodyClass;

    //These spans only exist on the mt.gov homepage.
    try {
        document.getElementById("mtgov-info-photo").innerHTML = Photo;
        document.getElementById("mtgov-info-takenby").innerHTML = TakenBy;
        document.getElementById("mtgov-info-description").innerHTML = Description;
        document.getElementById("mtgov-info-location").innerHTML = Location;
    }
    catch (err) {
    }

    //sticky footer code

    //1)Create a template-layout-wrapper div
    var templateLayoutWrapper = document.createElement("div");
    templateLayoutWrapper.setAttribute("id", "template-layout-wrapper");
    //2)Create a template-layout-push div
    var templateLayoutPush = document.createElement("div");
    templateLayoutPush.setAttribute("id", "template-layout-push");
    //3)Grab the template-page-wrapper div and remove it from the DOM.
    var templatePageWrapper = document.getElementById("template-page-wrapper");
    templatePageWrapper.parentNode.removeChild(templatePageWrapper);
    //4)Remove the template-header div from the DOM.
    templateHeader.parentNode.removeChild(templateHeader);
    //5)Append the template header to the new template-layout-wrapper div
    templateLayoutWrapper.appendChild(templateHeader);
    //6)Append the template-page-wrapper to the template-layout-wrapper div
    templateLayoutWrapper.appendChild(templatePageWrapper);
    //7)Append the template-layout-push div to the template-layout-wrapper div
    templateLayoutWrapper.appendChild(templateLayoutPush);

    //This is for DNN! It works both ways now.
    if (document.getElementById("Form") != null) {
        document.getElementById("Form").insertBefore(templateLayoutWrapper, document.getElementById("Form").firstChild);
    } else {
        document.body.insertBefore(templateLayoutWrapper, document.body.firstChild);
    }

    //DNN Template Fix
    var body = document.getElementsByTagName("body")[0];
    var layoutwrapper = document.getElementById("template-layout-wrapper");
    var footerwrapper = document.getElementById("template-footer-wrapper");
    var dnnform = document.getElementById("Form");
    var dnncontent = document.getElementById("pagecontent-wrapper");
    var dnncontentparent;
    if (dnncontent != null)
        dnncontentparent = dnncontent.parentNode;

    if ((dnnform != null) && (dnncontent != null)) {
        body.appendChild(layoutwrapper);
        body.appendChild(footerwrapper);
        dnnform.appendChild(dnncontent);
        dnncontentparent.appendChild(dnnform);
    }

    //Amber Alert Header
    // Adding the script tag to the head
    window.amberAlertExists = 0; // create global alert variable
    window.amberAlertItems = []; // create global alert array

    var AlertScriptUrl = window.templateDomain + '/resources/template/amberalert.js?_=' + (new Date).getTime();
    var currentHead = document.getElementsByTagName('head')[0];
    var AlertScriptElement = document.createElement('script');
    AlertScriptElement.type = 'text/javascript';
    AlertScriptElement.src = AlertScriptUrl;
    currentHead.appendChild(AlertScriptElement);

    MTGOV.pageInitted = true;
    MTGOV.windowResize();
    MTGOV.addEvent(document.getElementById("template-search-item"), "keypress", function (evt) {
        var keycode;
        if (evt.charCode) {
            keycode = evt.charCode;
        } else if (evt.keyCode) {
            keycode = evt.keyCode;
        }
        if (keycode == 13) {
            MTGOV.Search();
        }
    });
    MTGOV.addEvent(document.getElementById("template-search-button"), "click", function () {
        MTGOV.Search();
    });

    //write the alert banner
    //writeAlertBanner();
}

var IEversion = ""
function writeAmberData() {
    if (amberAlertExists === 1 && amberAlertItems.length > 0) {
        //If IE < 9 set up TRIM as a function and get IE version

        if (typeof String.prototype.trim !== 'function') {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            }
            var myNav = navigator.userAgent.toLowerCase();
            IEversion = (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
        }

        var amberDiv = document.createElement('div');
        amberDiv.id = 'template-AmberAlertHead';

        var newContent = '<div id="template-amberAlertGroup" class="template-amberAlertGroup">';
        for (i = 0 ; i < amberAlertItems.length ; i++) {
            newContent += '<div class="template-amberAlertItem"><label>AMBER Alert:&nbsp;&nbsp;</label> <a href="' + amberAlertItems[i]['link'] + '" target="_blank">' + amberAlertItems[i]['title'].replace('AMBER Alert:', '').trim() + '</a></div>';
        }
        newContent += '</div>';

        var currentBody = document.getElementsByTagName('body')[0];
        currentBody.insertBefore(amberDiv, currentBody.firstChild);

        document.getElementById('template-AmberAlertHead').innerHTML = newContent;
        document.getElementById('template-AmberAlertHead').style.height = (amberAlertItems.length * 48) + "px";

        resizeAmberData();
        window.addEventListener("resize", resizeAmberData);
    }
}

function resizeAmberData() {
    if (amberAlertExists === 1 && amberAlertItems.length > 0) {
        var currentBody = document.getElementsByTagName('body')[0];

        if (window.innerWidth > 768) {
            currentBody.style.marginTop = (amberAlertItems.length * 48) + "px";
        } else {
            currentBody.style.marginTop = "0px";
            document.getElementById('template-AmberAlertHead').style.backgroundImage = "none";
        }

        var currentHeader = document.getElementById('template-header');
        if (currentHeader) {
            currentHeader.style.top = (amberAlertItems.length * 48) + "px";
        }

        if (currentHeader.getElementsByTagName("nav")[0] && (!IEversion || IEversion > 7)) {
            var navTop = currentHeader.getElementsByTagName("nav")[0].style.top;
            currentHeader.getElementsByTagName("nav")[0].style.top = ((amberAlertItems.length * 48) + 64) + "px";
        }

        if (IEversion && (IEversion === 7 || IEversion === 8)) {
            document.getElementById('template-AmberAlertHead').style.background = "#8b0000 url('https://template.mt.gov/resources/template/images/MK_amberAlert_32.png') center right no-repeat";
        }
    }
}


function writeAlertBanner() {
    //If IE < 9 set up TRIM as a function and get IE version
    if (typeof String.prototype.trim !== 'function') {
        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
        }
        var myNav = navigator.userAgent.toLowerCase();
        IEversion = (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }

    var amberDiv = document.createElement('div');
    amberDiv.id = 'template-BOXAmberAlertHead';

    var newContent = '<div id="template-BOXamberAlertGroup" class="template-BOXamberAlertGroup">';
    newContent += '<div class="template-BOXamberAlertItem" style="BACKGROUND-COLOR:#C60; height: 64px;padding: 5px 0;">The national CenturyLink outages are impacting internet and phone services for the State of Montana. We are aware of the issues and working with CenturyLink to get them resolved. Thank you for your patience.</div>';
    newContent += '</div>';

    var currentBody = document.getElementsByTagName('body')[0];
    currentBody.insertBefore(amberDiv, currentBody.firstChild);

    document.getElementById('template-BOXAmberAlertHead').innerHTML = newContent;
    document.getElementById('template-BOXAmberAlertHead').style.height = (64) + "px";

    resizeAlertBanner();
    window.addEventListener("resize", resizeAlertBanner);

}

function resizeAlertBanner() {
    var currentBody = document.getElementsByTagName('body')[0];

    if (window.innerWidth > 768) {
        currentBody.style.marginTop = (64) + "px";
    } else {
        currentBody.style.marginTop = "0px";
        document.getElementById('template-BOXAmberAlertHead').style.backgroundImage = "none";
    }

    var currentHeader = document.getElementById('template-header');
    if (currentHeader) {
        currentHeader.style.top = (64) + "px";
    }

    if (currentHeader.getElementsByTagName("nav")[0] && (!IEversion || IEversion > 7)) {
        var navTop = currentHeader.getElementsByTagName("nav")[0].style.top;
        currentHeader.getElementsByTagName("nav")[0].style.top = ((64) + 64) + "px";
    }
}

function testAmberAlert() {
    amberAlertExists = 1;
    amberAlertItems.push({
        link: 'Amber_link',
        title: 'TEST, MT'
    });
    writeAmberData();
}

window.setTimeout(MTGOV.tryFastLoad, 10);

MTGOV.addEvent(window, "resize", function () { MTGOV.windowResize(); });
MTGOV.addEvent(window, "load", function () { MTGOV.onLoad(); });

/**********TEMPLATE MARKUP END**********/

/**********BACKGROUND SWITCHER BEGIN**********/
function getImg(arr) {
    return "background" + arr[Math.floor(Math.random() * arr.length)];
}
/**********BACKGROUND SWITCHER END**********/


/**********MOBILE SEARCH END**********/


var advancedSearch = {
    defaultcx: undefined,
    searchFilters: [],
    gcsEle: undefined,
    setSearchFilters: function (ssf) {
        var sf = this.searchFilters;
        var defaultgcs = { "id": "MONTANA.GOV", "gcs": this.defaultcx };
        sf.push(defaultgcs);
        for (var i = 0; i < ssf.length; i++) {
            sf.push(ssf[i]);
        }
    },
    getSearchFilters: function () {
        return this.searchFilters;
    },
    init: function (sf) {
        if (document.getElementById("template-search-wrap") == null) {
            setTimeout(function () { advancedSearch.init(sf); }, 10);
            return;
        }
        for (var i = 0; i < document.getElementById("template-search-wrap").childNodes.length; i++) {
            var ele = document.getElementById("template-search-wrap").childNodes[i];
            if (ele.name == "cx") {
                this.gcsEle = ele;
            }
        }
        this.defaultcx = this.gcsEle.value;
        this.setSearchFilters(sf);

        var searchwrap = document.getElementById("template-search-wrap");
        var advs = document.createElement("input");
        advs.setAttribute("name", "advs");
        advs.setAttribute("type", "hidden");
        advs.setAttribute("value", "MONTANA.GOV");
        searchwrap.appendChild(advs);

        var searchbutton = document.getElementById("template-search-button");
        var searchitem = document.getElementById("template-search-item");
        searchbutton.className = searchbutton.className + " advancedsearch";
        searchitem.className = searchitem.className + " advancedsearch";

        var searchadvanced = document.createElement("div");
        searchadvanced.setAttribute("id", "template-search-advanced");
        var searchfilter = document.createElement("h1");
        searchfilter.innerHTML = "Search filter:";
        searchadvanced.appendChild(searchfilter);
        searchwrap.appendChild(searchadvanced);

        for (var i = 0; i < this.getSearchFilters().length; i++) {
            var e = this.getSearchFilters()[i];
            var span = document.createElement("span");
            span.innerHTML = e.id;
            span.setAttribute("data-gcs", e.gcs);
            searchadvanced.appendChild(span);
        }

        for (var i = 0; i < searchadvanced.childNodes.length; i++) {
            if (searchadvanced.childNodes[i].getAttribute("data-gcs") == advancedSearch.defaultcx) {
                searchadvanced.childNodes[i].style.backgroundColor = "#CCCCCC";
            }
            MTGOV.addEvent(searchadvanced.childNodes[i], "click", function (evt) {
                var t;
                if (!evt.target) {
                    t = event.srcElement;
                } else {
                    t = evt.target;
                }
                if (t.tagName != "H1") {
                    for (var i = 0; i < searchadvanced.childNodes.length; i++) {
                        if (searchadvanced.childNodes[i] != t) {
                            searchadvanced.childNodes[i].style.backgroundColor = "";
                        } else {
                            searchadvanced.childNodes[i].style.backgroundColor = "#CCCCCC";
                        }
                    }
                    advancedSearch.gcsEle.value = t.getAttribute("data-gcs");
                    for (var i = 0; i < searchwrap.childNodes.length; i++) {
                        if (searchwrap.childNodes[i].name == "advs") {
                            searchwrap.childNodes[i].value = t.innerHTML;
                        }
                    }
                }
            });
        }

        var advancedbtn = document.createElement("span");
        advancedbtn.setAttribute("id", "template-search-advancedbtn");
        advancedbtn.setAttribute("title", "Search Options");
        advancedbtn.innerHTML = '&#9660;';
        searchwrap.appendChild(advancedbtn);

        MTGOV.addEvent(document.getElementById("template-search-advancedbtn"), "click", function () {
            var e = document.getElementById("template-search-advanced");
            var src = document.getElementById("template-search-advancedbtn");
            var ltie9 = (document.getElementsByTagName("html")[0].className.split("lt-ie9").length == 2) ? true : false;

            if (src.innerHTML == String.fromCharCode(9660)) {
                src.innerHTML = String.fromCharCode(9650);
                if (ltie9) {
                    e.style.display = "block";
                } else {
                    MTGOV.fadeIn(e);
                }
            } else {
                src.innerHTML = String.fromCharCode(9660);
                if (ltie9) {
                    e.style.display = "none";
                } else {
                    MTGOV.fadeOut(e);
                }
            }
        });
    }
};