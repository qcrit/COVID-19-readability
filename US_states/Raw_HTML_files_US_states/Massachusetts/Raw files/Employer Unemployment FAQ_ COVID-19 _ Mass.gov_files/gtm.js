
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"192",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"UA-12471675-5"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=ga.getAll(),c;var a=0;for(c=b.length;a\u003Cc;a+=1)if(b[a].get(\"trackingId\")===",["escape",["macro",2],8,16],")return b[a].get(\"clientId\")}catch(d){}return\"false\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"-99",
      "vtp_name":"entityId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"entityBundle"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=new Date,a=b.toString().split(\" \");return a[3]+\" \"+a[1]+\" \"+a[2]+\" \"+a[4]}catch(c){return\"unknown\"}})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":"meta[name=\"mg_organization\"]",
      "vtp_attributeName":"content",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",13],8,16],".pathname.split(\".\");return 1\u003Ca.length?a.pop().toUpperCase():\"HTML\"}catch(b){}})();"]
    },{
      "function":"__dbg"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":false,
      "vtp_component":"HOST",
      "vtp_varType":"URL"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.videoAction"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.videoUrl"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"input[name\\x3dfield47054416]:checked\");return a?a.value:\"not selected\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=new Date,a=b.toString().split(\" \");return a[3]+\" \"+a[1]+\" \"+a[2]+\" \"+a[4]}catch(c){return\"unknown\"}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1===",["escape",["macro",16],8,16],".indexOf(",["escape",["macro",1],8,16],")||-1!==",["escape",["macro",10],8,16],".indexOf(",["escape",["macro",1],8,16],"+\"\/forms\/\")?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==",["escape",["macro",10],8,16],".indexOf(",["escape",["macro",1],8,16],"+\"\/forms\/\")?!0:!1})();"]
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",26],8,16],")return ",["escape",["macro",26],8,16],".split(\"\\x26\")[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=3;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){if(document.location.search.match(\/_ga=([^\u0026]*)\/)){var d=function(a){for(var b in a)return!1;return!0},b=document.location.search.replace(\/(^\\?)\/,\"\").split(\"\\x26\").map(function(a){return a=a.split(\"\\x3d\"),this[a[0]]=a[1],this}.bind({}))[0];delete b._ga;var c=Object.keys(b).map(function(a){return b[a]?encodeURIComponent(a)+\"\\x3d\"+encodeURIComponent(b[a]||\"\"):encodeURIComponent(a)}).join(\"\\x26\");c=d(b)?location.pathname+location.hash:location.pathname+\"?\"+c+location.hash;\nwindow.history.replaceState({},document.title,c)}}})();"]
    },{
      "function":"__c",
      "vtp_value":"massgov"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"script[data-drupal-selector]\");return(a=(a=JSON.parse(a.innerHTML))\u0026\u0026a.path.currentPath)?",["escape",["macro",30],8,16],"+\"\/\"+a:\"\"})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-12471675-10"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",13],8,16],".pathname.split(\"\/\").pop()}catch(a){}})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_component":"PROTOCOL",
      "vtp_varType":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.timerInterval"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userUid"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByTagName(\"iframe\"),a=0;a\u003Cb.length;a++)if(\/^https?:\\\/\\\/player.vimeo.com\/.test(b[a].src))return!0;return!1})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.distance"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.label"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",10],8,16],")return ",["escape",["macro",10],8,16],".split(\":\")[1]})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",40],
      "vtp_map":["list",["map","key","mailto","value","Email Link"],["map","key","tel","value","Phone Number Link"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1===",["escape",["macro",16],8,16],".indexOf(",["escape",["macro",1],8,16],")?!0:!1})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-12471675-5"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "priority":10,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click to transactional app\/external page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Key actions on service + howto pages",
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","7","dimension",["macro",9]],["map","index","2","dimension",["macro",5]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "priority":10,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click to transactional app\/external page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Transactional link in rich text",
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","7","dimension",["macro",9]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":29
    },{
      "function":"__ua",
      "priority":10,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click to transactional app\/external page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Featured action in action finder",
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",5]],["map","index","7","dimension",["macro",9]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":40
    },{
      "function":"__ua",
      "priority":8,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",15],
      "vtp_eventCategory":"Click to download file",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Download file link featured",
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","7","dimension",["macro",9]],["map","index","2","dimension",["macro",5]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "priority":8,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click to contact info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Contact info header",
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",5]],["map","index","7","dimension",["macro",9]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":32
    },{
      "function":"__ua",
      "priority":8,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click to contact info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Contact info right rail",
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","7","dimension",["macro",9]],["map","index","2","dimension",["macro",5]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":41
    },{
      "function":"__ua",
      "priority":8,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click to download file",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Download file link",
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","7","dimension",["macro",9]],["map","index","2","dimension",["macro",5]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":42
    },{
      "function":"__ua",
      "priority":8,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click to contact info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Contact info in structured contact info",
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",5]],["map","index","7","dimension",["macro",9]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":72
    },{
      "function":"__ua",
      "priority":8,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click to contact info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Contact info in rich text",
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","7","dimension",["macro",9]],["map","index","2","dimension",["macro",5]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":74
    },{
      "function":"__ua",
      "priority":8,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click to contact info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Get directions",
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",5]],["map","index","7","dimension",["macro",9]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":75
    },{
      "function":"__ua",
      "priority":8,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click to download file",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Download file link",
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","7","dimension",["macro",9]],["map","index","2","dimension",["macro",5]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":98
    },{
      "function":"__ua",
      "priority":7,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click to view locations",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"See all locations",
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",5]],["map","index","7","dimension",["macro",9]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":33
    },{
      "function":"__ua",
      "priority":7,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click to get location info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Map popup click",
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",5]],["map","index","7","dimension",["macro",9]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":34
    },{
      "function":"__ua",
      "priority":6,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click to get location info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Location page click",
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",5]],["map","index","7","dimension",["macro",9]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",4]],["map","index","2","dimension",["macro",5]],["map","index","3","dimension",["macro",6]],["map","index","5","dimension",["macro",7]],["map","index","6","dimension",["macro",8]],["map","index","7","dimension",["macro",9]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":4
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Eject! Eject! Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"BackToHome",
      "vtp_eventLabel":["macro",12],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",5]],["map","index","7","dimension",["macro",9]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",15],
      "vtp_eventCategory":"Outbound Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template","Not in rich text ",["macro",16]],
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","7","dimension",["macro",9]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",15],
      "vtp_eventCategory":"YouTube Videos",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",17],
      "vtp_eventLabel":["macro",18],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click Event",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Submit Feedback",
      "vtp_eventLabel":["macro",20],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",21]],["map","index","7","dimension",["macro",9]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":26
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":30
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":36
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":37
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":38
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":47
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",27]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":48
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":51
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","cookieName","value","_ga"],["map","fieldName","customTask","value",["macro",28]],["map","fieldName","hitCallback","value",["macro",29]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"search.mass.gov, mass.gov, uionline.detma.org, ma.wildlifelicense.com, dtaconnect.eohhs.mass.gov, uicdevapp01ci.eolwd.aws, careers.mass.gov",
      "vtp_dimension":["list",["map","index","1","dimension",["macro",4]],["map","index","2","dimension",["macro",5]],["map","index","4","dimension",["macro",9]],["map","index","5","dimension",["macro",31]]],
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":57
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useHashDecorateForm":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","cookieDomain","value","auto"],["map","fieldName","customTask","value",["macro",28]],["map","fieldName","cookieName","value","_ga"]],
      "vtp_trackType":"DECORATE_FORM",
      "vtp_dimension":["list",["map","index","1","dimension",["macro",4]],["map","index","2","dimension",["macro",5]],["map","index","4","dimension",["macro",9]],["map","index","5","dimension",["macro",31]]],
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsDecorateForm":true,
      "tag_id":58
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",15],
      "vtp_eventCategory":["macro",34],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",35],
      "vtp_eventLabel":["macro",36],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":67
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Eject! Eject! Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Search",
      "vtp_eventLabel":["macro",10],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",5]],["map","index","7","dimension",["macro",9]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":69
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Eject! Eject! Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Global nav click (except home page)",
      "vtp_eventLabel":["macro",39],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":71
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":73
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":81
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":82
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":83
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":86
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":87
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":88
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":89
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":90
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":91
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":92
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":93
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":94
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"WIC form submit",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Successful submission",
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":96
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":97
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":101
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Click to transactional app\/external page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Topic page click through",
      "vtp_eventLabel":["macro",10],
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",3]],["map","fieldName","userId","value",["macro",45]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",4]],["map","index","2","dimension",["macro",5]],["map","index","3","dimension",["macro",6]],["map","index","5","dimension",["macro",7]],["map","index","6","dimension",["macro",8]],["map","index","7","dimension",["macro",9]],["map","index","8","dimension",["macro",45]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":108
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"854029773",
      "vtp_conversionLabel":"2b2UCOyDk6EBEM3rnZcD",
      "vtp_url":["macro",46],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":117
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":118
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"854029773",
      "vtp_conversionLabel":"2f_8CIS9naEBEM3rnZcD",
      "vtp_url":["macro",46],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":119
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"854029773",
      "vtp_conversionLabel":"oUmrCNjOvaEBEM3rnZcD",
      "vtp_url":["macro",46],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":120
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Button",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template","CTA Button Click - ",["macro",43]],
      "vtp_eventLabel":["macro",43],
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":121
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Button",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template","CTA Button Click - ",["macro",19]],
      "vtp_eventLabel":["macro",19],
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Call",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template","CTC Button - ",["macro",43]],
      "vtp_eventLabel":["macro",43],
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Call",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template","CTC Button - ",["macro",43]],
      "vtp_eventLabel":["macro",43],
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":124
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"854029773",
      "vtp_conversionLabel":"2b2UCOyDk6EBEM3rnZcD",
      "vtp_url":["macro",46],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":125
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click Event",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Global nav hamburger",
      "vtp_eventLabel":"Open",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":126
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":127
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":128
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":129
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":130
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":131
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":132
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":133
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":134
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":135
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":136
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Contextual login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Expand",
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":138
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"854029773",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",46],
      "vtp_enableRdpCheckbox":true,
      "tag_id":139
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Contextual login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Link click",
      "vtp_eventLabel":["macro",10],
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":140
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Contextual login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Link click",
      "vtp_eventLabel":["macro",10],
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":141
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Promotional page interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template","Key message button ",["macro",43]],
      "vtp_eventLabel":["macro",10],
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":143
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Promotional page interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Featured item",
      "vtp_eventLabel":["macro",10],
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":144
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Promotional page interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Featured more link click",
      "vtp_eventLabel":["macro",10],
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":145
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Click event",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Alert click",
      "vtp_eventLabel":["macro",10],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",4]],["map","index","2","dimension",["macro",5]]],
      "vtp_trackingId":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":444
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_20",
      "tag_id":445
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_24",
      "tag_id":446
    },{
      "function":"__cl",
      "tag_id":447
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_49",
      "tag_id":448
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_52",
      "tag_id":449
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_91",
      "tag_id":450
    },{
      "function":"__cl",
      "tag_id":451
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_99",
      "tag_id":452
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_101",
      "tag_id":453
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_102",
      "tag_id":454
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_104",
      "tag_id":455
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_105",
      "tag_id":456
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_106",
      "tag_id":457
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_116",
      "tag_id":458
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_117",
      "tag_id":459
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_118",
      "tag_id":460
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_119",
      "tag_id":461
    },{
      "function":"__hl",
      "tag_id":462
    },{
      "function":"__cl",
      "tag_id":463
    },{
      "function":"__fsl",
      "vtp_waitForTags":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_159",
      "tag_id":464
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_161",
      "tag_id":465
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_193",
      "tag_id":466
    },{
      "function":"__cl",
      "tag_id":467
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_215",
      "tag_id":468
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2746209_223",
      "tag_id":469
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"50",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2746209_224",
      "vtp_enableTriggerStartOption":true,
      "tag_id":470
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_226",
      "tag_id":471
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_229",
      "tag_id":472
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"300000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2746209_242",
      "tag_id":473
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"2700000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2746209_243",
      "tag_id":474
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"1800000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2746209_244",
      "tag_id":475
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"3600000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2746209_245",
      "tag_id":476
    },{
      "function":"__cl",
      "tag_id":477
    },{
      "function":"__cl",
      "tag_id":478
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_255",
      "tag_id":479
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_257",
      "tag_id":480
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_258",
      "tag_id":481
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_259",
      "tag_id":482
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_262",
      "tag_id":483
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_268",
      "tag_id":484
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_270",
      "tag_id":485
    },{
      "function":"__cl",
      "tag_id":486
    },{
      "function":"__cl",
      "tag_id":487
    },{
      "function":"__cl",
      "tag_id":488
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_279",
      "tag_id":489
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_280",
      "tag_id":490
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_281",
      "tag_id":491
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_282",
      "tag_id":492
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_283",
      "tag_id":493
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_284",
      "tag_id":494
    },{
      "function":"__cl",
      "tag_id":495
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_286",
      "tag_id":496
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_287",
      "tag_id":497
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_288",
      "tag_id":498
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_289",
      "tag_id":499
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_290",
      "tag_id":500
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_291",
      "tag_id":501
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"#fsForm2949280 \u003E div \u003E p",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"5",
      "vtp_uniqueTriggerId":"2746209_294",
      "tag_id":502
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_306",
      "tag_id":503
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_310",
      "tag_id":504
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_311",
      "tag_id":505
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_335",
      "tag_id":506
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_343",
      "tag_id":507
    },{
      "function":"__cl",
      "tag_id":508
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_356",
      "tag_id":509
    },{
      "function":"__cl",
      "tag_id":510
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_372",
      "tag_id":511
    },{
      "function":"__cl",
      "tag_id":512
    },{
      "function":"__cl",
      "tag_id":513
    },{
      "function":"__cl",
      "tag_id":514
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_386",
      "tag_id":515
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_392",
      "tag_id":516
    },{
      "function":"__cl",
      "tag_id":517
    },{
      "function":"__cl",
      "tag_id":518
    },{
      "function":"__cl",
      "tag_id":519
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_396",
      "tag_id":520
    },{
      "function":"__cl",
      "tag_id":521
    },{
      "function":"__cl",
      "tag_id":522
    },{
      "function":"__cl",
      "tag_id":523
    },{
      "function":"__cl",
      "tag_id":524
    },{
      "function":"__cl",
      "tag_id":525
    },{
      "function":"__cl",
      "tag_id":526
    },{
      "function":"__cl",
      "tag_id":527
    },{
      "function":"__cl",
      "tag_id":528
    },{
      "function":"__cl",
      "tag_id":529
    },{
      "function":"__cl",
      "tag_id":530
    },{
      "function":"__cl",
      "tag_id":531
    },{
      "function":"__cl",
      "tag_id":532
    },{
      "function":"__cl",
      "tag_id":533
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_429",
      "tag_id":534
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_432",
      "tag_id":535
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_433",
      "tag_id":536
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2746209_443",
      "tag_id":537
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"gtm-youtube-tracking\"\u003E(function(h,f,k){function m(){var b=[].slice.call(h.getElementsByTagName(\"iframe\")).concat([].slice.call(h.getElementsByTagName(\"embed\"))),a;for(a=0;a\u003Cb.length;a++){var d=n(b[a]);if(d){d=b[a];var e=f.location,c=h.createElement(\"a\");c.href=d.src;c.hostname=\"www.youtube.com\";c.protocol=e.protocol;var g=\"\/\"===c.pathname.charAt(0)?c.pathname:\"\/\"+c.pathname;-1\u003Cc.search.indexOf(\"enablejsapi\")||(c.search=(0\u003Cc.search.length?c.search+\"\\x26\":\"\")+\"enablejsapi\\x3d1\");if(!(-1\u003Cc.search.indexOf(\"origin\"))\u0026\u0026-1===\ne.hostname.indexOf(\"localhost\")){var w=e.port?\":\"+e.port:\"\";e=e.protocol+\"%2F%2F\"+e.hostname+w;c.search=c.search+\"\\x26origin\\x3d\"+e}\"application\/x-shockwave-flash\"===d.type\u0026\u0026(e=h.createElement(\"iframe\"),e.height=d.height,e.width=d.width,g=g.replace(\"\/v\/\",\"\/embed\/\"),d.parentNode.parentNode.replaceChild(e,d.parentNode),d=e);c.pathname=g;d.src!==c.href+c.hash\u0026\u0026(d.src=c.href+c.hash);p(d)}}\"addEventListener\"in h\u0026\u0026h.addEventListener(\"load\",x,!0)}function n(b){b=b.src||\"\";return-1\u003Cb.indexOf(\"youtube.com\/embed\/\")||\n-1\u003Cb.indexOf(\"youtube.com\/v\/\")?!0:!1}function p(b){var a=YT.get(b.id);a||(a=new YT.Player(b,{}));\"undefined\"===typeof b.pauseFlag\u0026\u0026(b.pauseFlag=!1,a.addEventListener(\"onStateChange\",function(a){y(a,b)}))}function z(b){var a={};g.events[\"Watch to End\"]\u0026\u0026(a[\"Watch to End\"]=Math.min(b-3,Math.floor(.99*b)));if(g.percentageTracking){var d=[],e;g.percentageTracking.each\u0026\u0026(d=d.concat(g.percentageTracking.each));if(g.percentageTracking.every){var c=parseInt(g.percentageTracking.every,10),f=100\/c;for(e=1;e\u003C\nf;e++)d.push(e*c)}for(e=0;e\u003Cd.length;e++)f=d[e],c=f+\"%\",f=b*f\/100,a[c]=Math.floor(f)}return a}function y(b,a){var d=b.data,e=b.target,c=e.getVideoUrl();c=c.match(\/[?\u0026]v=([^\u0026#]*)\/)[1];var f=e.getPlayerState(),g=Math.floor(e.getDuration()),h=z(g);g={1:\"Play\",2:\"Pause\"};g=g[d];a.playTracker=a.playTracker||{};1!==f||a.timer?(clearInterval(a.timer),a.timer=!1):(clearInterval(a.timer),a.timer=setInterval(function(){var b=e,d=h,c=a.videoId,g=b.getCurrentTime(),f;b[c]=b[c]||{};for(f in d)d[f]\u003C=g\u0026\u0026!b[c][f]\u0026\u0026\n(b[c][f]=!0,q(c,f))},1E3));1===d\u0026\u0026(a.playTracker[c]=!0,a.videoId=c,a.pauseFlag=!1);if(!a.playTracker[a.videoId])return!1;if(2===d){if(a.pauseFlag)return!1;a.pauseFlag=!0}r[g]\u0026\u0026q(a.videoId,g)}function q(b,a){var d=\"https:\/\/www.youtube.com\/watch?v\\x3d\"+b,e=f.GoogleAnalyticsObject;if(\"undefined\"===typeof f[t]||g.forceSyntax)if(\"function\"===typeof f[e]\u0026\u0026\"function\"===typeof f[e].getAll\u0026\u00262!==g.forceSyntax)f[e](\"send\",\"event\",\"Videos\",a,d);else\"undefined\"!==typeof f._gaq\u0026\u00261!==A\u0026\u0026f._gaq.push([\"_trackEvent\",\n\"Videos\",a,d]);else f[t].push({event:\"youTubeTrack\",attributes:{videoUrl:d,videoAction:a}})}function u(b,a,d){if(b.addEventListener)b.addEventListener(a,d);else if(b.attachEvent)b.attachEvent(\"on\"+a,function(a){a.target=a.target||a.srcElement;d.call(b,a)});else if(\"undefined\"===typeof b[\"on\"+a]||null===b[\"on\"+a])b[\"on\"+a]=function(a){a.target=a.target||a.srcElement;d.call(b,a)}}function x(b){b=b.target||b.srcElement;var a=n(b);\"IFRAME\"===b.tagName\u0026\u0026a\u0026\u0026-1\u003Cb.src.indexOf(\"enablejsapi\")\u0026\u0026-1\u003Cb.src.indexOf(\"origin\")\u0026\u0026\np(b)}var g=k||{},A=g.forceSyntax||0,t=g.dataLayerName||\"dataLayer\",r={Play:!0,Pause:!0,\"Watch to End\":!0},l;k=h.createElement(\"script\");k.src=\"\/\/www.youtube.com\/iframe_api\";var v=h.getElementsByTagName(\"script\")[0];v.parentNode.insertBefore(k,v);for(l in g.events)g.events.hasOwnProperty(l)\u0026\u0026(r[l]=g.events[l]);f.onYouTubeIframeAPIReady=function(){var b=f.onYouTubeIframeAPIReady;return function(){b\u0026\u0026b.apply(this,arguments);navigator.userAgent.match(\/MSIE [67]\\.\/gi)||(\"loading\"!==h.readyState?m():h.addEventListener?\nu(h,\"DOMContentLoaded\",m):u(f,\"load\",m))}}()})(document,window,{events:{Play:!0,Pause:!0,\"Watch to End\":!0},percentageTracking:{every:25,each:[10,90]}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var a=document,d=a.createElement(\"script\");a=a.head||a.getElementsByTagName(\"head\")[0];var e=\"fsReady\",f={src:\"\/\/gateway.foresee.com\/sites\/mass-gov\/production\/gateway.min.js\",type:\"text\/javascript\",async:\"true\",\"data-vendor\":\"fs\",\"data-role\":\"gateway\"},c;for(c in f)d.setAttribute(c,f[c]);a.appendChild(d);b[e]=function(){var a=\"__\"+e+\"_stk__\";b[a]=b[a]||[];b[a].push(arguments)}})(window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-752260426\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-752260426\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1052144818321815\");fbq(\"track\",\"PageView\");fbq(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1052144818321815\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var a=document,d=a.createElement(\"script\");a=a.head||a.getElementsByTagName(\"head\")[0];var e=\"fsReady\",f={src:\"\/\/gateway.foresee.com\/sites\/mass-gov\/staging\/gateway.min.js\",type:\"text\/javascript\",async:\"true\",\"data-vendor\":\"fs\",\"data-role\":\"gateway\"},c;for(c in f)d.setAttribute(c,f[c]);a.appendChild(d);b[e]=function(){var a=\"__\"+e+\"_stk__\";b[a]=b[a]||[];b[a].push(arguments)}})(window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"gtm-vimeo-tracking\"\u003E(function(g,d,k){function m(){var a=n(r(\"iframe\"),t);a.length\u0026\u0026u(function(){h(a,v)})}function t(a){return-1\u003Ca.src.indexOf(\"player.vimeo.com\/video\/\")}function u(a){l(d.Vimeo)?w(\"https:\/\/player.vimeo.com\/api\/player.js\",a):a()}function v(a){if(!a.__vimeoTracked){a.__vimeoTracked=!0;var c=new Vimeo.Player(a),b=k._track.percentages,e={\"Played video\":\"play\",\"Paused video\":\"pause\",\"100%\":\"ended\"},f={};c.getVideoTitle().then(function(a){h([\"Played video\",\"Paused video\",\"100%\"],function(b){if(k.events[b])c.on(e[b],\nfunction(){p(b,a)})});if(b)c.on(\"timeupdate\",function(e){e=e.percent;for(var c in b)e\u003E=b[c]\u0026\u0026!f[c]\u0026\u0026(f[c]=!0,p(c,a))})})}}function x(a){a=y({},{events:{\"Played video\":!0,\"Paused video\":!0,\"100%\":!0},percentages:{each:[],every:[]}},a);h([\"each\",\"every\"],function(b){var c=a.percentages[b];q(c)||(c=[c]);c\u0026\u0026(a.percentages[b]=z(c,Number))});var c=[].concat(a.percentages.each);a.percentages.every\u0026\u0026h(a.percentages.every,function(a){var b=100\/a,e=[],d;for(d=1;d\u003Cb;d++)e.push(a*d);c=c.concat(n(e,function(a){return 0\u003C\na\u0026\u0026100\u003Ea}))});var b=A(c,function(a,b){a[b+\"%\"]=b\/100;return a},{});a._track={percentages:b};return a}function B(a){a=a||{};var c=a.name||\"dataLayer\",b=a.name||d.GoogleAnalyticsObject||\"ga\",e=\"_gaq\",f={gtm:function(a,b){g.push({event:\"video\",eventCategory:\"Vimeo\",eventAction:a,eventLabel:b})},cl:function(a,b){d[e].push([\"_trackEvent\",\"Videos\",a,b])},ua:function(a,c){d[b](\"send\",\"event\",\"Videos\",a,c)}};switch(a.type){case \"gtm\":var g=d[c]=d[c]||[];break;case \"ua\":d[b]=d[b]||function(){(d[b].q=d[b].q||\n[]).push(arguments)};d[b].l=+new Date;break;case \"cl\":d[e]=d[e]||[];break;default:l(d[c])?b\u0026\u0026!l(d[b])?a.type=\"ua\":l(d[e])||l(d[e].push)||(a.type=\"cl\"):(a.type=\"gtm\",g=d[c]=d[c]||[])}return f[a.type]}function y(){var a=[].slice.call(arguments),c=a.shift(),b,e;for(e=0;e\u003Ca.length;e++){var d=a[e];for(b in d)c[b]=d[b]}return c}function q(a){return Array.isArray_?Array.isArray_(a):\"[object Array]\"===Object.prototype.toString.call(a)}function h(a,c){if(Array.prototype.forEach_)return a.forEach.call(a,c);\nvar b;for(b=0;b\u003Ca.length;b++)c.call(d,a[b],b,a)}function z(a,c){if(Array.prototype.map_)return a.map.call(a,c);var b=[];h(a,function(a,f,g){b.push(c.call(d,a,f,g))});return b}function n(a,c){if(Array.prototype.filter)return a.filter.call(a,c);var b=[];h(a,function(a,f,g){c.call(d,a,f,g)\u0026\u0026b.push(a)});return b}function A(a,c,b){if(Array.prototype.reduce)return a.reduce.call(a,c,b);var e;for(e=0;e\u003Ca.length;e++){var f=a[e];b=c.call(d,b,f,a,e)}return b}function l(a){return\"undefined\"===typeof a}function r(a){q(a)||\n(a=[a]);return[].slice.call(g.querySelectorAll(a.join()))}function w(a,c){function b(){c\u0026\u0026(c(),f.onload=null)}var d=g.getElementsByTagName(\"script\")[0];var f=g.createElement(\"script\");f.onload=b;f.src=a;f.async=!0;d.parentNode.insertBefore(f,d)}if(!navigator.userAgent.match(\/MSIE [678]\\.\/gi)){k=x(k);var p=B(k.syntax);\"loading\"!==g.readyState?m():g.addEventListener(\"DOMContentLoaded\",function(){m();g.addEventListener(\"load\",m,!0)})}})(document,window,{events:{\"Played video\":!0,\"Paused video\":!0,\"100%\":!0},\npercentages:{every:25,each:[25,75]}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"474938589918079\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=474938589918079\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"\/\/www.storygize.net\/a\/a1c6c8d4-483a-48e2-805a-08c68e040f65\/abdo.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe width=\"0\" height=\"0\" name=\"Trade Desk Tracking - IP1922522_MA DFML Landing Page_Conv\/RT\" frameborder=\"0\" scrolling=\"no\" src=\"\/\/insight.adsrvr.org\/tags\/92vk2st\/2pfl188\/iframe\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":110
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe width=\"0\" height=\"0\" name=\"Trade Desk Tracking - IP1922522_MA DFML Contact Form_Conv\" frameborder=\"0\" scrolling=\"no\" src=\"\/\/insight.adsrvr.org\/tags\/92vk2st\/fa2lt3h\/iframe\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":112
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe width=\"0\" height=\"0\" name=\"Trade Desk Tracking - IP1922522_MA DFML Decision Tree Start_Conv\/RT\" frameborder=\"0\" scrolling=\"no\" src=\"\/\/insight.adsrvr.org\/tags\/92vk2st\/vspjybs\/iframe\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe width=\"0\" height=\"0\" name=\"Trade Desk Tracking - IP1922522_MA DFML FAQ_Conv\/RT\" frameborder=\"0\" scrolling=\"no\" src=\"\/\/insight.adsrvr.org\/tags\/92vk2st\/x7nmn0m\/iframe\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":114
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe width=\"0\" height=\"0\" name=\"Trade Desk Tracking - IP1922522_MA DFML Guide_Conv\/RT\" frameborder=\"0\" scrolling=\"no\" src=\"\/\/insight.adsrvr.org\/tags\/92vk2st\/xio7fp5\/iframe\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":115
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe width=\"0\" height=\"0\" name=\"Trade Desk Tracking - IP1922522_MA DFML Video Play_Conv\" frameborder=\"0\" scrolling=\"no\" src=\"\/\/insight.adsrvr.org\/tags\/92vk2st\/6nq0igj\/iframe\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":116
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Ciframe width=\"0\" height=\"0\" name=\"Trade Desk Tracking - IP1922522_MA DFML_Social_Landing Page_Conv\/RT\" frameborder=\"0\" scrolling=\"no\" src=\"\/\/insight.adsrvr.org\/tags\/92vk2st\/031mykm\/iframe\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":137
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"375422660078548\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=375422660078548\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":142
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar ftRandom=1E6*Math.random();document.write('\\x3ciframe style\\x3d\"position:absolute; visibility:hidden; width:1px; height:1px;\" src\\x3d\"https:\/\/servedby.flashtalking.com\/container\/15339;112650;11704;iframe\/?spotName\\x3dDFML_LP_2020\\x26cachebuster\\x3d'+ftRandom+'\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":146
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar ftRandom=1E6*Math.random();document.write('\\x3ciframe style\\x3d\"position:absolute; visibility:hidden; width:1px; height:1px;\" src\\x3d\"https:\/\/servedby.flashtalking.com\/container\/15339;113260;11704;iframe\/?spotName\\x3dDFML_Display_and_Social_LP_2020\\x26cachebuster\\x3d'+ftRandom+'\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":440
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"edit.mass.gov"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"service_details"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"https:\/\/www.mass.gov\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_24($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"pdf|docx?|xlsx?|txt|rtf?|csv",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__download-link a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_49($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__rich-text a"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"maps.google.com"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"www.mass.gov"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_229($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"youTubeTrack"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"2521317"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_91($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"ma__sticky-nav__link js-scroll-anchors-link"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__key-actions .ma__callout-link a, .ma__key-actions .ma__callout-link span"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(how_to_page|guide)"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_99($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_101($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_102($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__page-header__content .ma__contact-group a"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(org_page|location|event)"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_104($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"\/locations$"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_105($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__google-map .ma__info-window a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_106($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",25],
      "arg1":"Not found"
    },{
      "function":"_sw",
      "arg0":["macro",25],
      "arg1":"Not allowed"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"Server Error | Apology | Mass.gov"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__action-finder__items a:not(.ma__action-finder__items.ma__action-finder__items--all a)"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_116($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".sidebar .ma__contact-group a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_117($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"csv$|doc$|docm$|docx$|dot$|dotx$|dwg$|geojson$|gif$|json$|jpg$|kml$|kmz$|mp3$|mpp$|msg$|odf$|ods$|odt$|pdf$|png$|pps$|ppsx$|potx$|ppt$|pptm$|pptx$|ppsm$|prx$|pub$|rdf$|rtf$|tiff$|tsv$|txt$|xls$|xlsb$|xlsm$|xlsx$|xml$|zip$"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"\/lists\/"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_118($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"\/media\/|\/download$|\/files\/|\/docs\/|\/doc\/"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_215($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"\/locations\/"
    },{
      "function":"_sw",
      "arg0":["macro",7],
      "arg1":"location"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_119($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"decision_tree"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"gsc-cursor-page"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"registryofmotorvehicles|departmentofpublichealth|massachusettsdepartmentoftransportation|^masshealth$|^humanresources$|^officeofjurycommissioner,massachusettscourtsystem$|^massachusettscourtsystem$"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"js-header-search-form"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_159($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"ma__search-banner__form"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_161($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_356($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"video"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"https:\/\/search.mass.gov\/"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_193($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"ma__main-nav__link"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"mailto|tel",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"ma__content-link"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_20($|,)))"
    },{
      "function":"_ge",
      "arg0":["macro",41],
      "arg1":"50"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_223($|,)))"
    },{
      "function":"_ge",
      "arg0":["macro",42],
      "arg1":"15000"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"^info_details$|^service_details$|^rules$|^regulation$|^person$|^news$|^location_details$|^location$|^guide_page$|^executive_order$|^event$|^decision$|^binder$|^advisory$|^how_to_page$"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_224($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"tel|mailto"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_226($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"maps.google.com"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"directions"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_52($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"ma__contextual-navigation--anchor"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"global_nav_menu_on_contextual"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"Log In to..."
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_255($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__relationship-indicators--section.secondary .wrapped-link.ma__relationship-indicators--term a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_268($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":"#headerTags1 \u003E a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_392($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":"div.ma__relationship-indicators--section.primary \u003E div a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_270($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":"div:not(.tags-open) \u003E div \u003E button.js-relationship-indicator-button,div:not(.tags-open) \u003E div \u003E button.js-relationship-indicator-button \u003E span"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"#organizations"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"#news"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_279($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"#events"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"\/orgs\/"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"#locations"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_288($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__org-nav-i-want-to__findService a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_280($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__organization-navigation__subitems .ma__link-list__see-all a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_281($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__org-nav-i-want-to__learnAbout a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_286($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__org-nav-i-want-to__login a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_306($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__organization-navigation__subitems.about .ma__link-list__item a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_282($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__organization-navigation__subitems.about ul \u003E span \u003E a.js-clickable-link"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_287($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__organization-navigation__subitem .wrappedGroup a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_284($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",44],
      "arg1":".js-organization-navigation__search"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_289($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"\/forms\/apply-for-wic-online"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_294($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"\/service-details\/|\/info-details\/|\/locations\/|\/location-details\/"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_310($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__download-link__title a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_311($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__key-actions a"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"\/locations\/"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_386($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__form-downloads a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_262($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"Feedback"
    },{
      "function":"_ew",
      "arg0":["macro",10],
      "arg1":"#feedback"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_335($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__section-links__content a"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"topic"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_343($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"tel"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"^1798591$|^7361$|17331$|^32656$|^17936$|^32121$|^150741$|^200326$|^183326$|^18446$|^31746$|^33161$|^44646$|^88456$|^242646$|^7361$|^61091$|^193926$|^109451$|^207601$|^206746$|^7361$|^200801$|^84661$|^207696$|^7361$"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"^1798591$|^7361$|^17331$|^32656$|^17936$|^32121$|^150741$|^200326$|^183326$|^18446$|^31746$|^33161$|^44646$|^88456$|^242646$|^61091$|^193926$|^109451$|^207601$|^206746$|^200801$|^84661$|^207696$|^475576$"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"84661"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":"#fsSubmitButton1777933"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"193926"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":"h3 a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_372($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"mailto"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":"div.ma__header__button-container.js-sticky-header \u003E button[aria-pressed=false],div.ma__header__button-container.js-sticky-header \u003E button[aria-pressed=false] \u003E span.ma__header__menu-icon,div.ma__header__button-container.js-sticky-header \u003E button[aria-pressed=false] \u003E span.ma__header__menu-text"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":"div.ma__header__button-container.js-sticky-header \u003E button[aria-pressed=true],div.ma__header__button-container.js-sticky-header \u003E button[aria-pressed=true] \u003E span.ma__header__menu-icon,div.ma__header__button-container.js-sticky-header \u003E button[aria-pressed=true] \u003E span.ma__header__menu-text"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":"button.ma__main-nav__top-link[aria-expanded=false],button.ma__main-nav__top-link[aria-expanded=false] span"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"ma__featured-item"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_396($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__sticky-nav__link.js-scroll-anchors-link, .ma__sticky-nav__link.js-scroll-anchors-link a"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__sticky-nav__link.js-scroll-anchors-link.is-active a"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__sticky-toc__links .ma__sticky-toc__link a"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".sticky-nav-open .ma__sticky-toc__link a"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".js-sticky-toc__toggle-items, .ma__sticky-toc__links .ma__sticky-toc__toggle-link"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".js-sticky-toc__toggle-items.open, .ma__sticky-toc__links.is-open .ma__sticky-toc__toggle-link"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__sticky-nav.js-scroll-anchors .ma__sticky-nav__link.js-scroll-anchors-toggle.is-title.is-active, .ma__sticky-nav.js-scroll-anchors .ma__sticky-nav__toggle-link.js-scroll-anchors-toggle, .ma__sticky-nav__link.js-scroll-anchors-link.is-active"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__sticky-nav.js-scroll-anchors.is-open .ma__sticky-nav__link.js-scroll-anchors-toggle.is-title.is-active, .ma__sticky-nav.js-scroll-anchors.is-open .ma__sticky-nav__toggle-link.js-scroll-anchors-toggle"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__sticky-nav.js-scroll-anchors.is-open .ma__sticky-nav__toggle-link, .ma__sticky-nav.js-scroll-anchors.is-open .ma__sticky-nav__link"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".js-sticky-toc__toggle-items.is-open, .ma__sticky-toc__links.is-open .ma__sticky-toc__toggle-link, .js-sticky-toc__toggle-items.open"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".stickyTOC-open"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".secondary-label-close"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__sticky-toc__sticky-top *"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":"button[aria-label=\"Log in to one of Mass.gov's most frequently accessed services\"], button[aria-label=\"Log in to one of Mass.gov's most frequently accessed services\"] *, button[aria-label=\"Log in to one of Mass.gov's most frequently accessed services\"] \u003E svg"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__utility-nav__content-body .ma__utility-panel:nth-child(1) *"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"state-a-to-z"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__utility-nav__content-body .ma__utility-panel:nth-child(2) *"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__button.ma__button--c-white,  .ma__button.ma__button--c-primary"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"campaign_landing"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_429($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":"a.ma__card__wrapper"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_432($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__decorative-link a, .ma__decorative-link a *"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_433($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",13],
      "arg1":".ma__emergency-alert a"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)2746209_443($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":".*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"https:\/\/www.mass.gov\/"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"https:\/\/www.mass.gov\/qa-service-1"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"^319411$|^332436$|^332451$|^332466$|^296686$|^332471$|^296661$|^332431$|^15001$|^96451$|^15991$|^15041$|^12001$"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"^414121$"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"461936"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"Click here to begin"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"^439926$"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"^428286$"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"^445206$"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"475576"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"502866"
    }],
  "rules":[
    [["if",0],["add",14,28,172,173,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,105,106,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171]],
    [["if",0,2],["add",15]],
    [["if",3,4,5],["add",16]],
    [["if",4,7,8,9],["add",3]],
    [["if",4,13],["unless",10,11,12],["add",17]],
    [["if",14],["add",18]],
    [["if",15,16,17],["add",19]],
    [["if",6,18],["add",20]],
    [["if",4,19,20,21],["add",0]],
    [["if",4,10,22,23],["add",1]],
    [["if",4,24,25],["add",21]],
    [["if",4,26,27,28],["add",4]],
    [["if",4,29,30],["add",11]],
    [["if",4,31,32],["add",12]],
    [["if",0,33],["add",22]],
    [["if",0,34],["add",23]],
    [["if",0,35],["add",24]],
    [["if",4,22,36,37],["add",2]],
    [["if",4,38,39],["add",5]],
    [["if",4,40,42],["unless",41],["add",6]],
    [["if",4,43,44],["unless",41],["add",6]],
    [["if",4,45,47],["unless",46],["add",13]],
    [["if",48,49],["add",25,26]],
    [["if",6,50],["add",27]],
    [["if",16,52,53],["add",29]],
    [["if",16,54,55],["add",29]],
    [["if",57],["add",30]],
    [["if",16,58,59],["add",31]],
    [["if",6,60],["unless",61],["add",32]],
    [["if",4,62,63,64],["add",7]],
    [["if",65,66,67],["unless",1],["add",33]],
    [["if",68,69,70,71],["unless",1],["add",33]],
    [["if",4,72,73],["unless",63],["add",8]],
    [["if",4,74,75,76],["add",9]],
    [["if",6,77],["add",34]],
    [["if",6,78],["add",35]],
    [["if",4,79,80],["add",36]],
    [["if",4,81,82],["add",37]],
    [["if",4,83,84],["add",37]],
    [["if",4,85,86],["add",38]],
    [["if",6,87],["add",39]],
    [["if",6,60,61],["add",40]],
    [["if",6,88],["add",41]],
    [["if",4,89,90],["add",41]],
    [["if",6,91,92],["add",41]],
    [["if",4,93,94],["add",41]],
    [["if",4,95,96],["add",42]],
    [["if",4,97,98],["add",42]],
    [["if",4,99,100],["add",42]],
    [["if",4,101,102],["add",42]],
    [["if",4,103,104],["add",43]],
    [["if",4,105,106],["add",43]],
    [["if",4,107,108],["add",44]],
    [["if",16,109,110],["add",45]],
    [["if",111,112,113],["add",46]],
    [["if",4,10,114,115],["add",47]],
    [["if",4,114,116,117],["add",47]],
    [["if",4,118,119,120],["add",47]],
    [["if",4,41,121,122],["add",10]],
    [["if",4,123,124,125],["add",48]],
    [["if",4,126,127,128],["add",49]],
    [["if",0,1],["add",50],["block",14,22,23,25,26,28,174,175,178,179]],
    [["if",6,129,130],["add",51,57]],
    [["if",0,131],["add",52,72,178,179]],
    [["if",6,132,133],["add",53,56]],
    [["if",4,134,135,136],["add",54,55]],
    [["if",6,130,137],["add",58,59]],
    [["if",6,138],["add",60]],
    [["if",6,139],["add",61]],
    [["if",6,140],["add",62]],
    [["if",4,141,142],["add",63]],
    [["if",6,143],["unless",144],["add",64]],
    [["if",6,145],["unless",146],["add",64]],
    [["if",6,146],["add",65]],
    [["if",6,147],["unless",148],["add",66]],
    [["if",6,149],["unless",150],["add",66]],
    [["if",6,151],["add",67]],
    [["if",6,152],["add",67]],
    [["if",6,153],["add",68]],
    [["if",6,154],["add",69]],
    [["if",6,155],["add",70]],
    [["if",6,156],["add",71]],
    [["if",6,157],["unless",158],["add",73]],
    [["if",6,159],["add",74]],
    [["if",4,160,161,162],["add",75]],
    [["if",4,161,163,164],["add",76]],
    [["if",4,161,165,166],["add",77]],
    [["if",4,167,168],["add",78]],
    [["if",0,169],["add",79]],
    [["if",0,69],["add",103]],
    [["if",170],["add",104]],
    [["if",0,171],["add",107,108,109,110]],
    [["if",0,173],["add",174,175]],
    [["if",0,172],["add",176],["block",173]],
    [["if",174,175],["add",177]],
    [["if",0,176],["add",180,186,189]],
    [["if",0,177],["add",181]],
    [["if",6,178,179],["add",182]],
    [["if",0,180],["add",183]],
    [["if",0,181],["add",184]],
    [["if",57,176],["add",185]],
    [["if",0,182],["add",187]],
    [["if",0,183],["add",188]],
    [["if",1,6],["block",16,3,17,20,0,1,21,4,11,12,24,2,5,6,13,27,32,7,8,9,34,35,36,37,38,39,41,42,43,44,47,10,48,49,63]],
    [["if",0,51],["block",28]],
    [["if",1,16,56],["block",29,31,45,46]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={uf:!0},ia={};try{ia.__proto__=ha;fa=ia.uf;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea,ka=this||self,la=/^[\w+/_-]+[=]{0,2}$/,na=null;var oa=function(){},pa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},qa=function(a){return"number"==typeof a&&!isNaN(a)},ra=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},q=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ra(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!qa(a)||
!qa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},C=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},za=function(a){return Math.round(Number(a))||0},Aa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ba=function(a){var b=[];if(ra(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ca=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ea=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Fa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ga=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ha=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ia=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ja=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ka=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},La=function(a){var b=
[];C(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},D=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=D(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=D(e,c[d])):c[d]=e}return c};
var Qa=[],Ra={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ra[a]},Ta=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ya={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},bb=function(a){return Ya[a]};
Qa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xa,bb)+"'"}};var jb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,kb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},mb=function(a){return kb[a]};Qa[16]=function(a){return a};var ob;
var pb=[],qb=[],rb=[],sb=[],tb=[],ub={},vb,xb,yb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=ub[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=ub[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(ra(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=pb[f];if(!h||b.Qc(h))return;c[f]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);yb&&(d=yb.Tf(d,k))}catch(x){b.xe&&b.xe(x,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=Bb(a[n],b,c);xb&&(m=m||r===xb.yb);d.push(r)}return xb&&m?xb.Wf(d):d.join("");case "escape":d=Bb(a[1],b,c);if(xb&&ra(a[1])&&"macro"===a[1][0]&&xb.ug(a))return xb.Og(d);d=String(d);for(var t=2;t<a.length;t++)Qa[a[t]]&&(d=Qa[a[t]](d));return d;case "tag":var p=a[1];if(!sb[p])throw Error("Unable to resolve tag reference "+p+".");return d={ke:a[2],
index:p};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Eb(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Eb=function(a,b,c){try{return vb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Fb=function(){var a=function(b){return{toString:function(){return b}}};return{vd:a("convert_case_to"),wd:a("convert_false_to"),xd:a("convert_null_to"),yd:a("convert_true_to"),zd:a("convert_undefined_to"),wh:a("debug_mode_metadata"),sa:a("function"),Ve:a("instance_name"),Ze:a("live_only"),af:a("malware_disabled"),bf:a("metadata"),xh:a("original_vendor_template_id"),ff:a("once_per_event"),Hd:a("once_per_load"),Pd:a("setup_tags"),Rd:a("tag_id"),Sd:a("teardown_tags")}}();var Gb=null,Kb=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Gb=Hb(a);for(var e=0;e<qb.length;e++){var f=qb[e],h=Jb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Jb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Gb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Gb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Hb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Eb(rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var cc,dc=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Hf&&(l["fix_"+m]=!0),l.me=l.me||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=r.startTag();
if(p){var u=k.slice(p.length);if(u.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,N:p.N,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var u={};p[2].replace(e,function(v,w,x,y,B){var z=x||y||B||f.test(w)&&w||null,A=document.createElement("div");A.innerHTML=z;u[w]=A.textContent||A.innerText||z});return{tagName:p[1],N:u,rb:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},t=function(){for(var p in n)if(n[p].test(k)){var u=r[p]();return u?(u.type=u.type||p,u.text=k.substr(0,u.length),k=k.slice(u.length),u):null}};l.me&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.ve=function(){return this[this.length-1]};v.Sc=function(A){var E=this.ve();return E&&E.tagName&&E.tagName.toUpperCase()===A.toUpperCase()};v.Sf=
function(A){for(var E=0,H;H=this[E];E++)if(H.tagName===A)return!0;return!1};var w=function(A){A&&"startTag"===A.type&&(A.rb=p.test(A.tagName)||A.rb);return A},x=t,y=function(){k="</"+v.pop().tagName+">"+k},B={startTag:function(A){var E=A.tagName;"TR"===E.toUpperCase()&&v.Sc("TABLE")?(k="<TBODY>"+k,z()):l.Gh&&u.test(E)&&v.Sf(E)?v.Sc(E)?y():(k="</"+A.tagName+">"+k,z()):A.rb||v.push(A)},endTag:function(A){v.ve()?l.eg&&!v.Sc(A.tagName)?y():v.pop():l.eg&&(x(),z())}},z=function(){var A=k,E=w(x());k=A;if(E&&
B[E.type])B[E.type](E)};t=function(){z();return w(x())}}();return{append:function(p){k+=p},Wg:t,Mh:function(p){for(var u;(u=t())&&(!p[u.type]||!1!==p[u.type](u)););},clear:function(){var p=k;k="";return p},Nh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Ph="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Oh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.M=b;a.O=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,r;for(r in m.N){var t=m.N[r];n+=
" "+r+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.rb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.F=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.h=a.h||!b[h]&&h;cc=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,t,p){var u,v=r&&r.length||0;for(u=0;u<v;u++)t.call(p,r[u],u)}function d(r,t,p){for(var u in r)r.hasOwnProperty(u)&&t.call(p,u,r[u])}function e(r,
t){d(t,function(p,u){r[p]=u});return r}function f(r,t){r=r||{};d(t,function(p,u){b(r[p])||(r[p]=u)});return r}function h(r){try{return m.call(r)}catch(p){var t=[];c(r,function(u){t.push(u)});return t}}var k={yf:a,zf:a,Af:a,Bf:a,If:a,Jf:function(r){return r},done:a,error:function(r){throw r;},Zg:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(p,u,v){var w="data-ps-"+u;if(2===arguments.length){var x=p.getAttribute(w);return b(x)?String(x):x}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function t(p,u){var v=p.ownerDocument;e(this,{root:p,options:u,sb:v.defaultView||v.parentWindow,Ja:v,Yb:cc("",{Hf:!0}),Ec:[p],bd:"",cd:v.createElement(p.nodeName),ob:[],za:[]});r(this.cd,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.za,arguments);for(var p;!this.Lb&&this.za.length;)p=this.za.shift(),"function"===typeof p?this.Of(p):this.od(p)};t.prototype.Of=function(p){var u={type:"function",value:p.name||p.toString()};this.Yc(u);p.call(this.sb,this.Ja);this.Be(u)};
t.prototype.od=function(p){this.Yb.append(p);for(var u,v=[],w,x;(u=this.Yb.Wg())&&!(w=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(x=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.rh(v);w&&this.lg(u);x&&this.mg(u)};t.prototype.rh=function(p){var u=this.Lf(p);u.ce&&(u.Oc=this.bd+u.ce,this.bd+=u.Sg,this.cd.innerHTML=u.Oc,this.oh())};t.prototype.Lf=function(p){var u=this.Ec.length,v=[],w=[],x=[];c(p,function(y){v.push(y.text);if(y.N){if(!/^noscript$/i.test(y.tagName)){var B=
u++;w.push(y.text.replace(/(\/?>)/," data-ps-id="+B+" $1"));"ps-script"!==y.N.id&&"ps-style"!==y.N.id&&x.push("atomicTag"===y.type?"":"<"+y.tagName+" data-ps-proxyof="+B+(y.rb?" />":">"))}}else w.push(y.text),x.push("endTag"===y.type?y.text:"")});return{Qh:p,raw:v.join(""),ce:w.join(""),Sg:x.join("")}};t.prototype.oh=function(){for(var p,u=[this.cd];b(p=u.shift());){var v=1===p.nodeType;if(!v||!r(p,"proxyof")){v&&(this.Ec[r(p,"id")]=p,r(p,"id",null));var w=p.parentNode&&r(p.parentNode,"proxyof");
w&&this.Ec[w].appendChild(p)}u.unshift.apply(u,h(p.childNodes))}};t.prototype.lg=function(p){var u=this.Yb.clear();u&&this.za.unshift(u);p.src=p.N.src||p.N.yh;p.src&&this.ob.length?this.Lb=p:this.Yc(p);var v=this;this.qh(p,function(){v.Be(p)})};t.prototype.mg=function(p){var u=this.Yb.clear();u&&this.za.unshift(u);p.type=p.N.type||p.N.zh||"text/css";this.sh(p);u&&this.write()};t.prototype.sh=function(p){var u=this.Nf(p);this.qg(u);p.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=p.content:
u.appendChild(this.Ja.createTextNode(p.content)))};t.prototype.Nf=function(p){var u=this.Ja.createElement(p.tagName);u.setAttribute("type",p.type);d(p.N,function(v,w){u.setAttribute(v,w)});return u};t.prototype.qg=function(p){this.od('<span id="ps-style"/>');var u=this.Ja.getElementById("ps-style");u.parentNode.replaceChild(p,u)};t.prototype.Yc=function(p){p.Jg=this.za;this.za=[];this.ob.unshift(p)};t.prototype.Be=function(p){p!==this.ob[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.ob.shift(),this.write.apply(this,p.Jg),!this.ob.length&&this.Lb&&(this.Yc(this.Lb),this.Lb=null))};t.prototype.qh=function(p,u){var v=this.Mf(p),w=this.fh(v),x=this.options.yf;p.src&&(v.src=p.src,this.dh(v,w?x:function(){u();x()}));try{this.pg(v),p.src&&!w||u()}catch(y){this.options.error(y),u()}};t.prototype.Mf=function(p){var u=this.Ja.createElement(p.tagName);d(p.N,function(v,w){u.setAttribute(v,w)});p.content&&(u.text=p.content);return u};t.prototype.pg=function(p){this.od('<span id="ps-script"/>');
var u=this.Ja.getElementById("ps-script");u.parentNode.replaceChild(p,u)};t.prototype.dh=function(p,u){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),u())},onerror:function(){var x={message:"remote script failed "+p.src};v();w(x);u()}})};t.prototype.fh=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.Zg&&p.src&&p.hasAttribute("async"))};
return t}();l.postscribe=function(){function r(){var w=u.shift(),x;w&&(x=w[w.length-1],x.zf(),w.stream=t.apply(null,w),x.Af())}function t(w,x,y){function B(H){H=y.Jf(H);v.write(H);y.Bf(H)}v=new n(w,y);v.id=p++;v.name=y.name||v.id;var z=w.ownerDocument,A={close:z.close,open:z.open,write:z.write,writeln:z.writeln};e(z,{close:a,open:a,write:function(){return B(h(arguments).join(""))},writeln:function(){return B(h(arguments).join("")+"\n")}});var E=v.sb.onerror||a;v.sb.onerror=function(H,K,R){y.error({Jh:H+
" - "+K+":"+R});E.apply(v.sb,arguments)};v.write(x,function(){e(z,A);v.sb.onerror=E;y.done();v=null;r()});return v}var p=0,u=[],v=null;return e(function(w,x,y){"function"===typeof y&&(y={done:y});y=f(y,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.Ih?w[0]:w;var B=[w,x,y];w.Ng={cancel:function(){B.stream?B.stream.abort():B[1]=a}};y.If(B);u.push(B);v||r();return w.Ng},{streams:{},Lh:u,Ch:n})}();dc=l.postscribe}})();var F=window,G=document,ec=navigator,fc=G.currentScript&&G.currentScript.src,gc=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},hc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ic=function(a,b,c){var d=G.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;hc(d,b);c&&(d.onerror=c);var e;if(null===na)b:{var f=ka.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&la.test(k)){na=k;break b}}na=""}e=na;e&&d.setAttribute("nonce",e);var l=G.getElementsByTagName("script")[0]||G.body||G.head;l.parentNode.insertBefore(d,l);return d},jc=function(){if(fc){var a=fc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},kc=function(a,b){var c=G.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=G.body&&G.body.lastChild||
G.body||G.head;d.parentNode.insertBefore(c,d);hc(c,b);void 0!==a&&(c.src=a);return c},lc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},mc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},nc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){F.setTimeout(a,0)},oc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},pc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},qc=function(a){var b=G.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},rc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},tc=function(a){ec.sendBeacon&&ec.sendBeacon(a)||lc(a)},uc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var wc=function(a){return vc?G.querySelectorAll(a):null},xc=function(a,b){if(!vc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!G.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yc=!1;if(G.querySelectorAll)try{var zc=G.querySelectorAll(":root");zc&&1==zc.length&&zc[0]==G.documentElement&&(yc=!0)}catch(a){}var vc=yc;var J={ra:"_ee",Ah:"_uci",uc:"event_callback",xb:"event_timeout",C:"gtag.config",X:"allow_ad_personalization_signals",vc:"restricted_data_processing",Sa:"allow_google_signals",Y:"cookie_expires",wb:"cookie_update",Ta:"session_duration",ca:"user_properties"};J.pe=[J.X,J.Sa,J.wb];J.se=[J.Y,J.xb,J.Ta];var Qc=/[A-Z]+/,Rc=/\s/,Sc=function(a){if(g(a)&&(a=Ca(a),!Rc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Qc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],o:d}}}}},Uc=function(a){for(var b={},c=0;c<a.length;++c){var d=Sc(a[c]);d&&(b[d.id]=d)}Tc(b);var e=[];C(b,function(f,h){e.push(h)});return e};
function Tc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.o[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Vc={},Wc=null,Xc=Math.random();Vc.s="GTM-MPHNMQ";Vc.Cb="3i0";var Yc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Zc="www.googletagmanager.com/gtm.js";var ad=Zc,bd=null,cd=null,dd=null,ed="//www.googletagmanager.com/a?id="+Vc.s+"&cv=192",fd={},gd={},hd=function(){var a=Wc.sequence||0;Wc.sequence=a+1;return a};var id={},jd=function(a,b){id[a]=id[a]||[];id[a][b]=!0},kd=function(a){for(var b=[],c=id[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var ld=function(){return"&tc="+sb.filter(function(a){return a}).length},od=function(){md||(md=F.setTimeout(nd,500))},nd=function(){md&&(F.clearTimeout(md),md=void 0);void 0===pd||qd[pd]&&!rd&&!sd||(td[pd]||ud.wg()||0>=vd--?(jd("GTM",1),td[pd]=!0):(ud.Xg(),lc(wd()),qd[pd]=!0,xd=yd=sd=rd=""))},wd=function(){var a=pd;if(void 0===a)return"";var b=kd("GTM"),c=kd("TAGGING");return[zd,qd[a]?"":"&es=1",Ad[a],b?"&u="+b:"",c?"&ut="+c:"",ld(),rd,sd,yd,xd,"&z=0"].join("")},Bd=function(){return[ed,"&v=3&t=t",
"&pid="+wa(),"&rv="+Vc.Cb].join("")},Cd="0.005000">Math.random(),zd=Bd(),Dd=function(){zd=Bd()},qd={},rd="",sd="",xd="",yd="",pd=void 0,Ad={},td={},md=void 0,ud=function(a,b){var c=0,d=0;return{wg:function(){if(c<a)return!1;Ea()-d>=b&&(c=0);return c>=a},Xg:function(){Ea()-d>=b&&(c=0);c++;d=Ea()}}}(2,1E3),vd=1E3,Ed=function(a,b){if(Cd&&!td[a]&&pd!==a){nd();pd=a;xd=rd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Ad[a]="&e="+c+"&eid="+a;od()}},Fd=function(a,b,c){if(Cd&&
!td[a]&&b){a!==pd&&(nd(),pd=a);var d,e=String(b[Fb.sa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;rd=rd?rd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(ub[h]?"1":"2")+d;xd=xd?xd+"."+k:"&ti="+k;od();2022<=wd().length&&nd()}},Gd=function(a,b,c){if(Cd&&!td[a]){a!==pd&&(nd(),pd=a);var d=c+b;sd=
sd?sd+"."+d:"&epr="+d;od();2022<=wd().length&&nd()}};var Hd={},Id=new xa,Jd={},Kd={},Nd={name:"dataLayer",set:function(a,b){D(Ka(a,b),Jd);Ld()},get:function(a){return Md(a,2)},reset:function(){Id=new xa;Jd={};Ld()}},Md=function(a,b){if(2!=b){var c=Id.get(a);if(Cd){var d=Od(a);c!==d&&jd("GTM",5)}return c}return Od(a)},Od=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Qd(d)},Qd=function(a){for(var b=Jd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Sd=function(a,b){Kd.hasOwnProperty(a)||(Id.set(a,b),D(Ka(a,b),Jd),Ld())},Ld=function(a){C(Kd,function(b,c){Id.set(b,c);D(Ka(b,void 0),Jd);D(Ka(b,c),Jd);a&&delete Kd[b]})},Td=function(a,b,c){Hd[a]=Hd[a]||{};var d=1!==c?Od(b):Id.get(b);"array"===Na(d)||"object"===Na(d)?Hd[a][b]=D(d):Hd[a][b]=d},Ud=function(a,b){if(Hd[a])return Hd[a][b]},Vd=function(a,b){Hd[a]&&delete Hd[a][b]};var Wd=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Xd()||d||"http:"!=F.location.protocol?a:b)+c},Xd=function(){var a=jc(),b;if(1===a)a:{var c=ad;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=G.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var le=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),me={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ne={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},oe="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var qe=function(a){var b=Md("gtm.whitelist");b&&jd("GTM",9);var c=b&&Ja(Ba(b),me),d=Md("gtm.blacklist");d||(d=Md("tagTypeBlacklist"))&&jd("GTM",3);
d?jd("GTM",8):d=[];pe()&&(d=Ba(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=q(Ba(d),"google")&&jd("GTM",2);var e=d&&Ja(Ba(d),ne),f={};return function(h){var k=h&&h[Fb.sa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=gd[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>q(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>q(c,l[r])){jd("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=q(e,k);if(p)t=p;else{var u=ya(e,l||[]);u&&jd("GTM",10);t=u}}var v=!m||t;v||!(0<=q(l,"sandboxedScripts"))||c&&-1!==q(c,"sandboxedScripts")||(v=ya(e,oe));return f[k]=v}},pe=function(){return le.test(F.location&&F.location.hostname)};var re={Tf:function(a,b){b[Fb.vd]&&"string"===typeof a&&(a=1==b[Fb.vd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Fb.xd)&&null===a&&(a=b[Fb.xd]);b.hasOwnProperty(Fb.zd)&&void 0===a&&(a=b[Fb.zd]);b.hasOwnProperty(Fb.yd)&&!0===a&&(a=b[Fb.yd]);b.hasOwnProperty(Fb.wd)&&!1===a&&(a=b[Fb.wd]);return a}};var se={active:!0,isWhitelisted:function(){return!0}},te=function(a){var b=Wc.zones;!b&&a&&(b=Wc.zones=a());return b};var ue=function(){};var ve=!1,we=0,xe=[];function ye(a){if(!ve){var b=G.createEventObject,c="complete"==G.readyState,d="interactive"==G.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ve=!0;for(var e=0;e<xe.length;e++)I(xe[e])}xe.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function ze(){if(!ve&&140>we){we++;try{G.documentElement.doScroll("left"),ye()}catch(a){F.setTimeout(ze,50)}}}var Ae=function(a){ve?a():xe.push(a)};var Be={},Ce={},De=function(a,b,c,d){if(!Ce[a]||Yc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=D(d,e));e.id=c;e.status="timeout";return Ce[a].tags.push(e)-1},Ee=function(a,b,c,d){if(Ce[a]){var e=Ce[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Fe(a){for(var b=Be[a]||[],c=0;c<b.length;c++)b[c]();Be[a]={push:function(d){d(Vc.s,Ce[a])}}}
var Ie=function(a,b,c){Ce[a]={tags:[]};pa(b)&&Ge(a,b);c&&F.setTimeout(function(){return Fe(a)},Number(c));return He(a)},Ge=function(a,b){Be[a]=Be[a]||[];Be[a].push(Ga(function(){return I(function(){b(Vc.s,Ce[a])})}))};function He(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ga(function(){b++;d&&b>=c&&Fe(a)})},Ff:function(){d=!0;b>=c&&Fe(a)}}};var Je=function(){function a(d){return!qa(d)||0>d?0:d}if(!Wc._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=qa(Nd.get("gtm.start"))?Nd.get("gtm.start"):0;Wc._li={cst:a(c-b),cbt:a(cd-b)}}};var Ne={},Oe=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},Pe=!1;
var Qe=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||jd("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}Je();return F[b]},Re=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Oe();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Te=function(a){},Se=function(){return F.GoogleAnalyticsObject||"ga"};var Ve=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var We=/:[0-9]+$/,Xe=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},$e=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ye(a.protocol)||Ye(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||F.location.hostname).replace(We,"").toLowerCase());var f=b,h,k=Ye(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=Ze(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(We,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||jd("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=q(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Xe(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Ye=function(a){return a?a.replace(":","").toLowerCase():""},Ze=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
af=function(a){var b=G.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||jd("TAGGING",1),c="/"+c);var d=b.hostname.replace(We,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function ff(a,b,c,d){var e=sb[a],f=gf(a,b,c,d);if(!f)return null;var h=Bb(e[Fb.Pd],c,[]);if(h&&h.length){var k=h[0];f=ff(k.index,{B:f,w:1===k.ke?b.terminate:f,terminate:b.terminate},c,d)}return f}
function gf(a,b,c,d){function e(){if(f[Fb.af])k();else{var w=Cb(f,c,[]),x=De(c.id,String(f[Fb.sa]),Number(f[Fb.Rd]),w[Fb.bf]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var A=Ea()-z;Fd(c.id,sb[a],"5");Ee(c.id,x,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var A=Ea()-z;Fd(c.id,sb[a],"6");Ee(c.id,x,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Fd(c.id,f,"1");var B=function(){var A=Ea()-z;Fd(c.id,f,"7");Ee(c.id,x,"exception",A);y||(y=!0,k())};var z=Ea();try{Ab(w,c)}catch(A){B(A)}}}var f=sb[a],h=b.B,k=b.w,l=b.terminate;if(c.Qc(f))return null;var m=Bb(f[Fb.Sd],c,[]);if(m&&m.length){var n=m[0],r=ff(n.index,{B:h,w:k,terminate:l},c,d);if(!r)return null;h=r;k=2===n.ke?l:r}if(f[Fb.Hd]||f[Fb.ff]){var t=f[Fb.Hd]?tb:c.gh,p=h,u=k;if(!t[a]){e=Ga(e);var v=hf(a,t,e);h=v.B;k=v.w}return function(){t[a](p,u)}}return e}
function hf(a,b,c){var d=[],e=[];b[a]=jf(d,e,c);return{B:function(){b[a]=kf;for(var f=0;f<d.length;f++)d[f]()},w:function(){b[a]=lf;for(var f=0;f<e.length;f++)e[f]()}}}function jf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function kf(a){a()}function lf(a,b){b()};var of=function(a,b){for(var c=[],d=0;d<sb.length;d++)if(a.mb[d]){var e=sb[d];var f=b.add();try{var h=ff(d,{B:f,w:f,terminate:f},a,d);h?c.push({Je:d,Ee:Db(e),dg:h}):(mf(d,a),f())}catch(l){f()}}b.Ff();c.sort(nf);for(var k=0;k<c.length;k++)c[k].dg();return 0<c.length};function nf(a,b){var c,d=b.Ee,e=a.Ee;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Je,k=b.Je;f=h>k?1:h<k?-1:0}return f}
function mf(a,b){if(!Cd)return;var c=function(d){var e=b.Qc(sb[d])?"3":"4",f=Bb(sb[d][Fb.Pd],b,[]);f&&f.length&&c(f[0].index);Fd(b.id,sb[d],e);var h=Bb(sb[d][Fb.Sd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var pf=!1,qf=function(a,b,c,d,e){if("gtm.js"==b){if(pf)return!1;pf=!0}Ed(a,b);var f=Ie(a,d,e);Td(a,"event",1);Td(a,"ecommerce",1);Td(a,"gtm");var h={id:a,name:b,Qc:qe(c),mb:[],gh:[],xe:function(){jd("GTM",6)}};h.mb=Kb(h);var k=of(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Te(Vc.s);if(!k)return k;for(var l=0;l<h.mb.length;l++)if(h.mb[l]){var m=sb[l];if(m&&!Yc[String(m[Fb.sa])])return!0}return!1};var sf=/^https?:\/\/www\.googletagmanager\.com/;function tf(){var a;return a}function vf(a,b){}
function uf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function wf(){var a=!1;return a};var xf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.B=function(){};this.w=function(){}},yf=function(a){var b=new xf;b.eventModel=a;return b},zf=function(a,b){a.targetConfig=b;return a},Af=function(a,b){a.containerConfig=b;return a},Bf=function(a,b){a.h=b;return a},Cf=function(a,b){a.globalConfig=b;return a},Df=function(a,b){a.B=b;return a},Ef=function(a,b){a.w=b;return a};
xf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Ff=function(a){function b(e){C(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];C(c,function(e){d.push(e)});return d};var Gf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Jf=function(a,b,c,d){var e=Hf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=If(e,function(f){return f.Mb},b);if(1===e.length)return e[0].id;e=If(e,function(f){return f.nb},c);return e[0]?e[0].id:void 0}};
function Kf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Gf(b,e).indexOf(c)}
var Nf=function(a,b,c,d,e,f,h){d=d||"auto";var k={path:c||"/"};e&&(k.expires=e);"none"!==d&&(k.domain=d);h&&(k.flags=h);var l;a:{var m=b,n;if(void 0==m)n=a+"=deleted; expires="+(new Date(0)).toUTCString();else{f&&(m=encodeURIComponent(m));var r=m;r&&1200<r.length&&(r=r.substring(0,1200));m=r;n=a+"="+m}var t=void 0,p=void 0,u="",v;for(v in k)if(k.hasOwnProperty(v)){var w=k[v];if(null!=w)switch(v){case "secure":w&&(n+="; secure");break;case "domain":t=w;break;case "flags":u=";"+w;break;default:"path"==
v&&(p=w),"expires"==v&&w instanceof Date&&(w=w.toUTCString()),n+="; "+v+"="+w}}if("auto"===t){for(var x=Lf(),y=0;y<x.length;++y){var B="none"!=x[y]?x[y]:void 0;if(!Mf(B,p)&&Kf(n+(B?"; domain="+B:"")+u,a,m)){l=!0;break a}}l=!1}else t&&"none"!=t&&(n+="; domain="+t),l=!Mf(t,p)&&Kf(n+u,a,m)}return l};function If(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}
function Hf(a,b){for(var c=[],d=Gf(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Mb:1*k[0]||1,nb:1*k[1]||1}))}}return c}
var Of=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Pf=/(^|\.)doubleclick\.net$/i,Mf=function(a,b){return Pf.test(document.location.hostname)||"/"===b&&Of.test(a)},Lf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Pf.test(e)||Of.test(e)||a.push("none");return a};function Qf(){for(var a=Rf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Sf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Rf,Tf;function Uf(a){Rf=Rf||Sf();Tf=Tf||Qf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(Rf[l],Rf[m],Rf[n],Rf[r])}return b.join("")}
function Vf(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Tf[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Rf=Rf||Sf();Tf=Tf||Qf();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Wf;var ag=function(){var a=Xf,b=Yf,c=$f(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){mc(G,"mousedown",d);mc(G,"keyup",d);mc(G,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},bg=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};$f().decorators.push(f)},cg=function(a,b,c){for(var d=$f().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==G.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var r=h.placement;void 0==r&&(r=h.fragment?2:1);r===b&&Ha(e,h.callback())}}return e},$f=function(){var a=gc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var dg=/(.*?)\*(.*?)\*(.*)/,eg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,fg=/^(?:www\.|m\.|amp\.)+/,gg=/([^?#]+)(\?[^#]*)?(#.*)?/;function hg(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var jg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Uf(String(d))))}var e=b.join("*");return["1",ig(e),e].join("*")},ig=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Wf)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Wf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Wf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},lg=function(){return function(a){var b=af(F.location.href),c=b.search.replace("?",""),d=Xe(c,"_gl",!0)||"";a.query=kg(d)||{};var e=$e(b,"fragment").match(hg("_gl"));a.fragment=kg(e&&e[3]||"")||{}}},mg=function(){var a=lg(),b=$f();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ha(c,d.query),Ha(c,d.fragment));return c},kg=function(a){var b;
b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=dg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===ig(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)r[t[p]]=Vf(t[p+1]);return r}}}}catch(u){}};
function ng(a,b,c,d){function e(n){var r=n,t=hg(a).exec(r),p=r;if(t){var u=t[2],v=t[4];p=t[1];v&&(p=p+u+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=gg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function og(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=cg(b,1,c),e=cg(b,2,c),f=cg(b,3,c);if(Ia(d)){var h=jg(d);c?pg("_gl",h,a):qg("_gl",h,a,!1)}if(!c&&Ia(e)){var k=jg(e);qg("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){qg(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){pg(m,n,r);break a}}"string"==typeof r&&ng(m,n,r,void 0)}}
function qg(a,b,c,d){if(c.href){var e=ng(a,b,c.href,void 0===d?!1:d);Ve.test(e)&&(c.href=e)}}
function pg(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=G.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=ng(a,b,c.action);Ve.test(m)&&(c.action=m)}}}
var Xf=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||og(e,e.hostname)}}catch(h){}},Yf=function(a){try{if(a.action){var b=$e(af(a.action),"host");og(a,b)}}catch(c){}},rg=function(a,b,c,d){ag();bg(a,b,"fragment"===c?2:1,!!d,!1)},sg=function(a){ag();bg(a,[F.location.hostname],3,!0,!0)},tg=function(){var a=G.location.hostname,b=eg.exec(G.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(fg,""),l=e.replace(fg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},ug=function(a,b){return!1===a?!1:a||b||tg()};var vg={};var wg=/^\w+$/,xg=/^[\w-]+$/,yg=/^~?[\w-]+$/,zg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Ag(a){return a&&"string"==typeof a&&a.match(wg)?a:"_gcl"}
var Cg=function(){var a=af(F.location.href),b=$e(a,"query",!1,void 0,"gclid"),c=$e(a,"query",!1,void 0,"gclsrc"),d=$e(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Xe(e,"gclid",void 0);c=c||Xe(e,"gclsrc",void 0)}return Bg(b,c,d)},Bg=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(xg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==
vg.gtm_3pds?0:vg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Eg=function(a){var b=Cg();Dg(b,a)};
function Dg(a,b,c){function d(r,t){var p=Fg(r,e);p&&Nf(p,t,h,f,l,!0)}b=b||{};var e=Ag(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Ma?7776E3:b.Ma;c=c||Ea();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(r){return["GCL",m,r].join(".")};a.aw&&(!0===b.Rh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Hg=function(a,b,c,d,e){for(var f=mg(),h=Ag(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==zg[l]){var m=Fg(l,h),n=f[m];if(n){var r=Math.min(Gg(n),Ea()),t;b:{for(var p=r,u=Gf(m,G.cookie),v=0;v<u.length;++v)if(Gg(u[v])>p){t=!0;break b}t=!1}t||Nf(m,n,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Dg(Bg(f.gclid,f.gclsrc),w)},Fg=function(a,b){var c=zg[a];if(void 0!==c)return b+c},Gg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Ig(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Jg=function(a,b,c,d,e){if(ra(b)){var f=Ag(e);rg(function(){for(var h={},k=0;k<a.length;++k){var l=Fg(a[k],f);if(l){var m=Gf(l,G.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Kg=function(a){return a.filter(function(b){return yg.test(b)})},Lg=function(a,b){for(var c=Ag(b&&b.prefix),d={},e=0;e<a.length;e++)zg[a[e]]&&(d[a[e]]=zg[a[e]]);C(d,function(f,h){var k=Gf(c+h,G.cookie);if(k.length){var l=k[0],m=Gg(l),n={};n[f]=[Ig(l)];Dg(n,b,m)}})},Mg=function(){var a=["","aw.ds"],b=Cg(),
c=b.gclid,d=b.gclsrc||"";c&&-1!==a.indexOf(d)&&sg(function(){var e={gclid:c};d&&(e.gclsrc=d);return e})};function Ng(){var a=Cg(),b=a.gclid,c=a.gclsrc;if(b&&(!c||"aw.ds"===c)){var d;Wc.reported_gclid||(Wc.reported_gclid={});d=Wc.reported_gclid;if(!d[b]){d[b]=!0;var e="/pagead/landing?gclid="+encodeURIComponent(b);c&&(e+="&gclsrc="+encodeURIComponent(c));tc("https://www.google.com"+e)}}};var Og;if(3===Vc.Cb.length)Og="g";else{var Pg="G";Og=Pg}
var Qg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Og,OPT:"o"},Rg=function(a){var b=Vc.s.split("-"),c=b[0].toUpperCase(),d=Qg[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Vc.Cb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Vc.Cb+e};var ah=function(){for(var a=ec.userAgent+(G.cookie||"")+(G.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ea()/1E3)].join(".")},dh=function(a,b,c,d){var e=bh(b);return Jf(a,e,ch(c),d)},eh=function(a,b,c,d){var e=""+bh(c),f=ch(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},bh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},ch=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var fh=["1"],gh={},kh=function(a,b,c,d){var e=hh(a);gh[e]||ih(e,b,c)||(jh(e,ah(),b,c,d),ih(e,b,c))};function jh(a,b,c,d,e){var f=eh(b,"1",d,c);Nf(a,f,c,d,0==e?void 0:new Date(Ea()+1E3*(void 0==e?7776E3:e)))}function ih(a,b,c){var d=dh(a,b,c,fh);d&&(gh[a]=d);return d}function hh(a){return(a||"_gcl")+"_au"};var lh=function(){for(var a=[],b=G.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({jd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].jd]||(f[a[h].jd]=[]),f[a[h].jd].push({timestamp:k[1],gg:k[2]}))}return f};var mh=/^\d+\.fls\.doubleclick\.net$/;function nh(a){var b=af(F.location.href),c=$e(b,"host",!1);if(c&&c.match(mh)){var d=$e(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function oh(a,b){if("aw"==a||"dc"==a){var c=nh("gcl"+a);if(c)return c.split(".")}var d=Ag(b);if("_gcl"==d){var e;e=Cg()[a]||[];if(0<e.length)return e}var f=Fg(a,d),h;if(f){var k=[];if(G.cookie){var l=Gf(f,G.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Ig(l[m]);n&&-1===q(k,n)&&k.push(n)}h=Kg(k)}else h=k}else h=k}else h=[];return h}
var ph=function(){var a=nh("gac");if(a)return decodeURIComponent(a);var b=lh(),c=[];C(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].gg);f=Kg(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},qh=function(a,b,c,d,e){kh(b,c,d,e);var f=gh[hh(b)],h=Cg().dc||[],k=!1;if(f&&0<h.length){var l=Wc.joined_au=Wc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var r="https://adservice.google.com/ddm/regclk";r=r+"?gclid="+h[n]+"&auiddc="+f;tc(r);k=l[m]=!0}}null==a&&(a=k);if(a&&f){var t=
hh(b),p=gh[t];p&&jh(t,p,c,d,e)}};var ii={},ji=["G","GP"];ii.Ke="";var ki=ii.Ke.split(",");function li(){var a=Wc;return a.gcq=a.gcq||new mi}
var ni=function(a,b,c){li().register(a,b,c)},oi=function(a,b,c,d){li().push("event",[b,a],c,d)},pi=function(a,b){li().push("config",[a],b)},qi={},ri=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},si=function(a,b,c,d,e){this.type=a;this.m=b;this.U=c||"";this.h=d;this.i=e},mi=function(){this.i={};this.m={};this.h=[]},ti=function(a,b){var c=Sc(b);return a.i[c.containerId]=a.i[c.containerId]||new ri},ui=function(a,b,c,d){if(d.U){var e=ti(a,d.U),
f=e.m;if(f){var h=D(c),k=D(e.targetConfig[d.U]),l=D(e.containerConfig),m=D(e.i),n=D(a.m),r=Md("gtm.uniqueEventId"),t=Sc(d.U).prefix,p=Ef(Df(Cf(Bf(Af(zf(yf(h),k),l),m),n),function(){Gd(r,t,"2");}),function(){Gd(r,t,"3");});try{Gd(r,t,"1");f(d.U,b,d.m,p)}catch(u){
Gd(r,t,"4");}}}};
mi.prototype.register=function(a,b,c){if(3!==ti(this,a).status){ti(this,a).m=b;ti(this,a).status=3;c&&(ti(this,a).i=c);var d=Sc(a),e=qi[d.containerId];if(void 0!==e){var f=Wc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Wc[d.containerId]._spx&&(h=h.toLowerCase());var k=Md("gtm.uniqueEventId"),l=h,m=Ea()-f;if(Cd&&!td[k]){k!==pd&&(nd(),pd=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);yd=yd?yd+","+n:"&cl="+n}delete qi[d.containerId]}this.flush()}};
mi.prototype.push=function(a,b,c,d){var e=Math.floor(Ea()/1E3);a:if(c){var f=Sc(c),h;if(h=f){var k;if(k=1===ti(this,c).status)b:{var l=f.prefix;k=!0}h=k}if(h)if(ti(this,c).status=2,this.push("require",[],f.containerId),qi[f.containerId]=Ea(),Wd()){}else{var n=encodeURIComponent(f.containerId),r=("http:"!=F.location.protocol?"https:":"http:")+"//www.googletagmanager.com";
ic(r+"/gtag/js?id="+n+"&l=dataLayer&cx=c")}}this.h.push(new si(a,e,c,b,d));d||this.flush()};
mi.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==ti(this,c.U).status&&!a)return;break;case "set":C(c.h[0],function(l,m){D(Ka(l,m),b.m)});break;case "config":var d=c.h[0],e=!!d[J.Ub];delete d[J.Ub];var f=ti(this,c.U),h=Sc(c.U),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.U]={});f.h&&e||ui(this,J.C,d,c);f.h=!0;delete d[J.ra];k?D(d,f.containerConfig):D(d,f.targetConfig[c.U]);break;
case "event":ui(this,c.h[1],c.h[0],c)}this.h.shift()}};var vi=["GP","G"],wi="G".split(/,/);wi.push("HA");var xi=!1;xi=!0;var yi=null,zi={},Ai={},Bi;function Ci(a,b){var c={event:a};b&&(c.eventModel=D(b),b[J.uc]&&(c.eventCallback=b[J.uc]),b[J.xb]&&(c.eventTimeout=b[J.xb]));return c}
var Ii={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=Ci(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Pa(a[1])?b=D(a[1]):3==a.length&&
g(a[1])&&(b={},Pa(a[2])||ra(a[2])?b[a[1]]=D(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Ji={policy:!0};var Ki=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Mi=function(a){var b=Li(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Ni=!1,Oi=[];function Pi(){if(!Ni){Ni=!0;for(var a=0;a<Oi.length;a++)I(Oi[a])}}var Qi=function(a){Ni?I(a):Oi.push(a)};var fj=function(a){if(ej(a))return a;this.h=a};fj.prototype.kg=function(){return this.h};var ej=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};fj.prototype.getUntrustedUpdateValue=fj.prototype.kg;var gj=[],hj=!1,ij=function(a){return F["dataLayer"].push(a)},jj=function(a){var b=Wc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function kj(a){var b=a._clear;C(a,function(f,h){"_clear"!==f&&(b&&Sd(f,void 0),Sd(f,h))});bd||(bd=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=hd(),a["gtm.uniqueEventId"]=d,Sd("gtm.uniqueEventId",d));dd=c;var e=lj(a);
dd=null;switch(c){case "gtm.init":jd("GTM",19),e&&jd("GTM",20)}return e}function lj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Wc.zones;d=e?e.checkState(Vc.s,c):se;return d.active?qf(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function mj(){for(var a=!1;!hj&&0<gj.length;){hj=!0;delete Jd.eventModel;Ld();var b=gj.shift();if(null!=b){var c=ej(b);if(c){var d=b;b=ej(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Md(h,1);if(ra(k)||Pa(k))k=D(k);Kd[h]=k}}try{if(pa(b))try{b.call(Nd)}catch(v){}else if(ra(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),t=Md(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var u=Ii[b[0]];if(u&&(!c||!Ji[b[0]])){b=u(b);break a}}b=void 0}if(!b){hj=!1;continue}}a=kj(b)||a}}finally{c&&Ld(!0)}}hj=!1}
return!a}function nj(){var a=mj();try{Ki(F["dataLayer"],Vc.s)}catch(b){}return a}
var pj=function(){var a=gc("dataLayer",[]),b=gc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ae(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Qi(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Wc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new fj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);gj.push.apply(gj,d);if(300<
this.length)for(jd("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return mj()&&h};gj.push.apply(gj,a.slice(0));oj()&&I(nj)},oj=function(){var a=!0;return a};var qj={};qj.yb=new String("undefined");
var rj=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===qj.yb?b:a[d]);return c.join("")}};rj.prototype.toString=function(){return this.h("undefined")};rj.prototype.valueOf=rj.prototype.toString;qj.sf=rj;qj.Cc={};qj.Wf=function(a){return new rj(a)};var sj={};qj.Yg=function(a,b){var c=hd();sj[c]=[a,b];return c};qj.fe=function(a){var b=a?0:1;return function(c){var d=sj[c];if(d&&"function"===typeof d[b])d[b]();sj[c]=void 0}};qj.ug=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};qj.Og=function(a){if(a===qj.yb)return a;var b=hd();qj.Cc[b]=a;return'google_tag_manager["'+Vc.s+'"].macro('+b+")"};qj.Eg=function(a,b,c){a instanceof qj.sf&&(a=a.h(qj.Yg(b,c)),b=oa);return{Oc:a,B:b}};var tj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||oc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},uj=function(a){Wc.hasOwnProperty("autoEventsSettings")||(Wc.autoEventsSettings={});var b=Wc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},vj=function(a,b,c){uj(a)[b]=c},wj=function(a,b,c,d){var e=uj(a),f=Fa(e,b,d);e[b]=c(f)},xj=function(a,b,c){var d=uj(a);return Fa(d,b,c)};var yj=["input","select","textarea"],zj=["button","hidden","image","reset","submit"],Aj=function(a){var b=a.tagName.toLowerCase();return!va(yj,function(c){return c===b})||"input"===b&&va(zj,function(c){return c===a.type.toLowerCase()})?!1:!0},Bj=function(a){return a.form?a.form.tagName?a.form:G.getElementById(a.form):rc(a,["form"],100)},Cj=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(Aj(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Dj=!!F.MutationObserver,Ej=void 0,Fj=function(a){if(!Ej){var b=function(){var c=G.body;if(c)if(Dj)(new MutationObserver(function(){for(var e=0;e<Ej.length;e++)I(Ej[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;mc(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<Ej.length;e++)I(Ej[e])}))})}};Ej=[];G.body?b():I(b)}Ej.push(a)};
var Qj=function(){var a=G.body,b=G.documentElement||a&&a.parentElement,c,d;if(G.compatMode&&"BackCompat"!==G.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};jd("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Rj=function(a){var b=Qj(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Sj=function(a){if(G.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,null))}return!1};var Tj=[],Uj=!(!F.IntersectionObserver||!F.IntersectionObserverEntry),Vj=function(a,b,c){for(var d=new F.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Tj.length;f++)if(!Tj[f])return Tj[f]=d,f;return Tj.push(d)-1},Wj=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Ea()};I(function(){return a(n)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=Rj(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},Xj=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Uj){var e=!1;I(function(){e||Wj(a,b,c)()});return Vj(function(f){e=!0;for(var h={Pa:0};h.Pa<f.length;h={Pa:h.Pa},h.Pa++)I(function(k){return function(){return a(f[k.Pa])}}(h))},b,c)}return F.setInterval(Wj(a,b,c),1E3)},Yj=function(a){Uj?0<=a&&a<Tj.length&&Tj[a]&&(Tj[a].disconnect(),Tj[a]=void 0):F.clearInterval(a)};var ak=F.clearTimeout,bk=F.setTimeout,S=function(a,b,c){if(Wd()){b&&I(b)}else return ic(a,b,c)},ck=function(){return F.location.href},dk=function(a){return $e(af(a),"fragment")},ek=function(a){return Ze(af(a))},U=function(a,b){return Md(a,b||2)},fk=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=ij(a)):d=ij(a);return d},gk=function(a,b){F[a]=b},W=function(a,b,c){b&&(void 0===F[a]||c&&!F[a])&&(F[a]=
b);return F[a]},hk=function(a,b,c){return Gf(a,b,void 0===c?!0:!!c)},ik=function(a,b){if(Wd()){b&&I(b)}else kc(a,b)},jk=function(a){return!!xj(a,"init",!1)},kk=function(a){vj(a,"init",!0)},lk=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":ad;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Q("https://","http://",c))},mk=function(a,b){var c=a[b];return c};
var nk=qj.Eg;var Kk=new xa;function Lk(a,b){function c(h){var k=af(h),l=$e(k,"protocol"),m=$e(k,"host",!0),n=$e(k,"port"),r=$e(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Mk(a){return Nk(a)?1:0}
function Nk(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ra(c)){for(var d=0;d<c.length;d++)if(Mk({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=q(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,u=Kk.get(p);u||(u=new RegExp(c,t),Kk.set(p,u));r=u.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Lk(b,
c)}return!1};var Ok=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Pk={},Qk=encodeURI,X=encodeURIComponent,Rk=lc;var Sk=function(a,b){if(!a)return!1;var c=$e(af(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Tk=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Pk.vg=function(){var a=!1;return a};var fm=function(){var a=F.gaGlobal=F.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var qm=window,rm=document,sm=function(a){var b=qm._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===qm["ga-disable-"+a])return!0;try{var c=qm.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Gf("AMP_TOKEN",rm.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return rm.getElementById("__gaOptOutExtension")?!0:!1};var vm=function(a){C(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.ca]||{};C(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var zm=function(a,b,c){oi(b,c,a)},Am=function(a,b,c){oi(b,c,a,!0)},Cm=function(a,b){};
function Bm(a,b){}var Z={a:{}};

Z.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(y){for(var B=[],z=y.split(","),A=0;A<z.length;A++){var E=Number(z[A]);if(isNaN(E))return[];n.test(z[A])||B.push(E)}return B}function c(){var y=0,B=0;return function(){var z=Qj(),A=z.height;y=Math.max(v.scrollLeft+z.width,y);B=Math.max(v.scrollTop+A,B);return{Zf:y,$f:B}}}function d(){p=W("self");
u=p.document;v=u.scrollingElement||u.body&&u.body.parentNode;x=c()}function e(y,B,z,A){var E=l(B),H={},K;for(K in E){H.Aa=K;if(E.hasOwnProperty(H.Aa)){var R=Number(H.Aa);y<R||(fk({event:"gtm.scrollDepth","gtm.scrollThreshold":R,"gtm.scrollUnits":z.toLowerCase(),"gtm.scrollDirection":A,"gtm.triggers":E[H.Aa].join(",")}),wj("sdl",B,function(Y){return function(V){delete V[Y.Aa];return V}}(H),{}))}H={Aa:H.Aa}}}function f(){var y=x(),B=y.Zf,z=y.$f,A=B/v.scrollWidth*100,E=z/v.scrollHeight*100;e(B,"horiz.pix",
r.Ab,t.Bd);e(A,"horiz.pct",r.zb,t.Bd);e(z,"vert.pix",r.Ab,t.Wd);e(E,"vert.pct",r.zb,t.Wd);vj("sdl","pending",!1)}function h(){var y=250,B=!1;u.scrollingElement&&u.documentElement&&p.addEventListener&&(y=50,B=!0);var z=0,A=!1,E=function(){A?z=bk(E,y):(z=0,f(),jk("sdl")&&!a()&&(nc(p,"scroll",H),nc(p,"resize",H),vj("sdl","init",!1)));A=!1},H=function(){B&&x();z?A=!0:(z=bk(E,y),vj("sdl","pending",!0))};return H}function k(y,B,z){if(B){var A=b(String(y));wj("sdl",z,function(E){for(var H=0;H<A.length;H++){var K=
String(A[H]);E.hasOwnProperty(K)||(E[K]=[]);E[K].push(B)}return E},{})}}function l(y){return xj("sdl",y,{})}function m(y){I(y.vtp_gtmOnSuccess);var B=y.vtp_uniqueTriggerId,z=y.vtp_horizontalThresholdsPixels,A=y.vtp_horizontalThresholdsPercent,E=y.vtp_verticalThresholdUnits,H=y.vtp_verticalThresholdsPixels,K=y.vtp_verticalThresholdsPercent;switch(y.vtp_horizontalThresholdUnits){case r.Ab:k(z,B,"horiz.pix");break;case r.zb:k(A,B,"horiz.pct")}switch(E){case r.Ab:k(H,B,"vert.pix");break;case r.zb:k(K,
B,"vert.pct")}jk("sdl")?xj("sdl","pending")||(w||(d(),w=!0),I(function(){return f()})):(d(),w=!0,v&&(kk("sdl"),vj("sdl","pending",!0),I(function(){f();if(a()){var R=h();mc(p,"scroll",R);mc(p,"resize",R)}else vj("sdl","init",!1)})))}var n=/^\s*$/,r={zb:"PERCENT",Ab:"PIXELS"},t={Wd:"vertical",Bd:"horizontal"},p,u,v,w=!1,x;(function(y){Z.__sdl=y;Z.__sdl.b="sdl";Z.__sdl.g=!0;Z.__sdl.priorityOverride=0})(function(y){y.vtp_triggerStartOption?m(y):Qi(function(){m(y)})})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;Je();S(b,function(){var d=W("google_trackConversion");if(pa(d)){var e={};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=Tk(a.vtp_customParams,
"key","value"));var f={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(f.value=a.vtp_eventValue),a.vtp_eventItems&&(f.items=a.vtp_eventItems));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:f,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Rg()};a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=a.vtp_userId);
d(h)||c()}else c()},c)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=wc(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=G.getElementById(a.vtp_elementId);b&&(d?c=oc(b,d):c=pc(b));return Ca(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Ud(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=U("gtm.referrer",1)||G.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?$e(af(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):ek(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=tj(c,"gtm.click");fk(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!jk("cl")){var c=W("document");mc(c,"click",a,!0);kk("cl")}I(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=U("gtm.url",1);c=c||ck();var d=b[a("vtp_component")];if(!d||"URL"==d)return ek(String(c));var e=af(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ra(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=$e(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=$e(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(b){return function(){if(b.Tc&&b.Vc>=b.Tc)b.Pc&&W("self").clearInterval(b.Pc);else{b.Vc++;var c=(new Date).getTime();fk({event:b.Z,"gtm.timerId":b.Pc,"gtm.timerEventNumber":b.Vc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Tc,"gtm.timerStartTime":b.Ie,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Ie,"gtm.triggers":b.kh})}}}(function(b){Z.__tl=b;Z.__tl.b="tl";Z.__tl.g=!0;Z.__tl.priorityOverride=0})(function(b){I(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{Z:b.vtp_eventName,Vc:0,interval:Number(b.vtp_interval),Tc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),kh:String(b.vtp_uniqueTriggerId||"0"),Ie:(new Date).getTime()};c.Pc=W("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;D(Tk(n.vtp_fieldsToSet,"fieldName","value"),f);D(Tk(n.vtp_contentGroup,"index","group"),h);D(Tk(n.vtp_dimension,"index","dimension"),k);D(Tk(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=D(n);d=D(d,r)}D(Tk(d.vtp_fieldsToSet,"fieldName","value"),f);D(Tk(d.vtp_contentGroup,
"index","group"),h);D(Tk(d.vtp_dimension,"index","dimension"),k);D(Tk(d.vtp_metric,"index","metric"),l);var t=Qe(d.vtp_functionName);if(pa(t)){var p="",u="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(u=d.vtp_trackerName,p=u+"."):(u="gtm"+hd(),p=u+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},x=function(O){var L=[].slice.call(arguments,0);L[0]=p+L[0];t.apply(window,L)},y=function(O,L){return void 0===L?L:O(L)},B=function(O,L){if(L)for(var ta in L)L.hasOwnProperty(ta)&&
x("set",O+ta,L[ta])},z=function(){},A=function(O,L,ta){var Ib=0;if(O)for(var Da in O)if(O.hasOwnProperty(Da)&&(ta&&v[Da]||!ta&&void 0===v[Da])){var Za=w[Da]?Aa(O[Da]):O[Da];"anonymizeIp"!=Da||Za||(Za=void 0);L[Da]=Za;Ib++}return Ib},E={name:u};A(f,
E,!0);t("create",d.vtp_trackingId||e.trackingId,E);x("set","&gtm",Rg(!0));d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(O,L){void 0!==d[L]&&x("set",O,d[L])})("nonInteraction","vtp_nonInteraction");B("contentGroup",h);B("dimension",k);B("metric",l);var H={};A(f,H,!1)&&x("set",H);var K;d.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var O=f&&f.hitCallback;pa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());var R={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||
e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(za,d.vtp_eventValue||e.value)};A(K,R,!1);x("send",R);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==
d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==
d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){t(function(){var O=
Oe(),L=U("gtm.element",1),ta=O&&O.getByName&&O.getByName(u),Ib=Ok(W("gaplugins").Linker,ta);if(L&&L.method&&"post"!=L.method.toLowerCase()){for(var Da=L.childNodes,Za=0;Za<Da.length;Za++)if("google_tag_manager_ua_cookie"==Da[Za].className){L.removeChild(Da[Za]);break}var $a=Ib.decorate(L.action)||L.action;$a=$a.split("?")[1].split("&");for(var lb=0;lb<$a.length;lb++){var wb=document.createElement("input");wb.type="hidden";wb.className="google_tag_manager_ua_cookie";var sc=$a[lb].indexOf("=");0<sc&&
(wb.name=$a[lb].slice(0,sc),wb.value=$a[lb].slice(sc+1),L.insertBefore(wb,null))}}else L&&L.action&&(L.action=Ib.decorate(L.action,d.vtp_useHashDecorateForm)||L.action,I(d.vtp_gtmOnSuccess))});}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&
(x("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var sa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:sa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ma="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:ma})}K?x("send","pageview",K):x("send","pageview");
d.vtp_autoLinkDomains&&Re(p,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);}if(!a){var ua=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ua="internal/"+ua);a=!0;var ab=Q("https:","http:","//www.google-analytics.com/"+ua,f&&f.forceSSL);
S(ab,function(){var O=Oe();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else I(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();





Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){I(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
tg())){Hg(a,h,k,l,void 0);}var m={prefix:e,path:c,domain:d,Ma:void 0};Eg(m);Lg(["aw","dc"],m);qh(f,e,c,d);var n=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var r=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),t=b.vtp_urlPosition,p=!!b.vtp_formDecoration;Jg(a,r,t,p,n);}
Ng();})}();

Z.a.aev=["google"],function(){function a(p,u){var v=Ud(p,"gtm");if(v)return v[u]}function b(p,u,v,w){w||(w="element");var x=p+"."+u,y;if(n.hasOwnProperty(x))y=n[x];else{var B=a(p,w);if(B&&(y=v(B),n[x]=y,r.push(x),35<r.length)){var z=r.shift();delete n[z]}}return y}function c(p,u,v){var w=a(p,t[u]);return void 0!==w?w:v}function d(p,u){if(!p)return!1;var v=e(ck());ra(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<u.length;x++)if(u[x]instanceof RegExp){if(u[x].test(p))return!1}else{var y=
u[x];if(0!=y.length){if(0<=e(p).indexOf(y))return!1;w.push(e(y))}}return!Sk(p,w)}function e(p){m.test(p)||(p="http://"+p);return $e(af(p),"HOST",!0)}function f(p,u,v){switch(p){case "SUBMIT_TEXT":return b(u,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(u,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(u,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return oc(p,"value");case "button":return pc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var u=0,v=0;v<p.elements.length;v++)Aj(p.elements[v])&&u++;return u}}function l(p,u,v){var w=a(p,"interactedFormField");return w&&oc(w,u)||v}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var u=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var x=a(u,"element");return x&&x.tagName||
v;case "TEXT":return b(u,w,pc)||v;case "URL":var y;a:{var B=String(a(u,"elementUrl")||v||""),z=af(B),A=String(p.vtp_component||"URL");switch(A){case "URL":y=B;break a;case "IS_OUTBOUND":y=d(B,p.vtp_affiliatedDomains);break a;default:y=$e(z,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return y;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(u,w,v);else{var H=p.vtp_attribute,K=a(u,"element");E=K&&oc(K,H)||v||""}return E;case "MD":var R=p.vtp_mdValue,Y=b(u,"MD",Mj);return R&&Y?Pj(Y,R)||
v:Y||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();

Z.a.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:ck()}function b(f,h){mc(f,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:ek(l),J:dk(l)})})}function c(f,h){mc(f,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:ek(l),J:dk(l)})})}function d(f,h,k){var l=h.history,m=l[f];if(pa(m))try{l[f]=function(n,r,t){m.apply(l,[].slice.call(arguments,0));k({source:f,state:n,url:ek(ck()),
J:dk(ck())})}}catch(n){}}function e(){var f={source:null,state:W("history").state||null,url:ek(ck()),J:dk(ck())};return function(h){var k=f,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.J!=h.J){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":f.J,"gtm.newUrlFragment":h.J,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=f.url,m["gtm.newUrl"]=h.url;
f=h;fk(m)}}}(function(f){Z.__hl=f;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=0})(function(f){var h=W("self");if(!jk("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);kk("hl")}I(f.vtp_gtmOnSuccess)})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){Je();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Rg()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,x,y){var B="DATA_LAYER"==v?U(y):k[x];B&&(l[w]=B)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items&&l.google_conversion_items.map&&(l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));var r=function(v,w){(l.google_additional_conversion_params=
l.google_additional_conversion_params||{})[v]=w},t=function(v){return function(w,x,y,B){var z="DATA_LAYER"==v?U(y):k[x];B(z)&&r(w,z)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=t(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",
function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var u=!0;u&&b.push(l);a||(a=!0,
S(p,f(),e(p)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.fsl=[],function(){function a(){var e=W("document"),f=c(),h=HTMLFormElement.prototype.submit;mc(e,"click",function(k){var l=k.target;if(l&&(l=rc(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&oc(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=G.getElementById(l.form):m=rc(l,["form"],100);m&&f.store(m,l)}},!1);mc(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,r=f.get(l),t=!0;if(d(l,function(){if(t){var p;
r&&(p=e.createElement("input"),p.type="hidden",p.name=r.name,p.value=r.value,l.appendChild(p));h.call(l);p&&l.removeChild(p)}},m,n,r))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return va(e,function(k){return k.form===
h})};return{store:function(h,k){var l=f(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,l){var m=xj("fsl",h?"nv.mwt":"mwt",0),n;n=h?xj("fsl","nv.ids",[]):xj("fsl","ids",[]);if(!n.length)return!0;var r=tj(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);r["gtm.elementUrl"]=t;l&&(r["gtm.formSubmitElement"]=l);if(k&&m){if(!fk(r,jj(f),m))return!1}else fk(r,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(r){return Math.max(k,r)};wj("fsl","mwt",m,0);h||wj("fsl","nv.mwt",m,0)}var n=function(r){r.push(l);return r};wj("fsl","ids",n,[]);h||wj("fsl","nv.ids",n,[]);jk("fsl")||(a(),kk("fsl"));I(e.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Tk(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){I(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=G.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,hc(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){I(h)}}}var b=function(d,e,f){Ae(function(){var h,k=Wc;k.postscribe||(k.postscribe=dc);h=k.postscribe;var l={done:e},m=G.createElement("div");m.style.display="none";m.style.visibility="hidden";G.body.appendChild(m);try{h(m,d,l)}catch(n){I(f)}})};var c=function(d){if(G.body){var e=
d.vtp_gtmOnFailure,f=nk(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Oc,k=f.B;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(G.body,qc(h),k,e)()}else bk(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();

Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();




Z.a.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.sg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=rc(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=xj("lcl",k?"nv.mwt":"mwt",0),m;m=k?xj("lcl","nv.ids",[]):xj("lcl","ids",[]);if(m.length){var n=tj(h,"gtm.linkClick",m);if(b(f,h,c)&&!k&&l&&h.href){var r=String(mk(h,"rel")||""),t=!!va(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&jd("GTM",36);var p=W((mk(h,"target")||"_self").substring(1)),u=!0;if(fk(n,jj(function(){var v;if(v=u&&p){var w;a:if(t){var x;try{x=new MouseEvent(f.type)}catch(y){if(!c.createEvent){w=!1;break a}x=c.createEvent("MouseEvents");x.initEvent(f.type,!0,!0)}x.sg=!0;f.target.dispatchEvent(x);w=!0}else w=!1;v=!w}v&&(p.location.href=mk(h,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else fk(n,function(){},l||2E3);return!0}}};mc(c,"click",e,!1);mc(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=mk(d,"href"),h=f.indexOf("#"),k=mk(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=ek(f),m=ek(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};wj("lcl","mwt",k,0);e||wj("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};wj("lcl","ids",l,[]);e||wj("lcl","nv.ids",l,[]);jk("lcl")||(a(),kk("lcl"));I(c.vtp_gtmOnSuccess)})}();
Z.a.evl=["google"],function(){function a(f,h){this.element=f;this.uid=h}function b(){var f=Number(U("gtm.start"))||0;return(new Date).getTime()-f}function c(f,h,k,l){function m(){if(!Sj(f.target)){h.has(e.Bb)||h.set(e.Bb,""+b());h.has(e.xc)||h.set(e.xc,""+b());var r=0;h.has(e.Db)&&(r=Number(h.get(e.Db)));r+=100;h.set(e.Db,""+r);if(r>=k){var t=tj(f.target,"gtm.elementVisibility",[h.uid]),p=Rj(f.target);t["gtm.visibleRatio"]=Math.round(1E3*p)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.xc));
t["gtm.visibleLastTime"]=Number(h.get(e.Bb));fk(t);l()}}}if(!h.has(e.Xa)&&(0==k&&m(),!h.has(e.Ca))){var n=W("self").setInterval(m,100);h.set(e.Xa,n)}}function d(f){f.has(e.Xa)&&(W("self").clearInterval(Number(f.get(e.Xa))),f.h(e.Xa))}var e={Xa:"polling-id-",xc:"first-on-screen-",Bb:"recent-on-screen-",Db:"total-visible-time-",Ca:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.uid,h)};a.prototype.h=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Z.__evl=f;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(f){function h(){var x=!1,y=null;if("CSS"===l){try{y=wc(m)}catch(H){}x=!!y&&v.length!=y.length}else if("ID"===l){var B=G.getElementById(m);B&&(y=[B],x=1!=v.length||v[0]!==B)}y||(y=[],x=0<v.length);if(x){for(var z=0;z<v.length;z++){var A=
new a(v[z],p);d(A)}v=[];for(var E=0;E<y.length;E++)v.push(y[E]);0<=w&&Yj(w);0<v.length&&(w=Xj(k,v,[t]))}}function k(x){var y=new a(x.target,p);x.intersectionRatio>=t?y.has(e.Ca)||c(x,y,r,"ONCE"===u?function(){for(var B=0;B<v.length;B++){var z=new a(v[B],p);z.set(e.Ca,"1");d(z)}Yj(w);if(n&&Ej)for(var A=0;A<Ej.length;A++)Ej[A]===h&&Ej.splice(A,1)}:function(){y.set(e.Ca,"1");d(y)}):(d(y),"MANY_PER_ELEMENT"===u&&y.has(e.Ca)&&(y.h(e.Ca),y.h(e.Db)),y.h(e.Bb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,p=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;h();n&&Fj(h);I(f.vtp_gtmOnSuccess)})}();


var Dm={};Dm.macro=function(a){if(qj.Cc.hasOwnProperty(a))return qj.Cc[a]},Dm.onHtmlSuccess=qj.fe(!0),Dm.onHtmlFailure=qj.fe(!1);Dm.dataLayer=Nd;Dm.callback=function(a){fd.hasOwnProperty(a)&&pa(fd[a])&&fd[a]();delete fd[a]};function Em(){Wc[Vc.s]=Dm;Ha(gd,Z.a);xb=xb||qj;yb=re}
function Fm(){vg.gtm_3pds=!0;Wc=F.google_tag_manager=F.google_tag_manager||{};if(Wc[Vc.s]){var a=Wc.zones;a&&a.unregisterChild(Vc.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)sb.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);qb.push(r)}ub=Z;vb=Mk;Em();pj();ve=!1;we=0;if("interactive"==G.readyState&&!G.createEventObject||"complete"==G.readyState)ye();else{mc(G,"DOMContentLoaded",ye);mc(G,"readystatechange",ye);if(G.createEventObject&&G.documentElement.doScroll){var p=!0;try{p=!F.frameElement}catch(x){}p&&ze()}mc(F,"load",ye)}Ni=!1;"complete"===G.readyState?Pi():mc(F,
"load",Pi);a:{if(!Cd)break a;F.setInterval(Dd,864E5);}
cd=(new Date).getTime();
}}Fm();

})()
