"use strict";// This file can be used for global JS not specific to a particular component.
(function($){Drupal.behaviors.ponyfillCssVars={attach:function attach(context){cssVars()}};// Help make tables responsive
Drupal.behaviors.ResponsiveCellHeaders={attach:function attach(context){function ResponsiveCellHeaders(table,count){try{var THarray=[];var ths=table.getElementsByTagName("th");for(var i=0;i<ths.length;i++){var headingText=ths[i].innerHTML;THarray.push(headingText)}var styleElm=document.createElement("style"),styleSheet;document.head.appendChild(styleElm);styleSheet=styleElm.sheet;for(var i=0;i<THarray.length;i++){if(THarray[i].length){styleSheet.insertRule(".stacked-row-plus:nth-of-type("+count+")"+" td:nth-child("+(i+1)+")::before {content:\""+THarray[i]+": \";}",styleSheet.cssRules.length)}}}catch(e){console.log("ResponsiveCellHeaders(): "+e)}}var tables=document.getElementsByClassName("stacked-row-plus");var tablesLength=tables.length;for(var i=0;i<tablesLength;i++){ResponsiveCellHeaders(tables[i],i+1)}}};// Accordion implementation for the FAQ list accordion.
Drupal.behaviors.faqAccordion={attach:function attach(context,settings){var classCollapsed="faq-list__item--collapsed";var classExpanded="faq-list__item--expanded";var justOpenedDataFlag="faq-just-focused-and-opened";$(".faq-list__item",context).once("faqAccordion").each(function(i,faqItem){var $faqItem=$(faqItem);// Returns if there is a text selection in a faq item.
function hasTextSelection(){var selection=window.getSelection();var focusNode=selection.focusNode;return $.contains($faqItem[0],focusNode)&&selection.type=="Range"}// Set justOpenedDataFlag as collapsed if it has the classCollapsed
// class, then it remove this class after 100 ms, to avoid opening
// and closing faq items on user click, because it gets focus and click
// events, one after the other.
function setJustOpenedataFlag(){$faqItem.data(justOpenedDataFlag,$faqItem.hasClass(classCollapsed));setTimeout(function(){$faqItem.data(justOpenedDataFlag,null)},100)}$faqItem.click(function(event){// If this faq item has just been opened
// then do not trigger click this time.
if($faqItem.data(justOpenedDataFlag)){return}// When a text selection is made in a faq item
// it should not toggle its expanded/collapsed state.
if(hasTextSelection()){return}// Click will always toggle the open/collapse state.
$faqItem.toggleClass(classCollapsed+" "+classExpanded)});// On focus the faq item should be expanded.
$faqItem.focusin(function(event){// To avoid on click execute 2 events, focus opens the faq,
// and click closing the faq
setJustOpenedataFlag();// If FAQ item has the focus, it will always be opened.
$faqItem.addClass(classExpanded).removeClass(classCollapsed)})})}};// Accordion implementation for the How Do I list accordion.
Drupal.behaviors.hdiAccordion={attach:function attach(context,settings){$(".how-do-i__list--accordion .how-do-i__list-item",context).click(function(){$(this).toggleClass("opened")})}};// Accordion implementation for the How Do I list jump links header.
Drupal.behaviors.hdiJumpLinksAccordion={attach:function attach(context,settings){$(".how-do-i-step-links__title",context).click(function(){$(this).parent().toggleClass("how-do-i-step-links--expanded")})}}})(jQuery);
;
'use strict';(function($){'use strict';Drupal.behaviors.officialSite={attach:function attach(context){var $headerOfficialSiteInformation=$('.header-official-site__information');$('.header-official-site__link',context).on('click',function(e){e.preventDefault();$(this).toggleClass('header-official-site__link--active');$headerOfficialSiteInformation.attr('aria-hidden',function(i,attr){return attr=='true'?'false':'true'})})}}})(jQuery);
;
'use strict';(function($){'use strict';Drupal.behaviors.mainNavigation={attach:function attach(context){if(context===document){var $htmlNoScroll=$('html');var $bodyNoScroll=$('body');var $navigation=$('.header-site-nav-bar');var $navigationList=$('.header-site-nav');var $navigationToggle=$('.header-menu-trigger__button');var $navigationLink=$navigation.find('.header-site-nav__menu-item-link');var $navigationContent=$navigation.find('.header-site-nav-bar__inner');var $subNavigation=$navigation.find('.header-site-nav__menu-item--has-dropdown');var $pageContent=$('.page');var $viewportheight=window.innerHeight;var $tophat=$('.header-top-hat');var $header=$('.header-branding-bar');var $subNavigationLink=void 0;var $subNavigationContents=void 0;// Toggle classes.
$navigationToggle.on('click',function(event){event.preventDefault();$navigation.toggleClass('header-site-nav--is-active');$navigationToggle.toggleClass('header-site-nav--is-active');$pageContent.toggleClass('js-menu-screen-overlay--is-active');$htmlNoScroll.toggleClass('js-noscroll');$bodyNoScroll.toggleClass('js-noscroll');// toggle menu
if($navigation.hasClass('header-site-nav--is-active')){$navigation.css('max-height',$navigationContent.height());// Adjust height of navigation list for scrolling.
$navigationList.css('height',$viewportheight-($tophat.height()+$header.height()))}else{$navigation.css('max-height',0)}});// toggle submenu
$subNavigation.on('click',function(event){// skip if the actual link is the target
if(event.target!==this){return}// animate if pseudo element is clicked
else{// initialize variables
$subNavigationLink=$(this);$subNavigationContents=$subNavigationLink.find('> .header-site-nav__menu-item-list');$subNavigationContents.slideToggle(100,function(){// add classes
$subNavigationLink.toggleClass('header-site-nav--is-active');$navigation.css('max-height',$navigationContent.height())})}});// Also toggle classes on internal links.
$navigationLink.on('click',function(event){// When translation is clicked we don't want the menu to go away
if($(this).attr('id')==='block-googletranslator'){return}$navigation.removeClass('header-site-nav--is-active');$navigationToggle.removeClass('header-site-nav--is-active')})}}};Drupal.behaviors.menuFocus={attach:function attach(context){if(context===document){$(function(){$('.header-site-nav__menu-item--has-dropdown a').focus(function(){$(this).siblings('.header-site-nav__menu-item-list--level-1').addClass('focused')}).blur(function(){$(this).siblings('.header-site-nav__menu-item-list--level-1').removeClass('focused')})});$('.header-site-nav__menu-item-list--level-1 a').focus(function(){$(this).parents('.header-site-nav__menu-item-list--level-1').addClass('focused')}).blur(function(){$(this).parents('.header-site-nav__menu-item-list--level-1').removeClass('focused')})}}}})(jQuery);
;
'use strict';(function($){'use strict';Drupal.behaviors.searchInformationToggle={attach:function attach(context){var $searchToggleOpen=$('.header-search-trigger__button--open',context);var $searchToggleClose=$('.header-search-trigger__button--close',context);var $searchInfoWrapper=$('.header-search-bar',context);var $searchContentInner=$searchInfoWrapper.find('.header-search-bar__inner');var $searchPopularChoice=$searchContentInner.find('.header-search-form__popular-choice:visible');var $searchFormInputWrapper=$searchContentInner.find('.header-search-form__form-input-wrapper');var searchFormInputWrapperWidth=$searchFormInputWrapper.width();$(document).on('SearchApiFederatedSolr::block::autocomplete::suggestionsLoaded',function(e){var $searchAutocomplete=$searchContentInner.find('.js-search-autocomplete-container',context);$searchAutocomplete.css('max-width',searchFormInputWrapperWidth);var autoCompleteHeight=$searchAutocomplete.height();var searchContentInnerHeight=$searchContentInner.height();var searchPopularChoiceHeight=typeof $searchPopularChoice.height==='function'?$searchPopularChoice.height():0;// Default to adding the autocomplete height to existing height.
var height=searchContentInnerHeight+autoCompleteHeight+'px';// Adjust height if popular choice content is hidden.
if(autoCompleteHeight>=searchPopularChoiceHeight){height=searchContentInnerHeight-searchPopularChoiceHeight+autoCompleteHeight+'px'}$searchInfoWrapper.css('max-height',height);$searchInfoWrapper.css('height',height)});$(document).on('SearchApiFederatedSolr::block::autocomplete::suggestionsRemoved',function(e){$searchInfoWrapper.css('max-height',$searchContentInner.height()+'px');$searchInfoWrapper.css('height','')});$searchToggleOpen.on('click',function(e){e.preventDefault();$(this).addClass('js-header-search-trigger__button--open');$searchInfoWrapper.addClass('js-header-search-bar--expanded');$searchInfoWrapper.css('max-height',$searchContentInner.height()+'px');$searchInfoWrapper.attr('aria-expanded','true');$searchInfoWrapper.find('.header-search-form__text-input').focus()});$searchToggleClose.on('click',function(e){e.preventDefault();$searchToggleOpen.removeClass('js-header-search-trigger__button--open');$searchInfoWrapper.removeClass('js-header-search-bar--expanded');$searchInfoWrapper.css('max-height',0);$searchInfoWrapper.attr('aria-expanded','false')})}}})(jQuery);
;
'use strict';// Attaches headerUtitlyMover (debounced to 250ms)
// to the windows resize event,
// adds an observer to the classes on the html tag
// and runs headerUtitlyMover on pageload.
(function toogleAgenciesAndTranslatorLink($){// A utility function to move an element inside another element
// and add or remove classes.
$.fn.moveAndSetClass=function($elem,addClass,removeClass){this.each(function(){$(this).removeClass(removeClass).addClass(addClass).appendTo($elem)});return this};var currentBreakpoint=void 0;var previousBreakpoint=void 0;var $header=$('header');var $siteNav=$header.find('.header-site-nav__menu-item-list--level-0');var $headerUtilityWide=$header.find('.header-utility-wide');var $navHeaderAgencySelector=$header.find('.header-utility-wide__agency-selector');var $cssBreakpoints=$header.find('.js-breakpoint-indicators');var $translatorLink=$header.find('.header-utility-wide__language-selector');var $addedClasses='header-site-nav__menu-item-link header-site-nav__menu-item-link--header-link';var breakpointByWidth={'2px':'mobile','1px':'desktop'};var $googleTranslator=false;var translatorSvgHtml=void 0;// Places Translator Link (or Google Translator Element) and
// the Agency selector Link in $siteNav or $headerUtilityWide
// based on if it is mobile or desktop.
function headerUtilityMover(){currentBreakpoint=breakpointByWidth[$cssBreakpoints.css('width')];if(typeof currentBreakpoint==='undefined'){return}if(currentBreakpoint==previousBreakpoint){return}previousBreakpoint=currentBreakpoint;// Google translator element appears only after the user
// has accepted the "Automatic Translation Disclaimer"
// When the user accepts the "Automatic Translation Disclaimer"
// the translator link gets replaced by a Google Translator dropdown
$googleTranslator=$('#google_translator_element');if(currentBreakpoint=='mobile'){$googleTranslator.length?$siteNav.append($googleTranslator):$translatorLink.moveAndSetClass($siteNav,$addedClasses,'');$navHeaderAgencySelector.moveAndSetClass($siteNav,$addedClasses,'');return}if(currentBreakpoint=='desktop'){$googleTranslator.length?$headerUtilityWide.append($googleTranslator):$translatorLink.moveAndSetClass($headerUtilityWide,'',$addedClasses);$navHeaderAgencySelector.moveAndSetClass($headerUtilityWide,'',$addedClasses);return}}// To check for agencies and translation links position on page load.
headerUtilityMover();$(document).ready(function(){// Change breakpoint variables on screen resize.
// Setting resize event to be sure that Drupal.debounce is available.
// Debounce limits the function from being call every 250ms at most.
$(window).resize(Drupal.debounce(headerUtilityMover,250));translatorSvgHtml=$('#block-googletranslator svg')[0].outerHTML});var translatorGadgetClass='.goog-te-gadget-simple';// Create an observer instance to know when the page has been translated,
// or when the Automatic Translation Disclaimer has been accepted.
var translationObserver=new MutationObserver(function(){// If the Automatic Translation Disclaimer has been accepted
// we will find a new HTML element with the translatorGadgetClass class,
// and for styling reasons we are going to add it an SVG, only once.
if($(translatorGadgetClass).length&&$(translatorGadgetClass).find('svg').length===0){$(translatorGadgetClass).prepend(translatorSvgHtml)}// Only check for the first translation that may occur on pageload,
// subsequent translation events are not necessary to check as all
// the links will be already in place.
if($(document.documentElement).attr('class').match('translated')){previousBreakpoint='';headerUtilityMover();// After page is translated and elements are moved,
// disconnect. The rest of work happens on resize.
translationObserver.disconnect()}});translationObserver.observe(document.documentElement,{attributes:true})})(jQuery);
;
'use strict';!function(document,Drupal,$){'use strict';/**
   * Creates behavior for collapsing/expanding side-nav on mobile.
   */Drupal.behaviors.sideNav={attach:function attach(context){var $sideNavToggle=$('.side-nav__toggle',context);var $sideNavMenu=$('.side-nav',context);// Show menu on toggle click.
$sideNavToggle.on('click',function(){// Toggles aria-expanded attribute based on whether
// the side-nav menu is collapsed/expanded.
if($(this).attr('aria-expanded')==='true'){$(this).attr('aria-expanded','false')}else{$(this).attr('aria-expanded','true')}// Toggle class to expand/collapse side-nav.
$sideNavMenu.toggleClass('side-nav--is-open')});// Creates function for expanding/collapsing
// side-nav submenus.
/**
       * Bind expand/collapse action to submenu item.
       * @param {string} subitem - Sub-menu item.
       * @param {string} button - Toggle button.
       * @param {context} context - Drupal context.
       * @return {void}
       */function sideNavSubMenu(subitem,button,context){var $subItem=$(subitem,context);var $activeItem=$('.side-nav__item',context);// Checks if parent link has class of 'side-nav__item--active'
// on page load to manipulate aria-expanded value.
$activeItem.each(function(){if($(this).hasClass('side-nav__item--active')){$(this).find('.side-nav__sub-toggle').attr('aria-expanded','true')}});$subItem.find(button).once().on('click',function(){var $button=$(this);// Toggles 'side-nav__item--active' class
// on side-nav__item wrapper to be able to
// expand/collapse submenus.
$button.parent().toggleClass('side-nav__item--active');// Toggles aria-expanded attribute based on whether
// the sub-menu is collapsed/expanded.
if($button.attr('aria-expanded')==='true'){$button.attr('aria-expanded','false')}else{$button.attr('aria-expanded','true')}})}// Bind the function to the submenu item.
sideNavSubMenu('.side-nav__item','.side-nav__sub-toggle',context)}}}(document,Drupal,jQuery);
;
'use strict';!function(document,Drupal,$){'use strict';/**
   * Creates behavior for printing current page.
   */Drupal.behaviors.printPage={attach:function attach(context){var $printBtn=$('.share-this__print',context);// Print page on button click.
$printBtn.on('click',function(){window.print();return false})}}}(document,Drupal,jQuery);
;
'use strict';(function($){'use strict';Drupal.behaviors.sectionRegionItem={attach:function attach(context){$('.layout-section__region-item',context).each(function(index){if($(this).children('.promo-teaser--text').length>0){$(this).attr('data-has-promo-teaser-text','true')}if($(this).children('.cta-teaser').length>0){$(this).attr('data-has-cta-teaser','true')}if($(this).children('.news-teaser-layout-wrapper--has-images').length>0){$(this).attr('data-has-news-list-with-images','true')}if($(this).children('[role=\'article\']').length>0){$(this).attr('data-has-role-article','true')}if($(this).children('[data-layout=\'aside\']').length>0){$(this).attr('data-has-layout-aside','true')}if($(this).children('[data-layout=\'above\']').length>0){$(this).attr('data-has-layout-above','true')}})}}})(jQuery);
;
/**
 * @file document_link.js
 */
