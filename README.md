ionic-ripple
==============

Simple way to add material design ripple effect to elements.

For the people who just want to implement the Google Material Design ripple effect and not the whole suite of material'y stuff.


# Bower

  ```bash
  bower install --save ionic-ripple
  ```


# Usage

Include the script in your HTML (need jquery for now...)

  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>

  <script src="lib/ionic/js/ionic.bundle.js"></script>
  <script src="lib/ionic-ripple/ionic-ripple.js"></script>
  ```

Then include `ionicRipple` in your module dependencies

  ```js
  angular.module('yourApp', ['ionicRipple']);
  ```

Then add the `ripple` attribute to elements (make sure the elements have color since the ripple is white)

  ```html
  <button ripple class="button button-positive">OMG a ripply button!</button>

  ```

In order to trigger the ripple on a long-press (ie. tap hold) event
  ```html
  <button ripple-hold class="button button-positive">OMG a long-pressed ripply button!</button>

  ```

If you want a dark ripple...

  ```html
  <button ripple ripple-dark class="button button-positive">OMG a ripply button with a white background!</button>

  ```

Add these styles

  ```css
   [ripple]{
      overflow: hidden;
   }

  .rip {
    display: block;
    position: absolute;
    background:rgba(255, 255, 255, 0.3);
    border-radius: 100%;
    -webkit-transform:scale(0);
       -moz-transform:scale(0);
         -o-transform:scale(0);
            transform:scale(0);
  }

  .animate-ripple {
  	-webkit-animation:ripple 0.65s linear;
     -moz-animation:ripple 0.65s linear;
      -ms-animation:ripple 0.65s linear;
       -o-animation:ripple 0.65s linear;
          animation:ripple 0.65s linear;
  }

  @-webkit-keyframes ripple {
      100% {opacity: 0; -webkit-transform: scale(2.5);}
  }
  @-moz-keyframes ripple {
      100% {opacity: 0; -moz-transform: scale(2.5);}
  }
  @-o-keyframes ripple {
      100% {opacity: 0; -o-transform: scale(2.5);}
  }
  @keyframes ripple {
      100% {opacity: 0; transform: scale(2.5);}
  }
  ```

Add your done!


# Credits

Inspired by [this demo](http://codepen.io/440design/pen/iEztk)

# License
The MIT License

Copyright (c) 2015 Darryl D.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



bower register ionic-ripple https://github.com/DarrylD/ionic-ripple.git
