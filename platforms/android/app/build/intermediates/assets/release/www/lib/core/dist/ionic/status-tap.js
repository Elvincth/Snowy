/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:n}=window.Ionic;function t(n,t){n.addEventListener("statusTap",()=>{t.read(()=>{const e=n.document.elementFromPoint(n.innerWidth/2,n.innerHeight/2);if(!e)return;const o=e.closest("ion-content");o&&o.componentOnReady().then(()=>{t.write(()=>o.scrollToTop(300))})})})}export{t as startStatusTap};