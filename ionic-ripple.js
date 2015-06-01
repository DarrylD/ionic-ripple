/**
 * ionic-ripple v0.0.4 - Simple way to add material design ripple effect to elements.
 * Copyright (c) 2015 Darryl D. - http://github.com/darryld/ionic-ripple
 * License: MIT
 */

(function(window, angular, undefined) {
  'use strict';

  if(!angular) {
    return;
  }

  var mod = angular.module('ionicRipple', []);

  mod.directive('ripple', function() {
    return {
      restrict: 'A',
    //   scope:{
    //     dark: '^rippleDark'
    //   },
      link: function (scope, element, attrs) {



        element.on('click',function(e){

            var rippledElement = $(this);

            var hasRippleEl = rippledElement.find(".rip").length === 0;

            //if we have a ripple element from a previous click, we'll just use that
            if(hasRippleEl){

                //if we're adding this to an item, the ripple element needs to
                //be inside the anchor inside the ion-item directive
                if(rippledElement[0].tagName === 'ION-ITEM'){
                    rippledElement.find('a').prepend("<span class='rip'></span>");
                }else{
                    rippledElement.prepend("<span class='rip'></span>");
                }
            }

            var rip = rippledElement.find(".rip");

            rip.removeClass("animate-ripple");

            if(!rip.height() && !rip.width()){
                var d = Math.max(rippledElement.outerWidth(), rippledElement.outerHeight());
                rip.css({height: d, width: d});
            }

            var x = e.pageX - rippledElement.offset().left - rip.width()/2;
            var y = e.pageY - rippledElement.offset().top - rip.height()/2;

            if( attrs.hasOwnProperty('rippleDark') ){
                rip.css({background: 'rgba(0, 0, 0, 0.3)'});
            }

            rip.css({top: y+'px', left: x+'px'}).addClass("animate-ripple");

        });
      }
    };
  });

})(window, window.angular);
