+function(t,e,r){"use strict";var i={calc:!1};e.fn.rrssb=function(t){var i=e.extend({description:r,emailAddress:r,emailBody:r,emailSubject:r,image:r,title:r,url:r},t);for(var s in i)i.hasOwnProperty(s)&&i[s]!==r&&(i[s]=n(i[s]));i.url!==r&&(e(this).find(".rrssb-facebook a").attr("href","https://www.facebook.com/sharer/sharer.php?u="+i.url),e(this).find(".rrssb-tumblr a").attr("href","http://tumblr.com/share/link?url="+i.url+(i.title!==r?"&name="+i.title:"")+(i.description!==r?"&description="+i.description:"")),e(this).find(".rrssb-linkedin a").attr("href","http://www.linkedin.com/shareArticle?mini=true&url="+i.url+(i.title!==r?"&title="+i.title:"")+(i.description!==r?"&summary="+i.description:"")),e(this).find(".rrssb-twitter a").attr("href","https://twitter.com/intent/tweet?text="+(i.description!==r?i.description:"")+"%20"+i.url),e(this).find(".rrssb-hackernews a").attr("href","https://news.ycombinator.com/submitlink?u="+i.url+(i.title!==r?"&text="+i.title:"")),e(this).find(".rrssb-reddit a").attr("href","http://www.reddit.com/submit?url="+i.url+(i.description!==r?"&text="+i.description:"")+(i.title!==r?"&title="+i.title:"")),e(this).find(".rrssb-googleplus a").attr("href","https://plus.google.com/share?url="+(i.description!==r?i.description:"")+"%20"+i.url),e(this).find(".rrssb-pinterest a").attr("href","http://pinterest.com/pin/create/button/?url="+i.url+(i.image!==r?"&amp;media="+i.image:"")+(i.description!==r?"&amp;description="+i.description:"")),e(this).find(".rrssb-pocket a").attr("href","https://getpocket.com/save?url="+i.url),e(this).find(".rrssb-github a").attr("href",i.url)),i.emailAddress!==r&&e(this).find(".rrssb-email a").attr("href","mailto:"+i.emailAddress+"?"+(i.emailSubject!==r?"subject="+i.emailSubject:"")+(i.emailBody!==r?"&amp;body="+i.emailBody:""))};var s=function(){var t=e("<div>"),r=["calc","-webkit-calc","-moz-calc"];e("body").append(t);for(var s=0;s<r.length;s++)if(t.css("width",r[s]+"(1px)"),1===t.width()){i.calc=r[s];break}t.remove()},n=function(t){if(t!==r&&null!==t){if(null===t.match(/%[0-9a-f]{2}/i))return encodeURIComponent(t);t=decodeURIComponent(t),n(t)}},a=function(){e(".rrssb-buttons").each(function(t){var r=e(this),i=e("li:visible",r),s=i.length,n=100/s;i.css("width",n+"%").attr("data-initwidth",n)})},l=function(){e(".rrssb-buttons").each(function(t){var r=e(this),i=r.width(),s=e("li",r).not(".small").first().width();s>170&&e("li.small",r).length<1?r.addClass("large-format"):r.removeClass("large-format"),200>i?r.removeClass("small-format").addClass("tiny-format"):r.removeClass("tiny-format")})},o=function(){e(".rrssb-buttons").each(function(t){var r=e(this),i=e("li",r),s=i.filter(".small"),n=0,a=0,l=s.first(),o=parseFloat(l.attr("data-size"))+55,c=s.length;if(c===i.length){var d=42*c,m=r.width();m>d+o&&(r.removeClass("small-format"),s.first().removeClass("small"),h())}else{i.not(".small").each(function(t){var r=e(this),i=parseFloat(r.attr("data-size"))+55,s=parseFloat(r.width());n+=s,a+=i});var u=n-a;u>o&&(l.removeClass("small"),h())}})},c=function(t){e(".rrssb-buttons").each(function(t){var r=e(this),i=e("li",r);e(i.get().reverse()).each(function(t,r){var s=e(this);if(s.hasClass("small")===!1){var n=parseFloat(s.attr("data-size"))+55,a=parseFloat(s.width());if(n>a){var l=i.not(".small").last();e(l).addClass("small"),h()}}--r||o()})}),t===!0&&m(h)},h=function(){e(".rrssb-buttons").each(function(t){var r,s,n,l,o,c=e(this),h=e("li",c),d=h.filter(".small"),m=d.length;m>0&&m!==h.length?(c.removeClass("small-format"),d.css("width","42px"),n=42*m,r=h.not(".small").length,s=100/r,o=n/r,i.calc===!1?(l=(c.innerWidth()-1)/r-o,l=Math.floor(1e3*l)/1e3,l+="px"):l=i.calc+"("+s+"% - "+o+"px)",h.not(".small").css("width",l)):m===h.length?(c.addClass("small-format"),a()):(c.removeClass("small-format"),a())}),l()},d=function(){e(".rrssb-buttons").each(function(t){e(this).addClass("rrssb-"+(t+1))}),s(),a(),e(".rrssb-buttons li .rrssb-text").each(function(t){var r=e(this),i=r.width();r.closest("li").attr("data-size",i)}),c(!0)},m=function(t){e(".rrssb-buttons li.small").removeClass("small"),c(),t()},u=function(e,i,s,n){var a=t.screenLeft!==r?t.screenLeft:screen.left,l=t.screenTop!==r?t.screenTop:screen.top,o=t.innerWidth?t.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,c=t.innerHeight?t.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,h=o/2-s/2+a,d=c/3-n/3+l,m=t.open(e,i,"scrollbars=yes, width="+s+", height="+n+", top="+d+", left="+h);t.focus&&m.focus()},f=function(){var t={};return function(e,r,i){i||(i="Don't call this twice without a uniqueId"),t[i]&&clearTimeout(t[i]),t[i]=setTimeout(e,r)}}();e(document).ready(function(){e(document).on("click",".rrssb-buttons a.popup",{},function(t){var r=e(this);u(r.attr("href"),r.find(".rrssb-text").html(),580,470),t.preventDefault()}),e(t).resize(function(){m(h),f(function(){m(h)},200,"finished resizing")}),d()}),t.rrssbInit=d}(window,jQuery);;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;
(function ($) {

/**
 * Toggle the visibility of a fieldset using smooth animations.
 */
Drupal.toggleFieldset = function (fieldset) {
  var $fieldset = $(fieldset);
  if ($fieldset.is('.collapsed')) {
    var $content = $('> .fieldset-wrapper', fieldset).hide();
    $fieldset
      .removeClass('collapsed')
      .trigger({ type: 'collapsed', value: false })
      .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));
    $content.slideDown({
      duration: 'fast',
      easing: 'linear',
      complete: function () {
        Drupal.collapseScrollIntoView(fieldset);
        fieldset.animating = false;
      },
      step: function () {
        // Scroll the fieldset into view.
        Drupal.collapseScrollIntoView(fieldset);
      }
    });
  }
  else {
    $fieldset.trigger({ type: 'collapsed', value: true });
    $('> .fieldset-wrapper', fieldset).slideUp('fast', function () {
      $fieldset
        .addClass('collapsed')
        .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));
      fieldset.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = document.documentElement.clientHeight || document.body.clientHeight || 0;
  var offset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    }
    else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = {
  attach: function (context, settings) {
    $('fieldset.collapsible', context).once('collapse', function () {
      var $fieldset = $(this);
      // Expand fieldset if there are errors inside, or if it contains an
      // element that is targeted by the URI fragment identifier.
      var anchor = location.hash && location.hash != '#' ? ', ' + location.hash : '';
      if ($fieldset.find('.error' + anchor).length) {
        $fieldset.removeClass('collapsed');
      }

      var summary = $('<span class="summary"></span>');
      $fieldset.
        bind('summaryUpdated', function () {
          var text = $.trim($fieldset.drupalGetSummary());
          summary.html(text ? ' (' + text + ')' : '');
        })
        .trigger('summaryUpdated');

      // Turn the legend into a clickable link, but retain span.fieldset-legend
      // for CSS positioning.
      var $legend = $('> legend .fieldset-legend', this);

      $('<span class="fieldset-legend-prefix element-invisible"></span>')
        .append($fieldset.hasClass('collapsed') ? Drupal.t('Show') : Drupal.t('Hide'))
        .prependTo($legend)
        .after(' ');

      // .wrapInner() does not retain bound events.
      var $link = $('<a class="fieldset-title" href="#"></a>')
        .prepend($legend.contents())
        .appendTo($legend)
        .click(function () {
          var fieldset = $fieldset.get(0);
          // Don't animate multiple times.
          if (!fieldset.animating) {
            fieldset.animating = true;
            Drupal.toggleFieldset(fieldset);
          }
          return false;
        });

      $legend.append(summary);
    });
  }
};

})(jQuery);
;
