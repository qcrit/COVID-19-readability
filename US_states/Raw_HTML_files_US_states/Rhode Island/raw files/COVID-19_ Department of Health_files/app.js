"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */
;

(function (factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
})(function ($) {
  'use strict';

  var Slick = window.Slick || {};

  Slick = function () {
    var instanceUid = 0;

    function Slick(element, settings) {
      var _ = this,
          dataSettings;

      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function customPaging(slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = 'hidden';
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data('slick') || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;

      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }

      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++; // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source

      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

      _.registerBreakpoints();

      _.init(true);
    }

    return Slick;
  }();

  Slick.prototype.activateADA = function () {
    var _ = this;

    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': 'false'
    }).find('a, input, button, select').attr({
      'tabindex': '0'
    });
  };

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;

    if (typeof index === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }

    _.unload();

    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.animateHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };

  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
        _ = this;

    _.animateHeight();

    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }

    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }

        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function step(now) {
            now = Math.ceil(now);

            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' + now + 'px, 0px)';

              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' + now + 'px)';

              _.$slideTrack.css(animProps);
            }
          },
          complete: function complete() {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();

        targetLeft = Math.ceil(targetLeft);

        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }

        _.$slideTrack.css(animProps);

        if (callback) {
          setTimeout(function () {
            _.disableTransition();

            callback.call();
          }, _.options.speed);
        }
      }
    }
  };

  Slick.prototype.getNavTarget = function () {
    var _ = this,
        asNavFor = _.options.asNavFor;

    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }

    return asNavFor;
  };

  Slick.prototype.asNavFor = function (index) {
    var _ = this,
        asNavFor = _.getNavTarget();

    if (asNavFor !== null && _typeof(asNavFor) === 'object') {
      asNavFor.each(function () {
        var target = $(this).slick('getSlick');

        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };

  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
        transition = {};

    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.autoPlay = function () {
    var _ = this;

    _.autoPlayClear();

    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };

  Slick.prototype.autoPlayClear = function () {
    var _ = this;

    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };

  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
        slideTo = _.currentSlide + _.options.slidesToScroll;

    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;

          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }

      _.slideHandler(slideTo);
    }
  };

  Slick.prototype.buildArrows = function () {
    var _ = this;

    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }

        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }

        if (_.options.infinite !== true) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
          'aria-disabled': 'true',
          'tabindex': '-1'
        });
      }
    }
  };

  Slick.prototype.buildDots = function () {
    var _ = this,
        i,
        dot;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass('slick-dotted');

      dot = $('<ul />').addClass(_.options.dotsClass);

      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }

      _.$dots = dot.appendTo(_.options.appendDots);

      _.$dots.find('li').first().addClass('slick-active');
    }
  };

  Slick.prototype.buildOut = function () {
    var _ = this;

    _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
    _.slideCount = _.$slides.length;

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
    });

    _.$slider.addClass('slick-slider');

    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();

    _.$slideTrack.css('opacity', 0);

    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }

    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

    _.setupInfinite();

    _.buildArrows();

    _.buildDots();

    _.updateDots();

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
  };

  Slick.prototype.buildRows = function () {
    var _ = this,
        a,
        b,
        c,
        newSlides,
        numOfSlides,
        originalSlides,
        slidesPerSection;

    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();

    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');

        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');

          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);

            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }

          slide.appendChild(row);
        }

        newSlides.appendChild(slide);
      }

      _.$slider.empty().append(newSlides);

      _.$slider.children().children().children().css({
        'width': 100 / _.options.slidesPerRow + '%',
        'display': 'inline-block'
      });
    }
  };

  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
        breakpoint,
        targetBreakpoint,
        respondToWidth,
        triggerBreakpoint = false;

    var sliderWidth = _.$slider.width();

    var windowWidth = window.innerWidth || $(window).width();

    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }

    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;

      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }

      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;

            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }

              _.refresh(initial);
            }

            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;

          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }

            _.refresh(initial);
          }

          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;

          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }

          _.refresh(initial);

          triggerBreakpoint = targetBreakpoint;
        }
      } // only trigger breakpoints during an actual break. not on initialize.


      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  };

  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
        $target = $(event.currentTarget),
        indexOffset,
        slideOffset,
        unevenOffset; // If target is a link, prevent default action.


    if ($target.is('a')) {
      event.preventDefault();
    } // If target is not the <li> element (ie: a child), find the <li>.


    if (!$target.is('li')) {
      $target = $target.closest('li');
    }

    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

    switch (event.data.message) {
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }

        break;

      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }

        break;

      case 'index':
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

        _.slideHandler(_.checkNavigable(index), false, dontAnimate);

        $target.children().trigger('focus');
        break;

      default:
        return;
    }
  };

  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
        navigables,
        prevNavigable;

    navigables = _.getNavigableIndexes();
    prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  };

  Slick.prototype.cleanUpEvents = function () {
    var _ = this;

    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));

      if (_.options.accessibility === true) {
        _.$dots.off('keydown.slick', _.keyHandler);
      }
    }

    _.$slider.off('focus.slick blur.slick');

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
        _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
      }
    }

    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);

    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);

    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);

    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

    _.$list.off('click.slick', _.clickHandler);

    $(document).off(_.visibilityChange, _.visibility);

    _.cleanUpSlideEvents();

    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }

    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  };

  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;

    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));

    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  };

  Slick.prototype.cleanUpRows = function () {
    var _ = this,
        originalSlides;

    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');

      _.$slider.empty().append(originalSlides);
    }
  };

  Slick.prototype.clickHandler = function (event) {
    var _ = this;

    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };

  Slick.prototype.destroy = function (refresh) {
    var _ = this;

    _.autoPlayClear();

    _.touchObject = {};

    _.cleanUpEvents();

    $('.slick-cloned', _.$slider).detach();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }

    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }

    if (_.$slides) {
      _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
        $(this).attr('style', $(this).data('originalStyling'));
      });

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.detach();

      _.$list.detach();

      _.$slider.append(_.$slides);
    }

    _.cleanUpRows();

    _.$slider.removeClass('slick-slider');

    _.$slider.removeClass('slick-initialized');

    _.$slider.removeClass('slick-dotted');

    _.unslicked = true;

    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  };

  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
        transition = {};

    transition[_.transitionType] = '';

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });

      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });

      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);

          callback.call();
        }, _.options.speed);
      }
    }
  };

  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;

    if (filter !== null) {
      _.$slidesCache = _.$slides;

      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.focusHandler = function () {
    var _ = this; // If any child element receives focus within the slider we need to pause the autoplay


    _.$slider.off('focus.slick blur.slick').on('focus.slick', '*', function (event) {
      var $sf = $(this);
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          if ($sf.is(':focus')) {
            _.focussed = true;

            _.autoPlay();
          }
        }
      }, 0);
    }).on('blur.slick', '*', function (event) {
      var $sf = $(this); // When a blur occurs on any elements within the slider we become unfocused

      if (_.options.pauseOnFocus) {
        _.focussed = false;

        _.autoPlay();
      }
    });
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;

    return _.currentSlide;
  };

  Slick.prototype.getDotCount = function () {
    var _ = this;

    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;

    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }

    return pagerQty - 1;
  };

  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide,
        coef;

    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);

    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;

        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }

        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }

      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }

    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }

    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }

    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }

      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }

      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }

        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }

        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }

    return targetLeft;
  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;

    return _.options[option];
  };

  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;

    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }

    return indexes;
  };

  Slick.prototype.getSlick = function () {
    return this;
  };

  Slick.prototype.getSlideCount = function () {
    var _ = this,
        slidesTraversed,
        swipedSlide,
        swipeTarget,
        centerOffset;

    centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
    swipeTarget = _.swipeLeft * -1 + centerOffset;

    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        var slideOuterWidth, slideOffset, slideRightBoundary;
        slideOuterWidth = $(slide).outerWidth();
        slideOffset = slide.offsetLeft;

        if (_.options.centerMode !== true) {
          slideOffset += slideOuterWidth / 2;
        }

        slideRightBoundary = slideOffset + slideOuterWidth;

        if (swipeTarget < slideRightBoundary) {
          swipedSlide = slide;
          return false;
        }
      });

      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);
  };

  Slick.prototype.init = function (creation) {
    var _ = this;

    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');

      _.buildRows();

      _.buildOut();

      _.setProps();

      _.startLoad();

      _.loadSlider();

      _.initializeEvents();

      _.updateArrows();

      _.updateDots();

      _.checkResponsive(true);

      _.focusHandler();
    }

    if (creation) {
      _.$slider.trigger('init', [_]);
    }

    if (_.options.accessibility === true) {
      _.initADA();
    }

    if (_.options.autoplay) {
      _.paused = false;

      _.autoPlay();
    }
  };

  Slick.prototype.initADA = function () {
    var _ = this,
        numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
        tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
      return val >= 0 && val < _.slideCount;
    });

    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    }).find('a, input, button, select').attr({
      'tabindex': '-1'
    });

    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          'role': 'tabpanel',
          'id': 'slick-slide' + _.instanceUid + i,
          'tabindex': -1
        });

        if (slideControlIndex !== -1) {
          var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;

          if ($('#' + ariaButtonControl).length) {
            $(this).attr({
              'aria-describedby': ariaButtonControl
            });
          }
        }
      });

      _.$dots.attr('role', 'tablist').find('li').each(function (i) {
        var mappedSlideIndex = tabControlIndexes[i];
        $(this).attr({
          'role': 'presentation'
        });
        $(this).find('button').first().attr({
          'role': 'tab',
          'id': 'slick-slide-control' + _.instanceUid + i,
          'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
          'aria-label': i + 1 + ' of ' + numDotGroups,
          'aria-selected': null,
          'tabindex': '-1'
        });
      }).eq(_.currentSlide).find('button').attr({
        'aria-selected': 'true',
        'tabindex': '0'
      }).end();
    }

    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          'tabindex': '0'
        });
      } else {
        _.$slides.eq(i).removeAttr('tabindex');
      }
    }

    _.activateADA();
  };

  Slick.prototype.initArrowEvents = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off('click.slick').on('click.slick', {
        message: 'previous'
      }, _.changeSlide);

      _.$nextArrow.off('click.slick').on('click.slick', {
        message: 'next'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow.on('keydown.slick', _.keyHandler);

        _.$nextArrow.on('keydown.slick', _.keyHandler);
      }
    }
  };

  Slick.prototype.initDotEvents = function () {
    var _ = this;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$dots.on('keydown.slick', _.keyHandler);
      }
    }

    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initSlideEvents = function () {
    var _ = this;

    if (_.options.pauseOnHover) {
      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));

      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initializeEvents = function () {
    var _ = this;

    _.initArrowEvents();

    _.initDotEvents();

    _.initSlideEvents();

    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);

    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);

    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('click.slick', _.clickHandler);

    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };

  Slick.prototype.initUI = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();

      _.$nextArrow.show();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };

  Slick.prototype.keyHandler = function (event) {
    var _ = this; //Dont slide if the cursor is inside the form fields and arrow keys are pressed


    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'next' : 'previous'
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'previous' : 'next'
          }
        });
      }
    }
  };

  Slick.prototype.lazyLoad = function () {
    var _ = this,
        loadRange,
        cloneRange,
        rangeStart,
        rangeEnd;

    function loadImages(imagesScope) {
      $('img[data-lazy]', imagesScope).each(function () {
        var image = $(this),
            imageSource = $(this).attr('data-lazy'),
            imageSrcSet = $(this).attr('data-srcset'),
            imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
            imageToLoad = document.createElement('img');

        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            if (imageSrcSet) {
              image.attr('srcset', imageSrcSet);

              if (imageSizes) {
                image.attr('sizes', imageSizes);
              }
            }

            image.attr('src', imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
            });

            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          });
        };

        imageToLoad.onerror = function () {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
        };

        imageToLoad.src = imageSource;
      });
    }

    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);

      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }

    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

    if (_.options.lazyLoad === 'anticipated') {
      var prevSlide = rangeStart - 1,
          nextSlide = rangeEnd,
          $slides = _.$slider.find('.slick-slide');

      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }

    loadImages(loadRange);

    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };

  Slick.prototype.loadSlider = function () {
    var _ = this;

    _.setPosition();

    _.$slideTrack.css({
      opacity: 1
    });

    _.$slider.removeClass('slick-loading');

    _.initUI();

    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  };

  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'next'
      }
    });
  };

  Slick.prototype.orientationChange = function () {
    var _ = this;

    _.checkResponsive();

    _.setPosition();
  };

  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;

    _.autoPlayClear();

    _.paused = true;
  };

  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;

    _.autoPlay();

    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };

  Slick.prototype.postSlide = function (index) {
    var _ = this;

    if (!_.unslicked) {
      _.$slider.trigger('afterChange', [_, index]);

      _.animating = false;

      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }

      _.swipeLeft = null;

      if (_.options.autoplay) {
        _.autoPlay();
      }

      if (_.options.accessibility === true) {
        _.initADA();

        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr('tabindex', 0).focus();
        }
      }
    }
  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'previous'
      }
    });
  };

  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };

  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;

    var _ = this,
        $imgsToLoad = $('img[data-lazy]', _.$slider),
        image,
        imageSource,
        imageSrcSet,
        imageSizes,
        imageToLoad;

    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageSrcSet = image.attr('data-srcset');
      imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
      imageToLoad = document.createElement('img');

      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr('srcset', imageSrcSet);

          if (imageSizes) {
            image.attr('sizes', imageSizes);
          }
        }

        image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }

        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);

        _.progressiveLazyLoad();
      };

      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          /**
           * try to load the image 3 times,
           * leave a slight delay so we don't get
           * servers blocking the request.
           */
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

          _.progressiveLazyLoad();
        }
      };

      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger('allImagesLoaded', [_]);
    }
  };

  Slick.prototype.refresh = function (initializing) {
    var _ = this,
        currentSlide,
        lastVisibleIndex;

    lastVisibleIndex = _.slideCount - _.options.slidesToShow; // in non-infinite sliders, we don't want to go past the
    // last visible index.

    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    } // if less slides than to show, go to start.


    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    currentSlide = _.currentSlide;

    _.destroy(true);

    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });

    _.init();

    if (!initializing) {
      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);
    }
  };

  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
        breakpoint,
        currentBreakpoint,
        l,
        responsiveSettings = _.options.responsive || null;

    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || 'window';

      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;

        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint; // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.

          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }

            l--;
          }

          _.breakpoints.push(currentBreakpoint);

          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }

      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };

  Slick.prototype.reinit = function () {
    var _ = this;

    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
    _.slideCount = _.$slides.length;

    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    _.registerBreakpoints();

    _.setProps();

    _.setupInfinite();

    _.buildArrows();

    _.updateArrows();

    _.initArrowEvents();

    _.buildDots();

    _.updateDots();

    _.initDotEvents();

    _.cleanUpSlideEvents();

    _.initSlideEvents();

    _.checkResponsive(false, true);

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    _.setPosition();

    _.focusHandler();

    _.paused = !_.options.autoplay;

    _.autoPlay();

    _.$slider.trigger('reInit', [_]);
  };

  Slick.prototype.resize = function () {
    var _ = this;

    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();

        _.checkResponsive();

        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;

    if (typeof index === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }

    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }

    _.unload();

    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.setCSS = function (position) {
    var _ = this,
        positionProps = {},
        x,
        y;

    if (_.options.rtl === true) {
      position = -position;
    }

    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    positionProps[_.positionProp] = position;

    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};

      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';

        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';

        _.$slideTrack.css(positionProps);
      }
    }
  };

  Slick.prototype.setDimensions = function () {
    var _ = this;

    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: '0px ' + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);

      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + ' 0px'
        });
      }
    }

    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();

    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);

      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
    }

    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();

    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  };

  Slick.prototype.setFade = function () {
    var _ = this,
        targetLeft;

    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;

      if (_.options.rtl === true) {
        $(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });

    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };

  Slick.prototype.setHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.css('height', targetHeight);
    }
  };

  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    /**
     * accepts arguments in format of:
     *
     *  - for changing a single option's value:
     *     .slick("setOption", option, value, refresh )
     *
     *  - for changing a set of responsive options:
     *     .slick("setOption", 'responsive', [{}, ...], refresh )
     *
     *  - for updating multiple values at once (not responsive)
     *     .slick("setOption", { 'option': value, ... }, refresh )
     */
    var _ = this,
        l,
        item,
        option,
        value,
        refresh = false,
        type;

    if ($.type(arguments[0]) === 'object') {
      option = arguments[0];
      refresh = arguments[1];
      type = 'multiple';
    } else if ($.type(arguments[0]) === 'string') {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];

      if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
        type = 'responsive';
      } else if (typeof arguments[1] !== 'undefined') {
        type = 'single';
      }
    }

    if (type === 'single') {
      _.options[option] = value;
    } else if (type === 'multiple') {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === 'responsive') {
      for (item in value) {
        if ($.type(_.options.responsive) !== 'array') {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1; // loop through the responsive object and splice out duplicates.

          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }

            l--;
          }

          _.options.responsive.push(value[item]);
        }
      }
    }

    if (refresh) {
      _.unload();

      _.reinit();
    }
  };

  Slick.prototype.setPosition = function () {
    var _ = this;

    _.setDimensions();

    _.setHeight();

    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }

    _.$slider.trigger('setPosition', [_]);
  };

  Slick.prototype.setProps = function () {
    var _ = this,
        bodyStyle = document.body.style;

    _.positionProp = _.options.vertical === true ? 'top' : 'left';

    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }

    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }

    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }

    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }

    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }

    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };

  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
        centerOffset,
        allSlides,
        indexOffset,
        remainder;

    allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

    _.$slides.eq(index).addClass('slick-current');

    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
        }

        if (index === 0) {
          allSlides.eq(_.options.slidesToShow + _.slideCount + 1).addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }

      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        }
      }
    }

    if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
      _.lazyLoad();
    }
  };

  Slick.prototype.setupInfinite = function () {
    var _ = this,
        i,
        slideIndex,
        infiniteCount;

    if (_.options.fade === true) {
      _.options.centerMode = false;
    }

    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;

      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }

        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
        }

        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
        }

        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
          $(this).attr('id', '');
        });
      }
    }
  };

  Slick.prototype.interrupt = function (toggle) {
    var _ = this;

    if (!toggle) {
      _.autoPlay();
    }

    _.interrupted = toggle;
  };

  Slick.prototype.selectHandler = function (event) {
    var _ = this;

    var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
    var index = parseInt(targetElement.attr('data-slick-index'));
    if (!index) index = 0;

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);

      return;
    }

    _.slideHandler(index);
  };

  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
        animSlide,
        oldSlide,
        slideLeft,
        targetLeft = null,
        _ = this,
        navTarget;

    sync = sync || false;

    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }

    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }

    if (sync === false) {
      _.asNavFor(index);
    }

    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    }

    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }

    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }

    _.animating = true;

    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;

    _.setSlideClasses(_.currentSlide);

    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick('getSlick');

      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }

    _.updateDots();

    _.updateArrows();

    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);

        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }

      _.animateHeight();

      return;
    }

    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };

  Slick.prototype.startLoad = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();

      _.$nextArrow.hide();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }

    _.$slider.addClass('slick-loading');
  };

  Slick.prototype.swipeDirection = function () {
    var xDist,
        yDist,
        r,
        swipeAngle,
        _ = this;

    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? 'right' : 'left';
    }

    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }

    return 'vertical';
  };

  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
        slideCount,
        direction;

    _.dragging = false;
    _.swiping = false;

    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }

    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

    if (_.touchObject.curX === undefined) {
      return false;
    }

    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }

    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();

      switch (direction) {
        case 'left':
        case 'down':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;

        case 'right':
        case 'up':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;

        default:
      }

      if (direction != 'vertical') {
        _.slideHandler(slideCount);

        _.touchObject = {};

        _.$slider.trigger('swipe', [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);

        _.touchObject = {};
      }
    }
  };

  Slick.prototype.swipeHandler = function (event) {
    var _ = this;

    if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }

    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }

    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);

        break;

      case 'move':
        _.swipeMove(event);

        break;

      case 'end':
        _.swipeEnd(event);

        break;
    }
  };

  Slick.prototype.swipeMove = function (event) {
    var _ = this,
        edgeWasHit = false,
        curLeft,
        swipeDirection,
        swipeLength,
        positionOffset,
        touches,
        verticalSwipeLength;

    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }

    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }

    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }

    swipeDirection = _.swipeDirection();

    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }

    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }

    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;

    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }

    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }

    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }

    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }

    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }

    _.setCSS(_.swipeLeft);
  };

  Slick.prototype.swipeStart = function (event) {
    var _ = this,
        touches;

    _.interrupted = true;

    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }

    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }

    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;

    if (_.$slidesCache !== null) {
      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.unload = function () {
    var _ = this;

    $('.slick-cloned', _.$slider).remove();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }

    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }

    _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
  };

  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;

    _.$slider.trigger('unslick', [_, fromBreakpoint]);

    _.destroy();
  };

  Slick.prototype.updateArrows = function () {
    var _ = this,
        centerOffset;

    centerOffset = Math.floor(_.options.slidesToShow / 2);

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      }
    }
  };

  Slick.prototype.updateDots = function () {
    var _ = this;

    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').end();

      _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
    }
  };

  Slick.prototype.visibility = function () {
    var _ = this;

    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };

  $.fn.slick = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;

    for (i = 0; i < l; i++) {
      if (_typeof(opt) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }

    return _;
  };
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function (t) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery);
}(function (t) {
  var e = -1,
      o = -1,
      n = function n(t) {
    return parseFloat(t) || 0;
  },
      a = function a(e) {
    var o = 1,
        a = t(e),
        i = null,
        r = [];
    return a.each(function () {
      var e = t(this),
          a = e.offset().top - n(e.css("margin-top")),
          s = r.length > 0 ? r[r.length - 1] : null;
      null === s ? r.push(e) : Math.floor(Math.abs(i - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), i = a;
    }), r;
  },
      i = function i(e) {
    var o = {
      byRow: !0,
      property: "height",
      target: null,
      remove: !1
    };
    return "object" == _typeof(e) ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o);
  },
      r = t.fn.matchHeight = function (e) {
    var o = i(e);

    if (o.remove) {
      var n = this;
      return this.css(o.property, ""), t.each(r._groups, function (t, e) {
        e.elements = e.elements.not(n);
      }), this;
    }

    return this.length <= 1 && !o.target ? this : (r._groups.push({
      elements: this,
      options: o
    }), r._apply(this, o), this);
  };

  r.version = "0.7.2", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = a, r._parse = n, r._parseOptions = i, r._apply = function (e, o) {
    var s = i(o),
        h = t(e),
        l = [h],
        c = t(window).scrollTop(),
        p = t("html").outerHeight(!0),
        u = h.parents().filter(":hidden");
    return u.each(function () {
      var e = t(this);
      e.data("style-cache", e.attr("style"));
    }), u.css("display", "block"), s.byRow && !s.target && (h.each(function () {
      var e = t(this),
          o = e.css("display");
      "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
        display: o,
        "padding-top": "0",
        "padding-bottom": "0",
        "margin-top": "0",
        "margin-bottom": "0",
        "border-top-width": "0",
        "border-bottom-width": "0",
        height: "100px",
        overflow: "hidden"
      });
    }), l = a(h), h.each(function () {
      var e = t(this);
      e.attr("style", e.data("style-cache") || "");
    })), t.each(l, function (e, o) {
      var a = t(o),
          i = 0;
      if (s.target) i = s.target.outerHeight(!1);else {
        if (s.byRow && a.length <= 1) return void a.css(s.property, "");
        a.each(function () {
          var e = t(this),
              o = e.attr("style"),
              n = e.css("display");
          "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
          var a = {
            display: n
          };
          a[s.property] = "", e.css(a), e.outerHeight(!1) > i && (i = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "");
        });
      }
      a.each(function () {
        var e = t(this),
            o = 0;
        s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), o += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(s.property, i - o + "px"));
      });
    }), u.each(function () {
      var e = t(this);
      e.attr("style", e.data("style-cache") || null);
    }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)), this;
  }, r._applyDataApi = function () {
    var e = {};
    t("[data-match-height], [data-mh]").each(function () {
      var o = t(this),
          n = o.attr("data-mh") || o.attr("data-match-height");
      n in e ? e[n] = e[n].add(o) : e[n] = o;
    }), t.each(e, function () {
      this.matchHeight(!0);
    });
  };

  var s = function s(e) {
    r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () {
      r._apply(this.elements, this.options);
    }), r._afterUpdate && r._afterUpdate(e, r._groups);
  };

  r._update = function (n, a) {
    if (a && "resize" === a.type) {
      var i = t(window).width();
      if (i === e) return;
      e = i;
    }

    n ? o === -1 && (o = setTimeout(function () {
      s(a), o = -1;
    }, r._throttle)) : s(a);
  }, t(r._applyDataApi);
  var h = t.fn.on ? "on" : "bind";
  t(window)[h]("load", function (t) {
    r._update(!1, t);
  }), t(window)[h]("resize orientationchange", function (t) {
    r._update(!0, t);
  });
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (window, document, undefined) {
  'use strict'; // SEND BEACON POLYFILL

  (function (root) {
    var isSupported = 'navigator' in root && 'sendBeacon' in root.navigator;

    var sendBeacon = function sendBeacon(url, data) {
      var xhr = 'XMLHttpRequest' in window ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
      xhr.open('POST', url, false);
      xhr.withCredentials = true;
      xhr.setRequestHeader('Accept', '*/*');

      if ('string' === typeof data) {
        xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
        xhr.responseType = 'text/plain';
      } else if ('[object Blob]' === {}.toString.call(data)) {
        if (data.type) {
          xhr.setRequestHeader('Content-Type', data.type);
        }
      }

      try {
        xhr.send(data);
      } catch (error) {
        console.log("error sending helper beacon...");
      }

      return true;
    };

    if (isSupported) {
      sendBeacon = navigator.sendBeacon.bind(navigator);
    }

    if ('undefined' !== typeof exports) {
      if ('undefined' !== typeof module && module.exports) {
        exports = module.exports = sendBeacon;
      }

      exports.sendBeacon = sendBeacon;
    } else if ('function' === typeof define && define.amd) {
      define([], function () {
        return sendBeacon;
      });
    } else if (!isSupported) {
      root.navigator.sendBeacon = sendBeacon;
    }
  })('object' === _typeof(window) ? window : this); // CUSTOM EVENT POLYFILL: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill


  (function () {
    if ("function" === typeof window.CustomEvent) {
      return false;
    }

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })(); // OBJECT.ASSIGN POLYFILL


  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(target) {
        if (target === undefined || null === target) {
          throw new TypeError('Cannot convert first argument to object');
        }

        var to = Object(target);

        for (var i = 1; i < arguments.length; i++) {
          var nextSource = arguments[i];

          if (nextSource === undefined || null === nextSource) {
            continue;
          }

          nextSource = Object(nextSource);
          var keysArray = Object.keys(nextSource);

          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

            if (desc !== undefined && desc.enumerable) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }

        return to;
      }
    });
  } // Array.reduce Polyfill
  // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  // Production steps of ECMA-262, Edition 5, 15.4.4.21
  // Reference: http://es5.github.io/#x15.4.4.21
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce


  if (!Array.prototype.reduce) {
    Object.defineProperty(Array.prototype, 'reduce', {
      value: function value(callback
      /*, initialValue*/
      ) {
        if (null === this) {
          throw new TypeError('Array.prototype.reduce ' + 'called on null or undefined');
        }

        if ('function' !== typeof callback) {
          throw new TypeError(callback + ' is not a function');
        } // 1. Let O be ? ToObject(this value).


        var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

        var len = o.length >>> 0; // Steps 3, 4, 5, 6, 7

        var k = 0;
        var value;

        if (2 <= arguments.length) {
          value = arguments[1];
        } else {
          while (k < len && !(k in o)) {
            k++;
          } // 3. If len is 0 and initialValue is not present,
          //    throw a TypeError exception.


          if (k >= len) {
            throw new TypeError('Reduce of empty array ' + 'with no initial value');
          }

          value = o[k++];
        } // 8. Repeat, while k < len


        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kPresent be ? HasProperty(O, Pk).
          // c. If kPresent is true, then
          //    i.  Let kValue be ? Get(O, Pk).
          //    ii. Let accumulator be ? Call(
          //          callbackfn, undefined,
          //          « accumulator, kValue, k, O »).
          if (k in o) {
            value = callback(value, o[k], k, o);
          } // d. Increase k by 1.


          k++;
        } // 9. Return accumulator.


        return value;
      }
    });
  } // Array.find Polyfill
  // https://tc39.github.io/ecma262/#sec-array.prototype.find


  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function value(predicate) {
        // 1. Let O be ? ToObject(this value).
        if (null === this) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

        var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

        if ('function' !== typeof predicate) {
          throw new TypeError('predicate must be a function');
        } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


        var thisArg = arguments[1]; // 5. Let k be 0.

        var k = 0; // 6. Repeat, while k < len

        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return kValue.
          var kValue = o[k];

          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          } // e. Increase k by 1.


          k++;
        } // 7. Return undefined.


        return undefined;
      }
    });
  }
  /*! picturefill - v3.0.2 - 2016-02-12
  * https://scottjehl.github.io/picturefill/
  * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
  */

  /*! Gecko-Picture - v1.0
  * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
  * Firefox's early picture implementation (prior to FF41) is static and does
  * not react to viewport changes. This tiny module fixes this.
  */
  // eslint-disable-next-line no-shadow


  (function (window) {
    /*jshint eqnull:true */
    var ua = navigator.userAgent;

    if (window.HTMLPictureElement && /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && 45 > RegExp.$1) {
      addEventListener("resize", function () {
        var timer;
        var dummySrc = document.createElement("source");

        var fixRespimg = function fixRespimg(img) {
          var source, sizes;
          var picture = img.parentNode;

          if ("PICTURE" === picture.nodeName.toUpperCase()) {
            source = dummySrc.cloneNode();
            picture.insertBefore(source, picture.firstElementChild);
            setTimeout(function () {
              picture.removeChild(source);
            });
          } else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
            img._pfLastSize = img.offsetWidth;
            sizes = img.sizes;
            img.sizes += ",100vw";
            setTimeout(function () {
              img.sizes = sizes;
            });
          }
        };

        var findPictureImgs = function findPictureImgs() {
          var i;
          var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");

          for (i = 0; i < imgs.length; i++) {
            fixRespimg(imgs[i]);
          }
        };

        var onResize = function onResize() {
          clearTimeout(timer);
          timer = setTimeout(findPictureImgs, 99);
        };

        var mq = window.matchMedia && matchMedia("(orientation: landscape)");

        var init = function init() {
          onResize();

          if (mq && mq.addListener) {
            mq.addListener(onResize);
          }
        };

        dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

        if (/^[c|i]|d$/.test(document.readyState || "")) {
          init();
        } else {
          document.addEventListener("DOMContentLoaded", init);
        }

        return onResize;
      }());
    }
  })(window);
  /*! Picturefill - v3.0.2
  		* http://scottjehl.github.io/picturefill
  		* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
  		*  License: MIT
  		*/
  // eslint-disable-next-line no-shadow


  (function (window, document, undefined) {
    // Enable strict mode
    "use strict"; // HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)

    document.createElement("picture");
    var warn, eminpx, alwaysCheckWDescriptor, evalId; // local object for method references and testing exposure

    var pf = {};
    var isSupportTestReady = false;

    var noop = function noop() {};

    var image = document.createElement("img");
    var getImgAttr = image.getAttribute;
    var setImgAttr = image.setAttribute;
    var removeImgAttr = image.removeAttribute;
    var docElem = document.documentElement;
    var types = {};
    var cfg = {
      //resource selection:
      algorithm: ""
    };
    var srcAttr = "data-pfsrc";
    var srcsetAttr = srcAttr + "set"; // ua sniffing is done for undetectable img loading features,
    // to do some non crucial perf optimizations

    var ua = navigator.userAgent;
    var supportAbort = /rident/.test(ua) || /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && 35 < RegExp.$1;
    var curSrcProp = "currentSrc";
    var regWDesc = /\s+\+?\d+(e\d+)?w/;
    var regSize = /(\([^)]+\))?\s*(.+)/;
    var setOptions = window.picturefillCFG;
    /**
    	 * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
    	 */
    // baseStyle also used by getEmValue (i.e.: width: 1em is important)

    var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
    var fsCss = "font-size:100%!important;";
    var isVwDirty = true;
    var cssCache = {};
    var sizeLengthCache = {};
    var DPR = window.devicePixelRatio;
    var units = {
      px: 1,
      "in": 96
    };
    var anchor = document.createElement("a");
    /**
    	 * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
    	 * @type {boolean}
    	 */

    var alreadyRun = false; // Reusable, non-"g" Regexes
    // (Don't use \s, to avoid matching non-breaking space.)
    // eslint-disable-next-line no-control-regex

    var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
        // eslint-disable-next-line no-control-regex
    regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
        // eslint-disable-next-line no-control-regex
    regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
        regexTrailingCommas = /[,]+$/,
        regexNonNegativeInteger = /^\d+$/,
        // ( Positive or negative or unsigned integers or decimals, without or without exponents.
    // Must include at least one digit.
    // According to spec tests any decimal point must be followed by a digit.
    // No leading plus sign is allowed.)
    // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
    regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

    var on = function on(obj, evt, fn, capture) {
      if (obj.addEventListener) {
        obj.addEventListener(evt, fn, capture || false);
      } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
      }
    };
    /**
    	 * simple memoize function:
    	 */


    var memoize = function memoize(fn) {
      var cache = {};
      return function (input) {
        if (!(input in cache)) {
          cache[input] = fn(input);
        }

        return cache[input];
      };
    }; // UTILITY FUNCTIONS
    // Manual is faster than RegEx
    // http://jsperf.com/whitespace-character/5


    function isSpace(c) {
      return " " === c || // space
      "\t" === c || // horizontal tab
      "\n" === c || // new line
      "\f" === c || // form feed
      "\r" === c; // carriage return
    }
    /**
    	 * gets a mediaquery and returns a boolean or gets a css length and returns a number
    	 * @param css mediaqueries or css length
    	 * @returns {boolean|number}
    	 *
    	 * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
    	 */


    var evalCSS = function () {
      var regLength = /^([\d\.]+)(em|vw|px)$/;

      var replace = function replace() {
        var args = arguments,
            index = 0,
            string = args[0];

        while (++index in args) {
          string = string.replace(args[index], args[++index]);
        }

        return string;
      };

      var buildStr = memoize(function (css) {
        return "return " + replace((css || "").toLowerCase(), // interpret `and`
        /\band\b/g, "&&", // interpret `,`
        /,/g, "||", // interpret `min-` as >=
        /min-([a-z-\s]+):/g, "e.$1>=", // interpret `max-` as <=
        /max-([a-z-\s]+):/g, "e.$1<=", //calc value
        /calc([^)]+)/g, "($1)", // interpret css values
        /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", //make eval less evil
        /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, "") + ";";
      });
      return function (css, length) {
        var parsedLength;

        if (!(css in cssCache)) {
          cssCache[css] = false;

          if (length && (parsedLength = css.match(regLength))) {
            cssCache[css] = parsedLength[1] * units[parsedLength[2]];
          } else {
            /*jshint evil:true */
            try {
              cssCache[css] = new Function("e", buildStr(css))(units);
            } catch (e) {
              console.log('error');
            }
            /*jshint evil:false */

          }
        }

        return cssCache[css];
      };
    }();

    var setResolution = function setResolution(candidate, sizesattr) {
      if (candidate.w) {
        // h = means height: || descriptor.type === 'h' do not handle yet...
        candidate.cWidth = pf.calcListLength(sizesattr || "100vw");
        candidate.res = candidate.w / candidate.cWidth;
      } else {
        candidate.res = candidate.d;
      }

      return candidate;
    };
    /**
    	 *
    	 * @param opt
    	 */


    var picturefill = function picturefill(opt) {
      if (!isSupportTestReady) {
        return;
      }

      var elements, i, plen;
      var options = opt || {};

      if (options.elements && 1 === options.elements.nodeType) {
        if ("IMG" === options.elements.nodeName.toUpperCase()) {
          options.elements = [options.elements];
        } else {
          options.context = options.elements;
          options.elements = null;
        }
      }

      elements = options.elements || pf.qsa(options.context || document, options.reevaluate || options.reselect ? pf.sel : pf.selShort);

      if (plen === elements.length) {
        pf.setupRun(options);
        alreadyRun = true; // Loop through all elements

        for (i = 0; i < plen; i++) {
          pf.fillImg(elements[i], options);
        }

        pf.teardownRun(options);
      }
    };
    /**
    	 * outputs a warning for the developer
    	 * @param {message}
    	 * @type {Function}
    	 */


    warn = window.console && console.warn ? function (message) {
      console.warn(message);
    } : noop;

    if (!(curSrcProp in image)) {
      curSrcProp = "src";
    } // Add support for standard mime types.


    types["image/jpeg"] = true;
    types["image/gif"] = true;
    types["image/png"] = true;

    function detectTypeSupport(type, typeUri) {
      // based on Modernizr's lossless img-webp test
      // note: asynchronous
      // eslint-disable-next-line no-shadow
      var image = new window.Image();

      image.onerror = function () {
        types[type] = false;
        picturefill();
      };

      image.onload = function () {
        types[type] = 1 === image.width;
        picturefill();
      };

      image.src = typeUri;
      return "pending";
    } // test svg support


    types["image/svg+xml"] = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
    /**
    	 * updates the internal vW property with the current viewport width in px
    	 */

    function updateMetrics() {
      isVwDirty = false;
      DPR = window.devicePixelRatio;
      cssCache = {};
      sizeLengthCache = {};
      pf.DPR = DPR || 1;
      units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
      units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);
      units.vw = units.width / 100;
      units.vh = units.height / 100;
      evalId = [units.height, units.width, DPR].join("-");
      units.em = pf.getEmValue();
      units.rem = units.em;
    }

    function chooseLowRes(lowerValue, higherValue, dprValue, isCached) {
      var bonusFactor, tooMuch, bonus, meanDensity; //experimental

      if ("saveData" === cfg.algorithm) {
        if (2.7 < lowerValue) {
          meanDensity = dprValue + 1;
        } else {
          tooMuch = higherValue - dprValue;
          bonusFactor = Math.pow(lowerValue - 0.6, 1.5);
          bonus = tooMuch * bonusFactor;

          if (isCached) {
            bonus += 0.1 * bonusFactor;
          }

          meanDensity = lowerValue + bonus;
        }
      } else {
        meanDensity = 1 < dprValue ? Math.sqrt(lowerValue * higherValue) : lowerValue;
      }

      return meanDensity > dprValue;
    }

    function applyBestCandidate(img) {
      var srcSetCandidates;
      var matchingSet = pf.getSet(img);
      var evaluated = false;

      if ("pending" !== matchingSet) {
        evaluated = evalId;

        if (matchingSet) {
          srcSetCandidates = pf.setRes(matchingSet);
          pf.applySetCandidate(srcSetCandidates, img);
        }
      }

      img[pf.ns].evaled = evaluated;
    }

    function ascendingSort(a, b) {
      return a.res - b.res;
    }

    function setSrcToCur(img, src, set) {
      var candidate;

      if (!set && src) {
        set = img[pf.ns].sets;
        set = set && set[set.length - 1];
      }

      candidate = getCandidateForSrc(src, set);

      if (candidate) {
        src = pf.makeUrl(src);
        img[pf.ns].curSrc = src;
        img[pf.ns].curCan = candidate;

        if (!candidate.res) {
          setResolution(candidate, candidate.set.sizes);
        }
      }

      return candidate;
    }

    function getCandidateForSrc(src, set) {
      var i, candidate, candidates;

      if (src && set) {
        candidates = pf.parseSet(set);
        src = pf.makeUrl(src);

        for (i = 0; i < candidates.length; i++) {
          if (src === pf.makeUrl(candidates[i].url)) {
            candidate = candidates[i];
            break;
          }
        }
      }

      return candidate;
    }

    function getAllSourceElements(picture, candidates) {
      var i, len, source, srcset; // SPEC mismatch intended for size and perf:
      // actually only source elements preceding the img should be used
      // also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector

      var sources = picture.getElementsByTagName("source");

      for (i = 0, len = sources.length; i < len; i++) {
        source = sources[i];
        source[pf.ns] = true;
        srcset = source.getAttribute("srcset"); // if source does not have a srcset attribute, skip

        if (srcset) {
          candidates.push({
            srcset: srcset,
            media: source.getAttribute("media"),
            type: source.getAttribute("type"),
            sizes: source.getAttribute("sizes")
          });
        }
      }
    }
    /**
    	 * Srcset Parser
    	 * By Alex Bell |  MIT License
    	 *
    	 * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
    	 *
    	 * Based super duper closely on the reference algorithm at:
    	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
    	 */
    // 1. Let input be the value passed to this algorithm.
    // (TO-DO : Explain what "set" argument is here. Maybe choose a more
    // descriptive & more searchable name.  Since passing the "set" in really has
    // nothing to do with parsing proper, I would prefer this assignment eventually
    // go in an external fn.)


    function parseSrcset(input, set) {
      function collectCharacters(regEx) {
        var chars,
            match = regEx.exec(input.substring(pos));

        if (match) {
          chars = match[0];
          pos += chars.length;
          return chars;
        }
      }

      var inputLength = input.length,
          url,
          descriptors,
          currentDescriptor,
          state,
          c,
          // 2. Let position be a pointer into input, initially pointing at the start
      //    of the string.
      pos = 0,
          // 3. Let candidates be an initially empty source set.
      candidates = [];
      /**
      	* Adds descriptor properties to a candidate, pushes to the candidates array
      	* @return undefined
      	*/
      // (Declared outside of the while loop so that it's only created once.
      // (This fn is defined before it is used, in order to pass JSHINT.
      // Unfortunately this breaks the sequencing of the spec comments. :/ )

      function parseDescriptors() {
        // 9. Descriptor parser: Let error be no.
        var pError = false,
            // 10. Let width be absent.
        // 11. Let density be absent.
        // 12. Let future-compat-h be absent. (We're implementing it now as h)
        w,
            d,
            h,
            i,
            candidate = {},
            desc,
            lastChar,
            value,
            intVal,
            floatVal; // 13. For each descriptor in descriptors, run the appropriate set of steps
        // from the following list:

        for (i = 0; i < descriptors.length; i++) {
          desc = descriptors[i];
          lastChar = desc[desc.length - 1];
          value = desc.substring(0, desc.length - 1);
          intVal = parseInt(value, 10);
          floatVal = parseFloat(value); // If the descriptor consists of a valid non-negative integer followed by
          // a U+0077 LATIN SMALL LETTER W character

          if (regexNonNegativeInteger.test(value) && "w" === lastChar) {
            // If width and density are not both absent, then let error be yes.
            if (w || d) {
              pError = true;
            } // Apply the rules for parsing non-negative integers to the descriptor.
            // If the result is zero, let error be yes.
            // Otherwise, let width be the result.


            if (0 === intVal) {
              pError = true;
            } else {
              w = intVal;
            } // If the descriptor consists of a valid floating-point number followed by
            // a U+0078 LATIN SMALL LETTER X character

          } else if (regexFloatingPoint.test(value) && "x" === lastChar) {
            // If width, density and future-compat-h are not all absent, then let error
            // be yes.
            if (w || d || h) {
              pError = true;
            } // Apply the rules for parsing floating-point number values to the descriptor.
            // If the result is less than zero, let error be yes. Otherwise, let density
            // be the result.


            if (0 > floatVal) {
              pError = true;
            } else {
              d = floatVal;
            } // If the descriptor consists of a valid non-negative integer followed by
            // a U+0068 LATIN SMALL LETTER H character

          } else if (regexNonNegativeInteger.test(value) && "h" === lastChar) {
            // If height and density are not both absent, then let error be yes.
            if (h || d) {
              pError = true;
            } // Apply the rules for parsing non-negative integers to the descriptor.
            // If the result is zero, let error be yes. Otherwise, let future-compat-h
            // be the result.


            if (0 === intVal) {
              pError = true;
            } else {
              h = intVal;
            } // Anything else, Let error be yes.

          } else {
            pError = true;
          }
        } // (close step 13 for loop)
        // 15. If error is still no, then append a new image source to candidates whose
        // URL is url, associated with a width width if not absent and a pixel
        // density density if not absent. Otherwise, there is a parse error.


        if (!pError) {
          candidate.url = url;

          if (w) {
            candidate.w = w;
          }

          if (d) {
            candidate.d = d;
          }

          if (h) {
            candidate.h = h;
          }

          if (!h && !d && !w) {
            candidate.d = 1;
          }

          if (1 === candidate.d) {
            set.has1x = true;
          }

          candidate.set = set;
          candidates.push(candidate);
        }
      } // (close parseDescriptors fn)

      /**
      	* Tokenizes descriptor properties prior to parsing
      	* Returns undefined.
      	* (Again, this fn is defined before it is used, in order to pass JSHINT.
      	* Unfortunately this breaks the logical sequencing of the spec comments. :/ )
      	*/


      function tokenize() {
        // 8.1. Descriptor tokeniser: Skip whitespace
        collectCharacters(regexLeadingSpaces); // 8.2. Let current descriptor be the empty string.

        currentDescriptor = ""; // 8.3. Let state be in descriptor.

        state = "in descriptor";

        while (true) {
          // 8.4. Let c be the character at position.
          c = input.charAt(pos); //  Do the following depending on the value of state.
          //  For the purpose of this step, "EOF" is a special character representing
          //  that position is past the end of input.
          // In descriptor

          if ("in descriptor" === state) {
            // Do the following, depending on the value of c:
            // Space character
            // If current descriptor is not empty, append current descriptor to
            // descriptors and let current descriptor be the empty string.
            // Set state to after descriptor.
            if (isSpace(c)) {
              if (currentDescriptor) {
                descriptors.push(currentDescriptor);
                currentDescriptor = "";
                state = "after descriptor";
              } // U+002C COMMA (,)
              // Advance position to the next character in input. If current descriptor
              // is not empty, append current descriptor to descriptors. Jump to the step
              // labeled descriptor parser.

            } else if ("," === c) {
              pos += 1;

              if (currentDescriptor) {
                descriptors.push(currentDescriptor);
              }

              parseDescriptors();
              return; // U+0028 LEFT PARENTHESIS (()
              // Append c to current descriptor. Set state to in parens.
            } else if ("(" === c) {
              currentDescriptor += c;
              state = "in parens"; // EOF
              // If current descriptor is not empty, append current descriptor to
              // descriptors. Jump to the step labeled descriptor parser.
            } else if ("" === c) {
              if (currentDescriptor) {
                descriptors.push(currentDescriptor);
              }

              parseDescriptors();
              return; // Anything else
              // Append c to current descriptor.
            } else {
              currentDescriptor += c;
            } // (end "in descriptor"
            // In parens

          } else if ("in parens" === state) {
            // U+0029 RIGHT PARENTHESIS ())
            // Append c to current descriptor. Set state to in descriptor.
            if (")" === c) {
              currentDescriptor += c;
              state = "in descriptor"; // EOF
              // Append current descriptor to descriptors. Jump to the step labeled
              // descriptor parser.
            } else if ("" === c) {
              descriptors.push(currentDescriptor);
              parseDescriptors();
              return; // Anything else
              // Append c to current descriptor.
            } else {
              currentDescriptor += c;
            } // After descriptor

          } else if ("after descriptor" === state) {
            // Do the following, depending on the value of c:
            // Space character: Stay in this state.
            if (isSpace(c)) {// EOF: Jump to the step labeled descriptor parser.
            } else if ("" === c) {
              parseDescriptors();
              return; // Anything else
              // Set state to in descriptor. Set position to the previous character in input.
            } else {
              state = "in descriptor";
              pos -= 1;
            }
          } // Advance position to the next character in input.


          pos += 1; // Repeat this step.
        } // (close while true loop)

      } // 4. Splitting loop: Collect a sequence of characters that are space
      //    characters or U+002C COMMA characters. If any U+002C COMMA characters
      //    were collected, that is a parse error.


      while (true) {
        collectCharacters(regexLeadingCommasOrSpaces); // 5. If position is past the end of input, return candidates and abort these steps.

        if (pos >= inputLength) {
          return candidates; // (we're done, this is the sole return path)
        } // 6. Collect a sequence of characters that are not space characters,
        //    and let that be url.


        url = collectCharacters(regexLeadingNotSpaces); // 7. Let descriptors be a new empty list.

        descriptors = []; // 8. If url ends with a U+002C COMMA character (,), follow these substeps:
        //		(1). Remove all trailing U+002C COMMA characters from url. If this removed
        //         more than one character, that is a parse error.

        if ("," === url.slice(-1)) {
          url = url.replace(regexTrailingCommas, ""); // (Jump ahead to step 9 to skip tokenization and just push the candidate).

          parseDescriptors(); //	Otherwise, follow these substeps:
        } else {
          tokenize();
        } // (close else of step 8)
        // 16. Return to the step labeled splitting loop.

      } // (Close of big while loop.)

    }
    /*
    	* Sizes Parser
    	*
    	* By Alex Bell |  MIT License
    	*
    	* Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
    	*
    	* Reference algorithm at:
    	* https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
    	*
    	* Most comments are copied in directly from the spec
    	* (except for comments in parens).
    	*
    	* Grammar is:
    	* <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
    	* <source-size> = <media-condition> <source-size-value>
    	* <source-size-value> = <length>
    	* http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
    	*
    	* E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
    	* or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
    	*
    	* Returns the first valid <css-length> with a media condition that evaluates to true,
    	* or "100vw" if all valid media conditions evaluate to false.
    	*
    	*/


    function parseSizes(strValue) {
      // (Percentage CSS lengths are not allowed in this case, to avoid confusion:
      // https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
      // CSS allows a single optional plus or minus sign:
      // http://www.w3.org/TR/CSS2/syndata.html#numbers
      // CSS is ASCII case-insensitive:
      // http://www.w3.org/TR/CSS2/syndata.html#characters )
      // Spec allows exponential notation for <number> type:
      // http://dev.w3.org/csswg/css-values/#numbers
      var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i; // (This is a quick and lenient test. Because of optional unlimited-depth internal
      // grouping parens and strict spacing rules, this could get very complicated.)

      var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
      var i;
      var unparsedSizesList;
      var unparsedSizesListLength;
      var unparsedSize;
      var lastComponentValue;
      var size; // UTILITY FUNCTIONS
      //  (Toy CSS parser. The goals here are:
      //  1) expansive test coverage without the weight of a full CSS parser.
      //  2) Avoiding regex wherever convenient.
      //  Quick tests: http://jsfiddle.net/gtntL4gr/3/
      //  Returns an array of arrays.)

      function parseComponentValues(str) {
        var chrctr;
        var component = "";
        var componentArray = [];
        var listArray = [];
        var parenDepth = 0;
        var pos = 0;
        var inComment = false;

        function pushComponent() {
          if (component) {
            componentArray.push(component);
            component = "";
          }
        }

        function pushComponentArray() {
          if (componentArray[0]) {
            listArray.push(componentArray);
            componentArray = [];
          }
        } // (Loop forwards from the beginning of the string.)


        while (true) {
          chrctr = str.charAt(pos);

          if ("" === chrctr) {
            // ( End of string reached.)
            pushComponent();
            pushComponentArray();
            return listArray;
          } else if (inComment) {
            if ("*" === chrctr && "/" === str[pos + 1]) {
              // (At end of a comment.)
              inComment = false;
              pos += 2;
              pushComponent();
              continue;
            } else {
              pos += 1; // (Skip all characters inside comments.)

              continue;
            }
          } else if (isSpace(chrctr)) {
            // (If previous character in loop was also a space, or if
            // at the beginning of the string, do not add space char to
            // component.)
            if (str.charAt(pos - 1) && isSpace(str.charAt(pos - 1)) || !component) {
              pos += 1;
              continue;
            } else if (0 === parenDepth) {
              pushComponent();
              pos += 1;
              continue;
            } else {
              // (Replace any space character with a plain space for legibility.)
              chrctr = " ";
            }
          } else if ("(" === chrctr) {
            parenDepth += 1;
          } else if (")" === chrctr) {
            parenDepth -= 1;
          } else if ("," === chrctr) {
            pushComponent();
            pushComponentArray();
            pos += 1;
            continue;
          } else if ("/" === chrctr && "*" === str.charAt(pos + 1)) {
            inComment = true;
            pos += 2;
            continue;
          }

          component += chrctr;
          pos += 1;
        }
      }

      function isValidNonNegativeSourceSizeValue(s) {
        if (regexCssLengthWithUnits.test(s) && 0 <= parseFloat(s)) {
          return true;
        }

        if (regexCssCalc.test(s)) {
          return true;
        } // ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
        // "-0 is equivalent to 0 and is not a negative number." which means that
        // unitless zero and unitless negative zero must be accepted as special cases.)


        if ("0" === s || "-0" === s || "+0" === s) {
          return true;
        }

        return false;
      } // When asked to parse a sizes attribute from an element, parse a
      // comma-separated list of component values from the value of the element's
      // sizes attribute (or the empty string, if the attribute is absent), and let
      // unparsed sizes list be the result.
      // http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values


      unparsedSizesList = parseComponentValues(strValue);
      unparsedSizesListLength = unparsedSizesList.length; // For each unparsed size in unparsed sizes list:

      for (i = 0; i < unparsedSizesListLength; i++) {
        unparsedSize = unparsedSizesList[i]; // 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
        // ( parseComponentValues() already omits spaces outside of parens. )
        // If unparsed size is now empty, that is a parse error; continue to the next
        // iteration of this algorithm.
        // ( parseComponentValues() won't push an empty array. )
        // 2. If the last component value in unparsed size is a valid non-negative
        // <source-size-value>, let size be its value and remove the component value
        // from unparsed size. Any CSS function other than the calc() function is
        // invalid. Otherwise, there is a parse error; continue to the next iteration
        // of this algorithm.
        // http://dev.w3.org/csswg/css-syntax/#parse-component-value

        lastComponentValue = unparsedSize[unparsedSize.length - 1];

        if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
          size = lastComponentValue;
          unparsedSize.pop();
        } else {
          continue;
        } // 3. Remove all consecutive <whitespace-token>s from the end of unparsed
        // size. If unparsed size is now empty, return size and exit this algorithm.
        // If this was not the last item in unparsed sizes list, that is a parse error.


        if (0 === unparsedSize.length) {
          return size;
        } // 4. Parse the remaining component values in unparsed size as a
        // <media-condition>. If it does not parse correctly, or it does parse
        // correctly but the <media-condition> evaluates to false, continue to the
        // next iteration of this algorithm.
        // (Parsing all possible compound media conditions in JS is heavy, complicated,
        // and the payoff is unclear. Is there ever an situation where the
        // media condition parses incorrectly but still somehow evaluates to true?
        // Can we just rely on the browser/polyfill to do it?)


        unparsedSize = unparsedSize.join(" ");

        if (!pf.matchesMedia(unparsedSize)) {
          continue;
        } // 5. Return size and exit this algorithm.


        return size;
      } // If the above algorithm exhausts unparsed sizes list without returning a
      // size value, return 100vw.


      return "100vw";
    } // namespace


    pf.ns = ("pf" + new Date().getTime()).substr(0, 9); // srcset support test

    pf.supSrcset = "srcset" in image;
    pf.supSizes = "sizes" in image;
    pf.supPicture = Boolean(window.HTMLPictureElement); // UC browser does claim to support srcset and picture, but not sizes,
    // this extended test reveals the browser does support nothing

    if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
      (function (image2) {
        image.srcset = "data:,a";
        image2.src = "data:,a";
        pf.supSrcset = image.complete === image2.complete;
        pf.supPicture = pf.supSrcset && pf.supPicture;
      })(document.createElement("img"));
    } // Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute


    if (pf.supSrcset && !pf.supSizes) {
      (function () {
        var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
        var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
        var img = document.createElement("img");

        var test = function test() {
          var width = img.width;

          if (2 === width) {
            pf.supSizes = true;
          }

          alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;
          isSupportTestReady = true; // force async

          setTimeout(picturefill);
        };

        img.onload = test;
        img.onerror = test;
        img.setAttribute("sizes", "9px");
        img.srcset = width1 + " 1w," + width2 + " 9w";
        img.src = width1;
      })();
    } else {
      isSupportTestReady = true;
    } // using pf.qsa instead of dom traversing does scale much better,
    // especially on sites mixing responsive and non-responsive images


    pf.selShort = "picture>img,img[srcset]";
    pf.sel = pf.selShort;
    pf.cfg = cfg;
    /**
    	 * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
    	 */

    pf.DPR = DPR || 1;
    pf.u = units; // container of supported mime types that one might need to qualify before using

    pf.types = types;
    pf.setSize = noop;
    /**
    	 * Gets a string and returns the absolute URL
    	 * @param src
    	 * @returns {String} absolute URL
    	 */

    pf.makeUrl = memoize(function (src) {
      anchor.href = src;
      return anchor.href;
    });
    /**
    	 * Gets a DOM element or document and a selctor and returns the found matches
    	 * Can be extended with jQuery/Sizzle for IE7 support
    	 * @param context
    	 * @param sel
    	 * @returns {NodeList|Array}
    	 */

    pf.qsa = function (context, sel) {
      return "querySelector" in context ? context.querySelectorAll(sel) : [];
    };
    /**
    	 * Shortcut method for matchMedia ( for easy overriding in tests )
    	 * wether native or pf.mMQ is used will be decided lazy on first call
    	 * @returns {boolean}
    	 */


    pf.matchesMedia = function () {
      if (window.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches) {
        pf.matchesMedia = function (media) {
          return !media || matchMedia(media).matches;
        };
      } else {
        pf.matchesMedia = pf.mMQ;
      }

      return pf.matchesMedia.apply(this, arguments);
    };
    /**
    	 * A simplified matchMedia implementation for IE8 and IE9
    	 * handles only min-width/max-width with px or em values
    	 * @param media
    	 * @returns {boolean}
    	 */


    pf.mMQ = function (media) {
      return media ? evalCSS(media) : true;
    };
    /**
    	 * Returns the calculated length in css pixel from the given sourceSizeValue
    	 * http://dev.w3.org/csswg/css-values-3/#length-value
    	 * intended Spec mismatches:
    	 * * Does not check for invalid use of CSS functions
    	 * * Does handle a computed length of 0 the same as a negative and therefore invalid value
    	 * @param sourceSizeValue
    	 * @returns {Number}
    	 */


    pf.calcLength = function (sourceSizeValue) {
      var value = evalCSS(sourceSizeValue, true) || false;

      if (0 > value) {
        value = false;
      }

      return value;
    };
    /**
    	 * Takes a type string and checks if its supported
    	 */


    pf.supportsType = function (type) {
      return type ? types[type] : true;
    };
    /**
    	 * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
    	 * @param sourceSizeStr
    	 * @returns {*}
    	 */


    pf.parseSize = memoize(function (sourceSizeStr) {
      var match = (sourceSizeStr || "").match(regSize);
      return {
        media: match && match[1],
        length: match && match[2]
      };
    });

    pf.parseSet = function (set) {
      if (!set.cands) {
        set.cands = parseSrcset(set.srcset, set);
      }

      return set.cands;
    };
    /**
    	 * returns 1em in css px for html/body default size
    	 * function taken from respondjs
    	 * @returns {*|number}
    	 */


    pf.getEmValue = function () {
      var body;

      if (!eminpx && (body = document.body)) {
        var div = document.createElement("div"),
            originalHTMLCSS = docElem.style.cssText,
            originalBodyCSS = body.style.cssText;
        div.style.cssText = baseStyle; // 1em in a media query is the value of the default font size of the browser
        // reset docElem and body to ensure the correct value is returned

        docElem.style.cssText = fsCss;
        body.style.cssText = fsCss;
        body.appendChild(div);
        eminpx = div.offsetWidth;
        body.removeChild(div); //also update eminpx before returning

        eminpx = parseFloat(eminpx, 10); // restore the original values

        docElem.style.cssText = originalHTMLCSS;
        body.style.cssText = originalBodyCSS;
      }

      return eminpx || 16;
    };
    /**
    	 * Takes a string of sizes and returns the width in pixels as a number
    	 */


    pf.calcListLength = function (sourceSizeListStr) {
      // Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
      //
      //                           or (min-width:30em) calc(30% - 15px)
      if (!(sourceSizeListStr in sizeLengthCache) || cfg.uT) {
        var winningLength = pf.calcLength(parseSizes(sourceSizeListStr));
        sizeLengthCache[sourceSizeListStr] = !winningLength ? units.width : winningLength;
      }

      return sizeLengthCache[sourceSizeListStr];
    };
    /**
    	 * Takes a candidate object with a srcset property in the form of url/
    	 * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
    	 *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
    	 *     "images/pic-small.png"
    	 * Get an array of image candidates in the form of
    	 *      {url: "/foo/bar.png", resolution: 1}
    	 * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
    	 * If sizes is specified, res is calculated
    	 */


    pf.setRes = function (set) {
      var candidates;

      if (set) {
        candidates = pf.parseSet(set);

        for (var i = 0, len = candidates.length; i < len; i++) {
          setResolution(candidates[i], set.sizes);
        }
      }

      return candidates;
    };

    pf.setRes.res = setResolution;

    pf.applySetCandidate = function (candidates, img) {
      if (!candidates.length) {
        return;
      }

      var candidate, i, j, length, bestCandidate, curSrc, curCan, candidateSrc, abortCurSrc;
      var imageData = img[pf.ns];
      var dpr = pf.DPR;
      curSrc = imageData.curSrc || img[curSrcProp];
      curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set); // if we have a current source, we might either become lazy or give this source some advantage

      if (curCan && curCan.set === candidates[0].set) {
        // if browser can abort image request and the image has a higher pixel density than needed
        // and this image isn't downloaded yet, we skip next part and try to save bandwidth
        abortCurSrc = supportAbort && !img.complete && curCan.res - 0.1 > dpr;

        if (!abortCurSrc) {
          curCan.cached = true; // if current candidate is "best", "better" or "okay",
          // set it to bestCandidate

          if (curCan.res >= dpr) {
            bestCandidate = curCan;
          }
        }
      }

      if (!bestCandidate) {
        candidates.sort(ascendingSort);
        length = candidates.length;
        bestCandidate = candidates[length - 1];

        for (i = 0; i < length; i++) {
          candidate = candidates[i];

          if (candidate.res >= dpr) {
            j = i - 1; // we have found the perfect candidate,
            // but let's improve this a little bit with some assumptions ;-)

            if (candidates[j] && (abortCurSrc || curSrc !== pf.makeUrl(candidate.url)) && chooseLowRes(candidates[j].res, candidate.res, dpr, candidates[j].cached)) {
              bestCandidate = candidates[j];
            } else {
              bestCandidate = candidate;
            }

            break;
          }
        }
      }

      if (bestCandidate) {
        candidateSrc = pf.makeUrl(bestCandidate.url);
        imageData.curSrc = candidateSrc;
        imageData.curCan = bestCandidate;

        if (candidateSrc !== curSrc) {
          pf.setSrc(img, bestCandidate);
        }

        pf.setSize(img);
      }
    };

    pf.setSrc = function (img, bestCandidate) {
      var origWidth;
      img.src = bestCandidate.url; // although this is a specific Safari issue, we don't want to take too much different code paths

      if ("image/svg+xml" === bestCandidate.set.type) {
        origWidth = img.style.width;
        img.style.width = img.offsetWidth + 1 + "px"; // next line only should trigger a repaint
        // if... is only done to trick dead code removal

        if (img.offsetWidth + 1) {
          img.style.width = origWidth;
        }
      }
    };

    pf.getSet = function (img) {
      var i, set, supportsType;
      var match = false;
      var sets = img[pf.ns].sets;

      for (i = 0; i < sets.length && !match; i++) {
        set = sets[i];

        if (!set.srcset || !pf.matchesMedia(set.media) || !(supportsType = pf.supportsType(set.type))) {
          continue;
        }

        if ("pending" === supportsType) {
          set = supportsType;
        }

        match = set;
        break;
      }

      return match;
    };

    pf.parseSets = function (element, parent, options) {
      var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;
      var hasPicture = parent && "PICTURE" === parent.nodeName.toUpperCase();
      var imageData = element[pf.ns];

      if (imageData.src === undefined || options.src) {
        imageData.src = getImgAttr.call(element, "src");

        if (imageData.src) {
          setImgAttr.call(element, srcAttr, imageData.src);
        } else {
          removeImgAttr.call(element, srcAttr);
        }
      }

      if (imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset) {
        srcsetAttribute = getImgAttr.call(element, "srcset");
        imageData.srcset = srcsetAttribute;
        srcsetParsed = true;
      }

      imageData.sets = [];

      if (hasPicture) {
        imageData.pic = true;
        getAllSourceElements(parent, imageData.sets);
      }

      if (imageData.srcset) {
        imageSet = {
          srcset: imageData.srcset,
          sizes: getImgAttr.call(element, "sizes")
        };
        imageData.sets.push(imageSet);
        isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || ""); // add normal src as candidate, if source has no w descriptor

        if (!isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x) {
          imageSet.srcset += ", " + imageData.src;
          imageSet.cands.push({
            url: imageData.src,
            d: 1,
            set: imageSet
          });
        }
      } else if (imageData.src) {
        imageData.sets.push({
          srcset: imageData.src,
          sizes: null
        });
      }

      imageData.curCan = null;
      imageData.curSrc = undefined; // if img has picture or the srcset was removed or has a srcset and does not support srcset at all
      // or has a w descriptor (and does not support sizes) set support to false to evaluate

      imageData.supported = !(hasPicture || imageSet && !pf.supSrcset || isWDescripor && !pf.supSizes);

      if (srcsetParsed && pf.supSrcset && !imageData.supported) {
        if (srcsetAttribute) {
          setImgAttr.call(element, srcsetAttr, srcsetAttribute);
          element.srcset = "";
        } else {
          removeImgAttr.call(element, srcsetAttr);
        }
      }

      if (imageData.supported && !imageData.srcset && (!imageData.src && element.src || element.src !== pf.makeUrl(imageData.src))) {
        if (null === imageData.src) {
          element.removeAttribute("src");
        } else {
          element.src = imageData.src;
        }
      }

      imageData.parsed = true;
    };

    pf.fillImg = function (element, options) {
      var imageData;
      var extreme = options.reselect || options.reevaluate; // expando for caching data on the img

      if (!element[pf.ns]) {
        element[pf.ns] = {};
      }

      imageData = element[pf.ns]; // if the element has already been evaluated, skip it
      // unless `options.reevaluate` is set to true ( this, for example,
      // is set to true when running `picturefill` on `resize` ).

      if (!extreme && imageData.evaled === evalId) {
        return;
      }

      if (!imageData.parsed || options.reevaluate) {
        pf.parseSets(element, element.parentNode, options);
      }

      if (!imageData.supported) {
        applyBestCandidate(element);
      } else {
        imageData.evaled = evalId;
      }
    };

    pf.setupRun = function () {
      if (!alreadyRun || isVwDirty || DPR !== window.devicePixelRatio) {
        updateMetrics();
      }
    }; // If picture is supported, well, that's awesome.


    if (pf.supPicture) {
      picturefill = noop;
      pf.fillImg = noop;
    } else {
      // Set up picture polyfill by polling the document
      (function () {
        var isDomReady;
        var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

        var run = function run() {
          var readyState = document.readyState || "";
          timerId = setTimeout(run, "loading" === readyState ? 200 : 999);

          if (document.body) {
            pf.fillImgs();
            isDomReady = isDomReady || regReady.test(readyState);

            if (isDomReady) {
              clearTimeout(timerId);
            }
          }
        };

        var timerId = setTimeout(run, document.body ? 9 : 99); // Also attach picturefill on resize and readystatechange
        // http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html

        var debounce = function debounce(func, wait) {
          var timeout, timestamp;

          var later = function later() {
            var last = new Date() - timestamp;

            if (last < wait) {
              timeout = setTimeout(later, wait - last);
            } else {
              timeout = null;
              func();
            }
          };

          return function () {
            timestamp = new Date();

            if (!timeout) {
              timeout = setTimeout(later, wait);
            }
          };
        };

        var lastClientWidth = docElem.clientHeight;

        var onResize = function onResize() {
          isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
          lastClientWidth = docElem.clientHeight;

          if (isVwDirty) {
            pf.fillImgs();
          }
        };

        on(window, "resize", debounce(onResize, 99));
        on(document, "readystatechange", run);
      })();
    }

    pf.picturefill = picturefill; //use this internally for easy monkey patching/performance testing

    pf.fillImgs = picturefill;
    pf.teardownRun = noop;
    /* expose methods for testing */

    picturefill._ = pf;
    window.picturefillCFG = {
      pf: pf,
      push: function push(args) {
        var name = args.shift();

        if ("function" === typeof pf[name]) {
          pf[name].apply(pf, args);
        } else {
          cfg[name] = args[0];

          if (alreadyRun) {
            pf.fillImgs({
              reselect: true
            });
          }
        }
      }
    };

    while (setOptions && setOptions.length) {
      window.picturefillCFG.push(setOptions.shift());
    }
    /* expose picturefill */


    window.picturefill = picturefill;
    /* expose picturefill */

    if ("object" === (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" === _typeof(module.exports)) {
      // CommonJS, just export
      module.exports = picturefill;
    } else if ("function" === typeof define && define.amd) {
      // AMD support
      define("picturefill", function () {
        return picturefill;
      });
    } // IE8 evals this sync, so it must be the last thing we do


    if (!pf.supPicture) {
      types["image/webp"] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
    }
  })(window, document);
  /* CDC COMMON COMPONENT */

  /* DEPENDENCIES: NONE */


  window.CDC = window.CDC || {};

  window.CDC.Common = window.CDC.Common || function () {
    // SET RUNTIME DEFAULT
    var objCommon = {};
    objCommon.runtime = objCommon.runtime || {}; // Note the comment in the assignment below is replaced in the build...

    objCommon.runtime.loggingEnabled = objCommon.runtime.loggingEnabled || '/* @tp-logging-defaults@ */'; // SCRIPT LOADER

    objCommon.loadScript = function (script, callback) {
      var eleScript = document.createElement('script'),
          // NEW SCRIPT TAG
      eleHead = document.getElementsByTagName('head')[0]; // FIRST SCRIPT TAG IN CALLING PAGE
      // LOAD IF SCRIPT VALID ARGUMENT PASSED

      if (script !== undefined && 0 < script.length) {
        // SET SCRIPT TAG ATTRIBUTES
        eleScript.src = script; // set the src of the script to your script

        var fctLocalCallback = function fctLocalCallback() {
          // LOGGING
          objCommon.log('Loading script: ' + script); // CALLBACK PASSED?

          if (callback !== undefined) {
            // LOG & EXECUTE CALLBACK
            objCommon.log('Executing Callback: ' + script);
            callback();
          } else {
            // LOG NO CALLBACK
            objCommon.log('No Callback Provided for: ' + script);
          }
        }; // BIND THE EVENT TO THE CALLBACK FUNCTION


        if (eleScript.addEventListener) {
          eleScript.addEventListener("load", fctLocalCallback, false); // IE9+, Chrome, Firefox
        } else if (eleScript.readyState) {
          eleScript.onreadystatechange = fctLocalCallback; // IE8
        } // APPEND SCRIPT TO PAGE


        eleHead.appendChild(eleScript);
      }
    };

    objCommon.isArray = function (someVar) {
      return '[object Array]' === Object.prototype.toString.call(someVar);
    };

    objCommon.typeof = function (data) {
      if (objCommon.isArray(data)) {
        return 'array';
      }

      return _typeof(data);
    }; // CSS LOADER


    objCommon.loadCss = function (stylesheetPath
    /*,callback*/
    ) {
      var file = stylesheetPath,
          link = document.createElement("link"),
          hostname = objCommon.getSafeHostName();
      link.href = window.location.protocol + "//" + hostname + file.substr(0, file.lastIndexOf(".")) + ".css";
      link.type = "text/css";
      link.rel = "stylesheet";
      link.media = "screen,print"; //link.onreadystatechange = callback;

      document.getElementsByTagName("head")[0].appendChild(link);
    }; // STRING STRIPPER


    objCommon.cleanString = function (anyString) {
      // DEFAULT STRING
      anyString = anyString || ""; // CONVERT TO STRING IF NEEDED

      if ('string' !== typeof cleanString) {
        anyString = anyString.toString();
      } // CLEAN IT UP & RETURN IT


      return anyString.replace('\t', '').replace('\r', '').replace('\n', '');
    }; // RANDOM STRING GENERATOR


    objCommon.s4 = function () {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }; // GUID GENERATOR


    objCommon.guid = function () {
      return objCommon.s4() + objCommon.s4() + '-' + objCommon.s4() + '-' + objCommon.s4() + '-' + objCommon.s4() + '-' + objCommon.s4() + objCommon.s4() + objCommon.s4();
    }; // REPLACE ALL HANDLER


    objCommon.replaceAll = function (find, replace, str) {
      if ("|" === find) {
        find = new RegExp("\\|", 'g');
      } else {
        find = new RegExp(find, 'g');
      }

      return str.replace(find, replace);
    }; // SAFE HOST RETREIVAL METHOD


    objCommon.getSafeHostName = function () {
      var strReturn, strRequestedHost, match; // SET DEFAULT EXTERNAL HOST

      strReturn = objCommon.getCallParam('cHost') || window.location.hostname; // SET REQUESTED HOST HANDLING (IF AVAILABLE)

      strRequestedHost = objCommon.getCallParam('host'); // WAS REQUESTED HOST PASSED IN?

      if (strRequestedHost && strRequestedHost.length) {
        // SIMPLE REGEX ON REQUESTED HOSTNAME
        match = strRequestedHost.match(/.cdc.gov$/gi); // CHECK RESULTS

        if (match && match.length) {
          // REQUESTED HOSTS MATCHED SAFETY CHECK - ALLOW IT
          strReturn = strRequestedHost;
        }
      } // RETURN DERIVED HOSTNAME


      return strReturn;
    }; // DATA ATTRIBUTE TO CAMEL CASE CONVERTER


    objCommon.attrToCamelCase = function (strAttribute) {
      var aryDestination = [],
          arySource,
          strCurr,
          i;
      arySource = strAttribute.toLowerCase().replace('data-', '').split('-');

      for (i = 0; i < arySource.length; i++) {
        strCurr = arySource[i];

        if (0 < i) {
          strCurr = strCurr.charAt(0).toUpperCase() + strCurr.substring(1);
        }

        aryDestination.push(strCurr);
      }

      return aryDestination.join('');
    }; // LOCAL STORAGE API HELPER


    objCommon.getLocalStorageApi = function (storeName) {
      var localStorageName = storeName;
      var api = {
        val: function val() {
          try {
            if ('undefined' !== typeof window.localStorage) {
              var localStore = window.localStorage[localStorageName];

              if (localStore) {
                return JSON.parse(localStore);
              }
            }
          } catch (e) {// localStorage is in the browser, but not available for this site.
          }

          return undefined;
        },
        save: function save(anyValue) {
          api.valueType = _typeof(anyValue);

          if ("object" === api.valueType) {
            if ('[object Array]' === Object.prototype.toString.call(anyValue)) {
              api.valueType = "array";
            }
          }

          try {
            if ('undefined' !== typeof window.localStorage) {
              window.localStorage[localStorageName] = JSON.stringify(anyValue);
            }
          } catch (e) {// localStorage is in the browser, but not available for this site.
          }
        },
        clear: function clear() {
          try {
            if ('undefined' !== typeof window.localStorage) {
              window.localStorage.removeItem(localStorageName);
            }
          } catch (e) {// localStorage is in the browser, but not available for this site.
          }
        }
      };
      return api;
    }; // SHALLOW CLONE FUNCTIONS


    objCommon.cloneShallow = function (obj) {
      var anyReturn = null;

      switch (objCommon.typeof(obj)) {
        case "array":
          anyReturn = obj.slice(0);
          break;

        case "object":
          anyReturn = Object.assign({}, obj);
          break;

        default:
          anyReturn = obj;
          break;
      }

      return anyReturn;
    }; // SHALLOW CLONE FUNCTIONS


    objCommon.cloneDeep = function (anyVar, safeCopy) {
      if ('undefined' === typeof safeCopy) {
        safeCopy = true;
      }

      var anyReturn = null;

      switch (objCommon.typeof(anyVar)) {
        case "object":
          anyReturn = {};
          var key;

          for (key in anyVar) {
            if (anyVar.hasOwnProperty(key) || !safeCopy) {
              anyReturn[key] = objCommon.cloneDeep(anyVar[key]);
            }
          }

          break;

        case "array":
          anyReturn = anyVar.slice(0);
          break;

        default:
          anyReturn = anyVar;
          break;
      }

      return anyReturn;
    }; // SHALLOW CLONE FUNCTIONS


    objCommon.mergeShallow = function (obj1, obj2) {
      return Object.assign(objCommon.cloneShallow(obj1), objCommon.cloneShallow(obj2));
    }; // DATE DIFF METHODS


    objCommon.dateDiff = {
      inDays: function inDays(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        return parseInt((t2 - t1) / (24 * 3600 * 1000));
      },
      inWeeks: function inWeeks(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
      },
      inMonths: function inMonths(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();
        return d2M + 12 * d2Y - (d1M + 12 * d1Y);
      },
      inYears: function inYears(d1, d2) {
        return d2.getFullYear() - d1.getFullYear();
      }
    }; //

    objCommon.parseQueryString = function (strUrl) {
      var objReturn = {};
      strUrl = 0 === strUrl.indexOf('?') ? strUrl.substring(1) : strUrl;

      if (strUrl.length) {
        var aryCallParams = strUrl.split('&');
        var len = aryCallParams.length;

        while (len--) {
          var aryNvp = aryCallParams[len].split('=');
          objReturn[aryNvp[0]] = aryNvp[1];
        }
      }

      return objReturn;
    }; // SAFE CALL PARAMETER RETREIVAL METHOD


    objCommon.getCallParam = function () {
      // SET RUNTIME CALLPARAMS TO THAT OF CALLING PAGS LOCATION URL (THIS IS WHERE MOST REQUESTS WILL COME FROM)
      if (!objCommon.runtime.callParams) {
        objCommon.runtime.callParams = objCommon.parseQueryString(window.location.search);
      }

      return function (paramName, blnDecode, strUrl) {
        blnDecode = 'undefined' === typeof blnDecode ? true : blnDecode;
        var objParams = strUrl ? objCommon.parseQueryString(strUrl) : objCommon.runtime.callParams;
        var anyVar = objParams[paramName] || null;
        return blnDecode && null !== anyVar ? decodeURIComponent(anyVar) : anyVar;
      };
    }(); // INTERNAL DEBUG LOGGING REQUEST TRACKER
    // PASSING THE URL PARAMETER "consoleHelp=type" where type = metrics, all, etc.
    // PROVIDES A MECHANISM TO SHOW CONSOLE WARNINGS AT RUNTIME BASED ON A REQUEST VIA A URL PARAMETER
    // PLEASE BE FRUGAL IN USING


    objCommon.debugLogging = function () {
      var activeLogTypes = {};
      var aryConsoleSettings = (objCommon.getCallParam('tpConsoleHelp') || "").split(",");
      var i = aryConsoleSettings.length;

      while (i--) {
        activeLogTypes[aryConsoleSettings[i]] = true;
      }

      return function (logType) {
        return activeLogTypes.hasOwnProperty('all') || activeLogTypes.hasOwnProperty(logType);
      };
    }(); // LOGGING HANDLER


    objCommon.log = function () {
      // PARAM CONSOLE IF NEEDED
      var console = window.console || {
        log: function log() {},
        warn: function warn() {},
        error: function error() {},
        time: function time() {},
        timeEnd: function timeEnd() {},
        group: function group() {},
        groupCollapsed: function groupCollapsed() {},
        groupEnd: function groupEnd() {}
      };
      return function (anyArg) {
        if (objCommon.runtime.loggingEnabled) {
          // BASIC DEGRADING LOGGING HANDLER
          if (console && console.log) {
            if ('string' === typeof anyArg) {
              var wid = objCommon.getCallParam('wid');

              if (wid) {
                console.log(objCommon.getCallParam('wid') + ': ' + anyArg);
                return true;
              }
            }

            console.log(anyArg);
            console.trace();
            return true;
          }
        }

        return false;
      };
    }(); // DEBOUNCE FUNCTION


    objCommon.debounce = function (func, wait, immediate) {
      var timeout;
      return function () {
        var context = this,
            args = arguments;

        var later = function later() {
          timeout = null;

          if (!immediate) {
            func.apply(context, args);
          }
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) {
          func.apply(context, args);
        }
      };
    }; // RETURN SELF


    return objCommon;
  }();
})(window, document);
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (window, document, undefined) {
  'use strict';
  /* CDC METRICS COMPONENT */

  /* DEPENDENCIES:
         CDC COMMON COMPONENT
     */

  window.CDC = window.CDC || {};
  window.CDC.Common = window.CDC.Common || {};

  window.CDC.Common.getMetricsHandler = function () {
    // LOCAL VARS
    var objCommon, metricsManager, productTypeVarMappings, commonMetricsVersion, environmentTarget; // LOCAL VERSION ID - CONTROLLED BY BUILD

    environmentTarget = 'prod';
    commonMetricsVersion = '4.2.2'; // GRAB SHORTCUT FOR EXISTING CDC.WIDGET.COMMON

    objCommon = window.CDC.Common; // CREATE & RETURN METRICS MANAGER

    metricsManager = function () {
      // RETURN OBJECT
      var objMetrics = {
        enableLogging: false,
        linkDownloadFileTypes: ""
      }; // If we have access to this

      if (window.hasOwnProperty('s')) {
        objMetrics.linkDownloadFileTypes = window.s.linkDownloadFileTypes;
      } // LOGGING PROXY (CAN BE TURNED ON/OFF FOR METRICS)


      objMetrics.log = function (params) {
        if (objMetrics.enableLogging) {
          window.CDC.Common.log(params);
        }
      }; // BEACON INITIALIZER


      objMetrics.initBeacon = function (strBeaconUrl) {
        if (strBeaconUrl) {
          if (navigator.sendBeacon) {
            // GENERATE BEACON CALL
            return navigator.sendBeacon(strBeaconUrl);
          } else {
            // GENERATE IMG ELEMENT
            var img = new Image();
            img.src = strBeaconUrl;
            return true;
          }
        }

        return false;
      }; // GLOBAL METRICS TRACKER


      objMetrics.trackPage = objMetrics.trackData = function (objParamOverrides) {
        objParamOverrides = objParamOverrides || {}; // VERIFY TRACKING IS ENABLED

        if (objMetrics.trackingEnabled(objParamOverrides)) {
          // APPROVE BEACON SEND BY DEFAULT
          var blnApproveSend = true; // TRANSLATE PARAMETERS

          var objTranslatedParameters = objMetrics.translateToBeacon(objParamOverrides, objMetrics.settings.objParamOmit); // PREVENT DUPLICATE BEACONS IF CONFIGURED AS SUCH

          if (objMetrics.settings.trackOnUnique) {
            // CHECK FOR VALID TRANSLATION KEY (DOES trackOnUnique KEY EXIST IN TRANSLATION MAP)
            var strTranslatedUniqueKey = objMetrics.settings.translations.hasOwnProperty(objMetrics.settings.trackOnUnique) ? objMetrics.settings.translations[objMetrics.settings.trackOnUnique].to : null; // IF TRANSLATED KEY FOUND...

            if (strTranslatedUniqueKey) {
              // GET / DEFAULT UNIQUE VALUE IN RUNTIME
              objMetrics.runtime.metricsUniqueValue = objMetrics.runtime.metricsUniqueValue || null; // GET UNIQUE CHECK VALUE FROM PARAMETERS

              var uniqueCheckValue = objTranslatedParameters.hasOwnProperty(strTranslatedUniqueKey) ? objTranslatedParameters[strTranslatedUniqueKey] : null; // IF UNIQUE CHECK VALUE HAS BEEN SENT...

              if (null !== uniqueCheckValue) {
                // VERIFY IT IS UNIQUE FROM PREVIOUS SEND (IF NOT, NO BEACON WILL BE SENT)
                blnApproveSend = objMetrics.runtime.metricsUniqueValue !== uniqueCheckValue; // IF IS IS UNIQUE...

                if (blnApproveSend) {
                  // UPDATE LAST SENT VALUE TO CURRENT (FOR UPDATED CHECK NEXT TIME)
                  objMetrics.runtime.metricsUniqueValue = uniqueCheckValue;
                }
              }
            }
          } // IF BEACON SEND IS APPROVED...


          if (blnApproveSend) {
            // GET URL
            var strBeaconUrl = objMetrics.getBeaconUrl(objTranslatedParameters); // FLAG PAGE TRACK

            objMetrics.runtime.blnPageTracked = true;
            objMetrics.runtime.MetricsCallStack = objMetrics.runtime.MetricsCallStack || []; // UPDATE URL OF BEACON TO SEND DATA TRACKER

            objMetrics.log('** BEACON SENDING: **', 'Settings:', objMetrics.settings, 'Translated Parameters:', objTranslatedParameters, 'Beacon URL:', strBeaconUrl);

            if (objMetrics.initBeacon(strBeaconUrl)) {
              objMetrics.runtime.MetricsCallStack.push({
                beaconUrl: strBeaconUrl,
                parameters: objTranslatedParameters
              });
            } else {
              console.warn('Unable to send beacon!');
            }

            objCommon.log('** BEACON SENT **');
          } else {
            // CANCEL BEACON SEND
            objCommon.log('** DUPLICATE BEACON DETECTED ON PARAMETER - ' + objMetrics.settings.trackOnUnique + ' - BEACON SEND ABORTED **');
          }
        } else {
          objCommon.log('** TRACKING DISABLED - BEACON SEND ABORTED **');
        } // BASIC TRUE RETURN (TO ALLOW EVEN BUBBLING)


        return true;
      }; // INTERACTIONS TRACKER (WRAPPER)


      objMetrics.trackEvent = function (objOrStringData, strEventValue, eventType) {
        // VAR LOCALS
        var linkType, linkName, interactionOnlyMode; // DETERMINE IF WE ARE IN INTERACTION ONLY MODE.

        interactionOnlyMode = false !== eventType; // UNLESS false IS PASSED EXPLICITELY FOR eventType, WE ARE IN INTERACTION ONLY MODE
        // IN THIS CASE, linkType & linkeName ARE INCLUDED IN THE BEACON
        // OMNITURE THEN FILTERS OUT PAGE NAME IN POST PROCESSING
        // SO THIS BEACON WILL NOT INCREASE THE PAGE VIEW COUNT
        // ARE WE IN INTERACTION ONLY MODE?

        if (interactionOnlyMode) {
          // HAVE WE SENT A PAGE LEVEL BEACON YET?
          if (!objMetrics.runtime.blnPageTracked) {
            // TRACK INITIAL LOAD AS PAGE
            objMetrics.trackData(objMetrics.settings.params);
            objMetrics.log('Initial Beacon Sent');
          } // DEFAULT NEW EVENT TYPE PARAMETER


          eventType = eventType || 'o'; // DEFAULT VALUE

          strEventValue = strEventValue || ''; // SWITCH ON EVENT TYPE

          switch (eventType.toLowerCase()) {
            // EXIT LINK
            case 'e':
              linkType = 'lnk_e';
              break;
            // FILE DOWNLOAD

            case 'd':
              linkType = 'lnk_d';
              break;
            // CUSTOM LINK (DEFAULT)

            default:
              linkType = 'lnk_o';
              break;
          }
        } // VERIFY ARG PASSED


        if (objOrStringData) {
          // CHECK FOR STRING
          if ('string' === typeof objOrStringData) {
            // INIT TRACKER OBJECT
            var objTracker = {}; // INTERACTION MODE?

            if (interactionOnlyMode) {
              // YES, APPEND LINK TYPE & NAME PARAMETERS
              objTracker.linkType = linkType;
              objTracker.linkName = strEventValue.length ? strEventValue : objOrStringData;
            } // TEMP UNTIL WE CAN FIND A DECENT WAY TO DRIVE FROM PARAM CONFIG


            switch (objMetrics.settings.trackAs) {
              // MOBILE APP
              case 'mobileApp':
                // MODULE OR MIRCOSITE
                break;

              case 'webPage':
                // SET STRING TO COMBINED INTERACTION DATA KEY
                if (strEventValue.length) {
                  strEventValue = ': ' + strEventValue;
                }

                objTracker.interactionType = objOrStringData + strEventValue;
                break;
              // WIDGET / MICROSITE / OR UNKNOWN

              default:
                // SET STRING TO INTERACTION DATA KEY(S)
                objTracker.interactionType = objOrStringData;
                objTracker.interactionValue = strEventValue;
                break;
            }

            if (objTracker) {
              return objMetrics.trackData(objTracker);
            }
          } else {
            // INTERACTION MODE?
            if (interactionOnlyMode) {
              // YES, APPEND LINK TYPE & NAME PARAMETERS
              objOrStringData.linkType = linkType;
              objOrStringData.linkName = objOrStringData.linkName || objOrStringData.interactionValue || 'unspecified-link-name';
            } // PASS OBJECT THROUGH


            return objMetrics.trackData(objOrStringData);
          }
        }
      };

      objMetrics.trackDownload = function (strFileName) {
        objMetrics.trackEvent.call(this, 'file-download', strFileName, 'd');
      };

      objMetrics.trackExitLink = function (strLinkName) {
        objMetrics.trackEvent.call(this, 'exit-link-clicked', strLinkName, 'e');
      }; // URL GENERATOR (FROM PARAMS - ALLOWING FOR OVERRIDES)


      objMetrics.getBeaconUrl = function (objParamOverrides) {
        var strBaseUrl = objMetrics.getBaseUrl(),
            qryString = objMetrics.getQueryString(objParamOverrides);

        if ('omniture' === objMetrics.settings.metricsApi) {
          // 1. REPLACE REPORT SUITE
          strBaseUrl = objCommon.replaceAll('@RS@', objParamOverrides.reportsuite || objParams.reportsuite, strBaseUrl); // 2. REPLACE MOBILE_INDICATOR (PASS OR DEFAULT)

          strBaseUrl = objCommon.replaceAll('@MOBILE_INDICATOR@', objParamOverrides.isMobile ? '5' : '1', strBaseUrl); // 3. REPLACE LIBRARY_VERSION (PASS OR DEFAULT)

          strBaseUrl = objCommon.replaceAll('@LIBRARY_VERSION@', objParamOverrides.libraryVersion ? objParamOverrides.libraryVersion : 'H.21', strBaseUrl); // 4. REPLACE ANTI_CACHE_VALUE

          strBaseUrl = objCommon.replaceAll('@ANTI_CACHE_VALUE@', objCommon.guid(), strBaseUrl);
        }

        return strBaseUrl + '?' + qryString;
      }; // BASE METRICS API URL CONSTRUCTOR


      objMetrics.getBaseUrl = function () {
        var strBaseUrl;

        switch (objMetrics.settings.metricsApi) {
          case 'metricsAspx':
            strBaseUrl = 'https://tools.cdc.gov/metrics.aspx';
            break;

          default:
            strBaseUrl = 'https://cdc.112.2o7.net/b/ss/@RS@/@MOBILE_INDICATOR@/@LIBRARY_VERSION@/@ANTI_CACHE_VALUE@';
            break;
        }

        return strBaseUrl;
      };

      objMetrics.getCallParam = function (paramName) {
        return objCommon.getCallParam(paramName);
      }; // METRICS URL CONVERTER


      objMetrics.getQueryString = function (objParamOverrides, objParamOmit) {
        // GET OR DEFAULT LOCAL OVERRIDES
        objParamOverrides = objParamOverrides || {};
        objParamOmit = objMetrics.settings.objParamOmit; // CREATE PARAM ARRAY

        var objParams = {},
            aryParams = [],
            key,
            value; // MERGE IN OVERRIDES TO THIS CALLS PARAMS

        for (key in objParamOverrides) {
          objParams[key] = objParamOverrides[key];
        } // OMNITURE OR METRICS.ASPX HANDLING


        if ('omniture' === objMetrics.settings.metricsApi) {
          // OMNITURE - ADD AQE
          aryParams.push('AQB=1');
        } else {
          // METRICS ASPX - ADD MANUAL ANTI CACHE VALUE (THIS IS IN BASE URL IN THE CASE OF OMNITURE)
          aryParams.push('ac=' + objCommon.guid());
        } // LOOP METRIC PARAMS


        for (key in objParams) {
          // ONLY PROCEED WITH KEY IF IT IS NOT OMITTED
          if (!(objParamOmit.hasOwnProperty(key) && objParamOmit[key] !== undefined && null !== objParamOmit[key])) {
            // FINALIZE/FORMAT KEY VALUE
            value = objCommon.cleanString(objParams[key]); // CHECK FOR VALID FINAL VALUE

            if (value.length) {
              // PUSH KEY VALUE PAIR TO ARRAY
              aryParams.push(key + '=' + encodeURIComponent(value));
            }
          }
        } // ADD AQB/AQE (IMAGE BEGIN / IMAGE END) PARAMETERS TO QUERY STRING


        if ('omniture' === objMetrics.settings.metricsApi) {
          aryParams.push('AQE=1');
        } // CONVERT ARRAY TO QUERY STRING & RETURN


        return aryParams.join('&');
      }; // HELPER: IS TRACKING ENABLED


      objMetrics.trackingEnabled = function (objParamOverrides) {
        objParamOverrides = objParamOverrides || {};
        var objSettings = objMetrics.settings,
            anyIsEnabled; // GET ENABLED VALUE (FROM OVERRIDES OR SETTINGS OR FAILOVER TO FALSE)

        anyIsEnabled = objParamOverrides.useMetrics || objSettings.useMetrics || 'false'; // TYPE AGNOSTIC CHECK FOR TRUE

        return 'false' !== objCommon.cleanString(anyIsEnabled).toLowerCase();
      };

      objMetrics.getTranslations = function (objSettings) {
        // LOCAL
        var objTranslations, objMap, i; // DEFAULT RETURN OBJECT

        objTranslations = {
          // ADD DISPLAY ORDER ARRAY TO AID IN HOW THINGS SHOULD BE ORDER
          _displayOrder: []
        }; // GET LOOP LENGTH

        i = objSettings.productVariableMap.length; // LOOP MAPPINGS

        while (i--) {
          // GET CURRENT VAR MAP
          objMap = objSettings.productVariableMap[i]; // MAP TRANSLATIONS FOR VARIABLE

          objTranslations._displayOrder.push(objMap[objSettings.translation.fromKey]);

          objTranslations[objMap[objSettings.translation.fromKey]] = {
            to: objMap[objSettings.translation.toKey],
            description: objMap.description,
            defaultValue: 'function' === typeof objMap.defaultValue ? objMap.defaultValue.call(this, objSettings) : objMap.defaultValue
          };
        } // RETURN TRANSLATION MAP


        return objTranslations;
      };

      objMetrics.help = function () {
        if (!objMetrics.settings || !objMetrics.settings.translations) {
          console.groupCollapsed('CDC Common Metrics Framework is Not Initialized');
          console.log('Version: ' + commonMetricsVersion);
          console.warn('Please use the init method to initialize the Metrics Framework, Specify a product type: webPage, widget, or mobileApp');
          console.warn('Doing so will will allow the framework to provide you with a list of available parameters based on product type.');
          console.groupEnd();
          return;
        }

        var i, key, objParam;
        console.group('CDC Common Metrics Framework is Initialized');
        console.log('Version: ' + commonMetricsVersion);
        console.log('Tracking Data as: ' + objMetrics.settings.trackAs);
        console.groupEnd();
        console.group('Translation Configuration');
        console.log('Metric Key Values will be translated');
        console.log('From: ' + objMetrics.settings.translation.fromKey);
        console.log('To: ' + objMetrics.settings.translation.toKey);
        console.groupEnd();
        console.group('Supported Key Value Parameters:'); // LOOP TRANSLATIONS OBJECT VIA DISPLAY ORDER

        i = objMetrics.settings.translations._displayOrder.length;

        while (i--) {
          key = objMetrics.settings.translations._displayOrder[i];
          var objParamValue = objMetrics.settings.translations[key]; // BYPASS OMITTED SETTINGS

          if (!objMetrics.settings.objParamOmit.hasOwnProperty(key)) {
            console.group(key + ' (Translates to: ' + objParamValue.to + ' )');
            console.log('Description: ' + objParamValue.description);
            console.log('Current value: ' + objParamValue.defaultValue);
            console.log('Default value: ' + objMetrics.settings.params[key]);
            console.groupEnd();
          }
        }

        console.groupEnd();
        return true;
      };

      objMetrics.translateToBeacon = function (objBeaconParameters, objParamOmit) {
        objBeaconParameters = objBeaconParameters || {};
        objParamOmit = objParamOmit || objMetrics.settings.objParamOmit;
        var currKey,
            objTranslatedReturn = {},
            objOmittedReturn = {}; // BACK FILL VALUES ALREADY SET TO THIS 'objBeaconParameters' OBJECT

        for (currKey in objMetrics.settings.params) {
          if (!objBeaconParameters.hasOwnProperty(currKey)) {
            objBeaconParameters[currKey] = objMetrics.settings.params[currKey];
          }
        } // THEN PERFORM TRANSLATIONS TO 'objBeaconParameters' OBJECT


        for (currKey in objBeaconParameters) {
          // APPEND MODE?
          if (objMetrics.settings.translation.appendTranslations) {
            // USES EXISTING SETTING OBJECT & APPENDS NEW NEWS AS NEEDED
            // DOES TRANSLATION EXIST
            if (objMetrics.settings.translations.hasOwnProperty(currKey)) {
              // DOES THE TRANSLATION NOT ALREADY EXIST (WE DONT WANT TO OVERWRITE ALREADY SET PARAMETERS)
              if (!objBeaconParameters.hasOwnProperty(objMetrics.settings.translations[currKey].to)) {
                // APPEND MAP KEY VALUE TO TRANSLATION KEY VALUE IN RETURN (APPENDED TO ORIGINAL OBJECT)
                objBeaconParameters[objMetrics.settings.translations[currKey].to] = objBeaconParameters[currKey];
              }
            }
          } else {
            // CREATES NEW RETURN OBJECT AND ADDS KEYS IN AS NEEDED
            // DOES TRANSLATION EXIST
            // eslint-disable-next-line no-lonely-if
            if (objMetrics.settings.translations.hasOwnProperty(currKey)) {
              // DOES THE TRANSLATION NOT ALREADY EXIST (WE DONT WANT TO OVERWRITE ALREADY SET PARAMETERS)
              if (!objTranslatedReturn.hasOwnProperty(objMetrics.settings.translations[currKey].to)) {
                // MAP KEY VALUE TO TRANSLATION KEY VALUE IN RETURN
                objTranslatedReturn[objMetrics.settings.translations[currKey].to] = objBeaconParameters[currKey];
              }
            } else {
              // ELSE PASS ALONG ORIGINAL KVP
              objTranslatedReturn[currKey] = objBeaconParameters[currKey];
            }
          }
        }

        var objReturn; // IF APPEND MODE, RETURN ORIGINAL OBJECT WITH APPENDED KVP TRANSLATIONS

        if (objMetrics.settings.translation.appendTranslations) {
          objReturn = objBeaconParameters;
        } else {
          // ELSE RETURN TRANSLATED OBJECT ONLY
          objReturn = objTranslatedReturn;
        } // COPY PARAMS FROM 'objBeaconParameters' SANS OMMITTED VALUES


        for (currKey in objReturn) {
          if (!(objParamOmit.hasOwnProperty(currKey) && objParamOmit[currKey])) {
            objOmittedReturn[currKey] = objReturn[currKey];
          }
        }

        return objOmittedReturn;
      };

      objMetrics.getLanguageDefault = function () {
        // DEFAULT TO EN-US
        var strLangLocale = 'en-us'; // TRY TO RETURN HTML LANG ATTRIBUTE IF AVAILABLE

        if (document.documentElement.lang) {
          strLangLocale = document.documentElement.lang.toLowerCase();
        } // GET DEFAULT LANGUAGE VALUE FROM LOCALE


        switch (strLangLocale.substring(0, 2)) {
          // SPANISH
          case 'es':
            return 'spa';
          // CHINESE

          case 'zh':
            return 'chi';
          // VIETNAMESE

          case 'vi':
            return 'vie';
          // KOREAN

          case 'ko':
            return 'kor';
          //TAGALOG

          case 'tl':
            return 'tgl';
          // RUSSIAN

          case 'ru':
            return 'rus';
          //ARABIC

          case 'ar':
            return 'ara';
          //CREOLE

          case 'ht':
            return 'hat';
          // FRENCH

          case 'fr':
            return 'fra';
          //POLISH

          case 'pl':
            return 'pol';
          // PORTUGUESE

          case 'pt':
            return 'jpn';
          // ITALIAN

          case 'it':
            return 'ita';
          // GERMAN

          case 'de':
            return 'deu';
          // JAPANESE

          case 'ja':
            return 'jpn';
          //FARSI

          case 'fa':
            return 'fas';
          // ENGLISH

          default:
            return 'eng';
        }
      };

      objMetrics.safeUpdateObject = function (objTarget, objUpdates, anyOmit) {
        anyOmit = anyOmit || false;

        if ('undefined' !== typeof objTarget && 'undefined' !== typeof objUpdates) {
          for (var key in objUpdates) {
            if (objUpdates.hasOwnProperty(key)) {
              if ('object' === _typeof(objUpdates[key]) && !Array.isArray(objUpdates[key])) {
                objTarget[key] = objMetrics.safeUpdateObject(objTarget[key], objUpdates[key], anyOmit[key] || {});
              } else if (!(anyOmit[key] || true === anyOmit)) {
                objTarget[key] = objUpdates[key];
              }
            }
          }
        }

        return objTarget;
      };

      objMetrics.updateSettings = function (objSettings) {
        // GET OR DEFAULT INIT OVERRIDES
        objSettings = objSettings || {};
        objMetrics.log('SETTINGS BEFORE UPDATE', window.CDC.Common.cloneShallow(objMetrics.settings)); // APPLY OVERRIDES TO SETTINGS OBJECT (UNLESS THEY SHOULD BE OMITTED FOR UPDATE)

        objMetrics.settings = objMetrics.safeUpdateObject(objMetrics.settings, objSettings, objMetrics.settings.objUpdateOmit);
        objMetrics.log('SETTINGS AFTER UPDATE', objMetrics.safeUpdateObject(objMetrics.settings));
        objMetrics.log('SETTINGS UPDATE OMIT OBJECT', objMetrics.safeUpdateObject(objMetrics.settings.objUpdateOmit)); // UPDATE TRANSLATIONS OBJECT (BASED ON CURRENT TRANSLATION SETTINGS)

        objMetrics.settings.translations = objMetrics.getTranslations(objMetrics.settings);
        return true;
      };

      objMetrics.updateParams = function (objParameters) {
        // GET OR DEFAULT INIT OVERRIDES
        objParameters = objParameters || {};

        if (!objMetrics.settings) {
          // eslint-disable-next-line no-throw-literal
          throw 'Metrics Framework is not initialized...\nUnable to update parameters\nPlease init the metrics library to use this method.';
        } else {
          // APPLY OVERRIDES TO SETTINGS OBJECT (UNLESS THEY SHOULD BE OMITTED FOR UPDATE)
          objMetrics.settings.params = objMetrics.safeUpdateObject(objMetrics.settings.params, objParameters, objMetrics.settings.objParamOmit);
        } // UPDATE TRANSLATIONS OBJECT (BASED ON CURRENT TRANSLATION SETTINGS)


        objMetrics.settings.translations = objMetrics.getTranslations(objMetrics.settings); // IF WE ARE LOADING ALONGSIDE OMNITURE, AUTO UPDATE FROM OMNITURE

        if (objMetrics.settings.loadPageLevel) {
          objMetrics.updateOmniture();
        }

        return true;
      };

      objMetrics.update = function (objParameters) {
        //console.warn('Deprecated call to metrics.update(). For disambiguation, this method has been separated into two calls: 'updateParams' for parameters, and 'updateSettings' to update gloab settings. This method will be removed in a future release.');
        return objMetrics.updateParams(objParameters);
      };

      objMetrics.updateOmniture = function () {
        objMetrics.log('Updating omniture with configuration values from CDC Common Metrics');

        if ('undefined' === typeof window.s) {
          console.warn('Unable to update omniture settings because the global omniture \'s\' variables is undefined');
          return false;
        } else if ('undefined' === typeof window.updateVariables) {
          console.warn('Unable to update omniture settings because the global omniture method \'updateVariables\' is undefined');
          return false;
        } else if ('undefined' === typeof window.s_gi) {
          console.warn('Unable to update omniture settings because the global omniture method \'s_gi\' is undefined');
          return false;
        } else {
          // GET TRANSLATION MAP FOR MAPPING TO OMNITURE
          var key,
              objMap,
              anyValue,
              i,
              strReportSuite,
              updates = {},
              objOmnitureTranslations = objMetrics.getTranslations({
            productVariableMap: objMetrics.settings.productVariableMap,
            translation: {
              fromKey: objMetrics.settings.translation.fromKey,
              toKey: 'omnitureJsVarName'
            }
          });
          objMetrics.log(objOmnitureTranslations);
          objMetrics.log(objMetrics.params);
          strReportSuite = (objMetrics.settings.params.hasOwnProperty('reportsuite') ? objMetrics.settings.params.reportsuite : objOmnitureTranslations.reportsuite.defaultValue) || window.s.account || window.s_account; // SHIM FOR BACKWARDS COMPATIBILTIY

          if (!window.s_account && window.s && window.s.account) {
            window.s_account = window.s.account;
          } // VERIFY REPORT SUITE IN OMNITURE AND RE-INIT OMNITURE IF NEEDED
          // This was a safety check that needed more baking apparently, commenting it out
          // if (window.s && window.s_account && (window.s.account !== strReportSuite)) {
          //     console.warn('Omniture Account did not match account in common-metrics library. Omniture has been re-initialized from ' + window.s.account + ' to ' + strReportSuite + ' match the requested value');
          //     window.s.account = window.s_account = strReportSuite;
          //     window.s = window.s_gi(window.s.account);
          // }
          // Suggested Update
          // if (window.s && window.s_account && (window.s.account !== strReportSuite)) {
          //     console.warn('Omniture Account did not match account in common-metrics library.', 'window.s.account is: ' + window.s.account, 'strReportSuite is: ' + strReportSuite, 'Please verify omniture configuration');
          // }
          // LOOP TRANSLATIONS OBJECT VIA DISPLAY ORDER


          i = objOmnitureTranslations._displayOrder.length;

          while (i--) {
            key = objOmnitureTranslations._displayOrder[i];
            objMap = objOmnitureTranslations[key];
            anyValue = objMetrics.settings.params.hasOwnProperty(key) ? objMetrics.settings.params[key] : 'function' === typeof objMap.defaultValue ? objMap.defaultValue.call(this, objMetrics.settings) : objMap.defaultValue;

            if (anyValue) {
              if ('reportsuite' !== key) {
                s[objMap.to] = anyValue;
                updates[objMap.to] = s[objMap.to];
              }

              objMetrics.log('Updated ' + key + ' in CDC Common Metrics; s.' + objMap.to + ' has been updated to ' + updates[objMap.to]);
            } else {
              objMetrics.log('No translation value set for ' + key + ' is set in CDC Common Metrics; s.' + objMap.to + ' will have not been updated');
            }
          }

          window.updateVariables(s);
          return updates;
        }
      };

      objMetrics.updateFromOmniture = function (trackAs) {
        objMetrics.log('Updating CDC Common Metrics omniture with configuration values from omniture');
        objMetrics.init({
          trackAs: trackAs
        });

        if ('undefined' === typeof window.s) {
          console.warn('Unable to CDC Common Metrics settings because the global omniture \'s\' variables is undefined');
          return false;
        } else if ('undefined' === typeof window.updateVariables) {
          console.warn('Unable to CDC Common Metrics settings because the global omniture method \'updateVariables\' is undefined');
          return false;
        } else if ('undefined' === typeof window.s_gi) {
          console.warn('Unable to CDC Common Metrics settings because the global omniture method \'s_gi\' is undefined');
          return false;
        } else {
          // GET TRANSLATION MAP FOR MAPPING TO OMNITURE
          var key,
              objMap,
              anyValue,
              strReportSuite,
              i,
              updates = {},
              objOmnitureTranslations = objMetrics.getTranslations({
            productVariableMap: objMetrics.settings.productVariableMap,
            translation: {
              fromKey: 'omnitureJsVarName',
              toKey: objMetrics.settings.translation.fromKey
            }
          });
          strReportSuite = objMetrics.settings.params.hasOwnProperty('reportsuite') ? objMetrics.settings.params.reportsuite : objOmnitureTranslations.reportsuite.defaultValue;
          objMetrics.log('objOmnitureTranslations', objOmnitureTranslations); // LOOP TRANSLATIONS OBJECT VIA DISPLAY ORDER

          i = objOmnitureTranslations._displayOrder.length;

          while (i--) {
            key = objOmnitureTranslations._displayOrder[i];
            objMap = objOmnitureTranslations[key];
            anyValue = objMetrics.settings.params.hasOwnProperty(key) ? objMetrics.settings.params[key] : 'function' === typeof objMap.defaultValue ? objMap.defaultValue.call(this, objMetrics.settings) : objMap.defaultValue;

            if (anyValue) {
              if ('reportsuite' !== key) {
                updates[objMap.to] = s[objMap.from];
              }

              objMetrics.log('Translation value set for ' + key + ' in CDC Common Metrics; s.' + objMap.to + ' has been updated');
            } else {
              objMetrics.log('No translation value set for ' + key + ' is set in CDC Common Metrics; s.' + objMap.to + ' has not been updated');
            }
          }

          objMetrics.log('updates', updates);
        }
      };

      objMetrics.configureInteractionTracking = function ($, configurationMap) {
        configurationMap = configurationMap || [
          /*
                         // Example 1
                         {
                             'events' : 'keyup click', // Default listener value is 'click'
                             'selector' : '.example-selector-1',
                             'data' : 'example interaction',
                             'priority': 'low'
                         },
                         // Example 2
                         {
                             'selector' : '.example-selector-2',
                             'data' : {
                                 // Key Value Pairs - var key names should be based on currently configured 'fromKey' in regards to translation settings
                                 pageName: 'New Page Name',
                                 channel: 'New Channel Value'
                             },
                             'priority': 'medium'
                         },
                         //  Example 3
                         {
                             'selector' : '.example-selector-3',
                             'data' : function () {
                                 var newOverrides = {};
                                 newOverrides.linkName = $(this).attr('aria-label');
                                 var channelName = $(this).attr('data-custom-channel');
                                 if (!!channelName) {
                                     newOverrides.channelName = channelName;
                                 }
                                 return newOverrides;
                             },
                             'priority': 'high'
                         }
                         */
        ]; // Determine Approved Priorities for interaction map tracking

        var approvedPriorities;

        switch (objMetrics.settings.interactionMapPriority) {
          case 'all':
          case 'lowUp':
            approvedPriorities = ['low', 'medium', 'high'];
            break;

          case 'mediumUp':
            approvedPriorities = ['medium', 'high'];
            break;

          case 'highOnly':
            approvedPriorities = ['high'];
            break;

          default:
            approvedPriorities = [];

          /* 'none' and any unsupported priority falls into default case */
        }

        configurationMap.forEach(function (trackerConfig) {
          trackerConfig = trackerConfig || {}; // Defaults

          var localConfig = {};
          localConfig.priority = localConfig.priority || 'low'; // Is this listener permitted by priority?

          if (-1 < approvedPriorities.indexOf(localConfig.priority)) {
            localConfig.testMode = trackerConfig.testMode || false;
            localConfig.directBind = localConfig.testMode || trackerConfig.directBind || false;
            localConfig.events = trackerConfig.events || 'click';
            localConfig.selector = trackerConfig.selector || false;
            localConfig.data = trackerConfig.data || {};
            localConfig.handler = trackerConfig.handler || undefined;
            localConfig.debounce = localConfig.testMode ? false : trackerConfig.debounce || false;

            localConfig.handler = function (event) {
              // TEST MODE? (HALT DEFAULT HANDLERS)
              if (localConfig.testMode) {
                event.preventDefault();
                event.stopPropagation();
                console.warn('Metrics Test Mode is enabled for this element!', 'Please note that debounce and delegation are disabled in test mode.', 'Additionally, this event has been prevented from its default behavior, and propagation has been halted.');
              }

              var objOrStringData;

              if ('function' === typeof localConfig.data) {
                objOrStringData = localConfig.data.call(this);
              } else {
                objOrStringData = localConfig.data;
              }

              console.log('window.CDC.Common.metrics.trackEvent', objOrStringData);
              window.CDC.Common.metrics.trackEvent(objOrStringData);
              return !localConfig.testMode;
            }; // SETUP DEBOUNCE IF REQUESTED


            if (localConfig.debounce) {
              localConfig.debouncedHandler = window.CDC.Common.debounce(localConfig.handler, localConfig.debounce);
            } else {
              localConfig.debouncedHandler = localConfig.handler;
            }

            if (localConfig.directBind) {
              console.warn('Direct Assignement of listener for: ' + localConfig.selector);
              $(localConfig.selector).on(localConfig.events, localConfig.debouncedHandler);
            } else {
              // See http://api.jquery.com/on/ for API description
              $('body').on(localConfig.events, localConfig.selector, localConfig.debouncedHandler);
            }
          }
        });
        objMetrics.log('Metrics Listeners Initialized');
        return true;
      };

      objMetrics.init = function (objOptions) {
        var key, sCodeCallback; // GET OR DEFAULT INIT SETTINGS OVERRIDES

        objOptions = objOptions || {};
        objOptions.loadPageLevel = objOptions.loadPageLevel || objCommon.getCallParam('loadPageLevel') || 'module' === objOptions.trackAs || false;
        objOptions.objUpdateOmit = objOptions.objUpdateOmit || {
          objParamOmit: true,
          objUpdateOmit: true,
          productVariableMap: true,
          interactionType: true,
          interactionValue: true,
          linkType: true,
          linkName: true,
          trackAs: true,
          translations: true,
          params: true,
          productType: true
        };
        objOptions.objParamOmit = objOptions.objParamOmit || {
          objParamOmit: true,
          objUpdateOmit: true,
          params: true,
          interactionType: true,
          interactionValue: true,
          translation: true,
          productVariableMap: true,
          trackOnUnique: true,
          useMetrics: true,
          trackAs: true,
          metricsApi: true,
          translations: true,
          linkType: true,
          linkName: true
        };
        objOptions.trackOnUnique = objOptions.trackOnUnique || null;
        objOptions.translation = objOptions.translation || {};
        objOptions.useMetrics = 'undefined' === typeof objOptions.useMetrics ? true : objOptions.useMetrics; // RUNTIME CONTINUITY VARIABLES (LAST PAGE & CURRENT PAGE)

        objMetrics.runtime = objMetrics.getRuntime(objOptions.productName || 'anonymous-' + objOptions.productType); // blnPageTracked = (Are we loading page level metrics? - AKA WIll Omniture Handle the Page Beacon?) || false;

        objMetrics.runtime.blnPageTracked = objOptions.loadPageLevel || false;
        objMetrics.runtime.MetricsCallStack = []; // SET DEFAULT SETTINGS

        objMetrics.settings = function () {
          // HANDLE METRICS ENGINE SWITCHER
          var objReturn = {},
              objTranslationDefaults,
              currKey,
              currItem,
              trackAs = objCommon.getCallParam('mMode') || objOptions.trackAs || 'widget',
              validOptions = ['loadPageLevel', 'objParamOmit', 'objUpdateOmit', 'productType', 'trackOnUnique', 'translation', 'useMetrics'],
              intOptionsLen = validOptions.length;

          while (intOptionsLen--) {
            currKey = validOptions[intOptionsLen];
            objReturn[currKey] = objOptions[currKey];
          } // SWITCH PREREQUISITE LIBS AND METRIC PARAMS BY TRACKING TYPE (MODULE, WIDGET, ETC)


          switch (trackAs.toLowerCase()) {
            // TRACK AS MODULE
            case 'module':
            case 'webpage':
              objReturn.trackAs = 'webPage';
              objReturn.productType = objOptions.productType ? objOptions.productType : 'Web Page';
              objReturn.metricsApi = objOptions.metricsApi || 'omniture';
              objTranslationDefaults = {
                fromKey: 'omnitureVarName',
                toKey: 'omnitureVarName',
                appendTranslations: false
              };
              break;
            // TRACK AS MOBILE APP

            case 'mobileapp':
              objReturn.trackAs = 'mobileApp';
              objReturn.productType = objOptions.productType ? objOptions.productType : 'Mobile Application';
              objReturn.metricsApi = objOptions.metricsApi || 'omniture';
              objTranslationDefaults = {
                fromKey: 'varName',
                toKey: 'omnitureVarName',
                appendTranslations: false
              };
              break;
            // TRACK AS WIDGET / MICROSITE (DEFAULT)

            default:
              objReturn.trackAs = 'widget';
              objReturn.productType = objOptions.productType ? objOptions.productType : 'Widget / Microsite';
              objReturn.metricsApi = objOptions.metricsApi || 'omniture';
              objTranslationDefaults = {
                fromKey: 'varName',
                toKey: 'omnitureVarName',
                appendTranslations: true
              };
              break;
          }

          objReturn.productVariableMap = productTypeVarMappings[objReturn.trackAs]; // LOOP TRANSLATION DEFAULTS / ALLOWING FOR OVERRIDES FROM PASSED PARAMETERS PER KEY

          for (currKey in objTranslationDefaults) {
            objReturn.translation[currKey] = objOptions.translation.hasOwnProperty(currKey) ? objOptions.translation[currKey] : objTranslationDefaults[currKey];
          } // SET TRANSLATIONS OBJECT (BASED ON TRANSLATION SETTINGS SET ABOVE)


          objReturn.translations = objMetrics.getTranslations(objReturn); // Interaction tracking priority

          objOptions.interactionMapPriority = 'mediumUp';
          /* Options: all, lowUp, mediumUp, highOnly, none */
          // CREATE PARAMS OBJECT IN RETURN

          objReturn.params = {}; // SET 'objReturn.params' DEFAULTS

          for (currKey in objReturn.translations) {
            // GET DEFAULT VALUE FOR CURRENT PARAMETER
            currItem = objReturn.translations[currKey]; // CHECK IF IT HAS A VALID VALUE FOR A DEFAULT

            if (currItem.defaultValue) {
              // IF SO, INCLUDE IT IN THE PARAMETER DEFAULTS
              objReturn.params[currKey] = currItem.defaultValue;
            }
          } // RETURN DERIVED SETTINGS OBJECT


          return objReturn;
        }(); // APPLY OVERRIDES TO SETTINGS OBJECT


        objMetrics.updateSettings(objOptions); // APPLY OVERRIDES TO PARAMETERS OBJECT

        objMetrics.updateParams(objOptions); // INIT BEACON ELEMENT
        // objMetrics.initBeacon();
        // RETURN SELF

        return objMetrics;
      };

      objMetrics.getRuntime = function () {
        var getNormUrlName = function getNormUrlName(url) {
          return url.toLowerCase().replace(/[\/]/g, '_').replace(/[.]/g, '');
        };

        return function (productName) {
          var objRuntime, currUrl, currUrlNorm, localStoreApi, localStoreData, urlInfo;
          currUrl = location.host.toLowerCase() + location.pathname.toLowerCase();
          currUrlNorm = getNormUrlName(currUrl);
          localStoreApi = objCommon.getLocalStorageApi('tpMetrics' + productName);
          localStoreData = localStoreApi.val() || {}; // SET METRICS INSTANCE RUNTIME DEFAULTS

          objRuntime = {
            visitReference: localStoreData.visitReference || {},
            referrer: localStoreData.referrer || document.referrer,
            pageTrack: localStoreData.pageTrack || []
          }; // GET OR SET (DEFAULT) THIS URLS' PLACE IN THE VISIT REFERENCE

          if (!objRuntime.visitReference.hasOwnProperty(currUrlNorm)) {
            objRuntime.visitReference[currUrlNorm] = {
              pageUrl: currUrl,
              pageName: document.title,
              visits: []
            };
          } // PUSH THE CURRENT DATE TO THE VISIT TRACKER


          objRuntime.visitReference[currUrlNorm].visits.push(Date.now()); // PUSH THE CURRENT URL (IN ITS NORMALIZED FORM) TO THE PAGE TRACKER

          objRuntime.pageTrack.push(currUrlNorm); // SAVE THE UPDATED DATA BACK TO LOCAL STORAGE

          localStoreApi.save({
            visitReference: objRuntime.visitReference,
            referrer: objRuntime.visitReference,
            pageTrack: objRuntime.pageTrack
          });
          return objRuntime;
        };
      }();

      return objMetrics;
    }(); // VARIABLE MAPPINGS BY PRODUCT TYPE (AND AS SUCH, REPORT SUITE)


    productTypeVarMappings = {
      mobileApp: [{
        varName: 'productType',
        description: 'Use to indicate what type of product this is, such as \'Mobile App\', or \'Widget\', etc.',
        omnitureVarName: 'c8',
        omnitureJsVarName: 'prop8',
        cdcVarName: 'c8',
        defaultValue: function defaultValue(options) {
          return options.productType || 'Mobile App';
        }
      }, {
        varName: 'reportsuite',
        description: 'Used to set the report suite that traffic should be sent to',
        omnitureVarName: 'reportsuite',
        omnitureJsVarName: 'reportsuite',
        cdcVarName: 'reportsuite',
        defaultValue: 'cdcsynd'
      }, {
        varName: 'linkType',
        description: 'Omniture Specific Variable - Used in link tracking (AKA interaction tracking) | Types are: File Downloads=\'d\', translated to \'lnk_d\', Exit Links=\'e\', translated to \'lnk_e\', Custom Links=\'o\', which is translated to \'lnk_o\'',
        omnitureVarName: 'pe',
        omnitureJsVarName: 'pe',
        cdcVarName: 'pe',
        defaultValue: null
      }, {
        varName: 'linkName',
        description: 'Omniture Specific Variable - Used in link tracking (AKA interaction tracking) | This is the link or interaction name / short desc',
        omnitureVarName: 'pev2',
        omnitureJsVarName: 'pev2',
        cdcVarName: 'pev2',
        defaultValue: null
      }, {
        varName: 'appFramework',
        description: 'App Framework',
        omnitureVarName: 'c51',
        omnitureJsVarName: 'prop51',
        cdcVarName: 'c51',
        defaultValue: null
      }, {
        varName: 'appName',
        description: 'App Name',
        omnitureVarName: 'c52',
        omnitureJsVarName: 'prop52',
        cdcVarName: 'c52',
        defaultValue: null
      }, {
        varName: 'appVersion',
        description: 'App Version',
        omnitureVarName: 'c53',
        omnitureJsVarName: 'prop53',
        cdcVarName: 'c53',
        defaultValue: null
      }, {
        varName: 'interactionType',
        description: 'Events / Interactions (Format is \'Type: Value)\'',
        omnitureVarName: 'c58',
        omnitureJsVarName: 'prop58',
        cdcVarName: 'c58',
        defaultValue: null
      }, {
        varName: 'contentSection',
        description: 'Section',
        omnitureVarName: 'c59',
        omnitureJsVarName: 'prop59',
        cdcVarName: 'c59',
        defaultValue: null
      }, {
        varName: 'pageName',
        description: 'Page Name / Content or Article Name',
        omnitureVarName: 'gn',
        omnitureJsVarName: 'pageName',
        cdcVarName: 'contenttitle',
        defaultValue: null
      }, {
        varName: 'contentTitle',
        description: 'Page Name / Content or Article Name',
        omnitureVarName: 'gn',
        omnitureJsVarName: 'pageName',
        cdcVarName: 'contenttitle',
        defaultValue: null
      }, {
        varName: 'contentTitle',
        description: 'Page Name / Content or Article Name',
        omitureVarName: 'gn',
        cdcVarName: 'contenttitle',
        default: null
      }, {
        varName: 'contentPath',
        description: 'Content Source URL',
        omnitureVarName: 'c1',
        omnitureJsVarName: 'prop1',
        cdcVarName: 'c1',
        defaultValue: null
      }, {
        varName: 'contentPartnerDomain',
        description: 'Partner Domain',
        omnitureVarName: 'c3',
        omnitureJsVarName: 'prop3',
        cdcVarName: 'c3',
        defaultValue: null
      }, {
        varName: 'contentId',
        description: 'Content ID',
        omnitureVarName: 'c6',
        omnitureJsVarName: 'prop6',
        cdcVarName: 'c6',
        defaultValue: null
      }, {
        varName: 'contentLanguage',
        description: 'Language code (en-us, en-es, etc.) for Currently Loaded Content',
        omnitureVarName: 'c5',
        omnitureJsVarName: 'prop5',
        cdcVarName: 'c5',
        defaultValue: null
      }, {
        varName: 'contentChannel',
        description: 'Channel',
        omnitureVarName: 'ch',
        omnitureJsVarName: 'ch',
        cdcVarName: 'channel',
        defaultValue: null
      }, {
        varName: 'deviceOsName',
        description: 'OS Name',
        omnitureVarName: 'c54',
        omnitureJsVarName: 'prop54',
        cdcVarName: 'c54',
        defaultValue: null
      }, {
        varName: 'deviceOsVersion',
        description: 'OS Version',
        omnitureVarName: 'c55',
        omnitureJsVarName: 'prop55',
        cdcVarName: 'c55',
        defaultValue: null
      }, {
        varName: 'deviceType',
        description: 'Device Type (Phone, Table, Etc.)',
        omnitureVarName: 'c56',
        omnitureJsVarName: 'prop56',
        cdcVarName: 'c56',
        defaultValue: null
      }, {
        varName: 'deviceIsOnline',
        description: 'Online / Offline Status. Use 0 and 1 respectively',
        omnitureVarName: 'c57',
        omnitureJsVarName: 'prop57',
        cdcVarName: 'c57',
        defaultValue: null
      }],
      widget: [{
        varName: 'productType',
        description: 'Use to indicate what type of product this is, such as \'Mobile App\', or \'Widget\', etc.',
        omnitureVarName: 'c8',
        omnitureJsVarName: 'prop8',
        cdcVarName: 'c8',
        defaultValue: function defaultValue(options) {
          return options.productType || 'Widget';
        }
      }, {
        varName: 'reportsuite',
        description: 'Used to set the report suite that traffic should be sent to',
        omnitureVarName: 'reportsuite',
        omnitureJsVarName: 'reportsuite',
        cdcVarName: 'reportsuite',
        defaultValue: 'cdcsynd'
      }, {
        varName: 'linkType',
        description: 'Omniture Specific Variable - Used in link tracking (AKA interaction tracking) | Types are: File Downloads=\'d\', translated to \'lnk_d\', Exit Links=\'e\', translated to \'lnk_e\', Custom Links=\'o\', which is translated to \'lnk_o\'',
        omnitureVarName: 'pe',
        omnitureJsVarName: 'pe',
        cdcVarName: 'pe',
        defaultValue: null
      }, {
        varName: 'linkName',
        description: 'Omniture Specific Variable - Used in link tracking (AKA interaction tracking) | This is the link or interaction name / short desc',
        omnitureVarName: 'pev2',
        omnitureJsVarName: 'pev2',
        cdcVarName: 'pev2',
        defaultValue: null
      }, {
        varName: 'server',
        description: 'Used to the server of the calling page / resource',
        omnitureVarName: 'server',
        omnitureJsVarName: 'server',
        cdcVarName: 'server',
        defaultValue: metricsManager.getCallParam('chost')
      }, {
        varName: 'widgetId',
        description: 'Framework Used For This Widget (Defaults to: \'Widget Framework\' meaning the CDC Responsive iFrame Widget Framework)',
        omnitureVarName: 'c32',
        omnitureJsVarName: 'prop32',
        cdcVarName: 'c32',
        defaultValue: undefined
      }, {
        varName: 'widgetFramework',
        description: 'Framework Used For This Widget (Defaults to: \'Widget Framework\' meaning the CDC Responsive iFrame Widget Framework)',
        omnitureVarName: 'c27',
        omnitureJsVarName: 'prop27',
        cdcVarName: 'c27',
        defaultValue: 'Widget Framework'
      }, {
        varName: 'url',
        description: 'Metrics URL (Legacy Variable, Unsure of Purpose, seems redundant, Leaving Default Off)',
        omnitureVarName: 'c1',
        omnitureJsVarName: 'prop1',
        cdcVarName: 'url',
        defaultValue: undefined
      }, {
        varName: 'documentTitle',
        description: 'Document Title',
        omnitureVarName: 'c2',
        omnitureJsVarName: 'prop2',
        cdcVarName: 'documenttitle',
        defaultValue: document.title
      }, {
        varName: 'hostName',
        description: 'Metrics host name (Not sure what this is)',
        omnitureVarName: 'c3',
        omnitureJsVarName: 'prop3',
        cdcVarName: 'hostname',
        defaultValue: location.host
      }, {
        varName: 'registrationId',
        description: 'Content Syndication registration ID',
        omnitureVarName: 'c4',
        omnitureJsVarName: 'prop4',
        cdcVarName: 'registrationid',
        defaultValue: undefined
      }, {
        varName: 'referrerUrl',
        description: 'Widgets rarely use this as the majority are single page applications. This defaults to URL of the widget itself, but could be set to the hash or path of the previous view if needed.',
        omnitureVarName: 'c16',
        omnitureJsVarName: 'prop16',
        cdcVarName: 'referrerurl',
        defaultValue: location.host + location.pathname
      }, {
        varName: 'syndicationUrl',
        description: 'Url of the page which called the widget',
        omnitureVarName: 'c17',
        omnitureJsVarName: 'prop17',
        cdcVarName: 'c17',
        defaultValue: metricsManager.getCallParam('chost') + metricsManager.getCallParam('cpath')
      }, {
        varName: 'contentTitle',
        description: 'Content Title',
        omnitureVarName: 'pageName',
        omnitureJsVarName: 'pageName',
        cdcVarName: 'contenttitle',
        defaultValue: metricsManager.getCallParam('wn')
      }, {
        varName: 'contentChannel',
        description: 'Omniture channel',
        omnitureVarName: 'ch',
        omnitureJsVarName: 'ch',
        cdcVarName: 'channel',
        defaultValue: undefined
      }, {
        varName: 'feedName',
        description: '(Legacy Variable) Feed Name used as the source for the widget if applicable (No Default)',
        omnitureVarName: 'c47',
        omnitureJsVarName: 'prop47',
        cdcVarName: 'c47',
        defaultValue: undefined
      }, {
        varName: 'interactionType',
        description: 'Interaction Type (Separates Interaction Type from Interaction Value, Works in Conjunction with interactionValue',
        omnitureVarName: 'c33',
        omnitureJsVarName: 'prop33',
        cdcVarName: 'c33',
        defaultValue: undefined
      }, {
        varName: 'interactionValue',
        description: 'Interaction Value (Separates Interaction Type from Interaction Value, Works in Conjunction with interactionType',
        omnitureVarName: 'c14',
        omnitureJsVarName: 'prop14',
        cdcVarName: 'c14',
        defaultValue: undefined
      }],
      webPage: [{
        varName: 'productType',
        description: 'Use to indicate what type of product this is, such as \'Mobile App\', or \'Widget\', etc.',
        omnitureVarName: 'c8',
        omnitureJsVarName: 'prop8',
        cdcVarName: 'c8',
        defaultValue: function defaultValue(options) {
          return options.productType || 'webPage';
        }
      }, {
        varName: 'reportsuite',
        description: 'Used to set the report suite that traffic should be sent to',
        omnitureVarName: 'reportsuite',
        omnitureJsVarName: 'reportsuite',
        cdcVarName: 'reportsuite',
        defaultValue: 'cdcgov'
      }, {
        varName: 'linkType',
        description: 'Omniture Specific Variable - Used in link tracking (AKA interaction tracking) | Types are: File Downloads=\'d\', translated to \'lnk_d\', Exit Links=\'e\', translated to \'lnk_e\', Custom Links=\'o\', which is translated to \'lnk_o\'',
        omnitureVarName: 'pe',
        omnitureJsVarName: 'pe',
        cdcVarName: 'pe',
        defaultValue: null
      }, {
        varName: 'linkName',
        description: 'Omniture Specific Variable - Used in link tracking (AKA interaction tracking) | This is the link or interaction name / short desc',
        omnitureVarName: 'pev2',
        omnitureJsVarName: 'pev2',
        cdcVarName: 'pev2',
        defaultValue: null
      }, {
        varName: 'pageName',
        description: 'Page Title',
        omnitureVarName: 'gn',
        omnitureJsVarName: 'pageName',
        cdcVarName: 'contenttitle',
        defaultValue: function defaultValue(options) {
          return 'undefined' !== typeof window.s && 'errorPage' === window.s.pageType ? null : 'undefined' !== typeof window.s && 'undefined' !== typeof window.s.pageName ? window.s.pageName : document.title;
        }
      }, {
        varName: 'channel',
        description: 'Used to the server of the calling page / resource',
        omnitureVarName: 'ch',
        omnitureJsVarName: 'channel',
        cdcVarName: 'channel',
        defaultValue: undefined
      }, {
        varName: 'server',
        description: 'Used to the server of the calling page / resource',
        omnitureVarName: 'server',
        omnitureJsVarName: 'server',
        cdcVarName: 'server',
        defaultValue: location.host.toLowerCase()
      }, {
        varName: 'pageType',
        description: 'Populate with \'errorPage\' on 404 pages ONLY.',
        omnitureVarName: 'pageType',
        omnitureJsVarName: 'pageType',
        cdcVarName: 'pageType',
        defaultValue: undefined
      }, {
        varName: 'keywords',
        description: 'Keywords (Internal)',
        omnitureVarName: 'c3',
        omnitureJsVarName: 'prop3',
        cdcVarName: 'c3',
        defaultValue: function () {
          var keywords = '';
          var metas = document.getElementsByTagName('meta');

          if (metas) {
            for (var x = 0, y = metas.length; x < y; x++) {
              if ('keywords' === metas[x].name.toLowerCase()) {
                keywords += metas[x].content;
              }
            }
          }

          return '' !== keywords ? keywords : false;
        }()
      }, {
        varName: 'contentLanguage',
        description: 'Content Language (Multilingual Content / Track pages viewed by language)',
        omnitureVarName: 'c5',
        omnitureJsVarName: 'prop5',
        cdcVarName: 'language',
        defaultValue: metricsManager.getLanguageDefault()
      }, {
        varName: 'contentLanguageByPage',
        description: 'Content Language by Page (Multilingual Content / Track pages viewed by language)',
        omnitureVarName: 'c6',
        omnitureJsVarName: 'prop6',
        cdcVarName: 'c6',
        defaultValue: undefined
      }, {
        varName: 'campaignTrackingId',
        description: 'Campaign Tracking Code ID',
        omnitureVarName: 'c15',
        omnitureJsVarName: 'prop15',
        cdcVarName: 'c15',
        defaultValue: metricsManager.getCallParam('cid')
      }, {
        varName: 'level1',
        description: 'Level 1',
        omnitureVarName: 'c22',
        omnitureJsVarName: 'prop22',
        cdcVarName: 'c22',
        defaultValue: undefined
      }, {
        varName: 'level2',
        description: 'Level 2',
        omnitureVarName: 'c23',
        omnitureJsVarName: 'prop23',
        cdcVarName: 'c23',
        defaultValue: undefined
      }, {
        varName: 'level3',
        description: 'Level 3',
        omnitureVarName: 'c24',
        omnitureJsVarName: 'prop24',
        cdcVarName: 'c24',
        defaultValue: undefined
      }, {
        varName: 'level4',
        description: 'Level 4',
        omnitureVarName: 'c25',
        omnitureJsVarName: 'prop25',
        cdcVarName: 'c25',
        defaultValue: undefined
      }, {
        varName: 'level5',
        description: 'Level 5',
        omnitureVarName: 'c43',
        omnitureJsVarName: 'prop43',
        cdcVarName: 'c43',
        defaultValue: undefined
      }, {
        varName: 'level6',
        description: 'Level 6',
        omnitureVarName: 'c44',
        omnitureJsVarName: 'prop44',
        cdcVarName: 'c44',
        defaultValue: undefined
      }, {
        varName: 'interactionType',
        description: 'Events / Interactions (Format is \'Type: Value)\'',
        omnitureVarName: 'c40',
        omnitureJsVarName: 'prop40',
        cdcVarName: 'c40',
        defaultValue: undefined
      }, {
        varName: 'application',
        description: 'Application Name (To Correlate with Interaction?)',
        omnitureVarName: 'c41',
        omnitureJsVarName: 'prop41',
        cdcVarName: 'c41',
        defaultValue: undefined
      }, {
        varName: 'appMeasurementVersion',
        description: 'App Measurement Version (Captures the current version of adobe code we are leveraging)',
        omnitureVarName: 'c53',
        omnitureJsVarName: 'prop53',
        cdcVarName: 'c53',
        defaultValue: location.host + location.pathname
      }, {
        varName: 'pageUrl',
        description: 'Page Url - Live Pages (v.2.0)',
        omnitureVarName: 'c54',
        omnitureJsVarName: 'prop54',
        cdcVarName: 'c54',
        defaultValue: location.host + location.pathname
      }, {
        varName: 'previousPageUrl',
        description: 'Previous Page Url',
        omnitureVarName: 'c55',
        omnitureJsVarName: 'prop55',
        cdcVarName: 'c55',
        defaultValue: document.referrer
      }, {
        varName: 'userAgentString',
        description: 'User Agent String',
        omnitureVarName: 'c60',
        omnitureJsVarName: 'prop60',
        cdcVarName: 'c60',
        defaultValue: navigator.userAgent
      }, {
        varName: 'campaignPathing',
        description: 'Path Name',
        omnitureVarName: 'c2',
        omnitureJsVarName: 'prop2',
        cdcVarName: 'documenttitle',
        defaultValue: window.location.href.toLowerCase()
      }, {
        varName: 'livePages',
        description: 'Live Pages (all versions) t26',
        omnitureVarName: 'c26',
        omnitureJsVarName: 'prop26',
        cdcVarName: 'documenttitle',
        defaultValue: document.title.toLowerCase()
      }, {
        varName: 'livePages2',
        description: 'Live Pages (v.2.0) t30',
        omnitureVarName: 'c30',
        omnitureJsVarName: 'prop30',
        cdcVarName: 'documenttitle',
        defaultValue: document.title.toLowerCase()
      }, {
        varName: 'livePages3',
        description: 'Live Pages URLs (all versions) t31',
        omnitureVarName: 'c31',
        omnitureJsVarName: 'prop31',
        cdcVarName: 'documenttitle',
        defaultValue: window.location.href.toLowerCase()
      }, {
        varName: 'livePages3',
        description: 'Page URLs(t46)',
        omnitureVarName: 'c46',
        omnitureJsVarName: 'prop46',
        cdcVarName: 'documenttitle',
        defaultValue: window.location.href.toLowerCase()
      }, {
        varName: 'Viewport',
        description: 'Viewport Name',
        omnitureVarName: 'c49',
        omnitureJsVarName: 'prop49',
        cdcVarName: 'prop49',
        defaultValue: undefined
      }]
    }; // RETURN COMMON WITH METRICS

    return metricsManager;
  }; // EXTEND COMMON OBJECT WITH METRICS HANDLER


  window.CDC.Common.metrics = window.CDC.Common.metrics || window.CDC.Common.getMetricsHandler();
})(window, document);
/*
s.pageName	Most Popular Pages, Pathing reports
s.channel	Most Popular Site Sections
-s.server	Most Popular Servers
s.pageType	Page Not Found
s.prop3	Keywords (Internal)
s.prop5	Multilingual Content
s.prop6	Multilingual Content by Page
s.prop8	Prop 8 Report
s.prop15	Campaign Tracking Code ID
s.prop22	Level 1
s.prop23	Level 2
s.prop24	Level 3
s.prop25	Level 4
s.prop34	Google Ranking
s.prop35	Traffic by Hour
s.prop36	Traffic by Day
s.prop39	Flash Version
s.prop40	Interactions
s.prop43	Level 5
s.prop44	Level 6
s.prop46	Most Popular URLs
s.prop47	Feed Name Clickthroughs
s.prop48	Original Search Page
s.prop49	Viewport
s.prop50	Custom Link Page Name
s.prop51
s.prop52	Quiz Results Returned
s.prop53	App Measurement Version
s.prop54	Page URL
s.prop55	Previous Page URL
s.prop56	Page Load Time
s.prop57	Visit Number
s.prop58	Days Since Last Visit
s.prop59	Percent of Page Viewed
s.prop60	User Agent String
s.prop61	Previous Page Name
s.prop62	Date Stamp
s.prop63	Internal Search Term
s.prop64
s.prop65
s.prop66
s.prop67
s.prop68
s.prop69
s.prop70
s.prop71
s.prop72
s.prop73	Page Path
s.prop74	Scenario
s.prop75	Test Version

*-s.prop41	Application
*s.prop1	Topic Segments
*-s.prop2	Campaign Pathing
*s.prop4	CIO
*s.prop7	Topic
*s.prop10	External URLs using CDC code
*s.prop11	CIO Level 1
*s.prop12	CIO Level 2
*s.prop13	CIO Level 3
*s.prop14	CIO Level 4
*s.prop16	Content Syndication
*s.prop17	Widget Syndication
*s.prop18	Respondent ID
*s.prop19	Survey Name
*s.prop26	Live Pages (all versions)
*-s.prop27	Widget Framework
*s.prop28	PHIL Images
*s.prop29	Live Pages (v.1.0)
*s.prop30	Live Pages (v.2.0)
*s.prop31	Live Pages URLs (all versions)
*s.prop37	Percentage of the Previous Page that the User Viewed
*s.prop38	Previous Page Value
*s.prop45	A-Z Entry
*/
'use strict';
/**
 * social-sharing.js
 * @fileOverview Contains the Social Page Sharing module
 * @version 0.2.0.0
 * @copyright 2018 Centers for Disease Control
 */

