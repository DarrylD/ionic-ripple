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

  function onRippleEvent(dark, pos){
    return function(e){
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

      var x = pos ? pos.pageX : e.pageX;
      var y = pos ? pos.pageY : e.pageY;
      x = x - rippledElement.offset().left - rip.width()/2;
      y = y - rippledElement.offset().top - rip.height()/2;

      if( dark ){
          rip.css({background: 'rgba(0, 0, 0, 0.3)'});
      }

      rip.css({top: y+'px', left: x+'px'}).addClass("animate-ripple");
    };
  }

  var mod = angular.module('ionicRipple', []);

  mod.directive('ripple', function() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.on('click', onRippleEvent(attrs.hasOwnProperty('rippleDark')));
      }
    };
  });

  mod.directive('rippleHold', function() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var pos = {};

        // as hold won't send location, save location on mousedown / touchstart event
        element.on('mousedown', function (e){
          pos.pageX = e.pageX;
          pos.pageY = e.pageY;
        });
        element.on('touchstart', function (e){
          if(!e.originalEvent){ pos = {}; return; }
          pos.pageX = e.originalEvent.targetTouches[0].pageX;
          pos.pageY = e.originalEvent.targetTouches[0].pageY;
        });
        element.on('hold', onRippleEvent(attrs.hasOwnProperty('rippleDark'), pos));
      }
    };
  });

})(window, window.angular);