(function ($, Drupal) {

  "use strict";

  /**
   * Ga Document Link custom behavior.
   */
  Drupal.behaviors.GaDocumentLinkBehavior = {
    attach: function (context, settings) {
      // Make clicks on our ".../download" links trigger a Google Analytics
      // download event as well.
      $('a[href$="/download"]', context)
        .once('ga-document-link-attach-google-analytics-download')
        .on('click', function (e) {
          gtag('event', 'DOCUMENT', {
            event_category: 'Downloads',
            event_label: Drupal.google_analytics.getPageUrl(this.href),
            transport_type: 'beacon'
          });
        });
    }

  };

}(jQuery, Drupal));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);

      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;

        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);

            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = '#' + base;
        }
        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });

      Drupal.ajax.bindAjaxLinks(document.body);

      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};

        elementSettings.url = $(this.form).attr('action');

        elementSettings.setClick = true;

        elementSettings.event = 'click';

        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;

        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0;
    var statusText = void 0;
    var responseText = void 0;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', { '!status': xmlhttp.status });
    } else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    var pathText = '\n' + Drupal.t('Path: !uri', { '!uri': uri });
    statusText = '';

    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {
        '!statusText': $.trim(xmlhttp.statusText)
      });
    } catch (e) {}

    responseText = '';

    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {
        '!responseText': $.trim(xmlhttp.responseText)
      });
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    var readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    }) : '';

    customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    }) : '';

    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);

      var elementSettings = {
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, elementSettings);

    this.commands = new Drupal.AjaxCommands();

    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = '#' + this.wrapper;
    }

    this.element = element;

    this.element_settings = elementSettings;

    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;

    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;

    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },

      dataType: 'json',
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = 'drupal_' + (elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += '.' + elementSettings.dialogRenderer;
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);

      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};

      options.extraData.ajax_iframe_upload = '1';

      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';

    return '<div class="ajax-progress ajax-progress-throbber">' + throbber + messageMarkup + '</div>';
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return '<div class="message">' + message + '</div>';
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').after(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();

    $(this.element).prop('disabled', false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };

  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);

      var settings = response.settings || ajax.settings || drupalSettings;

      var $newContent = $($.parseHTML(response.data, document, true));

      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);

      var match = void 0;
      var importMatch = /^@import url\("(.*)"\);$/gim;
      if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
        importMatch.lastIndex = 0;
        do {
          match = importMatch.exec(response.data);
          document.styleSheets[0].addImport(match[1]);
        } while (match);
      }
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, debounce) {
  var liveElement = void 0;
  var announcements = [];

  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement = void 0;

    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      liveElement.innerHTML = '';

      liveElement.setAttribute('aria-busy', 'true');

      liveElement.setAttribute('aria-live', priority);

      liveElement.innerHTML = text.join('\n');

      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });

    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