(function ($, window, document, undefined) {
  var pluginName = "cdc_socialSharing",
      defaults = {
    container: '.page-share-wrapper'
  };

  function CDCPlugin(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  function inArray(target, array) {
    /* Caching array.length doesn't increase the performance of the for loop on V8 (and probably on most of other major engines) */
    for (var i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return true;
      }
    }

    return false;
  }

  CDCPlugin.prototype = {
    init: function init(url) {
      //var defaults = this._defaults;
      url = url || window.location;
      this.updateSocialLinks(url);
    },
    updateSocialLinks: function updateSocialLinks(url, title) {
      var t = this,
          socialMediaParams = {
        url: $("meta[property='og:title']").attr("content"),
        title: title || $("meta[property='og:title']").attr("content") || document.title,
        description: $("meta[property='og:description']").attr("content") || $('meta[name=description]').attr('content'),
        author: $("meta[property='og:author']").attr("content") || 'CDCgov',
        media: $("meta[property='og:image']").attr("content"),
        twitter: {
          creator: $("meta[name='twitter:creator']").attr("content") || 'CDCgov',
          title: $("meta[name='twitter:title']").attr("content") || document.title,
          description: $("meta[name='twitter:description']").attr("content") || $('meta[name=description]').attr('content'),
          media: $("meta[name='twitter:image:src']").attr("content")
        }
      }; // Facebook

      if ($(".page-share-facebook").length) {
        var socialUrl = "https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=".concat(url, "&title=").concat(socialMediaParams.title, "&description=").concat(socialMediaParams.description, "&via=").concat(socialMediaParams.via, "&media=").concat(socialMediaParams.media);
        $(".page-share-facebook").attr("href", encodeURI(socialUrl));
        $('.page-share-facebook').on('click', function (e) {
          $(this).trigger('metrics-capture', ['social-media-share-facebook', 'click']);
        });
      } // Twitter


      if ($(".page-share-twitter").length) {
        var twitterAccount = socialMediaParams.twitter.creator.replace(/^\@+/, '');

        var _socialUrl = "https://api.addthis.com/oexchange/0.8/forward/twitter/offer?url=".concat(url, "&title=").concat(socialMediaParams.twitter.title, "&description=").concat(socialMediaParams.twitter.description, "&via=").concat(twitterAccount, "&ct=0&media=").concat(socialMediaParams.twitter.media);

        $(".page-share-twitter").attr("href", encodeURI(_socialUrl));
        $('.page-share-twitter').on('click', function (e) {
          $(this).trigger('metrics-capture', ['social-media-share-twitter', 'click']);
        });
      } // E-mail


      if ($(".page-share-email").length) {
        var _socialUrl2 = "https://api.addthis.com/oexchange/0.8/forward/email/offer?url=".concat(url, "&title=").concat(socialMediaParams.title, "&description=").concat(socialMediaParams.description, "&via=").concat(socialMediaParams.author, "&ct=0&media=").concat(socialMediaParams.media);

        $(".page-share-email").attr("href", encodeURI(_socialUrl2));
        $('.page-share-email').on('click', function (e) {
          $(this).trigger('metrics-capture', ['social-media-share-email', 'click']);
        });
      } // LinkedIn


      if ($(".page-share-linkedin").length) {
        var testEnvs = ['vvv', '-stage', '-test', 'dev.'];
        var envUrl = window.hostName;

        if (true === inArray(envUrl, testEnvs)) {
          //result++;
          url = 'https://www.cdc.gov';
        } // $.each ( testEnvs, function() {
        // 	if ( 0 === envUrl.indexOf( this ) ) {
        // 		url = 'https://www.cdc.gov';
        // 	}
        // } );


        var _socialUrl3 = "https://api.addthis.com/oexchange/0.8/forward/linkedin/offer?url=".concat(url, "&title=").concat(socialMediaParams.title, "&description=").concat(socialMediaParams.description, "&via=").concat(socialMediaParams.creator, "&ct=0&media=").concat(socialMediaParams.media);

        $(".page-share-linkedin").attr("href", encodeURI(_socialUrl3));
        $('.page-share-linkedin').on('click', function (e) {
          $(this).trigger('metrics-capture', ['social-media-share-linkedin', 'click']);
        });
      } // Syndication
      // **  Replaced with window.CDC.tp4.public.updateSocialSyndLink(); in App.js
      //if ($(".page-share-syndication").length) {
      // let socialUrl = `https://tools.cdc.gov/medialibrary/index.aspx#/sharecontent/${url}`;
      // $(".page-share-syndication")
      // 	.attr("href", encodeURI(socialUrl));
      //}

    }
  }; // don't let the plugin load multiple times

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new CDCPlugin(this, options));
      }
    });
  };
})(jQuery, window, document);

