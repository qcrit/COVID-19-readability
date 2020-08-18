! function(e) {
    function __webpack_require__(n) {
        if (t[n]) return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, __webpack_require__), a.l = !0, a.exports
    }
    var t = {};
    __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    }, __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 32)
}([, , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(9);
    t.default = a
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, , , function(e, t, n) {
    (function(t) {
        function getValue(e, t) {
            return null == e ? void 0 : e[t]
        }

        function isHostObject(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "")
            } catch (e) {}
            return t
        }

        function Hash(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var a = e[t];
                this.set(a[0], a[1])
            }
        }

        function hashClear() {
            this.__data__ = w ? w(null) : {}
        }

        function hashDelete(e) {
            return this.has(e) && delete this.__data__[e]
        }

        function hashGet(e) {
            var t = this.__data__;
            if (w) {
                var n = t[e];
                return n === a ? void 0 : n
            }
            return v.call(t, e) ? t[e] : void 0
        }

        function hashHas(e) {
            var t = this.__data__;
            return w ? void 0 !== t[e] : v.call(t, e)
        }

        function hashSet(e, t) {
            return this.__data__[e] = w && void 0 === t ? a : t, this
        }

        function ListCache(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var a = e[t];
                this.set(a[0], a[1])
            }
        }

        function listCacheClear() {
            this.__data__ = []
        }

        function listCacheDelete(e) {
            var t = this.__data__,
                n = assocIndexOf(t, e);
            return !(n < 0) && (n == t.length - 1 ? t.pop() : _.call(t, n, 1), !0)
        }

        function listCacheGet(e) {
            var t = this.__data__,
                n = assocIndexOf(t, e);
            return n < 0 ? void 0 : t[n][1]
        }

        function listCacheHas(e) {
            return assocIndexOf(this.__data__, e) > -1
        }

        function listCacheSet(e, t) {
            var n = this.__data__,
                a = assocIndexOf(n, e);
            return a < 0 ? n.push([e, t]) : n[a][1] = t, this
        }

        function MapCache(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var a = e[t];
                this.set(a[0], a[1])
            }
        }

        function mapCacheClear() {
            this.__data__ = {
                hash: new Hash,
                map: new(S || ListCache),
                string: new Hash
            }
        }

        function mapCacheDelete(e) {
            return getMapData(this, e).delete(e)
        }

        function mapCacheGet(e) {
            return getMapData(this, e).get(e)
        }

        function mapCacheHas(e) {
            return getMapData(this, e).has(e)
        }

        function mapCacheSet(e, t) {
            return getMapData(this, e).set(e, t), this
        }

        function assocIndexOf(e, t) {
            for (var n = e.length; n--;)
                if (eq(e[n][0], t)) return n;
            return -1
        }

        function baseIsNative(e) {
            return !(!isObject(e) || isMasked(e)) && (isFunction(e) || isHostObject(e) ? b : s).test(toSource(e))
        }

        function getMapData(e, t) {
            var n = e.__data__;
            return isKeyable(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }

        function getNative(e, t) {
            var n = getValue(e, t);
            return baseIsNative(n) ? n : void 0
        }

        function isKeyable(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }

        function isMasked(e) {
            return !!f && f in e
        }

        function toSource(e) {
            if (null != e) {
                try {
                    return m.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }

        function memoize(e, t) {
            if ("function" != typeof e || t && "function" != typeof t) throw new TypeError(n);
            var a = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = a.cache;
                if (o.has(i)) return o.get(i);
                var r = e.apply(this, n);
                return a.cache = o.set(i, r), r
            };
            return a.cache = new(memoize.Cache || MapCache), a
        }

        function eq(e, t) {
            return e === t || e !== e && t !== t
        }

        function isFunction(e) {
            var t = isObject(e) ? y.call(e) : "";
            return t == i || t == o
        }

        function isObject(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }
        var n = "Expected a function",
            a = "__lodash_hash_undefined__",
            i = "[object Function]",
            o = "[object GeneratorFunction]",
            r = /[\\^$.*+?()[\]{}|]/g,
            s = /^\[object .+?Constructor\]$/,
            c = "object" == typeof t && t && t.Object === Object && t,
            l = "object" == typeof self && self && self.Object === Object && self,
            u = c || l || Function("return this")(),
            d = Array.prototype,
            h = Function.prototype,
            g = Object.prototype,
            p = u["__core-js_shared__"],
            f = function() {
                var e = /[^.]+$/.exec(p && p.keys && p.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }(),
            m = h.toString,
            v = g.hasOwnProperty,
            y = g.toString,
            b = RegExp("^" + m.call(v).replace(r, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            _ = d.splice,
            S = getNative(u, "Map"),
            w = getNative(Object, "create");
        Hash.prototype.clear = hashClear, Hash.prototype.delete = hashDelete, Hash.prototype.get = hashGet, Hash.prototype.has = hashHas, Hash.prototype.set = hashSet, ListCache.prototype.clear = listCacheClear, ListCache.prototype.delete = listCacheDelete, ListCache.prototype.get = listCacheGet, ListCache.prototype.has = listCacheHas, ListCache.prototype.set = listCacheSet, MapCache.prototype.clear = mapCacheClear, MapCache.prototype.delete = mapCacheDelete, MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet, memoize.Cache = MapCache, e.exports = memoize
    }).call(t, n(6))
}, , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(13),
        i = n(19),
        o = function() {
            function GoogleAnalyticsManager() {
                var e = this;
                this.defaultStagingAccountId = "UA-70385343-1", this.defaultProductionAccountId = "UA-3724630-2", this.initialized = !1, this.trackers = [], this.accountID = void 0, this.eventCallback = void 0, this.eventQueue = [], this.sendEvent = function(t, n, a, i, o, r) {
                    console.log(GoogleAnalyticsManager.instance.trackers), e.initialized ? (r ? ga(r + ".send", "event", t, n, a, i) : e.trackers.forEach(function(e) {
                        return ga(e.name + ".send", "event", t, n, a, i)
                    }), null != e.eventCallback && e.eventCallback(t, n, a, i, o, r)) : e.eventQueue.push({
                        fn: e.sendEvent,
                        args: [t, n, a, i, o, r]
                    })
                }, this.attachEventScriptsToAnchors()
            }
            return Object.defineProperty(GoogleAnalyticsManager, "instance", {
                get: function() {
                    return void 0 === this._instance && (this._instance = new GoogleAnalyticsManager), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), GoogleAnalyticsManager.prototype.initializeGoogleAnalytics = function() {
                ! function(e, t, n, a, i) {
                    var o, r;
                    e.GoogleAnalyticsObject = "ga", e.ga = e.ga || function() {
                        (e.ga.q = e.ga.q || []).push(arguments)
                    }, e.ga.l = (new Date).valueOf(), o = t.createElement("script"), r = t.getElementsByTagName("script")[0], o.async = !0, o.src = "https://www.google-analytics.com/analytics.js", r.parentNode.insertBefore(o, r)
                }(window, document), this.createTrackersAndSendPageview(), this.eventQueue.forEach(function(e) {
                    return e.fn.apply(e, e.args)
                }), this.eventQueue = [], this.initialized = !0
            }, GoogleAnalyticsManager.prototype.createTrackersAndSendPageview = function() {
                for (var e = 0, t = this.trackers; e < t.length; e++) {
                    var n = t[e];
                    ga("create", n.id, "auto", n.name), ga(n.name + ".send", "pageview")
                }
            }, GoogleAnalyticsManager.prototype.attachEventScript = function(e, t, n) {
                var a = this;
                "true" != e.dataset.orAnalyticsEventAttached && (e.addEventListener("click", function() {
                    a.sendEvent(t, n), console.log("SENDING EVENT")
                }), e.dataset.orAnalyticsEventAttached = !0)
            }, GoogleAnalyticsManager.prototype.linkIsDocument = function(e) {
                return (e.pathname + e.search).match(/\.(?:doc|dot|docx|dotx|eps|jpg|png|svg|xls|xlt|xlsx|xlst|ppt|pps|pptx|ppsx|pot|potx|pdf|xls|zip|txt|vsd|vxd|js|css|rar|exe|wma|mov|avi|wmv|mpg|mpeg|mp3)($|\&|\?)/i)
            }, GoogleAnalyticsManager.prototype.attachEvents = function(e) {
                var t = (e.protocol, e.hostname),
                    n = location.hostname,
                    a = e.id,
                    i = e.href;
                "whoson_chat_link" != a && "serfflink" != a && ("mailto:" == t ? this.attachEventScript(e, "Mailto Links", i) : t && t != n ? this.attachEventScript(e, "Outbound Links", i) : this.linkIsDocument(e) && this.attachEventScript(e, "Document Links", i))
            }, GoogleAnalyticsManager.prototype.attachEventScriptsToAnchors = function() {
                var e = this;
                i.onAnchorCreated.push(function(t) {
                    e.attachEvents(t)
                })
            }, GoogleAnalyticsManager.prototype.initialize = function() {
                var e = this;
                a.getTemplateSettings().then(function(t) {
                    var n = e.accountID;
                    void 0 === n && (n = oregon.sharePoint.templateV4x.staging ? e.defaultStagingAccountId : e.defaultProductionAccountId), e.trackers.push({
                        id: n,
                        name: "default"
                    }), t.customGoogleAnalyticsId && e.trackers.push({
                        id: t.customGoogleAnalyticsId,
                        name: "site"
                    }), e.initializeGoogleAnalytics()
                })
            }, GoogleAnalyticsManager
        }();
    t.GoogleAnalyticsManager = o
}, function(e, t, n) {
    "use strict";

    function getTemplateSettings() {
        return new Promise(function(e, t) {
            oregon.sharePoint.context.getSpPageContextInfo().then(function(t) {
                var n = t.siteServerRelativeUrl,
                    a = "oregon-sharepoint-templatev4x-template-settings-" + n;
                sessionStorage[a] ? e(JSON.parse(sessionStorage[a])) : fetch(n + ("/" == n.charAt(n.length - 1) ? "" : "/") + "_vti_bin/OID.SharePoint.StarterTemplate/templatesettings.svc/compiled", {
                    credentials: "include"
                }).then(function(e) {
                    return e.json()
                }).then(function(t) {
                    sessionStorage[a] = JSON.stringify(t), e(t)
                })
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getTemplateSettings = getTemplateSettings, window.getTemplateSettings = getTemplateSettings
}, , , , , , function(e, t, n) {
    "use strict";

    function getBodyElement() {
        return new Promise(function(e) {
            oregon.sharePoint.templateV4x.bodyElementCreated = function() {
                e(document.body)
            }
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.onBodyElementCreated = [], t.onElementCreated = [], t.onAnchorCreated = [], t.onWebPartDivCreated = [], window.getBodyElement = getBodyElement, t.onElementCreated.push(function(e) {
        if (e instanceof HTMLElement) {
            var n = e;
            if ("a" == n.tagName.toLowerCase())
                for (var a = 0, i = t.onAnchorCreated; a < i.length; a++) {
                    var o = i[a];
                    o(n)
                } else {
                    n.querySelectorAll("a").forEach(function(e) {
                        for (var n = 0, a = t.onAnchorCreated; n < a.length; n++) {
                            (0, a[n])(e)
                        }
                    })
                }
        }
    }), getBodyElement().then(function(e) {
        new MutationObserver(function(e) {
            for (var n = 0, a = e; n < a.length; n++)
                for (var i = a[n], o = 0; o < i.addedNodes.length; o++)
                    for (var r = i.addedNodes[o], s = 0, c = t.onElementCreated; s < c.length; s++) {
                        var l = c[s];
                        l(r)
                    }
        }).observe(e, {
            childList: !0,
            subtree: !0
        })
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function GoogleTranslateManager() {
            this.enabled = !0, this.elementID = "google_translate_element", this.callbackFunctionAsString = "oregon.sharePoint.templateV4x.googleTranslate.callback", this.googleTranslateCallback = function() {
                new google.translate.TranslateElement({
                    pageLanguage: "en",
                    autoDisplay: !1
                }, this.elementID)
            }
        }
        return Object.defineProperty(GoogleTranslateManager, "instance", {
            get: function() {
                return this._instance || (this._instance = new GoogleTranslateManager), this._instance
            },
            enumerable: !0,
            configurable: !0
        }), GoogleTranslateManager.prototype.initialize = function() {
            this.enabled && $("body").append($('<script async defer type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=' + this.callbackFunctionAsString + '"><\/script>'))
        }, GoogleTranslateManager.prototype.callback = function() {
            GoogleTranslateManager.instance.googleTranslateCallback()
        }, GoogleTranslateManager
    }();
    t.GoogleTranslateManager = a
}, function(e, t, n) {
    var a, i;
    ! function(o) {
        var r = !1;
        if (a = o, void 0 !== (i = "function" == typeof a ? a.call(t, n, t, e) : a) && (e.exports = i), r = !0, e.exports = o(), r = !0, !r) {
            var s = window.Cookies,
                c = window.Cookies = o();
            c.noConflict = function() {
                return window.Cookies = s, c
            }
        }
    }(function() {
        function extend() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var a in n) t[a] = n[a]
            }
            return t
        }

        function init(e) {
            function api(t, n, a) {
                var i;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (a = extend({
                                path: "/"
                            }, api.defaults, a), "number" == typeof a.expires) {
                            var o = new Date;
                            o.setMilliseconds(o.getMilliseconds() + 864e5 * a.expires), a.expires = o
                        }
                        a.expires = a.expires ? a.expires.toUTCString() : "";
                        try {
                            i = JSON.stringify(n), /^[\{\[]/.test(i) && (n = i)
                        } catch (e) {}
                        n = e.write ? e.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape);
                        var r = "";
                        for (var s in a) a[s] && (r += "; " + s, !0 !== a[s] && (r += "=" + a[s]));
                        return document.cookie = t + "=" + n + r
                    }
                    t || (i = {});
                    for (var c = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, u = 0; u < c.length; u++) {
                        var d = c[u].split("="),
                            h = d.slice(1).join("=");
                        this.json || '"' !== h.charAt(0) || (h = h.slice(1, -1));
                        try {
                            var g = d[0].replace(l, decodeURIComponent);
                            if (h = e.read ? e.read(h, g) : e(h, g) || h.replace(l, decodeURIComponent), this.json) try {
                                h = JSON.parse(h)
                            } catch (e) {}
                            if (t === g) {
                                i = h;
                                break
                            }
                            t || (i[g] = h)
                        } catch (e) {}
                    }
                    return i
                }
            }
            return api.set = api, api.get = function(e) {
                return api.call(api, e)
            }, api.getJSON = function() {
                return api.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, api.defaults = {}, api.remove = function(e, t) {
                api(e, "", extend(t, {
                    expires: -1
                }))
            }, api.withConverter = init, api
        }
        return init(function() {})
    })
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n(33);
    var a = n(34),
        i = n(35),
        o = n(12);
    window.getSpPageContextInfo = function() {
        return b.sendDeprecatedUseEvent("window.getSpPageContextInfo"), oregon.sharePoint.context.getSpPageContextInfo.apply(this, arguments)
    };
    var r = o.GoogleAnalyticsManager.instance,
        s = n(36),
        c = n(37),
        l = n(38),
        u = n(39),
        d = n(40),
        h = n(42),
        g = n(44),
        p = n(45),
        f = n(46),
        m = n(47),
        v = n(48),
        y = n(20),
        b = n(49);
    Object.defineProperty(oregon, "siteCollectionUrl", {
        get: function() {
            return console.warn("oregon.siteCollectionUrl is deprecated. Please use oregon.sharePoint.context.getSiteServerRelativeUrl().then( <<callback>> )"), b.sendDeprecatedUseEvent("oregon.siteCollectionUrl"), _spPageContextInfo.siteServerRelativeUrl
        }
    }), Object.defineProperty(oregon, "anonymous", {
        get: function() {
            return console.warn("oregon.anonymous is deprecated. Please use oregon.sharePoint.context.anonymous"), b.sendDeprecatedUseEvent("oregon.anonymous"), oregon.sharePoint.context.anonymous
        }
    }), Object.defineProperty(oregon, "staging", {
        get: function() {
            return console.warn("oregon.staging is deprecated. Please use oregon.sharePoint.templateV4x.staging"), b.sendDeprecatedUseEvent("oregon.staging"), oregon.sharePoint.templateV4x.staging
        }
    }), Object.defineProperty(oregon.sharePoint, "getListItems", {
        get: function() {
            return console.warn("oregon.sharePoint.getListItems is deprecated. Please use oregon.sharePoint.soap.listsClient.getListItems(webUrl: string, listName: string, viewId: string).then( <<callback>> )"), b.sendDeprecatedUseEvent("oregon.sharePoint.getListItems"), s.getListItems
        }
    }), Object.defineProperty(oregon.sharePoint, "forEachListItem", {
        get: function() {
            return console.warn("oregon.sharePoint.forEachListItem is deprecated."), b.sendDeprecatedUseEvent("oregon.sharePoint.forEachListItem"), c.forEachListItem
        }
    });
    var _ = {get accountID() {
            return console.warn("oregon.analytics object has been deprecated, use oregon.sharePoint.templateV4x.analytics instead."), b.sendDeprecatedUseEvent("oregon.analytics.accountID"), o.GoogleAnalyticsManager.instance.accountID
        },
        set accountID(e) {
            console.warn("oregon.analytics object has been deprecated, use oregon.sharePoint.templateV4x.analytics instead."), o.GoogleAnalyticsManager.instance.accountID = e
        },
        get eventCallback() {
            return console.warn("oregon.analytics object has been deprecated, use oregon.sharePoint.templateV4x.analytics instead."), o.GoogleAnalyticsManager.instance.eventCallback
        },
        set eventCallback(e) {
            console.warn("oregon.analytics object has been deprecated, use oregon.sharePoint.templateV4x.analytics instead."), o.GoogleAnalyticsManager.instance.eventCallback = e
        },
        sendEvent: function() {
            console.warn("oregon.analytics object has been deprecated, use oregon.sharePoint.templateV4x.analytics instead."), o.GoogleAnalyticsManager.instance.sendEvent.apply(this, arguments)
        }
    };
    c.forEachListItem, s.getListItems;
    oregon.analytics = _, oregon.search = u.SearchManager.instance, oregon.stickyNav = d.StickyNavigationManager.instance, oregon.stateWideLinks = h.StateWideLinksManager.instance, oregon.disqus = g.DisqusManager.instance, oregon.stateWideAlert = p.StateWideAlertManager.instance, oregon.agencyWideAlert = f.AgencyWideAlertManager.instance, oregon.googleTranslate = y.GoogleTranslateManager.instance, document.addEventListener("DOMContentLoaded", function() {
        i.documentLinkTrackingManager.attachDocumentLinkLabels(), r.initialize(), u.SearchManager.instance.initialize(), d.StickyNavigationManager.instance.initialize(), h.StateWideLinksManager.instance.initialize(), g.DisqusManager.instance.initialize(), p.StateWideAlertManager.instance.initialize(), f.AgencyWideAlertManager.instance.initialize(), m.PageCheckOutAlertManager.initialize(), y.GoogleTranslateManager.instance.initialize(), l.scrollToAccordionWithHash(), v.replaceBigfootImages()
    }), oregon.sharePoint.templateV4x = Object.assign(oregon.sharePoint.templateV4x, a.TemplateV4xApi), n(50)
}, function(e, t) {
    function rtePreventInitialFocus() {
        RTE.Canvas.setInitialFocus = function() {}, RTE.PublishingRichTextEditor.setInitialFocusToEditableRegion = function() {}, RTE.PublishingRichTextEditor.$1_6 = function() {}
    }

    function rteCheckFocusFix() {
        var e = RTE.Canvas.checkCurrentFocus;
        RTE.Canvas.checkCurrentFocus = function() {
            RTE.Selection.getSelectionRange() ? e() : console.info("Parent element of a selection range was accessed without being defined. This is a known issue in SharePoint.")
        }
    }

    function rteRemoveZeroWidthSpaces() {
        function filterHtml(e) {
            if (e.length > 0 && (e = e.replace(/\u200B/g, ""), e.indexOf("ms-rte-wpbox") > 0)) {
                0 == e.replace(/<div[^>]*>|<\/div>|<span[^>]*?id="ms-rterange[^>]*?>|<\/span>|\s/gi, "").length && (e += "&nbsp;")
            }
            return e
        }
        var e = RTE.Canvas.getEditableRegionHtml;
        RTE.Canvas.getEditableRegionHtml = function(t, n) {
            return filterHtml(e(t, n))
        }
    }

    function rteSetRangeStartFix() {
        var e = RTE.Cursor.$5u;
        RTE.Cursor.$5u = function() {
            try {
                e()
            } catch (e) {
                console.info(e)
            }
        }
    }

    function enableSaveBeforeNavFix() {
        var e = SP.Ribbon.PageState.PageStateHandler.EnableSaveBeforeNavigate;
        SP.Ribbon.PageState.PageStateHandler.EnableSaveBeforeNavigate = function(t) {
            void 0 != Sys.WebForms ? e(t) : console.info("PageRequesterManager was accessed before Sys.WebForms was defined. This is a known issue in SharePoint.")
        }
    }

    function removeWebPartsFromAdder() {
        var e = ["Forms", "Social Collaboration"],
            t = {
                "Media and Content": ["Image Viewer", "Media Web Part", "Picture Library Slideshow Web Part", "Silverlight Web Part"],
                "Content Rollup": ["Relevant Documents", "Summary Links", "Table Of Contents"]
            },
            n = _WPAdder,
            a = _WPAdder.prototype;
        _WPAdder = function(n, a, i, o, r, s) {
            for (var c = 0; c < a.length; c++) {
                for (var l = a[c], u = !1, d = 0; d < e.length; d++) {
                    var h = e[d];
                    l.title == h && (a.splice(c, 1), u = !0, c--)
                }
                if (!u && null != t[l.title])
                    for (var g = l.items, p = t[l.title], d = 0; d < g.length; d++)
                        for (var f = g[d], m = 0; m < p.length; m++) {
                            var v = p[m];
                            f.title == v && (g.splice(d, 1), d--)
                        }
            }
            this.baseWPAdderFunction(n, a, i, o, r, s)
        }, _WPAdder.prototype = a, _WPAdder.prototype.baseWPAdderFunction = n
    }

    function rteFixMarkupStyleNames() {
        var e = RTE.StyleRuleUtility.$97_0;
        RTE.StyleRuleUtility.$97_0 = function(t, n, a, i) {
            if (!e(t, n, a, i)) return n.replace(/([A-Z\d])/g, " $1").substring(1)
        }
    }

    function rtePreventMarkupStyleClasses() {
        var e = RTE.FontCommands.$8P_0;
        RTE.FontCommands.$8P_0 = function(t, n, a, i) {
            var o = e(t, n, a, i);
            return o.className = o.className.replace(/ms-rteElement-[^\s]*/g, ""), "" == o.className && o.removeAttribute("class"), o
        }
    }

    function rteStyleRuleUtilityPatch() {
        RTE.StyleRuleUtility.$Dj_0 = function(e, t, n, a, i) {
            if (!RTE.SU.$1D(e.href) && !RTE.SU.$4(e.href)) {
                if (RTE.StyleRuleUtility.checkOnlyCssFromSameDomain && !RTE.RteUtility.$EM(e.href)) return !1;
                var o = null;
                return o = RTE.StyleRuleUtility.$AE_0(e.href), -1 === o.indexOf(t) || RTE.StyleRuleUtility.$9Z_0(e, t, n, a)
            }
            return RTE.StyleRuleUtility.$9Z_0(e, t, n, a)
        }
    }
    window.globalStyleRegistry = {}, oregon.sharePoint.templateV4x.editMode && (ExecuteOrDelayUntilScriptLoaded(rtePreventInitialFocus, "sp.ui.rte.publishing.js"), ExecuteOrDelayUntilScriptLoaded(rteCheckFocusFix, "sp.ui.rte.js"), ExecuteOrDelayUntilScriptLoaded(rteRemoveZeroWidthSpaces, "sp.ui.rte.js"), ExecuteOrDelayUntilScriptLoaded(rteSetRangeStartFix, "sp.ui.rte.js"), ExecuteOrDelayUntilScriptLoaded(rteFixMarkupStyleNames, "sp.ui.rte.js"), ExecuteOrDelayUntilScriptLoaded(rtePreventMarkupStyleClasses, "sp.ui.rte.js"), ExecuteOrDelayUntilScriptLoaded(enableSaveBeforeNavFix, "sp.ribbon.js"), ExecuteOrDelayUntilScriptLoaded(removeWebPartsFromAdder, "wpadder.js"), ExecuteOrDelayUntilScriptLoaded(rteStyleRuleUtilityPatch, "sp.ui.rte.js"))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(19),
        i = n(20),
        o = n(12);
    ! function(e) {
        e.onBodyElementCreated = a.onBodyElementCreated, e.onElementCreated = a.onElementCreated, e.onAnchorCreated = a.onAnchorCreated, e.analytics = o.GoogleAnalyticsManager.instance, e.googleTranslate = i.GoogleTranslateManager.instance
    }(t.TemplateV4xApi || (t.TemplateV4xApi = {}))
}, function(e, t, n) {
    "use strict";
    var a = this && this.__awaiter || function(e, t, n, a) {
            return new(n || (n = Promise))(function(i, o) {
                function fulfilled(e) {
                    try {
                        step(a.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function rejected(e) {
                    try {
                        step(a.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function step(e) {
                    e.done ? i(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(fulfilled, rejected)
                }
                step((a = a.apply(e, t || [])).next())
            })
        },
        i = this && this.__generator || function(e, t) {
            function verb(e) {
                return function(t) {
                    return step([e, t])
                }
            }

            function step(o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; r;) try {
                    if (n = 1, a && (i = a[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(a, o[1])).done) return i;
                    switch (a = 0, i && (o = [0, i.value]), o[0]) {
                        case 0:
                        case 1:
                            i = o;
                            break;
                        case 4:
                            return r.label++, {
                                value: o[1],
                                done: !1
                            };
                        case 5:
                            r.label++, a = o[1], o = [0];
                            continue;
                        case 7:
                            o = r.ops.pop(), r.trys.pop();
                            continue;
                        default:
                            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                r = 0;
                                continue
                            }
                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                r.label = o[1];
                                break
                            }
                            if (6 === o[0] && r.label < i[1]) {
                                r.label = i[1], i = o;
                                break
                            }
                            if (i && r.label < i[2]) {
                                r.label = i[2], r.ops.push(o);
                                break
                            }
                            i[2] && r.ops.pop(), r.trys.pop();
                            continue
                    }
                    o = t.call(e, r)
                } catch (e) {
                    o = [6, e], a = 0
                } finally {
                    n = i = 0
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                }
            }
            var n, a, i, o, r = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(13),
        r = n(5),
        s = function() {
            function DocumentLinkRepository() {
                this.getServiceUrl = r.default(this._getServiceUrl), this.getAllUncached = r.default(this._getAllUncached)
            }
            return DocumentLinkRepository.prototype.getSiteUrl = function() {
                return a(this, void 0, void 0, function() {
                    return i(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, oregon.sharePoint.context.getSpPageContextInfo()];
                            case 1:
                                return [2, e.sent().siteServerRelativeUrl]
                        }
                    })
                })
            }, DocumentLinkRepository.prototype._getServiceUrl = function() {
                return a(this, void 0, void 0, function() {
                    var e;
                    return i(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.getSiteUrl()];
                            case 1:
                                return e = t.sent(), [2, e + ("/" == e.charAt(e.length - 1) ? "" : "/") + "_vti_bin/OID.SharePoint.StarterTemplate/documentlinks.svc/"]
                        }
                    })
                })
            }, DocumentLinkRepository.prototype._getAllUncached = function() {
                return a(this, void 0, void 0, function() {
                    var e;
                    return i(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = fetch, [4, this.getServiceUrl()];
                            case 1:
                                return [2, e.apply(void 0, [t.sent(), {
                                    credentials: "include"
                                }]).then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    return e
                                })]
                        }
                    })
                })
            }, DocumentLinkRepository.prototype.getAll = function() {
                return a(this, void 0, void 0, function() {
                    var e, t;
                    return i(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return t = "oregon-sharepoint-templatev4x-documentlinks-", [4, this.getSiteUrl()];
                            case 1:
                                return e = t + n.sent(), oregon.sharePoint.context.anonymous && sessionStorage[e] ? [2, JSON.parse(sessionStorage[e])] : [2, this.getAllUncached().then(function(t) {
                                    return sessionStorage[e] = JSON.stringify(t), t
                                })]
                        }
                    })
                })
            }, DocumentLinkRepository
        }();
    t.DocumentLinkRepository = s;
    var c = function() {
        function DocumentLinkTrackingManager() {
            this.repository = new s
        }
        return DocumentLinkTrackingManager.prototype.attachDocumentLinkLabels = function() {
            return a(this, void 0, void 0, function() {
                var e, t, n = this;
                return i(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return oregon.sharePoint.templateV4x.editMode ? [2] : [4, o.getTemplateSettings()];
                        case 1:
                            return (e = r.sent()) && e.documentLinkTrackingEnabled ? (t = document.querySelectorAll("div[id$='_OregonRichHtmlField'] a"), t.forEach(function(e) {
                                return a(n, void 0, void 0, function() {
                                    function getOneMonthAgo() {
                                        return a || (a = t().subtract(1, "month")), a
                                    }
                                    var t, n, a, o, r, s, c, l;
                                    return i(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                if (t = window.moment, e.hostname != location.host) return [2];
                                                for (n = e.parentNode; n && n instanceof HTMLElement;) {
                                                    if (n.classList && n.classList.contains("ms-WPBody")) return [2];
                                                    n = n.parentNode
                                                }
                                                return [4, this.repository.getAll()];
                                            case 1:
                                                return o = a.sent(), r = decodeURIComponent(e.pathname), s = o.find(function(t) {
                                                    return t.relativeUrl == r || t.relativeUrl == e.pathname
                                                }), s && (c = t(s.modified), l = getOneMonthAgo(), c.isAfter(l) && e.insertAdjacentHTML("afterbegin", '<span class="or-document-link-tracker-new" ><span class="material-icons" aria-hidden="true">fiber_new</span><span class="sr-only">(Document recently updated)</span></span>'), e.insertAdjacentHTML("beforeend", '<span class="or-document-link-tracker-date">&nbsp;(Modified: ' + t(s.modified).format("M/D/YY") + ")</span>"), console.log("found match", e, s)), [2]
                                        }
                                    })
                                })
                            }), [2]) : [2]
                    }
                })
            })
        }, DocumentLinkTrackingManager
    }();
    t.documentLinkTrackingManager = new c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getListItems = function(e, t, n, a, i, o) {
        var r = t.get_lists().getByTitle(n),
            s = new SP.CamlQuery;
        s.set_viewXml(a);
        var c = r.getItems(s);
        this.success = function(e, t) {
            i(e, t, c)
        }, this.failure = function(e, t) {
            console.error("Query failed. " + t.get_message() + (null != t.get_stackTrace() ? "\n" + t.get_stackTrace() : "")), null != o && o(e, t)
        }, e.load(c), e.executeQueryAsync(Function.createDelegate(this, this.success), Function.createDelegate(this, this.failure))
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.forEachListItem = function(e, t) {
        for (var n = e.getEnumerator(), a = 0; n.moveNext();) {
            t(a, n.get_current()), a++
        }
    }
}, function(e, t, n) {
    "use strict";

    function scrollToElement(e, t) {
        var n = $(e),
            a = n.offset();
        if (void 0 !== a) {
            var i = a.top;
            $(window).scrollTop(i + (void 0 !== t ? t : 0))
        }
    }

    function scrollToAccordionWithHash() {
        if (window.location.hash) {
            var e = window.location.hash,
                t = $(e);
            t.hasClass("collapse") && (t.collapse("show"), setTimeout(function() {
                return scrollToElement(t.parent().get(0), -62)
            }, 20))
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.scrollToElement = scrollToElement, t.scrollToAccordionWithHash = scrollToAccordionWithHash
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function SearchManager() {
            this.searchOpenClass = "or-navbar-search-open", this.pagesFolder = "Pages/", this.resultsPageName = "search-results.aspx", this.siteScope = null, this._getResultsPageUrl = function(e, t, n) {
                return "/" != e.charAt(e.length - 1) && (e += "/"), e + t + n
            }
        }
        return Object.defineProperty(SearchManager.prototype, "getResultsPageUrl", {
            get: function() {
                return this._getResultsPageUrl
            },
            set: function(e) {
                this._getResultsPageUrl = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(SearchManager, "instance", {
            get: function() {
                return this._instance || (this._instance = new SearchManager), this._instance
            },
            enumerable: !0,
            configurable: !0
        }), SearchManager.prototype.openSearch = function() {
            this.parentEl.addClass(this.searchOpenClass)
        }, SearchManager.prototype.closeSearch = function() {
            this.parentEl.removeClass(this.searchOpenClass)
        }, SearchManager.prototype.evaluateSearchOpenState = function() {
            this.inputEl.is(":focus") || this.inputEl.val() || this.buttonEl.is(":focus") || this.closeButtonEl.is(":focus") ? this.openSearch() : this.closeSearch()
        }, SearchManager.prototype.submitSearch = function(e) {
            window.location.href = this.getResultsPageUrl(oregon.siteCollectionUrl, this.pagesFolder, this.resultsPageName) + "?q=" + e + (this.siteScope ? " site:" + this.siteScope : "")
        }, SearchManager.prototype.goToPortalSearchLink = function() {
            var e = null,
                t = document.querySelector("input.gsc-input");
            null != t && t instanceof HTMLInputElement && (e = t.value), window.location.href = "http://www.oregon.gov/Pages/index.aspx#search" + (null != e ? "?q=" + e : "")
        }, SearchManager.prototype.attachPortalSearchLink = function() {
            var e = this,
                t = document.getElementsByTagName("gcse:searchresults");
            if (t.length > 0) {
                var n = t[0],
                    a = document.createElement("p"),
                    i = document.createTextNode("Search "),
                    o = document.createElement("a");
                o.setAttribute("href", "#"), o.addEventListener("click", function() {
                    e.goToPortalSearchLink()
                });
                var r = document.createTextNode("all of Oregon.gov");
                o.appendChild(r), a.appendChild(i), a.appendChild(o), console.log(n.parentNode);
                var s = n.parentNode;
                null !== s && s.insertBefore(a, n.nextSibling)
            } else console.error("Could not get CSE input element")
        }, SearchManager.prototype.runSearchResults = function() {
            var e = this;
            this.attachPortalSearchLink(), $(function() {
                var t = document.createElement("script");
                t.type = "text/javascript", t.async = !0, t.src = "https://cse.google.com/cse.js?cx=" + e.customSearchID, $("body").append($(t))
            })
        }, SearchManager.prototype.run = function() {
            this.runSearchResults()
        }, SearchManager.prototype.initialize = function() {
            var e = this;
            null == this.customSearchID && (this.customSearchID = "017270664345420165392:7d4zlq-w3pc"), this.parentEl = $(".or-navbar-search-wrapper"), this.inputEl = $(".or-navbar-search-input"), this.iconEl = $(".or-navbar-search-input-icon"), this.buttonEl = $(".or-navbar-search-submit-button"), this.closeButtonEl = $(".or-navbar-search-close-button"), this.inputEl.on("change focus blur", function() {
                e.evaluateSearchOpenState()
            }), this.inputEl.on("click", function() {
                e.inputEl.is(":focus") || console.log("input not focused, focusing"), e.inputEl.focus()
            }), this.iconEl.on("click", function() {
                e.inputEl.focus()
            }), this.buttonEl.on("focus blur", function() {
                e.evaluateSearchOpenState()
            }), this.closeButtonEl.on("focus blur", function() {
                e.evaluateSearchOpenState()
            }), this.closeButtonEl.on("mousedown", function(e) {
                e.preventDefault()
            }), this.closeButtonEl.on("click", function() {
                e.closeSearch()
            }), this.buttonEl.on("click", function() {
                var t = e.inputEl.val();
                e.submitSearch(t)
            }), this.inputEl.on("keyup keypress", function(t) {
                if (13 === (t.keyCode || t.which)) {
                    t.preventDefault();
                    var n = e.inputEl.val();
                    return e.submitSearch(n), !1
                }
            })
        }, SearchManager
    }();
    t.SearchManager = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(41),
        i = function() {
            function StickyNavigationManager() {
                var e = this;
                this.wrapperClass = "or-navbar-sticky-wrapper", this.placeholderClass = "or-navbar-sticky-placeholder", this.stickyClass = "or-navbar-sticky", this.throttleTime = 30, this.initialized = !1, this.enabled = !0, this.calculateNavHeight = function() {
                    e.placeholderEl.height(e.wrapperEl.height())
                }
            }
            return Object.defineProperty(StickyNavigationManager, "instance", {
                get: function() {
                    return this._instance || (this._instance = new StickyNavigationManager), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), StickyNavigationManager.prototype.initialize = function() {
                if (this.enabled && oregon.sharePoint.context.anonymous) {
                    this.windowEl = $(window), this.bodyEl = $("body"), this.wrapperEl = $("." + this.wrapperClass), this.placeholderEl = $("." + this.placeholderClass), this.calculateNavHeight(), this.wrapperEl.addClass(this.stickyClass);
                    var e = a(this.throttleTime, this.calculateNavHeight);
                    this.windowEl.resize(e), this.initialized = !0
                }
            }, StickyNavigationManager.prototype.recalc = function() {
                this.initialized && this.calculateNavHeight()
            }, StickyNavigationManager
        }();
    t.StickyNavigationManager = i
}, function(e, t) {
    e.exports = function(e, t, n, a) {
        function wrapper() {
            function exec() {
                o = Number(new Date), n.apply(r, c)
            }

            function clear() {
                i = void 0
            }
            var r = this,
                s = Number(new Date) - o,
                c = arguments;
            a && !i && exec(), i && clearTimeout(i), void 0 === a && s > e ? exec() : !0 !== t && (i = setTimeout(a ? clear : exec, void 0 === a ? e - s : e))
        }
        var i, o = 0;
        return "boolean" != typeof t && (a = n, n = t, t = void 0), wrapper
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(43),
        i = function() {
            function StateWideLinksManager() {
                this.footerLinksClass = "or-footer-statewide-links", this.links = []
            }
            return Object.defineProperty(StateWideLinksManager, "instance", {
                get: function() {
                    return this._instance || (this._instance = new StateWideLinksManager), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), StateWideLinksManager.prototype.add = function(e, t) {
                this.links.push({
                    title: e,
                    url: t,
                    cssClass: "or-footer-link-" + a.encodeAsCssClass(e)
                })
            }, StateWideLinksManager.prototype.initialize = function() {
                for (var e = $("." + this.footerLinksClass), t = $('<ul class="list-unstyled"></ul>'), n = 0, a = this.links; n < a.length; n++) {
                    var i = a[n],
                        o = $('<li><a class="' + i.cssClass + '" href="' + i.url + '">' + i.title + "</a></li>");
                    t.append(o)
                }
                e.append(t)
            }, StateWideLinksManager
        }();
    t.StateWideLinksManager = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.encodeAsCssClass = function(e) {
        return e.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(13),
        i = function() {
            function DisqusManager() {
                this.siteId = void 0, this.enabled = !1, this.pageIdCallback = void 0, this.pageUrl = location.protocol + "//" + location.host + location.pathname
            }
            return Object.defineProperty(DisqusManager, "instance", {
                get: function() {
                    return void 0 === this._instance && (this._instance = new DisqusManager), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(DisqusManager.prototype, "defaultPageId", {
                get: function() {
                    return _spPageContextInfo.pageListId.slice(1, -1) + "-" + _spPageContextInfo.pageItemId
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(DisqusManager.prototype, "pageId", {
                get: function() {
                    var e = this.defaultPageId;
                    return void 0 !== this.pageIdCallback ? this.pageIdCallback(e) : e
                },
                enumerable: !0,
                configurable: !0
            }), DisqusManager.prototype.getDisqusId = function() {
                return a.getTemplateSettings().then(function(e) {
                    return e.disqusId
                })
            }, DisqusManager.prototype.attachScript = function() {
                this.getDisqusId().then(function(e) {
                    if (null !== e) {
                        var t = document,
                            n = t.createElement("script");
                        n.src = "//" + e + ".disqus.com/embed.js", n.setAttribute("data-timestamp", (+new Date).toString()), (t.head || t.body).appendChild(n);
                        var a = "<h4>Terms of Use and Moderation Policy</h4><p>State of Oregon agency content and comments containing any of the following forms of information should not contain:</p><ul><li>Comments not topically related to the particular content</li><li>Profane language or tone</li><li>Harassing language or tone</li><li>Content that promotes, fosters or perpetuates discrimination on the basis of race, creed, color, age, religion, gender, marital status, status with regard to public assistance, national origin, physical or mental disability or sexual orientation</li><li>Sexual content or links to sexual content</li><li>Solicitations of commerce</li><li>Conduct or encouragement of illegal activity</li><li>Information that may tend to compromise the safety or security of the public or public systems</li><li>Content that violates an ownership interest of any other party</li><li>Promotion or opposition of any person campaigning for election to a political office, or promoting or opposing any ballot proposition unless specifically authorized by the agency director</li><li>Disclosure of information that an agency and its employees must keep confidential by law or administrative rule</li></ul>";
                        a += "<p>Content or comments of this nature found on a state agency’s social media site will be edited, revised or removed from the site. Only comments that comply with this standard will receive approval by state agency staff for posting.</p>", a += "<p>Communications made through social media will in no way constitute a legal or official notice to the state of Oregon or its agencies or any official or employee of the state of Oregon for any purpose.</p>", a += "<p>Use of this website constitutes acceptance of this policy. Any information posted here is public information and may be subject to monitoring, moderation or disclosure to third parties.</p>";
                        var i = "<div id='socialMediaTermsTop' class='well collapse'>" + a + "</div>",
                            o = "<div id='socialMediaTermsBottom' class='well collapse'>" + a + "</div>",
                            r = "<hr><div class='text-right' style='margin-bottom:10px'><a href='#socialMediaTermsTop' data-toggle='collapse' class='text-info'><span class='fa fa-fw fa-file-text'></span>Terms of Use and Moderation Policy<span class='fa fa-fw fa-caret-down'></span></a></div>" + i + "<hr>",
                            s = "<hr><div class='text-right' style='margin-bottom:10px'><a href='#socialMediaTermsBottom' data-toggle='collapse' class='text-info'><span class='fa fa-fw fa-file-text'></span>Terms of Use and Moderation Policy<span class='fa fa-fw fa-caret-down'></a></div>" + o;
                        $("#disqus_thread").before(r), $("#disqus_thread").after(s)
                    }
                })
            }, DisqusManager.prototype.initialize = function() {
                oregon.sharePoint.context.anonymous && this.enabled && (window.disqus_config = function() {
                    this.page.url = this.pageUrl, this.page.identifier = this.pageId
                }, this.attachScript())
            }, DisqusManager
        }();
    t.DisqusManager = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(21),
        i = function() {
            function StateWideAlertManager() {
                this.dismissedCookieName = "StateWideAlertDismissed", this.defaultAlertTitle = "State-wide Alert", this.title = "Title", this.content = "Content", this.alertClass = "alert-danger", this.ringClass = " or-icon-ring-animation", this.icon = '<span class="material-icons md-18' + this.ringClass + '" aria-hidden="true">notifications</span>', this.containerSelector = ".or-state-alert-placeholder", this.closeButtonSelector = ".close", this.cookieExpiration = 1, this.debug = !1, this.enabled = !1
            }
            return Object.defineProperty(StateWideAlertManager, "instance", {
                get: function() {
                    return this._instance || (this._instance = new StateWideAlertManager), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), StateWideAlertManager.prototype.createAlert = function() {
                var e = this;
                this.title || (this.title = this.defaultAlertTitle);
                var t = $(this.containerSelector),
                    n = $('<div class="alert ' + this.alertClass + ' alert-dismissible" aria-live="alert" role="alert"><button type="button" class="close"><span class="material-icons md-24">close</span></button>' + this.icon + "&nbsp; <strong>" + this.title + "</strong>" + this.content + "</div>");
                t.append(n), oregon.stickyNav.recalc(), $(this.closeButtonSelector, t).click(function() {
                    n.alert("close"), oregon.stickyNav.recalc(), a.set(e.dismissedCookieName, "true", {
                        expires: e.cookieExpiration
                    })
                })
            }, StateWideAlertManager.prototype.initialize = function() {
                this.debug && a.set(this.dismissedCookieName, "false"), this.enabled && "true" != a.get(this.dismissedCookieName) && this.createAlert()
            }, StateWideAlertManager
        }();
    t.StateWideAlertManager = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(21),
        i = function() {
            function AgencyWideAlertManager() {
                var e = this;
                this.dismissedCookieName = "AgencyWideAlertDismissed", this.listName = "Site Wide Alert", this.camlQuery = '<View>\n\t<Query>\n\t\t<Where>\n\t\t\t<Eq>\n\t\t\t\t<FieldRef Name="Display_x003f_" />\n\t\t\t\t<Value Type="Boolean">1</Value>\n\t\t\t</Eq>\n\t\t</Where>\n\t\t<OrderBy>\n\t\t\t<FieldRef Name="Title" Type="text" />\n\t\t</OrderBy>\n\t</Query>\n</View>', this.titleFieldName = "Title", this.contentFieldName = "Alert", this.defaultAlertTitle = "Agency Alert", this.alertClass = "alert-warning", this.ringClass = " or-icon-ring-animation", this.icon = '<span class="material-icons md-18' + this.ringClass + '" aria-hidden="true">notifications</span>', this.containerSelector = "#agencyWideAlert", this.closeButtonSelector = ".close", this.cookieExpiration = 1, this.enabled = !1, this.createAlerts = function(t) {
                    for (var n = t.getEnumerator(); n.moveNext();) {
                        var a = n.get_current();
                        e.createAlert(a)
                    }
                }
            }
            return Object.defineProperty(AgencyWideAlertManager, "instance", {
                get: function() {
                    return this._instance || (this._instance = new AgencyWideAlertManager), this._instance
                },
                enumerable: !0,
                configurable: !0
            }), AgencyWideAlertManager.prototype.createAlert = function(e) {
                var t = this,
                    n = e.get_item(this.titleFieldName),
                    i = e.get_item(this.contentFieldName);
                n || (n = this.defaultAlertTitle), null == i && (i = "");
                var o = $(this.containerSelector),
                    r = $('<div class="alert ' + this.alertClass + ' alert-dismissible" aria-live="alert" role="alert"><button type="button" class="close" data-dismiss="alert"><span class="material-icons md-24">close</span></button>' + this.icon + "&nbsp; <strong>" + n + "</strong>" + i + "</div>");
                o.append(r), $(this.closeButtonSelector, o).click(function() {
                    a.set(t.dismissedCookieName, "true", {
                        expires: t.cookieExpiration,
                        path: oregon.siteCollectionUrl
                    })
                })
            }, AgencyWideAlertManager.prototype.initialize = function() {
                var e = this;
                this.enabled && "true" != a.get(this.dismissedCookieName) && SP.SOD.executeFunc("sp.js", "SP.ClientContext", function() {
                    var t = SP.ClientContext.get_current(),
                        n = t.get_site(),
                        a = n.get_rootWeb(),
                        i = a.get_lists().getByTitle(e.listName),
                        o = new SP.CamlQuery;
                    o.set_viewXml(e.camlQuery);
                    var r = i.getItems(o);
                    t.load(r), t.executeQueryAsync(function() {
                        e.createAlerts(r)
                    }, function(e, t) {
                        throw console.error(t.get_message()), new Error("Could not get site alerts from Site Wide Alert list.")
                    })
                })
            }, AgencyWideAlertManager
        }();
    t.AgencyWideAlertManager = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function PageCheckOutAlertManager() {}
        return PageCheckOutAlertManager.initialize = function() {
            if (!oregon.sharePoint.context.anonymous) {
                var e = $(this.checkedOutUserSelector),
                    t = $(this.checkedOutMessageSelector);
                e.html() && t.show()
            }
        }, PageCheckOutAlertManager.checkedOutUserSelector = ".checkedOutUserName nobr span a", PageCheckOutAlertManager.checkedOutMessageSelector = ".checkedOutMessage", PageCheckOutAlertManager
    }();
    t.PageCheckOutAlertManager = a
}, function(e, t, n) {
    "use strict";

    function replaceBigfootImages() {
        for (var e = document.querySelectorAll(".or-bigfoot-image"), t = 0; t < e.length; t++) {
            e[t].insertAdjacentHTML("beforeend", '<img src="http://www.oregon.gov/SiteCollectionImages/branding/portal/bigfoot.png" alt="Bigfoot" />')
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.replaceBigfootImages = replaceBigfootImages
}, function(e, t, n) {
    "use strict";

    function sendDeprecatedUseEvent(e) {
        a.GoogleAnalyticsManager.instance.sendEvent("StarterTemplate JavaScript API", "Deprecated API Reference", e, 1, null, "default")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(12);
    t.sendDeprecatedUseEvent = sendDeprecatedUseEvent
}, function(e, t) {
    document.addEventListener("DOMContentLoaded", function(e) {
        outdatedBrowser({
            bgColor: "#FDF2AB",
            color: "#000",
            lowerThan: "transform",
            languagePath: ""
        }), $('iframe[id^="twitter-widget"]').before('<div class="skipwidget sr-only" id="skiptwitter"><a href="#" title="skip embedded twitter widget">skip twitter widget</a></div>'), $('iframe[src^="https://www.google.com/calendar/embed"]').before('<div class="skipwidget sr-only" id="skipgooglecalendar"><a href="#" title="skip embedded google widget">skip google calendar widget</a></div>'), $('div[class^="fb_iframe_widget"]').before('<div class="skipwidget sr-only" id="skipfacebook"><a href="#" title="skip embedded google widget">skip google calendar widget</a></div>'), $(document).on("click", ".skipwidget a", function(e) {
            e.preventDefault(), e.stopPropagation();
            for (var t = $(this).closest("div").next(); t.is("iframe") || t.is("script");) t = t.next();
            t.focus()
        }), $("ie:menuitem").remove(), oregon.sharePoint.context.anonymous && $(".or-tel-us").each(function() {
            var e = $(this),
                t = e.text(),
                n = t.replace(/-/g, ""),
                a = $("<a href='tel:+" + n + "'/>");
            e.wrapInner(a)
        }), 
		
    $(document).ready(function () {
        $('.or-data-tables-page-length-control select').off('change');
        $('.or-data-tables-page-length-control button').on('click', function () {
            var currentlength = parseInt($('.or-data-tables-page-length-control select').val());
            $('table.dataTable').DataTable().page.len(currentlength).draw();
        });
        var ua = window.navigator.userAgent;
        /*var msie = ua.indexOf("MSIE ");        
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
        */
        if (ua.indexOf("Trident") == -1) {
            $('.or-data-tables-page-length-control select').keyup(function (event) {
                if (event.which == 13) {
                    $(".or-data-tables-page-length-control select").trigger('click');
                    //$(".or-data-tables-page-length-control select").css("position", "fixed");
                    //$('.or-data-tables-page-length-control select').css("margin-left", $(".or-data-tables-page-length-control select").width() + 5);
                }
            });

        }


        $(document).on("shown.bs.offcanvas", function () {
            $('#OregonSideNavigation.canvas-slid').on('focusout', function (e) {
                setTimeout(function () {
                    if ($(':focus').closest('#OregonSideNavigation.canvas-slid').length <= 0) {
                        $('.navmenu').offcanvas('hide');
                    }
                }, 0);
            });
        });
        $("th.control").html('<span class="sr-only">Expand/Collapse Controls</span>');
        

    }),
		
		$("main").attr("tabindex", "-1"), $("#zz9_SiteActionsMenu > img").attr("alt", "Site Action Blank Image"), $(".checkedOutUserName > nobr > span > img:nth-child(2)").attr("alt", "Go To Link Blank Image"), $(".s4-breadcrumb-arrowcont > span > img").attr("alt", "Breadcrumb Continues"), $(".ms-wpadder-spacing img").attr("alt", "Spacer Image"), $(".ms-wpadder-leftPad img").attr("alt", "Left Padding Image"), $(".ms-wpadder-descriptionColumn center > img").attr("alt", "Loading Animation"), $(".ms-cui-groupContainer .ms-cui-groupBody .ms-cui-layout .ms-cui-section .ms-cui-img-cont-float img[alt=Edit]").attr("alt", "Edit"), setTimeout(function(){ $(".goog-logo-link > img").attr("alt", "Google Logo"), $(".skiptranslate .logo img").attr("alt", "Google Translate Logo"), $("#goog-gt-tt > div.top > h1").replaceWith("<p class='title gray'>Original Text</p>"), $(".goog-te-combo").wrap( "<p></p>" );}, 1000);
    })
}]);