// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"esri/layers/vectorTiles/tasks/operations/pbfQueryUtils":function(){define("require exports ../../core/Error ../../core/Logger ../../core/pbf ../../layers/graphics/optimizedFeatures".split(" "),function(k,b,f,a,e,u){function c(d){if(d>=h.length){var a=new f("query:parsing-pbf","Error while parsing FeatureSet PBF payload. Unknown GeometryType");J.error(a)}return h[d]}function I(d){var h,a=h||(h={});a[a.STRING=1]="STRING";a[a.FLOAT=2]="FLOAT";a[a.DOUBLE=3]="DOUBLE";a[a.SINT32=4]="SINT32";
a[a.UINT32=5]="UINT32";a[a.INT64=6]="INT64";a[a.UINT64=7]="UINT64";a[a.SINT64=8]="SINT64";for(a[a.BOOL=9]="BOOL";d.next();)switch(d.tag()){case h.STRING:return d.getString();case h.FLOAT:return d.getFloat();case h.DOUBLE:return d.getDouble();case h.SINT32:return d.getSInt32();case h.UINT32:return d.getUInt32();case h.INT64:return d.getInt64();case h.UINT64:return d.getUInt64();case h.SINT64:return d.getSInt64();case h.BOOL:return d.getBool();default:return d.skip(),null}return null}function F(d){var h,
a=h||(h={});a[a.NAME=1]="NAME";a[a.TYPE=2]="TYPE";a[a.ALIAS=3]="ALIAS";a[a.SQL_TYPE=4]="SQL_TYPE";a[a.DOMAIN=5]="DOMAIN";a[a.DEFAULT_VALUE=6]="DEFAULT_VALUE";for(a={type:U[0]};d.next();)switch(d.tag()){case h.NAME:a.name=d.getString();break;case h.TYPE:a.type=U[d.getEnum()];break;case h.ALIAS:a.alias=d.getString();break;case h.SQL_TYPE:a.sqlType=Q[d.getEnum()];break;case h.DOMAIN:d.skip();break;case h.DEFAULT_VALUE:d.skip();break;default:d.skip()}return a}function R(a,h){var d,c=d||(d={});c[c.ATTRIBUTES=
1]="ATTRIBUTES";c[c.GEOMETRY=2]="GEOMETRY";c[c.CENTROID=4]="CENTROID";for(var c=new u.OptimizedFeature,e=0;a.next();)switch(a.tag()){case d.ATTRIBUTES:var b=a.getMessage(),t=h[e++].name;c.attributes[t]=I(b);break;case d.GEOMETRY:var b=a.getMessage(),f=(t=void 0,t={});f[f.TYPE=1]="TYPE";f[f.LENGTHS=2]="LENGTHS";f[f.COORDS=3]="COORDS";for(var f=new u.OptimizedGeometry,T=f.coords,n=f.lengths;b.next();)switch(b.tag()){case t.LENGTHS:for(var w=b.getUInt32(),w=b.pos()+w;b.pos()<w;)n.push(b.getUInt32());
break;case t.COORDS:for(var w=b.getUInt32(),w=b.pos()+w,F=0;b.pos()<w;)T[F++]=b.getSInt64();break;default:b.skip()}c.geometry=f;break;case d.CENTROID:b=a.getMessage();f=(t=void 0,t={});f[f.TYPE=1]="TYPE";f[f.LENGTHS=2]="LENGTHS";f[f.COORDS=3]="COORDS";f=new u.OptimizedGeometry;for(T=f.coords;b.next();)switch(b.tag()){case t.COORDS:n=b.getUInt32();n=b.pos()+n;for(w=0;b.pos()<n;)T[w++]=b.getSInt64();break;default:b.skip()}c.centroid=f;break;default:a.skip()}return c}Object.defineProperty(b,"__esModule",
{value:!0});var J=a.getLogger("esri.tasks.operations.pbfQueryUtils"),U="esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble esriFieldTypeString esriFieldTypeDate esriFieldTypeOID esriFieldTypeGeometry esriFieldTypeBlob esriFieldTypeRaster esriFieldTypeGUID esriFieldTypeGlobalID esriFieldTypeXML".split(" "),Q="sqlTypeBigInt sqlTypeBinary sqlTypeBit sqlTypeChar sqlTypeDate sqlTypeDecimal sqlTypeDouble sqlTypeFloat sqlTypeGeometry sqlTypeGUID sqlTypeInteger sqlTypeLongNVarchar sqlTypeLongVarbinary sqlTypeLongVarchar sqlTypeNChar sqlTypeNVarchar sqlTypeOther sqlTypeReal sqlTypeSmallInt sqlTypeSqlXml sqlTypeTime sqlTypeTimestamp sqlTypeTimestamp2 sqlTypeTinyInt sqlTypeVarbinary sqlTypeVarchar".split(" "),
h=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],t=["upperLeft","lowerLeft"];b.parsePBFFeatureQuery=function(a){try{var h,d=h||(h={});d[d.QUERY_RESULT=2]="QUERY_RESULT";for(var b=new e(new Uint8Array(a),new DataView(a)),I;b.next();)switch(b.tag()){case h.QUERY_RESULT:var k=b.getMessage(),V=(a=void 0,a={});V[V.FEATURE_RESULT=1]="FEATURE_RESULT";for(d={};k.next();)switch(k.tag()){case a.FEATURE_RESULT:var z=k.getMessage(),A=void 0,n=A||(A={});n[n.OBJECT_ID_NAME=
1]="OBJECT_ID_NAME";n[n.UNIQUE_ID_NAME=2]="UNIQUE_ID_NAME";n[n.GLOBAL_ID_NAME=3]="GLOBAL_ID_NAME";n[n.GEOHASH_NAME=4]="GEOHASH_NAME";n[n.GEOMETRY_PROPERTIES=5]="GEOMETRY_PROPERTIES";n[n.SERVER_GENS=6]="SERVER_GENS";n[n.GEOMETRY_TYPE=7]="GEOMETRY_TYPE";n[n.SPATIAL_REFERENCE=8]="SPATIAL_REFERENCE";n[n.EXCEEDED_TRANSFER_LIMIT=9]="EXCEEDED_TRANSFER_LIMIT";n[n.HAS_Z=10]="HAS_Z";n[n.HAS_M=11]="HAS_M";n[n.TRANSFORM=12]="TRANSFORM";n[n.FIELDS=13]="FIELDS";n[n.FEATURES=15]="FEATURES";var w=new u.OptimizedFeatureSet;
for(w.geometryType=c(0);z.next();)switch(z.tag()){case A.OBJECT_ID_NAME:w.objectIdFieldName=z.getString();break;case A.GLOBAL_ID_NAME:w.globalIdFieldName=z.getString();break;case A.GEOHASH_NAME:w.geohashFieldName=z.getString();break;case A.GEOMETRY_PROPERTIES:var N=z.getMessage(),D=void 0,K=D||(D={});K[K.AREA_FIELD_NAME=1]="AREA_FIELD_NAME";K[K.LENGTH_FIELD_NAME=2]="LENGTH_FIELD_NAME";K[K.UNITS=3]="UNITS";for(var G={};N.next();)switch(N.tag()){case D.AREA_FIELD_NAME:G.shapeAreaFieldName=N.getString();
break;case D.LENGTH_FIELD_NAME:G.shapeLengthFieldName=N.getString();break;case D.UNITS:G.units=N.getString();break;default:N.skip()}w.geometryProperties=G;break;case A.GEOMETRY_TYPE:w.geometryType=c(z.getEnum());break;case A.SPATIAL_REFERENCE:var O=z.getMessage(),B=(D=void 0,D={});B[B.WKID=1]="WKID";B[B.LASTEST_WKID=2]="LASTEST_WKID";B[B.VCS_WKID=3]="VCS_WKID";B[B.LATEST_VCS_WKID=4]="LATEST_VCS_WKID";B[B.WKT=5]="WKT";for(G={};O.next();)switch(O.tag()){case D.WKID:G.wkid=O.getUInt32();break;case D.WKT:G.wkt=
O.getString();break;default:O.skip()}w.spatialReference=G;break;case A.HAS_Z:w.hasZ=z.getBool();break;case A.HAS_M:w.hasM=z.getBool();break;case A.TRANSFORM:var L=z.getMessage(),P=(D=void 0,D={});P[P.ORIGIN_POSTION=1]="ORIGIN_POSTION";P[P.SCALE=2]="SCALE";P[P.TRANSLATE=3]="TRANSLATE";for(var H=t[0],M=G=void 0;L.next();)switch(L.tag()){case D.ORIGIN_POSTION:H=t[L.getEnum()];break;case D.SCALE:var g=L.getMessage(),l=void 0,p=l||(l={});p[p.X=1]="X";p[p.Y=2]="Y";p[p.M=3]="M";p[p.Z=4]="Z";for(var m=[0,
0];g.next();)switch(g.tag()){case l.X:m[0]=g.getDouble();break;case l.Y:m[1]=g.getDouble();break;case l.M:m.push(g.getDouble());break;case l.Z:m.push(g.getDouble());break;default:g.skip()}G=m;break;case D.TRANSLATE:var y=L.getMessage(),C=(l=void 0,l={});C[C.X=1]="X";C[C.Y=2]="Y";C[C.M=3]="M";C[C.Z=4]="Z";for(m=[0,0];y.next();)switch(y.tag()){case l.X:m[0]=y.getDouble();break;case l.Y:m[1]=y.getDouble();break;case l.M:m.push(y.getDouble());break;case l.Z:m.push(y.getDouble());break;default:y.skip()}M=
m;break;default:L.skip()}w.transform={originPosition:H,scale:G,translate:M};break;case A.EXCEEDED_TRANSFER_LIMIT:var aa=z.getBool();w.exceededTransferLimit=aa;break;case A.FIELDS:var ba=z.getMessage();w.fields.push(F(ba));break;case A.FEATURES:var S=z.getMessage();w.features.push(R(S,w.fields));break;default:z.skip()}d.featureResult=w;break;default:k.skip()}I=d;break;default:b.skip()}return I.featureResult}catch(E){return h=new f("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:E}),
J.error(h),new u.OptimizedFeatureSet}}})},"esri/layers/vectorTiles/core/Error":function(){define(["require","exports","./tsSupport/extendsHelper","./lang","./Message"],function(k,b,f,a,e){k=function(b){function c(a,e,f){var u=b.call(this,a,e,f)||this;return u instanceof c?u:new c(a,e,f)}f(c,b);c.prototype.toJSON=function(){return{name:this.name,message:this.message,details:a.clone(this.details),dojoType:this.dojoType}};c.fromJSON=function(a){var b=new c(a.name,a.message,a.details);null!=a.dojoType&&
(b.dojoType=a.dojoType);return b};return c}(e);k.prototype.type="error";return k})},"esri/layers/vectorTiles/core/tsSupport/extendsHelper":function(){define([],function(){return function(){var k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,f){b.__proto__=f}||function(b,f){for(var a in f)f.hasOwnProperty(a)&&(b[a]=f[a])};return function(b,f){function a(){this.constructor=b}k(b,f);b.prototype=null===f?Object.create(f):(a.prototype=f.prototype,new a)}}()})},"esri/layers/vectorTiles/core/lang":function(){define("dojo/_base/kernel dojo/_base/lang dojo/date dojo/number dojo/date/locale dojo/i18n!../nls/common".split(" "),
function(k,b,f,a,e,u){function c(a){return void 0!==a&&null!==a}function I(a){return c(a)?a:""}function F(h,u,d){var t=d.match(/([^\(]+)(\([^\)]+\))?/i),k=b.trim(t[1]);d=u[h];var t=JSON.parse((t[2]?b.trim(t[2]):"{}").replace(/^\(/,"{").replace(/\)$/,"}").replace(/([{,])\s*([0-9a-zA-Z\_]+)\s*:/gi,'$1"$2":').replace(/\"\s*:\s*\'/gi,'":"').replace(/\'\s*(,|\})/gi,'"$1')),F=t.utcOffset;if(-1===U.indexOf(k))k=b.getObject(k),b.isFunction(k)&&(d=k(d,h,u,t));else if("number"===typeof d||"string"===typeof d&&
d&&!isNaN(Number(d)))switch(d=Number(d),k){case "NumberFormat":h=b.mixin({},t);u=parseFloat(h.places);if(isNaN(u)||0>u)h.places=Infinity;return a.format(d,h);case "DateString":d=new Date(d);if(t.local||t.systemLocale)return t.systemLocale?d.toLocaleDateString()+(t.hideTime?"":" "+d.toLocaleTimeString()):d.toDateString()+(t.hideTime?"":" "+d.toTimeString());d=d.toUTCString();t.hideTime&&(d=d.replace(/\s+\d\d\:\d\d\:\d\d\s+(utc|gmt)/i,""));return d;case "DateFormat":return d=new Date(d),c(F)&&(d=f.add(d,
"minute",d.getTimezoneOffset()-F)),e.format(d,t)}return I(d)}function R(a,c){var d;if(c)for(d in a)a.hasOwnProperty(d)&&(void 0===a[d]?delete a[d]:a[d]instanceof Object&&R(a[d],!0));else for(d in a)a.hasOwnProperty(d)&&void 0===a[d]&&delete a[d];return a}function J(a){if(!a||"object"!=typeof a||b.isFunction(a))return a;if(a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Int32Array||a instanceof Uint16Array||a instanceof Uint32Array||
a instanceof Float32Array||a instanceof Float64Array||a instanceof Date)return new a.constructor(a);if(a instanceof ArrayBuffer)return a.slice(0,a.byteLength);if("function"===typeof a.clone)a=a.clone();else if("function"===typeof a.map&&"function"===typeof a.forEach)a=a.map(J);else if("function"===typeof a.notifyChange&&"function"===typeof a.watch)a=a.clone();else{var c={},d,e,u={};for(d in a){e=a[d];var h=!(d in u)||u[d]!==e;if(!(d in c)||c[d]!==e&&h)c[d]=J?J(e):e}a=c}return a}var U=["NumberFormat",
"DateString","DateFormat"],Q=/<\/?[^>]+>/g;return{equals:function(a,c){return a===c||"number"===typeof a&&isNaN(a)&&"number"===typeof c&&isNaN(c)||b.isFunction((a||{}).getTime)&&b.isFunction((c||{}).getTime)&&a.getTime()==c.getTime()||b.isFunction((a||{}).equals)&&a.equals(c)||b.isFunction((c||{}).equals)&&c.equals(a)||!1},mixin:b.mixin,valueOf:function(a,c){for(var d in a)if(a[d]==c)return d;return null},stripTags:function(a){if(a){var c=typeof a;if("string"===c)a=a.replace(Q,"");else if("object"===
c)for(var d in a)(c=a[d])&&"string"===typeof c&&(c=c.replace(Q,"")),a[d]=c}return a},substitute:function(a,e,d){var f,h,t;c(d)&&(b.isObject(d)?(f=d.first,h=d.dateFormat,t=d.numberFormat):f=d);if(e&&"{*}"!==e)return b.replace(e,b.hitch({obj:a},function(a,c){a=c.split(":");return 1<a.length?(c=a[0],a.shift(),F(c,this.obj,a.join(":"))):h&&-1!==(h.properties||[]).indexOf(c)?F(c,this.obj,h.formatter||"DateString"):t&&-1!==(t.properties||[]).indexOf(c)?F(c,this.obj,t.formatter||"NumberFormat"):I(this.obj[c])}));
e=[];var k;e.push('\x3ctable class\x3d"esri-widget__table" summary\x3d"'+u.fieldsSummary+'"\x3e\x3ctbody\x3e');for(k in a)if(d=a[k],h&&-1!==(h.properties||[]).indexOf(k)?d=F(k,a,h.formatter||"DateString"):t&&-1!==(t.properties||[]).indexOf(k)&&(d=F(k,a,t.formatter||"NumberFormat")),e.push("\x3ctr\x3e\x3cth\x3e"+k+"\x3c/th\x3e\x3ctd\x3e"+I(d)+"\x3c/td\x3e\x3c/tr\x3e"),f)break;e.push("\x3c/tbody\x3e\x3c/table\x3e");return e.join("")},filter:function(a,c,d){c=[b.isString(a)?a.split(""):a,d||k.global,
b.isString(c)?new Function("item","index","array",c):c];d={};var e;a=c[0];for(e in a)c[2].call(c[e],a[e],e,a)&&(d[e]=a[e]);return d},startsWith:function(a,c,d){d=d||0;return a.indexOf(c,d)===d},endsWith:function(a,c,d){if("number"!==typeof d||!isFinite(d)||Math.floor(d)!==d||d>a.length)d=a.length;d-=c.length;a=a.indexOf(c,d);return-1!==a&&a===d},isDefined:c,fixJson:R,clone:J}})},"esri/layers/vectorTiles/core/Message":function(){define(["require","exports","dojo/string"],function(k,b,f){return function(){function a(e,
b,c){this instanceof a&&(this.name=e,this.message=b&&f.substitute(b,c,function(a){return null==a?"":a})||"",this.details=c)}a.prototype.toString=function(){return"["+this.name+"]: "+this.message};return a}()})},"esri/layers/vectorTiles/core/Logger":function(){define(["require","exports","dojo/has"],function(k,b,f){var a={info:0,warn:1,error:2};k=function(){function e(a){void 0===a&&(a={});this.module=a.module||"";this.writer=a.writer||null;this.level=a.level||null;null!=a.enabled&&(this.enabled=!!a.enabled);
e._loggers[this.module]=this;a=this.module.lastIndexOf(".");-1!==a&&(this.parent=e.getLogger(this.module.slice(0,a)))}e.prototype.log=function(a){for(var c=[],e=1;e<arguments.length;e++)c[e-1]=arguments[e];this._isEnabled()&&this._matchLevel(a)&&(e=this._inheritedWriter())&&e.apply(void 0,[a,this.module].concat(c))};e.prototype.error=function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];this.log.apply(this,["error"].concat(a))};e.prototype.warn=function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=
arguments[c];this.log.apply(this,["warn"].concat(a))};e.prototype.info=function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];this.log.apply(this,["info"].concat(a))};e.prototype.getLogger=function(a){return e.getLogger(this.module+"."+a)};e.getLogger=function(a){var c=e._loggers[a];c||(c=new e({module:a}));return c};e.prototype._parentWithMember=function(a,c){for(var e=this;e&&null==e[a];)e=e.parent;return e?e[a]:c};e.prototype._inheritedWriter=function(){return this._parentWithMember("writer",
this._consoleWriter)};e.prototype._consoleWriter=function(a,c){for(var e=[],b=2;b<arguments.length;b++)e[b-2]=arguments[b];console[a].apply(console,["["+c+"]"].concat(e))};e.prototype._matchLevel=function(e){return a[this._parentWithMember("level","error")]<=a[e]};e.prototype._isEnabled=function(){return this._parentWithMember("enabled",!0)};e._loggers={};return e}();b=k.getLogger("esri");f("dojo-debug-messages")?b.level="info":b.level="warn";return k})},"esri/layers/vectorTiles/core/pbf":function(){define(["require",
"exports"],function(k,b){return function(){function b(a,b,f,c){this._tag=0;this._dataType=99;this._data=a;this._dataView=b;this._pos=f||0;this._end=c||a.byteLength}b.prototype.clone=function(){return new b(this._data,this._dataView,this._pos,this._end)};b.prototype.pos=function(){return this._pos};b.prototype.next=function(a){for(;;){if(this._pos===this._end)return!1;var b=this._decodeVarint();this._tag=b>>3;this._dataType=b&7;if(!a||a===this._tag)break;this.skip()}return!0};b.prototype.empty=function(){return this._pos>=
this._end};b.prototype.tag=function(){return this._tag};b.prototype.getInt32=function(){return this._decodeVarint()};b.prototype.getInt64=function(){return this._decodeVarint()};b.prototype.getUInt32=function(){var a=4294967295,a=(this._data[this._pos]&127)>>>0;if(128>this._data[this._pos++])return a;a=(a|(this._data[this._pos]&127)<<7)>>>0;if(128>this._data[this._pos++])return a;a=(a|(this._data[this._pos]&127)<<14)>>>0;if(128>this._data[this._pos++])return a;a=(a|(this._data[this._pos]&127)<<21)>>>
0;if(128>this._data[this._pos++])return a;a=(a|(this._data[this._pos]&15)<<28)>>>0;if(128>this._data[this._pos++])return a};b.prototype.getUInt64=function(){return this._decodeVarint()};b.prototype.getSInt32=function(){var a=this.getUInt32();return a>>>1^-(a&1)|0};b.prototype.getSInt64=function(){return this._decodeSVarint()};b.prototype.getBool=function(){var a=0!==this._data[this._pos];this._skip(1);return a};b.prototype.getEnum=function(){return this._decodeVarint()};b.prototype.getFixed64=function(){var a=
this._dataView,b=this._pos,a=a.getUint32(b,!0)+4294967296*a.getUint32(b+4,!0);this._skip(8);return a};b.prototype.getSFixed64=function(){var a=this._dataView,b=this._pos,a=a.getUint32(b,!0)+4294967296*a.getInt32(b+4,!0);this._skip(8);return a};b.prototype.getDouble=function(){var a=this._dataView.getFloat64(this._pos,!0);this._skip(8);return a};b.prototype.getFixed32=function(){var a=this._dataView.getUint32(this._pos,!0);this._skip(4);return a};b.prototype.getSFixed32=function(){var a=this._dataView.getInt32(this._pos,
!0);this._skip(4);return a};b.prototype.getFloat=function(){var a=this._dataView.getFloat32(this._pos,!0);this._skip(4);return a};b.prototype.getString=function(){var a=this._getLength(),b=this._pos,b=this._toString(this._data,b,b+a);this._skip(a);return b};b.prototype.getBytes=function(){var a=this._getLength(),b=this._pos,b=this._toBytes(this._data,b,b+a);this._skip(a);return b};b.prototype.getMessage=function(){var a=this._getLength(),e=this._pos,e=new b(this._data,this._dataView,e,e+a);this._skip(a);
return e};b.prototype.skip=function(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw Error("Invalid data type!");}};b.prototype._skip=function(a){if(this._pos+a>this._end)throw Error("Attempt to skip past the end of buffer!");this._pos+=a};b.prototype._decodeVarint=function(){var a=this._data,b=this._pos,f=0,c;if(10<=this._end-b){if(c=a[b++],f|=c&127,0!==(c&128)&&(c=a[b++],f|=(c&
127)<<7,0!==(c&128)&&(c=a[b++],f|=(c&127)<<14,0!==(c&128)&&(c=a[b++],f|=(c&127)<<21,0!==(c&128)&&(c=a[b++],f+=268435456*(c&127),0!==(c&128)&&(c=a[b++],f+=34359738368*(c&127),0!==(c&128)&&(c=a[b++],f+=4398046511104*(c&127),0!==(c&128)&&(c=a[b++],f+=562949953421312*(c&127),0!==(c&128)&&(c=a[b++],f+=72057594037927936*(c&127),0!==(c&128)&&(c=a[b++],f+=0x7fffffffffffffff*(c&127),0!==(c&128)))))))))))throw Error("Varint too long!");}else{for(var k=1;b!==this._end;){c=a[b];if(0===(c&128))break;++b;f+=(c&
127)*k;k*=128}if(b===this._end)throw Error("Varint overrun!");++b;f+=c*k}this._pos=b;return f};b.prototype._decodeSVarint=function(){var a=this._decodeVarint();return a%2?-(a+1)/2:a/2};b.prototype._getLength=function(){if(2!==this._dataType)throw Error("Not a delimited data type!");return this._decodeVarint()};b.prototype._toString=function(a,b,f){var c="",e="";for(f=Math.min(this._end,f);b<f;++b){var k=a[b];k&128?e+="%"+k.toString(16):(c+=decodeURIComponent(e)+String.fromCharCode(k),e="")}e.length&&
(c+=decodeURIComponent(e));return c};b.prototype._toBytes=function(a,b,f){f=Math.min(this._end,f);return new Uint8Array(a.buffer,b,f-b)};return b}()})},"esri/layers/vectorTiles/layers/graphics/optimizedFeatures":function(){define(["require","exports","../../core/Error","../../core/Logger"],function(k,b,f,a){function e(a,l){return Math.round((l-a.translate[0])/a.scale[0])}function u(a,l){return Math.round((a.translate[1]-l)/a.scale[1])}function c(a,l){return l*a.scale[0]+a.translate[0]}function I(a,
l){return a.translate[1]-l*a.scale[1]}function F(a){a=a.coords;return{x:a[0],y:a[1]}}function R(a){var g=new H;g.coords[0]=a.x;g.coords[1]=a.y;return g}function J(a){a=a.coords;return{x:a[0],y:a[1],z:a[2]}}function U(a){var g=new H;g.coords[0]=a.x;g.coords[1]=a.y;g.coords[2]=a.z;return g}function Q(a){a=a.coords;return{x:a[0],y:a[1],m:a[2]}}function h(a){var g=new H;g.coords[0]=a.x;g.coords[1]=a.y;g.coords[2]=a.m;return g}function t(a){a=a.coords;return{x:a[0],y:a[1],z:a[2],m:a[3]}}function d(a){var g=
new H;g.coords[0]=a.x;g.coords[1]=a.y;g.coords[2]=a.z;g.coords[3]=a.m;return g}function T(a,b,c){for(var g=b?c?4:3:c?3:2,l=[],p=0;p<a.coords.length;p+=g){for(var d=[],e=0;e<g;e++)d.push(a.coords[p+e]);l.push(d)}return b?c?{points:l,hasZ:b,hasM:c}:{points:l,hasZ:b}:c?{points:l,hasM:c}:{points:l}}function X(a,b,c){var g=b?c?4:3:c?3:2,l=a.coords,p=[],d=0,e=0;for(a=a.lengths;e<a.length;e++){for(var f=a[e],E=[],x=0;x<f;x++){for(var q=[],v=0;v<g;v++)q.push(l[d++]);E.push(q)}p.push(E)}return b?c?{paths:p,
hasZ:b,hasM:c}:{paths:p,hasZ:b}:c?{paths:p,hasM:c}:{paths:p}}function Y(a,b,c){var g=b?c?4:3:c?3:2,l=a.coords,p=[],d=0,e=0;for(a=a.lengths;e<a.length;e++){for(var f=a[e],E=[],x=0;x<f;x++){for(var q=[],v=0;v<g;v++)q.push(l[d++]);E.push(q)}p.push(E)}return b?c?{rings:p,hasZ:b,hasM:c}:{rings:p,hasZ:b}:c?{rings:p,hasM:c}:{rings:p}}function Z(a,b,c,m){if(!b)return[];switch(b){case "esriGeometryPoint":b=R;m&&c?b=d:m?b=U:c&&(b=h);c=[];for(m=0;m<a.length;m++){var g=a[m],l=g.geometry,g=g.attributes,l=l?b(l):
void 0;c.push(new M(l,g))}return c;case "esriGeometryMultipoint":b=c?m?4:3:m?3:2;c=[];for(m=0;m<a.length;m++){var l=a[m],p=l.geometry,l=l.attributes,g=void 0;if(p){g=new H;g.lengths[0]=p.points.length;for(var e=g.coords,S=0,E=0,p=p.points;E<p.length;E++)for(var x=p[E],q=0;q<b;q++)e[S++]=x[q]}c.push(new M(g,l))}return c;case "esriGeometryPolyline":b=c?m?4:3:m?3:2;c=[];for(m=0;m<a.length;m++){l=a[m];x=l.geometry;l=l.attributes;g=void 0;if(x)for(g=new H,e=g.lengths,S=g.coords,p=E=0,x=x.paths;p<x.length;p++){for(var q=
x[p],v=0,r=q;v<r.length;v++)for(var k=r[v],n=0;n<b;n++)S[E++]=k[n];e.push(q.length)}c.push(new M(g,l))}return c;case "esriGeometryPolygon":b=c?m?4:3:m?3:2;c=[];for(m=0;m<a.length;m++){g=a[m];q=g.geometry;l=g.centroid;g=g.attributes;e=void 0;if(q)for(e=new H,S=e.lengths,E=e.coords,x=p=0,q=q.rings;x<q.length;x++){v=q[x];r=0;for(k=v;r<k.length;r++)for(var n=k[r],t=0;t<b;t++)E[p++]=n[t];S.push(v.length)}l?c.push(new M(e,g,R(l))):c.push(new M(e,g))}return c;default:return K.error("convertToFeatureSet:unknown-geometry",
new f("Unable to parse unknown geometry type "+b)),[]}}function W(a,b,c,d,y,C){y=G[y];var g=b.coords;b=b.lengths;var l=c?d?4:3:d?3:2;c=c?d?L:B:d?B:O;a.lengths.length=0;a.coords.length=0;if(!g.length)return a;if(!b.length)return c(a.coords,g,0,0,e(C,g[0]),u(C,g[1])),a.lengths.length=0,a.coords.length=l,a;for(var p,m,f,q=0,v,r=0,k=0;k<b.length;k++){var h=b[k];if(!(h<y)){var n=0;v=r;m=d=e(C,g[q]);f=p=u(C,g[q+1]);c(a.coords,g,v,q,m,f);n++;q+=l;v+=l;for(var t=1;t<h;t++,q+=l)if(m=e(C,g[q]),f=u(C,g[q+1]),
m!==d||f!==p)c(a.coords,g,v,q,m-d,f-p),v+=l,n++,d=m,p=f;n>=y&&(a.lengths.push(n),r=v)}}a.coords.length=r;return a.coords.length?a:null}function V(a,b,d,m,e){var g=b.coords;b=b.lengths;var l=d?m?L:B:m?B:O;d=d?m?4:3:m?3:2;if(!g.length)return a.lengths.length=0,a.coords.length=0,a;if(!b.length)return l(a.coords,g,0,0,c(e,g[0]),I(e,g[1])),a.lengths.length=0,a.coords.length=d,a;var p=e.scale;m=p[0];for(var p=p[1],f=0,y=0;y<b.length;y++){var x=b[y];a.lengths[y]=x;var q=c(e,g[f]),v=I(e,g[f+1]);l(a.coords,
g,f,f,q,v);for(var f=f+d,r=1;r<x;r++,f+=d)q+=g[f]*m,v-=g[f+1]*p,l(a.coords,g,f,f,q,v)}a.lengths.length=b.length;a.coords.length=g.length;return a}function z(a,b,c,d,e,f){f=e?f?4:3:f?3:2;var g=c,l=c+f,p=0,m=0,y=c=0,q=0,C=0;for(--d;C<d;C++,g+=f,l+=f){var r=b[g],k=b[g+1],h=b[g+2],n=b[l],t=b[l+1],w=b[l+2],u=r*t-n*k,y=y+u,p=p+(r+n)*u,m=m+(k+t)*u;e&&(u=r*w-n*h,c+=(h+w)*u,q+=u);r<a[0]&&(a[0]=r);r>a[1]&&(a[1]=r);k<a[2]&&(a[2]=k);k>a[3]&&(a[3]=k);e&&(h<a[4]&&(a[4]=h),h>a[5]&&(a[5]=h))}0<y&&(y*=-1);0<q&&(q*=
-1);if(!y)return null;a=[p,m,.5*y];e&&(a[3]=c,a[4]=.5*q);return a}function A(a,b,c,d,e){e=d?e?4:3:e?3:2;for(var g=b,l=b+e,p=0,m=0,f=0,y=0,q=0,k=c-1;q<k;q++,g+=e,l+=e){var r=a[g],h=a[g+1],t=a[g+2],u=a[l],z=a[l+1],A=a[l+2],B=d?w(r,h,t,u,z,A):n(r,h,u,z);B&&(p+=B,d?(r=D(r,h,t,u,z,A),m+=B*r[0],f+=B*r[1],y+=B*r[2]):(r=N(r,h,u,z),m+=B*r[0],f+=B*r[1]))}return 0<p?d?[m/p,f/p,y/p]:[m/p,f/p]:0<c?d?[a[b],a[b+1],a[b+2]]:[a[b],a[b+1]]:null}function n(a,b,c,d){a=c-a;b=d-b;return Math.sqrt(a*a+b*b)}function w(a,
b,c,d,e,f){a=d-a;b=e-b;c=f-c;return Math.sqrt(a*a+b*b+c*c)}function N(a,b,c,d){return[a+.5*(c-a),b+.5*(d-b)]}function D(a,b,c,d,e,f){return[a+.5*(d-a),b+.5*(e-b),c+.5*(f-c)]}Object.defineProperty(b,"__esModule",{value:!0});var K=a.getLogger("esri.tasks.support.optimizedFeatureSet"),G={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},O=function(a,b,c,d,e,f){a[c]=e;a[c+1]=f},B=function(a,b,c,d,e,f){a[c]=e;a[c+1]=f;a[c+2]=b[d+2]},L=function(a,b,c,d,e,f){a[c]=
e;a[c+1]=f;a[c+2]=b[d+2];a[c+3]=b[d+3]};b.quantizeX=e;b.quantizeY=u;b.hydrateX=c;b.hydrateY=I;var P=function(){return function(){this.spatialReference=this.geometryType=this.geometryProperties=this.geohashFieldName=this.globalIdFieldName=this.objectIdFieldName=null;this.hasM=this.hasZ=!1;this.features=[];this.fields=[];this.transform=null;this.exceededTransferLimit=!1}}();b.OptimizedFeatureSet=P;var H=function(){return function(a,b){void 0===a&&(a=[]);void 0===b&&(b=[]);this.lengths=a;this.coords=
b}}();b.OptimizedGeometry=H;var M=function(){return function(a,b,c){void 0===a&&(a=null);void 0===b&&(b={});this.geometry=a;this.attributes=b;c&&(this.centroid=c)}}();b.OptimizedFeature=M;b.convertToPoint=function(a,b,c){return b?c?t(a):J(a):c?Q(a):F(a)};b.convertToMultipoint=T;b.convertToPolyline=X;b.convertToPolygon=Y;b.convertFromFeatures=Z;b.convertToFeatureSet=function(a){var b=[],c=a.objectIdFieldName,d=a.spatialReference,g=a.transform,e=a.fields,k=a.hasM,h=a.hasZ,n=a.features,E=a.geometryType;
a=a.exceededTransferLimit;switch(E){case "esriGeometryPoint":b=F;k&&h?b=t:k?b=J:h&&(b=Q);for(var x=[],q=0;q<n.length;q++){var v=n[q],r=v.geometry,v=v.attributes,r=r?b(r):null;x.push({attributes:v,geometry:r})}b=x;break;case "esriGeometryMultipoint":b=[];for(x=0;x<n.length;x++)r=n[x],q=r.geometry,r=r.attributes,v=void 0,q&&(v=T(q,h,k)),b.push({attributes:r,geometry:v});break;case "esriGeometryPolyline":b=[];for(x=0;x<n.length;x++)r=n[x],q=r.geometry,r=r.attributes,v=void 0,q&&(v=X(q,h,k)),b.push({attributes:r,
geometry:v});break;case "esriGeometryPolygon":b=[];for(x=0;x<n.length;x++){var v=n[x],r=v.geometry,q=v.attributes,u=v.centroid,v=void 0;r&&(v=Y(r,h,k));u?(r=F(u),b.push({attributes:q,centroid:r,geometry:v})):b.push({attributes:q,geometry:v})}break;default:K.error("convertToFeatureSet:unknown-geometry",new f("Unable to parse unknown geometry type "+E))}c={features:b,fields:e,geometryType:E,objectIdFieldName:c,spatialReference:d};g&&(c.transform=g);a&&(c.exceededTransferLimit=a);k&&(c.hasM=k);h&&(c.hasZ=
h);return c};b.convertFromFeatureSet=function(a){var b=new P,c=a.hasM,d=a.hasZ,e=a.features,g=a.objectIdFieldName,f=a.spatialReference,k=a.geometryType,h=a.exceededTransferLimit,n=a.transform;b.fields=a.fields;b.geometryType=k;b.objectIdFieldName=g;b.spatialReference=f;b.features=Z(e,k,d,c);h&&(b.exceededTransferLimit=h);c&&(b.hasM=c);d&&(b.hasZ=d);n&&(b.transform=n);return b};b.hydrateOptimizedFeatureSet=function(a){var b=a.transform,c=a.hasM,d=a.hasZ;if(!b)return a;for(var e=0,g=a.features;e<g.length;e++){var f=
g[e];V(f.geometry,f.geometry,c,d,b);f.centroid&&V(f.centroid,f.centroid,c,d,b)}a.transform=null;return a};b.quantizeOptimizedFeatureSet=function(a,b){var c=b.geometryType,d=b.features,e=b.hasM,g=b.hasZ;if("esriGeometryEnvelope"===c)return K.error(new f("optimized-features:invalid-geometry-type",'FeatureSet with geometry type "'+c+'" is not supported')),b;if(!a)return b;for(var l=0;l<d.length;l++){var k=d[l],h=new M(new H,k.attributes);W(h.geometry,k.geometry,e,g,c,a);k.centroid&&(h.centroid=new H,
W(h.centroid,k.centroid,e,g,"esriGeometryPoint",a));d[l]=h}b.transform=a;return b};b.quantizeOptimizedGeometry=W;b.quantizeOptimizedGeometryRemoveCollinear=function(a,b,c,d,f,k){f=G[f];var g=b.coords;b=b.lengths;var l=c?d?4:3:d?3:2;c=c?d?L:B:d?B:O;a.lengths.length=0;a.coords.length=0;if(!g.length)return a;if(!b.length)return c(a.coords,g,0,0,e(k,g[0]),u(k,g[1])),a.lengths.length=0,a.coords.length=l,a;for(var h,m,p,q=0,n,r=0,y=0;y<b.length;y++){var t=b[y];if(!(t<f)){var C=0;n=r;d=h=e(k,g[q]);p=m=u(k,
g[q+1]);c(a.coords,g,n,q,d,p);C++;for(var q=q+l,w=!1,z=0,A=0,D=1;D<t;D++,q+=l)if(d=e(k,g[q]),p=u(k,g[q+1]),d!==h||p!==m)h=d-h,m=p-m,w&&(0===z&&0===h||0===A&&0===m)?(z+=h,A+=m):(w=!0,z=h,A=m,n+=l,C++),c(a.coords,g,n,q,z,A),h=d,m=p;w&&(n+=l,c(a.coords,g,n,q,z,A));C>=f&&(a.lengths.push(C),r=n)}}a.coords.length=r;return a.coords.length?a:null};b.getBoundsOptimizedGeometry=function(a,b,c,d){c=c?d?4:3:d?3:2;b=b.coords;for(var e=d=Number.POSITIVE_INFINITY,f=Number.NEGATIVE_INFINITY,g=Number.NEGATIVE_INFINITY,
l=0;l<b.length;l+=c){var h=b[l],k=b[l+1];d=Math.min(d,h);f=Math.max(f,h);e=Math.min(e,k);g=Math.max(g,k)}a[0]=d;a[1]=e;a[2]=f;a[3]=g;return a};b.getQuantizedBoundsOptimizedGeometry=function(a,b,c,d){c=c?d?4:3:d?3:2;d=b.coords;var e=Number.POSITIVE_INFINITY,f=Number.POSITIVE_INFINITY,g=Number.NEGATIVE_INFINITY,l=Number.NEGATIVE_INFINITY,h=0,k=0;for(b=b.lengths;k<b.length;k++)for(var p=b[k],q=d[h],m=d[h+1],e=Math.min(q,e),f=Math.min(m,f),g=Math.max(q,g),l=Math.max(m,l),h=h+c,n=1;n<p;n++,h+=c){var t=
d[h],u=d[h+1],q=q+t,m=m+u;0>t&&(e=Math.min(e,q));0<t&&(g=Math.max(g,q));0>u?f=Math.min(f,m):0<u&&(l=Math.max(l,m))}a[0]=e;a[1]=f;a[2]=g;a[3]=l;return a};b.hydrateOptimizedGeometry=V;b.getCentroidOptimizedGeometry=function(a,b,c,d){if(!b||!b.lengths.length)return null;a.lengths.length=0;a.coords.length=0;for(var e=a.coords,f=[],g=c?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,
Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],h=b.lengths,k=b.coords,l=c?d?4:3:d?3:2,n=0,m=0;m<h.length;m++){var p=h[m],r=z(g,k,n,p,c,d);r&&f.push(r);n+=p*l}f.sort(function(a,b){var d=a[2]-b[2];0===d&&c&&(d=a[4]-b[4]);return d});f.length&&(l=6*f[0][2],e[0]=f[0][0]/l,e[1]=f[0][1]/l,c&&(l=6*f[0][4],e[2]=0!==l?f[0][3]/l:0),e[0]<g[0]||e[0]>g[1]||e[1]<g[2]||e[1]>g[3]||c&&(e[2]<g[4]||e[2]>g[5]))&&(e.length=0);if(!e.length)if(b=b.lengths[0]?A(k,0,h[0],c,d):null)e[0]=b[0],e[1]=
b[1],c&&2<b.length&&(e[2]=b[2]);else return null;return a};b.lineCentroid=A;b.getLength2D=n;b.getLength3D=w;b.getMidpoint2D=N;b.getMidpoint3D=D})},"*now":function(k){k(['dojo/i18n!*preload*esri/tasks/support/nls/pbfDeps*["ar","bs","ca","cs","da","de","de-ch","el","en-au","en-ca","en-gb","en-us","es","es-mx","et","fi","fr","fr-ch","he","hr","hu","id","it","it-ch","ja","ko","lt","lv","nl","nb","pl","pt","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","uk","vi","zh-cn","zh-hk","zh-tw","ROOT"]'])},
"*noref":1}});define("esri/tasks/support/pbfDeps",["../../layers/vectorTiles/tasks/operations/pbfQueryUtils","../../layers/vectorTiles/layers/graphics/optimizedFeatures"],function(k,b){return{pbfQueryUtils:k,optimizedFeatures:b}});