// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/Scalebar","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/query ../kernel ../lang ../domUtils ../units ../SpatialReference ../WKIDUnitConversion ../geometry/Point ../geometry/ScreenPoint ../geometry/Polyline ../geometry/geodesicUtils ../geometry/webMercatorUtils ../geometry/screenUtils ../geometry/normalizeUtils dojo/i18n!../nls/jsapi".split(" "),function(n,l,m,g,p,q,F,w,G,k,
H,x,y,z,A,r,t,B,C,v,u,D,E,I){n=n(null,{declaredClass:"esri.dijit.Scalebar",map:null,mapUnit:null,scalebarUnit:null,unitsDictionary:[],domNode:null,screenPt1:null,screenPt2:null,localStrings:I.widgets.scalebar,constructor:function(a,b){this.metricScalebar=q.create("div",{innerHTML:"\x3cdiv class\x3d'esriScaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLine esriScalebarMetricLine'\x3e\x3c/div\x3e"});
this.englishScalebar=q.create("div",{innerHTML:"\x3cdiv class\x3d'esriScalebarLine esriScalebarEnglishLine'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e"});this.domNode=q.create("div");a=a||{};if(a.map){if(a.scalebarUnit){if("english"!==a.scalebarUnit&&"metric"!==a.scalebarUnit&&"dual"!==a.scalebarUnit){console.error("scalebar unit only accepts english or metric or dual");return}this.scalebarUnit=
a.scalebarUnit}else this.scalebarUnit="english";if(a.scalebarStyle){if("ruler"!==a.scalebarStyle&&"line"!==a.scalebarStyle){console.error("scalebar style must be ruler or line");return}this.scalebarStyle=a.scalebarStyle}else this.scalebarStyle="ruler";this.background=a.background;switch(this.scalebarUnit){case "english":"ruler"===this.scalebarStyle&&(this.englishScalebar.innerHTML="\x3cdiv class\x3d'esriScalebarRuler'\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_secondpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_secondpiece'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'scaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel' style\x3d'left: -3%'\x3e0\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarFirstNumber'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e");
this.domNode.appendChild(this.englishScalebar);break;case "metric":"ruler"===this.scalebarStyle&&(this.metricScalebar.innerHTML="\x3cdiv class\x3d'esriScalebarRuler'\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_secondpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_secondpiece'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'scaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel' style\x3d'left: -3%'\x3e0\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarFirstNumber'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e");
this.domNode.appendChild(this.metricScalebar);break;case "dual":this.domNode.appendChild(this.metricScalebar),this.domNode.appendChild(this.englishScalebar)}this.map=a.map;b?b.appendChild(this.domNode):(this.map.container.appendChild(this.domNode),a.attachTo?p.add(this.domNode,"scalebar_"+a.attachTo):p.add(this.domNode,"scalebar_bottom-left"));p.add(this.domNode,"esriScalebar");if(this.map.loaded)this._getDistance(),this._checkBingMaps();else var e=g.connect(this.map,"onLoad",this,function(){g.disconnect(e);
e=null;this._getDistance();this._checkBingMaps()});this._mapOnPan=g.connect(this.map,"onPan",this,this._getDistance);this._mapOnExtentChange=g.connect(this.map,"onExtentChange",this,this._getDistance);m.forEach(this.map.layerIds,function(a,b){"esri.virtualearth.VETiledLayer"===this.map.getLayer(a).declaredClass&&g.connect(this.map.getLayer(a),"onVisibilityChange",l.hitch(this,function(a){this._checkBingMaps()}))},this);this._mapOnLayerAdd=g.connect(this.map,"onLayerAdd",l.hitch(this,function(a){"esri.virtualearth.VETiledLayer"===
a.declaredClass&&g.connect(a,"onVisibilityChange",l.hitch(this,function(a){this._checkBingMaps()}));this._checkBingMaps()}));this._mapOnLayerRemove=g.connect(this.map,"onLayerRemove",l.hitch(this,this._checkBingMaps))}else console.error("scalebar: unable to find the 'map' property in parameters")},hide:function(){this._hidden=!0;y.hide(this.domNode)},show:function(){this._hidden=!1;y.show(this.domNode)},destroy:function(){g.disconnect(this._mapOnPan);g.disconnect(this._mapOnExtentChange);g.disconnect(this._mapOnLayerAdd);
g.disconnect(this._mapOnLayerRemove);this.hide();this.map=null;q.destroy(this.domNode)},_checkBingMaps:function(){p.contains(this.domNode,"scalebar_bottom-left")&&(w.set(this.domNode,"left","25px"),m.forEach(this.map.layerIds,function(a,b){"esri.virtualearth.VETiledLayer"===this.map.getLayer(a).declaredClass&&this.map.getLayer(a).visible&&(a="95px",this.map._mapParams.nav&&(a="115px"),w.set(this.domNode,"left",a))},this))},_getDistance:function(a){a=this.map._clip?this.map._getAvailExtent():a||this.map.extent;
var b=F.position(this.domNode,!0).y-this.map.position.y,b=b>this.map.height?this.map.height:b,b=0>b?0:b,e=new B(0,b),b=new B(this.map.width,b),c,f;this.mapUnit="esriDecimalDegrees";var d=D.toMapPoint(a,this.map.width,this.map.height,e),h=D.toMapPoint(a,this.map.width,this.map.height,b),e=new t(a.xmin,(a.ymin+a.ymax)/2,this.map.spatialReference),b=new t(a.xmax,(a.ymin+a.ymax)/2,this.map.spatialReference);this.map._clip&&(h=this.map.spatialReference._getInfo(),d=new t(h.valid[0],0,this.map.spatialReference),
h=new t(h.valid[1],0,this.map.spatialReference));if(3857===this.map.spatialReference.wkid||102100===this.map.spatialReference.wkid||102113===this.map.spatialReference.wkid||this.map.spatialReference.wkt&&-1!=this.map.spatialReference.wkt.indexOf("WGS_1984_Web_Mercator"))d=u.webMercatorToGeographic(d,!0),h=u.webMercatorToGeographic(h,!0),e=u.webMercatorToGeographic(e,!0),b=u.webMercatorToGeographic(b,!0);else if(x.isDefined(r[this.map.spatialReference.wkid])||this.map.spatialReference.wkt&&0===this.map.spatialReference.wkt.indexOf("PROJCS")){this.mapUnit=
"linearUnit";a=Math.abs(a.xmax-a.xmin);if(x.isDefined(r[this.map.spatialReference.wkid]))c=r.values[r[this.map.spatialReference.wkid]];else{c=this.map.spatialReference.wkt;f=c.lastIndexOf(",")+1;var g=c.lastIndexOf("]]");c=parseFloat(c.substring(f,g))}a*=c;f=a/1609;c=a/1E3;a/=1E3}"esriDecimalDegrees"===this.mapUnit&&(c=v.isSupported(this.map.spatialReference)?this.map.spatialReference.wkid:4326,a=new C(new A({wkid:c})),a.addPath([d,h]),d=E._straightLineDensify(a,10),a=v.geodesicLengths([d],z.KILOMETERS)[0],
d=new C(new A({wkid:c})),d.addPath([e,b]),e=E._straightLineDensify(d,10),v.geodesicLengths([e],z.KILOMETERS),f=a/1.609,c=a);"english"===this.scalebarUnit?this._getScaleBarLength(f,"mi"):"metric"===this.scalebarUnit?this._getScaleBarLength(c,"km"):"dual"===this.scalebarUnit&&(this._getScaleBarLength(f,"mi"),this._getScaleBarLength(c,"km"))},_getScaleBarLength:function(a,b){var e=this.map._getFrameWidth();a=50*a/(this.map._clip&&0<e?e:this.map.width);var e=0,c=b;.1>a&&("mi"===b?(a*=5280,c="ft"):"km"===
b&&(a*=1E3,c="m"));for(;1<=a;)a/=10,e++;var f,d;.5<a?(f=1,d=.5):.3<a?(f=.5,d=.3):.2<a?(f=.3,d=.2):.15<a?(f=.2,d=.15):.1<=a&&(f=.15,d=.1);b=f/a>=a/d?d:f;this._drawScaleBar(b/a*50,Math.pow(10,e)*b,c)},_drawScaleBar:function(a,b,e){var c=2*Math.round(a),f,d;"mi"===e||"ft"===e?(this.englishScalebar.style.width=c+"px",a=k(".esriScalebarFirstNumber",this.englishScalebar),f=k(".esriScalebarSecondNumber",this.englishScalebar),d=k(".esriScalebarMetricLineBackground",this.englishScalebar)):(this.metricScalebar.style.width=
c+"px",a=k(".esriScalebarFirstNumber",this.metricScalebar),f=k(".esriScalebarSecondNumber",this.metricScalebar),d=k(".esriScalebarMetricLineBackground",this.metricScalebar));m.forEach(d,function(a,b){a.style.width=c-2+"px"},this);m.forEach(a,function(a,c){a.innerHTML=b},this);m.forEach(f,function(a,c){a.innerHTML="esriUnknown"!==this.mapUnit?2*b+this.localStrings[e]:2*b+"Unknown Unit"},this)}});G("extend-esri")&&l.setObject("dijit.Scalebar",n,H);return n});