(function ($) {

Drupal.jQueryUiFilter = Drupal.jQueryUiFilter || {}

/**
 * Custom hash change event handling
 */
var _currentHash = location.hash;
Drupal.jQueryUiFilter.hashChange = function(func) {
  // Handle URL anchor change event in js
  // http://stackoverflow.com/questions/2161906/handle-url-anchor-change-event-in-js
  if ('onhashchange' in window) {
    $(window).bind('hashchange', func);
  }
  else {
    window.setInterval(function () {
      if (location.hash != _currentHash) {
        _currentHash = location.hash;
        func();
      }
    }, 100);
  }
}


/**
 * Apply jQuery UI filter widget options as the global default options.
 */
Drupal.jQueryUiFilter.globalOptions = function(widgetType) {
  Drupal.jQueryUiFilter.cleanupOptions(jQuery.extend(
    $.ui[widgetType].prototype.options,
    Drupal.settings.jQueryUiFilter[widgetType + 'Options'],
    Drupal.jQueryUiFilter[widgetType + 'Options']
  ));
}

/**
 * Get jQuery UI filter widget options.
 */
Drupal.jQueryUiFilter.getOptions = function(widgetType, options) {
  return Drupal.jQueryUiFilter.cleanupOptions(jQuery.extend(
    {}, // Using an empty object insures that new object is created and returned.
    Drupal.settings.jQueryUiFilter[widgetType + 'Options'],
    Drupal.jQueryUiFilter[widgetType + 'Options'],
    options || {}
  ));
}

/**
 * Cleanup jQuery UI filter options by converting 'true' and 'false' strings to native JavaScript Boolean value.
 */
Drupal.jQueryUiFilter.cleanupOptions = function(options) {
  // jQuery UI options that are Booleans must be converted from integers booleans
  for (var name in options) {
    if (typeof(options[name]) == 'string' && options[name] == '') {
      delete options[name];
    }
    else if (options[name] == 'false') {
      options[name] = false;
    }
    else if (options[name] === 'true') {
      options[name] = true;
    }
    else if (name === 'position' && options[name].indexOf(',') != -1) {
      options[name] = options[name].split(/\s*,\s*/);
    }
    else if (typeof(options[name]) == 'object') {
      options[name] = Drupal.jQueryUiFilter.cleanupOptions(options[name]);
    }
  }
  return options;
}

})(jQuery);
;
(function ($) {

  Drupal.responsive_menu = {
    menu_created: false,
    responsive_width: 959,

    mobile_menu: function () {
      var mobile_menu = $('.mobile-menu-popout');
      var wrapper = $('.menu-block-wrapper', mobile_menu);

      if (Drupal.responsive_menu.menu_created) {
        if ($(window).width() >= Drupal.responsive_menu.responsive_width) {
          mobile_menu.hide();
        }

        return;
      }

      var mobile_menu_link = $('.mobile-menu-popout-link').click(function() {
        // Show the first level of links
        mobile_menu.toggle();
        $('ul.menu', mobile_menu).removeClass('menu-show');
        $('ul.menu', mobile_menu).eq(0).addClass('menu-show');
        wrapper.css('left', 0);
        return false;
      });

      // add back button
      mobile_menu.find(".expanded").each(function () {
        $(this).children("ul").prepend('<li class="title"><a href="#" class="back">Back</a> <a href="' + $(this).children("a").attr('href') + '"><span>' + $(this).children("a").text() + "</span></a></li>");
      });

/*
      // make page titles open the menu
      var current_page = $('ul.menu a.active', mobile_menu).eq(0);
      if (current_page[0]) {
        var parents = current_page.parents('ul.menu');
        if (parents.size() - 1 == 0) {
          // we need to add the section rather than the top level item, so find where the
          // title item is then use that to get the menu parents.
          parents = current_page.closest('li').children('ul.menu').children('li.title').parents('ul.menu');
        }
        $('h1#page-title').click(function() {
          if ($(window).width() > Drupal.responsive_menu.responsive_width) {
            $(this).css('cursor', '');
            mobile_menu.hide();
            return;
          }
          $(this).css('cursor', 'pointer');
          var depth = parents.size() - 1;
          mobile_menu.show();
          $('ul.menu', mobile_menu).removeClass('menu-show');
          parents.addClass('menu-show');
          wrapper.css('left', (-1 * depth * Drupal.responsive_menu.responsive_width) + 'px');
        }).css('cursor', 'pointer');
      }

      // hide the li for no-mobile items
      $.each($('a.no-mobile', mobile_menu), function() {
        $(this).closest('li').hide();
      });
*/

      $('ul.menu a', mobile_menu).click(function(event) {
        // make menus open sub items
        var position = wrapper.css("left");
        position = parseInt(position.replace("px", ""));
        var next_position = 0;

        var parent = $(this).closest('li');
        if (parent.hasClass('expanded') && $('ul.menu', parent).eq(0).size() > 0) {
          event.preventDefault();

          var current_width = $(window).width();
          next_position = position - current_width;
          $('ul.menu', parent).css('left', current_width);
          wrapper.stop().animate({
            left: next_position
          }, 250, function () {
            $('ul.menu', parent).eq(0).addClass('menu-show');
          });

          return false;
        }
        else if (parent.hasClass('title') && $(this).hasClass('back')) {
          // add back button functionality
          var current_width = $(window).width();
          parent.closest('ul.menu').removeClass('menu-show');
          wrapper.stop().animate({
            left: position + current_width
          }, 250, function () {
          });
          return false;
        }
      });

      Drupal.responsive_menu.menu_created = true;
    }
  }

  Drupal.behaviors.responsive_menu = {
    attach: function (context, settings) {
      if ($(window).width() <= Drupal.responsive_menu.responsive_width) {
        Drupal.responsive_menu.mobile_menu();
      }
    }
  }

  $(window).resize(function() {
    Drupal.responsive_menu.mobile_menu();
  });
})(jQuery);;
/**
 * @file
 * Plugin jQuery Tablesorter.
 */

