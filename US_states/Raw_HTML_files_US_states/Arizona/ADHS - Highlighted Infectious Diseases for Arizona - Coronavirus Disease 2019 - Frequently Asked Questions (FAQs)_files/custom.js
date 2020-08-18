var app = (function() {

	//Set all variables for app use - private
	//These variables are accessible throughout the app, but not from the browser.
	var hash = window.location.hash;
	var req = window.location.hash.substr(1);
	var viewport = jQuery.viewportDetect();

	var initialize = function() {

		//Initialize all app components

		// 1). urlHashCorrection - This corrects malformed hashes for UTM
		urlHashCorrection();

		// 2). bindFunctions - Any type of event binding should be placed in this function.
		bindFunctions();

		// 3). initPlugins - All plugin instantiation should be placed wihtin this function.
		initPlugins();

		// 4). verifyRequest - Part of the content "gitter" funcitonality.
		verifyRequest();

		// 5). miscTasks - Put anything that doesn't fit in the above here.
		miscTasks();

		// 6). megaMenuCorrection - Reloads the page when the Divisions mega menu hash links are clicked.
		megaMenuCorrection();

		// 7). mobileSubMenuCorrection - When a link that begins with a hash (ex. #page) inside of the mobile sub menu is clicked, the url get assigned a new url. Once the url is assigned the page is reloaded to collapse the dropdown menu.
		mobileSubMenuCorrection();

	};

	var urlHashCorrection = function() {

		// This function corrects any malformed url hashes caused by appending Google tracking codes via GET

		if(hash.indexOf('?') > -1) {
			hash = hash.split('?');
			window.location.replace(window.location.protocol+'//'+window.location.host+window.location.pathname+'?'+hash[1]+hash[0]);
			return;
		}
	};

	var bindFunctions = function() {

		//Bind any listener that the ap will need. ONLY place event listeners/binds here.

		//Hide the temporarily hidden elements. Used in WIC
		//This should be redeveloped to be more fluid.
		$('.temp-hide').hide();


		// side nav - capture click: original commented out in scripts.js line 113
		// side nav

	  	$(document).on("click", ".list-group-item .capturedLink", function(event) {

			var viewport = $.viewportDetect();

			if($(event.target).is('.capturedLink')) {

				if($(event.target).is('.capturedSingle')) {
					captureType = 'single';

					$('#sidebar-nav ul').removeClass('in active');
					$('#sidebar-nav li').removeClass('active');
					$('.capturedSingle').removeClass('activeLink');
					$('.capturedLink').removeClass('activeLink');
					$(event.target).addClass('activeLink');

					$('.capturedLink, .capturedSingle').parent().css("background", "#FFF");
					$(event.target).parent().css("background", "#F4F3F3");
					$('.capturedLink, .capturedSingle').css('color', '#000');
					$(event.target).css('color', '#B92928');

					includeContent(event.target.getAttribute("href").slice(1));

				} else {
					captureType = 'link';


					$('.capturedLink, .capturedSingle').removeClass('activeLink');
					$(event.target).addClass('activeLink');

					$('#sidebar-nav ul').removeClass('in active');

					$(event.target).parent().parent().attr('class', 'collapse in');

					$('.capturedLink').parent().css("background", "#fff");
					$(event.target).parent().css("background", "#F4F3F3");
					$('.capturedLink, .capturedSingle').css('color', '#000');
					$(event.target).css('color', '#B92928');

					$('#sidebar-nav li').removeClass('active');
					$(event.target).parent().parent().parent().addClass('active');

					includeContent(event.target.getAttribute("href").slice(1));
				}

			} else {

				if($(this).is('.active')) {
					$(this).removeClass('active');
				} else {
					$('#sidebar-nav ul').removeClass('in');
					$('#sidebar-nav li').removeClass('active');
					$(this).addClass('active');
					$(this).fadeout();

				}
			}
		});

		//Listen for backbutton

		$(window).on('hashchange', function() {
			var req = window.location.hash.substr(1);

			if (req.length == 0) {
				if($('a[href="index.php"]').length > 0) {
					$('a[href="index.php"]').trigger('click');
				} else {
					$('#sidebar-nav ul').removeClass('in active');
					$('#sidebar-nav li').removeClass('active');
					$('.capturedSingle').removeClass('activeLink');
					$('.capturedLink').removeClass('activeLink');
					$('a[href="index.php"]').addClass('activeLink');

					includeContent('home', 'vurl');

				}
			} else {
				//Check if this has already been processed by the triggered click
				if(window.lastHash != req) {

					if($('a[href="#'+req+'"]').length > 0) {
						$('a[href="#'+req+'"]').trigger('click');
					} else {
						includeContent(req, 'vurl');
					}
				}
			}
		});

		var get = getUrlVars();
		if(get['pg']) {
			$('a[href="/a-to-z/index.php?pg='+get['pg']+'"]').css('background-color', '#f2f2f2');
		}

		//Adjust the search box style once loaded
		$( window ).load(function() {
			$('#gsc-i-id1').css('height', '20px');
			$('#gsc-i-id1').css('font-size', '14px');
		});

		//Mobile menu chevron
		$(document).on('click', '.sidenav-btn', function() {
			if($('#autoSpan').is('.glyphicon-chevron-down')) {
				$('#autoSpan').removeClass('glyphicon-chevron-down');
				$('#autoSpan').addClass('glyphicon-chevron-up');
			} else {
				$('#autoSpan').removeClass('glyphicon-chevron-up');
				$('#autoSpan').addClass('glyphicon-chevron-down');
			}
		});
	};

	var verifyRequest = function() {

		//Verify that the requested hash in valid and request the content.

		if($('#sectionContent').length) {

			if(req) {
				//includeContent(req, 'url');
				if($('a[href$="'+req+'"]').length > 0) {

					if($('a[href$="'+req+'"]').length > 1){

						var urlHash = window.location.hash;
						$('a[href="'+urlHash+'"]').trigger('click');
					}
					else{
						$('a[href$="'+req+'"]').trigger('click');
					}

				} else {
					includeContent(req, 'vurl');

				}

			} else {

				// Determine if we are on the primary index. If we are, don't request content.
				if(location.pathname.substring(1) === false) {
					includeContent('home', 'vurl');

				} else if(location.pathname.substring(1) != 'index.php') {
					includeContent('home', 'vurl');

				}
			}
		}
	};

	var initPlugins = function() {

		//Initialize all plugins the app will use. ONLY place plugin instantiations here.

		//Initiate the exLink plugin for external links and documents.
		//https://github.com/YupItsZac/jQuery.exLink

		exLink.init({
	    	protocols: ['http', 'https'],
	    	filetypes: ['.pdf', '.xls', '.xlsx', '.doc', '.docx', '.ppt', '.pptx'],
	    	linkWarning: false,
	    	fileWarning: false
		});

		//Initiate fancyBox on the links with iframe class.
		$("a.iframe").fancybox({
		   type:'iframe',
		   fitToView: true,
		   autoSize : false, /* prevents FancyBox from automatically sizing width and height */
		   maxWidth:'90%', /*maximum width at which the video's resolution looks OK (provided by YouTube's default embed code) */
		   maxHeight:'600px', /*maximum height that corresponds with the maximum width above */
		   hideOnContentClick: false,
		   openEffect	: 'none',
		   closeEffect	: 'none'
		});


		// NOTE: FancyBox script cnot be used on pages with jQuery sliders because the code will conflict
		// Initiate the fancyBox plugin on links with singleImage class
		$("a.singleImage").fancybox({ // the "singleImage" hyperlink class is used for static images
			fitToView: true,
			openEffect	: 'none',
			closeEffect	: 'none'
	  	});

	  	//Load User Voice

	  	UserVoice = window.UserVoice || [];
		UserVoice.push(['showTab', 'classic_widget', {
		  	mode: 'feedback',
		  	primary_color: '#666666',
		  	link_color: '#B92928',
		  	forum_id: 120045,
		  	tab_label: 'Feedback & Support',
		  	tab_color: '#B92928',
		  	tab_position: 'middle-right',
		  	tab_inverted: false
		}]);

		exLinkClassRemove();
	};

	var exLinkClassRemove = function() {

		////Removes ExLink Class from pub.azdhs.gov links/////
		$.each( $('a'), function(){
			var runRemoval = true;
		  //search href string to see if : exists within
			  var linkhref = $(this).prop('href');
			//|| "pub.azdhs.gov/e-books/" !== -1 || "pub.azdhs.gov/hospital-discharge-stats/" !== -1
			  if(linkhref.search("pub.azdhs.gov") !== -1){
				  if(linkhref.search("pub.azdhs.gov/e-books/") !== -1){
					  runRemoval = false;
				  }

				  if(linkhref.search("pub.azdhs.gov/hospital-discharge-stats/") !== -1){
				  	  runRemoval = false;
				  }

				  if(runRemoval === true){
					   $(this).removeClass("exLink");
				  }

		  	  }

		});
	};


	var miscTasks = function() {

		//Any task that doesn't fit into the funcitons above should be placed here.
		//Pay special attention to this section during code reviews.

		//Automatic date display
		today=new Date();
    	yr=today.getFullYear();
		$('#curYear').text(yr);

		//Add Chevron to mobile menu
		$('.sidenav-btn').append('<span id="autoSpan" class="glyphicon glyphicon-chevron-down"></span>');
	};

	var getUrlVars = function() {

		//This function grabs the GET parameters from the URL, used in various places.

		var vars = {};
    	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
  	vars[key] = value;
    	});

    	return vars;


	};

	var includeContent = function(req, opt) {

		//The heart of the content "gitter" script. This fetches and displays the requested content
		//as returned by verifyRequest();

		if(!req) {
			var req = window.location.hash.substr(1);
		}
		//http://www.azdhs.gov/topics/index.php#cancer-home
		//http://www.azdhs.gov/topics/index.php#{req}

		var loc = window.location.pathname;
		var section = loc.substring(0, loc.lastIndexOf('/'));
		section = (section.length && section[0] == '/') ? section.slice(1) : section;

		if(captureType = 'link') {
			$('#'+req).attr('class', 'collapse in');
			$('#sidebar-nav ul li').removeClass('active');
			$('#'+req).parent().parent().addClass('active');
		}


		if(opt == 'url') {

			$('.capturedLink').removeClass('activeLink');
			$('#'+req).parent().addClass('active');
			$('a[href$="'+content+'"]').addClass('activeLink');
		}

		if(req == 'home') {
			$('#sidebar-nav ul').removeClass('in active');
			$('#sidebar-nav li').removeClass('active');
			$('.capturedSingle').removeClass('activeLink');
			$('.capturedLink').removeClass('activeLink');
			$('sidebarnav a[href="index.php"]').addClass('activeLink');

			$('.capturedLink, .capturedSingle').parent().css("background", "#FFF");
			$('#sidebar-nav a[href="index.php"]').parent().css("background", "#F4F3F3");
			$('.capturedLink, .capturedSingle').css('color', '#000');
			$('#sidebar-nav a[href="index.php"]').css('color', '#B92928');
			$('#sidebar-nav a[href="index.php"]').addClass('activeLink');
		}


		//Assign the last processed hash as a variable bound to the window object.
		//This will tell us onhashchange if this content has already been requested.

		window.lastHash = req;

		$.post("/includes/content/"+section+".php?cont="+req, function(data) {

			var parsed = $.parseJSON(data);

			if($('.breadSwap').length < 1) {
				$('.breadcrumb').append('<li class="breadSwap">'+parsed.breadcrumb+'</li>');
			} else {
				$('.breadSwap').html(parsed.breadcrumb);
			}

			$('#contentHead').html(parsed.title);
			$('#sectionContent').html(parsed.content);


			if(parsed.content > 80) {
				var desc = parsed.content.substring(0,80)+'...';
			} else {
				var desc = parsed.content;
			}

			document.title = "ADHS - "+decodeHtml(parsed.breadcrumb);

			$('.toggle label').attr('title', 'Click for answer');

			if ($("#sectionContent .toggle").length > 0){
				_toggle();
			}

			//Reinitialize the jquery.exLink plugin for external links/docs.
			//https://github.com/YupItsZac/jQuery.exLink

			exLink.init({
					 protocols: ['http', 'https'],
					filetypes: ['pdf', 'xls', 'docx', 'doc', 'ppt', 'pptx'],
					linkWarning: false,
					hostCompare: false,
					noFollow: false,
					fancyBoxIgnore: true,
					gaTracking: false,
					gaTrackOld: false,
					fileWarning: false,
					modalDisplayBG: false,
					newWindow: false,
			});

			$('html, body').animate({scrollTop:$('#contentHead').position().top}, 'slow');

			//Simulate a pageload and send to Google Analytics



	  		//Commented out is the original snippet developed by us
			// ga('send', {
		 //  		'hitType': 'pageview',
			// 	'page': window.location.pathname+'#'+req,
			// 	'title': 'ADHS - '+decodeHtml(parsed.breadcrumb)
			// });

			//Below is the snippet dictated by Moses (an ad agency?)

			ga('create', 'UA-1758531-1', 'auto');
	  		ga('require', 'displayfeatures');

			ga('send', {
		      'hitType': 'pageview',
		      'page': window.location.href,
		      'title': 'ADHS - '+decodeHtml(parsed.breadcrumb)
			});

			if($('#sectionContent').text().length > 200) {
				var meta = $('#sectionContent').text().substring(0,200)+'...';
			} else {
				var meta = $('#sectionContent').text();
			}

			var $meta = $('meta[name=description]').attr('content', meta);

			/////This disables phone links when a new page is loaded.////
			desktopTelLinkDisable();
			/////////////////////////////////////////////////////////////
			/////This Removes the ExLink Class From pub.azdhslinks////
			exLinkClassRemove();
		});

		//If we are on a mobile device, collapse
		//the hamburger menu by triggering click
		if(window.viewport == 'xs') {
			$('.sidenav-btn').trigger('click');
		}

		//Check to see if temp-hide is visible, if not, make it
		//This was used in portions of WIC

		if(window.lastHash !== 'home') {
			if($('.temp-hide').is(':hidden')) {
				$('.temp-display').remove();
		  		$('.temp-hide').show();
		  	}
		}

	};

	var decodeHtml = function(html) {

		// Utility function to HTML -> TXT
		//Used to generate page title for meta and GA

		var txt = document.createElement("textarea");
    	txt.innerHTML = html;
    	return txt.value;
	};

	var getParameterByName = function(name) {

		// Fetches parameters by name. Currently not used, update if added.

		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
    	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	};

	////////Disable Phone Links on Desktop Function////////
	var desktopTelLinkDisable = function(){
		if (screen.width > 768){
			$.each( $('a'), function(){
			  //search href string to see if : exists within
			  var telString = $(this).prop('href');
			  if(telString.search(":") !== -1){
				  //if so then split string at :
				  var splitString = telString.split(':');
				  //if "tel" is before the : then this is a telephone link.
				  //Make tel link inactive.
				  if(splitString[0] === "tel"){
					 $(this).css('pointer-events','none');
					 $(this).css('cursor','default');
					 $(this).css('text-decoration','none');
					 $(this).css('color','#777777');
				  }
			  }

			});
		}

	};
	desktopTelLinkDisable();

	var megaMenuCorrection = function() {

		// This function reloads the page when the Divisions mega menu hash links are clicked.//
		$('#divisions-mega-menu a').click(function(){
			var linkHref = $(this).attr('href');
			var hostName = window.location.hostname;
			var urlLocation = "http://"+hostName+linkHref;
			var currentPage = location.pathname;
			var runReload = true;

			if(currentPage === "/index.php"){
				runReload = false;
			}

			if(currentPage === "/"){
				runReload = false;
			}

			if(runReload === true){
				if($(this).attr('class') !== 'dropdown-toggle'){
					if(linkHref.search('#') !== -1){
						window.location = urlLocation;

						if(linkHref.search(currentPage) !== -1){
							location.reload();
						}

					}
				}
			}

		});

	};

	var mobileSubMenuCorrection = function() {
		// When a link that begins with a hash (ex. #page) inside of the mobile sub menu is clicked, the url get assigned a new url. Once the url is assigned the page is reloaded to collapse the dropdown menu.
		$('.side-nav a').click(function(){
			var linkHref = $(this).attr('href');
			var hostName = window.location.hostname;
			var path = window.location.pathname;
			var urlLocation = "http://"+hostName+path+linkHref;

			if($('#sidebar-nav').attr('aria-expanded') === 'true'){
				if(this.hasAttribute('data-toggle') === false){
					if(linkHref.search('#') === 0){
						location.assign(urlLocation);
						var hashName = window.location.hash;
						if(hashName === linkHref){
							location.reload();
						}

					}
				}
			}




		});


	};

	//Public stuffs
	//These are the functions that are public facing.
	//Anything not mapped here will not be accessible form console or the browser.
	return {
    	init: initialize

  	};


})();


$(document).ready(function() {

	//Initialize the app. Perform all required tasks.
	app.init();
	///////////////////////////////////////////////////////
	////////Side Nav Non Active Dropdown Head Color////////
	var sideNaveDropDownHeadStyler = function(x){
		x = x || 'default';

		$(this).parent().toggleClass('active');

		if(x == 'sub_or_single'){
			$(this).not('.in li a','.active').attr('style','background-color:#ffffff');
		}

	};

	$('.list-toggle a').click(sideNaveDropDownHeadStyler);
	$('.in li a').click(function(){
		sideNaveDropDownHeadStyler('sub_or_single');
	});
	$('.capturedLink').click(function(){
		sideNaveDropDownHeadStyler('sub_or_single');
	});
	///////////////////////////////////////////////////////
	///This is used for handling the print layout//////////
	if($('#sidebar-nav')[0]){
		$('.content div:eq(2)').attr('id','side-nav-col');
		$('.content div:eq(3)').attr('id','content-col');
	}
	//////////////////////////////////////////////////////



});
