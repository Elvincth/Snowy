/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var n=this&&this.__awaiter||function(n,e,t,r){return new(t||(t=Promise))(function(o,i){function u(n){try{c(r.next(n))}catch(n){i(n)}}function a(n){try{c(r.throw(n))}catch(n){i(n)}}function c(n){n.done?o(n.value):new t(function(e){e(n.value)}).then(u,a)}c((r=r.apply(n,e||[])).next())})},e=this&&this.__generator||function(n,e){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(n,u)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Ionic.loadBundle("chunk-5aecd090.js",["exports"],function(t){window,t.attachComponent=function(t,r,o,i,u){return n(this,void 0,void 0,function(){var n;return e(this,function(e){switch(e.label){case 0:if(t)return[2,t.attachViewToDom(r,o,u,i)];if("string"!=typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");return n="string"==typeof o?r.ownerDocument.createElement(o):o,i&&i.forEach(function(e){return n.classList.add(e)}),u&&Object.assign(n,u),r.appendChild(n),n.componentOnReady?[4,n.componentOnReady()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2,n]}})})},t.detachComponent=function(n,e){if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},t.getClassMap=function(n){var e={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return e[n]=!0}),e},t.createColorClasses=function(n){var e;return null!=n?((e={"ion-color":!0})["ion-color-"+n]=!0,e):void 0},t.openURL=function(t,r,o,i){return n(this,void 0,void 0,function(){var n;return e(this,function(e){switch(e.label){case 0:return null==r||"#"===r[0]||-1!==r.indexOf("://")?[3,2]:(n=t.document.querySelector("ion-router"))?(null!=o&&o.preventDefault(),[4,n.componentOnReady()]):[3,2];case 1:return e.sent(),[2,n.push(r,i)];case 2:return[2,!1]}})})},t.hostContext=function(n,e){return null!==e.closest(n)},t.createThemedClasses=function(n,e){var t;return(t={})[e]=!0,t[e+"-"+n]=!!n,t}});