$(document).cdc_socialSharing();
'use strict';
/**
 * tp-social-media.js
 * @fileOverview Social Media Module
 * @copyright 2018 Centers for Disease Control
 * @version 0.2.0.0
 */

(function ($, window, document, undefined) {
  var pluginName = 'cdc_social_media',
      mediaId = '199',
      defaults = {
    urls: {
      podcast: "https://www2c.cdc.gov/podcasts/feed.asp?feedid=".concat(mediaId, "&format=jsonp"),
      cs: "https://tools.cdc.gov/api/v2/resources/media/".concat(mediaId, ".rss")
    }
  };

  function CDCPlugin(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  CDCPlugin.prototype = {
    init: function init() {
      //var defaults   = this._defaults,
      var t = this;
      t.parseAttributes(t);
    },
    parseAttributes: function parseAttributes(t) {
      var $parents = $("div[data-mediaid][data-url]"),
          feedUrl,
          parseFeed;
      $parents.each(function (i, e) {
        // Assign this parent for parse/append reference
        var $parent = $(e); // Set up an Options Obj from data-attrs

        var feedOptions = {
          mediaId: $(e).attr("data-mediaid"),
          entries: $(e).attr("data-entries"),
          header: $(e).attr("data-header"),
          title: $(e).attr("data-title"),
          url: $(e).attr("data-url"),
          cdcUrl: $(e).attr("data-cdc-url"),
          cdcTitle: $(e).attr("data-cdc-title")
        }; // Check media id to append correct feed endpoint (Podcast Url or CS Url)

        feedUrl = 1000 > parseInt(feedOptions.mediaId, 10) ? "https://www2c.cdc.gov/podcasts/feed.asp?feedid=".concat(feedOptions.mediaId) : "https://tools.cdc.gov/api/v2/resources/media/".concat(feedOptions.mediaId, ".rss"); // Check endpoint to parse correct social source (Facebook, Twitter)

        $.ajax({
          url: feedUrl,
          jsonp: "callback",
          dataType: "jsonp",
          data: {
            format: "json"
          },
          success: function success(feed) {
            parseFeed = feed; // Is it a Facebook feed?

            if (parseFeed.hasOwnProperty('data')) {
              t.parseFacebook($parent, feed, feedOptions);
            } else if (parseFeed.hasOwnProperty('statuses')) {
              // Is it a Twitter feed?
              t.parseTwitter($parent, feed, feedOptions);
            } else {
              console.log("Cannot parse Social Media Feed!");
            }
          }
        });
      });
    },
    parseFacebook: function parseFacebook($parent, feed, feedOptions) {
      var t = this; // Regex for link styling

      var _urlExpression = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,
          _mentionExpression = /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:(?:@|＠)(?!\/))([a-zA-Z0-9/_]{1,15})(?:\b(?!@|＠)|$)/gim,
          _regex,
          _post; // Actual Markup of Component


      var wrapperMarkup = "\n\t\t\t\t<div class=\"cdc-mod cdc-socialMedia\">\n\t\t\t\t\t<div class=\"socialMediaFeeds mb-3 card col-md-12\">\n\n\t\t\t\t\t\t<div class=\"socl-hd card-header\">\n\t\t\t\t\t\t\t<span class=\"x24 float-left fill-tw cdc-icon-fb-round\"></span>\n\t\t\t\t\t\t\t<h4 class=\"float-left\">".concat(feedOptions.header, "</h4>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"facebook-feed-entry card-body\">\n\n\t\t\t\t\t\t\t<div class=\"socl-loader-graphic\"></div>\n\t\t\t\t\t\t\t<div class=\"socl-bd\">\n\t\t\t\t\t\t\t\t<div class=\"socl-comment-wrap\">\n\t\t\t\t\t\t\t\t\t<div class=\"socl-avatar\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"socl-img\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"socl-comment-text\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"feed-header\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"").concat(feedOptions.url, "\">").concat(feedOptions.title, "</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t\t\t<a class=\"td-ul td-ul-none-hover\" href=\"").concat(feedOptions.cdcUrl, "\">").concat(feedOptions.cdcTitle, "</a>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t"); // Append Dynamic Wrapper Markup

      $parent.append(wrapperMarkup); // Parse and Append Each "post"

      for (var i = 0; i < feed.data.length && i < feedOptions.entries; i++) {
        // Regex URLs
        _post = feed.data[i].message;
        _regex = new RegExp(_urlExpression);

        if (_post.match(_regex)) {
          _post = _post.replace(_regex, '<a href="$1">$1</a>');
        }

        var postMarkup = "\n\t\t\t\t\t<div class=\"post\">\n\t\t\t\t\t\t".concat(_post, "\n\t\t\t\t\t</div>"); // Prepend posts

        $($parent).find(".facebook-feed-entry .socl-comment-text").append(postMarkup);
      }
    },
    parseTwitter: function parseTwitter($parent, feed, feedOptions) {
      var t = this; // Regex for @mentions and link styling

      var _urlExpression = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,
          _mentionExpression = /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:(?:@|＠)(?!\/))([a-zA-Z0-9/_]{1,15})(?:\b(?!@|＠)|$)/gim,
          _regex,
          _post; // Actual Markup of Component


      var wrapperMarkup = "\n\t\t\t\t<div class=\"cdc-mod cdc-socialMedia\">\n\t\t\t\t\t<div class=\"socialMediaFeeds mb-3 card col-md-12\">\n\n\t\t\t\t\t\t<div class=\"socl-hd card-header\">\n\t\t\t\t\t\t\t<span class=\"x24 float-left fill-fb cdc-icon-fb-round\"></span>\n\t\t\t\t\t\t\t<h4 class=\"float-left\">".concat(feedOptions.header, "</h4>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"twitter-feed-entry card-body\">\n\n\t\t\t\t\t\t\t<div class=\"socl-loader-graphic\"></div>\n\t\t\t\t\t\t\t<div class=\"socl-bd\">\n\t\t\t\t\t\t\t\t<div class=\"socl-comment-wrap\">\n\t\t\t\t\t\t\t\t\t<div class=\"socl-avatar\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"socl-img\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"socl-comment-text\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"feed-header\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"").concat(feedOptions.url, "\">").concat(feedOptions.title, "</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t\t\t<a class=\"td-ul td-ul-none-hover\" href=\"").concat(feedOptions.cdcUrl, "\">").concat(feedOptions.cdcTitle, "</a>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t"); // Append Dynamic Wrapper Markup

      $parent.append(wrapperMarkup); // Regex for @mentions and link styling

      for (var i = 0; i < feed.statuses.length && i < feedOptions.entries; i++) {
        // if this is a retweet, use the retweet text and prepend the RT @ screenname
        if ('undefined' !== typeof feed.statuses[i].retweeted_status) {
          _post = 'RT @' + feed.statuses[i].retweeted_status.user.screen_name + ': ' + feed.statuses[i].retweeted_status.text;
        } else {
          _post = feed.statuses[i].text;
        }

        _regex = new RegExp(_urlExpression);

        if (_post.match(_regex)) {
          _post = _post.replace(_regex, '<a href="$1">$1</a>');
        } // Regex @Mentions


        _regex = new RegExp(_mentionExpression);

        if (_post.match(_regex)) {
          _post = _post.replace(_regex, ' <a href="https://twitter.com/$1">@$1</a> ');
        }

        var postMarkup = "\n\t\t\t\t\t<div class=\"post\">\n\t\t\t\t\t\t".concat(_post, "\n\t\t\t\t\t</div>"); // Prepend posts

        $($parent).find(".twitter-feed-entry .socl-comment-text").append(postMarkup);
      }
    }
  }; // don't let the plugin load multiple times

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new CDCPlugin(this, options));
      }
    });
  };
})(jQuery, window, document);
'use strict';
/**
 * tp-4th-level-nav.js
 * @fileOverview Contains module for 4th level nav controls
 * @version 0.2.0.0
 * @copyright 2018 Centers for Disease Control
 */

