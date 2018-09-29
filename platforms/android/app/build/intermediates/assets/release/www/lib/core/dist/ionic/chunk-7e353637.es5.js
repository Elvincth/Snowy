/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(n,e,t,r){return new(t||(t=Promise))(function(i,o){function a(n){try{c(r.next(n))}catch(n){o(n)}}function u(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new t(function(e){e(n.value)}).then(a,u)}c((r=r.apply(n,e||[])).next())})},__generator=this&&this.__generator||function(n,e){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(n,a)}catch(n){o=[6,n],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Ionic.loadBundle("chunk-7e353637.js",["exports"],function(n){window.Ionic.h,n.a=function(n,e,t,r,i){return __awaiter(this,void 0,void 0,function(){var o;return __generator(this,function(a){switch(a.label){case 0:if(n)return[2,n.attachViewToDom(e,t,i,r)];if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");return o="string"==typeof t?e.ownerDocument.createElement(t):t,r&&r.forEach(function(n){return o.classList.add(n)}),i&&Object.assign(o,i),e.appendChild(o),o.componentOnReady?[4,o.componentOnReady()]:[3,2];case 1:a.sent(),a.label=2;case 2:return[2,o]}})})},n.b=function(n,e){if(e){if(n){var t=e.parentElement;return n.removeViewFromDom(t,e)}e.remove()}return Promise.resolve()},n.c=function(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()},n.d=function(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()},n.e=function(){var n=window.TapticEngine;n&&n.gestureSelectionStart()},n.f=function(){var n=window.TapticEngine;n&&n.selection()},n.g=function(){return!!window.TapticEngine},n.h=function(n){var e=window.TapticEngine;e&&e.notification(n)},n.i=function(n){var e=window.TapticEngine;e&&e.impact(n)},n.j=function(n){var e={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return e[n]=!0}),e},n.k=function(n){var e;return null!=n?((e={"ion-color":!0})["ion-color-"+n]=!0,e):void 0},n.l=function(n,e,t,r){return __awaiter(this,void 0,void 0,function(){var i;return __generator(this,function(o){switch(o.label){case 0:return null==e||"#"===e[0]||-1!==e.indexOf("://")?[3,2]:(i=n.document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return[2,(o.sent(),i.push(e,r))];case 2:return[2,!1]}})})},n.m=function(n,e){var t;return(t={})[e]=!0,t[e+"-"+n]=!!n,t},n.n=function(n,e){return null!==e.closest(n)}});