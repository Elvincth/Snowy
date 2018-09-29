/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(n,e,t,i){return new(t||(t=Promise))(function(r,a){function o(n){try{c(i.next(n))}catch(n){a(n)}}function s(n){try{c(i.throw(n))}catch(n){a(n)}}function c(n){n.done?r(n.value):new t(function(e){e(n.value)}).then(o,s)}c((i=i.apply(n,e||[])).next())})},__generator=this&&this.__generator||function(n,e){var t,i,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,i&&(r=2&a[0]?i.return:a[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;switch(i=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(n,o)}catch(n){a=[6,n],i=0}finally{t=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Ionic.loadBundle("chunk-25856bb5.js",["require","exports"],function(n,e){function t(n){var e=n.enteringEl,t=n.leavingEl;e.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")}function i(n,e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(i){switch(i.label){case 0:return t=(void 0!==n.deepWait?n.deepWait:e)?[c(n.enteringEl),c(n.leavingEl)]:[s(n.enteringEl),s(n.leavingEl)],[4,Promise.all(t)];case 1:return i.sent(),[4,function(n,e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return n?[4,n(e)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})}(n.viewIsReady,n.enteringEl)];case 2:return i.sent(),[2]}})})}function r(n,e,t){o(n,t,"ionViewWillLeave"),o(n,e,"ionViewWillEnter")}function a(n,e,t){o(n,e,"ionViewDidEnter"),o(n,t,"ionViewDidLeave")}function o(n,e,t){if(e){var i=new(0,n.CustomEvent)(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(i)}}function s(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()}function c(n){return __awaiter(this,void 0,void 0,function(){var e,t,i;return __generator(this,function(r){switch(r.label){case 0:return(e=n)?(t=null!=e.componentOnReady)?(i=null,[4,e.componentOnReady()]):[3,2]:[3,4];case 1:t=i!=r.sent(),r.label=2;case 2:return t?[2]:[4,Promise.all(Array.from(e.children).map(c))];case 3:r.sent(),r.label=4;case 4:return[2]}})})}function u(n,e){e?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))}window.Ionic.h,e.a=c,e.b=o,e.c=u,e.d=function(e){return new Promise(function(o,s){e.queue.write(function(){!function(n){var e=n.enteringEl,t=n.leavingEl;(function(n,e,t){void 0!==n&&(n.style.zIndex="back"===t?"99":"101"),void 0!==e&&(e.style.zIndex="100")})(e,t,n.direction),n.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),u(e,!1),t&&u(t,!1)}(e),function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(o){switch(o.label){case 0:return[4,function(e){return __awaiter(this,void 0,void 0,function(){var t,i;return __generator(this,function(r){switch(r.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?(t=e.animationBuilder,[3,6]):[3,1]:[3,7];case 1:return"ios"!==e.mode?[3,3]:[4,new Promise(function(e,t){n(["./ios.transition.js"],e,t)})];case 2:return i=r.sent().iosTransitionAnimation,[3,5];case 3:return[4,new Promise(function(e,t){n(["./md.transition.js"],e,t)})];case 4:i=r.sent().mdTransitionAnimation,r.label=5;case 5:t=i,r.label=6;case 6:return[2,t];case 7:return[2]}})})}(e)];case 1:return[2,(t=o.sent())?function(n,e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(o){switch(o.label){case 0:return[4,i(e,!0)];case 1:return o.sent(),[4,e.animationCtrl.create(n,e.baseEl,e)];case 2:return t=o.sent(),r(e.window,e.enteringEl,e.leavingEl),[4,function(n,e){var t=e.progressCallback,i=new Promise(function(e){return n.onFinish(e)});return t?(n.progressStart(),t(n)):n.play(),i}(t,e)];case 3:return[2,(o.sent(),t.hasCompleted&&a(e.window,e.enteringEl,e.leavingEl),{hasCompleted:t.hasCompleted,animation:t})]}})})}(t,e):function(n){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(o){switch(o.label){case 0:return e=n.enteringEl,t=n.leavingEl,[4,i(n,!1)];case 1:return[2,(o.sent(),r(n.window,e,t),a(n.window,e,t),{hasCompleted:!0})]}})})}(e)]}})})}(e).then(function(n){n.animation&&n.animation.destroy(),t(e),o(n)},function(n){t(e),s(n)})})})}});