// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/ColorPicker/templates/ColorPicker.html":'\x3cdiv class\x3d"${css.container}" aria-label\x3d"${labels.widgetLabel}"\x3e\r\n  \x3cdiv class\x3d"${css.header}" data-dojo-attach-point\x3d"dap_header" tabindex\x3d"0"\x3e\r\n    \x3cspan class\x3d"${css.swatchPreview} ${css.container}"\x3e\r\n      \x3cspan class\x3d"${css.swatch} ${css.swatchTransparencyBackground}"\x3e\x3c/span\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"dap_previewSwatch"\r\n            class\x3d"${css.swatch}"\x3e\x3c/span\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan aria-hidden\x3d"true" role\x3d"presentation"\r\n          class\x3d"${css.collapseIcon} ${css.downArrowIcon}"\x3e\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"${css.colorControls}" data-dojo-attach-point\x3d"dap_colorControls"\r\n       id\x3d"${id}-color-controls" tabindex\x3d"-1"\x3e\r\n    \x3cdiv class\x3d"${css.middle}"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_paletteContainer"\r\n           class\x3d"${css.palette} ${css.container}" tabindex\x3d"0"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dap_primaryPalette"\r\n             class\x3d"${css.palette}" role\x3d"grid"\x3e\x3c/div\x3e\x3c!--\r\n      --\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dap_secondaryPalette"\r\n             class\x3d"${css.palette}" role\x3d"grid"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"${css.paletteOptions}"\x3e\r\n        \x3cinput type\x3d"text" aria-label\x3d"${labels.selectedColor}" data-dojo-type\x3d"dijit/form/TextBox"\r\n               data-dojo-attach-point\x3d"dap_hexInput" class\x3d"${css.hexInput}" /\x3e\r\n        \x3cinput class\x3d"${css.paletteToggle}" type\x3d"button"\r\n               data-dojo-type\x3d"dijit/form/ToggleButton"\r\n               data-dojo-attach-point\x3d"dap_paletteToggle"\r\n               label\x3d"${labels.more}" /\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"${css.footer}" data-dojo-attach-point\x3d"dap_footer"\x3e\r\n      \x3cdiv class\x3d"${css.section} ${css.displayNone}"\r\n           data-dojo-attach-point\x3d"dap_suggestedColorSection"\x3e\r\n        \x3cdiv class\x3d"${css.label}" id\x3d"${id}-suggested-colors-label"\x3e${labels.suggested}\x3c/div\x3e\r\n        \x3cdiv class\x3d"${css.suggested} ${css.palette}"\r\n             aria-labelledby\x3d"${id}-suggested-colors-label"\r\n             data-dojo-attach-point\x3d"dap_suggestedColorPaletteContainer"\r\n             tabindex\x3d"0" role\x3d"grid"\x3e\r\n          \x3cdiv class\x3d"${css.suggested} ${css.swatchRow}"\r\n               data-dojo-attach-point\x3d"dap_suggestedColorPalette"\r\n               role\x3d"row"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"${css.section}"\r\n           data-dojo-attach-point\x3d"dap_recentColorSection"\x3e\r\n        \x3cdiv class\x3d"${css.label}" id\x3d"${id}-recent-colors-label"\x3e${labels.recent}\x3c/div\x3e\r\n        \x3cdiv class\x3d"${css.recent} ${css.palette}" aria-labelledby\x3d"${id}-recent-colors-label"\r\n             data-dojo-attach-point\x3d"dap_recentColorPaletteContainer"\r\n             tabindex\x3d"0" role\x3d"grid"\x3e\r\n          \x3cdiv class\x3d"${css.recent} ${css.swatchRow}"\r\n               data-dojo-attach-point\x3d"dap_recentColorPalette"\r\n               role\x3d"row"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"${css.section}"\r\n           data-dojo-attach-point\x3d"dap_transparencySection"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dap_transparencyLabel"\r\n             class\x3d"${css.label}"\x3e${labels.transparency}\r\n      \x3c/div\x3e\r\n        \x3cdiv class\x3d"${css.transparencySlider}"\r\n             data-dojo-attach-point\x3d"dap_transparencySlider"\r\n             data-dojo-type\x3d"esri/dijit/HorizontalSlider"\r\n             data-dojo-props\x3d"minimum: 0, maximum: 100, discreteValues: 100, labels: ${_transparencyLabels}"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/ColorPicker","../Color ../kernel ./_EventedWidget ./_Tooltip ./ColorPicker/colorUtil ./ColorPicker/HexPalette dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/a11yclick dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/keys dojo/on dojo/query dojo/sniff dojo/dom-style dojo/i18n!../nls/jsapi dojo/text!./ColorPicker/templates/ColorPicker.html ./HorizontalSlider dijit/form/RadioButton dijit/form/TextBox dijit/form/ToggleButton dojo/NodeList-dom".split(" "),
function(q,z,r,A,f,w,B,C,u,l,D,h,g,p,m,k,v,x,n,y,E){r=D([r,B,C,A],{baseClass:"esriColorPicker",css:{container:"esriContainer",collapsed:"esriCollapsed",collapsible:"esriCollapsible",collapseIcon:"esriCollapseIcon",colorControls:"esriColorControls",header:"esriHeader",footer:"esriFooter",middle:"esriMiddle",swatch:"esriSwatch",swatchRow:"esriSwatchRow",swatchEmpty:"esriSwatchEmpty",swatchPreview:"esriSwatchPreview",swatchTransparencyBackground:"esriSwatchTransparencyBackground",focusedSwatch:"esriSwatch--focused",
palette:"esriPalette",paletteOptions:"esriPaletteOptions",paletteToggle:"esriPaletteToggle",label:"esriLabel",hexInput:"esriHexInput",recent:"esriRecent",suggested:"esriSuggested",selected:"esriSelected",disabled:"esriDisabled",section:"esriSection",displayNone:"esriDisplayNone",transparencySlider:"esriTransparencySlider",alt:"esriAlt",downArrowIcon:"esri-icon-down"},declaredClass:"esri.dijit.ColorPicker",labels:y.widgets.colorPicker,templateString:E,constructor:function(a,b){a=a||{};this._colorInstance=
new q;this._brightsPalette=new w({colors:a.palette});this._pastelsPalette=new w({colors:this._toPastels(this._brightsPalette.get("colors"))});this._activePalette=this._brightsPalette;this._swatchCreator=a.swatchCreator||this._createSwatch;this._swatches={};this._recentSwatches={};this._suggestedSwatches={}},buildRendering:function(){this.inherited(arguments);this._createPalettes();this._noColorSwatchNode=p.create("div",{"aria-label":this.labels.noColorTooltip,className:this.css.swatch+" "+this.css.swatchEmpty,
tabIndex:0,role:"button"},this.dap_hexInput.domNode,"after")},postCreate:function(){this.inherited(arguments);this._addListeners();this._selectColor();this.dap_hexInput.intermediateChanges=!0;this.dap_transparencySlider.intermediateChanges=!0;this.createTooltips([{node:this.dap_paletteContainer,label:this.labels.paletteTooltip},{node:this.dap_hexInput,label:this.labels.hexInputTooltip},{node:this._noColorSwatchNode,label:this.labels.noColorTooltip},{node:this.dap_paletteToggle,label:this.labels.moreColorsTooltip}])},
_activePalette:null,_autoCollapseHandle:null,_brightsPalette:null,_colorInstance:null,_noColorSwatchNode:null,_pastelsPalette:null,_previousColor:null,_swatchCreator:null,_swatches:null,_swatchNavigationIndex:null,_transparencyLabels:function(){return"["+[0,50,100].map(function(a){return h.replace(y.widgets.colorPicker.percent,{percent:a})}).map(function(a){return"'"+a+"'"})+"]"}(),collapsed:!1,_setCollapsedAttr:function(a){this.collapsible&&(g.toggle(this.domNode,this.css.collapsed,a),this._set("collapsed",
a),a?this.domNode.setAttribute("aria-expanded","true"):(this.domNode.setAttribute("aria-expanded","false"),this.dap_paletteContainer.focus()))},collapsible:!1,_setCollapsibleAttr:function(a){g.toggle(this.domNode,this.css.collapsible,a);this.dap_header.tabIndex=a?0:-1;if(a){this.domNode.setAttribute("role","button");this.domNode.setAttribute("aria-haspopup","menu");this.domNode.setAttribute("aria-controls",this.dap_colorControls.id);this.domNode.setAttribute("aria-expanded",(!this.collapsed).toString());
if(!this._autoCollapseHandle){k(this.domNode,"keydown",function(a){var b=!this.collapsed&&a.keyCode!=m.ESCAPE;this.collapsed&&a.keyCode!=m.ENTER&&a.keyCode!=m.SPACE||b||(a.preventDefault(),a.keyCode===m.ESCAPE?(this.dap_header.focus(),this.set("collapsed",!0)):(this.set("collapsed",!1),this.dap_paletteContainer.focus()))}.bind(this));var b=k.pausable(this.ownerDocument,"click",function(a){a=this.domNode.contains(a.target);this.collapsed||a||this.set("collapsed",!0)}.bind(this));this._autoCollapseHandle=
b;this.own(b)}this._autoCollapseHandle.resume()}else this.domNode.removeAttribute("role"),this.domNode.removeAttribute("aria-haspopup"),this.domNode.removeAttribute("aria-controls"),this.domNode.removeAttribute("aria-expanded"),this._autoCollapseHandle&&this._autoCollapseHandle.pause();this._set("collapsible",a)},color:null,_getColorAttr:function(){return"no-color"===this.color?"no-color":new q(this.color)},_setColorAttr:function(a,b){a=a||"no-color";b=b||void 0===b;if(!this.required){if("no-color"===
a){this._set("color","no-color");this._previousColor="no-color";this._disableTransparencySlider();this._clearSelection();this._silentlyUpdateHexInput("no-color");this._updatePreviewSwatch(a);g.add(this._noColorSwatchNode,this.css.selected);b&&this.emit("color-change",{color:"no-color"});return}this._enableTransparencySlider();g.remove(this._noColorSwatchNode,this.css.selected)}a=f.normalizeColor(a);var d=this._previousColor,c=this._colorInstance,e=this.css.selected;if(d){if(f.equal(d,a))return;if(d=
this._findSwatch({colors:this._activePalette.get("colors"),color:d,swatches:this._swatches}))g.remove(d,e),n.set(d,"borderColor","")}c.setColor(a);e=c.toHex();this._set("color",new q(c));this._previousColor=a;this._silentlyUpdateIntermediateChangingValueWidget(this.dap_transparencySlider,100*(1-c.a));this._updatePreviewSwatch(c);this._checkSelection();this._silentlyUpdateHexInput(c);this.trackColors&&this._addRecentColor(e);b&&this.emit("color-change",{color:new q(c)})},colorsPerRow:13,_setColorsPerRow:function(a){this._set("colorsPerRow",
0<a?a:13)},_setPaletteAttr:function(a){var b=this._activePalette===this._brightsPalette;this._brightsPalette.set("colors",a);this._pastelsPalette.set("colors",this._toPastels(this._brightsPalette.get("colors")));this._activePalette=b?this._brightsPalette:this._pastelsPalette;this._createPalettes();this._togglePalette(!b)},recentColors:[],_getRecentColorsAttr:function(){return l.map(this.recentColors,function(a){return f.normalizeColor(a)})},_setRecentColorsAttr:function(a){this.recentColors=a||[];
this.recentColors=l.map(this.recentColors,function(a){return f.normalizeColor(a).toHex()});0===this.recentColors.length?this._clearRecentSwatches():this._renderRecentSwatches()},required:!1,_setRequiredAttr:function(a){g.toggle(this._noColorSwatchNode,this.css.displayNone,a);this._set("required",a)},_showRecentColors:!0,_setShowRecentColorsAttr:function(a){g.toggle(this.dap_recentColorSection,this.css.displayNone,!a);this._set("showRecentColors",a)},_showSuggestedColors:!1,_setShowSuggestedColorsAttr:function(a){g.toggle(this.dap_suggestedColorSection,
this.css.displayNone,!a);this._set("showSuggestedColors",a)},_showTransparencySlider:!0,_setShowTransparencySliderAttr:function(a){g.toggle(this.dap_transparencySection,this.css.displayNone,!a);this._set("showTransparencySlider",a)},suggestedColors:null,_getSuggestedColorsAttr:function(){return l.map(this.suggestedColors,function(a){return f.normalizeColor(a)})},_setSuggestedColorsAttr:function(a){this._clearSuggestedSwatches();this.suggestedColors=a||[];this.suggestedColors=l.map(this.suggestedColors,
function(a){return f.normalizeColor(a).toHex()});0<this.suggestedColors.length&&this._renderSuggestedSwatches()},trackColors:!0,addRecentColor:function(a){a&&"no-color"!==a&&this._addRecentColor(f.normalizeColor(a).toHex())},loadRecentColors:function(a){this.set("recentColors",JSON.parse(localStorage.getItem(a)))},saveRecentColors:function(a){localStorage.setItem(a,JSON.stringify(this.get("recentColors")))},_toPastels:function(a){var b=this._colorInstance,d=new q([238,238,238]);return l.map(a,function(a){return q.blendColors(b.setColor(a),
d,.2)},this)},_createSwatch:function(a){var b=a.className,d=a.hexColor||"transparent";a=a.paletteNode;var c=this.id+"_"+b.replace(" ","-")+"_"+d.replace("#","");return p.create("span",{id:c,"aria-label":d,role:"gridcell",className:b,style:{background:d}},a)},_createSwatches:function(a,b){var d=this.css.swatch,c=this.css.swatchRow,e=this.colorsPerRow;b=b.get("colors");var t,f;l.forEach(b,function(b,g){0===g%e&&(t=p.create("div",{className:c,role:"row"},a));f=this._swatchCreator({className:d,hexColor:b,
paletteNode:t});this._swatches[b]=f},this)},_selectColor:function(){var a=this.color||this._activePalette.get("colors")[0];this.set("color",a)},_setColorWithCurrentAlpha:function(a){"no-color"!==a&&"no-color"!==this.color&&(a=f.normalizeColor(a),a.a=this.color.a);this.set("color",a)},_updatePreviewSwatch:function(a){var b=this.css.swatchEmpty,d=this.dap_previewSwatch,c,e;"no-color"===a?(g.add(d,b),n.set(d,{backgroundColor:"",borderColor:""})):(c=f.getContrastingColor(a),e=8!==x("ie"),g.remove(d,b),
b=a.toCss(e),c=c.toCss(e),c={backgroundColor:b,borderColor:c},e||(c.opacity=a.a),n.set(d,c))},_showBrights:function(){g.remove(this.dap_paletteContainer,this.css.alt);this._activePalette=this._brightsPalette},_showPastels:function(){g.add(this.dap_paletteContainer,this.css.alt);this._activePalette=this._pastelsPalette},_setColorFromSwatch:function(a){a=n.get(a,"backgroundColor");this._setColorWithCurrentAlpha(a)},_checkSelection:function(){var a=this.get("color");this._activePalette.contains(a)?this._highlightColor(a):
this._clearSelection()},_landSwatch:function(a){var b=a.index,d=a.colors,c=a.swatches;a=a.paletteNode;var e=d[b],d=e&&this._findSwatch({colors:d,color:e,swatches:c}),c=this.css.focusedSwatch;v("."+c,a).removeClass(c).style("borderColor","");a.removeAttribute("aria-activedescendant");this._swatchNavigationIndex=b;d&&null!=b&&(g.add(d,c),b=f.getContrastingColor(f.normalizeColor(e)),n.set(d,"borderColor",b.toHex()),a.setAttribute("aria-activedescendant",d.id))},_navigateSwatches:function(a,b){var d=
a.keyCode,c=b.color,e=b.colors,t=b.swatches;b=b.paletteNode;c="no-color"===c?-1:e.indexOf(c.toHex());c=null!=this._swatchNavigationIndex?this._swatchNavigationIndex:-1<c?c:0;if(d===m.ENTER)this._landSwatch({paletteNode:b,colors:e,index:null,swatches:t}),this.set("color",e[c]);else{var f=this.colorsPerRow;d===m.LEFT_ARROW&&c--;d===m.RIGHT_ARROW&&c++;d===m.DOWN_ARROW&&(c+=f,c>e.length&&(c%=f),a.preventDefault());d===m.UP_ARROW&&(c-=Math.min(f,e.length),0>c&&(c=e.length+c),a.preventDefault());-1===c?
c=e.length-1:c===e.length&&(c=0);this._landSwatch({paletteNode:b,colors:e,index:c,swatches:t})}},_addListeners:function(){var a="."+this.css.swatch,b=this.dap_paletteContainer;this.own(k(b,k.selector(a,u),h.hitch(this,function(a){this._setColorFromSwatch(a.target)})),k(b,"blur",h.hitch(this,function(){this._landSwatch({paletteNode:b,colors:this._activePalette.get("colors"),index:null})})),k(b,"keydown",h.hitch(this,function(a){this._navigateSwatches(a,{color:this.get("color"),colors:this._activePalette.get("colors"),
paletteNode:b,swatches:this._swatches})})));var d=this.dap_recentColorPaletteContainer;this.own(k(d,k.selector(a,u),h.hitch(this,function(a){this._setColorFromSwatch(a.target)})),k(d,"keydown",h.hitch(this,function(a){this._navigateSwatches(a,{color:"no-color",colors:this.recentColors,paletteNode:d,swatches:this._recentSwatches})})),k(d,"blur",h.hitch(this,function(){this._landSwatch({paletteNode:d,colors:this.recentColors,index:null})})));var c=this.dap_suggestedColorPaletteContainer;this.own(k(c,
k.selector(a,u),h.hitch(this,function(a){this._setColorFromSwatch(a.target)})),k(c,"keydown",h.hitch(this,function(a){this._navigateSwatches(a,{color:"no-color",colors:this.suggestedColors,paletteNode:c,swatches:this._suggestedSwatches})})),k(c,"blur",h.hitch(this,function(){this._landSwatch({paletteNode:c,colors:this.suggestedColors,index:null})})));this.own(k(this._noColorSwatchNode,u,h.hitch(this,function(a){this.set("color","no-color")})));var e=this.dap_hexInput;e.on("blur",h.hitch(this,function(){var a=
f.normalizeHex(e.get("value"));f.isShorthandHex(a)?this._setColorWithCurrentAlpha(a):this._silentlyUpdateHexInput(this.color)}));e.on("change",h.hitch(this,function(){var a=f.normalizeHex(e.get("value"));f.isLonghandHex(a)&&("no-color"!==this.color&&this.color.toHex()===a||this._setColorWithCurrentAlpha(a))}));this.dap_transparencySlider.on("change",h.hitch(this,function(a){var b=this.get("color");"no-color"!==b&&(b=f.normalizeColor(this._colorInstance.setColor(b)),b.a=1-a/100,this._updatePreviewSwatch(b),
this._silentlyUpdateHexInput(b),this.set("color",b))}));this.dap_paletteToggle.on("change",h.hitch(this,this._togglePalette));this.own(k(this.dap_header,"click",function(){this.collapsible&&this.set("collapsed",!this.collapsed)}.bind(this)))},_togglePalette:function(a){this.dap_paletteToggle.set("checked",a,!1);a?this._showPastels():this._showBrights();this._checkSelection()},_createPalettes:function(){this._swatches={};p.empty(this.dap_primaryPalette);p.empty(this.dap_secondaryPalette);this._createSwatches(this.dap_primaryPalette,
this._brightsPalette);this._createSwatches(this.dap_secondaryPalette,this._pastelsPalette)},_silentlyUpdateHexInput:function(a){a="no-color"===a?"":a.toHex();this._silentlyUpdateIntermediateChangingValueWidget(this.dap_hexInput,a)},_silentlyUpdateIntermediateChangingValueWidget:function(a,b){a.intermediateChanges=!1;a.set("value",b,!1);a.intermediateChanges=!0},_addRecentColor:function(a){if(a){var b=this.recentColors,d=l.indexOf(b,a);-1<d&&b.splice(d,1);b.unshift(a);b.length>this.colorsPerRow&&b.pop();
this._renderRecentSwatches()}},_renderRecentSwatches:function(){if(this.recentColors){var a=this.css.recent,b=this.css.swatch,d=v("."+a+"."+b,this.dap_recentColorPalette);this._recentSwatches={};l.forEach(this.recentColors,function(c,e){e<this.colorsPerRow&&(e+1>d.length&&d.push(this._swatchCreator({hexColor:c,className:b+" "+a,paletteNode:this.dap_recentColorPalette})),e=d[e],this._recentSwatches[c]=e,n.set(e,"backgroundColor",c))},this)}},_renderSuggestedSwatches:function(){if(this.suggestedColors){var a=
this.css.suggested,b=this.css.swatch,d=v("."+a+"."+b,this.dap_suggestedColorPalette);this._suggestedSwatches={};l.forEach(this.suggestedColors,function(c,e){e<this.colorsPerRow&&(e+1>d.length&&d.push(this._swatchCreator({hexColor:c,className:b+" "+a,paletteNode:this.dap_suggestedColorPalette})),e=d[e],this._suggestedSwatches[c]=e,n.set(e,"backgroundColor",c))},this)}},_clearRecentSwatches:function(){p.empty(this.dap_recentColorPalette)},_clearSuggestedSwatches:function(){p.empty(this.dap_suggestedColorPalette)},
_clearSelection:function(){var a=this.css.selected;v("."+a,this.dap_paletteContainer).removeClass(a).removeAttr("aria-selected")},_highlightColor:function(a){var b=this.css.selected,d=this._findSwatch({colors:this._activePalette.get("colors"),color:a,swatches:this._swatches});d&&(a=f.normalizeColor(a),a=f.getContrastingColor(a),g.add(d,b),n.set(d,"borderColor",a.toHex()),d.setAttribute("aria-selected",!0))},_findSwatch:function(a){var b=a.colors,d=this._colorInstance.setColor(a.color).toHex(),c;-1<
l.indexOf(b,d)&&(c=a.swatches[d]);return c},_enableTransparencySlider:function(){g.remove(this.dap_transparencyLabel,this.css.disabled);this.dap_transparencySlider.set("disabled",!1)},_disableTransparencySlider:function(){g.add(this.dap_transparencyLabel,this.css.disabled);this.dap_transparencySlider.set("disabled",!0)}});r.NO_COLOR="no-color";x("extend-esri")&&h.setObject("dijit.ColorPicker",r,z);return r});