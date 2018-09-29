/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var e=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))(function(r,o){function a(e){try{s(i.next(e))}catch(e){o(e)}}function c(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){e.done?r(e.value):new t(function(n){n(e.value)}).then(a,c)}s((i=i.apply(e,n||[])).next())})},n=this&&this.__generator||function(e,n){var t,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e],i=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};Ionic.loadBundle("chunk-3f37bb51.js",["exports"],function(t){window;var i=0;function r(e){var n=o(e);return n&&n.backdropDismiss?n.dismiss(void 0,s):Promise.resolve()}function o(e,n,t){var i=function(e,n){var t=Array.from(a(e).children);return void 0===n?t:(n=n.toUpperCase(),t.filter(function(e){return e.tagName===n}))}(e,n);return void 0===t?i[i.length-1]:i.find(function(e){return e.id===t})}function a(e){return e.querySelector("ion-app")||e.body}function c(t,i,r,o){return e(this,void 0,void 0,function(){var e,a;return n(this,function(n){switch(n.label){case 0:return t.animation?(t.animation.destroy(),t.animation=void 0,[2,!1]):[3,1];case 1:return r.classList.remove("ion-page-invisible"),a=t,[4,t.animationCtrl.create(i,r.shadowRoot||t.el,o)];case 2:return e=a.animation=n.sent(),t.animation=e,t.animated||e.duration(0),t.keyboardClose&&e.beforeAddWrite(function(){var e=r.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()}),[4,e.playAsync()];case 3:return n.sent(),e.destroy(),t.animation=void 0,[2,e.hasCompleted]}})})}var s="backdrop";t.BACKDROP=s,t.dismiss=function(t,i,r,o,a,s,u){return e(this,void 0,void 0,function(){var e,l;return n(this,function(n){switch(n.label){case 0:if(!t.presented)return[2,!1];t.presented=!1,n.label=1;case 1:return n.trys.push([1,3,,4]),t.willDismiss.emit({data:i,role:r}),e=t.leaveAnimation?t.leaveAnimation:t.config.get(o,"ios"===t.mode?a:s),[4,c(t,e,t.el,u)];case 2:return n.sent(),t.didDismiss.emit({data:i,role:r}),[3,4];case 3:return l=n.sent(),console.error(l),[3,4];case 4:return t.el.remove(),[2,!0]}})})},t.eventMethod=function(e,n){var t,i=new Promise(function(e){return t=e});return function(e,n,i){var r=function(i){e.removeEventListener(n,r),t(i.detail)};e.addEventListener(n,r)}(e,n),i},t.isCancel=function(e){return"cancel"===e||e===s},t.present=function(t,i,r,o,a){return e(this,void 0,void 0,function(){var e;return n(this,function(n){switch(n.label){case 0:return t.presented?[2]:(t.presented=!0,t.willPresent.emit(),e=t.enterAnimation?t.enterAnimation:t.config.get(i,"ios"===t.mode?r:o),[4,c(t,e,t.el,a)]);case 1:return n.sent()&&t.didPresent.emit(),[2]}})})},t.createOverlay=function(e,n){var t=e.ownerDocument;!function(e){0===i&&(i=1,e.addEventListener("ionBackButton",function(n){n.detail.register(100,function(){return r(e)})}),e.addEventListener("keyup",function(n){"Escape"===n.key&&r(e)}))}(t),Object.assign(e,n),e.classList.add("ion-page-invisible");var o=i++;return e.overlayIndex=o,e.hasAttribute("id")||(e.id="ion-overlay-"+o),a(t).appendChild(e),e.componentOnReady()},t.dismissOverlay=function(e,n,t,i,r){var a=o(e,i,r);return a?a.dismiss(n,t):Promise.reject("overlay does not exist")},t.getOverlay=o,t.hapticSelectionChanged=function(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()},t.hapticSelectionEnd=function(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()},t.hapticSelectionStart=function(){var e=window.TapticEngine;e&&e.gestureSelectionStart()},t.hapticSelection=function(){var e=window.TapticEngine;e&&e.selection()}});