(function ($) {
  Drupal.behaviors.tablesorter = {
    attach: function (context, settings) {
      var widgets = [];
      var widgetsZebra = [];

      if (settings.tablesorter) {
        if (settings.tablesorter.zebra == 1) {
          widgets.push('zebra');
        }
        widgetsZebra.push(settings.tablesorter.odd);
        widgetsZebra.push(settings.tablesorter.even);
      }

      $('.tablesorter').each(function (idx, table) {
        $(table).once('tablesorter', function () {
          $(table).tablesorter({
            widgets: widgets,
            widgetsZebra: {
              css: widgetsZebra
            }
          });
          if ($("#tablesorter_pager").length != 0) {
            $(table).tablesorterPager({
              container: $("#tablesorter_pager")
            });
          }
        });
      });
    }
  };
})(jQuery);
;
(function ($) {

  Drupal.behaviors.dhs_custom = {
    popupConfirmed: false,

    attach: function (context, settings) {
      // Mobile Nav Jump Button
      $('body').once('section-menu', function() {
        if (($(window).width() <= 767) && ($('.region-sidebar-first').length > 0)) {
          $(".region-sidebar-first").attr("id",'mobile-nav-anchor');
          $('<a id="mobile-nav-menu" href="#mobile-nav-anchor">' + Drupal.t('Section Menu') + '</a>').appendTo('.breadcrumb');
          }
      });

      // wish form select pairings
      $('.dhs-select-pairs').each(function() {
        if ($(this).val() != 'wisconsin' && !$(this).is(':checked')) {
          var parent = $(this).closest('.wishhalfdiv');
          $('select', parent).attr('disabled', 'disabled');
        }
      });
      $('.dhs-select-pairs').change(function() {
        if ($(this).val() != 'wisconsin') {
          var parent = $(this).closest('.wishhalfdiv');
          parent.siblings('.wishhalfdiv').each(function() {
            $('select', this).attr('disabled', 'disabled');
          });
        }
        var parent = $(this).closest('.wishhalfdiv');
        $('select', parent).removeAttr('disabled');
      });
/*
      // wish form confirmation form
      $('form.wish-form').attr({
        action: 'http://wish.wisconsin.gov/results/',
        method: 'post'
      });

      $('form.wish-form').submit(function(event) {
        if (!Drupal.behaviors.dhs_custom.popupConfirmed) {
          // build output
          var table = $('<table></table>').addClass('confirm-table');

          // radios
          $('input[type="radio"]:checked', this).each(function() {
            if ($(this).attr('name') != 'year_f') {
              var label = $("label[for='" + $(this).attr('id') + "']").text();
              var wrapper = $(this).closest('fieldset');
              if (wrapper.length > 0) {
                label = $('legend', wrapper).text();
              }

              if (label != '') {
                var row = $('<tr></tr>');
                var column = $('<td></td>').text(label);
                row.append(column);
                var selectedOption = $("label[for='" + $(this).attr('id') + "']").text();
                column = $('<td></td>').text(selectedOption);
                row.append(column);
                table.append(row);
              }
            }
          });

          // checkboxes
          $('input[type="checkbox"]:checked', this).each(function() {
            var label = $("label[for='" + $(this).attr('id') + "']").text();
            var wrapper = $(this).closest('fieldset');
            if (wrapper.length > 0) {
              label = $('legend', wrapper).text();
            }

            if (label != '') {
              var row = $('<tr></tr>');
              var column = $('<td></td>').text(label);
              row.append(column);
              var selectedOption = $("label[for='" + $(this).attr('id') + "']").text();
              column = $('<td></td>').text(selectedOption);
              row.append(column);
              table.append(row);
            }
          });

          // text fields
          $('input[type="text"]', this).each(function() {
            if ($(this).attr('name') != 'year9') {
              var label = $("label[for='" + $(this).attr('id') + "']").text();
              var wrapper = $(this).closest('fieldset');
              if (wrapper.length > 0) {
                label = $('legend', wrapper).text();
              }

              if (label != '') {
                var row = $('<tr></tr>');
                var column = $('<td></td>').text(label);
                row.append(column);
                var selectedOption = $(this).val();
                column = $('<td></td>').text(selectedOption);
                row.append(column);
                table.append(row);
              }
            }
          });

          // select lists
          $('select', this).each(function() {
            if ($(this).val() != '' && $(this).attr('name') != 'year1') {
              var label = $("label[for='"+$(this).attr('id')+"']").text();
              if (label != '') {
                var row = $('<tr></tr>');
                var column = $('<td></td>').text(label + ': ');
                row.append(column);
                column = $('<td></td>');
                var selectedOptions = [];
                $('option:selected', this).each(function() {
                  selectedOptions.push($(this).text());
                });
                column.text(selectedOptions.join(', '));
                row.append(column);
                table.append(row);
              }
            }
          });

          // years
          $('input[name="year_f"]:checked').each(function() {
            var label = 'Years';
            var row = $('<tr></tr>');
            var column = $('<td></td>').text(label);
            row.append(column);

            if ($(this).val() == 1) {
              var selectedOptions = [];
              $('option:selected', $("select[name='year1']")).each(function() {
                selectedOptions.push($(this).text());
              });
              column = $('<td></td>');
              column.text(selectedOptions.join(', '));
              row.append(column);
              table.append(row);
            }
            else if ($(this).val() == 9) {
              var selectedOptions = [];
              $("input[name='year9']").each(function() {
                selectedOptions.push($(this).val());
              });
              column = $('<td></td>');
              column.text(selectedOptions.join(', '));
              row.append(column);
              table.append(row);
            }
          });

          // show confirmation popup
          event.preventDefault();
          $.colorbox({
            html: table.prop('outerHTML') + "<a class='colorbox-confirm button'>OK</a>",
            onComplete: function() {
              $('.colorbox-confirm').click(function() {
                event.preventDefault();
                Drupal.behaviors.dhs_custom.popupConfirmed = true;

                // cross1
                $('form.wish-form input[name="cross1"]:checked').each(function() {
                  var selectedCross = $('input[name="' + $(this).val() + '"]:checked');
                  if (selectedCross.length > 0) {
                    if (selectedCross.val() != 'wisconsin') {
                      var parent = selectedCross.closest('.wishhalfdiv');
                      var thirdCross = $('select', parent).attr('name');
                      $(this).val(thirdCross);
                      selectedCross.val(thirdCross);

                      if (thirdCross != 'cntynum' && thirdCross != 'brfscnty') {
                        $('<input>').attr({
                          type: 'hidden',
                          name: thirdCross,
                          value: 1
                        }).appendTo('form.wish-form');
                      }
                    }
                    else {
                      $(this).val(selectedCross.val());
                    }
                  }
                });

                // cross2
                $('form.wish-form input[name="cross2"]:checked').each(function() {
                  var selectedCross = $('input[name="' + $(this).val() + '"]:checked');
                  if (selectedCross.length > 0) {
                    if (selectedCross.val() != 'wisconsin') {
                      var parent = selectedCross.closest('.wishhalfdiv');
                      var thirdCross = $('select', parent).attr('name');
                      $(this).val(thirdCross);
                      selectedCross.val(thirdCross);

                      if (thirdCross != 'cntynum' && thirdCross != 'brfscnty') {
                        $('<input>').attr({
                          type: 'hidden',
                          name: thirdCross,
                          value: 1
                        }).appendTo('form.wish-form');
                      }
                    }
                    else {
                      $(this).val(selectedCross.val());
                    }
                  }
                });

                $('form.wish-form').submit();
              });
            }
          });
        }
      });
*/

      $('.element-focusable').once(function() {
        $(this).click(function() {
          var element = $($(this).attr('href'));
          if (!element.attr('tabindex')) {
            element.attr('tabindex', '-1');
          }

          element.focus();
        });
      });

      $( ".jquery-ui-filter-tabs" ).on( "tabscreate", function( event, ui ) {
        var size = $(this).find('> .ui-tabs-nav li').size();
        $(this).find('> .ui-tabs-nav').addClass('ui-tab-count-' + size);
      });

      $('.horizontal-tabs-panes').once('dhs-column-count', function() {
        var size = $(this).find('> .field-group-htab').size();
        $(this).closest('.field-group-htabs-wrapper').addClass('ui-tab-count-' + size);
      });

      $('#edit-search', context).focusin( function(){
          $('#edit-search-button').addClass('active');
      });

      $('#edit-search', context).focusout( function(){
          $('#edit-search-button').removeClass('active');
      });

      $('#azlisttop', context).once('active-class-top', function() {
        $('li a[href="' + window.location.pathname + '"]', this).addClass('active');
      });

      $('#azlistbottom', context).once('active-class-bottom', function() {
        $('li a[href="' + window.location.pathname + '"]', this).addClass('active');
      });

      $('.jumplinks', context).once('jump-link', function() {
        var sel = $('<select>');
        sel.append($("<option>").attr('value', '').text($('li:eq(0)', this).text()));
        $('li a', this).each(function() {
          sel.append($("<option>").attr('value', $(this).attr('href')).text($(this).text()));
        });
        $(this).html(sel);
        sel.change(function() {
          if ($(this).val() != '') {
            window.location.href = $(this).val();
          }
        });
      });

      $('.ajax-link', context).once('ajax-link', function() {
        $(this).click(function() {
          var rel = $(this).attr('rel');

          var spinner = new Spinner({
            lines: 13,
            length: 20,
            width: 10,
            radius: 30,
            corners: 1,
            color: '#2A6B7E'
          }).spin();

          // Append the throbber to the AJAX'd element
          $('<div id="throbber">Loading</div>').appendTo($(rel).css('position', 'relative')).html(spinner.el);

          // AJAX in the remote content
          $.get($(this).attr('href'), function(data) {
            $(rel).replaceWith($(data).find(rel));
            Drupal.attachBehaviors($(rel));
          });
          return false;
        });
      });

      // Commented out due to accessibility concerns
      //$('.field-name-field-faq').once('faq', function() {
      //  var question = $('.group-question', $(this));
      //  var answer = $('.group-answer', $(this));
      //
      //  question.click(function() {
      //    answer.slideToggle('fast');
      //  });
      //});

      $(function(){
        if(location.search == "?search=&items_per_page=10&order=field_service&sort=asc") {
          $('.view-department-services .views-field-field-service a').addClass('asc');
        }
      });

      $(function(){
        if(location.href == "?search=&items_per_page=10&order=title&sort=asc") {
          $('.view-department-services .views-field-title a').addClass('asc');
        }
      });


      $('.related-tab-images .image-thumb-black', context).hide();
      $('.related-tab-images .image-thumb-black:eq(0)', context).show();
      $('article.node-1 .jquery-ui-filter', context).on( "tabsactivate", function(event, ui) {
        var num = $('article.node-1 ul.ui-tabs-nav li').index(ui.newTab);
        $('.related-tab-images .image-thumb-black').hide();
        $('.related-tab-images .image-thumb-black:eq(' + num + ')').show();
      });

      $('article.node-page .field-name-body table, .view-content table.views-table').each(function() {
        if (!$(this).hasClass('stacktable') && $(window).width() < $(this).width() + 20) {
          $(this).stacktable();
        }
      });

// Commenting lines below as it appears the stacktable js code is no longer available on our site -sbf 04/17/2019      
/*      
      if ($(window).width() <= 768) {
        $('ul.quicklinks-list').appendTo('article.node-page .field-name-body');

        $('article.node-page .field-name-body table').each(function() {
          if (!$(this).hasClass('stacktable') && $(window).width() >= $(this).width() + 20) {
            $(this).stacktable();
          }
        });
      }
*/
/*
      $('.horizontal-tabs-panes', context).once('transformer-tabs', function () {
        var tab_focus;

        // Check if there are some fieldsets that can be converted to horizontal-tabs
        var $fieldsets = $('> fieldset', this);
        if ($fieldsets.length == 0) {
          return;
        }

        // Create the tab column.
        var tab_list = $('<ul></ul>').wrap('<nav role="navigation" class="horizontal-tabs-list" />');
        var tab_content = $('<div class="tab-content" />');
        $(this).after(tab_list);

        // Transform each fieldset into a tab.
        $fieldsets.each(function (i) {
          var horizontal_tab = new Drupal.horizontalTab({
            title: $('> legend', this).text(),
            fieldset: $(this)
          });
          horizontal_tab.item.addClass('horizontal-tab-button-' + i);
          tab_list.append(horizontal_tab.item);
          $(this)
            .removeClass('collapsible collapsed')
            .addClass('horizontal-tabs-pane')
            .data('horizontalTab', horizontal_tab);
        });

        $('> li:first', tab_list).addClass('first');
        $('> li:last', tab_list).addClass('last');
      });

      (function () {
        var Tabs = {
          init: function() {
            this.bindUIfunctions();
            this.pageLoadCorrectTab();
          },

          bindUIfunctions: function() {

            // Delegation
            $(document)
              .on("click", ".transformer-tabs a[href^='#']:not('.active')", function(event) {
                Tabs.changeTab(this.hash);
                event.preventDefault();
              })
              .on("click", ".transformer-tabs a.active", function(event) {
                Tabs.toggleMobileMenu(event, this);
                event.preventDefault();
              });

          },

          changeTab: function(hash) {

            var anchor = $("[href=" + hash + "]");
            var div = $(hash);

            // activate correct anchor (visually)
            anchor.addClass("active").parent().siblings().find("a").removeClass("active");

            // activate correct div (visually)
            div.addClass("active").siblings().removeClass("active");

            // update URL, no history addition
            // You'd have this active in a real situation, but it causes issues in an <iframe> (like here on CodePen) in Firefox. So commenting out.
            // window.history.replaceState("", "", hash);

            // Close menu, in case mobile
            anchor.closest("ul").removeClass("open");

          },

          // If the page has a hash on load, go to that tab
          pageLoadCorrectTab: function() {
            this.changeTab(document.location.hash);
          },

          toggleMobileMenu: function(event, el) {
            $(el).closest("ul").toggleClass("open");
          }

        }

        Tabs.init();
      })();
*/
    }
  };

  $(window).load(function() {
    if (typeof CKEDITOR != 'undefined') {
      CKEDITOR.on('instanceReady', function (ev) {
        ev.editor.setKeystroke(CKEDITOR.CTRL + 85 /*U*/, false);
      });
    }
      // Mobile Nav Jump Button
      if (($(window).width() >= 767) || ($('.region-sidebar-first').length < 1))  {
        $('#mobile-nav-menu').css('display','none');
    }

  });

  $(window).resize(function() {
    $('article.node-page .field-name-body table, .view-content table.views-table').each(function() {
      if (!$(this).hasClass('stacktable') && $(window).width() < $(this).width() + 20) {
        $(this).stacktable();
      }
    });

    if ($(window).width() <= 768) {
      $('ul.quicklinks-list').appendTo('article.node-page .field-name-body');

      $('article.node-page .field-name-body table').each(function() {
        if (!$(this).hasClass('stacktable') && $(window).width() >= $(this).width() + 20) {
          $(this).stacktable();
        }
      });
    }
    // Mobile Nav Jump Button
    if (($(window).width() <= 767) && ($('.region-sidebar-first').length > 0)) {
        $('#mobile-nav-menu').css('display','inherit');
    }
    else {
      $('#mobile-nav-menu').css('display','none');
    }
  });

  /*$(window).load(function() {
    $( ".field-group-htabs-wrapper" ).append( $("<div>button</div>").addClass('menu-button') );
    $( ".field-group-htabs-wrapper .menu-button" ).click(function() {
      $('.horizontal-tab-button').toggleClass("show");
    });

    $( ".jquery-ui-filter-tabs" ).append( $("<div>button</div>").addClass('menu-button') );
    $( ".jquery-ui-filter-tabs .menu-button" ).click(function() {
      $('.ui-state-default').toggleClass("show");
    });
  });*/

})(jQuery);
;
/**
 * @file
 */

