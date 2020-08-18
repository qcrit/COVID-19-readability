/*Move Accordion*/
$('.collapse').on('shown.bs.collapse', function(e) {
  var $card = $(this).closest('.card');
  $('html,body').animate({
    scrollTop: $card.offset().top
  }, 500);
});

/*Search*/
var ClearText = true;
	    	var BrowserDetect = {
			init: function () {
				this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
				this.version = this.searchVersion(navigator.userAgent)
					|| this.searchVersion(navigator.appVersion)
					|| "an unknown version";
				this.OS = this.searchString(this.dataOS) || "an unknown OS";
			},
			searchString: function (data) {
				for (var i=0;i<data.length;i++)	{
					var dataString = data[i].string;
					var dataProp = data[i].prop;
					this.versionSearchString = data[i].versionSearch || data[i].identity;
					if (dataString) {
						if (dataString.indexOf(data[i].subString) != -1)
							return data[i].identity;
					}
					else if (dataProp)
						return data[i].identity;
				}
			},
			searchVersion: function (dataString) {
				var index = dataString.indexOf(this.versionSearchString);
				if (index == -1) return;
				return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
			},
			dataBrowser: [
				{ 	string: navigator.userAgent,
					subString: "OmniWeb",
					versionSearch: "OmniWeb/",
					identity: "OmniWeb"
				},
				{
					string: navigator.vendor,
					subString: "Apple",
					identity: "Safari"
				},
				{
					prop: window.opera,
					identity: "Opera"
				},
				{
					string: navigator.vendor,
					subString: "iCab",
					identity: "iCab"
				},
				{
					string: navigator.vendor,
					subString: "KDE",
					identity: "Konqueror"
				},
				{
					string: navigator.userAgent,
					subString: "Firefox",
					identity: "Firefox"
				},
				{
					string: navigator.vendor,
					subString: "Camino",
					identity: "Camino"
				},
				{		// for newer Netscapes (6+)
					string: navigator.userAgent,
					subString: "Netscape",
					identity: "Netscape"
				},
				{
					string: navigator.userAgent,
					subString: "MSIE",
					identity: "Explorer",
					versionSearch: "MSIE"
				},
				{
					string: navigator.userAgent,
					subString: "Gecko",
					identity: "Mozilla",
					versionSearch: "rv"
				},
				{ 		// for older Netscapes (4-)
					string: navigator.userAgent,
					subString: "Mozilla",
					identity: "Netscape",
					versionSearch: "Mozilla"
				}
			],
			dataOS : [
				{
					string: navigator.platform,
					subString: "Win",
					identity: "Windows"
				},
				{
					string: navigator.platform,
					subString: "Mac",
					identity: "Mac"
				},
				{
					string: navigator.platform,
					subString: "Linux",
					identity: "Linux"
				}
			]
		
		};
		function SearchClear(fieldObject)
    	{
    		
    		if(ClearText==true)
    		{
    			fieldObject.select();
     		}
    	}
    	function SearchGoogleAlternate()
    	{
    		var SearchText = document.getElementById('GoogleSearch');
    		SearchText = escape(SearchText.value );
    		var link = "http://www.dhhr.wv.gov/COVID-19/Pages/Search.aspx?q=" + SearchText;
     		window.location= link;
		}
		    	function SearchGoogleAlternate2()
    	{
    		var SearchText = document.getElementById('GoogleSearch2');
    		SearchText = escape(SearchText.value );
    		var link = "/Pages/Search.aspx?q=" + SearchText;
     		window.location= link;
		}

    	function SearchGoogle(InputBox)
    	{
    		//Get the text box and redirect via Javascript to Google search appliance
    		var SearchText = InputBox;
    		SearchText = escape(SearchText.value );
    		var link = "http://www.dhhr.wv.gov/COVID-19/Pages/Search.aspx?q=" + SearchText;
     		window.location= link;
    	}
		function OverrrideForms(InputBox)
		{
			if(event.keyCode == 13) //keyCode 13 is used to recognize enter Key press.
 			{
 				var theForm = document.forms['aspnetForm'];
				if (!theForm) {
				    theForm = document.aspnetForm;
				}
				theForm.onsubmit = function() {return false;};
 				SearchGoogle(InputBox);
 			}
		}

