/* global a2a*/
(function (Drupal) {
  'use strict';

  Drupal.behaviors.addToAny = {
    attach: function (context, settings) {
      // If not the full document (it's probably AJAX), and window.a2a exists
      if (context !== document && window.a2a) {
        a2a.init_all(); // Init all uninitiated AddToAny instances
      }
    }
  };

})(Drupal);
;
/*
 *  Copyright (c) 2014 Daniel Nümm under the MIT License 
 *  http://www.opensource.org/licenses/mit-license.php
 *
 *  Please report any bug at daniel.nuemm@blacktre.es
 */

;(function ( $, window, document, undefined ) {
    // Create the defaults
    var pluginName = "AutoHeight",
    defaults = {
    };

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            // Detect device width set layout.
            var buildHeightFix = function (obj) {
                var full_width = $(obj.element).width()-10;
            }
            buildHeightFix(this);
        },
    };

    $.fn[ pluginName ] = function ( options ) {

        function reset(obj) {
            obj.each(function() {
                $(this).height('auto');
            });
        }

        function setup(obj) {
            reset(obj);
            var obj_list = new Array();
            var max = 0;

            // Find the largest object height.
            obj.each(function() {
                h = $(this).height();
                if (h >= max) {
                    max = h
                }
            });
            // and make all objects equal in height.
            obj.each(function() {
                $(this).height(max);
            });

            // Now find Objects in the same row and group them together.
            obj.each(function() {
                t = $(this).offset().top;
                if ( obj_list[t] != undefined ) {
                    obj_list[t].push(this);
                } else {
                    obj_list[t] = new Array(this);;
                }
            });

            reset(obj);

            // for every row...
            for (var k in obj_list) {
                var max = 0;
                // find the largest height...
                for (var i in obj_list[k]) {
                    h = $(obj_list[k][i]).height();
                    if (h >= max) {
                        max = h
                    }
                }
                // and set all other objects in the row to the same value.
                for (var i in obj_list[k]) {
                    $(obj_list[k][i]).height(max);
                }
            }

        }

        function resizeEvent(obj) {
            var doit;
            $(window).bind('resize', function(e) {
                clearTimeout(doit);
                doit = setTimeout(function() { setup(obj) } , 100)
            });
        }

        $(window).load(setup(this));
        resizeEvent(this);

        // chain jQuery functions
        return this;
    };
})( jQuery, window, document );
;
/**
 * @file
 * Contains definition of the behaviour jsAutoHeight.
 */

(function ($, Drupal, drupalSettings) {
  "use strict";

  Drupal.behaviors.jsAutoHeight = {
    attach: function (context, settings) {

      try {
	  window.onload = Refresh;
	  function Refresh() {
        //$('.classname').AutoHeight();
        $(drupalSettings.auto_height.selectors).AutoHeight();
        }
      }
      catch (e) {
        // catch errors, if any.
        window.console && console.warn('jQuery Auto Height module stopped working with the exception:');
        window.console && console.error(e);
      }

    }
  };

})(jQuery, Drupal, drupalSettings);
;
(function ($) {
  Drupal.behaviors.backtotop = {
    attach: function (context, settings) {
      var exist = $('#backtotop').length;
      if (exist == 0) {
        $("body", context).once('backtotop').each(function () {
          $('body').append("<div id='backtotop'>" + Drupal.t(settings.back_to_top.back_to_top_button_text) + "</div>");
        });
      }

      backToTop();
      $(window).scroll(function () {
        backToTop();
      });

      $('#backtotop', context).once('backtotop').each(function () {
        $(this).click(function () {
          $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function () {
            $('html, body').stop();
          });
          $('html,body').animate({scrollTop: 0}, 1200, 'easeOutQuart', function () {
            $("html, body").unbind("scroll mousedown DOMMouseScroll mousewheel keyup");
          });
          return false;
        });
      });

      /**
       * Hide show back to top links.
       */
      function backToTop() {
        if ($(window).scrollTop() > settings.back_to_top.back_to_top_button_trigger) {
          $('#backtotop').fadeIn();
        } else {
          $('#backtotop').fadeOut();
        }
      }
    }
  };
})(jQuery);
;
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('name')){
          var videoName = 'fitvid' + $.fn.fitVids._count;
          $this.attr('name', videoName);
          $.fn.fitVids._count++;
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
  
  // Internal counter for unique video names.
  $.fn.fitVids._count = 0;
  
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );
;
(function ($, Drupal, drupalSettings) {
  // At this point 'drupalSettings' is already available.
  try
  {
    //$('body').fitVids({});
    $(drupalSettings.fitvids.selectors).fitVids({
      customSelector: drupalSettings.fitvids.custom_vendors,
      ignore: drupalSettings.fitvids.ignore_selectors
    });
  }
  catch (e) {
    // catch any fitvids errors
    window.console && console.warn('Fitvids stopped with the following exception');
    window.console && console.error(e);
  }

})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Initialize analytics on the page.
 */
/* global ga*/

(function (drupalSettings) {
  'use strict';

  if (!drupalSettings.gacsp) {
    return;
  }

  /*eslint-disable */
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  /*eslint-enable */

  for (var i = 0; i < drupalSettings.gacsp.commands.length; i++) {
    ga.apply(this, drupalSettings.gacsp.commands[i]);
  }

})(drupalSettings);
;
