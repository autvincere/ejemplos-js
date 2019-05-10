$(function () {
     var accessToken = '273700138.f359f2c.f6d5dd3e37704cb8b976331d56706931';
     $.getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + accessToken + '&callback=?', function (insta) {
          $.each(insta.data, function (photos, src) {
               if (photos === -1) {
                    return false;
               }
               $('<a href="' + src.link + '" class="post">' +
                    '<div class="image" style="background-image:url(' + src.images.standard_resolution.url + ');"></div>' +
                    '<ul>' +
                    '<li><i class="fa fa-camera"></i> ' + src.filter + '</li>' +
                    '<li><i class="fa fa-heart"></i> ' + src.likes.count + '</li>' +
                    '<li><i class="fa fa-comment"></i> ' + src.comments.count + '</li>' +
                    '</ul></a>').appendTo('#insta');
          });
     });
});

//twitter SCRIPT
// Add custom CSS here.
var customCSS = `
.TweetAuthor-screenName{color:black;}
.timeline-TweetList-tweet{
     display: inline-block;
     width: 30%;}
.timeline-TweetList-tweet {
     display: inline-block;
     width: 49%;
     vertical-align: top;
 }
 .SandboxRoot.env-bp-660 .timeline-Tweet-text {
     font-size: 19px;
 }
 .timeline-Tweet {
     background-color: #fff;
 }
 .timeline-Header {
     padding: 10px;
     background-color: #fff;
 }
 .timeline-Widget {
     background-color: transparent;
 }
`;

// This is the normal Twitter for Websites async widget.
// @see https://dev.twitter.com/web/javascript/loading
window.twttr = (function (d, s, id) {
     var js, fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
     if (d.getElementById(id)) return t;
     js = d.createElement(s);
     js.id = id;
     js.src = "https://platform.twitter.com/widgets.js";
     fjs.parentNode.insertBefore(js, fjs);
     t._e = [];
     t.ready = function (f) {
          t._e.push(f);
     };
     return t;
}(document, "script", "twitter-wjs"));

/* When the Twitter Event API lets us know it's ready, loop through
   all of the widgets on the page and inject a custom <style> block
   into the iframe's <head>. */
twttr.ready(function (twttr) {
     twttr.events.bind('loaded', function (e) {
          var s = document.createElement('style');
          s.innerHTML = customCSS;
          for (var i = e.widgets.length; i--;) {
               e.widgets[i].contentDocument.head.appendChild(s);
          }
     });
});