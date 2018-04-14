/* Build date: 30/09/11 14:19:16 */
/**
 * Syntax highlighting via AJAX.
 * See asgaard.co.uk/misc/jquery/?show=luminousify for details
 */

(function($){
  var __included = false;
  
  $.fn.luminousify = function(options) {
    var $t = this,
        i = 0;
    
    options = $.extend({
        escaped: true,
        style: 'luminous_light.css',
        language: false,
        defaultLanguage: false,
        delay: 0,
        customStyle: '',
        inline: false,
        path: '/luminous',
        line_numbers: false,
        group: 10 // number of code snippets to group into one request.
                 // This reduces the HTTP overhead but also ties up the server 
                 // for longer at once. 5-10 is reasonable.
                 // server side maximum is 20.
      }, options);
    
    if (!__included) {
      __included = true;
      var incs = [options.path + '/style/luminous.css',
                  options.path + '/style/' + options.style 
                 ]
      $.each(incs, function(i, val) {
        // Old school because the jQuery way doesn't work with IE.
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type='text/css';
        link.href = val;
        document.getElementsByTagName('head')[0].appendChild(link);
      });
      if (options.customStyle.length) {
        var css = $('<style>').attr('type', 'text/css').get(0);
        if (css.styleSheet) 
          css.styleSheet.cssText = options.customStyle;
        else 
          $(css).text(options.customStyle);
        $('head').append(css);
      }
    }
    // http://stackoverflow.com/questions/751218/how-to-use-getjson-sending-data-with-post-method
    var fetch = function(url, data, func) {
      $.post(url+(url.indexOf("?") == -1 ? "?" : "&")+"callback=c",
             data, function(data_) {
               data_ = data_.replace(/^c\(|\);?$/g, '');
               func($.parseJSON(data_));
             }
            );
    };
    
    var exec = function() {
      if (i >= $t.length)
        return;
      
      var j;
      var reqs = [];
      for (j=0; j < options.group; j++) {
        if (j+i >= $t.length)
          break;
        var t = $($t.get(i+j));
        var code = t.html();
        code = code.replace(/&amp/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        var language = options.language;
        if (!language)
          language = t.attr('lang');
        if (!language) 
          language = options.defaultLanguage;
        if (!language)
          language = '';
        reqs.push( { code: code, language: language, line_numbers: options.line_numbers,
                   inline: options.inline} );
      }

      var func = function(json) {
        for(var a = 0; a < json.length; a++) {
          var $r = $(json[a]);
          if (!options.inline)
            $r.addClass('luminousified');
          $($t.get(i)).replaceWith($r);
          i++;
        }
        setTimeout(exec, options.delay);
      };
      fetch(options.url, { requests: reqs }, func);
    };
    exec();
    return this;
  }
})(jQuery);