(function ($, window, document, undefined) {
  var pluginName = 'cdc_levelnav',
      defaults = {
    parent: null,
    toggle: true,
    navigationTitle: 'Related Pages',
    classes: ''
  },
      navOptions = {};
  var vps = ['unknown', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      vp = '',
      viewport;

  function CDCPlugin(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  CDCPlugin.prototype = {
    init: function init(options) {
      // Replacing references to window.pageOptions.navigation, instead, passing this in app init with the rest of the initializations
      navOptions = options || false; //var defaults = this._defaults;

      this.bindEvents();
      vp = window.CDC.tp4.public.getViewport();
      viewport = vps.indexOf(vp);
      this.checkViewport(); // this.pullFourthLevelNavItems();

      var t = this;

      if (window.pageOptions.navigation.hasOwnProperty('showFourthLevel') && false === window.pageOptions.navigation.showFourthLevel) {
        $('.fourth-level-nav').remove();
        return false;
      } // Toggle once on load to make it start collapsed - doing this in a Bootstrap 4 friendly way


      if (window.pageOptions.navigation.hasOwnProperty('fourthLevelCollapsed') && true === window.pageOptions.navigation.fourthLevelCollapsed) {
        //$( '.card-header' ).attr('data-toggle', 'true');
        $('.tp-related-pages .collapse-link').trigger('click');
      }

      t.addFourthLevelTitle();
      t.addFourthLevelClasses();
    },
    addFourthLevelTitle: function addFourthLevelTitle() {
      var t = this,
          navigationTitle = t._defaults.navigationTitle;

      if (window.pageOptions.navigation.hasOwnProperty('fourthLevelNavTitle')) {
        navigationTitle = window.pageOptions.navigation.fourthLevelNavTitle;
        $('.fourth-level-nav .card-header .h4').text(navigationTitle);
      }
    },
    addFourthLevelClasses: function addFourthLevelClasses() {
      var t = this,
          classes = t._defaults.classes;

      if (window.pageOptions.navigation.hasOwnProperty("fourthLevelNavStyle")) {
        classes = window.pageOptions.navigation.fourthLevelNavStyle;
      } // $('.fourth-level-nav').addClass(classes);
      // Build Fourth Level after navOptions are set


      t.pullFourthLevelNavItems(classes);
    },
    bindEvents: function bindEvents() {
      var t = this;
      $(window).on('resize orientationchange', window.CDC.Common.debounce(function () {
        // 100% on L, XL, XXL
        // XS, S, M COLLAPSED
        vp = window.CDC.tp4.public.getViewport();
        viewport = vps.indexOf(vp);
        t.checkViewport();
      }, 250));
      $('.collapse-link').on('click', function (e) {
        var leftOrBottom = -1 < $.inArray(CDC.tp4.public.getViewport(), [1, 2, 3]) ? 'bottom' : 'left';
        $(this).trigger('metrics-capture', [leftOrBottom + '-nav-expand-collapse', $(this).parent('a').hasClass('nav-plus') ? 'expand' : 'collapse']);
        t.togglePlusMinus($(this));
      });
    },
    togglePlusMinus: function togglePlusMinus(element) {
      //https://websupport.cdc.gov/browse/WCMSRD-6193
      // element.text( element.text() == 'show' ? 'hide' : 'show' );
      var iconMinus = "M19,13H5V11H19V13Z";
      var iconPlus = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";

      if (element.hasClass('nav-plus')) {
        element.removeClass('nav-plus').addClass('nav-minus');
        element.find('.cdc-icon-plus').css('transform', 'rotate(-180deg)').removeClass('cdc-icon-plus').addClass('cdc-icon-minus');
        element.find('svg title').text('collapse');
        element.find('svg path').attr('d', iconMinus);
        element.find('title').text('collapse');
      } else if (element.hasClass('nav-minus')) {
        element.removeClass('nav-minus').addClass('nav-plus');
        element.find('.cdc-icon-minus').css('transform', 'rotate(0deg)').removeClass('cdc-icon-minus').addClass('cdc-icon-plus');
        element.find('svg title').text('expand');
        element.find('svg path').attr('d', iconPlus);
        element.find('title').text('plus');
      }
    },
    pullFourthLevelNavItems: function pullFourthLevelNavItems(classes) {
      var $nav = $('ul.tp-nav-main'),
          $currentPlacement = $('ul.tp-nav-main a[href="' + window.location.pathname + '"]'),
          fourthListType = 'ul';

      if (classes.length) {
        fourthListType = -1 < classes.indexOf('ordered-list') ? 'ol' : 'ul';
      } else {
        classes = 'block-list';
      }

      if ($($currentPlacement.parents('li').first()[0]).hasClass('nav-lvl3') || $($currentPlacement.parents('li').first()[0]).hasClass('nav-lvl4')) {
        if ($($currentPlacement.parents('li').first()[0]).hasClass('nav-lvl4')) {
          $currentPlacement = $currentPlacement.parents('li.nav-lvl4').first();
          $currentPlacement.parents('.nav-lvl3').first().addClass('selected');
        }

        var $fourthLevelItems = $currentPlacement.parents('li').first().children('ul').children('li');
        $fourthLevelItems = $fourthLevelItems.clone();
        $fourthLevelItems.removeClass('list-group-item');

        if ($fourthLevelItems.length) {
          $('.fourth-level-nav').removeClass('d-none');
        }

        var target = $('.fourth-level-nav .card-body');

        if (5 < $fourthLevelItems.length) {
          classes += ' cc-md-2 lsp-out';
        }

        $('<' + fourthListType + '/>', {
          class: classes
        }).appendTo(target);
        $('.fourth-level-nav ' + fourthListType).append($fourthLevelItems);
      }
    },
    checkViewport: function checkViewport() {
      vp = window.CDC.tp4.public.getViewport();
      viewport = vps.indexOf(vps[vp]);
      var iconMinus = "M19,13H5V11H19V13Z";
      var iconPlus = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";

      if (4 > viewport) {
        $('.tp-related-pages .collapse').removeClass('show').addClass('hide');

        if ($('.tp-related-pages .collapse-link').length) {
          var plusIconElement = $('.tp-related-pages .collapse-link');
          plusIconElement.removeClass('nav-minus').addClass('nav-plus');
          plusIconElement.find('.cdc-icon-minus').css('transform', 'rotate(0deg)').removeClass('cdc-icon-minus').addClass('cdc-icon-plus');
          plusIconElement.find('svg title').text('expand');
          plusIconElement.find('svg path').attr('d', iconPlus);
          plusIconElement.find('title').text('plus'); // $('.tp-related-pages .collapse-link').text( $('.tp-related-pages .collapse-link').text() == 'show' ? 'hide' : 'hide' );
        }
      } else {
        $('.tp-related-pages .collapse').removeClass('hide').addClass('show');

        if ($('.tp-related-pages .collapse-link').length) {
          var minusIconElement = $('.tp-related-pages .collapse-link');
          minusIconElement.removeClass('nav-plus').addClass('nav-minus');
          minusIconElement.find('.cdc-icon-plus').css('transform', 'rotate(-180deg)').removeClass('cdc-icon-plus').addClass('cdc-icon-minus');
          minusIconElement.find('svg title').text('collapse');
          minusIconElement.find('svg path').attr('d', iconMinus);
          minusIconElement.find('title').text('minus'); // $('.tp-related-pages .collapse-link').text( $('.tp-related-pages .collapse-link').text() == 'hide' ? 'show' : 'show' );
        }
      }
    }
  }; // don't let the plugin load multiple times

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new CDCPlugin(this, options));
      }
    });
  };
})(jQuery, window, document);
'use strict';
/**
 * audio.js
 * @fileOverview Event handling for the HTML5 audio control
 * @version 0.4.0.1
 * @copyright 2018 Centers for Disease Control
 */