(function ($) {

  'use strict';

  Drupal.extlink = Drupal.extlink || {};

  Drupal.extlink.attach = function (context, settings) {
    if (!settings.hasOwnProperty('extlink')) {
      return;
    }

    // Strip the host name down, removing ports, subdomains, or www.
    var pattern = /^(([^\/:]+?\.)*)([^\.:]{1,})((\.[a-z0-9]{1,253})*)(:[0-9]{1,5})?$/;
    var host = window.location.host.replace(pattern, '$2$3');
    var subdomain = window.location.host.replace(host, '');

    // Determine what subdomains are considered internal.
    var subdomains;
    if (settings.extlink.extSubdomains) {
      subdomains = '([^/]*\\.)?';
    }
    else if (subdomain === 'www.' || subdomain === '') {
      subdomains = '(www\\.)?';
    }
    else {
      subdomains = subdomain.replace('.', '\\.');
    }

    // Build regular expressions that define an internal link.
    var internal_link = new RegExp('^https?://([^@]*@)?' + subdomains + host, 'i');

    // Extra internal link matching.
    var extInclude = false;
    if (settings.extlink.extInclude) {
      extInclude = new RegExp(settings.extlink.extInclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link matching.
    var extExclude = false;
    if (settings.extlink.extExclude) {
      extExclude = new RegExp(settings.extlink.extExclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link CSS selector exclusion.
    var extCssExclude = false;
    if (settings.extlink.extCssExclude) {
      extCssExclude = settings.extlink.extCssExclude;
    }

    // Extra external link CSS selector explicit.
    var extCssExplicit = false;
    if (settings.extlink.extCssExplicit) {
      extCssExplicit = settings.extlink.extCssExplicit;
    }

    // Define the jQuery method (either 'append' or 'prepend') of placing the icon, defaults to 'append'.
    var extIconPlacement = settings.extlink.extIconPlacement || 'append';

    // Find all links which are NOT internal and begin with http as opposed
    // to ftp://, javascript:, etc. other kinds of links.
    // When operating on the 'this' variable, the host has been appended to
    // all links by the browser, even local ones.
    // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
    // available in jQuery 1.0 (Drupal 5 default).
    var external_links = [];
    var mailto_links = [];
    $('a:not(.' + settings.extlink.extClass + ', .' + settings.extlink.mailtoClass + '), area:not(.' + settings.extlink.extClass + ', .' + settings.extlink.mailtoClass + ')', context).each(function (el) {
      try {
        var url = '';
        if (typeof this.href == 'string') {
          url = this.href.toLowerCase();
        }
        // Handle SVG links (xlink:href).
        else if (typeof this.href == 'object') {
          url = this.href.baseVal;
        }
        if (url.indexOf('http') === 0
          && ((!url.match(internal_link) && !(extExclude && url.match(extExclude))) || (extInclude && url.match(extInclude)))
          && !(extCssExclude && $(this).is(extCssExclude))
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          external_links.push(this);
        }
        // Do not include area tags with begin with mailto: (this prohibits
        // icons from being added to image-maps).
        else if (this.tagName !== 'AREA'
          && url.indexOf('mailto:') === 0
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          mailto_links.push(this);
        }
      }
      // IE7 throws errors often when dealing with irregular links, such as:
      // <a href="node/10"></a> Empty tags.
      // <a href="http://user:pass@example.com">example</a> User:pass syntax.
      catch (error) {
        return false;
      }
    });

    if (settings.extlink.extClass) {
      Drupal.extlink.applyClassAndSpan(external_links, settings.extlink.extClass, extIconPlacement);
    }

    if (settings.extlink.mailtoClass) {
      Drupal.extlink.applyClassAndSpan(mailto_links, settings.extlink.mailtoClass, extIconPlacement);
    }

    if (settings.extlink.extTarget) {
      // Apply the target attribute to all links.
      $(external_links).attr('target', settings.extlink.extTarget);
      // Add rel attributes noopener and noreferrer.
      $(external_links).attr('rel', function (i, val) {
        // If no rel attribute is present, create one with the values noopener and noreferrer.
        if (val == null) {
          return 'noopener noreferrer';
        }
        // Check to see if rel contains noopener or noreferrer. Add what doesn't exist.
        if (val.indexOf('noopener') > -1 || val.indexOf('noreferrer') > -1) {
          if (val.indexOf('noopener') === -1) {
            return val + ' noopener';
          }
          if (val.indexOf('noreferrer') === -1) {
            return val + ' noreferrer';
          }
          // Both noopener and noreferrer exist. Nothing needs to be added.
          else {
            return val;
          }
        }
        // Else, append noopener and noreferrer to val.
        else {
          return val + ' noopener noreferrer';
        }
      });
    }

    Drupal.extlink = Drupal.extlink || {};

    // Set up default click function for the external links popup. This should be
    // overridden by modules wanting to alter the popup.
    Drupal.extlink.popupClickHandler = Drupal.extlink.popupClickHandler || function () {
      if (settings.extlink.extAlert) {
        return confirm(settings.extlink.extAlertText);
      }
    };

    $(external_links).click(function (e) {
      return Drupal.extlink.popupClickHandler(e, this);
    });
  };

  /**
   * Apply a class and a trailing <span> to all links not containing images.
   *
   * @param {object[]} links
   *   An array of DOM elements representing the links.
   * @param {string} class_name
   *   The class to apply to the links.
   * @param {string} icon_placement
   *   'append' or 'prepend' the icon to the link.
   */
  Drupal.extlink.applyClassAndSpan = function (links, class_name, icon_placement) {
    var $links_to_process;
    if (Drupal.settings.extlink.extImgClass) {
      $links_to_process = $(links);
    }
    else {
      var links_with_images = $(links).find('img').parents('a');
      $links_to_process = $(links).not(links_with_images);
    }
    $links_to_process.addClass(class_name);
    var i;
    var length = $links_to_process.length;
    for (i = 0; i < length; i++) {
      var $link = $($links_to_process[i]);
      if ($link.css('display') === 'inline' || $link.css('display') === 'inline-block') {
        if (class_name === Drupal.settings.extlink.mailtoClass) {
          $link[icon_placement]('<span class="' + class_name + '" aria-label="' + Drupal.settings.extlink.mailtoLabel + '"></span>');
        }
        else {
          $link[icon_placement]('<span class="' + class_name + '" aria-label="' + Drupal.settings.extlink.extLabel + '"></span>');
        }
      }
    }
  };

  Drupal.behaviors.extlink = Drupal.behaviors.extlink || {};
  Drupal.behaviors.extlink.attach = function (context, settings) {
    // Backwards compatibility, for the benefit of modules overriding extlink
    // functionality by defining an "extlinkAttach" global function.
    if (typeof extlinkAttach === 'function') {
      extlinkAttach(context);
    }
    else {
      Drupal.extlink.attach(context, settings);
    }
  };

})(jQuery);
;
