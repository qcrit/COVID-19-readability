// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/workers/WorkerClient","dojo/Evented dojo/_base/declare dojo/Deferred dojo/_base/lang dojo/request ../sniff ../kernel ../urlUtils require".split(" "),function(h,p,k,e,q,l,r,f,t){var m=window.Blob||window.webkitBlob||window.mozBlob,n=window.URL||window.webkitURL||window.mozURL;h=p([h],{declaredClass:"esri.workers.WorkerClient",worker:null,returnDeferreds:!1,_queue:null,constructor:function(a,b,c){this._isIE=l("ie");this.returnDeferreds=!!c;this._queue={};this._acceptMessage=e.hitch(this,
this._acceptMessage);this._errorMessage=e.hitch(this,this._errorMessage);a&&this.setWorker(a,e.hitch(this,function(a){this.worker=a;b(a)}))},setWorker:function(a,b){if(a instanceof Array){var c=a;a=c.shift()}var d=this._getUrl(a),d=f.normalize(d);a=!f.hasSameOrigin(d,location.href);var g;if(!1===d)return console.log("Can not resolve worker path"),!1;this.worker&&(g=this.worker,g.removeEventListener("message",this._acceptMessage,!1),g.removeEventListener("error",this._errorMessage,!1),g.terminate(),
g=null);if(a){a=this._getUrl("./mutableWorker",!0);try{this._getRemoteText(a,e.hitch(this,function(a){a=n.createObjectURL(new m([a],{type:"text/javascript"}));b(this._createWorker(a,d))}))}catch(u){try{a=f.getProxyUrl(a).path+"?"+encodeURI(a),this._useProxy=!0,b(this._createWorker(a,c))}catch(v){return console.log("Can not create worker"),!1}}}else setTimeout(e.hitch(this,function(){b(this._createWorker(d,c))}),0)},_createWorker:function(a,b){a=new Worker(a);a.addEventListener("message",this._acceptMessage,
!1);a.addEventListener("error",this._errorMessage,!1);this.worker=a;b&&this.importScripts(b);return a},postMessage:function(a,b){if(a instanceof Array||"object"!=typeof a)a={data:a};var c=Math.floor(64E9*Math.random()).toString(36);a.msgId=c;c=this._queue[c]=new k;this.worker?(b?this.worker.postMessage(a,b):this.worker.postMessage(a),this.emit("start-message",{target:this,message:a})):c.reject({message:"No worker was set."});return this.returnDeferreds?c:c.promise||c},terminate:function(){var a=Object.keys(this._queue);
this.worker&&this.worker.terminate();for(var b=a.length-1;0<=b;b--)this._queue[a[b]].cancel("terminated"),delete this._queue[a[b]]},addWorkerCallback:function(a,b){var c=this._getUrl(a,!0);!1===c?(b=new k,b.reject({message:"Could not load text from "+a})):(b=this.postMessage({action:"add-callback",url:c,cbName:b||"main"}),b.then(e.hitch(this,function(a){a.target=this;this.emit("callback-added",a)})));return b},importScripts:function(a){Array.isArray(a)||(a=[a]);a=a.map(function(a){a=this._getUrl(a,
!0);this._useProxy&&!f.hasSameOrigin(a,location.href)&&(a=f.getProxyUrl(a).path+"?"+encodeURI(a));return a},this);a=this.postMessage({action:"import-script",url:a});a.then(e.hitch(this,function(a){a.target=this;this.emit("scripts-imported",a)}));return a},_acceptMessage:function(a){var b=a.data,c=b.msgId;if(b.status&&"debug"==b.status)console[b.showAs||"debug"](b);else if(c&&c in this._queue){var d=this._queue[c];"progress"==b.status?d.progress(a.data):("error"==b.status?d.reject(a.data):d.resolve(a.data),
delete this._queue[c])}this.emit("message",{message:a.data,event:a,target:this})},_errorMessage:function(a){this.onerror||this.onError?this.onerror?this.onerror(a):this.onError(a):console.log("Worker Error: "+a.message+"\nIn "+a.filename+" on "+a.lineno)},_getUrl:function(a,b){if(!a)return console.error("can not resolve empty path"),!1;a.match(/\.js$/)||(a+=".js");a=t.toUrl(a);return b?f.getAbsoluteUrl(a):a},_getRemoteText:function(a,b){(a=this._getUrl(a))&&q.get(a,{sync:!1,handleAs:"text",headers:{"X-Requested-With":"",
"Content-Type":"text/plain"}}).then(function(a){b(a)})},_startBlobWorker:function(){var a=this._xdSource;a||(a=this._getUrl("./mutableWorker"),a=new m(["if(!self._mutable){importScripts('"+a+"');}"],{type:"text/javascript"}),a=this._xdSource=n.createObjectURL(a));try{return new Worker(a)}catch(b){return console.log(b.message),!1}}});l("extend-esri")&&e.setObject("workers.WorkerClient",h,r);return h});