(function ($, window, document, undefined) {
  var pluginName = "audioly",
      defaults = {
    element: ''
  },
      vps = ['unknown', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      vp = '',
      viewport;

  function CDCPlugin(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  CDCPlugin.prototype = {
    init: function init() {
      //var defaults = this._defaults;
      defaults.this = this;
      defaults.element = this.element;
      defaults.status = 0;
      defaults.isPlaying = false;
      this.bindControls();
      this.bindEvents();
      vp = window.CDC.tp4.public.getViewport();
      viewport = vps.indexOf(vp);
      this.checkViewport();
      defaults.element.addEventListener('timeupdate', function (e) {
        var currentTime = e.target.currentTime,
            duration = e.target.duration;
        $(e.target).parents('.audio-container').find('.scrub-range-slider').val(currentTime);
        $(e.target).parents('.audio-container').find('.scrub-range-slider').attr('max', duration);
      });
    },
    reset: function reset() {
      defaults.element.addEventListener('timeupdate', function (e) {
        var currentTime = e.target.currentTime,
            duration = e.target.duration;
        $(e.target).parents('.audio-container').find('.scrub-range-slider').val(currentTime);
        $(e.target).parents('.audio-container').find('.scrub-range-slider').attr('max', duration);
      });
    },
    bindEvents: function bindEvents() {
      var t = this;
      $(window).on('resize orientationchange', window.CDC.Common.debounce(function () {
        vp = window.CDC.tp4.public.getViewport();
        t.checkViewport();
      }, 250));
    },
    checkViewport: function checkViewport() {
      this.reset();
    },
    bindControls: function bindControls() {
      var isDragging = false,
          isMute = false,
          curVol = 0.5,
          $audio;
      $('.btn-play').on('click', function () {
        if (defaults.isPlaying) {
          defaults.this.pause($(this));
          defaults.isPlaying = false;
        } else {
          defaults.this.play($(this));
          defaults.isPlaying = true;
        }
      });
      $('.btn-stop').on('click', function () {
        defaults.this.stop($(this));
        defaults.isPlaying = false;
      });
      $('.btn-restart').on('click', function () {
        $audio = $(this).parents('.audio-container').find('audio')[0];
        $audio.currentTime = 0;
        defaults.this.goto($audio, 0);
        defaults.isPlaying = false;
      });
      $('.btn-back-5').on('click', function () {
        $audio = $(this).parents('.audio-container').find('audio')[0];
        $audio.currentTime -= 5;
        defaults.this.goto($audio, $audio.currentTime - 5);
      });
      $('.btn-forward-5').on('click', function () {
        $audio = $(this).parents('.audio-container').find('audio')[0];
        $audio.currentTime += 5;
        defaults.this.goto($audio, $audio.currentTime + 5);
      });
      $('.btn-back-1').on('click', function () {
        $audio = $(this).parents('.audio-container').find('audio')[0];
        $audio.currentTime -= 1;
        defaults.this.goto($audio, $audio.currentTime - 1);
      });
      $('.btn-forward-1').on('click', function () {
        $audio = $(this).parents('.audio-container').find('audio')[0];
        $audio.currentTime += 1;
        defaults.this.goto($audio, $audio.currentTime + 1);
      });
      $('.btn-volume-up').on('click', function () {
        defaults.this.volume('up');
      });
      $('.btn-volume-down').on('click', function () {
        defaults.this.volume('down');
      });
      $('.btn-volume-toggle').on('click', function () {
        if (!isMute) {
          $(this).parents('.audio-container').find('audio')[0].volume = 0;
        } else {
          $(this).parents('.audio-container').find('audio')[0].volume = curVol;
        }

        $(this).find('.fi').toggleClass('cdc-icon-volume cdc-icon-volume-mute');
        isMute = !isMute;
      });
      $('.volume-range-slider').on('change', function () {
        $(this).parents('.audio-container').find('audio')[0].volume = $(this).val() / 10;
        curVol = $(this).val() / 10;
      });
      $('.scrub-range-slider').on('mousedown', function () {
        isDragging = false;
      }).on('mousemove', function () {
        isDragging = true; // pause
      }).on('mouseup', function () {
        var wasDragging = isDragging;
        isDragging = false;

        if (!wasDragging) {// console.log( 'stopped dragging' );
        }

        defaults.this.goto($(this).parents('.audio-container').find('audio')[0], $(this).val());
      });
    },
    play: function play(t) {
      t.parents('.audio-container').find('audio')[0].play();
      t.find('.fi').toggleClass('cdc-icon-cdc-play cdc-icon-pause');
      var otherAudio = $(document).find('audio').not(t.parents('.audio-container').find('audio')[0]);

      for (var i = 0; i < otherAudio.length; i++) {
        otherAudio[i].pause();
      }

      var otherSections = $(document).find('.audio-container').not(t.parents('.audio-container'));

      for (var i = 0; i < otherSections.length; i++) {
        // $( otherSections[i] ).find( '.btn-play use' )[0].href.baseVal = "#play";
        $(otherSections[i]).find('.fi').toggleClass('cdc-icon-cdc-play cdc-icon-pause');
      }

      defaults.isPlaying = true;
    },
    pause: function pause(t) {
      t.parents('.audio-container').find('audio')[0].pause();
      t.find('.fi').toggleClass('cdc-icon-cdc-play cdc-icon-pause');
    },
    stop: function stop(t) {
      t.parents('.audio-container').find('audio')[0].pause();
      t.parents('.audio-container').find('audio')[0].currentTime = 0;
      t.siblings('.btn-play').find('.fi').removeClass('cdc-icon-pause').addClass('cdc-icon-cdc-play');
      defaults.status = 0;
    },
    goto: function goto(audio, time) {
      audio.currentTime = time;
    },
    volume: function volume(direction) {
      var volume = defaults.element.volume;

      if ('up' === direction) {
        if (1 <= Math.round(10 * volume) / 10) {
          defaults.element.volume = 1;
        } else {
          defaults.element.volume += 0.1;
        }
      } else if (0 >= Math.round(10 * volume) / 10) {
        defaults.element.volume = 0;
      } else {
        defaults.element.volume -= 0.1;
      }
    }
  }; // don't let the plugin load multiple times

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new CDCPlugin(this, options));
      }
    });
  };
})(jQuery, window, document);
'use strict';
/**
 * tp-carousel.js
 * @fileOverview Wrapper for slick-slider.js which encapsulates TP4 business logic and implements slick based on those rules; additionally simplifying markup across slider types by normalizing with data attributes, etc.
 * @version 0.1.0.0
 * @copyright 2018 Centers for Disease Control
 */

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($, window, document, undefined) {
  var initLimit = 6,
      // Max Number of sliders which will be initialized on a page (at a time at least, per call to $('.selector').cdcCarousel('init'));
  methods = {},
      privateMethods = {},
      maxScreenWidth = Math.max(window.screen.width, window.innerWidth),
      loggingEnabled = false,
      globalListenersSet = false,
      lessThanBreakPoint = 992,
      bodyElement = $('body');

  privateMethods.initGlobalListeners = function () {
    if (!globalListenersSet) {
      globalListenersSet = true; // Auto Expand/collapse captions on resize

      bodyElement.on('click', '.caption-toggle', function (e) {
        e.preventDefault();
        methods.log('slider.logic.trace.caption-toggle-click');
        var $this = $(this),
            $currentSlider = $this.hasClass('slick-slider') ? $this : $this.parents('.slick-slider').first(); // Handle direct and indirect selection

        $currentSlider.cdcCarousel('captionToggle');
        return false;
      }); // Capture interaction metrics for slick sliders

      bodyElement.on('click', '.caption-toggle', function (e) {
        if ('true' === $(this).attr('aria-expanded')) {
          $(this).trigger('metrics-capture', ['caption-toggle', 'open']);
        } else {
          $(this).trigger('metrics-capture', ['caption-toggle', 'close']);
        }
      });

      var sliderWidth,
          swipeStartX,
          swipeEndX,
          swipeDirection,
          sliderImages = document.querySelectorAll('.slide-content img'),
          setSwipeStartX = function setSwipeStartX(e) {
        var isTouchSwipe = Boolean(e.touches);
        swipeStartX = isTouchSwipe ? e.touches[0].clientX : e.clientX;
      },
          setSwipeEndX = function setSwipeEndX(e) {
        var isTouchSwipe = Boolean(e.changedTouches);
        swipeEndX = isTouchSwipe ? e.changedTouches[0].clientX : e.clientX;
      },
          getSwipeDirection = function getSwipeDirection(e) {
        var swipeOrDrag = e.changedTouches ? 'swipe' : 'mousedrag';
        swipeDirection = 'swipe threshold unmet';
        var $thisSlider = $(e.currentTarget).closest('[data-cdc-slider].slick-initialized'),
            thisSlider = $thisSlider[0],
            touchThreshold = thisSlider.slick.touchThreshold ? thisSlider.slick.touchThreshold : thisSlider.slick.defaults.touchThreshold;
        sliderWidth = thisSlider.clientWidth;
        var touchThresholdWidth = 1 / touchThreshold * sliderWidth;

        if (swipeStartX - swipeEndX >= touchThresholdWidth) {
          swipeDirection = 'swipeLeft';
          $(e.currentTarget).trigger('metrics-capture', ['slider-next', swipeOrDrag]);
        }

        if (swipeEndX - swipeStartX >= touchThresholdWidth) {
          swipeDirection = 'swipeRight';
          $(e.currentTarget).trigger('metrics-capture', ['slider-previous', swipeOrDrag]);
        } // console.log('swipeDirection:', swipeDirection);

      };

      $.each(sliderImages, function () {
        $(this).on('touchstart', setSwipeStartX, false);
      });
      $.each(sliderImages, function () {
        $(this).on('touchend', function (e) {
          setSwipeEndX(e);
          getSwipeDirection(e);
        }, false);
      }); // end touchscreen swipe events
      // capture metrics for mouse drag swipes

      $.each(sliderImages, function () {
        $(this).on('mousedown', setSwipeStartX, false);
      });
      $.each(sliderImages, function () {
        $(this).on('mouseup', function (e) {
          setSwipeEndX(e);
          getSwipeDirection(e);
        }, false);
      });
      bodyElement.on('click', '.slick-next', function (e) {
        $(this).trigger('metrics-capture', ['slider-next', 'click']);
      });
      bodyElement.on('click', '.slick-prev', function (e) {
        $(this).trigger('metrics-capture', ['slider-previous', 'click']);
      });
      bodyElement.on('click', '.slick-dots button', function (e) {
        $(this).trigger('metrics-capture', ['slider-bottom-buttons', 'click']);
      }); // Open video directly on smaller screens (vs. inside of a modal)

      bodyElement.on('click', '[data-target-type]', function (e) {
        var $thisLink = $(this);
        methods.log('slider.logic.trace.data-target-type.click', maxScreenWidth);

        if (maxScreenWidth < lessThanBreakPoint && 'video' === $thisLink.attr('data-target-type')) {
          e.preventDefault();
          window.location = $thisLink.attr('href'); // TODO? Log metrics?

          return false;
        }

        return;
      }); // the images will resize, so keep them normalized when that happens

      $(window).on('resize orientationchange', window.CDC.Common.debounce(function () {
        methods.log('slider.logic.trace.resize-orientationchange');
        $('[data-cdc-slider].slick-initialized').cdcCarousel('redraw');
        return true;
      }, 200));
    }

    return globalListenersSet;
  };

  methods.autoSetArrowTop = function (e) {
    methods.log('slider.logic.trace.data-arrow-position.start', 'enabled');
    this.each(function (index) {
      var $currentSlider = $(this),
          currentSlide,
          $currSlide,
          topValue = '50%',
          arrowPosition = $currentSlider.attr('data-arrow-position');

      if (arrowPosition && arrowPosition.length) {
        methods.log('slider.logic.trace.autoSetArrowTop', index, $currentSlider, 'data-arrow-position:' + arrowPosition);
        currentSlide = $currentSlider.slick('slickCurrentSlide');
        $currSlide = $('.slide-content', $currentSlider).eq(currentSlide + 1);

        switch (arrowPosition) {
          case 'fixed':
            methods.log('slider.logic.trace.data-arrow-position', 'mobile-view-managed:fixed', $currSlide);
            topValue = '60px';
            break;

          case 'image-middle':
            methods.log('slider.logic.trace.data-arrow-position', 'mobile-view-managed:image-middle', $currSlide);
            topValue = Math.ceil($currSlide.height() / 2);
            break;

          case 'shortest-image-middle':
            methods.log('slider.logic.trace.data-arrow-position', 'mobile-view-managed:shortest-image-middle', $currSlide);
            topValue = Math.ceil($currentSlider.find('.slide-content img.shortest').height() / 2);
            break;

          case 'tallest-image-middle':
            methods.log('slider.logic.trace.data-arrow-position', 'mobile-view-managed:tallest-image-middle', $currSlide);
            topValue = Math.ceil($currentSlider.find('.slide-content img.tallest').height() / 2);
            break;

          default:
            methods.log('slider.logic.trace.data-arrow-position', 'mobile-view-managed:fixed', $currSlide);
            topValue = '60px';
        }

        $currentSlider.find('.slick-arrow').css('top', topValue);
      } else {
        methods.log('slider.logic.trace.data-arrow-position', 'disabled');
      }
    });
    methods.log('slider.logic.trace.data-arrow-position.end');
    return this;
  };

  methods.captionToggle = function () {
    this.each(function () {
      var $currentSlider = $(this);
      methods.log('slider.logic.trace.captionToggle', $currentSlider); // Cleanup aria attributes after toggle

      $('a.caption-toggle', $currentSlider).attr('aria-expanded', $currentSlider.toggleClass('expand-captions').hasClass('expand-captions'));
    });
    this.cdcCarousel('redraw');
    return this;
  };

  methods.clearHeights = function () {
    this.each(function () {
      var $currentSlider = $(this);
      methods.log('slider.logic.trace.clearHeights', $currentSlider);

      if ('true' === $currentSlider.attr('data-equalize-images')) {
        $currentSlider.find('.slide-content img').height('auto');
      }

      if ('thumbnail-slider' === $currentSlider.attr('data-cdc-slider')) {
        // Thumbnail Sliders
        $currentSlider.find('.slide-content h3, .slide-caption-content, .slide-caption-icon-container, .slide-caption').height('auto');
      } // RESET ALL HEIGHTS


      $currentSlider.find('.slick-track, .slick-slide, .slide-content').height('auto');
    });
    return this;
  };

  methods.equalizeHeight = function (strictMin, strictMax) {
    strictMin = strictMin || 0;
    strictMax = strictMax || 9999999;
    var maxHeight = strictMin; //alert(maxHeight + "|" + this.length);

    methods.log('equalizeHeight selection', this);
    this.each(function () {
      var thisHeight = $(this).height();

      if (thisHeight > maxHeight) {
        if (thisHeight <= strictMax) {
          maxHeight = thisHeight;
        } else {
          maxHeight = strictMax;
        }
      }
    });
    return this.each(function () {
      var $this = $(this);
      $this.height(maxHeight);
    });
  };

  methods.iconPaddingFix = function () {
    // Loop Sliders
    this.each(function () {
      var $thisSlider = $(this); // Loop Slides

      $thisSlider.find('.slide-caption-icon-container').each(function () {
        // Fix Classes as needed
        $(this).parents('.slide-caption').addClass('slide-caption-has-icon');
      });
    });
    return this;
  };

  methods.init = function (defaultOverrides) {
    defaultOverrides = defaultOverrides || {};
    var objDefaults = {
      prevArrow: defaultOverrides.prevArrow || '<button type="button" class="slick-prev rounded-circle">Previous <span class="fi cdc-icon-prev" aria-hidden="true"></span></button>',
      nextArrow: defaultOverrides.nextArrow || '<button type="button" class="slick-next rounded-circle">Next <span class="fi cdc-icon-next" aria-hidden="true"></span></button>',
      largerViews: {
        slidesToShow: defaultOverrides.largerViews && defaultOverrides.largerViews.slidesToShow ? defaultOverrides.largerViews.slidesToShow : 4,
        slidesToScroll: defaultOverrides.largerViews && defaultOverrides.largerViews.slidesToScroll ? defaultOverrides.largerViews.slidesToScroll : 4,
        overlayDescriptions: defaultOverrides.largerViews && defaultOverrides.largerViews.overlayDescriptions ? defaultOverrides.largerViews.overlayDescriptions : true
      },
      smallerViews: {
        slidesToShow: defaultOverrides.smallerViews && defaultOverrides.smallerViews.slidesToShow ? defaultOverrides.smallerViews.slidesToShow : 1,
        slidesToScroll: defaultOverrides.smallerViews && defaultOverrides.smallerViews.slidesToScroll ? defaultOverrides.smallerViews.slidesToScroll : 1
      },
      multiSlider: defaultOverrides.multiSlider || true
    }; // Initialize Global Event Handlers / Listeners

    privateMethods.initGlobalListeners.call(this); // Pre-processing

    this.each(function (index) {
      // Do not allow initializing more than x sliders (good practice and performance based limit)
      if (index + 1 >= initLimit) {
        return this;
      }

      methods.log('slider.logic.trace.pre-processing');
      var $slider = $(this),
          // Get this element as $slider
      thisSliderId = $slider.attr('id') || 'tp-slider-' + index + 1; // Use Current or Generate an ID if none exists...
      // Set this sliders responsive breakpoint

      $slider.cdcCarousel('iconPaddingFix').cdcCarousel('initRespondToData').cdcCarousel('setMobileView');

      if (!$slider.hasClass('slick-initialized')) {
        // Set the ID of the slider
        $slider.attr('id', thisSliderId); // Set larger viewport display options

        var largerViews = {
          slidesToShow: $slider.attr('data-slides-to-show') ? parseInt($slider.attr('data-slides-to-show')) : objDefaults.largerViews.slidesToShow,
          slidesToScroll: $slider.attr('data-slides-to-scroll') ? parseInt($slider.attr('data-slides-to-scroll')) : objDefaults.largerViews.slidesToScroll,
          overlayDescriptions: $slider.attr('data-larger-overlay-description') ? 'true' === $slider.attr('data-larger-overlay-description') : objDefaults.largerViews.overlayDescriptions
        },
            // Set smaller viewport display options
        smallerViews = {
          slidesToShow: $slider.attr('data-smaller-slides-to-show') ? parseInt($slider.attr('data-smaller-slides-to-show')) : objDefaults.smallerViews.slidesToShow,
          slidesToScroll: $slider.attr('data-smaller-slides-to-scroll') ? parseInt($slider.attr('data-smaller-slides-to-scroll')) : objDefaults.smallerViews.slidesToScroll
        },
            // Set multi-slider mode
        sliderMode = $slider.attr('data-cdc-slider') ? $slider.attr('data-cdc-slider') : 'standard-slider',
            // Get mobile mode
        isMobileMode = $slider.hasClass('mobile-view'),
            // Get the slides in this $slider as $slides
        $slides = $('> div', $slider); // Determine shortest and tallest images, set respective classes on each

        $slides.find('img').cdcCarousel('shortestTallest'); // TODO Disable overlay ... this could be CSSd by attribute... vs addClass...

        if (!largerViews.overlayDescriptions) {
          $slider.addClass('description-overlay-off');
        } // Loop the slider, set the pagination data attribute for each


        $slides.each(function (slideindex) {
          var $currSlide = $(this),
              $slideH3 = $('h3', $currSlide),
              $slideCaptionContent = $currSlide.find('.slide-caption-content'),
              slideNumber = slideindex + 1,
              sliderCaptionId = thisSliderId + '-caption-' + slideNumber,
              linkWrap = '',
              ariaExpanded,
              collapseClass,
              h3Contents,
              hasTitle = $currSlide.find('.slide-caption').attr('data-has-title'),
              hasCaption = $currSlide.find('.slide-caption').attr('data-has-caption');

          if (isMobileMode) {
            ariaExpanded = 'false';
            collapseClass = 'collapse';
          } else {
            ariaExpanded = 'true';
            collapseClass = 'collapse show';
          }

          if ($currSlide.attr('data-modal-id')) {
            var targetType = $currSlide.attr('data-target-type') ? $currSlide.attr('data-target-type') : 'html'; // Propagate target-type to link for onclick behavior

            linkWrap = '<a data-toggle="modal" data-target-type="' + targetType + '" data-target="#' + $currSlide.attr('data-modal-id') + '" role="button" aria-expanded="' + ariaExpanded + '" aria-controls="' + sliderCaptionId + '" href="' + $currSlide.attr('data-target') + '"></a>';
          } else if ($currSlide.attr('data-target')) {
            // WCMSRD-6336: If link to a file, add target=new.
            var $found = $currSlide.find('.file-details').length;

            if (0 < $found) {
              linkWrap = '<a href="' + $currSlide.attr('data-target') + '" target="new"></a>';
            } else {
              linkWrap = '<a href="' + $currSlide.attr('data-target') + '"></a>';
            }
          }

          if (linkWrap.length) {
            $('.slide-content, .slide-caption-content', $currSlide).wrap(linkWrap);
          } // Update caption header


          h3Contents = '' === $slideH3.html() ? ' ' : $slideH3.html(); //make title smaller

          $slideH3.addClass('h4'); // Add paging text data attribute

          $slideH3.attr('data-slide-page-text', slideNumber + ' of ' + $slides.length); // Update contents to include link wrap (so clicking h3 will activate target)

          if ('' === linkWrap) {
            $slideH3.html(h3Contents);
          } else {
            $slideH3.html($(linkWrap).append(h3Contents));
          } // Is there a caption to expand / collapse?


          if ($slideCaptionContent.length && !$slideCaptionContent.is(':empty') && 'true' === hasCaption) {
            // Add caption toggle element
            $slideH3.append('<a class="float-right caption-toggle" href="#' + thisSliderId + '" role="button" aria-expanded="' + ariaExpanded + '" aria-controls="' + sliderCaptionId + '"><svg class="plus" viewBox="0 0 24 24"><title>expand</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg><svg class="minus" viewBox="0 0 24 24"><title>collapse</title><path d="M19,13H5V11H19V13Z"></path></svg></a>');
          } //don't show the overlay caption on desktop if no title or caption


          if ('false' === hasTitle && 'false' === hasCaption) {
            $currSlide.find('.slide-caption').addClass('d-lg-none');
          } //also if no title then remove the pipe after the number of slides on mobile


          if ('false' === hasTitle) {
            $slideH3.addClass("no-title");
          } // Add ID and toggle class to caption content for toggle purposes


          $slideCaptionContent.attr('id', sliderCaptionId).addClass(collapseClass);
        }); // Setup on init listener

        $slider.on('init', function ()
        /* event, slick */
        {
          methods.log('slider.logic.trace.carousel-init'); // Thread this to allow the slick slider time to finish initialize
          // If not done, a race condition ensues which wrecks this process...

          window.setTimeout(function () {
            $slider.cdcCarousel('redraw');
          }, 0);
        }); // Stops videos from playing on close

        $('.modal-video-container [data-dismiss="modal"]').on('click', function () {
          $(this).parents('.modal').find('.modal-body iframe').each(function () {
            this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
          });
        }); // Setup after change listener

        $slider.on('afterChange', function ()
        /* event, slick */
        {
          methods.log('slider.logic.trace.carousel-afterChange');
          $slider.cdcCarousel('autoSetArrowTop');
        }); // Save View Changes to element

        $slider.data('lvSlidesToShow', largerViews.slidesToShow);
        $slider.data('lvSlidesToScroll', largerViews.slidesToScroll);
        $slider.data('svSlidesToShow', smallerViews.slidesToShow);
        $slider.data('svSlidesToScroll', smallerViews.slidesToScroll); // Handle Slick Initialization by Slider Mode

        switch (sliderMode.toLowerCase()) {
          case 'carousel-slider':
            methods.log('slider.logic.trace.carousel-slider'); // Yes, create the navigational thumbnail slider

            var thisNavSliderId = 'tp-nav-slider-' + index + 1,
                $sliderNav = $slider.clone().addClass('slider-nav').attr('id', thisNavSliderId).cdcCarousel('initRespondToData'); // Clear unnecessary ids from slide captions

            $sliderNav.find('.slide-caption-content').removeAttr('id'); // Insert it directly after the main/regular $slider

            $slider.after($sliderNav).addClass('slider-for').slick({
              // Default for all viewports
              adaptiveHeight: $slider.attr('data-adaptive-height') ? 'true' === $slider.attr('data-adaptive-height') : false,
              arrows: false,
              //asNavFor: '#' + thisNavSliderId,
              infinite: $slider.attr('data-scroll-infinite') ? 'true' === $slider.attr('data-scroll-infinite') : true,
              lazyLoad: 'progressive',
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: objDefaults.prevArrow,
              nextArrow: objDefaults.nextArrow
            }); // On before slide change

            $sliderNav.on('init', function ()
            /*event, slick, currentSlide, nextSlide*/
            {
              // Are we initialized?
              if ($sliderNav.hasClass('slick-initialized')) {
                // Setup Thumbnail slider click behavior
                $('.slick-slide a', $sliderNav).off('click').click(function (e) {
                  e.preventDefault();
                  var slideno = $(this).parents('.slick-slide').first().attr('data-slick-index');
                  $slider.slick('slickGoTo', slideno);
                  $(this).trigger('metrics-capture', ['carousel-thumbnail-image', 'click', false]);
                  return false;
                });
                $('.slider-nav a').click(function (e) {
                  e.preventDefault();
                });
                window.setTimeout(function () {
                  $sliderNav.cdcCarousel('redraw');
                }, 0);
              }
            });
            $sliderNav.slick({
              lazyLoad: 'progressive',
              slidesToShow: largerViews.slidesToShow,
              slidesToScroll: largerViews.slidesToScroll,
              adaptiveHeight: $slider.attr('data-adaptive-height') ? 'true' === $slider.attr('data-adaptive-height') : false,
              arrows: $slider.attr('data-smaller-show-arrows') ? 'true' === $slider.attr('data-smaller-show-arrows') : true,
              dots: true,
              infinite: $slider.attr('data-scroll-infinite') ? 'true' === $slider.attr('data-scroll-infinite') : true,
              centerMode: $slider.attr('data-center-mode') ? 'true' === $slider.attr('data-center-mode') : false,

              /* Commenting this out prevents the main slider image from changing when the thumbnail slider is paged left and right.
              This is consitent with the TP3 functionality. That said, we are keeping the sync from parent to child which allows for
              syncing when the top slider is swiped left or right
              asNavFor: '#' + thisSliderId,
              */
              prevArrow: objDefaults.prevArrow,
              nextArrow: objDefaults.nextArrow
            });
            var checkSlides = parseInt($sliderNav.find('.slick-track .slick-slide').length);

            if (checkSlides === parseInt(largerViews.slidesToShow)) {
              $sliderNav.slick('slickSetOption', 'dots', 'false');
            } //THIS REMOVES ARIA-DESCRIBEDBY TO AVOID 508 ISSUES


            $sliderNav.children('.slick-list').children('.slick-track').children().each(function () {
              var $currentSlide = $(this);

              if (_typeof(undefined) !== _typeof($currentSlide.attr('aria-describedby')) && false !== $currentSlide.attr('aria-describedby')) {
                $currentSlide.removeAttr('aria-describedby');
              }
            });
            break;

          case 'thumbnail-slider':
            methods.log('slider.logic.trace.thumbnail-slider', largerViews.slidesToShow);
            $slider.addClass('slider-for').slick({
              // Default for all viewports
              lazyLoad: 'progressive',
              slidesToShow: largerViews.slidesToShow,
              slidesToScroll: largerViews.slidesToScroll,
              adaptiveHeight: $slider.attr('data-adaptive-height') ? 'true' === $slider.attr('data-adaptive-height') : false,
              arrows: $slider.attr('data-larger-show-arrows') ? 'true' === $slider.attr('data-larger-show-arrows') : true,
              prevArrow: objDefaults.prevArrow,
              nextArrow: objDefaults.nextArrow,
              infinite: $slider.attr('data-scroll-infinite') ? 'true' === $slider.attr('data-scroll-infinite') : true,
              centerMode: $slider.attr('data-center-mode') ? 'true' === $slider.attr('data-center-mode') : false,
              dots: true
            }); //THIS REMOVES ARIA-DESCRIBEDBY TO AVOID 508 ISSUES

            $('[data-cdc-slider="thumbnail-slider"]').children('.slick-list').children('.slick-track').children().each(function () {
              var $currentSlide = $(this);

              if (_typeof(undefined) !== _typeof($currentSlide.attr('aria-describedby')) && false !== $currentSlide.attr('aria-describedby')) {
                $currentSlide.removeAttr('aria-describedby');
              }
            });
            break;

          default:
            // case: 'standard-slider' (Single Slider)
            methods.log('slider.logic.trace.standard-slider');
            $slider.addClass('slider-for').slick({
              // Default for all viewports
              lazyLoad: 'progressive',
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: $slider.attr('data-adaptive-height') ? 'true' === $slider.attr('data-adaptive-height') : false,
              arrows: $slider.attr('data-smaller-show-arrows') ? 'true' === $slider.attr('data-smaller-show-arrows') : true,
              prevArrow: objDefaults.prevArrow,
              nextArrow: objDefaults.nextArrow
            }); //THIS REMOVES ARIA-DESCRIBEDBY TO AVOID 508 ISSUES

            $('[data-cdc-slider="standard-slider"]').children('.slick-list').children('.slick-track').children().each(function () {
              var $currentSlide = $(this);

              if (_typeof(undefined) !== _typeof($currentSlide.attr('aria-describedby')) && false !== $currentSlide.attr('aria-describedby')) {
                $currentSlide.removeAttr('aria-describedby');
              }
            });
            break;
        }
      }
    });
    return this;
  };

  methods.initRespondToData = function () {
    // Process Sliders
    this.each(function () {
      var $currentSlider = $(this);
      $currentSlider.data('responsiveLessThanBreakpoint', parseInt($currentSlider.attr('data-less-than-breakpoint')) || lessThanBreakPoint).data('respondTo', 'container' === $currentSlider.attr('data-respond-to') ? 'container' : 'screen');
    });
    return this;
  };

  methods.log = function () {
    if (loggingEnabled && arguments && arguments.length) {
      console.log.apply(this, arguments);
    }
  };

  methods.redraw = function (e) {
    // Process Sliders
    this.each(function () {
      var $currentSlider = $(this);
      $currentSlider.cdcCarousel('setMobileView').cdcCarousel('clearHeights').cdcCarousel('updateToMobileView').cdcCarousel('updateHeight').cdcCarousel('autoSetArrowTop');
    });
    return this;
  };

  methods.setLogging = function (blnEnabled) {
    loggingEnabled = blnEnabled || false;
    return loggingEnabled;
  };

  methods.setMobileView = function () {
    methods.log('slider.logic.trace.setMobileView.begin');
    this.each(function (index) {
      var $currentSlider = $(this); // setMobileView constantly errors on resize unless we wait for the slider to finish what it's doing before looking for the data

      setTimeout(function () {}, 500);
      var ltBreakpoint = $currentSlider.data('responsiveLessThanBreakpoint'),
          widthToUse = 'container' === $currentSlider.data('respondTo') ? $currentSlider.parent().width() : window.innerWidth; // console.log({
      //     slider: $currentSlider,
      //     respondTo: $currentSlider.data('respondTo'),
      //     sliderBreakpoint: ltBreakpoint,
      //     widthToUse: widthToUse,
      //     isMobile: widthToUse < ltBreakpoint
      // });

      if (widthToUse < ltBreakpoint) {
        $currentSlider.addClass('mobile-view');
      } else {
        $currentSlider.removeClass('mobile-view');
      }
    }); // After this runs, every decision point regarding responsive should be able to hinge on $(this).hasClass('mobile-view');...

    methods.log('slider.logic.trace.setMobileView.end');
    return this;
  };

  methods.shortestTallest = function () {
    var tmp = {
      shortest: 99999,
      shortIndex: 0,
      tallest: 0,
      tallIndex: 0
    }; // This is meant to be an optimization:
    // The idea is that if we find the talles and shortest image in the slider on init,
    // Then we can use that information (setting classes for tallest/shortest) to resize
    // and or set sizes, vs checking the height of each item on each resize, redraw, etc.

    methods.log('shortestTallest selection', this);
    this.each(function (index) {
      var thisHeight = $(this).height();

      if (thisHeight > tmp.tallest) {
        tmp.tallest = thisHeight;
        tmp.tallIndex = index;
      }

      if (thisHeight < tmp.shortest) {
        tmp.shortest = thisHeight;
        tmp.shortIndex = index;
      }
    });
    this.eq(tmp.shortIndex).addClass('shortest');
    this.eq(tmp.tallIndex).addClass('tallest');
    return this;
  };

  methods.updateHeight = function () {
    this.each(function () {
      var $currentSlider = $(this);
      methods.log('slider.logic.trace.updateHeight', $currentSlider);

      if ('true' === $currentSlider.attr('data-equalize-images')) {
        $currentSlider.find('.slide-content img').cdcCarousel('equalizeHeight');
      }

      if ('thumbnail-slider' === $currentSlider.attr('data-cdc-slider')) {
        // Equalize Slide Heights & Contents thereof
        $currentSlider.find('.slide-content').cdcCarousel('equalizeHeight');
        $currentSlider.find('.slide-content h3').cdcCarousel('equalizeHeight');
        $currentSlider.find('.slide-caption-content').cdcCarousel('equalizeHeight');
        $currentSlider.find('.slide-caption-icon-container').cdcCarousel('equalizeHeight');
        $currentSlider.find('.slide-caption').cdcCarousel('equalizeHeight');
      } // Standard and Carousel Sliders


      $currentSlider.find('.slick-slide').height($currentSlider.find('.slick-track').height());
    });
    return this;
  };

  methods.updateToMobileView = function () {
    var toggleMethodsAll = {
      carouselSlider: {
        largerView: function largerView($currentSlider, isNavSlider) {
          methods.log('largerView:isNavSlider', isNavSlider);
          $currentSlider.slick('slickSetOption', 'arrows', isNavSlider, true);
        },
        smallerView: function smallerView($currentSlider, isNavSlider) {
          methods.log('smallerView:isNavSlider', isNavSlider);
          $currentSlider.slick('slickSetOption', 'arrows', !isNavSlider, true);
        }
      },
      thumbnailSlider: {
        largerView: function largerView($currentSlider) {
          methods.log('$currentSlider.data', $currentSlider.data);
          $currentSlider.slick('slickSetOption', 'slidesToShow', $currentSlider.data('lvSlidesToShow'), false).slick('slickSetOption', 'slidesToScroll', $currentSlider.data('lvSlidesToScroll'), true).slick('slickSetOption', 'dots', true, true);
        },
        smallerView: function smallerView($currentSlider) {
          methods.log('$currentSlider.data', $currentSlider.data);
          $currentSlider.slick('slickSetOption', 'slidesToShow', $currentSlider.data('svSlidesToShow'), false).slick('slickSetOption', 'slidesToScroll', $currentSlider.data('svSlidesToScroll'), true).slick('slickSetOption', 'dots', false, true);
        }
      },
      standardSlider: {
        largerView: function largerView($currentSlider) {
          $currentSlider.slick('slickSetOption', 'dots', true, true);
        },
        smallerView: function smallerView($currentSlider) {
          $currentSlider.slick('slickSetOption', 'dots', false, true);
        }
      }
    };
    return function () {
      methods.log('slider.logic.trace.updateToMobileView', this);
      this.each(function () {
        var $currentSlider = $(this),
            isNavSlider = $currentSlider.hasClass('slider-nav'),
            sliderType = $currentSlider.attr('data-cdc-slider'),
            viewSelect = $currentSlider.hasClass('mobile-view') ? 'smallerView' : 'largerView';

        switch (sliderType) {
          case 'carousel-slider':
            toggleMethodsAll.carouselSlider[viewSelect].call(this, $currentSlider, isNavSlider);
            break;

          case 'thumbnail-slider':
            toggleMethodsAll.thumbnailSlider[viewSelect].call(this, $currentSlider);
            break;

          case 'standard-slider':
            toggleMethodsAll.standardSlider[viewSelect].call(this, $currentSlider);
            break;

          default:
            toggleMethodsAll.standardSlider[viewSelect].call(this, $currentSlider);
        }
      });
      return this;
    };
  }();

  $.fn.cdcCarousel = $.fn.cdcCarousel || function (methodOrOptions) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if ('object' === _typeof(methodOrOptions) || !methodOrOptions) {
      // Default to "init"
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + methodOrOptions + ' does not exist on jQuery.cdcCarousel');
    }
  };
})(jQuery, window, document);
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable complexity */
function slickInit(target, settings) {
  var t = target,
      s = settings || {},
      slik = null,
      bps = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440
  },
      defaults = {
    dots: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileCaption: true,
    // if we should show the caption in mobile
    mobileFirst: true,
    prevArrow: prev,
    nextArrow: next,
    enableAria: true,
    accessibility: true,
    focusOnSelect: false,
    ariaLabel: '',
    // label if a label target isn't defined
    ariaLabelTarget: '',
    // one or more IDs for the slider label, typically the heading proceeding it
    sliderType: 'standard',
    // new optional flag for handling standard vs video vs modal vs jumbotron sliders
    bodyClass: '',
    // new optional flag for setting bg color on card body
    sliderCss: '',
    // additional CSS on the slider
    sliderClass: '',
    // additional CSS class on the slider
    slideCss: '',
    // additional CSS on each slide
    slideClass: '',
    // additional CSS class on each slide
    callback: null,
    // callback function
    showStatus: false,
    // always show the slide status indicator?
    rows: 0 // force rows to be 0 unless specifically passed in

  };

  if (0 === $(target).length) {
    console.error('Slider ID not defined or found. Please make sure slickInit is called with a slider ID that exists on the page.');
    return;
  } // if we're always showing the status indicator, hide the dots


  if (s.showStatus) {
    s.dots = false;
  } // replace our default settings with whatever is passed in


  $.extend(true, defaults, s);

  if ('video' === defaults.sliderType) {
    handleVideo($(t), defaults);
  } else if ('modal' === defaults.sliderType) {
    handleModal($(t), defaults);
  } else if ('jumbotron' === defaults.sliderType) {
    if (3 < $(t).find('.jumbotron').length) {
      console.error('Jumbotron slider should have 3 or fewer images');
    }

    $(t).addClass('cdc-jumbotron-slider');
  } else if ('standard' === defaults.sliderType) {
    $(t).addClass('cdc-standard-slider');
  } else if ('carousel' === defaults.sliderType) {
    handleCarousel($(t), defaults);
  } else if ('video-carousel' === defaults.sliderType) {
    handleVideoCarousel($(t), defaults);
  } else if (0 === defaults.sliderType.trim.length) {
    // incase we need this, an empty string was passed in so default back to standard
    defaults.sliderType = 'standard';
    $(t).addClass('cdc-standard-slider');
  } else {
    console.warn('Unknown sliderType defined');
  }

  if (!defaults.mobileCaption) {
    $(t).addClass('cdc-no-mobile-caption');
  } // slides are treated a little differently in centerMode, flagging the slider here for use in CSS later


  if (defaults.centerMode) {
    $(t).addClass('cdc-centermode-slider');
  } // NOTE: the next two methods do basically the same thing,
  // EXCEPT we need to call init specifically in order to append the slider-status div
  // handling the appropriate events for tracking paging info


  $(t).on('init', function (event, slick, currentSlide, nextSlide) {
    handleInit($(this), slick, defaults);
  }); // handling the appropriate events for tracking paging info

  $(t).on('reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1,
        $t = $(this);
    $t.next('.cdc-slider-status').text(i + '/' + slick.slideCount);
  });
  $(t).on('breakpoint', function (event, slick, breakpoint) {
    // Optional: CSS we want to apply to each slide at breakpoint
    if ('' !== defaults.slideCss) {
      $(t).find('.slick-slide').css(defaults.slideCss);
    } // Optional: className we want to add at breakpoint


    if ('' !== defaults.slideClass) {
      $(t).find('.slick-slide').addClass(defaults.slideClass);
    } // Optional: CSS we want to apply to the slider at breakpoint


    if ('' !== defaults.sliderCss) {
      $(t).css(defaults.sliderCss);
    } // Optional: CSS we want to apply to each slide at breakpoint


    if ('' !== defaults.sliderClass) {
      $(t).addClass(defaults.sliderClass);
    }
  }); // handle metrics capture on events in the slider
  // handle any embedded videos
  // NOTE: nextSlide doesn't work in afterChange, so this was created

  $(t).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    handleBeforeChange($(this), event, slick, currentSlide, nextSlide);
  }); // initialize the slider with the settings

  $(t).slick(defaults); // ARIA

  if (defaults.enableAria) {
    // set aria-label on each CARD
    // remove aria-describedby on each CARD
    $(t).find('.card').each(function () {
      var c = $(this),
          title = c.find('.card-title'),
          titleText = 'UNDEFINED';

      if (title.length) {
        titleText = title.text().replace(/(\r\n|\n|\r)/gm, '');
        c.attr('aria-label', titleText);
      }

      c.removeAttr('aria-describedby'); // there's a ticket for this, where this aria attribute references nothing causing an aXe error in pageinfo, so the "fix" is to remove it
    }); // a target for the slider label

    if ('' !== defaults.ariaLabel) {
      $(t).attr('aria-label', defaults.ariaLabel);
    } else if ('' !== defaults.ariaLabelTarget) {
      $(t).attr('aria-labelledby', defaults.ariaLabelTarget);
    } else {
      console.error('ariaLabel or ariaLabelTarget must be set in slickInit settings');
    }
  } // TP4 class to add to the card body, should be background classes; e.g. .bg-whatever


  if ('' !== defaults.bodyClass) {
    $(t).find('.card-body').each(function () {
      var c = $(this);
      c.addClass(defaults.bodyClass);
    });
  } // Optional: CSS we want to apply to each slide at runtime


  if ('' !== defaults.slideCss) {
    if ('object' === _typeof(defaults.slideCss)) {
      $(t).find('.slick-slide').css(defaults.slideCss);
    } else {
      console.error('slideCss needs to be a JSON representation of a CSS string. E.g. {"border": "1px solid red"} ');
    }
  } // Optional: CSS class we want to apply to each slide at runtime


  if ('' !== defaults.slideClass) {
    // remove the first character if it's a dot
    var cn = '.' === defaults.slideClass[0] ? defaults.slideClass.substr(1) : defaults.slideClass;
    $(t).find('.slick-slide').addClass(cn);
  } // Optional: Classname we want to add to the slider at runtime


  if ('' !== defaults.sliderClass) {
    // remove the first character if it's a dot
    var classname = '.' === defaults.sliderClass[0] ? defaults.sliderClass.substr(1) : defaults.sliderClass;
    $(t).addClass(classname);
  } // Optional: CSS we want to apply to the slider at runtime


  if ('' !== defaults.sliderCss) {
    if ('object' === _typeof(defaults.sliderCss)) {
      $(t).css(defaults.sliderCss);
    } else {
      console.error('sliderCss needs to be a JSON representation of a CSS string. E.g. {"border": "1px solid red"} ');
    }
  } // Optional: callback function


  if (null !== defaults.callback) {
    defaults.callback($(t), defaults, slik);
  } // Optional: always display status


  if (true === defaults.showStatus) {
    $(t).next('.cdc-slider-status').addClass('d-block');
  }
}

