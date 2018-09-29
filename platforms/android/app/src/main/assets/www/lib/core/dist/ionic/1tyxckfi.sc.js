/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{k as e}from"./chunk-a4253575.js";const s={lines:{dur:1e3,lines:12,fn:(t,e,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/s-t}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/s-t}ms`}})},bubbles:{dur:1e3,circles:9,fn:(t,e,s)=>{const n=`${t*e/s-t}ms`,r=2*Math.PI*e/s;return{r:5,style:{top:`${9*Math.sin(r)}px`,left:`${9*Math.cos(r)}px`,"animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(t,e,s)=>{const n=e/s,r=`${t*n-t}ms`,i=2*Math.PI*n;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":r}}}},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:`${9-9*e}px`,"animation-delay":-110*e+"ms"}})}};class n{constructor(){this.paused=!1}getName(){return this.name||this.config.get("spinner")||("ios"===this.mode?"lines":"crescent")}hostData(){return{class:Object.assign({},e(this.color),{[`spinner-${this.getName()}`]:!0,"spinner-paused":!!this.paused})}}render(){const t=this.getName(),e=s[t]||s.lines,n="number"==typeof this.duration&&this.duration>10?this.duration:e.dur,a=[];if(void 0!==e.circles)for(let t=0;t<e.circles;t++)a.push(r(e,n,t,e.circles));else if(void 0!==e.lines)for(let t=0;t<e.lines;t++)a.push(i(e,n,t,e.lines));return a}static get is(){return"ion-spinner"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},duration:{type:Number,attr:"duration"},name:{type:"Any",attr:"name"},paused:{type:Boolean,attr:"paused"}}}static get style(){return".sc-ion-spinner-h{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ion-color.sc-ion-spinner-h{color:var(--ion-color-base)}svg.sc-ion-spinner{left:0;top:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}.spinner-lines.sc-ion-spinner-h   line.sc-ion-spinner, .spinner-lines-small.sc-ion-spinner-h   line.sc-ion-spinner{stroke-width:4px;stroke-linecap:round;stroke:currentColor}.spinner-lines.sc-ion-spinner-h   svg.sc-ion-spinner, .spinner-lines-small.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:1s linear infinite spinner-fade-out;animation:1s linear infinite spinner-fade-out}.spinner-bubbles.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:1s linear infinite spinner-scale-out;animation:1s linear infinite spinner-scale-out;fill:currentColor}.spinner-circles.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:1s linear infinite spinner-fade-out;animation:1s linear infinite spinner-fade-out;fill:currentColor}.spinner-crescent.sc-ion-spinner-h   circle.sc-ion-spinner{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}.spinner-crescent.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:1s linear infinite spinner-rotate;animation:1s linear infinite spinner-rotate}.spinner-dots.sc-ion-spinner-h   circle.sc-ion-spinner{stroke-width:0;fill:currentColor}.spinner-dots.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1s linear infinite spinner-dots;animation:1s linear infinite spinner-dots}.spinner-paused.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}\@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}\@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}100%{-webkit-transform:scale(0,0);transform:scale(0,0)}}\@keyframes spinner-scale-out{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}100%{-webkit-transform:scale(0,0);transform:scale(0,0)}}\@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\@keyframes spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\@-webkit-keyframes spinner-dots{0%,100%{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:.9}50%{-webkit-transform:scale(.4,.4);transform:scale(.4,.4);opacity:.3}}\@keyframes spinner-dots{0%,100%{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:.9}50%{-webkit-transform:scale(.4,.4);transform:scale(.4,.4);opacity:.3}}"}}function r(e,s,n,r){const i=e.fn(s,n,r);return i.style["animation-duration"]=`${s}ms`,t("svg",{viewBox:"0 0 64 64",style:i.style},t("circle",{transform:"translate(32,32)",r:i.r}))}function i(e,s,n,r){const i=e.fn(s,n,r);return i.style["animation-duration"]=`${s}ms`,t("svg",{viewBox:"0 0 64 64",style:i.style},t("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))}export{n as IonSpinner};