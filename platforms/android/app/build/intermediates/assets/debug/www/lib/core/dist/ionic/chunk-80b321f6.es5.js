/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var n=this&&this.__awaiter||function(n,e,t,i){return new(t||(t=Promise))(function(r,o){function a(n){try{u(i.next(n))}catch(n){o(n)}}function s(n){try{u(i.throw(n))}catch(n){o(n)}}function u(n){n.done?r(n.value):new t(function(e){e(n.value)}).then(a,s)}u((i=i.apply(n,e||[])).next())})},e=this&&this.__generator||function(n,e){var t,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(n,a)}catch(n){o=[6,n],i=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Ionic.loadBundle("chunk-80b321f6.js",["require","exports"],function(t,i){window;function r(n){var e=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")}function o(t,i){return n(this,void 0,void 0,function(){var r;return e(this,function(o){switch(o.label){case 0:return r=(void 0!==t.deepWait?t.deepWait:i)?[l(t.enteringEl),l(t.leavingEl)]:[c(t.enteringEl),c(t.leavingEl)],[4,Promise.all(r)];case 1:return o.sent(),[4,function(t,i){return n(this,void 0,void 0,function(){return e(this,function(n){switch(n.label){case 0:return t?[4,t(i)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}(t.viewIsReady,t.enteringEl)];case 2:return o.sent(),[2]}})})}function a(n,e,t){u(n,t,"ionViewWillLeave"),u(n,e,"ionViewWillEnter")}function s(n,e,t){u(n,e,"ionViewDidEnter"),u(n,t,"ionViewDidLeave")}function u(n,e,t){if(e){var i=new(0,n.CustomEvent)(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(i)}}function c(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()}function l(t){return n(this,void 0,void 0,function(){var n;return e(this,function(e){switch(e.label){case 0:return(n=t)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(l))];case 3:e.sent(),e.label=4;case 4:return[2]}})})}function d(n,e){e?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))}i.deepReady=l,i.lifecycle=u,i.setPageHidden=d,i.transition=function(i){return new Promise(function(u,c){i.queue.write(function(){!function(n){var e=n.enteringEl,t=n.leavingEl;(function(e,t,i){void 0!==e&&(e.style.zIndex="back"===n.direction?"99":"101"),void 0!==t&&(t.style.zIndex="100")})(e,t),n.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),d(e,!1),t&&d(t,!1)}(i),function(i){return n(this,void 0,void 0,function(){var r;return e(this,function(u){switch(u.label){case 0:return[4,function(i){return n(this,void 0,void 0,function(){var n;return e(this,function(e){switch(e.label){case 0:return i.leavingEl&&i.animated&&0!==i.duration?i.animationBuilder?[2,i.animationBuilder]:"ios"!==i.mode?[3,2]:[4,new Promise(function(n,e){t(["./ios.transition.js"],n,e)})]:[2,void 0];case 1:return n=e.sent().iosTransitionAnimation,[3,4];case 2:return[4,new Promise(function(n,e){t(["./md.transition.js"],n,e)})];case 3:n=e.sent().mdTransitionAnimation,e.label=4;case 4:return[2,n]}})})}(i)];case 1:return[2,(r=u.sent())?function(t,i){return n(this,void 0,void 0,function(){var n;return e(this,function(e){switch(e.label){case 0:return[4,o(i,!0)];case 1:return e.sent(),[4,i.animationCtrl.create(t,i.baseEl,i)];case 2:return n=e.sent(),a(i.window,i.enteringEl,i.leavingEl),[4,function(n,e){var t=e.progressCallback,i=new Promise(function(e){return n.onFinish(e)});return t?(n.progressStart(),t(n)):n.play(),i}(n,i)];case 3:return e.sent(),n.hasCompleted&&s(i.window,i.enteringEl,i.leavingEl),[2,{hasCompleted:n.hasCompleted,animation:n}]}})})}(r,i):function(t){return n(this,void 0,void 0,function(){var n,i;return e(this,function(e){switch(e.label){case 0:return n=t.enteringEl,i=t.leavingEl,[4,o(t,!1)];case 1:return e.sent(),a(t.window,n,i),s(t.window,n,i),[2,{hasCompleted:!0}]}})})}(i)]}})})}(i).then(function(n){n.animation&&n.animation.destroy(),r(i),u(n)},function(n){r(i),c(n)})})})}});