function handleBeforeChange($t, event, slick, currentSlide, nextSlide) {
  var swipeOrDrag = event.changedTouches ? 'swipe' : 'mousedrag',
      direction = 'slider-prev'; // on the carousel slider, if the user navigates by sliding the top slider, update the thumbnail slider location

  if ($t.hasClass('cdc-carousel-slider')) {
    var cts = $('.cdc-carousel-thumbnail-slider'),
        step = 4;

    if (0 === nextSlide % step) {
      cts[0].slick.slickGoTo(nextSlide);
    }
  } // this was largely copied from existing code in TP4


  if (1 === Math.abs(nextSlide - currentSlide)) {
    direction = 0 < nextSlide - currentSlide ? 'slider-next' : 'slider-prev';
  } else {
    direction = 0 < nextSlide - currentSlide ? 'slider-prev' : 'slider-next';
  } // capture swipe/drag and direction to metrics


  $(event.currentTarget).trigger('metrics-capture', [direction, swipeOrDrag]); // if it's a play-in-place video slider

  if ($t.hasClass('cdc-video-slider')) {
    var embed = $('iframe.embed-responsive-item'); // if there's an embedded iframe

    if ($t.has(embed).length) {
      // stop all of the videos on navigation
      $('.embed-responsive-item').each(function () {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
      });
    }
  }
}

function handleInit($t, slick, defaults) {
  // append the slider status after the slider
  $t.after('<div class="cdc-slider-status" />'); // kick off the slider status count

  $t.next('.cdc-slider-status').text('1/' + slick.slideCount); // reduce the bottom space under the jumbotron

  if ('jumbotron' === defaults.sliderType) {
    $t.find('.slick-dots').css('bottom', '0');
  } // add a tabindex to the arrows to make them tabbable


  $t.find('.slick-arrow').attr('tabindex', 0); // handling number key events on the slider so the end user can use 1-0 to navigate or space/enter on arrows

  $t.on('keydown', function (e) {
    if (!isNaN(e.key) || null !== e.key) {
      // tab for the future!
      if ('tab' === e.key.toLowerCase()) {// metrics call
      } else if (' ' === e.key.toLowerCase() || 'enter' === e.key.toLowerCase()) {
        // click on the element that's the target of the action
        $(e.target).click();
      }

      var dots = $('.slick-dots li'),
          key = 0; // get the number - 1

      key = 0 === parseInt(e.key) ? 9 : parseInt(e.key) - 1; // if we have dots, try to click it

      if (dots.length) {
        $(dots[key]).click();
      }
    }
  }); // metrics on slider buttons

  $t.on('click', '.slider-next', function (e) {
    $(e.currentTarget).trigger('metrics-capture', ['slider-next', 'click']);
  });
  $t.on('click', '.slider-prev', function (e) {
    $(e.currentTarget).trigger('metrics-capture', ['slider-previous', 'click']);
  });
  $t.on('click', '.slick-dots button', function (e) {
    $(e.currentTarget).trigger('metrics-capture', ['slider-bottom-buttons', 'click']);
  });
} // clone the slider into a thumbnail slider, removing the card body


function handleCarousel($t, defaults) {
  var clone = $t.clone(),
      id = $t.attr('id') + '-clone';
  clone.attr('id', id);
  clone.find('.card-body').remove();
  $t.after(clone);
  var thumbnails = defaults.thumbnailsToShow || 4;
  slickInit('#' + id, {
    'sliderType': 'thumbnail',
    'bodyClass': '',
    'ariaLabel': '',
    'centerMode': false,
    'ariaLabelTarget': 'sliderLabel',
    'slidesToShow': thumbnails,
    'slidesToScroll': thumbnails,
    'slideCss': {
      'box-shadow': 'none',
      'margin': '0 3px'
    },
    'callback': function callback(slider) {
      slider.addClass('cdc-carousel-thumbnail-slider d-none d-lg-block');
      slider.find('.card').on('click', function () {
        var index = $(this).data('slick-index');
        $t[0].slick.slickGoTo(index);
      });
    },
    'responsive': [{
      'breakpoint': 1200,
      'settings': {
        'slidesToShow': thumbnails,
        'slidesToScroll': thumbnails
      }
    }, {
      'breakpoint': 992,
      'settings': {
        'slidesToShow': thumbnails,
        'slidesToScroll': thumbnails
      }
    }, {
      'breakpoint': 768,
      'settings': {
        'slidesToShow': 1,
        'slidesToScroll': 1
      }
    }, {
      'breakpoint': 576,
      'settings': {
        'slidesToShow': 1,
        'slidesToScroll': 1
      }
    }, {
      'breakpoint': 0,
      'settings': {
        'slidesToShow': 1,
        'slidesToScroll': 1,
        'centerPadding': '20px'
      }
    }]
  });
} // almost the same as the handleCarousel method, this one uses the URL of the YouTube video to create the card images in the thumbnail slider


function handleVideoCarousel($t, defaults) {
  var clone = $t.clone(),
      id = $t.attr('id') + '-clone';
  clone.attr('id', id);
  clone.find('.card-body').remove();
  $t.addClass('cdc-video-slider');
  var thumbnails = defaults.thumbnailsToShow || 4;
  clone.find('.embed-responsive').each(function () {
    var ct = $(this),
        iframe = ct.find('iframe'),
        src = iframe[0].src,
        regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
        videoId = src.match(regExp),
        cit = '';

    if (videoId && 11 === videoId[2].length) {
      cit = '<div class="card-img-wrap">' + playbtn + '<img alt="Card image cap" class="card-img-top" src="http://i.ytimg.com/vi/' + videoId[2] + '/mqdefault.jpg" /></div>';
    }

    ct.after(cit);
    ct.remove();
  });
  $t.after(clone); // init the thumbnail clone

  slickInit('#' + id, {
    'sliderType': 'thumbnail',
    'bodyClass': '',
    'ariaLabel': '',
    'centerMode': false,
    'ariaLabelTarget': 'sliderLabel',
    'slidesToShow': thumbnails,
    'slidesToScroll': thumbnails,
    'slideCss': {
      'box-shadow': 'none',
      'margin': '0 3px'
    },
    'callback': function callback(slider) {
      slider.addClass('cdc-carousel-thumbnail-slider d-none d-lg-block');
      slider.find('.card').on('click', function () {
        var index = $(this).data('slick-index');
        $t[0].slick.slickGoTo(index);
      });
    },
    'responsive': [{
      'breakpoint': 1200,
      'settings': {
        'slidesToShow': thumbnails,
        'slidesToScroll': thumbnails
      }
    }, {
      'breakpoint': 992,
      'settings': {
        'slidesToShow': thumbnails,
        'slidesToScroll': thumbnails
      }
    }, {
      'breakpoint': 768,
      'settings': {
        'slidesToShow': 1,
        'slidesToScroll': 1
      }
    }, {
      'breakpoint': 576,
      'settings': {
        'slidesToShow': 1,
        'slidesToScroll': 1
      }
    }, {
      'breakpoint': 0,
      'settings': {
        'slidesToShow': 1,
        'slidesToScroll': 1,
        'centerPadding': '20px'
      }
    }]
  });
}

function handleVideo($t, defaults) {
  // video slider
  $t.addClass('cdc-video-slider').find('.card-img-top').each(function () {
    var $tc = $(this),
        imgdata = $tc.data(); // if we have data attributes, add them to the footer we're creating here

    if (imgdata) {
      var footerhtml = '<div class="card-footer"><div class="video-links"><div class="video-transcript">';

      if (imgdata.transcriptUrl) {
        footerhtml += '<a class="nonHtml noDecoration" href="' + imgdata.transcriptUrl + '" target="new" tabindex="0"><span class="cdc-icon-pdf fill-pdf mr-1 ml-2"></span>View Transcript</a>';
      }

      if (imgdata.audioUrl) {
        footerhtml += '<a class="nonHtml noDecoration" href="' + imgdata.audioUrl + '" target="new" tabindex="0"><span class="cdc-icon-media fill-media mr-1 ml-2"></span>Audio Description</a>';
      }

      if (imgdata.lowresUrl) {
        footerhtml += '<a class="nonHtml noDecoration" href="' + imgdata.lowresUrl + '" target="new" tabindex="0"><span class="cdc-icon-video_01 mr-1 ml-2"></span>Low Resolution Video</a>';
      }

      footerhtml += '</div></div></div>';
      $tc.parent().find('.card-body').after(footerhtml);
    } // wrap the image so we can center the play button inside it
    // then handle clicking on it


    $tc.wrap('<div class="card-img-wrap" />').before(playbtn).add('.playbtn').on('click', function (e) {
      e.stopImmediatePropagation();
      var $c = $(this),
          video,
          newData; // if they clicked the play button instead of the video image

      if ($c.hasClass('playbtn')) {
        // set this to the video image
        $c = $c.next();
      } // remove the playbutton


      $c.prev('.playbtn').remove(); // get the data attributes from the image

      newData = $c.data();

      if ('' !== newData.videoId) {
        // define the video embed
        video = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + newData.videoId + '?enablejsapi=1&version=3&playerapiid=ytplayer" allow="" allowfullscreen=""></iframe></div>'; // replace the image with the video embed

        $c.replaceWith(video);
      } else {
        console.error('VIDEO ID is EMPTY or MISSING.');
      }
    });
  });
}

function handleModal($t, defaults) {
  // video MODAL slider
  $t.addClass('video-modal').find('.card-img-top').wrap('<div class="card-img-wrap" />').before(playbtn).add('.playbtn').on('click', function (e) {
    e.stopImmediatePropagation();
    var $tc = $(this),
        data; // if they clicked the play button instead of the video image

    if ($tc.hasClass('playbtn')) {
      // set this to the video image
      $tc = $tc.next();
    }

    data = $tc.data(); // show the modal with the video

    showModal(data);
  });
}
/* eslint-enable complexity */
// modal for the video popup


function showModal(data) {
  var output = '<div id="CDC_videoModal" class="modal fade z-supermax" tabindex="-1" role="dialog" aria-label="Video Modal" aria-hidden="true">';
  output += '<div class="modal-dialog modal-lg" >';
  output += '<div class="modal-content">';
  output += '<div class="modal-header" style="height: 66px"><button type="button" class="close rounded-circle" data-dismiss="modal" aria-label="Close"><span class="sr-only">Close</span><svg style="width:24px;height:24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path class="fill-w" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path></svg></button></div>';
  output += '<div class="modal-body">';
  output += '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + data.videoId + '?enablejsapi=1&version=3&playerapiid=ytplayer" allow="" allowfullscreen=""></iframe></div>';
  output += '</div>';
  output += '<div class="modal-footer fj-start">';
  output += '	<div class="video-links">';
  output += '	<div class="video-transcript">';

  if (data.transcriptUrl) {
    output += '<a class="nonHtml noDecoration" href="' + data.transcriptUrl + '" target="new"><span class="cdc-icon-pdf fill-pdf mr-1"></span>View Transcript</a>';
  }

  if (data.audioUrl) {
    output += '<a class="nonHtml noDecoration" href="' + data.audioUrl + '" target="new"><span class="ml-3 cdc-icon-media fill-media mr-1"></span>Audio Description</a>';
  }

  if (data.lowresUrl) {
    output += '<a class="nonHtml noDecoration" href="' + data.lowresUrl + '" target="new"><span class="ml-3 cdc-icon-video_01 mr-1"></span>Low Resolution Video</a>';
  }

  output += '</div>';
  output += '</div>';
  output += '</div>';
  output += '</div>';
  output += '</div>';
  output += '</div>';
  $('body').append(output);
  $('#CDC_videoModal').modal();
  $('#CDC_videoModal').modal('show'); // remove the modal, stops video playback, too!

  $('#CDC_videoModal').on('hidden.bs.modal', function (e) {
    $(this).remove();
  });
} // play button


var playbtn = '<img role="button" class="playbtn" alt="play video button" src="/TemplatePackage/4.0/assets/imgs/play.png" />'; // prev button

var prev = '<img role="button" class="slider-prev" src="/TemplatePackage/4.0/assets/imgs/left.png" alt="previous slide button">'; // next button

var next = '<img role="button" src="/TemplatePackage/4.0/assets/imgs/right.png" alt="next slide button" class="slider-next">';
"use strict";

(function ($, window, document, undefined) {
  $('.child-theme-mobile-menu-btn').click(function () {
    $('.yamm #navbar-collapse-grid').toggleClass('d-block');
    $('.child-theme-mobile-menu-btn').toggleClass('active');
    $('.child-theme-mobile-menu-btn .open-smallmenu').toggleClass('d-none');
    $('.child-theme-mobile-menu-btn .close-smallmenu').toggleClass('d-none');
    $('.mobile-overlay').toggleClass('d-none');
  });
})(jQuery, window, document);
'use strict';
/**
 * tp-collapse.js
 * @fileOverview Contains module and constructors to genrate collapse/accordions/tab functions
 * @version 0.2.0.0
 * @copyright 2018 Centers for Disease Control
 */

(function ($, window, document, undefined) {
  var $currentTab = "",
      $currentAccordion = "",
      pluginName = 'cdc_collapse',
      defaults = {
    parent: null,
    toggle: true
  };

  function CDCPlugin(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  CDCPlugin.prototype = {
    init: function init() {
      //var defaults = this._defaults;
      this.bindEvents();

      if (768 > $(window).width()) {
        this.buildAccordion();
      } else {
        this.buildTabs();
      }
    },
    buildAccordion: function buildAccordion() {
      $.each($('.tabs-module'), function (i, val) {
        var buildObj = {},
            tabModule = $(val),
            tabContainer = tabModule.parent(),
            tabLinks = tabModule.find('.nav-link'),
            tabPanes = tabModule.find('.tab-pane'),
            linksLength = tabLinks.length,
            accordionToggle = tabContainer.find('.accordion_toggle');

        if (!accordionToggle.length) {
          tabModule.hide(); // Build obj from Links

          for (var k = 0; k < linksLength; k++) {
            buildObj[k] = {
              'titleSafe': tabLinks[k].innerHTML.replace(/\s/g, ''),
              'title': tabLinks[k].innerHTML,
              'content': tabPanes[k].innerHTML
            };
          } // Build Accordion Wrapper


          accordionToggle = $('<div/>', {
            class: 'accordion indicator-plus accordion_toggle'
          });
          tabContainer.append(accordionToggle); // Build Accordion Cards

          $.each(buildObj, function (j) {
            var unique_item_num = i + '_' + j; //var titleId = buildObj[j].titleSafe.toLowerCase();

            var titleMarkup = '\n                                <a  class="card-title" data-toggle="collapse" data-target="#mobilecoll-item-' + unique_item_num + '" aria-expanded="false" aria-controls="mobilecoll-item-' + unique_item_num + '">\n                                <button class="btn btn-link" role="heading">' + buildObj[j].title + '</button>\n                                </a>\n                        ';
            var contentMarkup = '\n                            <div id="mobilecoll-item-' + unique_item_num + '" class="collapse" aria-labelledby="mobilecoll-item-' + unique_item_num + '" data-parent="#mobilecoll-item-' + unique_item_num + '">\n                                <div class="card-body">\n                                    ' + buildObj[j].content + '\n                                </div>\n                            </div>\n                        '; // #CARD

            $('<div/>', {
              id: 'card-mobilecoll-item' + unique_item_num,
              class: 'card'
            }).appendTo(accordionToggle); // #CARD HEADER

            $('<div/>', {
              id: 'heading-' + unique_item_num,
              'data-toggle': 'collapse',
              'data-target': '#mobilecoll-item-' + unique_item_num,
              'aria-expanded': 'false',
              'aria-controls': 'mobilecoll-item-' + unique_item_num,
              class: 'card-header collapsed',
              html: titleMarkup
            }).appendTo('#card-mobilecoll-item' + unique_item_num); // #CONTENT

            $('#card-mobilecoll-item' + unique_item_num).append(contentMarkup);
            $(accordionToggle).find('.collapse').first().addClass("show");
            $(accordionToggle).find(".card-header").first().removeClass("collapsed");
          });
        } else {
          accordionToggle.show();
          tabModule.hide();
        }

        if ($currentAccordion.length) {
          if ($("#heading-" + $currentAccordion).hasClass("collapsed")) {
            $("#heading-" + $currentAccordion).removeClass("collapsed").click();
          }
        }
      });
    },
    buildTabs: function buildTabs() {
      $('.tabs-module').show();
      $('.accordion_toggle').hide(); // this breaks the homepage nav, not sure what to do with this code, but the selector seems super-sloppy
      // $("a.nav-link[href='" + "#" + $currentTab.replace(/\s/g, '') + "']").click();
    },
    redirect: function redirect(hash) {
      // $( hash ).attr( 'aria-expanded', 'true' ).focus();
      // $( hash + '+div.collapse' ).addClass( 'show' ).attr( 'aria-expanded', 'true' );
      // $( hash + '+div.collapse' ).collapse( 'show' );
      var sanitizedHash = $.escapeSelector(window.location.hash.substr(1)); // if we have a hash and it exists on the page... else kick us back out

      if (0 === $('#' + sanitizedHash).length) {
        return;
      }

      $('.nav-tabs a[href="' + window.location.hash.replace('tab', "") + '"]').tab('show'); // using this because of static nav bar space

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 60
      }, 10, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    },
    bindEvents: function bindEvents() {
      var t = this,
          resizeTimer,
          dragTimer,
          isDragging = false,
          mouseDown = false,
          flag = false,
          x = 0;
      $("div.accordion").on("click", function (e) {
        $currentTab = e.target.innerText.toLowerCase();
      });
      $("a.nav-link[role='tab']").on("click", function (e) {
        $currentAccordion = e.currentTarget.href.split('#')[1];
      }); //https://websupport.cdc.gov/browse/WCMSRD-5666

      $('.closeall').on('click', function (e) {
        e.preventDefault();
        $('.accordion .collapse.show').collapse('hide');
        return false;
      });
      $('.openall').on('click', function (e) {
        e.preventDefault();
        $('.accordion .collapse').collapse('show');
        return false;
      }); // the images will resize, so keep them normalized when that happens

      $(window).on('resize orientationchange', window.CDC.Common.debounce(function () {
        if (768 > $(window).width()) {
          t.buildAccordion();
        } else {
          t.buildTabs();
        }
      }, 250));

      if (window.location.hash) {
        t.redirect(window.location.hash);
      }
    }
  }; // don't let the plugin load multiple times

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new CDCPlugin(this, options));
      }
    });
  };
})(jQuery, window, document);
'use strict';
/**
 * tp-dropdown.js
 * @fileOverview Contains tp-search.js code that is for all environments.
 * @version 0.1.0.0
 * @copyright 2018 Centers for Disease Control
 */

$('.small-search').on('show.bs.dropdown', function () {
  $('.dropdown-menu-small-search').width($(window).width() - 10);
});
$('button.search-button').on('click', function () {
  if ('true' === $(this).attr('aria-expanded')) {
    $(this).trigger('metrics-capture', ['dropdown-search-button', 'close']);
  } else {
    $(this).trigger('metrics-capture', ['dropdown-search-button', 'open']);
  }
});
'use strict';
/**
 * tp-external-links.js
 * @fileOverview Contains module and constructors to handle navigation behavior outside of the scope of bootstrap
 * @version 0.1.0.0
 * @copyright 2018 Centers for Disease Control
 */

(function ($, window, document, undefined) {
  window.CDC = window.CDC || {};
  window.CDC.tp4 = window.CDC.tp4 || {};

  window.CDC.tp4.extLinks = window.CDC.tp4.extLinks || function () {
    var extLinkReturn = {
      init: function init(config) {
        $(document).ready(function () {
          var popExtModal = function popExtModal(linkTarget, targetAttr, linkExtension) {
            var $extModal = $('#cdcExtLink');

            if ('gov' === linkExtension) {
              if ('_blank' === targetAttr || 'new' === targetAttr) {
                window.open(linkTarget);
              } else {
                window.location.href = linkTarget;
              }
            } else {
              var cookieSet = Boolean(document.cookie.match(/^(.*;)?\s*cdcExtModalOnce\s*=\s*[^;]+(.*)?$/));

              if (false === cookieSet) {
                $extModal.modal();
                $extModal.find('.extlink-url-notice').attr('href', linkTarget).html(linkTarget);
                $extModal.find('.cdcExtLinkContinue').on('click', function () {
                  document.cookie = 'cdcExtModalOnce=true';

                  if ('_blank' === targetAttr || 'new' === targetAttr) {
                    window.open(linkTarget);
                  } else {
                    window.location.href = linkTarget;
                  }
                });
              } else {
                window.location.href = linkTarget;
              }
            }
          };

          $('.tp-link-policy').on("click", function (e) {
            e.preventDefault();
            var $e = e,
                //target = $(e.target),
            target = $(this),
                linkTarget = target.attr('href'),
                targetAttr = target.attr('target'),
                linkExtension = target.attr('data-domain-ext'); // fixes svg clicking issue where it takes over e.target

            if (target.is("svg")) {
              linkTarget = target.parent('a').attr('href');
              targetAttr = target.parent('a').attr('target');
              linkExtension = target.parent('a').attr('data-domain-ext');
            }

            popExtModal(linkTarget, targetAttr, linkExtension);
          });
        });
        return true;
      }
    };
    return extLinkReturn;
  }();
})(window.jQuery, window, window.document);
'use strict';
/**
 * tp-forms.js
 * @fileOverview Event handling for the HTML forms
 * @version 0.1.0.0
 * @copyright 2018 Centers for Disease Control
 */

$(function () {
  if ($('.cdc-datepicker').length) {
    $.ajax({
      url: '/TemplatePackage/contrib/libs/gijgo/js/gijgo.min.js',
      dataType: 'script',
      cache: true
    }).done(function () {
      $('<link/>', {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/TemplatePackage/contrib/libs/gijgo/css/gijgo.min.css'
      }).appendTo('head');
      $('.cdc-datepicker').each(function () {
        $(this).datepicker({
          uiLibrary: 'bootstrap4'
        });
      });
    });
  }

  $('.has-clear input[type="text"]').on('input propertychange', function () {
    var $this = $(this);
    var visible = Boolean($this.val());
    $this.siblings('.form-control-clear').toggleClass('d-none', !visible);
  }).trigger('propertychange');
  $('.form-control-clear').click(function () {
    $(this).siblings('input[type="text"]').val('').trigger('propertychange').focus();
  }); //Added for WCMSRD-6819

  $('.forms .dropdown-menu a.dropdown-item').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.dropdown').find('[data-toggle="dropdown"]').text($(this).text());
    $(this).addClass('selected');
    $(this).siblings().removeClass('selected');
  }); // This is causing odd behavior
  // $('.multiselect-forms option').on('click', function(){ //conflict with CSS with :checked. Can't override.
  // 	$(this).toggleClass('selected');
  // });
  //end added
});
'use strict';
/**
 * images.js
 * @fileOverview Event CDC images
 * @version 0.1.0.0
 * @copyright 2018 Centers for Disease Control
 */

(function ($, window, document, undefined) {
  var pluginName = "cdc_images";

  function CDCPlugin(element, options) {
    this.element = element;
    this.options = $.extend({}, options);
    this._name = pluginName;
  }

  CDCPlugin.prototype = {}; // don't let the plugin load multiple times

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new CDCPlugin(this, options));
      }
    });
  };
})(jQuery, window, document);
'use strict';
/**
 * tp-interactions.js
 * @fileOverview Contains module and constructors to tracking interaction metrics.
 * @version 0.1.0.0
 * @copyright 2019 Centers for Disease Control
 */

(function ($, window, document, undefined) {
  window.CDC = window.CDC || {};
  window.CDC.tp4 = window.CDC.tp4 || {};

  window.CDC.tp4.interactionMetrics = window.CDC.tp4.interactionMetrics || function () {
    // Local Methods
    var bindEvents;

    bindEvents = function bindEvents(config) {
      // Generic interaction tracking for any other element that raises the custom event.
      $(document).on('metrics-capture', function (e, label, interaction, navigate) {
        var result = true;

        if ('undefined' === typeof navigate) {
          navigate = true;
        } // Test to see if Adobe metrics code is loaded and track link (s.tl) is available to be called.


        if (window.hasOwnProperty('s')) {
          var s = window.s;

          if ('function' === typeof s.tl) {
            var savePageName = s.pageName;
            console.log('metrics-capture: ' + label + ' - ' + interaction);
            s.linkTrackVars = 'prop40,prop49,prop46,prop2,prop31,channel';
            s.pageName = null;
            s.prop40 = 'ci-' + label + ': ' + interaction;
            var element = $(e.target);

            if ('a' === element.prop('tagName').toLowerCase() && navigate) {
              // Determine the type of link and only use navigate option on s.tl for standard links off page.
              var href = element.attr('href');
              var target = element.attr('target');

              if (target && '_blank' === target) {
                navigate = false;
              } else if (href && 0 < href.length && '#' === href[0]) {
                navigate = false;
              }

              if (navigate) {
                e.preventDefault();
                s.useForcedLinkTracking = false;
                s.forcedLinkTrackingTimeout = 1000;
                s.tl(e.target, 'o', label, null, 'navigate');
              } else {
                s.tl(true, 'o', label);
                result = false;
              }
            } else {
              s.tl(true, 'o', label);
              result = false;
            }

            s.pageName = savePageName;
          }
        }

        return result;
      });
    };

    return {
      init: function init(config) {
        bindEvents(config);
        return true;
      }
    };
  }();
})(window.jQuery, window, window.document);
'use strict';
/**
 * tp-4th-level-nav.js
 * @fileOverview Contains module for 4th level nav controls
 * @version 0.2.0.0
 * @copyright 2018 Centers for Disease Control
 */

(function ($, window, document, undefined) {
  /*$(".small-menu").click(function() {
         $(this).next(".small-menu-content").stop().slideToggle(500);
         $(this).find(".close-smallmenu, .open-smallmenu").toggle();
     });
  
  
  $('.dropdown-submenu a.test').on('click', function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
  
  $('.mega-menu .dropdown').hover(
  	window.CDC.Common.debounce(function () {
  		$(this).find('.dropdown-toggle').dropdown('toggle');
  	}, 500),
  	function () {
  	}
  );
  
  $('.dropdown-item').click(function () {
  	$('#searchSelected-intranet')[0].textContent = $(this)[0].text;
  	if ($(this)[0].text == 'People Finder') {
  		$('.headerSearch-intranet input').addClass('typeahead people-finder-item');
  		$(".headerSearch-intranet .btn-search").prop("disabled", true);
  	} else {
  		$('.headerSearch-intranet input').removeClass('typeahead people-finder-item');
  		$(".headerSearch-intranet .btn-search").prop("disabled", false);
  	}
  });*/
  //$('.body-wrapper').append('<div class="overlay d-none"></div>');
  $('.intranet-mobile-menu-btn').click(function () {
    $('.intranet-horizontal-nav .yamm #navbar-collapse-grid').toggleClass('d-block');
    $('.intranet-mobile-menu-btn').toggleClass('active');
    $('.intranet-mobile-menu-btn .open-smallmenu').toggleClass('d-none');
    $('.intranet-mobile-menu-btn .close-smallmenu').toggleClass('d-none');
    $('.mobile-overlay').toggleClass('d-none'); //$('..modalMask').toggleClass('d-block');
  });
  var link_plus = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>';
  var link_minus = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>collapse</title><path d="M19,13H5V11H19V13Z"></path></svg>';
  $('.more-link').append(link_plus);
  $('.more-link').click(function () {
    $(this).toggleClass('open').next('.sub-menu').toggleClass('show');

    if ($(this).hasClass('open')) {
      $(this).html("VIEW LESS" + link_minus);
    } else {
      $(this).html("VIEW MORE" + link_plus);
    }
  }); //https://davidwalsh.name/javascript-debounce-function
  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;

        if (!immediate) {
          func.apply(context, args);
        }
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);

      if (callNow) {
        func.apply(context, args);
      }
    };
  }

  var setSubMenus = function setSubMenus() {
    $('.more-link').removeClass('open').html("VIEW MORE" + link_plus);

    if (753 > $(window).width()) {
      $('.more-link').show();
      $('.sub-menu').removeClass('show');
    } else {
      $('.more-link').hide();
      $('.sub-menu').addClass('show');
    }

    if (990 > $(window).width()) {
      $('.intranet-horizontal-nav .navbar.yamm').addClass('is_mobile');
    } else {
      $('.intranet-horizontal-nav .navbar.yamm').removeClass('is_mobile');
    }

    $('.intranet-horizontal-nav .navbar.yamm.is_mobile .more-link').on("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
    });
  };

  setSubMenus();
  var removeOverlayOnResize = debounce(function () {
    $('.body-wrapper .overlay').toggleClass('d-none');
    setSubMenus();
  }, 500);
  $(window).on('resize', removeOverlayOnResize);
})(jQuery, window, document);
'use strict';
/**
 * tp-multipage-nav.js
 * @fileOverview Contains module for multipage nav controls
 * @version 0.2.0.0
 * @copyright 2018 Centers for Disease Control
 */

