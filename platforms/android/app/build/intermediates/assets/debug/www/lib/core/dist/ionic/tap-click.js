/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{c as e,l as n}from"./chunk-e7816c0b.js";function o(t){let o,a,d=10*-r,u=0,l=!1;const f=new WeakMap;function v(t){d=e(t),m(t)}function p(){clearTimeout(a),o&&(b(!1),o=void 0),l=!0}function h(t){o||(l=!1,L(function(t){if(!t.composedPath)return t.target.closest("[ion-activatable]");{const e=t.composedPath();for(let t=0;t<e.length-2;t++){const n=e[t];if(n.hasAttribute&&n.hasAttribute("ion-activatable"))return n}}}(t),t))}function m(t){L(void 0,t),l&&t.cancelable&&t.preventDefault()}function L(t,e){if(t&&t===o)return;clearTimeout(a),a=void 0;const{x:s,y:r}=n(e);if(o){if(f.has(o))throw new Error("internal error");o.classList.contains(i)||w(o,s,r),b(!0)}if(t){const e=f.get(t);e&&(clearTimeout(e),f.delete(t)),t.classList.remove(i),a=setTimeout(()=>{w(t,s,r),a=void 0},c)}o=t}function w(t,e,n){u=Date.now(),t.classList.add(i);const o=function(t){if(t.shadowRoot){const e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")}(t);o&&o.addRipple&&o.addRipple(e,n)}function b(t){const e=o;if(!e)return;const n=s-Date.now()+u;if(t&&n>0){const t=setTimeout(()=>{e.classList.remove(i),f.delete(e)},s);f.set(e,t)}else e.classList.remove(i)}t.body.addEventListener("click",function(t){l&&(t.preventDefault(),t.stopPropagation())},!0),t.body.addEventListener("ionScrollStart",p),t.body.addEventListener("ionGestureCaptured",p),t.addEventListener("touchstart",function(t){d=e(t),h(t)},!0),t.addEventListener("touchcancel",v,!0),t.addEventListener("touchend",v,!0),t.addEventListener("mousedown",function(t){const n=e(t)-r;d<n&&h(t)},!0),t.addEventListener("mouseup",function(t){const n=e(t)-r;d<n&&m(t)},!0)}const i="activated",c=200,s=200,r=2500;export{o as startTapClick};