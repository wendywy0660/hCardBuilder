hCard Builder
----------------------------
[Demo link](http://ankwiz.com/hcardbuilder/)


* Automation tool: Grunt and bower is used for building process, such as compile LESS, autoprefixer, minification, concatenation and jshint etc.

* SEO : document follows standard practice to have title, heading and micro format support

* Library: Bootstrap is used as a base css framework for grid system, form style and typography.

* Responsive : it has multiple layouts based on various screen size. Media query is used to determine sizes. When screen size is larger than 1200px, scaling beyond that is restricted to 1170px. Just scaling up to make it look bigger without understanding the business requirement would be incorrect.  Also if I had time I would like to have build the preview as always visible on screen.

* Ractive.js is used for templating and data binding instaed of basic jquery. To easily add more functionality and avoid repeatation of code.

* Polyfill library is used to support html5 tags and media query on IE8