/**
 * @file
 * Adds autocomplete functionality to search_api_solr_federated block form.
 */
(function($, Drupal, drupalSettings) {
  "use strict";

  var autocomplete = {};

  /**
   * Polyfill for Object.assign
   * @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
   */
  if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) { // .length of function is 2
        'use strict';
        if (target == null) { // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }

  /**
   * Attaches our custom autocomplete settings to the search_api_federated_solr block search form field.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the autocomplete behaviors.
   */
  Drupal.behaviors.searchApiFederatedSolrAutocomplete = {
    attach: function attach(context, settings) {
      // Find our fields with autocomplete settings
      $(context)
        .find(".js-search-api-federated-solr-block-form-autocomplete #edit-search")
        .once("search-api-federated-solr-autocomplete-search")
        .each(function() {
          // Halt execution if we don't have the required config.
          if (
            !Object.hasOwnProperty.call(
                drupalSettings,
                "searchApiFederatedSolr"
            ) ||
            !Object.hasOwnProperty.call(
                drupalSettings.searchApiFederatedSolr,
                "block"
            ) ||
            !Object.hasOwnProperty.call(
                drupalSettings.searchApiFederatedSolr.block,
                "autocomplete"
            ) ||
            !Object.hasOwnProperty.call(
                drupalSettings.searchApiFederatedSolr.block.autocomplete,
                "url"
            )
          ) {
            return;
          }
          // Set default settings.
          var defaultSettings = {
            isEnabled: false,
            appendWildcard: false,
            userpass: "",
            numChars: 2,
            suggestionRows: 5,
            mode: "result",
            result: {
              titleText: "What are you looking for?",
              hideDirectionsText: 0
            }
          };
          // Get passed in config from block config.
          var config = drupalSettings.searchApiFederatedSolr.block.autocomplete;
          // Merge defaults with passed in config.
          var options = Object.assign({}, defaultSettings, config);
          // Set scaffolding markup for suggestions container
          var suggestionsContainerScaffoldingMarkup = '<div class="js-search-autocomplete-container search-autocomplete-container visually-hidden"><div class="search-autocomplete-container__title">'.concat(
                options[options.mode].titleText,
                '<button class="js-search-autocomplete-container__close-button search-autocomplete-container__close-button">x</button></div><div id="js-search-autocomplete search-autocomplete"><div id="res" role="listbox" tabindex="-1"></div></div>'
          );

          if (!options[options.mode].hideDirectionsText) {
            suggestionsContainerScaffoldingMarkup +=
                '<div class="search-autocomplete-container__directions"><span class="search-autocomplete-container__directions-item">Press <code>ENTER</code> to search for your current term or <code>ESC</code> to close.</span><span class="search-autocomplete-container__directions-item">Press \u2191 and \u2193 to highlight a suggestion then <code>ENTER</code> to be redirected to that suggestion.</span></div>';
          }

          suggestionsContainerScaffoldingMarkup += "</div>";

          // Cache selectors.
          var $input = $(this);
          var $form = $("#federated-search-page-block-form");
          // Set up input with attributes, suggestions scaffolding.
          $input
              .attr("role", "combobox")
              .attr("aria-owns", "res")
              .attr("aria-autocomplete", "list")
              .attr("aria-expanded", "false");
          $(suggestionsContainerScaffoldingMarkup).insertAfter($input);
          // Cache inserted selectors.
          var $results = $("#res");
          var $autocompleteContainer = $(".js-search-autocomplete-container");
          var $closeButton = $(
              ".js-search-autocomplete-container__close-button"
          );

          // Initiate helper vars.
          var current;
          var counter = 1;
          var keys = {
            ESC: 27,
            TAB: 9,
            RETURN: 13,
            UP: 38,
            DOWN: 40
          };

          // Determine param values for any set default filters/facets.
          var defaultParams = "";
          $('input[type="hidden"]', $form).each(function(index, input) {
            var fq = $(input).attr("name") + ':("' + $(input).val() + '")';
            defaultParams += "&fq=" + encodeURI(fq);
          });
          // Set defaultParams from configuration.
          if (options.sm_site_name) {
            defaultParams += "&fq=sm_site_name:" + options.sm_site_name;
          }
          var urlWithDefaultParams = options.url + defaultParams;

          // Bind events to input.
          $input.on("input", function(event) {
            doSearch(options.suggestionRows);
          });

          $input.on("keydown", function(event) {
            doKeypress(keys, event);
          });

          // Define event handlers.
          function doSearch(suggestionRows) {
            $input.removeAttr("aria-activedescendant");
            var value = $input.val();
            // Remove spaces on either end of the value.
            var trimmed = value.trim();
            // Default to the trimmed value.
            var query = trimmed;
            // If the current value has more than the configured number of characters.
            if (query.length > options.numChars) {
              // Append wildcard to the query if configured to do so.
              if (options.appendWildcard) {
                // Note: syntax for wildcard query depends on the query endpoint
                if (options.proxyIsDisabled) {
                  // One method of supporting search-as-you-type is to append a wildcard '*'
                  //   to match zero or more additional characters at the end of the users search term.
                  // @see: https://lucene.apache.org/solr/guide/6_6/the-standard-query-parser.html#TheStandardQueryParser-WildcardSearches
                  // @see: https://opensourceconnections.com/blog/2013/06/07/search-as-you-type-with-solr/
                  // Split into word chunks.
                  var words = trimmed.split(" ");
                  // If there are multiple chunks, join them with "+", repeat the last word + append "*".
                  if (words.length > 1) {
                    query = words.join("+") + words.pop() + "*";
                  }
                  else {
                    // If there is only 1 word, repeat it an append "*".
                    query = words + "+" + words + "*";
                  }
                }
                else {
                  query = trimmed + "*";
                }
              }

              // Replace the placeholder with the query value.
              var url = urlWithDefaultParams.replace(/(\[val\])/gi, query);

              // Set up basic auth if we need  it.
              var xhrFields = {};
              var headers = {};

              if (options.userpass) {
                xhrFields = {
                  withCredentials: true
                };
                headers = {
                  Authorization: "Basic " + options.userpass
                };
              }
              // Make the ajax request
              $.ajax({
                  xhrFields: xhrFields,
                  headers: headers,
                  url: url,
                  dataType: "json"
                })
                // Currently we only support the response structure from Solr:
                // {
                //    response: {
                //      docs: [
                //        {
                //        ss_federated_title: <result title as link text>,
                //        ss_url: <result url as link href>,
                //        }
                //      ]
                //    }
                // }
                // @todo provide hook for transform function to be passed in
                //   via Drupal.settings then all it here.
                .done(function(results) {
                  if (results.response.docs.length >= 1) {
                    // Remove all suggestions
                    $(".js-autocomplete-suggestion").remove();
                    $autocompleteContainer.removeClass("visually-hidden");
                    $("#search-autocomplete").append("");
                    $input.attr("aria-expanded", "true");
                    counter = 1;

                    // Bind click event for close button
                    $closeButton.on("click", function(event) {
                      event.preventDefault();
                      event.stopPropagation();
                      $input.removeAttr("aria-activedescendant");

                      // Remove all suggestions
                      $(".js-autocomplete-suggestion").remove();
                      $autocompleteContainer.addClass("visually-hidden");
                      $input.attr("aria-expanded", "false");
                      $input.focus();

                      // Emit a custom events for removing.
                      $(document).trigger("SearchApiFederatedSolr::block::autocomplete::suggestionsRemoved", [{}]);
                    });
                    // Get first [suggestionRows] results
                    var limitedResults = results.response.docs.slice(0, suggestionRows);
                    limitedResults.forEach(function(item) {
                      // Highlight query chars in returned title
                      var pattern = new RegExp(trimmed, "gi");
                      var highlighted = item.ss_federated_title.replace(
                          pattern,
                          function(string) {
                            return "<strong>" + string + "</strong>";
                          }
                      );
                      // Default the URL to the passed ss_url.
                      var href = item.ss_url;
                      // Ensure that the result returned for the item from solr
                      // (via proxy or directly) is assigned an absolute URL.
                      if (!options.directUrl) {
                        // Initialize url to compute from solr sm_urls array.
                        var sm_url;
                        // Use the canonical url.
                        if (Array.isArray(item.sm_urls)) {
                          sm_url = item.sm_urls[0];
                        }
                        // If no valid urls are passed from solr, skip this item.
                        if (!sm_url) {
                          return;
                        }
                        // Override the current href value.
                        href = sm_url;
                      }

                      //Add results to the list
                      var $suggestionTemplate = "<div role='option' tabindex='-1' class='js-autocomplete-suggestion autocomplete-suggestion' id='suggestion-"
                          .concat(counter, "'><a class='js-autocomplete-suggestion__link autocomplete-suggestion__link' href='")
                          .concat(href, "'>")
                          .concat(highlighted, "</a><span class='visually-hidden'>(")
                          .concat(counter, " of ")
                          .concat(limitedResults.length, ")</span></div>");
                      $results.append($suggestionTemplate);
                      counter = counter + 1;
                    });

                    // On link click, emit an event whose data can be used to write to analytics, etc.
                    $(".js-autocomplete-suggestion__link").on("click", function(e) {
                      $(document).trigger("SearchApiFederatedSolr::block::autocomplete::selection",
                        [
                          {
                            referrer: $(location).attr("href"),
                            target: $(this).attr("href"),
                            term: $input.val()
                          }
                        ]
                      );
                    });

                    // Emit a custom events for results.
                    $(document).trigger("SearchApiFederatedSolr::block::autocomplete::suggestionsLoaded", [{}]);

                    // Announce the number of suggestions.
                    var number = $results.children('[role="option"]').length;

                    if (number >= 1) {
                      Drupal.announce(
                          Drupal.t(
                              number +
                              " suggestions displayed. To navigate use up and down arrow keys."
                          )
                      );
                    }
                  }
                  else {
                    // No results, remove suggestions and hide container
                    $(".js-autocomplete-suggestion").remove();
                    $autocompleteContainer.addClass("visually-hidden");
                    $input.attr("aria-expanded", "false");

                    // Emit a custom events for removing.
                    $(document).trigger("SearchApiFederatedSolr::block::autocomplete::suggestionsRemoved", [{}]);
                  }
                });
            }
            else {
              // Remove suggestions and hide container
              $(".js-autocomplete-suggestion").remove();
              $autocompleteContainer.addClass("visually-hidden");
              $input.attr("aria-expanded", "false");

              // Emit a custom events for removing.
              $(document).trigger("SearchApiFederatedSolr::block::autocomplete::suggestionsRemoved", [{}]);
            }
          }

          function doKeypress(keys, event) {
            var $suggestions = $(".js-autocomplete-suggestion");
            var highlighted = false;
            highlighted = $results.children("div").hasClass("highlight");

            switch (event.which) {
              case keys.ESC:
                event.preventDefault();
                event.stopPropagation();
                $input.removeAttr("aria-activedescendant");
                $suggestions.remove();
                $autocompleteContainer.addClass("visually-hidden");
                $input.attr("aria-expanded", "false");
                break;

              case keys.TAB:
                $input.removeAttr("aria-activedescendant");
                $suggestions.remove();
                $autocompleteContainer.addClass("visually-hidden");
                $input.attr("aria-expanded", "false");
                break;

              case keys.RETURN:
                if (highlighted) {
                  event.preventDefault();
                  event.stopPropagation();
                  return selectOption(
                      highlighted,
                      $(".highlight")
                          .find("a")
                          .attr("href")
                  );
                }
                else {
                  $form.submit();
                  return false;
                }

                break;

              case keys.UP:
                event.preventDefault();
                event.stopPropagation();
                return moveUp(highlighted);
                break;

              case keys.DOWN:
                event.preventDefault();
                event.stopPropagation();
                return moveDown(highlighted);
                break;

              default:
                return;
            }
          }

          function moveUp(highlighted) {
            $input.removeAttr("aria-activedescendant");

            // if highlighted exists and if the highlighted item is not the first option
            if (highlighted && !$results.children().first("div").hasClass("highlight")) {
              removeCurrent();
              current.prev("div").addClass("highlight").attr("aria-selected", true);
              $input.attr("aria-activedescendant", current.prev("div").attr("id"));
            }
            else {
              // Go to bottom of list
              removeCurrent();
              current = $results.children().last("div");
              current.addClass("highlight").attr("aria-selected", true);
              $input.attr("aria-activedescendant", current.attr("id"));
            }
          }

          function moveDown(highlighted) {
            $input.removeAttr("aria-activedescendant");

            // if highlighted exists and if the highlighted item is not the last option
            if (highlighted && !$results.children().last("div").hasClass("highlight")) {
              removeCurrent();
              current.next("div").addClass("highlight").attr("aria-selected", true);
              $input.attr("aria-activedescendant", current.next("div").attr("id"));
            }
            else {
              // Go to top of list
              removeCurrent();
              current = $results.children().first("div");
              current.addClass("highlight").attr("aria-selected", true);
              $input.attr("aria-activedescendant", current.attr("id"));
            }
          }

          function removeCurrent() {
            current = $results.find(".highlight");
            current.attr("aria-selected", false);
            current.removeClass("highlight");
          }

          function selectOption(highlighted, href) {
            if (highlighted && href) {  // @todo add logic for non-link suggestions
              // Emit an event whose data can be used to write to analytics, etc.
              $(document).trigger("SearchApiFederatedSolr::block::autocomplete::selection",
                [
                  {
                    referrer: $(location).attr("href"),
                    target: href,
                    term: $input.val()
                  }
                ]
              );

              // Redirect to the selected link.
              $(location).attr("href", href);
            }
            else {
              return;
            }
          }
        });
    }
  };
  Drupal.SearchApiFederatedSolrAutocomplete = autocomplete;
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * File init.js.
 */

(function (Drupal, settings) {
  Drupal.behaviors.googleTranslatorElement = {

    init: function () {
      var displayMode = settings.googleTranslatorElement.displayMode;
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: settings.googleTranslatorElement.languages,
        layout: google.translate.TranslateElement.InlineLayout[displayMode],
      }, settings.googleTranslatorElement.id);
    },

  };
})(Drupal, drupalSettings);
;
/**
 * @file
 * File disclaimer.js.
 */

(function ($, Drupal) {

  "use strict";

  Drupal.behaviors.googleTranslatorDisclaimer = {

    getCookie: function (name) {
      // Check for google translations cookies.
      var i, x, y, cookies = document.cookie.split(";");
      for (i = 0; i < cookies.length; i++) {
        x = cookies[i].substr(0, cookies[i].indexOf("="));
        y = cookies[i].substr(cookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == name) {
          return unescape(y);
        }
      }
    },

    attach: function (context, settings) {
      var config = settings.googleTranslatorDisclaimer || {},
        $disclaimerLink = $(config.jquerySelector, context),
        swap = function () {
          $disclaimerLink.replaceWith(config.element);
        };

      // When the user has previously activated google translate, the cookie
      // will be set and we can proceed straight to exposing the language
      // button without the disclaimer interstitial.
      if ($disclaimerLink.length &&
          typeof this.getCookie('googtrans') != 'undefined') {
        swap();
      }
      else {
        // Listen for user click on the translate interstitial (disclaimer) link.
        $disclaimerLink.click(function (event) {

          // Show the disclaimer text if available.
          if (config.disclaimer &&
              config.disclaimer.trim().length > 0) {

            // Don't show the interstitial if it's already there.
            if ($('#__dimScreen', context).length == 0) {
              var accept = '<a href="#" class="accept-terms">' + config.acceptText + '</a>',
                cancel = '<a href="#" class="do-not-accept-terms">' + config.dontAcceptText + '</a>',
                message = '<div class="message">' + config.disclaimer + '<div>' + accept + ' ' + cancel + '</div></div>';
              $('<div id="__dimScreen"><div class="overlay-wrapper"></div></div>', context).css({
                height : '100%',
                left : '0px',
                position : 'fixed',
                top : '0px',
                width : '100%',
                zIndex : '700'
              }).appendTo(document.body);

              // Attach message text.
              $('#__dimScreen .overlay-wrapper', context).after(message);

              // Focus on accept link when modal appears.
              $('#__dimScreen .message a.accept-terms', context).focus();

              // Accepted terms.
              $('#__dimScreen .message a.accept-terms', context).click(function (event) {
                $('#__dimScreen', context).remove();
                swap();
                $.getScript('//cdn.jsdelivr.net/gh/liamdanger/jQuery.DOMNodeAppear@master/jquery.domnodeappear.js')
                  .done(function () {
                    $('.goog-te-gadget', context).DOMNodeAppear(function () {
                      setTimeout(function () {
                        // Focus on the gadget.
                        $('a.goog-te-menu-value', context).focus();
                      }, 500);
                    }, '.goog-te-gadget');
                  });
              });

              // Attach esc key to cancel action terms action.
              $(document, context).keyup(function (e) {
                if (e.keyCode == 27) {
                  $('#__dimScreen', context).remove();
                  $disclaimerLink.focus();
                }
              });
              // Cancel, did not accept terms.
              $('#__dimScreen .message a.do-not-accept-terms', context).click(function (event) {
                $('#__dimScreen', context).remove();
                // Plant the focus back where we left it.
                $disclaimerLink.focus();
              });

              $('#__dimScreen .overlay-wrapper', context).css({
                background : '#000',
                height : '100%',
                left : '0px',
                opacity : '0',
                position : 'absolute',
                top : '0px',
                width : '100%',
                zIndex : '760'
              }).fadeTo(100, 0.75, function (event) { });
            }
          }

          // If the disclaimer text is not available, then just show the widget.
          else {
            swap();
          }
        });
      }
    }

  }
})(jQuery, Drupal);
;