(function ($, window, document, undefined) {
  var pluginName = 'cdc_multipagenav';

  function CDCPlugin(element, options) {
    this.element = element;
    this._name = pluginName;
    this.init();
  }

  CDCPlugin.prototype = {
    init: function init(config) {
      var $currentPageHighlight = $(".multi-page li.list-group-item a[href$='" + location.pathname + "']");
      $currentPageHighlight.addClass("active");
    }
  }; // don't let the plugin load multiple times

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new CDCPlugin(this, options));
      }
    });
  };
})(jQuery, window, document);
'use strict';
/**
 * tp-nav.js
 * @fileOverview Contains module and constructors to handle navigation behavior outside of the scope of bootstrap
 * @version 0.1.0.0
 * @copyright 2018 Centers for Disease Control
 */

(function ($, window, document, undefined) {
  window.CDC = window.CDC || {};
  window.CDC.tp4 = window.CDC.tp4 || {};

  window.CDC.tp4.nav = window.CDC.tp4.nav || function () {
    var iconMinus = 'M19,13H5V11H19V13Z',
        iconPlus = 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z',
        config = config || {},
        $fourthLevelNav = $(''),
        $nav = $('nav .tp-nav-main'); // Local Methods

    var bindEvents, togglePlusMinus, buildMobileSectionNav, insertNavItem, _selectActiveNavItems, buildBreadCrumbs, saveFourthLevelNav;

    bindEvents = function bindEvents() {
      // Left / Bottom Nav Expand / Collapse
      $nav.find('a svg').on('click', function (e) {
        var leftOrBottom = -1 < $.inArray(CDC.tp4.public.getViewport(), [1, 2, 3]) ? 'bottom' : 'left';
        $(this).trigger('metrics-capture', [leftOrBottom + '-nav-expand-collapse', $(this).parent('a').hasClass('nav-plus') ? 'expand' : 'collapse']);
        togglePlusMinus(this);
      });
      $nav.find('a .fi').on('click', function (e) {
        e.preventDefault();
        var leftOrBottom = -1 < $.inArray(CDC.tp4.public.getViewport(), [1, 2, 3]) ? 'bottom' : 'left';
        $(this).trigger('metrics-capture', [leftOrBottom + '-nav-anchor-child', 'click']);
        togglePlusMinus(this);
      }); // Left / Bottom Nav Child Anchor Click

      $nav.find('li a:first-child').on('click', function (e) {
        e.preventDefault();
        var leftOrBottom = -1 < $.inArray(CDC.tp4.public.getViewport(), [1, 2, 3]) ? 'bottom' : 'left';
        $(this).trigger('metrics-capture', [leftOrBottom + '-nav-anchor-child', 'click']);
        return false;
      }); // Left / Bottom Nav "Home" Anchor Click

      $nav.parent('nav').find('.nav-section-home a').on('click', function (e) {
        e.preventDefault();
        var leftOrBottom = -1 < $.inArray(CDC.tp4.public.getViewport(), [1, 2, 3]) ? 'bottom' : 'left';
        $(this).trigger('metrics-capture', [leftOrBottom + '-nav-anchor-home', 'click']);
        return false;
      }); // Left / Bottom Nav Keyboard Accessibility

      $(document).on('keyup', window.CDC.Common.debounce(function (e) {
        if (13 === e.which) {
          if ($(e.currentTarget.activeElement).hasClass('nav-plus') || $(e.currentTarget.activeElement).hasClass('nav-minus')) {
            var leftOrBottom = -1 < $.inArray(CDC.tp4.public.getViewport(), [1, 2, 3]) ? 'bottom' : 'left';
            $(e.currentTarget.activeElement).trigger('metrics-capture', [leftOrBottom + '-nav-expand-collapse', $(e.target).hasClass('nav-plus') ? 'expand' : 'collapse']);
            togglePlusMinus($(e.target).find('svg'));
            togglePlusMinus($(e.target).find('.fi'));
          }
        }
      }, 250)); // // Hide the modal mask and reset the icon on unload
      // $(document).on('unload', function (e) {
      //     $('.modalMask').hide();
      //     $('.mobile-section-nav .toggleMask svg').css('transform', '');
      // });
      // $nav.find('disable-dropdown').on('click', function (e) {
      // 	e.preventDefault();
      // 	e.stopPropagation();
      // });
      // Mobile Section Nav Interactions

      if (config.mobileSectionNav.enabled) {
        var eventsToWatch = 'click touchstart';

        if (window.PointerEvent) {
          eventsToWatch = 'pointerup';
        }

        $('#mobileNav-dropdown nav a').on(eventsToWatch, function (e) {
          $('.modalMask').fadeOut();
          $('.mobile-section-nav .toggleMask #svg-down').css('transform', '');
          $(this).trigger('metrics-capture', ['section-nav-anchor-child', 'click']);
          return false;
        });
        $('#mobileNav-dropdown nav a.list-group-item mobile-section-nav-foot').on(eventsToWatch, function (e) {
          e.preventDefault();
          $('.modalMask').fadeOut();
          $('.mobile-section-nav .toggleMask svg').css('transform', '');
          $(this).trigger('metrics-capture', ['section-nav-anchor-home', 'click']);
          return false;
        });
        $('.modalMask').on(eventsToWatch, function (e) {
          $('.modalMask').fadeOut();
          $('.mobile-section-nav .toggleMask #svg-down').css('transform', '');
          $(this).trigger('metrics-capture', ['section-nav-expand-collapse-outside', 'collapse']);
        });
        $('.mobile-section-nav .toggleMask').on(eventsToWatch, function (e) {
          var clickedElement = 'svg' === e.target.nodeName.toLowerCase() ? 'image' : 'header';

          if ($(this).parent().hasClass('show')) {
            $('.modalMask').fadeOut();
            $('.mobile-section-nav .toggleMask #svg-down').css('transform', '');
            $(this).trigger('metrics-capture', ['section-nav-expand-collapse-' + clickedElement, 'collapse']);
          } else {
            $('.modalMask').fadeIn();
            $('.mobile-section-nav .toggleMask #svg-down').css('transform', 'rotate(180deg)');
            $(this).trigger('metrics-capture', ['section-nav-expand-collapse-' + clickedElement, 'expand']);
          }
        });
      }
    };

    togglePlusMinus = function togglePlusMinus(target) {
      var $this = $(target),
          $thisAnchor = $this.parent();

      if ($thisAnchor.hasClass('nav-plus')) {
        $thisAnchor.removeClass('nav-plus').addClass('nav-minus');
        $thisAnchor.find('.cdc-icon-plus').css('transform', 'rotate(-180deg)').removeClass('cdc-icon-plus').addClass('cdc-icon-minus');
        $thisAnchor.find('svg title').text('collapse');
        $thisAnchor.find('svg path').attr('d', iconMinus);
        $thisAnchor.find('title').text('collapse');
      } else if ($thisAnchor.hasClass('nav-minus')) {
        $thisAnchor.removeClass('nav-minus').addClass('nav-plus');
        $thisAnchor.find('.cdc-icon-minus').css('transform', 'rotate(0deg)').removeClass('cdc-icon-minus').addClass('cdc-icon-plus');
        $thisAnchor.find('svg title').text('expand');
        $thisAnchor.find('svg path').attr('d', iconPlus);
        $thisAnchor.find('title').text('plus');
      }
    };

    buildMobileSectionNav = function buildMobileSectionNav(configSectionNav, $targetAnchor, callback) {
      config = configSectionNav || {}; // Is section Nav enabled?

      if (config.mobileSectionNav.enabled) {
        var currentTitle = config.mobileSectionNav.title ? config.mobileSectionNav.title : $($targetAnchor).text() || '',
            $parentLi = $($targetAnchor).parents('li').first(),
            $parentUl = $parentLi.length ? $parentLi.parent('ul') : $(config.navSelector),
            $mobileSectionNav = $('.mobile-section-nav'),
            $injectPoint = $('.dropdown-menu ul', $mobileSectionNav),
            modalhtml = '<div class="modalMask" style="display:none;"></div>';
        var $childUl = $('ul', $parentLi),
            $mobileNavHtml;

        if (0 < $childUl.length) {
          $mobileNavHtml = $childUl.html();
        } else {
          $mobileNavHtml = $parentUl.html();
        } // Injected nav case tweaks


        if (config.addNavigation) {
          $targetAnchor = $nav.find('.selected a');

          if ('' === currentTitle) {
            currentTitle = $targetAnchor.text() || $(".content h1:first-child").text();
          }
        } // rule to not show the section nav if only 1 item and it has no children


        if (1 === $($targetAnchor).parents('ul:first').find('li').length && 0 === $($targetAnchor).parents('li:first').find('ul').length) {
          disableSectionNav();
        } // Remove IDs from Section Nav


        $injectPoint.prepend($mobileNavHtml);
        $('ul', $mobileSectionNav).removeAttr('id'); // stand-alone page?

        if ('' === currentTitle) {
          var firstContentH1 = $('.body-wrapper h1:first-child');
          currentTitle = firstContentH1.length ? firstContentH1.text() : '';

          if (currentTitle.length && !window.CDC.tp4.nav.isTopicHome) {
            disableSectionNav();
          }
        } // Update the mobile-title (inside the mobile-section-nav)


        $mobileSectionNav.find('.mobile-title').html(currentTitle); // create mask

        $('body').append(modalhtml); // Update Mobile Section Nav Home Link and Text from the values provided in a.nav-section-home

        var $homeLinkSource = $('.nav-section-home a');
        $('a.mobile-section-nav-foot').attr('href', $homeLinkSource.attr('href'));
        $('span.mobile-foot-title').text($homeLinkSource.text());
      } else {
        $('.mobile-section-nav').hide();
      }

      if ('function' === typeof callback) {
        callback(config);
      }
    };

    insertNavItem = function insertNavItem($targetNav, $targetLink, configNav) {
      config = configNav || {};
      /* returns the $ version of the inserted link (<a>, not li, etc.) */

      if (config.addNavigation && !$nav.find("a[href$='" + config.addNavigationHref + "']").length) {
        // Did we find the nav menu?
        if ($targetLink.length) {
          var $parentListItem,
              $ulToInsertInto,
              newLinkMarkup = "\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<a href=\"".concat(config.addNavigationHref, "\">").concat(config.addNavigationText, "</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t"),
              newUlMarkup = "\n\t\t\t\t\t\t<ul id=\"nav-group-navinsert\" class=\"collapse\">".concat(newLinkMarkup, "</ul>\n\t\t\t\t\t\t"),
              newUlToggleMarkup = "\n\t\t\t\t\t\t<a href=\"#nav-group-navinsert\" class=\"nav-plus nav-expandcollapse\" data-toggle=\"collapse\" aria-controls=\"nav-group-navinsert\">\n\t\t\t\t\t\t\t<svg viewBox=\"0 0 24 24\"><title>expand</title><path d=\"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\" /></svg>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t"; // Did we find a parent to highlight or insert next to or under?

          if ($targetLink.length) {
            // Get the links' parent <li>
            $parentListItem = $($targetLink.parent('li')); // Did we find it?

            if ($parentListItem.length) {
              // Check this <li> for a pre-existing child <ul> for us to insert into
              $ulToInsertInto = $('ul.collapse', $parentListItem); // Did we find it?

              if ($ulToInsertInto.length) {
                // Yes, just insert link into the <ul>
                // Insert the new link to the target <ul>
                $ulToInsertInto.append(newLinkMarkup);
              } else {
                // No, We need to create the <ul> and toggle <a> tag
                // Append the toggle to the parent list item
                $parentListItem.append(newUlToggleMarkup); // Append the new ul to the parent list item

                $parentListItem.append(newUlMarkup);
              }
            }

            return $parentListItem.find('a[href*="' + config.addNavigationHref + '"]').last();
          } // Faux false (this returns a zero length array, which will be checked for success)


          return [];
        }
      }

      return $targetLink;
    };

    _selectActiveNavItems = function selectActiveNavItems($targetAnchor, arrBreadcrumbs, level) {
      // Is target anchor passed?
      if ($targetAnchor.length) {
        // Push the text and href of this target anchor to the level tracker
        arrBreadcrumbs.push({
          text: $targetAnchor.text(),
          href: $targetAnchor.attr('href')
        });
      } else if (window.location.pathname === $nav.parent().find('.nav-section-home a').attr('href')) {
        // Check for Topic homepage
        $nav.parent().find('.nav-section-home').addClass('selected');
        window.CDC.tp4.nav.isTopicHome = true;
      } // (get or default level) then auto incement it


      level = (level || 0) + 1; // Get the links' parent <li>

      var $parentListItem, $toggleLink; // Update the class of the target anchor

      $targetAnchor.addClass('list-group-item-action'); // Get the links' parent <li>

      $parentListItem = $($targetAnchor.parent('li')); // Get the toggle link in this <li>

      $toggleLink = $('.nav-expandcollapse:first', $parentListItem); // Show the <li>

      $parentListItem.addClass('active'); // if level = 1 (if this is the actual active item, then add active class)

      if (1 === level) {
        $parentListItem.addClass('selected');
      } // Expand the first <ul> below this <li> if if exists


      $('ul', $parentListItem).first().addClass('show'); // Then change the path pf the <svg> icon to the minus path

      $('svg path', $toggleLink).attr('d', 'M19,13H5V11H19V13Z'); // Then (508) update the text to collapse

      $('svg title', $toggleLink).text('collapse'); // update active icon classes

      $toggleLink.removeClass('nav-plus').addClass('nav-minus');
      $toggleLink.find('.cdc-icon-plus').css('transform', 'rotate(180deg)').removeClass('cdc-icon-plus').addClass('cdc-icon-minus'); // Climb up to next li: Get the parent <ul> of this <li>, then get its direct parent <li>

      var $parentUlsParentLi = $parentListItem.parent('ul').parent('li'); // Do we have a higher level nav <li>?

      if ($parentUlsParentLi.length) {
        // Yes, get the first Anchor in that list item (which will be the new target anchor)
        var $newTargetAnchor = $('a:first', $parentUlsParentLi); // Did we find it?

        if ($newTargetAnchor) {
          // Acrivate the parent
          arrBreadcrumbs = _selectActiveNavItems($newTargetAnchor, arrBreadcrumbs, level);
        }
      }

      return arrBreadcrumbs;
    };

    buildBreadCrumbs = function buildBreadCrumbs() {
      var $breadcrumbTarget = $('nav.breadcrumbs ol');
      var $NavSectionHomeLink = $(config.navSelector).parent().find('.nav-section-home a').attr('href');
      var $NavSectionHomeText = $(config.navSelector).parent().find('.nav-section-home a').text(); // Do we have data to use, and does the mode selected dictate we use that data?

      if (config.breadcrumbs.data && ('auto' === config.breadcrumbs.mode || 'manual' === config.breadcrumbs.mode)) {
        // Clear existing breadcrumbs
        $breadcrumbTarget.empty(); // Is there a prefix available?

        if (config.breadcrumbs.prefix) {
          // Is ths a mult prefix array?
          if (Array.isArray(config.breadcrumbs.prefix)) {
            // Yes, Reverse the array for proper ordering
            config.breadcrumbs.prefix = config.breadcrumbs.prefix.reverse();
          } else {
            // No, just place the prefix in an array for uniform handling
            config.breadcrumbs.prefix = [config.breadcrumbs.prefix];
          } //add the nav-section-home to the breadcrumbs


          if ($NavSectionHomeLink && $NavSectionHomeText && true !== config.breadcrumbs.removeHome) {
            config.breadcrumbs.data.splice(0, 0, {
              text: $NavSectionHomeText,
              href: $NavSectionHomeLink
            });
          } // Loop prefixes array


          config.breadcrumbs.prefix.forEach(function (currentPrefix) {
            // Push them to the front of the breadcrumbs array
            config.breadcrumbs.data.unshift(currentPrefix);
          });
        } else if (config.breadcrumbs.prefixes) {
          // Multiple Prefixes support option 2 (prefixes)
          config.breadcrumbs.prefixes.reverse(); //add the nav-section-home to the breadcrumbs

          if ($NavSectionHomeLink && $NavSectionHomeText && true !== config.breadcrumbs.removeHome) {
            config.breadcrumbs.data.splice(0, 0, {
              text: $NavSectionHomeText,
              href: $NavSectionHomeLink
            });
          } // Loop the multi prefix object


          for (var prop in config.breadcrumbs.prefixes) {
            config.breadcrumbs.data.unshift(config.breadcrumbs.prefixes[prop]);
          }
        } else if ($NavSectionHomeLink && $NavSectionHomeText && true !== config.breadcrumbs.removeHome) {
          $breadcrumbTarget.prepend("<li class=\"breadcrumb-item\"><a href=\"".concat($NavSectionHomeLink, "\">").concat($NavSectionHomeText, "</a></li>"));
        } //add the nav-section-home to the breadcrumbs
        //if ( $NavSectionHomeLink && $NavSectionHomeText ) {
        //config.breadcrumbs.data.splice(0, 0, { text: $NavSectionHomeText, href: $NavSectionHomeLink });
        //}
        //
        // Add Current page as "suffix"?
        // Removing this as it may not match the left nav which is what is used everywhere else... instead, moving this logic to the data loop below...
        // if (config.breadcrumbs.showCurrentPage) {
        //     var suffix = {
        //         href: window.location.href,
        //         text: document.title
        //     }
        //     config.breadcrumbs.data.push(suffix)
        // }
        // Loop new breadcrumb data


        config.breadcrumbs.data.forEach(function (breadCrumb, index, array) {
          // Boolean setting: Determine if we should include the current Item in the breadcrumbs
          var includeThisItem = // Manual Mode (SHow All Manual Data)
          'manual' === config.breadcrumbs.mode || // Auto Mode (Pulled from Left Nav)
          'auto' === config.breadcrumbs.mode && ( // Show if "show current page" is true OR if the index is less than the
          config.breadcrumbs.showCurrentPage || !config.breadcrumbs.showCurrentPage && index < array.length - 1); // Include if ok based on the above

          if (includeThisItem) {
            // Add each Anchor
            $breadcrumbTarget.append("<li class=\"breadcrumb-item\"><a href=\"".concat(breadCrumb.href, "\">").concat(breadCrumb.text, "</a></li>"));
          }
        });
      } // Return $breadcrumb element


      return $breadcrumbTarget;
    };

    saveFourthLevelNav = function saveFourthLevelNav($targetAnchor) {
      var atThirdLevel = 3 === $($targetAnchor, config.navSelector).parents('ul').length;

      if (atThirdLevel) {
        $fourthLevelNav = $('ul', $targetAnchor.parent('li'));
      }

      return $fourthLevelNav;
    };

    var disableSectionNav = function disableSectionNav() {
      var $mobileSectionNav = $('.mobile-section-nav');
      $mobileSectionNav.find('#svg-down').hide();
      $mobileSectionNav.find('.dropdown .btn').addClass('disabled');
      $mobileSectionNav.find('button').removeClass('toggleMask');
    };

    return {
      getFourthLevelNav: function getFourthLevelNav() {
        return $fourthLevelNav;
      },
      init: function init(configOptions) {
        config = configOptions || {}; //For an archived page, we are disabling this functionality

        if (config.hasOwnProperty('disabled') && true === config.disabled) {
          return true;
        } // Base configuration (unlikely to be overridden)


        config.navSelector = config.navSelector || 'nav .tp-nav-main';
        config.pathToSelect = config.pathToSelect || window.location.pathname; // Add Navigation Config (Injects navigation items to left/bottom nav menu)

        config.addNavigation = config.addNavigation || false; // Taking h1 instead of document title

        var navigationTextElement = $("h1:first-child");
        var defaultNavigationText = navigationTextElement.text(); // Please don't use 'document.title' for anything!

        if (0 === navigationTextElement.length) {
          defaultNavigationText = '';
        }

        config.addNavigationText = config.addNavigation ? config.addNavigationText || defaultNavigationText : false;
        config.addNavigationHref = config.addNavigation ? config.addNavigationHref || window.location.href : false; // Allow for disabling of left / bottom nav

        config.mobileBottomNav = config.mobileBottomNav || {};
        config.mobileBottomNav.enabled = !(config.mobileBottomNav.hasOwnProperty('enabled') && false === config.mobileBottomNav.enabled); // Boolean reverse enable it as long as someone has NOT(manually set the configuration value to false)
        // Allow for disabling of mobile section nav

        config.mobileSectionNav = config.mobileSectionNav || {};
        config.mobileSectionNav.enabled = !(config.mobileSectionNav.hasOwnProperty('enabled') && false === config.mobileSectionNav.enabled); // Boolean reverse enable it as long as someone has NOT(manually set the configuration value to false)

        config.mobileSectionNav.title = config.mobileSectionNav.title || ''; // Breadcrumbs Configuration

        config.breadcrumbs = config.breadcrumbs || {};
        config.breadcrumbs.mode = config.breadcrumbs.mode || 'auto';
        config.breadcrumbs.prefix = config.breadcrumbs.prefix || null;
        config.breadcrumbs.prefixes = config.breadcrumbs.prefixes || null;
        /*
        To Specify Breadcrumb Data Manually, Use:
        		config.breadcrumbs.data = [{
        	text: "My First Level",
        	href: "www.cdc.gov/test-url.html"
        }, {
        	text: "My Second Level",
        	href: "www.cdc.gov/test-url.html"
        }];
        		To Specify Breadcrumb Prefix, Use:
        		config.breadcrumbs.prefix = {
        	text: "My Link Text",
        	href: "www.cdc.gov/test-url.html"
        }
        		Note: If you are providing the data object,
        you could simply add your prefix there vs.
        additionally using the prefix. In such a
        case, the idea would be to do what is
        easier to configure for you.
        */

        var removeParamsForComparison = function removeParamsForComparison(url, parameters) {
          var pIndex;
          var urlParts = url.split('?');
          var urlParams = urlParts[1].split(/[&;]/g);

          for (pIndex = 0; pIndex < parameters.length; ++pIndex) {
            var prefix = encodeURIComponent(parameters[pIndex]) + '=';

            for (var i = urlParams.length; 0 < i--;) {
              if (-1 !== urlParams[i].indexOf(prefix, 0)) {
                urlParams.splice(i, 1);
              }
            }

            url = urlParts[0] + (0 < urlParams.length ? '?' + urlParams.join('&') : "");
          }

          return url;
        };

        var paramsNotInNav = [// params compared in lowercase
        'source', 's_cid', 'cdc_aa_refval', 'mobile', 'utm', 'utm_campaign', 'utm_medium', 'utm_content', 'utm_source'];
        var $nav_2 = $(config.navSelector),
            $targetAnchor = $(),
            $targetAnchorForInjection = $(),
            $selectionStart,
            breadCrumbData,
            currentPageIsInNav = false,
            windowLocationHref = window.location.href.toLowerCase();

        if ('' !== location.search) {
          windowLocationHref = removeParamsForComparison(windowLocationHref, paramsNotInNav);
        }

        var homes = ['', '/', 'default.asp', 'default.aspx', 'default.html', 'default.htm', 'index.asp', 'index.aspx', 'index.html', 'index.htm', 'index.php'];

        var findNavItemForURL = function findNavItemForURL(currentNavItem, url, thisItem) {
          for (var i = 0; i < homes.length; i++) {
            var home = homes[i];

            if (currentNavItem === url || currentNavItem === url + home) {
              $targetAnchor = $(thisItem);
              currentPageIsInNav = true;
            }
          }
        };

        $nav_2.find('a').each(function () {
          var currentNavItem = this.href.toLowerCase().substr(-window.location.href.toLowerCase()); // var currentNavItem = this.href.toLowerCase();

          findNavItemForURL(currentNavItem, windowLocationHref, this);
        }); //Remove hash for comparison if not already found in menu

        if (!currentPageIsInNav) {
          var urlNoHash = (location.origin + location.pathname).toLowerCase();
          $nav_2.find('a').each(function () {
            var currentNavItem = this.href.toLowerCase().substr(-window.location.href.toLowerCase());
            findNavItemForURL(currentNavItem, urlNoHash, this);
          });
        } //If page should be injected dynamically and it's not already in the nav


        if (!currentPageIsInNav && config.addNavigation) {
          $nav_2.find('a').each(function () {
            if (this.href.toLowerCase().substr(-config.pathToSelect.toLowerCase().length) === config.pathToSelect.toLowerCase()) {
              $targetAnchorForInjection = $(this);
            }
          }); // Add navigation item to menu if requested

          $targetAnchor = insertNavItem($nav_2, $targetAnchorForInjection, config);
        } // Activate Nav Items (return breadcrumbs.data from selection chain)


        breadCrumbData = _selectActiveNavItems($targetAnchor, []).reverse();

        if ('auto' === config.breadcrumbs.mode) {
          config.breadcrumbs.data = breadCrumbData;
        } // Create Breadcrumbs if needed


        buildBreadCrumbs(); // getFourthLevelNav

        saveFourthLevelNav(config, $targetAnchor); // make mobile nav

        buildMobileSectionNav(config, $targetAnchor, bindEvents);
        return true;
      }
    };
  }();
})(window.jQuery, window, window.document);
'use strict';
/**
 * tp-search.js
 * @fileOverview Contains module and constructors to handle navigation behavior outside of the scope of bootstrap
 * @version 0.1.0.1
 * @copyright 2018 Centers for Disease Control
 */

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($, window, document, undefined) {
  window.CDC = window.CDC || {};
  window.CDC.tp4 = window.CDC.tp4 || {};

  window.CDC.tp4.search = window.CDC.tp4.search || function () {
    var searchReturn = {
      init: function init(config) {
        // WARN: this should NOT be firing yet another document.ready event handler
        $(document).ready(function () {
          $('.dropdown-submenu .dropdown-toggle').on('click', function (e) {
            $(this).next('.dropdown-menu').toggle();
            e.stopPropagation();
          });
          $('.dropdown-submenu .dropdown-item').on('click', function (e) {
            e.stopPropagation();
            var update = {
              text: $(this).text(),
              value: $(this).attr('data-site-limit')
            }; // if ( '' === update.text ) {
            //
            // }

            $('header .local-search-label').text(update.text);
            $('header input[name="sitelimit"]').val(update.value);
            $(this).parent('.dropdown-menu').toggle();
          });
          $('header').on('click', '.search-submit', function (e) {
            e.preventDefault();
            $(this).parents('form').first().submit();
          });
        }); // hide search dropdown on events
        //$( window ).on( 'resize orientationchange', window.CDC.Common.debounce( function() {
        //if ( $( '.dropdown-menu-small-search' ).hasClass( 'show' ) ) {
        //$( '.dropdown-menu-small-search' ).dropdown( 'toggle' );
        //}
        //}, 250 ) );

        return true;
      }
    };
    return searchReturn;
  }();
  /**
   * search.js
   * Event handling for resizing/responsive elements
   * @version 1.0.0.0
   * @copyright 2013 Centers for Disease Control
   */

  /** Does global CDC namespace exists? */


  CDC = CDC || {};
  /**
   * @module Search
   * @memberof CDC
   * @param {object} $ - jQuery object
   * @param {object} w - window object
   * @param {object} _ - underscore object
   * @param {object} g - CDC.Global object
   */

  CDC.Search = CDC.Search || function (w, g) {
    "use strict";
    /*global log:false */

    var solrDomain = null;
    var actionDomain = null;
    var searchNetwork = 'internet';
    var searchEndpoint = $('html').hasClass('intranet') ? 'intranet' : '';
    var searchResults = $('.searchResultsData');
    solrDomain = 'search.cdc.gov';
    actionDomain = 'search.cdc.gov';

    if (-1 === actionDomain.indexOf('search.cdc.gov')) {
      actionDomain = window.location.host;
    }

    var solrRoot = window.location.protocol + '//' + solrDomain + '/srch';
    var config = {
      defaultPageSize: 10,
      defaultBestBetsPageSize: 3,
      defaultAutoSuggest: 5,
      defaultPagingChunk: 10,
      searchAPIRoot: solrRoot + '/' + searchNetwork + '/browse2',
      searchAPIRootBestBets: solrRoot + '/' + searchNetwork + '_bb/bestbets',
      searchAPIRootESP: solrRoot + '/' + searchNetwork + '_es/browse2',
      searchAPIRootBestBetsESP: solrRoot + '/' + searchNetwork + '_esbb/bestbets',
      searchResultsLocation: window.location.protocol + '//' + actionDomain + '/search',
      searchResultsLocationEPS: window.location.protocol + '//' + actionDomain + '/search/spanish',
      searchFormInputs: $('#searchForm input[name="subset"], #searchFormBottom input[name="subset"], #searchFormLocal input[name="subset"], #searchFormLocalBottom input[name="subset"]'),
      searchBox: $('#searchBox'),
      searchBoxBottom: $('#searchBoxBottom'),
      searchBoxLocal: $('#searchBoxLocal'),
      searchBoxLocalBottom: $('#searchBoxLocalBottom'),
      searchAgainBox: '.search-again .searchAgainBox',
      searchResultsPage: 'body.search-results',
      $searchResultsBody: searchResults,
      notFoundPage: 'body.not-found',
      apierror: 'CDC Search is undergoing routine maintenance and will be restored shortly.<br />We apologize for the inconvenience and invite you to return later or go to our <a href="//www.cdc.gov/diseasesconditions/">A-Z index</a> to browse by topic.',
      apierrorIntranet: 'CDC Intranet Search is undergoing routine maintenance and will be restored shortly.<br />We apologize for the inconvenience and invite you to return later or go to our <a href="http://intranet.cdc.gov/connects/az/a.html">A-Z index</a> to browse by topic.'
    }; // if ( 'vvv.cdc.gov' === window.location.host ) {
    // 	if ( 'intranet' === searchEndpoint ) {
    // 		config.searchAPIRoot = 'http://vvv.cdc.gov/wp-content/plugins/cdc-gov/assets/cdc/json/sample-intranet-search-results.json';
    // 		config.searchAPIRootBestBets = 'http://vvv.cdc.gov/wp-content/plugins/cdc-gov/assets/cdc/json/sample-intranet-bb-search-results.json';
    // 	} else {
    // 		config.searchAPIRoot = 'http://vvv.cdc.gov/wp-content/plugins/cdc-gov/assets/cdc/json/sample-search-results.json';
    // 	}
    // }

    /**
     * @function setupListeners
     * @access private
     * @desc Set up all event listeners for search
     */

    var setLabels = function setLabels(setLang) {
      if ('cdc-es' === setLang || $('html.esp').length) {
        // spanish terms
        CDC.Search.languageLabels = {
          cdcRecommendations: 'Recomendaci&oacute;n de CDC',
          page: 'P&aacute;gina',
          next: 'Siguiente',
          previous: 'Anterior',
          searchResults: 'Resultados de la b&uacute;squeda',
          returnedFor: 'resultados encontrados para',
          noSearchMessage: '<p style="padding:20px 0;">Utilice el &aacute;rea de b&uacute;squeda en la parte superior de la p&aacute;gina.</p>',
          localSearchPre: 'Incluimos resultados de b&uacute;squeda en',
          localSearchPost: '',
          localSearchAllPre: '&iquest;Desea ver los resultados de',
          localSearchAllPost: 'de todos los sitios',
          zeroDidyoumean: '&iquest;Quiso decir'
        };
      } else {
        // english terms
        CDC.Search.languageLabels = {
          cdcRecommendations: 'Recommended by CDC',
          page: 'Page',
          next: 'Next',
          previous: 'Previous',
          searchResults: 'Search Results',
          returnedFor: 'results returned for',
          noSearchMessage: '<p style="padding:20px 0;">Please use the search area at the top of the page.</p>',
          localSearchPre: 'We\'re including results for',
          localSearchPost: 'only',
          localSearchAllPre: 'Do you want to see results for',
          localSearchAllPost: 'from all sites',
          zeroDidyoumean: 'Did you mean'
        };
      }
    };

    var getSolrData = function getSolrData(apiroot, searchTerm, rows, callback) {
      var pageCurrent = getParameterByName('dpage') || 1,
          startRow = 0,
          siteLimit = getParameterByName('sitelimit') || '',
          setLanguage = getParameterByName('affiliate') || 'cdc-main',
          localsearch = '';

      if ('' !== siteLimit) {
        CDC.Search.localsearch = true; // Set the hidden field for siteLimit so that local search works as expected.

        $('.tp-search input[type="hidden"][name="sitelimit"]').attr('value', siteLimit); // SOLR expected format for local search
        // fq=(url:"www.cdc.gov/niosh" OR url:"blogs.cdc.gov/niosh-science-blog")

        siteLimit = siteLimit.replace(' | ', '%22%20OR%20url:%22');
        localsearch = '&fq=(url:"' + siteLimit + '")';
      } // clean search term


      searchTerm = cleanSearchString(searchTerm); // set in memory for use

      CDC.Search.pageCurrent = parseInt(pageCurrent); // determine start row for paging

      if (1 < pageCurrent) {
        startRow = config.defaultPageSize * (pageCurrent - 1);
      }

      if ('intranet' === searchEndpoint) {
        $.ajax({
          type: 'GET',
          url: apiroot + '?wt=json&q=' + searchTerm + '&rows=' + rows + '&start=' + startRow + localsearch + '&hl=on&df=description,title&hl.simple.pre=<strong>&hl.simple.post=</strong>&hl.fragsize=200&affiliate=' + setLanguage,
          dataType: 'jsonp',
          jsonp: 'json.wrf',
          crossDomain: true,
          cache: false,
          success: function success(response) {
            var data = false;
            var bbData = false;
            data = response;
            CDC.Search.totalPages = Math.ceil(data.response.numFound / config.defaultPageSize);

            if (1 === CDC.Search.pageCurrent) {
              $.ajax({
                type: 'GET',
                url: CDC.Search.setapirootBB + '?wt=json&q=%22' + searchTerm + '%22&rows=' + rows + '&start=' + startRow + localsearch + '&hl=on&df=description,title&hl.simple.pre=<strong>&hl.simple.post=</strong>&hl.fragsize=200&affiliate=' + setLanguage,
                dataType: 'jsonp',
                jsonp: 'json.wrf',
                crossDomain: true,
                cache: false,
                success: function success(responsePC) {
                  bbData = responsePC;
                  callback(data, bbData);
                },
                error: function error(jqXHR, textStatus, errorThrown) {
                  console.log('Failed search request', textStatus, errorThrown);
                  $(".searchResultsData").html(config.apierror);
                }
              });
            } else {
              callback(data, bbData);
            }
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            console.log('Failed search request', textStatus, errorThrown);
            $(".searchResultsData").html(config.apierror);
          }
        });
      } else {
        $.ajax({
          type: 'GET',
          url: apiroot + '?wt=json&q=' + searchTerm + '&rows=' + rows + '&start=' + startRow + localsearch + '&hl=on&df=description,title&hl.simple.pre=<strong>&hl.simple.post=</strong>&hl.fragsize=200&affiliate=' + setLanguage,
          dataType: 'jsonp',
          jsonp: 'json.wrf',
          crossDomain: true,
          //cache: false,
          success: function success(response) {
            var data = false;
            var bbData = false;
            data = response;
            CDC.Search.totalPages = Math.ceil(data.response.numFound / config.defaultPageSize);
            callback(data, bbData);
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            console.log('Failed search request', textStatus, errorThrown);
            $(".searchResultsData").html(config.apierror);
          }
        });
      }
    };

    var stripTags = function stripTags(input, allowed) {
      allowed = (String(allowed || "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)

      var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
          commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi,
          brokenTags = /(<\w+(?:\s+\w+=\"[^"]+\")*)(?=[^>]+(?:<|$))/g;
      return input.replace(commentsAndPhpTags, '').replace(brokenTags, '').replace(tags, function ($0, $1) {
        return -1 < allowed.indexOf('<' + $1.toLowerCase() + '>') ? $0 : '';
      });
    };

    var getResults = function getResults(callback) {
      // read query string parameters
      var searchTerm = getParameterByName('query'),
          pageLanguage = getParameterByName('affiliate'),
          siteLimit = getParameterByName('sitelimit') || ''; // prevent blinking on previous term

      $('.search-input input').val('');
      setLabels(pageLanguage); // Handle language determination

      if ('cdc-es' === pageLanguage || 'es-us' === $('html').attr('lang')) {
        CDC.Search.setapiroot = config.searchAPIRootESP;
        CDC.Search.setapirootBB = config.searchAPIRootBestBetsESP;
        CDC.Search.language = 'spanish';
      } else {
        CDC.Search.setapiroot = config.searchAPIRoot;
        CDC.Search.setapirootBB = config.searchAPIRootBestBets;
        CDC.Search.language = 'english';
      }

      if (searchTerm) {
        // Add Spinner while it gets the data
        $(".searchResultsData").html('<div class="searchSpinner">Searching... <span class="icon-refresh"></span></div>'); // get main search results

        getSolrData(CDC.Search.setapiroot, searchTerm, config.defaultPageSize, function (data, bbData) {
          // set search term
          CDC.Search.lastSearch = searchTerm; // sticky search term

          $('.search-input input').val(CDC.Search.lastSearch); // build html

          buildHtml(data, bbData); // callback

          if ('function' === typeof callback) {
            callback();
          }
        });
      } else {
        $(".searchResultsData").html(CDC.Search.languageLabels.noSearchMessage);
      }
    };

    var buildHtml = function buildHtml(data, bbData) {
      var results = data.response.docs,
          html = [],
          highlights = data.highlighting,
          siteLimit = getParameterByName('sitelimit');

      if (0 < results.length) {
        html.push('<div class="searchResultsSummary"><strong>' + data.response.numFound.toLocaleString() + '</strong> ' + CDC.Search.languageLabels.returnedFor + ' <em><b>' + data.responseHeader.params.q + '</b></em> </div>'); // Local search message

        if (siteLimit) {
          html.push(CDC.Search.languageLabels.localSearchPre + ' <em><b>' + data.responseHeader.params.q + '</b></em> from ' + siteLimit + ' ' + CDC.Search.languageLabels.localSearchPost + '.<br />');
          html.push(CDC.Search.languageLabels.localSearchAllPre + ' <a href="' + config.searchResultsLocation + '?subset=topic&query=' + data.responseHeader.params.q + '"><em><b>' + data.responseHeader.params.q + '</b></em>&nbsp; ' + CDC.Search.languageLabels.localSearchAllPost + '?</a>');
        }

        if (false !== bbData) {
          var bbResults = bbData.response.docs;

          for (var i = 0; i < bbResults.length; i++) {
            var bbDescription = bbResults[i].BB_description,
                bbTitle = bbResults[i].BB_title,
                bbTitleBolded;

            if ('undefined' === typeof bbDescription) {
              bbDescription = '';
            }

            bbDescription = bbDescription.trim();
            bbDescription = boldTerm(bbDescription, CDC.Search.lastSearch);
            bbTitleBolded = boldTerm(bbTitle, CDC.Search.lastSearch);
            html.push(getSingleResultHTML(bbResults[i].BB_url, bbTitle, bbTitleBolded, '', bbDescription));
          }
        }

        for (var j = 0; j < results.length; j++) {
          var description = '',
              targetBlank = '',
              title = results[j].title,
              titleBolded,
              type = '',
              current = results[j];

          if ("undefined" !== typeof results[j].type) {
            type = results[j].type[0];
          }

          switch (type) {
            case 'application/pdf':
            case 'application/doc':
            case 'application/vnd.sealed-ppt':
            case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
            case 'application/vnd.ms-powerpoint':
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.template':
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            case 'application/vnd.ms-excel':
              targetBlank = ' target="_blank"';
              break;

            default:
              targetBlank = '';
          } //Use this if you want highlighting. Right now, highlighting length is too long


          if (current.url in data.highlighting && "description" in data.highlighting[current.url] && 0 < data.highlighting[current.url].description.length) {
            description = data.highlighting[current.url].description[0].replace(/(.{230})..+/, '$1&hellip;');
          } else if ("undefined" !== typeof current.description && 0 < current.description.length && "" !== current.description[0]) {
            // description = current.description[ 0 ].substring( 0, 150 )
            description = results[j].description[0].replace(/(.{230})..+/, '$1&hellip;');
          } else if (current.url in data.highlighting && "content" in data.highlighting[current.url] && 0 < data.highlighting[current.url].content.length) {
            description = data.highlighting[current.url].content[0].replace(/(.{230})..+/, '$1&hellip;');
          } else {
            description = "";
          }

          description = description || '';
          title = title || ''; //Strip HTML tags except <i> and <em>

          title = stripTags(title, '<em><i>'); //description = boldTerm(description, );

          titleBolded = boldTerm(title, data.responseHeader.params.q);

          if (3 === j) {
            html.push('<div data-adaptive-height="false" data-cdc-slider="thumbnail-slider" data-center-mode="false" data-equalize-images="false" data-larger-overlay-description="true" data-slides-to-scroll="3" data-slides-to-show="3"></div>');
          }

          html.push(getSingleResultHTML(results[j].url, title, titleBolded, targetBlank, description));
        } // PAGING


        if (data.response.numFound > config.defaultPageSize) {
          // NON MOBILE PAGING
          var disabled = 1 < CDC.Search.pageCurrent ? '' : 'disabled',
              loopStart = Math.ceil(CDC.Search.pageCurrent - config.defaultPagingChunk / 2),
              k = 1;
          html.push('<nav class="mt-4 nav d-flex justify-content-center" aria-label="Search Results Pagination">');
          html.push('<ul class="pagination">');
          html.push('	<li class="page-item ' + disabled + '"><a class="page-link" href="#" data-page="' + (CDC.Search.pageCurrent - 1) + '">' + CDC.Search.languageLabels.previous + '</a></li>');

          if (1 > loopStart) {
            loopStart = 1;
          }

          for (loopStart; loopStart <= CDC.Search.totalPages && k <= config.defaultPagingChunk; loopStart++) {
            var active = loopStart === CDC.Search.pageCurrent ? 'active' : '';
            html.push('	<li class="page-item d-none d-md-inline ' + active + '"><a class="page-link" href="#" data-page="' + loopStart + '">' + loopStart + '</a></li>');
            k++;
          }

          if (CDC.Search.totalPages > CDC.Search.pageCurrent) {
            html.push('<li class="page-item"><a class="page-link"  href="#" data-page="' + (CDC.Search.pageCurrent + 1) + '">' + CDC.Search.languageLabels.next + '</a></li>');
          }

          html.push('</ul>');
          html.push('</nav>');
        } // inject results html to the page


        $(".searchResultsData").html(html.join(''));
      } else {
        // 0 results
        zeroResults(data.response.numFound.toLocaleString(), data.responseHeader.params.q);
      }
    };

    var ESC_MAP = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    var escapeString = function escapeString(s, forAttribute) {
      return s.replace(forAttribute ? /[&<>'"]/g : /[&<>]/g, function (c) {
        return ESC_MAP[c];
      });
    };

    var getSingleResultHTML = function getSingleResultHTML(url, title, titleBolded, targetBlank, description) {
      var html = [];
      var titleForAttribute = escapeString(title, true);
      html.push('<div class="searchResultsModule">');
      html.push('<div class="searchResultsTitle lead"><a href="' + url + '" title="' + title + '"' + targetBlank + '>' + addDocsTag(url) + titleBolded + '</a></div>');
      html.push('<div class="searchResultsUrl">' + url + '</div>');
      html.push('<div class="searchResultsDescription">' + description + '</div>');
      html.push('</div>');
      return $('<div>').html(html.join('')).html();
    };

    var zeroResults = function zeroResults(numfound, term) {
      var html = [];
      html.push('<div class="searchResultsSummary"><strong>' + numfound + '</strong> ' + CDC.Search.languageLabels.returnedFor + ' <em>' + term + '</em> </div>');
      $(".searchResultsData").html(html.join(''));
      var apiUrlBase = solrRoot + '/internet/';

      if ('intranet' === searchEndpoint) {
        apiUrlBase = solrRoot + '/intranet/';
      }

      var spellingUrl = apiUrlBase + 'spell?wt=json&spellcheck.collateParam.q.op=AND&spellcheck.q=' + term;

      if ('vvv.cdc.gov' === window.location.host) {
        spellingUrl = 'http://vvv.cdc.gov/wp-content/plugins/cdc-gov/assets/cdc/json/sample-search-results-spelling.json?';
      } // API spelling typo call


      $.ajax({
        type: 'GET',
        url: spellingUrl,
        data: {
          wt: 'json'
        },
        dataType: 'jsonp',
        jsonp: 'json.wrf',
        crossDomain: true,
        cache: false,
        success: function success(data) {
          var didyoumeanHTML = [],
              collationQuery = '';

          if ('object' !== ('undefined' === typeof data ? 'undefined' : _typeof(data))) {
            data = JSON.parse(data);
          }
          /*
          if ( data.spellcheck.hasOwnProperty( 'collations' ) &&
                             1 < data.spellcheck.collations.length &&
                             data.spellcheck.collations[ 1 ].hasOwnProperty( 'collationQuery' ) ) {
          	collationQuery = data.spellcheck.collations[ 1 ].collationQuery;
          	if ( collationQuery ) {
          		didyoumeanHTML.push( '<h3>' + CDC.Search.languageLabels.zeroDidyoumean + ' <a href="#" class="didyoumean"><em>' + collationQuery + '</em></a>?</h3>' );
          		$( ".searchResultsData" ).append( didyoumeanHTML.join( '' ) );
          		$( '.didyoumean' ).on( 'click', function( e ) {
          			e.preventDefault();
          			setGetParameter( 'query', collationQuery );
          		} );
          	}
          }
          */
          // the API changed, so made some adjustments for the new field names


          if (data.hasOwnProperty("spellcheck") && 1 < data.spellcheck.suggestions.length && data.spellcheck.suggestions[1].hasOwnProperty("suggestion")) {
            collationQuery = data.spellcheck.suggestions[1].suggestion;

            if (collationQuery.length) {
              // sort by freq to get the most reasonable match
              collationQuery.sort(function (a, b) {
                return a.freq < b.freq ? 1 : -1;
              });
              didyoumeanHTML.push("<h3>" + CDC.Search.languageLabels.zeroDidyoumean + " <a href=\"#\" class=\"didyoumean\"><em>" + collationQuery[0].word + "</em></a>?</h3>");
              config.$searchResultsBody.append(didyoumeanHTML.join(""));
              $(".didyoumean").on("click", function (e) {
                e.preventDefault();
                setGetParameter("query", collationQuery[0].word);
              });
            }
          }
        }
      });
    };

    var spanishPageCleanUp = function spanishPageCleanUp() {
      // cleanup page for spanish
      if ('spanish' === CDC.Search.language) {
        $('html').attr('lang', 'es-us').addClass('esp'); // set placeholder

        $('.search-input input').attr('placeholder', 'BUSCAR'); //$('.titlebar h1').html(CDC.Search.languageLabels.searchResults);

        $('input[name="affiliate"]').attr('value', 'cdc-es');
        $('form.searchForm').attr('action', config.searchResultsLocationEPS);
      }
    };

    var setupListeners = function setupListeners() {
      if ($('.tp-search').length) {
        $('.tp-search').each(function () {
          var input = $(this).find('input[name="query"]'),
              $cancelButton = $(this).find('.form-control-clear'),
              form = $(this).find('form'),
              isSubmit = false,
              code,
              searchTerm = CDC.Search.lastSearch;
          form.on('submit', function (e) {
            code = e.keyCode ? e.keyCode : e.which;
          }).on('keydown', function (e) {
            code = e.keyCode ? e.keyCode : e.which;
            isSubmit = 13 === code;
          });
          $cancelButton.on('click', function (e) {
            if (!isSubmit) {
              input.val('');
              input.focus(); // Also need to clear out the "hidden" VP1/VP2 search box.

              input.val('');
              $('.searchTypeAhead').remove();
              $(this).css('visibility', 'hidden');
              e.preventDefault();
            }
          }); // Search Key Up

          input.each(function () {
            handleSearchKeyEvents(input, $cancelButton);
          }).on('keyup', function () {
            handleSearchKeyEvents(input, $cancelButton);
            handleTypeAhead($(this));
          });
          spanishPageCleanUp();
        });
      } // · All Tab Click – cdcsitesearch:tab-all
      // · Videos Tab Click – cdcsitesearch:tab-videos
      // · Journals Tab Click – cdcsitesearch:tab-journals
      // · Podcast Tab Click – cdcsitesearch:tab-podcasts
      // · Video Carousel – cdcsitesearch-carousel-video
      // o   If possible, can we distinguish the values between positions 1,2,3 on the carousel?  lIke “cdcsitesearch-carousel-video1”


      $('a[href="#allresults"]').on('click', function () {
        $(this).trigger('metrics-capture', ['cdcsitesearchtab-all', 'click']);
      });
      $('a[href="#videoresults"]').on('click', function () {
        $(this).trigger('metrics-capture', ['cdcsitesearchtab-videos', 'click']);
      });
      $('a[href="#journalresults"]').on('click', function () {
        $(this).trigger('metrics-capture', ['cdcsitesearchtab-journals', 'click']);
      });
      $('a[href="#podcastresults"]').on('click', function () {
        $(this).trigger('metrics-capture', ['cdcsitesearchtab-podcasts', 'click']);
      }); // wait for the slider to appear then tag each slide with a metrics trigger

      var idx = 0,
          slickInterval = window.setInterval(function () {
        if ($('.slick-initialized').length) {
          window.clearInterval(slickInterval);
          $('div[class~="slick-slide"]:not([class~="slick-cloned"]) .slide-content > a').each(function (i) {
            $(this).on('click', function () {
              $(this).trigger('metrics-capture', ['cdcsitesearch-carousel-video' + i, 'click']);
            });
          });
        } // abort if the slider doesn't appear after 20 tries


        if (20 < idx) {
          window.clearInterval(slickInterval);
        }

        idx++;
      }, 300);
    };

    var setupSearchListeners = function setupSearchListeners() {
      var $btnPageNext = $(".searchResultsData .searchBtnNext"),
          $btnPagePrev = $(".searchResultsData .searchBtnPrev"),
          $btnPagination = $(".searchResultsData .pagination a");
      $btnPageNext.on('click', function (e) {
        e.preventDefault();
        var pageNew = CDC.Search.pageCurrent + 1;
        setGetParameter('dpage', pageNew);
      });
      $btnPagePrev.on('click', function (e) {
        e.preventDefault();
        var pageNew = CDC.Search.pageCurrent - 1;
        setGetParameter('dpage', pageNew);
      });
      $btnPagination.on('click', function (e) {
        e.preventDefault();
        var pageNew = $(this).attr('data-page');

        if (1 > pageNew || pageNew === CDC.Search.pageCurrent) {
          return false;
        } else {
          setGetParameter('dpage', pageNew);
        }
      }); // if we're using the new search form

      /*if ($('.search-form-wrapper').length) {
                   $('.search-form-wrapper').each(function () {
                       var input = $(this).find('.search-input input'),
                           $cancelButton = $(this).find('.btn-clear'),
                           form = $(this).parent('.searchForm'),
                           isSubmit = false,
                           code,
                           searchTerm = CDC.Search.lastSearch,
                           $btnPageNext = $('.searchBtnNext'),
                           $btnPagePrev = $('.searchBtnPrev'),
                           $btnPagination = $('.pagination a');
      
                   });
               }*/
    };

    var handleSearchKeyEvents = function handleSearchKeyEvents(t, b) {
      // set all the search inputs to the same value
      //$('.search-input input:hidden').val(t.val());
      if (0 < t.val().length) {
        b.css('visibility', 'visible');
      } else {
        b.css('visibility', 'hidden');
      }
    };

    var handleTypeAhead = function handleTypeAhead(t) {
      var $searchWrapper = $(t).parent(),
          typeLength = t.val().length,
          html = [];

      if (5 < typeLength) {
        if (0 === $('.searchTypeAhead').length) {
          html.push('<div class="searchTypeAhead"><div class="searchTypeAheadWrap"><ul></ul></div></div">');
          $searchWrapper.append(html.join(''));
        }

        getTypeAheadValues(t.val());
      } // clear dropdown


      if (0 === typeLength) {
        $('.searchTypeAhead').remove();
      }
    };

    var getTypeAheadValues = function getTypeAheadValues(val) {
      var searchType;

      if ('intranet' === searchEndpoint) {
        searchType = $('#searchSelected-intranet')[0].innerText.trim();

        if (" " === searchType.charAt(searchType.length - 1)) {
          searchType = searchType.substr(0, searchType.length - 1);
        }
      }

      if ('People Finder' !== searchType) {
        var typeAheadHtml = [];
        var apiUrlBase = solrRoot + '/internet/';

        if ('intranet' === searchEndpoint) {
          apiUrlBase = solrRoot + '/intranet/';
        }

        var typeAheadUrl = apiUrlBase + 'terms?wt=json&terms=true&terms.fl=suggest_term&terms.prefix=' + val + '&indent=true&omitHeader=true&terms.sort=count&terms.limit=' + config.defaultAutoSuggest;

        if ('vvv.cdc.gov' === window.location.host) {
          typeAheadUrl = 'http://vvv.cdc.gov/wp-content/plugins/cdc-gov/assets/cdc/json/sample-search-results-typeahead.json?';
        } else if ('127.0.0.1:8080' === window.location.host) {
          typeAheadUrl = '/TemplatePackage/4.0/assets/test-files/sample-search-results-typeahead.json?';
        } // hit api


        $.ajax({
          type: 'GET',
          url: typeAheadUrl,
          dataType: 'jsonp',
          jsonp: 'json.wrf',
          crossDomain: true,
          cache: false,
          success: function success(data) {
            // not sure why this is needed, but it is ??
            var mydata = data;

            if ('object' !== _typeof(data)) {
              mydata = JSON.parse(data);
            }

            if (0 < mydata.terms.suggest_term.length) {
              for (var i = 0; i < mydata.terms.suggest_term.length; i++) {
                // revisit this logic for evens only based on data structure
                if (1 !== i % 2) {
                  typeAheadHtml.push('<li><a href="#" data-searchterm="' + mydata.terms.suggest_term[i] + '">' + mydata.terms.suggest_term[i] + '</a></li>');
                }
              } // inject back to the list


              $('.searchTypeAheadWrap ul').html(typeAheadHtml.join('')); // assign clicks

              $('.searchTypeAheadWrap ul li a').on('click', function (e) {
                e.preventDefault(); // var clickTerm = $(this).attr('data-searchterm'),
                // 	forwardTo = '//www.cdc.gov/search/?query=' + clickTerm;
                // if (CDC.Search.language === 'spanish') {
                // 	forwardTo = '//www.cdc.gov/search/spanish?query=' + clickTerm;
                // }
                //TODO make the intranet network a variable in the grunt build so we can have a test json file to test against in local

                var clickTerm = $(this).attr('data-searchterm');
                var forwardTo = window.location.protocol + '//' + actionDomain + '/search/?query=' + clickTerm;

                if ('spanish' === CDC.Search.language) {
                  forwardTo = window.location.protocol + '//' + actionDomain + '/search/spanish?query=' + clickTerm;
                }

                window.location = forwardTo;
              });
            }
          }
        });
      }
    };
    /*
           * Hack to rename one of the checkboxes so only 1 subset is submitted
           */


    var handleSubset = function handleSubset(viewport) {
      var cb1 = $('td.labletd input:checkbox'),
          cb2 = $('td.hidden-three input:checkbox');

      if (4 === viewport || 2 === viewport) {
        cb1.attr('name', 'NOTUSED');
        cb2.attr('name', 'subset');
      } else {
        cb1.attr('name', 'subset');
        cb2.attr('name', 'NOTUSED');
      }
    };
    /**
     * @function hideSearchBar
     * @access private
     * @desc Hide mobile search bar from specific viewports
     */


    var hideSearchBar = function hideSearchBar(viewport) {
      if (3 === viewport || 4 === viewport) {//$(".searchbar").hide();
        //$('#mobile-menu li').removeClass("border-bottom-cdcblue border-bottom-white").addClass("border-bottom-white");
      }
    };

    var addDocsTag = function addDocsTag(url) {
      var docDetect = url.substr(-6),
          prefix = '';

      if (-1 < docDetect.toLowerCase().indexOf('.pdf')) {
        prefix = '<small>[PDF]</small> ';
      }

      if (-1 < docDetect.toLowerCase().indexOf('.doc')) {
        prefix = '<small>[DOC]</small> ';
      }

      if (-1 < docDetect.toLowerCase().indexOf('.ppt')) {
        prefix = '<small>[PPT]</small> ';
      }

      return prefix;
    };

    var boldTerm = function boldTerm(line, word) {
      line = line || '';
      var regex = new RegExp('(' + word + ')', 'gi');
      return line.replace(regex, "<span class=\"font-weight-bold\">$1</span>");
    };

    var cleanSearchString = function cleanSearchString(searchTerm) {
      // strip funky characters
      var cleanString = searchTerm.replace(/[|;$%#<>()+]/g, ""); // encodeURI for special characters (spanish accents)

      cleanString = encodeURI(cleanString);
      return cleanString;
    };

    var getParameterByName = function getParameterByName(name, url) {
      if (!url) {
        url = window.location.href;
      }

      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);

      if (!results) {
        return null;
      }

      if (!results[2]) {
        return '';
      }

      return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

    var setGetParameter = function setGetParameter(paramName, paramValue) {
      var url = window.location.href;
      var hash = location.hash;
      url = url.replace(hash, '');

      if (0 <= url.indexOf(paramName + "=")) {
        var prefix = url.substring(0, url.indexOf(paramName));
        var suffix = url.substring(url.indexOf(paramName));
        suffix = suffix.substring(suffix.indexOf("=") + 1);
        suffix = 0 <= suffix.indexOf("&") ? suffix.substring(suffix.indexOf("&")) : "";
        url = prefix + paramName + "=" + paramValue + suffix;
      } else if (0 > url.indexOf("?")) {
        url += "?" + paramName + "=" + paramValue;
      } else {
        url += "&" + paramName + "=" + paramValue;
      }

      window.location.href = url + hash;
    };

    return {
      /**
       * @method init
       * @access public
       * @desc Initiate search module
       * @param {Object} [c]
       */
      init: function init(c) {
        if (c && 'object' === _typeof(c)) {
          $.extend(config, c);
        } // change to load videos, journals and podcasts on demand
        // videos was removed per Brian, per Fred so the slider will load on the main search results page


        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
          if ('#videoresults' === e.target.hash) {// window.CDC.Search.Videos.init();
          }

          if ('#journalresults' === e.target.hash) {
            window.CDC.Search.Journals.init();
          }

          if ('#podcastresults' === e.target.hash) {
            window.CDC.Search.Podcasts.init();
          }
        });

        if ($(searchResults).length) {
          getResults(function () {
            setupSearchListeners();
          });
        }

        setupListeners();
      },

      /**
       * @method hide
       * @access public
       * @desc Call private function to hide search bar
       * @param {integer} vp
       */
      hide: function hide(vp) {
        hideSearchBar(vp);
      }
    };
  }(jQuery, window, CDC.Global);
})(window.jQuery, window, window.document);
'use strict';
/**
 * tp-tables.js
 * @fileOverview Contains table code.
 * @version 0.1.0.0
 * @copyright 2018 Centers for Disease Control
 */

(function ($, window, document, undefined) {
  var vps = ['unknown', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      vp = '',
      viewport;
  $(window).on('load resize', function () {
    vp = window.CDC && window.CDC.tp4 && window.CDC.tp4.public ? window.CDC.tp4.public.getViewport() : null;
    viewport = vps.indexOf(vp);

    if (4 > viewport) {
      $('.opt-in > tbody > tr').slice(0, 5).addClass('expanded').last().addClass('faded');
    }
  });
  $('.opt-in + div > .expander').click(function (e) {
    e.preventDefault(); //https://websupport.cdc.gov/browse/WCMSRD-6157

    var $table = $(this).parent().prev('table');
    $table.addClass('expanded');
    $table.find('tr.faded').removeClass('faded');
  });
})(jQuery, window, document);
'use strict';
/**
 * tp-tabs.js
 * @fileOverview Contains tabs code.
 * @version 0.1.0.0
 * @copyright 2018 Centers for Disease Control
 */

(function ($, window, document, undefined) {
  // fraught with peril
  // if a user is using the arrow keys to navigate tabs
  $(document).on('keyup', function (e) {
    if (document.hasFocus()) {
      if ('tab' === $(document.activeElement).attr('role')) {
        if (39 === e.keyCode) {
          if ($(document.activeElement).parent('li').next().length) {
            $(document.activeElement).parent('li').next().find('a').trigger('click').focus();
          }
        }

        if (37 === e.keyCode) {
          if ($(document.activeElement).parent('li').prev().length) {
            $(document.activeElement).parent('li').prev().find('a').trigger('click').focus();
          }
        }
      }
    }
  });
  $('.card-accordion .card-header').on('click', function () {
    if ('true' === $(this).attr('aria-expanded')) {
      $(this).trigger('metrics-capture', ['accordion-header-collapse', 'close']);
    } else {
      $(this).trigger('metrics-capture', ['accordion-header-collapse', 'open']);
    }
  });
})(jQuery, window, document);
'use strict';
/**
 * video.js
 * @fileOverview Contains the Video Player module
 * @version 0.2.0.0
 * @copyright 2018 Centers for Disease Control
 */

(function ($, window, document, undefined) {
  var pluginName = "cdc_videoPlayer",
      defaults = {
    container: '.video-container'
  };

  function CDCPlugin(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  CDCPlugin.prototype = {
    init: function init() {
      //var defaults = this._defaults;
      this.bindEvents();
    },
    bindEvents: function bindEvents() {
      var t = this,
          x = 0;
      $(".videoPlay").on("click", function (e) {
        t.playPause();
        $(this).find("i").toggleClass("fa-play").toggleClass("fa-pause");
      });
      $(".videoDownload").on("click", function (e) {
        if ($(this).attr("data-href")) {
          window.location = $(this).attr("data-href");
        } else {// No Video Download
        }
      });
    },
    playPause: function playPause() {
      var container = $(this._defaults.container).get(0);

      if (container.paused) {
        container.play();
      } else {
        container.pause();
      }
    }
  };
  $('.modal-video-container').on('hidden.bs.modal', function () {
    $(this).find('iframe').each(function () {
      // this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      $(this).attr('src', $(this).attr('src'));
    });
  }); // don't let the plugin load multiple times

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new CDCPlugin(this, options));
      }
    });
  };
})(jQuery, window, document);
'use strict';
/**
 * app.js
 * @fileOverview Contains module and constructors to initiate any global application functionality outside the scope of bootstrap, contents ported from prototypical examples
 * @version 0.1.0.0
 * @copyright 2018 Centers for Disease Control
 */

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($, window, document, undefined) {
  $(document.body).toggleClass('no-js js');
  /*jshint esversion: 6 */
  // VIEWPORT SNIFFER

  var vps = ['unknown', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      vpName = '',
      vpNumber = null;

  function deepLink() {
    //handles initial load only, no resizing
    var tabs = $('.nav-tabs').length,
        accordions = $('.accordion').length,
        hash = window.location.hash;
    var sanitizedHash = $.escapeSelector(window.location.hash.substr(1)); // if we have a hash and it exists on the page... else kick us back out

    if (hash && $('#' + sanitizedHash).length) {
      console.log('matching hash found: ', hash);
    } else {
      return false;
    } // tabs have a different target than accordions


    if (tabs) {
      if ($('.nav-tabs ').has('a[href="' + hash + '"]')) {
        $('.nav-tabs a[href="' + hash + '"]').tab('show'); //tabs --> accordions

        if ($('.accordion').children('.tab-content')) {
          var $header = $('#heading-' + hash.substring(1));
          var $target = $($header.data('target'));
          $target.collapse('show');
          $header.parent().siblings().find('.collapse').collapse('hide');
          hash = $target;
        }
      } else {
        $('.tab-content').find(hash).closest('[role^="tab"]').collapse('show');
      }
    } else if (accordions) {
      var test = $('.accordion').find(hash).data('parent');

      if (_typeof(test) !== _typeof(undefined)) {
        $(hash).collapse('show');
        $(hash).siblings('[role="tab"]').collapse('hide');
      } else {
        var panel = $('.accordion').find(hash).closest('[role^="tab"]');
        panel.collapse('show');
        panel.siblings('[role^="tab"]').collapse('hide');
      }
    } // scroll into view - small timeout to allow for redraw


    setTimeout(function () {
      $(hash)[0].scrollIntoView();
    }, 500);
  }

  var handleOnEvents = window.CDC.Common.debounce(function (eType) {
    window.console.log('Event:', eType, '\nViewport:', window.CDC.tp4.public.getViewport('number')); // Is the an onload event?

    if ('onload' === eType) {
      // Initialize the application
      // window.CDC.tp4.public.appInit({
      //     metrics: {
      //         pageName: 'custom - from init'
      //     }
      // });
      if (0 < window.location.hash.length) {
        return deepLink();
      }
    } else if (window.CDC.Common.metrics) {
      // Metrics updates (must happen after appInit, otherwise metrics won't exist)
      // Update CDC Common
      window.CDC.Common.metrics.updateParams({
        c49: window.CDC.tp4.public.getViewport('name') // Update Viewport on change

      });
    }

    return true;
  }, 300);

  window.onresize = function () {
    return handleOnEvents('onresize');
  };

  window.onload = function () {
    return handleOnEvents('onload');
  };

  $(window).on('hashchange', function () {
    return deepLink();
  });
  window.CDC = window.CDC || {};
  window.CDC.tp4 = window.CDC.tp4 || {};
  window.CDC.tp4.public = window.CDC.tp4.public || {};

  window.CDC.tp4.public.getViewport = function (returnType) {
    returnType = returnType || 'number';
    vpName = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '').replace(/\'/g, '');
    vpNumber = vps.indexOf(vpName);

    if ('name' === returnType) {
      return vpName;
    }

    return vpNumber;
  };

  window.CDC.tp4.public.metricsInit = function (settingsDirectlyPassed, interactionsListenerArray) {
    // The intent of this method is to allow for updating of metrics properties in a few different ways:
    // 1. data attributes on a configurable meta tag -> so markup can provide metrics data (data-propX="valX")
    // 2. Directly set via the app init -> which is usually passed to the app init (appInit(objSettings[...metrics settings in here]))
    // 3. Apply interaction level listeners (via jquery) to the DOM based ona configuration map -> So the listeners are consistent, configurable, and in a single location (configureInteractionTracking($, interactionsListenerArray))
    var settingsMetaTag = $('meta[name=site-metrics-settings]'),
        settingsFromMeta = {}; // Set defaults for interaction listeners array

    interactionsListenerArray = interactionsListenerArray || []; // Supplement args pased with metrics-settings meta tag attributes

    if (settingsMetaTag.length) {
      $.each(settingsMetaTag[0].attributes, function (i, attrib) {
        if (-1 < attrib.name.indexOf('data-metrics-')) {
          settingsFromMeta[attrib.name.replace('data-metrics-', '')] = attrib.value;
        }
      });
    } // Set settingsFinal = settingDefaults, overridden by settingsFromMeta, overridden by settingsDirectlyPassed, overridden by manual values;


    var settingsFinal = Object.assign({}, settingsFromMeta, settingsDirectlyPassed, {
      c49: window.CDC.tp4.public.getViewport('name')
    });
    console.log('FINAL METRICS SETTINGS', settingsFinal); // CDC METRICS INIT

    window.CDC.Common.metrics.init({
      trackAs: 'webPage',
      loadPageLevel: false,
      translation: {
        fromKey: 'omnitureJsVarName',
        appendTranslations: false
      }
    }); // Update common metrics param values from omnitures settings

    window.CDC.Common.metrics.updateFromOmniture('webPage'); // Update common metrics param values with final settings (from settingsFinal object above)

    window.CDC.Common.metrics.updateParams(settingsFinal); // Initialize Interaction Tracking

    window.CDC.Common.metrics.configureInteractionTracking($, interactionsListenerArray); // Update Omniture with latest latest updated settings

    window.CDC.Common.metrics.updateOmniture();
  };

  window.CDC.tp4.public.metricsTrackPage = function () {
    // Update common metrics from omniture
    window.CDC.Common.metrics.updateParams(window.s); // Track the page level beacon

    if (window.s && window.s.t) {
      // Update the level variables here.
      window.updateVariables(window.s);
      console.log('Updating Variables', window.s);
      /************* A: DO NOT ALTER ANYTHING BETWEEN HERE AND B ! **************/

      var s_code = window.s.t();

      if (s_code) {
        document.write(s_code);
      }

      if (0 <= navigator.appVersion.indexOf('MSIE')) {
        document.write(unescape('%3C') + '\!--');
      }
      /************* B: DO NOT ALTER ANYTHING BETWEEN HERE AND A ! **************/


      return s_code;
    } else {
      //throw 'Error, unable to initialize metrics for Template Package 4.0';
      console.log('Error, unable to initialize metrics for Template Package 4.0');
    }
  };

  window.CDC.tp4.public.metricsUpdate = function (objProperties) {
    return window.CDC.Common.metrics.updateParameters(objProperties);
  };

  window.CDC.tp4.updateSocialSyndLink = function () {
    var socialUrl = "https://tools.cdc.gov/medialibrary/index.aspx#/sharecontent/";
    var canonicalMeta = $('[rel="canonical"]').attr('href');
    socialUrl = canonicalMeta ? socialUrl + canonicalMeta : socialUrl + window.location; // update social bar

    if ($('.page-share-syndication').length) {
      $('.page-share-syndication').attr('href', encodeURI(socialUrl));
    } // update footer


    $('.footer-syndlink').attr('href', encodeURI(socialUrl));
  };

  window.CDC.tp4.cdcCarouselInit = function (objDefaultOverrides) {
    if ($().slick && $().cdcCarousel) {
      // initialize the carousel plugin, just not on the thumbnailscarousel-
      $('[data-cdc-slider]').not('.slick-initialized').cdcCarousel(objDefaultOverrides);
    } else if (console.error) {
      console.error('The Slick jQuery plugin is required.');
    } else {
      console.log('The Slick jQuery plugin is required.');
    }
  };

  window.CDC.tp4.cdcAudioInit = function () {
    if ($().audioly) {
      $('audio').audioly();
    } else if (console.error) {
      console.error('The Bootstrap 4 Audio plugin is required.');
    } else {
      console.log('The Bootstrap 4 Audio plugin is required.');
    }
  };

  window.CDC.tp4.govdAlertInit = function () {
    var domains = ['lnks.gd', 'links.govdelivery.com'],
        // referral domains to run against, could add cdc.gov to test against
    a = document.createElement('a'),
        // create an "a" element to validate host against
    tp3 = document.getElementsByClassName('span24').length,
        // only BS2 has span## elements, so using as an indicator
    target = tp3 ? 'content' : 'content',
        // ID of the target element of the alert e.g. "skipmenu"
    dateparse = true,
        // do we want to run between two dates?
    startdate = '03/08/2019',
        enddate = '11/22/2019',
        dismissable = true,
        // is the banner dismissable?
    position = tp3 ? 'afterbegin' : 'afterend',
        // "afterbegin, afterend, beforebegin, beforeend"
    managesubscriptionsurl = 'https://tools.cdc.gov/campaignproxyservice/subscriptions.aspx',
        title = 'CDC Has a New Email Service',
        message = 'We recently changed email services; new email will be sent from <a href="mailto:subscriptions@cdc.gov">subscriptions@cdc.gov</a>. If you wish to continue to receive emails from us, please sign up at <a href="' + managesubscriptionsurl + '">the Manage your subscription page.</a>';

    if (document.getElementById('govdMessage')) {
      // if the message is already on the page, exit
      return;
    }

    if (dateparse) {
      // if the message should appear between two dates
      var start = Date.parse(startdate),
          // start date
      end = Date.parse(enddate),
          // end date
      now = Date.now(); // today

      if (isNaN(start) || isNaN(end)) {
        // if the dates aren't valid dates, exit
        console.log('Please check start and end dates for valid dates. Each date should be formatted as MM/DD/YYYY');
        return;
      } // if the start and end dates are backwards
      // OR if today is on or after the end date
      // OR if today is before the start date


      if (start > end || now >= end || now < start) {
        return;
      }
    }

    a.href = document.referrer; // referring URL

    if (0 < domains.indexOf(a.hostname)) {
      // if the referring hostname is in the domains array
      var domelement = document.getElementById(target); // find the element to append the message to

      if (domelement) {
        // if it exists, append the message
        var button = '';

        if (tp3) {
          // the alert is different for TP3 than TP4
          if (dismissable) {
            // if the alert is dismissable, add the classes and button required
            button = '<button type="button" class="close" data-dismiss="alert">&times;</button>';
          }

          domelement.insertAdjacentHTML(position, '<div id="govdMessage" class="alert alert-info">' + button + '<h4>' + title + '</h4><p>' + message + '</p></div>');
        } else {
          if (dismissable) {
            // if the alert is dismissable, add the classes and button required
            button = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
          }

          domelement.insertAdjacentHTML(position, '<div id="govdMessage" class="alert alert-info rounded-0 alert-dismissible fade show" role="alert"><p class="h4 alert-heading">' + title + '</p><p>' + message + '</p>' + button + '</div>');
        }
      }
    }
  }; // window.CDC.tp4.public.cdcCollapse = function () {
  // 	if ($().cdc_collapse) {
  //         $(document).cdc_collapse();
  //     } else {
  // 		if (console.error) {console.error('The cdcCollapse plugin is required.');}
  // 		else {console.log('The cdcCollapse plugin is required.');}
  //     }
  // };

  /**
   * tp-search.js
   * @fileOverview Contains module and constructors to handle navigation behavior outside of the scope of bootstrap
   * @version 0.1.0.1
   * @copyright 2018 Centers for Disease Control
   */

  /**
   * search.js
   * Event handling for resizing/responsive elements
   * @version 1.0.0.0
   * @copyright 2013 Centers for Disease Control
   */

  /** Does global CDC namespace exists? */


  CDC = CDC || {}; // window.CDC.Search = CDC.Search || ( function( w, g ) {
  // 	return {
  // 		init: function( c ) {
  // 		}
  // 	};
  // } )();

  window.CDC.tp4.cdcInitSharedComponents = function () {
    /* ITEMS TO BE INITIALIZED WHICH ARE COMMON TO
          BOTH TP4 AND OTHER CHANNELS LIKE SYNDICATION */
    window.CDC.tp4.cdcAudioInit();
    window.CDC.tp4.cdcCarouselInit();
    $(document).cdc_collapse();
    $(document).cdc_videoPlayer();
    $(document).cdc_images();
    window.CDC.tp4.govdAlertInit();
  }; // Application Initialization


  window.CDC.tp4.public.appInit = function (settings) {
    settings = settings || {};
    settings.navigation = settings.navigation || {};
    settings.metrics = settings.metrics || {}; // The following interaction tracking mechanism does not appear to work as expected for built-in TP4 features.  Metrics
    // tracking was moved to tp-interactions.js.

    settings.interactionTrackList = settings.interactionTrackList || [];
    /* ITEMS TO BE INITIALIZED WHICH ARE SPECIFIC TO TP4
          (NOT USED IN OTHER CHANNELS LIKE SYNDICATION) */

    window.CDC.tp4.public.metricsInit(settings.metrics, settings.interactionTrackList);
    window.CDC.tp4.public.metricsTrackPage();
    window.CDC.tp4.interactionMetrics.init({});
    window.CDC.tp4.nav.init(settings.navigation);
    window.CDC.tp4.search.init();
    window.CDC.tp4.updateSocialSyndLink();
    window.CDC.tp4.extLinks.init();
    $(document).cdc_multipagenav();
    $(document).cdc_levelnav(settings.navigation);
    $(document).cdc_social_media(); // INIT COMMON COMPONENTS

    window.CDC.tp4.cdcInitSharedComponents();
  }; // Syndication Widget Initialization


  window.CDC.tp4.public.syndInit = function (settings) {
    settings = settings || {}; // Stubbed out for future use
    // INIT COMMON COMPONENTS

    window.CDC.tp4.cdcInitSharedComponents();
  }; // $( '.match-height .card .card-header' ).matchHeight();
  // $( '.match-height .card .card-body' ).matchHeight();
  // $( '.match-height .card .card-footer' ).matchHeight();


  $('.match-height .card').matchHeight();
  $('.match-height .card.card-multi').matchHeight(); //$( '.match-height .card.card-multi .card-body .card .card-header' ).matchHeight();
  //$( '.match-height .card.card-multi .card-body .card .card-body' ).matchHeight();
  //$( '.match-height .card.card-multi .card-body .card .card-footer' ).matchHeight();

  $('.match-height .card.card-multi .card-body .card').matchHeight(); //$( '.match-height .nav-btn.card .card-header' ).matchHeight();

  $('.match-height .nav-btn.card .card-body').matchHeight(); //$( '.match-height .nav-btn.card .card-footer' ).matchHeight();

  $('.match-height .nav-btn.card').matchHeight({
    byRow: false,
    property: 'height',
    target: null,
    remove: false
  });
})(jQuery, window, document);

console.log('tp-app.js complete');