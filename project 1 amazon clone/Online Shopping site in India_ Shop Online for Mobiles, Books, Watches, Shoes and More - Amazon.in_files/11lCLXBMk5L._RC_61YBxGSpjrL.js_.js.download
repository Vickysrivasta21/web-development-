(function(e){var k=window.AmazonUIPageJS||window.P,l=k._namespace||k.attributeErrors,f=l?l("AmazonHomepageCardAssets",""):k;f.guardFatal?f.guardFatal(e)(f,window):f.execute(function(){e(f,window)})})(function(e,k,l){e.register("gw-video-orchestrator",function(){function f(a,b,g){return 0<a?Math.min(g-a,b-a):0<b?Math.min(b,g):0}function n(a){var b=k.innerHeight||document.documentElement.clientHeight,g=k.innerWidth||document.documentElement.clientWidth;a=a.getBoundingClientRect();b=f(a.top,a.bottom,
b);g=f(a.left,a.right,g);var c=0;if(0<b||0<g)c=b*g;return Math.min(1,Math.max(0,c/((a.bottom-a.top)*(a.right-a.left))))}function p(a,b){return a&&1===a.nodeType&&(a.offsetWidth||a.offsetHeight||a.getClientRects().length)?n(a)<b?!1:!0:!1}function m(a){a=q(a);a!==c&&(c&&c.callback(!1),(c=a)&&"hidden"!==document.visibilityState&&c.callback(!0))}function q(a){if(a)for(var b=d.length;b--;)if(d[b].element===a)return d[b]}function r(a,b){return b.priority-a.priority||n(b.element)-n(a.element)||(a.element.compareDocumentPosition(b.element)&
Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}function t(){if("hidden"in document)return"visibilitychange";for(var a=["webkit","moz","ms"],b=0;b<a.length;b++)if(a[b]+"Hidden"in document)return a[b]+"visibilitychange"}function u(){document.addEventListener(t(),function(){c&&("hidden"===document.visibilityState?c.callback(!1):c.callback(!0))})}var d=[],c,h=function(){c||d.length&&90<=d[0].priority&&m(d[0].element)};e.when("A","ready").execute(function(a){var b=a.capabilities.isAmazonApp;h=function(){if(d.length&&
(!c||!p(c.element,c.minVisiblePercentForLeader||(b?.95:.5))||"visible"!==getComputedStyle(c.element).visibility)){var a=d.filter(function(a){return p(a.element,a.minVisiblePercentForLeader||(b?.95:.5))&&"visible"===getComputedStyle(a.element).visibility});m(0<a.length?a[0].element:l)}};a.on("scroll resize orientationChange",h);a.on("gw:mobile:registerHorizontalScrolling",function(a){a.addEventListener("scroll",h)});e.when("gw-desktop-herotator").execute(function(a){a.addObserver("animation_complete",
h)});u();h()});return{subscribe:function(a,b,c){if(!a||!b)throw Error("Subscribe required a valid element and callback function");c=c||{};b={element:a,callback:e.guardCurrent(b),minVisiblePercentForLeader:c.minVisiblePercentForLeader,priority:c.priority||50};if(q(a))throw Error("element is already subscribed");d.push(b);d.sort(r);h()},unsubscribe:function(a){if(!a)throw Error("unsubscribe requires a valid element");c&&c.element===a&&m();for(var b=d.length;b--;)d[b].element===a&&(d.splice(b,1),h())},
elect:m,subscribeToHorizontal:function(a){e.when("A","ready").execute(function(b){b.trigger("gw:mobile:registerHorizontalScrolling",a)})}}})});
/* ******** */
////////////////////////////////////////////
;(function (packageFunction) {
  /* istanbul ignore next */
  var p = window.AmazonUIPageJS || window.P;
  /* istanbul ignore next */
  var attribute = p._namespace || p.attributeErrors;
  /* istanbul ignore next */
  var namespacedP = attribute ? attribute("AmazonGatewayAuiAssets", "") : p;

  /* istanbul ignore next */
  if (namespacedP.guardFatal) {
    namespacedP.guardFatal(packageFunction)(namespacedP, window);
  } else {
    namespacedP.execute(function () {
      packageFunction(namespacedP, window);
    });
  }
}(function(P, window, undefined){
// BEGIN ASSET AmazonGatewayAuiAssets - 2.0
/////////////////////////
// BEGIN FILE instrument.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
"use strict";
// load latency of this asset
P.register('gateway-asset-load', function() {
  window.uet && window.uet('cf', 'gateway-asset-load', {wb: 1});
  window.uex && window.uex('ld', 'gateway-asset-load', {wb: 1});
});
// report image sizes
P.when('A', 'atfWidgetComponent', 'load').execute('ah-inst-img-size', function(A, atfWidgetComponent) {
  var $ = A.$,
      W = window,
      carouselAtfLimit = 7,
      data = [];

  function getLowResImg(imgElement) {
    if(!imgElement){
      return null;
    }
    var lowRes = imgElement.src;
    var hiRes = $(imgElement).data('a-hires');
    if(lowRes === hiRes) {
       return null;
    } else {
      return lowRes;
    }
  }

  function logCounter(counter) {
    if(typeof W.ue === 'object' && typeof W.ue.count === 'function') {
      W.ue && W.ue.count(counter, (W.ue.count(counter) || 0) + 1);
    }
  }

  function queryImgLength(img, event){
    logCounter('gw-img-size-invoke');
    $.ajax({
       type: 'HEAD',
       async: true,
       url: img,
       success: function(result, status, xhr) {
         var perfEntryArr = window.performance.getEntriesByName(img)
            .filter(function(obj) { return obj.initiatorType === "img"; });
         if (perfEntryArr.length > 0 && "decodedBodySize" in perfEntryArr[0]) {
           logCounter('gw-img-size-success');
           A.trigger(event, parseInt(perfEntryArr[0].decodedBodySize, 10));
           return;
         }
         logCounter('gw-img-size-error');
       },
       error: function(xhr, status, error) {
         logCounter('gw-img-size-error');
       }
    });
  }

  function instImages(images, metric, parentMetric) {
    data[metric] = {
      count: images.length,
      totalSize: 0,
      images: $.unique(images)
    };
    if (images.length == 0) {
      if (parentMetric) {
        aggregateMetric(metric, parentMetric);
      }
      return;
    }
    $(data[metric].images).each(function(index, img) {
      var event = metric + '_' + index;
      A.on(event, function(size) {
        if (!isNaN(size)) {
          data[metric].count -= 1;
          data[metric].totalSize += size;
          if (data[metric].count === 0) {
            W.ue && W.ue.count(metric, data[metric].totalSize);
            if (parentMetric) {
              aggregateMetric(metric, parentMetric);
            }
          }
        }
      });
      queryImgLength(img, event);
    });
  }

  function aggregateMetric(subMetric, parentMetric) {
    data[parentMetric].slotCount -= 1;
    data[parentMetric].totalSize += data[subMetric].totalSize;
    if (data[parentMetric].slotCount == 0) {
      W.ue && W.ue.count(parentMetric, data[parentMetric].totalSize);
    }
  }

  function instSingleImage(selector, metric){
    var imgEls = A.$(selector);
    var img = imgEls.length <= 0 ? null : getLowResImg(imgEls[0]);
    if(img) {
      instImages([img], metric);
    }
  }

  function getLowResImages(images, limit) {
    limit = limit || images.length;
    var imgPaths = [];
    $(images.slice(0, limit)).each(function(index, img) {
      var lowRes = getLowResImg(img);
      /* If hi-res image swap has already happened, then skip instrumentation */
      if(!lowRes){ return []; }
        imgPaths.push(lowRes);
    });
    return imgPaths;
  }

  function getAllImages(imgSelector) {
    return getLowResImages(A.$(imgSelector));
  }

  P.execute('inst-cf-img', function () {
    if (perfAPIAbsent()) return;
    logCounter('gw-inst-img');
    /* Instrument 1st hero or airy image */
    instSingleImage('.gw-critical-content img', 'gw-cf-img-size');
  });

  P.execute('inst-atf-img', function() {
    if (perfAPIAbsent()) return;
    logCounter('gw-atf-img');
    /* Instrument ATF images */
    var totalSize = 0,
        parentMetric = 'gw-atf-img-size',
        widgetIds = atfWidgetComponent.getWidgets();

    if (widgetIds) {
      widgetIds = widgetIds.filter(function(id) {
        return id && id.length > 0;
      });
    }

    if (widgetIds == undefined || widgetIds.length == 0) {
      return;
    }

    data[parentMetric] = {
      slotCount: widgetIds.length,
      totalSize: 0
    };

    $.each(widgetIds, function(index, widgetId) {
      var metric = 'gw-' + widgetId + '-img-size';
      var widgetImages = getWidgetAtfImages(widgetId);
      instImages(widgetImages, metric, parentMetric);
    });
  });

  function getWidgetAtfImages(widgetId) {
    var selector, imageLimit;
    if (isSingleColumnRow(widgetId)) {
      selector ='#' + widgetId + ' img';
      imageLimit = carouselAtfLimit;
    } else {
      selector ='#' + widgetId + ' .a-cardui-body img';
      imageLimit = undefined;
    }
    return getLowResImages($(selector), imageLimit);
  }

  function isSingleColumnRow(widgetId) {
    var result = $('#' + widgetId + '.desktop-row.gwi-row');
    return result != undefined && result.length > 0;
  }

  function perfAPIAbsent(){
    return window.performance && window.performance.getEntriesByName ? false : (logCounter('gw-img-size-error'), true);
  };
});
/////////////////////////
// END FILE instrument.js
/////////////////////////
/////////////////////////
// BEGIN FILE dombinder.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
/*
  ProductDB related JS
*/
"use strict";
P.when('A').register('dombinder', function(A) {
  var $ = A.$;

  function _getProp(obj, path) {
    for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
      obj = obj && obj[path[i]];
    }
    return obj;
  }

  var bindingHandlers = {
    'text': {
      update: function(element, value, data) {
        $(element).text(_getProp(data, value) || '');
      }
    },
    'html': {
      update: function(element, value, data) {
        $(element).html(_getProp(data, value) || '');
      }
    },
    'href': {
      update: function(element, value, data) {
        $(element).attr('href', _getProp(data, value) || '');
      }
    },
    'trimText': {
      update: function(element, value, data) {
        var $element = $(element),
            txt = $element.text();
        if(txt.length > value) {
          // First character we can check is v-4
          var i = value-4;
          // Once we find non-punctionation/whitespace, set it
          // to be the last character and break
          while(i >=0 && "[.,-/#!$%^&*;:{}=-_`~()] ".indexOf(txt[i]) > 0) {
            i--;
          }
          // txt[i] should be the last visible char. Use v-3 in error case.
          $element.text(txt.substring(0, i>=0 ? i+1 : value-3) + '...');
        }
      }
    },
    'value': {
      update: function(e, v, d) {
        $(e).val(_getProp(d, v) || '');
      }
    },
    'visible': {
      update: function(e, v, d) {
        var negate = false;
        if(v.charAt(0) === '!') {
          negate = true;
          v = v.substring(1);
        }
        var checkingProp = !!_getProp(d, v);
        if(negate !== checkingProp) {
          $(e).show();
        } else {
          $(e).hide();
        }
      }
    },
    'css': {
      init: function(element, value) {
        var $element = $(element),
            cssState = $element.data('dombcss') || [];
        cssState[value] = '';
        $element.data('dombcss', cssState);
      },
      update: function(element, value, data) {
        var $element = $(element),
            cssState = $element.data('dombcss'),
            oldClass = cssState[value],
            newClass = _getProp(data, value);
        if(oldClass !== newClass) {
          cssState[value] = newClass;
          if(oldClass) { $element.removeClass(oldClass); }
          if(newClass) { $element.addClass(newClass); }
        }
      }
    },
    'attr': {
      init: function(element, value) {
        var $element = $(element),
            attrState = $element.data('dombattr') || [];
        attrState[value] = {};
        $element.data('dombattr', attrState);
      },
      update: function(element, value, data) {
        var $element = $(element),
            attrState = $element.data('dombattr'),
            oldAttrs = attrState[value],
            newAttrs = _getProp(data, value);
        if(oldAttrs !== newAttrs) {
          attrState[value] = newAttrs;
          if(oldAttrs) {
            $.each(oldAttrs, function(key, value) {
              $element.removeAttr(key);
            });
          }
          if(newAttrs) {
            $.each(newAttrs, function(key, value) {
              $element.attr(key, value);
            });
          }
        }
      }
    }
  };

  // The syntax parser needs to be more intelligent
  function _parse(e) {
    return $.map($(e).data('bind').split(','), function(s) {
      var tmp = s.split(':'),
          k = $.trim(tmp[0]), v = $.trim(tmp[1]),
          b = bindingHandlers[k];
      if(!b) { return; }

      if(b.init) {
        b.init(e, v);
      }
      return function(data) {
        b.update(e, v, data);
      };
    });
  }

  return {
    init: function($root) {
      var ctx = { $root: $root, bindings: [] };
      $root.find('[data-bind]').each(function() {
        $.each(_parse(this), function(i, v) {
          ctx.bindings.push(v);
        });
      });
      return ctx;
    },
    update: function(ctx, data) {
      $.each(ctx.bindings, function(i, v) {
        v(data);
      });
    }
  };
});


/////////////////////////
// END FILE dombinder.js
/////////////////////////
/////////////////////////
// BEGIN FILE gwAjax.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
/*
  JavaScript wrapper for A.ajax, to log counter when error encountered
  return a jqXHR object http://api.jquery.com/jQuery.ajax/#jqXHR
  allowing mutiple callbacks to chain.
*/
"use strict";
P.when('jQuery').register('gwAjax', function($){
  return function(url, options){
    //copy the options so that if that is manipulated out side
    //the wrapper, the wrapper will not be affected.
    //either deep or shallow copy will do the trick
    options = $.extend(true, {}, options)
    //log the success and error function passed first
    //using them to create new success and error functions
    var originSuccess = options.success;
    var originError = options.error;
    
    function error(jqXHR, textStatus, errorThrown){
      errorLog();
      if(typeof originError === 'function'){
        originError(jqXHR, textStatus, errorThrown);
      }
    }

    function success(data, textStatus, jqXHR){
      //shogun will return error => 1 if error out of server side
      if(data.error){
        error(data, textStatus, jqXHR);
      }else if(typeof originSuccess === 'function'){
        originSuccess(data, textStatus, jqXHR);
      }
    }

    function errorLog(){
      if(typeof window.ue === 'object' && typeof window.ue.count === 'function') {
        var errorCounter = options.errorCounter || "gwAjaxError";
        logCounter(errorCounter);
        options.id && logCounter("gwAjaxError:" + options.id);
      }
      if(typeof window.ueLogError === 'function'){
        window.ueLogError({
            logLevel: 'WARN',
            attribution: 'gwAjax-' + (options.id || url),
            message: 'gwAjax call failed ' +
                ((JSON && JSON.stringify) ?
                JSON.stringify({ 'url': url, 'params-data': options.params || options.data}) : '')
        });
      }
    }

    function logCounter(counter){
      if(typeof window.ue === 'object' && typeof window.ue.count === 'function') {
        window.ue.count(counter, (window.ue.count(counter) || 0) + 1);
      }
    }

    options.success = success;
    options.error = error;
    //AUI will serialize the query parameters in params, while jquery will do that for data
    options.data = options.params ? options.params : options.data;
    logCounter("gwAjaxCall");
    if(options.ajaxCounter){
      logCounter(options.ajaxCounter);
    }
    return $.ajax(url, options);
  }
});

/////////////////////////
// END FILE gwAjax.js
/////////////////////////
/////////////////////////
// BEGIN FILE gw-hud-sidekick.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
"use strict";

// @Deprecated with Ameyal and old HUD
P.when('jQuery', 'gw-hud-punt').execute('gw-hud-sidekick', function($){
  $('#gw-hud-grid').css({display: 'none'});
});
/////////////////////////
// END FILE gw-hud-sidekick.js
/////////////////////////
/////////////////////////
// BEGIN FILE gw-modal.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
"use strict";

P.register("gw/card-modal", function() {
  var _create;

  P.when("__gw-card-modal").execute(function(m) {
    _create = m;
  });

  function create(token, options) {
    if (_create) {
      return _create(token, options);
    } else {
      P.when("__gw-card-modal").execute(function(_create) {
        _create(token, options);
      });
      return { show: function() {} };
    }
  }

  return {
    show: function(token, options) {
      create(token, options).show();
    },
    preload: function(token, options) {
      // FIXME: Is there a better event? X1? trueATF?
      P.when('ready').execute(function() {
        create(token, options);
      });
    }
  };
});

P.when("A", "a-modal", "gw/card-loader").register("__gw-card-modal", function(A, modal, cardLoader) {
    var defaultLoading = '<div class="gw-modal-loading"><i class="gw-spinner"></i></div>',
        dialogs = {},
        $ = A.$;

    return function(token, options) {
      if (dialogs[token]) {
        return dialogs[token];
      }

      var cardName = cardLoader.decodeToken(token)["name"],
          $dummyNode = $('<span style="display: none" />').appendTo("body"),
          modalOptions = $.extend(
            {
              name: cardName || "gw-card-popover",
              closeButton: true,
              hideHeader: true,
              style: "gw",
              content: $('<div aria-hidden="true"></div>').html((options && options.loading) || defaultLoading)
            },
            options
          ),
          dialog = (dialogs[token] = modal.create($dummyNode, modalOptions));

      if (modalOptions.style === "gw") {
        // !!!! DANGER WILL ROBINSON, DANGER !!!!
        // These hacks rely on internal implementation details of the AUI popover to style the dialog.
        // This is brittle and must be removed once there is a solution to https://sim.amazon.com/issues/AUI-16373

        var dialogId = 'a-popover-' + dialog.attrs('id'),
            dialogSelector = '#' + dialogId,
            rules = [
              // Make "flexible" inner layout possible by stretching inner container to its maximum size
              ' .a-popover-inner { overflow: hidden !important; height: 100% !important; min-width: 80px; min-height: 80px; }',
              // Remove borders to suppress a white "halo" around dark popovers
              ' .a-popover-wrapper { border: none; border-radius: 0; }'
            ];
        var dialogCss = $.map(rules, function(val) { return dialogSelector + val }).join(' ');
        $('head').append('<style>' + dialogCss + '</style>');

        // Override the tiny close button and make it float on top of content
        if(modalOptions.closeButton) {
          A.on("a:popover:show:" + modalOptions.name, function (data) {
            var $dialogSelector = $(dialogSelector);

            $dialogSelector.find("button.a-button-close").addClass("gw-close-button");
            $dialogSelector.find(".a-icon.a-icon-close").attr("class", "gw-icon gw-icon-close");
          });
        }
      }

      cardLoader.request(token).then(function(card) {
        dialog.update({ content: card.html() });
      });

      return dialogs[token];
    };
  }
);
/////////////////////////
// END FILE gw-modal.js
/////////////////////////
/////////////////////////
// BEGIN FILE gw-card-loader.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
"use strict";

P.when("gw-promise", "urlb64decode").register("gw/card-loader", function(newPromise, urlb64decode) {
  var TOKEN_VERSION_LENGTH = 1;

  // IE8 doesn't have Array.isArray
  var isArray = Array.isArray ||
    function(arg) {
      return Object.prototype.toString.call(arg) === "[object Array]";
    };

  var cache = {};

  function getOverrideParams() {
    try {
      var u = new URL(document.location.href);
      var op = u.searchParams.get("cardOverrides");
      if (op) {
        return "cardOverrides=" + op;
      }
    } catch (e) {
      // Internet Exploder doesn't have a standards compliant URL
      var m = document.location.href.match(/[?&](cardOverrides=.*?)([&#]|$)/);
      if (m !== null) {
        return m[1];
      }
    }
  }

  function decodeToken(token) {
    return JSON.parse(urlb64decode(token.substring(TOKEN_VERSION_LENGTH)));
  }

  return {
    decodeToken: decodeToken,

    // TODO: Automatically batch multiple requests made within a reasonable time-slice
    // TODO: Pass a list of already loaded assets to server

    request: function(arg) {
      var tokens = isArray(arg) ? arg : [arg],
        op = getOverrideParams(),
        url = "/homepage.html/ajax/card" + (op ? "?" + op : ""),
        rv = [],
        successCallbacks = [],
        failCallbacks = [],
        cardRequests = [];

      function failAll(error) {
        for(var i = 0, len = failCallbacks.length; i < len; i++) {
          failCallbacks[i] && failCallbacks[i](error);
        }
      }

      for (var i = 0, len = tokens.length; i < len; i++) {
        var token = tokens[i];
        if (cache[token]) {
          rv[i] = cache[token];
        } else {
          rv[i] = cache[token] = newPromise(function(resolve, reject) {
            successCallbacks[i] = resolve;
            failCallbacks[i] = reject;
          });
          cardRequests[i] = { t: token };
        }
      }

      if(cardRequests.length > 0) {
        P.when("A").execute(function(A) {
          A.post(url, {
            chunk: function(d) {
              // {i: 0, body: "..", ok: true}
              var response = d[1];
              if (response) {
                if (response["ok"]) {
                  successCallbacks[response.i] && successCallbacks[response.i]({
                      render: function(container) {
                        A.$(container).html(response.body);
                      },
                      html: function() {
                        return response.body;
                      }
                    });
                } else {
                  failCallbacks[response.i] && failCallbacks[response.i](response.body);
                }
              }
            },
            success: function(data, status, xhr) {
              // If it hasn't been processed by now, it was never returned.
              failAll("Not Found");
            },
            error: function(xhr, status, error) {
              failAll(error);
            },
            abort: function(xhr) {
              failAll("Aborted");
            },
            contentType: "application/json",
            paramsFormat: "json",
            params: cardRequests
          });
        });
      }

      return isArray(arg) ? rv : rv[0];
    }
  };
});

if (window.Promise) {
  P.register("gw-promise", function() {
    return function(executor) {
      return new Promise(executor);
    };
  });
} else {
  /*
   * Polyfill Promise using jQuery.Deferred
   *
   * jQuery 1.6 is not Promise/A+ compliant so it may be better to switch to a full-featured polyfill e.g.
   * https://github.com/taylorhakes/promise-polyfill or https://github.com/getify/native-promise-only both ~3kb uncompressed
   *
   */
  P.when("jQuery").register("gw-promise", function($) {
    return function(executor) {
      var dfd = $.Deferred();

      executor(dfd.resolve, dfd.reject);

      return {
        "then": dfd.then,
        "catch": function(onRejected) {
          return dfd.fail(onRejected);
        }
      };
    };
  });
}

P.register("urlb64decode", function() {
  if (window.atob) {
    var rt = { "-": "+", _: "/" };
    return function(str) {
      return window.atob(
        str.replace(/[-_]/g, function(m) {
          return rt[m];
        })
      );
    };
  } else {
    // Polyfill is only needed for for IE 9 and below
    var chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

    return function(input) {
      var s = input.replace(/\s|=/g, ""),
        result = "";

      for (var i = 0, len = s.length; i < len; i += 4) {
        var n = 0,
          j = i,
          x = 24;
        while (x > 0 && j < len) {
          n += chars.indexOf(s.charAt(j++)) << (x -= 6);
        }
        result += String.fromCharCode(
          (n >>> 16) & 255,
          (n >>> 8) & 255,
          n & 255
        );
      }
      return result;
    };
  }
});
/////////////////////////
// END FILE gw-card-loader.js
/////////////////////////
/////////////////////////
// BEGIN FILE productdb-binding-helper.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
/*
  ProductDB related JS
*/
"use strict";
P.when('jQuery', 'dombinder').register('productdb-binding-helper', function($, binder) {
  function safeCall(func, data) {
      if($.isFunction(func)) {
        return func(data);
      } else {
        return data;
      }
  }

  return function(pdb, $root) {
    var self = this,
        _call = safeCall,
        product = null,
        productObserver = null,
        ctx = binder.init($root);

    self.setAsin = function(asin, callbacks) {
      var callbacks = callbacks || {};

      _unobserve();
      product = pdb.get(asin);
      _update(product, callbacks);

      if(product.loading) {
        _observe(function(product) {
          _update(product, callbacks);
        });
      }
      return product;
    };

    function _update(product, callbacks) {
      binder.update(ctx, _call(callbacks['beforeUpdate'], product));
      if(!product.loading) {
        _call(callbacks['load'], product);
      }
    }

    self.clear = function() {
      _unobserve();
      product = {};
      binder.update(ctx, product);
    };

    function _observe(callback) {
      _unobserve();
      productObserver = function() {
        callback(product);
      }
      product.pdb_observe(productObserver);
    }

    function _unobserve() {
      if(product && productObserver) {
        product.pdb_unobserve(productObserver);
        productObserver = null;
      }
    }

    function _triggerHandlers(product, callbacks) {
      if(!product.loading) {
        _call(callbacks['load'], product);
      }
    }
  };
});


/////////////////////////
// END FILE productdb-binding-helper.js
/////////////////////////
/////////////////////////
// BEGIN FILE gw-resource-logger.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
/*
Copied from https://code.amazon.com/packages/ShoppingPortalAssets/blobs/mainline/--/src/portalResourceLogger.js
We should use portal-resource-logger from Shopping portal asset in the future. But for now, the SP assets are not yet in live.

Resource Logger provided by Shopping Portal. It provides a functionality to log timing metrics for resources downloaded on the page.
The metrics currently supported are 'duration' and 'startTime' as per the definition of these metrics here:
https://www.w3.org/TR/resource-timing/#resource-timing
Logger also tags a page with appropriate tags to indicate whether a resource was fetched from cache or not.
CSM ue.count is used to surface the timing metrics and CSM ue.tag for cached/non-cached hit.
NOTE: CSM ue.tag are not logged for all requests. See TODO: https://issues.amazon.com/issues/SP-666

How to use?

The logger is available after 'gw-resource-logger' event on the page.
'instrumentResources' API to be used for instrumentation.
Logger API expects an array of map. One map for each resource to be instrumented. Each map has values for three keys:
'id': The unique ID with which the resource counter metrics would be named. Value type: string.
'regex': The regex which uniquely identifies the resource to be instrumented. Value type: RegExp object.
(RegExp: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
'initiator': initiaTorType for a resource as per https://www.w3.org/TR/resource-timing/#resource-timing spec. Value type: string

Sample usage:
P.when('gw-resource-logger').execute(function(logger){
    var resourcesToInstrument = [{id:"xyzTeamCss", regex:/\/XYZAssets\S*\.css/, initiator:"link"},
                                 {id:"xyzTeamJs", regex:/\/XYZAssets\S*\.js/, initiator:"script"}];
    logger.instrumentResources(resourcesToInstrument);
});

Recommendation:
Since 'id' is globally namespaced, it should be unique. One possible way could be to prefix the value with team/pageType name.

What metrics would be generated?

CSM counts for following metrics:
duration: <id>:duration
startTime: <id>:startTime

CSM Tags:
Cached: <id>:cached
Not cached: <id>:notCached
*/

window.P && P.when('jQuery', 'afterLoad').register('gw-resource-logger', function($) {
    'use strict';

    function log(id, resource) {
        var duration = resource.duration ;
        if (window.ue.count) {
            window.ue.count(id+":duration", duration);
            window.ue.count(id+":startTime", resource.startTime);
        }
        if(window.ue.tag) {
            var csmTag;
            if (duration < 50) { csmTag = id+":cached"; }
            else { csmTag = id+":notCached"; }
            window.ue.tag(csmTag);
        }
    }

    function validateEntries(resources) {
        var isValid = false;
        // check if the resources array is valid and non empty
        if ($.isArray(resources) && !$.isEmptyObject(resources)) {
            isValid = true;
            // return false if any one entry is invalid
            for (var i = 0; i <  resources.length; i++) {
                var resourceEntry = resources[i];
                // check if all keys are present
                if (("id" in resourceEntry) && ("regex" in resourceEntry) && ("initiator" in resourceEntry)) {
                    // check if any of the values are invalid
                    if (typeof resourceEntry["id"] !== 'string' ||
                        typeof resourceEntry["initiator"] !== 'string' ||
                        !(resourceEntry["regex"] instanceof RegExp)) {
                        isValid = false;
                        break;
                    } else {

                    }
                } else {
                    isValid = false;
                    break;
                }
            }
        }
        return isValid;
    }

    /*
    TODO: Add proper attribution mechanism in case of JS fatals/errors
    because of incorrect input from clients especially in regex
    https://issues.amazon.com/issues/SP-667
    TODO: Add unit tests
    */
    var logger = {
        instrumentResources: function(resourcesToInstrument) {
            var validResourceEntries = validateEntries(resourcesToInstrument);
            var instrumentationPossible = (window.performance) &&
                                          (typeof window.performance.getEntriesByType === 'function') &&
                                          (typeof window.performance.getEntriesByType("resource") !== 'undefined') &&
                                          (typeof window.ue !== 'undefined');
            if(validResourceEntries && instrumentationPossible) {
                var resourceLogged = new Array(resourcesToInstrument.length);
                for (var j = 0; j < resourceLogged.length; j++) { resourceLogged[j] = false; }
                var totalResourcesLogged = 0;

                for(var i = 0 ; i < window.performance.getEntriesByType("resource").length && totalResourcesLogged < resourcesToInstrument.length; i++) {
                    var resource = window.performance.getEntriesByType("resource")[i];
                    var resourceName =  resource.name;
                    var resourceInitiatorType = resource.initiatorType;
                    for (var currentResource = 0 ; currentResource < resourcesToInstrument.length; currentResource++) {
                        if (!resourceLogged[currentResource]) {
                            var regex = resourcesToInstrument[currentResource]["regex"];
                            var initiatorType = resourcesToInstrument[currentResource]["initiator"];
                            var matchFound = (resourceInitiatorType === initiatorType && regex.test(resourceName));
                            if (matchFound) {
                                log(resourcesToInstrument[currentResource]["id"], resource);
                                resourceLogged[currentResource] = true;
                                totalResourcesLogged++;
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    return logger;
});
/////////////////////////
// END FILE gw-resource-logger.js
/////////////////////////
/////////////////////////
// BEGIN FILE sg-media-builder.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/

// https://w.amazon.com/index.php/MSA/HowTo/ImageStyleCodes
"use strict";
P.register('sg-media-builder', function() {
  return function(img) {
    var self = this,
        baseUrl = img.src,
        styleCodes = [];

    self.build = function() {
      var codeStr = styleCodes.join('_'),
          newUrl = baseUrl.replace(/\.([^.]+)$/, '._' + codeStr + '_.$1');

      return { 'src' : newUrl, 'alt' : img.alt };
    };

    self.autoCrop = function() {
      styleCodes.push('AC');
      return self;
    };

    self.scaleX = function(x) {
      styleCodes.push('SX' + x);
      return self;
    };

    self.scaleY = function(y) {
      styleCodes.push('SY' + y);
      return self;
    };

    self.upScaleX = function(x) {
      styleCodes.push('UX' + x);
      return self;
    };

    self.upScaleY = function(y) {
      styleCodes.push('UY' + y);
      return self;
    };

    self.scaleXY = function(x, y) {
      return self.upScaleX(x).scaleY(y);
    };
  };
});

/////////////////////////
// END FILE sg-media-builder.js
/////////////////////////
/////////////////////////
// BEGIN FILE shogunProductDB.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
// ProductDB
"use strict";

P.when('jQuery', 'gwAjax').register('shogunProductDB', function($, gwAjax) {
  var db = {};
  function _new(asin) {
    //TODO: Convert to Object.observe once ES7 is widely deployed

    var observers = [];

    db[asin] = {
      loading: true,
      pdb_observe: function(handler) {
        observers.push(handler);
      },
      pdb_unobserve: function(handler) {
        observers = $.grep(observers, function(v) {
          return v !== handler;
        });
      },
      _trigger: function() {
        $.each(observers, function() {
          this.call(db[asin]);
        });
      }
    };

    //TODO: request data via AJAX
    return db[asin];
  }
   

  function Pdb(ajaxUrl, experienceStr){
    this.ajaxUrl = ajaxUrl;
    this.experienceStr = experienceStr;
    this._add = function(data) {
      if(data.p) {
        $.each(data.p, function(i, p) {
          if(!p.asin){
            return;
          }
          var entry = db[p.asin] || _new(p.asin);
          $.extend(entry, p, { loading: false, error: false });
          entry._trigger(p);
        });
      }
    };
    this.addSims = function(asin, data) {
      if(data) {
        var entry = db[asin] || _new(asin);
        $.extend(entry, {sims: data});
        entry._trigger(asin);
      }
    };
    /*
    * @param args 'sa'
    * @param {success: function, error: function }
    * @param data merged into gwAjax data {}
    */
    this._ajax =  function (args, callbacks, data) {
    data = data || {};
    //No support for JSON.stringify(...) in IE8
    //need to pass JSON as a string
    var rq = $.extend(true, {}, ajaxUrl, { 'params' :
      { 'sa': args, 'oe': experienceStr } }, data);
    if(window.ue_sid) {
      // SID on path issues a 301 redirect for AJAX requests
      // rq.url += '/' + window.ue_sid;
    }
    if(window.ue_id) {
      rq.params.rrid = window.ue_id;
    }
    return gwAjax(rq.url, {
      'method': rq.method,
      'params': rq.params,
      'success': callbacks['success'],
      'error': callbacks['error'],
      'id': 'gw-jslibs-' + callbacks.id
    });
  };
    this.get = function(asin) {
      if(asin in db) {
        return db[asin];
      } else {
        return _new(asin);
      }
    };
  }
  
  return function(ajaxUrl, experienceStr){
    return new Pdb(ajaxUrl, experienceStr);
  };
});

/////////////////////////
// END FILE shogunProductDB.js
/////////////////////////
/////////////////////////
// BEGIN FILE layout-tag-instrumentation.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
"use strict";
P.when("A", "jQuery", "af").register("layout-tags",function (A, $) {
    function getLayoutTags() {
        var tagList = [];
        tagList = tagList.concat(getLayoutColumnTags());
        if(isFlexBoxSupported() ){
            tagList.push("flexLayout");
        }
        if(isCssGridSupported() ){
            tagList.push("cssGridLayout");
        }
        return tagList;
    }

    function getLayoutColumnTags() {
       var layoutTags = {
           "twoColumn": [0, 919],
           "threeColumn": [920, 1239],
           "fourColumn": [1240, 1539],
           "fiveColumn": [1540, 10000],
           "twoColumnRevised": [0, 979],
           "threeColumnRevised": [980, 1299],
           "fourColumnRevised": [1300, 1619],
           "fiveColumnRevised": [1620, 10000],
       }
       var htmlWidth = $("html").width();
        var tagList = [];
        for (var tag in layoutTags) {
            if(isWithinRange(htmlWidth, layoutTags[tag])){
                tagList.push(tag);
            }
        }
        return tagList;
   }

   function isWithinRange(num, range) {
       var min = range[0];
       var max = range[1];
       return (num >= min && num <= max) ? true : false;
   }

   function logTags(tagList) {
       if(window.ue && ue.tag) {
           for (var i = 0; i < tagList.length; i++) {
               ue.tag(tagList[i]);
           }
       }
   }

    /**
     *
     * @return {boolean} true when browser supports minimal flex-box properties
     */
    function isFlexBoxSupported() {
        var e = A.$("<div></div>")[0];
        if (e.style.flex === "" || e.style.webkitFlex === "" || e.style.msFlex === "" || e.style.MozBoxFlex === "" || e.style.webkitBoxFlex === "") {
            return true;
        } else {
            return false;
        }

    }

    /**
     *
     * @return {boolean} true when browser supports the grid
     */
    function isCssGridSupported() {
        var e = A.$("<div></div>")[0];
        return e.style.grid === "" ? true: false;
    }

    var layoutTags = getLayoutTags();
    logTags(layoutTags);

    return {
        layoutTags : layoutTags
    };
})
/////////////////////////
// END FILE layout-tag-instrumentation.js
/////////////////////////
/////////////////////////
// BEGIN FILE widgets-js/feed-carousel.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
/*
  Inspired by PIV carousel at
  https://code.amazon.com/packages/DigitalVideoBrowserScripts/blobs/release/--/browser-scripts/source/dv-global/carousel/carousel.js
  with some key differences and simplifications:
  - We don't know the width at the start because of deficiencies in MediaCentral _AC feature
  - We do not animate controls in and out
  - We do not create control elements from JavaScript
  - We do not collect metrics about how many people click on buttons or swipe (yet)
*/
  "use strict";
  P.when('jQuery', 'p-detect').register('component-feed-carousel', function($, pDetect) {
    // FIXME: START COPY-PASTE

    // Copied relevant code from https://code.amazon.com/packages/AmazonUIBaseJS/blobs/5e9e8cf3ba6370e60fda244a77a9efcbe6509c63/--/src/a_detect.js#L162-L262

    var detect = $.extend(true, {}, pDetect);

    var TESTS = {
      pointerPrefix: function() {
        if ("onmspointerup" in document || "onpointerup" in document) {
          return "onpointerup" in document ? "pointer" : "MSPointer";
        }
        return false;
      },
      actionMode: function() {
        var prefix = detect.capabilities.pointerPrefix;
        return prefix ? prefix : (detect.capabilities.touch ? "touch" : "mouse");
      }
    };

    var SUFFIXES = {
      start: {
        mouse: "down",
        touch: "start",
        pointer: "down",
        MSPointer: "Down"
      },
      end: {
        mouse: "up",
        touch: "end",
        pointer: "up",
        MSPointer: "Up"
      }
    };

    $.each(TESTS, function (name, fn) {
      detect.capabilities[name] = fn();
    });

    var action = {};
    $.each(SUFFIXES, function (name, obj) {
      var am = detect.capabilities.actionMode;
      var suffix = typeof obj === "string" ? obj : obj[am];

      action[name] = suffix ? am + suffix : obj["mouse"] === undefined ? "": "mouse" + obj["mouse"];
    });
    detect.action = action;
    // FIXME: END COPY-PASTE

    var Carousel = function ($carousel, minItems, cfMinItems, config) {
        var self = this;

        this.init($carousel, minItems, cfMinItems, config);
    };

Carousel.prototype = {
      init: function ($carousel, minItems, cfMinItems, config) {
        var self = this;

        if ($('html').hasClass('a-touch')) {
          $carousel.addClass('feed-carousel-touch');
        }
        self.config = config || {};
        self.adjustMarginOnChange = self.config.adjustMarginOnChange !== false;
        self.defaultCssRightMargin = null;
        self.minItems  = minItems || 10;
        self.imgClass  = '.product-image';
        self.$carousel = $carousel;
        self.cfMinItems = cfMinItems || 6;
        self.cfFired = false;
        self.shovelerReadyFired = false;
        self.slotId = self.getSlotId();
        self.touch     = self.$carousel.hasClass('feed-carousel-touch');
        self.ajaxSource= self.$carousel.parent().hasClass('ajaxSource');
        self.$shelf    = self.$carousel.find('.feed-carousel-shelf');
        self.$viewport = self.$carousel.find('.feed-carousel-viewport');
        self.$spinner  = self.$carousel.find('.spinner');
        self.$left     = $('.feed-carousel-control.feed-left', $carousel);
        self.$right    = $('.feed-carousel-control.feed-right', $carousel);
        self.$buttons  = $('.feed-carousel-control', $carousel);
        self.$thumb    = $('.feed-scrollbar-thumb', $carousel);
        self.shelfLeft = -1 * parseInt(self.$shelf.css('left'), 10);
        self.calcWidth = $('html').hasClass('a-lt-ie9');
        self.noOpacity = $('html').hasClass('a-lt-ie9');
        self.uniqueId = self.getUniqueId();

        self.$left.attr('aria-hidden',true);
        self.$right.attr('aria-hidden',true);

        self.bindEvents();
        self.$carousel.data("Carousel", self);

        self.$carousel.trigger('change');

        self.token = false;
        self.lock = function() {
          self.token = true;
        };
        self.unlock = function() {
          self.token = false;
        };
        self.locked = function() {
          return self.token;
        };
        P.when('gw-first-carousel').execute(function(){
          self.first = self.$carousel.hasClass('first-carousel');
          self.shouldControlsOn() ? self.showControls() : self.hideControls();
        });
        if(self.uniqueId) {
          P.when(self.uniqueId).execute(function(data) {
            self.appendCards(data.cards);
            if(data.cards && self.slotId && typeof window.ue === 'object' && typeof window.ue.count === 'function') {
              var cardsCounter = 'gw-' + self.slotId.toString() + '-lazy-cards';
              var invokeCounter = 'gw-' + self.slotId.toString() + '-lazy';
              window.ue.count(cardsCounter, (window.ue.count(cardsCounter) || 0) + data.cards.length);
              window.ue.count(invokeCounter, (window.ue.count(invokeCounter) || 0) + 1);
            }
            P.register(self.uniqueId + '-lazy-cards-loaded');
            window.GWI.register(self.uniqueId + '-lazy-cards-loaded');
          });
        }
      },
      getUniqueId: function() {
        if(this.$viewport) {
          var widget = this.$viewport.closest('.shogun-widget');
          return widget.length > 0 ? $(widget[0]).attr('id') : null;
        }
      },
      getSlotId: function() {
        var parentWithSlotId = this.$carousel.closest('.gw-widget-instrument');
        return parentWithSlotId.length > 0 ? $(parentWithSlotId[0]).attr('id') :  null;
      },
      getMouseDirection: function(){
        // When the rtl variant is set to true
        return detect.capabilities.rtl ? -1 : 1;
      },
      bindEvents: function () {
        var self = this,
            // Mouse movement events do not work in IE8 and below when attached to $(window)
            $body = $('body');

        self.$buttons.ready(function(e) {
            if(!self.shovelerReadyFired) {
                if(self.slotId) {
                    var scope = self.slotId.toString() + '-active';
                    window.GWI && window.GWI.recordLatency(scope);
                    window.GWI && window.GWI.register(scope);
                }
                self.shovelerReadyFired = true;
            }
        });
            
        self.$carousel.change(function(e) {
          self.updateItems();
          self.updateSpinner();
          self.updateShelf();
          self.updateControls();
          if(self.defaultCssRightMargin === null && self.$shelf.children('li').first()) {
            var firstMargin = parseInt(self.$shelf.children('li').first().css('margin-right'), 10);
            self.defaultCssRightMargin = isNaN(firstMargin) ? 10 : firstMargin;
          }
          if(self.adjustMarginOnChange) {
            self.adjustCardMargin();
          }
        });

        self.$left.click(function(e) {
          e.preventDefault();
          self.changePage(-1);
          if(self.slotId) {
            self.logCounter('gw-' + self.slotId.toString() + '-left');
          }
        });

        self.$right.click(function(e) {
          e.preventDefault();
          self.changePage(+1);
          if(self.slotId) {
            self.logCounter('gw-' + self.slotId.toString() + '-right');
          }
        });

        self.bindImageLoadEvents(self.$shelf);

        var resizeThrottle;
        $(window).resize(function() {
          clearTimeout(resizeThrottle);
          resizeThrottle = setTimeout(function() {
            // Calculating the left alignment of the shelf to prevent white space after last carousel card
            var cd = self.getDimensions();
            var targetLeft = Math.max(Math.min(cd.shelfLeft, cd.maxLeft), 0);
            self.moveShelf(targetLeft);
            self.updateShelf();
          }, 100);
        });

        self.$thumb.mousedown(function(e) {
          var lastX = e.clientX;

          // Left mouse button?
          if (e.which !== 1) { return; }

          e.preventDefault();

          self.$carousel.addClass('scrolling');

          $body.bind("mousemove.feed-carousel",function(e) {
            var cd            = self.getDimensions(),
                mouseDistance = self.getMouseDirection() * (e.clientX - lastX),
                shelfDistance = 1 / cd.pageRatio * mouseDistance,
                targetLeft    = Math.max(Math.min(cd.shelfLeft + shelfDistance, cd.maxLeft), 0);

            lastX = e.clientX;
            self.moveShelf(targetLeft);
          });
          // Stop old IE-s from selecting when mouse is dragged outside of the element that recieved the click
          $(document).bind("selectstart.feed-carousel", function() { return false; });
        });

        var $window = $body.add(window); // this event has to be attached to the body in IE8
        $window.mouseup(function(event) {
          // note that this method should be idempotent
          // as it is executed once targeting the window,
          //  and also targeting the <body>
          self.$carousel.removeClass('scrolling');
          if(!self.$carousel.hasClass('hovering')) {
            self.hideControls();
          }
          $body.unbind("mousemove.feed-carousel");
          $(document).unbind("selectstart.feed-carousel");
        });

        self.$carousel.hover(
          function() {
            self.$carousel.addClass('hovering');
            clearTimeout(self.hoverTimer);
            self.hoverTimer = setTimeout(function() {
              if(self.$carousel.hasClass('hovering') &&
                  !(self.$carousel.hasClass('touching'))) {
                self.showControls();
              } else {
                self.$carousel.removeClass('touching');
              }
            }, 300);
          },
          function() {
            self.$carousel.removeClass('hovering touching');
            clearTimeout(self.hoverTimer);
            if(!self.$carousel.hasClass('scrolling')) {
              self.hoverTimer = setTimeout(function() {
                if(!self.$carousel.hasClass('hovering')) {
                  self.hideControls();
                }
              }, 600);
            }
          }
        );
        self.$carousel.bind(detect.action.start, function(e) {
          if (isTouchEvent(e)) {
            self.$carousel.addClass('touching');
            clearTimeout(self.touchTimer);
            // 'sometimes' touchend event is not fired, remove touching class after timeout
            self.touchTimer = setTimeout(function() {
              self.$carousel.removeClass('touching');
            }, 5000);
          }
        });
        self.$carousel.bind(detect.action.end, function(e) {
          if(isTouchEvent(e)) {
            self.$carousel.removeClass('touching');
            clearTimeout(self.touchTimer);
            clearTimeout(self.hoverTimer);
          }
        });

        self.$viewport.scroll(function() {
          self.shelfLeft = self.$viewport.scrollLeft();
          self.updateControls();
        });
        // AUI way to detect touching on Touch-enabled devices with IE10+
        function isTouchEvent(e) {
          return (detect.capabilities.pointerPrefix && $.inArray(e.originalEvent.pointerType, [2, 'touch']) > -1) ||
              detect.capabilities.actionMode === 'touch';

        }
      },

      bindImageLoadEvents: function(container) {
        var self       = this;

        $(self.imgClass, container).one('load', function() {
          self.$carousel.trigger('change');
        });
      },

      getDimensions: function() {
        var self       = this,
            shelfWidth = self.$shelf.width(),
            shelfLeft  = self.shelfLeft,
            pageWidth  = self.$carousel.width();

        return {
          pageWidth:  pageWidth,
          shelfWidth: shelfWidth,
          shelfLeft:  shelfLeft,
          pageRatio:  pageWidth / shelfWidth,
          leftRatio:  shelfLeft / shelfWidth,
          maxLeft:    shelfWidth - pageWidth
        };
      },

      updateItems: function() {
        var self = this,
            $cards = self.$shelf.find('.feed-carousel-card'),
            shoveler = $('#'+self.uniqueId),
            _hidden = function($e) {
              return $e.css('display') === 'none';
            };
        $cards.each(function(idx, item) {
          var $item = $(item);
          if(!_hidden($item) && !self.config.visibleBeforeLoad) {
            return true; // continue
          }
          $item.attr('aria-posinset',idx+1);
          $item.attr('aria-hidden',false);
          $item.attr('role','listitem');
          /* Importing widgets-js/_csm-item-decoration.js */

/* Done importing widgets-js/_csm-item-decoration.js */


          var nLoading = $item.find(self.imgClass).filter(function() {
                           return !this.complete;
                         }).length;

          if(nLoading <= 0) {
            $item.css('display', 'inline-block');
            if((idx + 1) >= self.cfMinItems && !self.cfFired) {
                if(self.slotId) {
                    var scope = self.slotId.toString() + '-visible';
                    window.GWI && window.GWI.recordLatency(scope);
                    window.GWI && window.GWI.register(scope);
                }
                self.cfFired = true;
            }
            return true; // continue
          } else {
            return false; // break
          }
        });
        $cards.attr('aria-setsize',$cards.size());
        self.$items = $cards.filter(function() { return !_hidden($(this)); });
      },

      updateShelf: function() {
        var self = this,
            w = 0;

        // Workaround for buggy browsers (IE8) that miscalculate shelf width
        if(self.calcWidth) {
          self.$shelf.children().each(function() { w += $(this).outerWidth(true); });
          self.$shelf.width(w);
        }

        // Workaround to hide ugly platform scroll bars: We clip carousel to calculated height
        if(self.touch) {
          self.$carousel.not('.fresh-shoveler-tablet-app .feed-carousel').height(self.$shelf.outerHeight(true));
        }
      },

      updateSpinner: function() {
        var self = this;
        if(self.size() < self.minItems && self.ajaxSource) {
          self.$spinner.show();
        } else {
          if(self.size() < self.minItems){
            // no ajax source, size less than minItems to show, log a counter
            if(typeof window.ue === 'object' && typeof window.ue.count === 'function') {
              window.ue.count("shovelerNotEnoughItem", (window.ue.count("shovelerNotEnoughItem") || 0) + 1);
            }
          }
          self.$spinner.hide();
        }
      },

      updateControls: function() {
        var self = this;
        self.updateArrows();
        self.updateScrollThumb();
      },

      shouldControlsOn: function() {
        var self = this;
        return self.first && !self.touch;
      },

      // NB! fading the scrollbar thumb fails on IE < 10 if queue=false is not specified
      showControls: function(complete) {
        var self = this,
            $controls = self.$thumb.add(self.$buttons);

        $controls.stop(true, true).fadeIn({
          duration: 300,
          complete: complete,
          queue: false
        });
      },

      hideControls: function(complete) {
        var self = this,
            $controls = self.$thumb;

        if(!self.shouldControlsOn()) {
          $controls = $controls.add(self.$buttons);
        }

        $controls.stop(true, true).fadeOut({
          duration: 300,
          complete: complete,
          queue: false
        });
      },

      appendCards: function(cards) {
        var self = this;

        self.$shelf.append(cards);
        self.bindImageLoadEvents(cards);
        self.$carousel.trigger("change");
      },

      updateArrows: function() {
        var self  = this,
            clazz = 'feed-control-disabled',
            cd    = self.getDimensions(),
            ctrls = [
              { '$e': self.$left,  'enabled': cd.shelfLeft > 0 },
              { '$e': self.$right, 'enabled': cd.shelfLeft < cd.maxLeft }
            ];

        $.each(ctrls, function(i, c) {
          var $e = c.$e;
          c.enabled ? $e.removeClass(clazz) : $e.addClass(clazz);
          // Use jQuery to emulate CSS opacity setting
          if(self.noOpacity) {
            c.enabled ? $e.css('opacity', '1') : $e.css('opacity', '0.5');
          }
        });
      },

      updateScrollThumb: function() {
        var self  = this,
            cd    = self.getDimensions(),
            left  = cd.leftRatio * cd.pageWidth,
            width = Math.min(cd.pageRatio * cd.pageWidth, cd.pageWidth);
        self.$thumb.width(width).each(function() {
          // Using AUI animate to set left to ensure that CSS tranform is maintained
          $(this).animate({ left: left }, 0);
        });
      },
      logCounter: function(counter) {
        if(typeof window.ue === 'object' && typeof window.ue.count === 'function') {
          window.ue.count(counter, (window.ue.count(counter) || 0) + 1);
          window.ue.count('gw-shoveler-click', 1);
        }
      },
      changePage: function (n) {
        var self = this,
            cd         = self.getDimensions(),
            target     = self.alignWithItem(cd.shelfLeft + n * cd.pageWidth),
            targetLeft = Math.min(n < 0 ? target.right : target.left, cd.maxLeft);

        if(self.locked()) {
          return;
        }
        self.lock();

        if (cd.shelfLeft === targetLeft) {
          self.bounce(self.$shelf, -30 * n);
          self.bounce(self.$thumb, 6 * n);
        } else {
          self.moveShelf(targetLeft, 400);
        }
      },

      moveShelf: function (targetLeft, speed) {
        var self = this,
            speed = speed || 0,
            easing = 'swing'; // easeInOutQuad

        function setControls() {
          self.updateArrows();
          self.unlock();
        }

        self.shelfLeft = targetLeft;

        if(self.touch) {
          self.$viewport.animate({ scrollLeft: targetLeft }, speed, 'swing', setControls);
        } else {
          var cd = self.getDimensions(),
              thumbLeft = targetLeft / cd.shelfWidth * cd.pageWidth;
          self.$shelf.animate({ 'left' : -targetLeft }, speed, easing, setControls);
          self.$thumb.animate({ 'left' : thumbLeft }, speed, easing, function() {
            self.updateScrollThumb();
            self.unlock();
          });
        }
      },

      getItems: function() {
        var self = this;
        return self.$items;
      },

      size: function() {
        var self = this;
        return self.getItems().length;
      },

      alignWithItem: function(x) {
        if(x < 0) {
          return { left: 0, right: 0 };
        }

        var self   = this,
            $items = self.getItems(),
            rv     = $items.map(function() {
              var pos = self.cardPosition($(this));
              if(x >= pos.left && x <= pos.right) {
                return pos;
              }
            }).get(0);

        return rv ? rv : self.cardPosition($items.last());
      },

      cardPosition: function($e) {
        var p  = $e.position() || { left: 0, right: 0 },
            left  = p.left,
            right = left + $e.outerWidth(true);

         return { left: left, right: right };
      },

      bounce: function($c, x) {
        var self     = this,
            speedIn  = 400,
            speedOut = 100,
            easing   = 'swing'; // easeOutBack

        $c.each(function() {
          var $e = $(this);
          $e.animate(css(x), speedIn, easing, function() {
            $e.animate(css(0), speedOut, 'swing', self.unlock);
          });
        });
        function css(n) {
          var key = self.touch ? 'left' : 'marginLeft';
          var css = {};
          css[key] = n;

          return css;
        }
      },
      setCardMargin: function(value) {
        var self = this;
        // set only if different from the current value. verify margin of first child
        var isDifferent = (self.$shelf.children('li').first() && self.$shelf.children('li').first().css('margin-right') !== value + 'px');
        if(isDifferent) {
          self.$shelf.children('li').css('margin-right', value + 'px');
          self.updateShelf();
        }
      },
      adjustCardMargin: function(defaultMargin) {
        var self = this,
        minRightMargin = (defaultMargin === undefined || defaultMargin === null) ? self.defaultCssRightMargin : defaultMargin;
        // reset before calculating new margin value as appending new elements may result in changing the margin (think of using default) and get new dimensions
        self.setCardMargin(minRightMargin);
        var cd = self.getDimensions();
        // set the right margin equally among the elements to elminiate any white space
        var rightMargin = (cd.maxLeft < 0) ? Math.ceil(-cd.maxLeft/self.size()) : minRightMargin;
        rightMargin = rightMargin < minRightMargin ? minRightMargin : rightMargin;
        self.setCardMargin(rightMargin);
      }
    };

    return {
       createCarousel : function(feedCarousel, minItems, cfMinItems, config) {
           $(feedCarousel).each(function(i, e) {
             var $e = $(e);
             new Carousel($e, minItems, cfMinItems, config);
           });
        }
     };
  });
/////////////////////////
// END FILE widgets-js/feed-carousel.js
/////////////////////////
/////////////////////////
// BEGIN FILE widgets-js/feed-carousel-btf.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
"use strict";

P.when('jQuery', 'SafeP').execute('shoveler-lazy-non-visible-images',
  function($, SafeP) {
    var W = window;
    function logCounter(counter) {
      if (typeof W.ue === 'object' && typeof W.ue.count === 'function') {
        W.ue.count(counter, (W.ue.count(counter) || 0) + 1);
      }
    }
    function loadShovelers() {
      if (W.GWData) {
        $.each(W.GWData, function(id, btf) {
          if (id && btf && btf.data && !btf.loaded) {
            btf.loaded = true;
            logCounter('gw-lazy-load-all');
            var cards = [];
            $.each(btf.data, function(index, item) {
                $.each($(item), function( index, node ) {
                    cards.push(node);
                });
            });
            if (cards && cards.length > 0) {
              logCounter('gw-lazy-load-non-empty');
            }
            SafeP && SafeP.register(id, function() {
              return {
                cards : cards
              };
            });
          }
        });
      }
    }
    P.when('x1').execute(loadShovelers);
    P.when('ready').execute(loadShovelers);
    P.when('load').execute(loadShovelers);
});
/////////////////////////
// END FILE widgets-js/feed-carousel-btf.js
/////////////////////////
/////////////////////////
// BEGIN FILE widgets-js/safe-p.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
"use strict";

P.register('SafeP', function() {
  var registry = {};
  return {
    register: function(id, callback) {
      if (typeof id === 'string' && typeof callback === 'function') {
        // Map P.register if the function is not already created and mapped to id
        if (!registry[id]) {
          registry[id] = function(id, callback) {
            P.register(id, callback);
            // Set registry to noop after the first execution
            registry[id] = function() {};
          };
        }
        // Invoke safe function for P.register
        registry[id] && registry[id](id, callback);
      }
    }
  };
});
/////////////////////////
// END FILE widgets-js/safe-p.js
/////////////////////////
/////////////////////////
// BEGIN FILE widgets-js/gw-count-down.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
/*Count down function module for mini-shoveler and spotlight shoveler*/

"use strict";
P.when('A').register('gw-count-down', function(A) {
    function Clock(eventPrefix, msToStart, msToEnd, dealStatus, dealTimePrefix){
      // AmazonFamilyWidgetsMason/mason/amazon-family/cross-app-features/viewlords/aui-count-down.mi has a
      // server side check for dealTimePrefix values
      if (!(dealTimePrefix && dealTimePrefix.starts_in && dealTimePrefix.ends_in
        && dealTimePrefix.has_ended && dealTimePrefix.sold_out && dealTimePrefix.on_waitlist
        && dealTimePrefix.started && dealTimePrefix.starts_in_timer && dealTimePrefix.ends_in_timer)) {
          return;
      }
      msToStart = parseInt(msToStart, 10);
      msToEnd = parseInt(msToEnd, 10);
      dealStatus = JSON.parse(dealStatus);
      var $ = A.$,
          startTime = Date.now(),
          absoluteStartTime = startTime + msToStart,
          absoluteEndTime = startTime + msToEnd,
          timeinterval,
          stringPrefix = '',
          clockString = {timerString: '', readoutString: ''},
          EVENT_END = eventPrefix + 'ended',
          EVENT_START = eventPrefix + 'started',
          EVENT_UPDATE = eventPrefix + 'updateTimer',
          EVENT_COUNT_DOWN = eventPrefix + 'countingDown',
          EVENT_SOLD_OUT = eventPrefix + 'soldOut';
      function baseState(args) {
        var args = args || {};
        return {
          update: args.update || $.noop,
          count: args.count || $.noop,
          transition: args.transition || $.noop
        };
      }

      function initialState() {
        function update() {
          if(dealStatus && dealStatus.dealState){
            var currDealStatus = dealStatus.dealState.toUpperCase();
            if(currDealStatus === "AVAILABLE" && msToEnd/1000 > 24*60*60) {
              currState = staticState('');
            }else if(currDealStatus.indexOf('WAITLIST') > -1) {
              currState = staticState(dealTimePrefix.on_waitlist);
            }else if(currDealStatus === "SOLDOUT") {
              currState = staticState(dealTimePrefix.sold_out, EVENT_SOLD_OUT);
            }else if(msToStart > 0) {
              currState = startsInState();
            }else {
              currState = msToEnd > 0 ? endsInState() : staticState(dealTimePrefix.has_ended, EVENT_END);
            }
          }
          currState.update();
          currState.count();
        }

        return baseState({
          update: update
        });
      }

      function staticState(stringToSend, eventToTrigger) {
        function update() {
          sendClockString(stringToSend);
          A.trigger(eventToTrigger);
        }
        return baseState({
          update: update
        });
      }
      
      function startsInState() {
        stringPrefix = dealTimePrefix.starts_in;
        function update() {
          A.trigger(EVENT_COUNT_DOWN);
          sendClockString(clockString);
        }

        function count() {
          timeinterval = A.interval(function() {
            msToStart = absoluteStartTime - Date.now();
            updateClock(msToStart, dealTimePrefix.starts_in_timer);
          },1000);
        }
        
        function transition() {
          currState = staticState(dealTimePrefix.started, EVENT_START);
          currState.update();
        }

        return baseState({
          update: update,
          transition: transition,
          count: count
        });
      }

      function endsInState() {
        stringPrefix = dealTimePrefix.ends_in;
        function update() {
          sendClockString(clockString);
        }

        function count() {
          timeinterval = A.interval(function() {
            msToEnd = absoluteEndTime - Date.now();
            updateClock(msToEnd, dealTimePrefix.ends_in_timer);
          },1000);
        }

        function transition() {
          currState = staticState(dealTimePrefix.has_ended, EVENT_END);
          currState.update();
        }

        return baseState({
          update: update,
          transition: transition,
          count: count
        });
      }
      
      function buildReadoutMessage(t, str) {
        return str ? str.replace('_hours_', t.hours).replace('_minutes_', t.minutes).replace('_seconds_', t.seconds) : '';
      }

      function buildTimerMessage(t) {
        return stringPrefix + " " + formatTime(t.hours) + formatTime(t.minutes, true, true) + formatTime(t.seconds, false, true);
      }

      function getTimeRemaining(t) {
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) );
        return {
          'total': t,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }

      function updateClock(msToCount, str) {
        var t = getTimeRemaining(msToCount);

        clockString.timerString = buildTimerMessage(t);
        clockString.readoutString = buildReadoutMessage(t, str);
        sendClockString(clockString);
        if(t.total<=0) {
          clearInterval(timeinterval);
          currState.transition();
        }
      }

      function formatTime(t, middleDigit, lastDigit) {
        var timeString = "";
        if(t > 0 || lastDigit) {
          timeString = ('0' + t).slice(-2);
        }
        if((!lastDigit && t > 0) || middleDigit){
          timeString += ":";
        }
        return timeString;
      }

      function sendClockString(str) {
        if(!str.readoutString){
          clockString.readoutString = str;
          clockString.timerString = str;
        } else{
          clockString = str;
        }
        A.trigger(EVENT_UPDATE, clockString);
      }
      
      var currState = initialState();
      currState.update();

      A.on(eventPrefix, function(){
        currState.update();
      });
    }

    return Clock;
  });
/////////////////////////
// END FILE widgets-js/gw-count-down.js
/////////////////////////

// END ASSET AmazonGatewayAuiAssets - 2.0
}));
////////////////////////////////////////////
/* ******** */
