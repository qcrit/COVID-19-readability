/*jshint esversion:	6 */

(function($, window, document, undefined) {

	/*
		TemplatePackage	Widget Common Functionality	- 03/2015 -	G. Ewing

		** Description / Purpose ***********************************************************************************************

		This file is intended to be	called locally by any CDC widget, it will load common widget functionality for
		all	widgets.

		The	intent is common scripts can be	shared in to:
		1. Re Use Core Code	/ Increase Managability	/ Decrease Maintenance Time	/ Redundancy
		2. Reduce completity of	individual widget libraries
		3. Reduce Complexity / DeMystify Metrics Calling

		***************************************************************************************************************************
	*/

	window.CDC = window.CDC	|| {};
	window.CDC.Widget =	window.CDC.Widget || {};
	window.CDC.Syndication = window.CDC.Syndication	|| (function ($, window, document, undefined) {

		var	optionMap, initCallback, pvtMethods	= {};

		initCallback = function	() {
			return true;
		};

		// SET OPTION MAPS
		optionMap =	{
			mediatype: 'urlBypass',
			mediaid: 'urlBypass',
			apiroot: 'urlBypass',
			api: 'urlBypass',
			cssclasses:	'',
			ids: '',
			xpath: '',
			stripscripts: true,
			stripanchors: false,
			stripimages: false,
			stripcomments: true,
			stripstyles: true,
			imagefloat:	'none',
			oe:	'UTF-8',
			of:	'XHTML',
			ns:	'cdc',
			nw:	true,
			w: '',
			h: '',
			font: 'urlBypass',
			postprocess: 'urlBypass',
			templateversion: 'urlBypass'
		};

		// CREATE PRIVATE METHODS
		pvtMethods.setOptions =	function (callParams) {
			var	options, currOption;

			options	= {};

			for	(currOption	in optionMap) {
				if (callParams.hasOwnProperty(currOption) && !!callParams[currOption]) {
					options[currOption]	= callParams[currOption];
				} else {
					options[currOption]	= optionMap[currOption];
				}
			}
			return options;
		};
		pvtMethods.buildUrl	= function (contentOptions)	{

			if (contentOptions.mediaid == '') { alert('No Media Id was specified.'); return; }

			var	url;

			// Switch between dev &	prod api roots if generically specified
			switch (contentOptions.api)	{
			case 'dev':
				url	= 'https://oadc-dmb-dev-service.cdc.gov/api/v2/resources/media/' + contentOptions.mediaid +	'/syndicate?';
				break;
			// Future proofing,	this could be used as the default case and updated as needed if	the	API	changes	(otherwise embed code would	need to	be updated)
			//case 'prod':
				default:
				//not sure if this is need or not, but should probably check for apiroot anyways - Jim 8-8-19
				if ( contentOptions.apiroot	) {
					url	= contentOptions.apiroot + '/v2/resources/media/' +	contentOptions.mediaid + '/syndicate?'
				} else {
					url	= 'https://tools.cdc.gov/api/v2/resources/media/' +	contentOptions.mediaid + '/syndicate?';
				}
				break;
			}

			var	qryString =	[];
			var	currOption = null;

			// port	form syndicationiframe widget set default values for anything not set by default and not meant to be pypassed for for url purposes
			for	(currOption	in optionMap) {
				if (optionMap[currOption] != 'urlBypass') {
					if (contentOptions[currOption] != '') {
						qryString.push(currOption +	'='	+ contentOptions[currOption]);
					}
				}
			}
			qryString.push('callback=?');

			//add class	TODO - MOVE	($obj too)
			//runtime.jquery($obj).addClass(options.cssclasses);

			return url += qryString.join('&');
			// Load	with CS	injection
			// return MakeAsyncRequest(url,	$, $obj, options.mediaid);
		};
		pvtMethods.handleCallback =	function (runtime) {

			// SWITCH ON CONTENT VERSION
			if (runtime.templateversion	== '4')	{
				pvtMethods.v4Handler(runtime);
			} else {
				pvtMethods.v3Handler(runtime);
			}

			if (typeof runtime.initOptions.callback	===	'function')	{
				return runtime.initOptions.callback(runtime);
			}

			return false;
		};
		pvtMethods.getContentFromService = function	(runtime, jsonUrl, matches) {
			var fetchUrl = jsonUrl ? jsonUrl : runtime.contentUrl;
			runtime.jquery.ajax({
				url: fetchUrl,
				dataType: 'json'
			}).done(function (response)	{
				var jsonContent = response.results.content;

				if (response.results && jsonContent) {
					runtime.apiResponse	= response;

					// Remove Floats? runtime.content = response.results.content.replace(/float:right/gi, '');
					// Assign runtime content from api results
					runtime.content	= jsonContent;

					// Template	version	determination
					if (runtime.callParams.templateversion)	{
						// Has an override templateVersion been	passed?
						runtime.templateversion	= runtime.callParams.templateversion;
					} else if(response.results.templateVersion && response.results.templateVersion.length) {
						// Has valid templateVersion has been returned in the api results?
						runtime.templateversion	= response.results.templateVersion;
					} else {
						// Fallback	to version 3 (first	supported version of this widget)
						runtime.templateversion	= '3';
					}

					// Normalize version
					// We only really care about the major version of the cemplate (3, 4, etc. so only take	the	first character	of the string);
					runtime.templateversion	= runtime.templateversion[0];

					var	searchParams = window.cdcCommon.getCallParam('csearch');
					if (searchParams === null) { searchParams =	'';	}

					var	strCallingPageUrl =	window.cdcCommon.getCallParam('chost') + window.cdcCommon.getCallParam('cpath')	+ searchParams;
					var	strCallingPageTitle	= window.cdcCommon.getCallParam('ctitle');
					var	strCallingHost = window.cdcCommon.getCallParam('chost');


					var pageName = response.results.name;
					var sourceUrl =	response.results.sourceUrl;

					var	c1 = (typeof sourceUrl !== 'undefined')	? sourceUrl.replace('\t', '').replace('\r',	'').replace('\n', '') :	'',
						documenttitle =	strCallingPageTitle,
						c3 = strCallingHost,
						urlreferrer	= strCallingPageUrl,
						c6 = response.results.mediaId,
						c11	= response.results.mediaType,
						pageName = pageName.replace('\t', '').replace('\r',	'').replace('\n', ''),
						sliceAry = sourceUrl.split('/'),
						channel	= sliceAry[0] +	'//' + sliceAry[2] + '/' + sliceAry[3];

					var	S4 = function () {
						return (((1	+ Math.random()) * 0x10000)	| 0).toString(16).substring(1);
					};

					var	guid = function	() {
						return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
					};

					var	url	= 'https://cdc.112.2o7.net/b/ss/cdcsynd/1/JS-2.0.0/0?cl=session' +
						'&c1=' + encodeURIComponent(c1)	+
						'&c2=' +	encodeURIComponent(documenttitle) +
						'&c6=' + encodeURIComponent(c6)	+
						'&c11='	+ encodeURIComponent(c11) +
						'&c3=' + encodeURIComponent(c3) +
						'&ch='	+ encodeURIComponent(channel) +
						'&pageName=' + encodeURIComponent(pageName)	+
						((sourceUrl && sourceUrl.length > 0) ? '&g=' + encodeURIComponent(sourceUrl) : '') +
						'&c16='	+ encodeURIComponent(urlreferrer) +
						'&uid=' + guid();

					var	beaconId = 'cdc-metrics-beacon';
					var	imageBeacon	= runtime.jquery('#cdc-syndication img#' + beaconId);
					if (imageBeacon.length === 0) {
						runtime.jquery('#cdc-syndication').append(runtime.jquery('<img />').attr('id', beaconId).attr('alt', 'metrics image beacon').attr('src', url));
					} else {
						imageBeacon.attr('src',	url);
					}

					runtime.sourceUrl = sourceUrl;

					pvtMethods.handleCallback(runtime)
				}
			}).fail(function (xhr, ajaxOptions,	thrownError) { /*alert(xhr.status);	alert(thrownError);*/ });
		};
		pvtMethods.v3Handler = function	(runtime) {

			// LOCAL VARS
			var	currentContentModules, $container, applyDomUpdates,	headContent	= [], footContent =	[];

			// GET DOM CONTAINER
			$container = runtime.jquery('.widget-content');

			// PUSH	CONTENT	TO DOM CONTAINER
			$container.html(runtime.content);

			// CODE	FOR	FLEXSLIDERS
			window.flexobjs	= window.flexobjs || [];
			$('.standard-slider [id^="slider_"]').each(function(index, el){
				flexobjs.push({id: '#' + el.id},{
					pauseOnHover: true,
					slideshow: true,
					slideshowSpeed:	7000,
					animationSpeed:	600,
					randomize: false,
					startAt: 0,
					animationLoop: true
				});
			});
			$('.thumbnail-slider [id^="slider_"]').each(function(index,	el){
				flexobjs.push({id: '#' + el.id},{
					slideshow: false,
					controlNav:	true,
					pauseOnHover: true,
					pauseOnFocus: true
				});
			});
			$('.thumbnail-slider [id^="carousel_"]').each(function(index, el){
				flexobjs.push({id: '#' + el.id,
					thumbnailsPerPage: 4},{
					slideshow: false,
					animation: "slide",
					itemMargin:	5,
					pauseOnHover: true,
					controlNav:	true
				});
			});
			$('.carousel-slider [id^="slider_"]').each(function(index, el){
				flexobjs.push({id: '#' + el.id},{
					slideshow: false,
					controlNav:	false,
					pauseOnHover: true,
					pauseOnFocus: true
				});
				$(el).siblings().each(function(index, sibling){
					if(sibling.id.indexOf('carousel_') !== -1) {
					   flexobjs.push({id: '#' +	sibling.id,	thumbnailsPerPage: 4},{
							slideshow: false,
							animation: "slide",
							itemMargin:	5,
							pauseOnHover: true,
							controlNav:	true,
							asNavFor: '#' +	el.id
						});
					}
				});
			});

			// SET CONTENT NAMESPACE
			$container.addClass(runtime.contentOptions.ns);

			applyDomUpdates	= function () {
				// APPEND HEAND	AND	FOOT CONTENTS TO THEIR RESPECTIVE PLACES
				runtime.jquery('head').append(headContent.join(''));
				runtime.jquery('body').append(footContent.join(''));
				// CLEAR HEAD AND FOOT CONTENT ARRAYS
				headContent	= [];
				footContent	= [];
			};

			// CHECK FOR FONT OVERRIDE
			if (runtime.contentOptions.font	!= 'urlBypass')	{
				headContent.push('<style>body, h1, h2, h3, h4, h5, h6, p, li, button, strong, input, select, textarea {font-family:' + runtime.contentOptions.font + ' !important;}</style>');
			}

			// LOAD	3X HEAD	INCLUDE
			runtime.jquery.ajax({
				url: '/TemplatePackage/contrib/widgets/tp-syndication/tp3x/include-resources-base.html',
				dataType: 'html'
			}).done(function (htmlReturn) {

				headContent.push(htmlReturn);

				// APPLY UPDATES
				applyDomUpdates();

				// THEN	CHECK FOR TABS & ACCORDIONS...

				// GET/SET POSSIBLE	MODULES
				currentContentModules =	{
					accordions:	runtime.jquery('.accordion'),
					tabs: runtime.jquery('.tabs'),
					collapsibles: runtime.jquery('.tp-collapsible')
				};

				// DO ANY MODULES NEED TO BE LOADED?
				if (currentContentModules.accordions.length	|| currentContentModules.tabs.length) {

					// SET THE CALLBACK	FOR	THIS TEMPLATE VERSION
					initCallback = function	() {
						if (currentContentModules.accordions.length) {
							currentContentModules.accordions.accordion({
								heightStyle: "content"
							});
						}
						if (currentContentModules.tabs.length) {
							currentContentModules.tabs.tabs();
							currentContentModules.tabs.css('visibility', 'visible');
							currentContentModules.tabs.children('div').css('visibility', 'visible');
							currentContentModules.tabs.find('.ui-tabs-nav').css('display', 'none');
						}
						return true;
					};

					// LOAD	JQUERYUI STYLES
					headContent.push('<link rel="stylesheet" type="text/css" href="/TemplatePackage/3.0/css/lib/jquery-ui/jquery-ui.css">');
					// LOAD	JQUERY UI -	NOTE THE ONLOAD	METHOD CALLS THE "initCallback"	METHOD WE REDEFINED	JUST ABOVE
					footContent.push('<script src="https://tools.cdc.gov/TemplatePackage/3.0/js/libs/jquery-ui.js" onload="window.CDC.Syndication.initCallback()"></script>');
					// APPLY UPDATES
					applyDomUpdates();
				} else if (currentContentModules.collapsibles.length) {
				  console.log('collapsibles found!');
				}
				setTimeout(	function() {
					runtime.jquery('#body').height(runtime.jquery('#body').height()	+ 1);
					runtime.jquery('body').css('min-height', 'auto');
				}, 500 );
			}).fail(function (xhr, ajaxOptions,	thrownError) { console.warn(xhr.status); console.warn(thrownError);	});

		};
		pvtMethods.v4Handler = function	(runtime) {
			console.log(runtime);

			// LOCAL VARS
			var	currentContentModules,
				$container,
				applyDomUpdates,
				headContent	= [],
				footContent	= [];

			// GET DOM CONTAINER
			$container = runtime.jquery('.widget-content');

			// PUSH	CONTENT	TO DOM CONTAINER
			$container.html(runtime.content);

			// SET CONTENT NAMESPACE
			$container.addClass(runtime.contentOptions.ns);

			// TEMP	FIX
			$('.span19', $container).removeClass('span19').addClass('col-12');

			// Content Services	API	adds 'cdc_'	to all the IDs	:(	rip	it back	off

			if(runtime.callParams.iframe === 'true'){
				var	$csIdsToUpdate = $('[id^="cdc_"]', $container);
				$csIdsToUpdate.each(function() {
					var	$thisId	= $(this).attr('id'),
						updatedId =	$thisId.replace('cdc_',	'');

					$(this).attr('id', updatedId);
				});

				var	$csHrefsToUpdate = $('[href^="#cdc_"]',	$container);
				$csHrefsToUpdate.each(function() {
					var	$thisHref =	$(this).attr('href'),
						updatedHref	= $thisHref.replace('cdc_',	'');

					$(this).attr('href', updatedHref);
				});
			}

			// CHATBOT
			if(runtime.sourceUrl){
				$('#cdc-chat-bot-button').attr('href', runtime.sourceUrl.split('#')[0] + '#cdc-chat-bot-open');
				$('#cdc-chat-bot-button').attr('target', '_blank');
			}

			// SET CONTENT WRAPPER (4x SPECIFIC	REQUIRED CLASS)
			$container.addClass('body-wrapper');

			applyDomUpdates	= function () {
				// APPEND HEAND	AND	FOOT CONTENTS TO THEIR RESPECTIVE PLACES
				runtime.jquery('head').append(headContent.join(''));
				runtime.jquery('body').append(footContent.join(''));
				// CLEAR HEAD AND FOOT CONTENT ARRAYS
				headContent	= [];
				footContent	= [];
			};

			// CHECK FOR FONT OVERRIDE
			if (runtime.contentOptions.font	!= 'urlBypass')	{
				headContent.push('<style>body, h1, h2, h3, h4, h5, h6, p, li, button, strong, input, select, textarea {font-family:' + runtime.contentOptions.font + ' !important;}</style>');
			}

			// LOAD	4X HEAD	INCLUDE
			runtime.jquery.ajax({
				url: '/TemplatePackage/contrib/widgets/tp-syndication/tp4x/include-resouces-base.html',
				dataType: 'html'
			}).done(function (htmlReturn) {

				headContent.push(htmlReturn);

				// APPLY UPDATES
				applyDomUpdates();

				//window.CDC.Common.loadScript('/TemplatePackage/4.0/assets/vendor/js/jquery.min.js', function () {
				window.CDC.Common.loadScript('/TemplatePackage/contrib/libs/jquery/3.3.1/jquery.min.js', function () {
					window.CDC.Common.loadScript('/TemplatePackage/contrib/libs/bootstrap/4.1.3/js/bootstrap.bundle.js', function () {
						window.CDC.Common.loadScript('/TemplatePackage/4.0/assets/js/app.js', function () {
							window.pageOptions = {};
							$('html').addClass('theme-blue');
							$('#body').addClass('container d-flex flex-wrap body-wrapper').css('min-height', 'auto!important');
							console.log('window.CDC.tp4.public.syndInit(window.pageOptions);');

							// Add handler to scroll for On This Page and other internal links within the page.
							$('a[href^="#"]').each(function () {
								$(this).click(function () {
									var element = null;
									var link = $(this);
									var href = link.attr('href');
									if (href == '#') {
										element = $('body');
									} else {
										element = $(document).find('[id="' + href.substring(1) + '"]');
									}
									if (element) {
										element[0].scrollIntoView();
									}
									return false;
								});
							});

							window.CDC.tp4.public.syndInit(window.pageOptions);

							return true;
						});
					});
				});

			}).fail(function (xhr, ajaxOptions,	thrownError) {
				console.warn(xhr.status); console.warn(thrownError);
			});
		};

		return {
			init: function (initOptions) {
				// SET RUNTIME (SCOPED GLOBAL /	GLOBAL TO "window.CDC.Syndication")
				function getData(url) {
					var data;
					$.ajax({
						async: false, //thats the trick
						url: url,
						dataType: 'json',
						success: function(response){
							data = response;
						}
					});
					return data;
				}

				let jsonUrl     = "";
				let staticJson  = "https://www.cdc.gov/socialmedia/syndication/405380_index.json";
				let staticItems = getData(staticJson);

				var	runtime	= {
					jquery:	$.noConflict(true),
					initOptions: initOptions,
					callParams:	window.CDC.Common.runtime.callParams
				};

				const matchId = Number( runtime.callParams.mediaid );
				const matches = staticItems['results'][0]["children"].find(function(x) { return x.id === matchId; });


				if( matches && matches.id === matchId ){
					jsonUrl = 'https://www.cdc.gov/socialmedia/syndication/405380/' + matchId + '.json';
				}


				if (runtime.callParams.iframe === 'true' &&	runtime.callParams.mediatype.toLowerCase() === 'html') {
					runtime.contentOptions = pvtMethods.setOptions(runtime.callParams);
					runtime.contentUrl = pvtMethods.buildUrl(runtime.contentOptions);
					pvtMethods.getContentFromService(runtime, jsonUrl, matches);
				}
			},
			initCallback: initCallback
		};
	}($, window, document));

	window.CDC.Widget.load = function () {

		// ADD POINTER/SHORTCUT	FOR	COMMON
		window.cdcCommon = window.CDC.Widget.Common;

		// ADD POINTER/SHORTCUT	FOR	METRICS
		window.cdcMetrics =	window.cdcCommon.metrics;

		// INIT	METRICS
		window.cdcMetrics.init({
			useMetrics : 'true'
		});

		// Start Syndication script
		window.setTimeout(function () {
			window.CDC.Syndication.init({
				callback: function (runtime) {
					// iFrame Resizer Should be	fixing this... but in lieu of diving into this,	here's a hack to get it	working...
					try	{
						$('body').width($(window.frameElement).width()).trigger('resize');
					} catch	(e)	{
						console.log(e);
					}

					if(runtime.callParams.striptitle === 'true'){
						$('.pagetitle, .title, h1').remove();
					}
				}
			});
		}, 0);
	};
})($, window, document);
