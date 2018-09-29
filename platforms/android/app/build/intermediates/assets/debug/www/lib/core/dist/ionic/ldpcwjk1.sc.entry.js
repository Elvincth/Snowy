/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{b as e,m as o}from"./chunk-e7816c0b.js";import{d as s,f as l,g as r}from"./chunk-50fe9317.js";class n{componentDidLoad(){e(()=>{!function(t){import("./tap-click.js").then(e=>e.startTapClick(t.document))}(this.win),function(t,e){e.getBoolean("inputShims",function(t){return o(t,"ios")&&o(t,"mobile")}(t))&&import("./input-shims.js").then(o=>o.startInputShims(t.document,e))}(this.win,this.config),function(t,e){o(t,"hybrid")&&import("./status-tap.js").then(o=>o.startStatusTap(t,e))}(this.win,this.queue),function(t){o(t,"hybrid")&&import("./hardware-back-button.js").then(e=>e.startHardwareBackButton(t))}(this.win)})}hostData(){return{class:{"ion-page":!0}}}static get is(){return"ion-app"}static get properties(){return{config:{context:"config"},el:{elementRef:!0},queue:{context:"queue"},win:{context:"window"}}}static get style(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"}}class i{static get is(){return"ion-buttons"}static get encapsulation(){return"scoped"}static get style(){return".sc-ion-buttons-md-h{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99;pointer-events:none}.sc-ion-buttons-md-s  .button {--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--box-shadow:none;margin-left:2px;margin-right:2px;pointer-events:auto;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--height:32px;--box-shadow:none;font-size:14px;font-weight:500}.sc-ion-buttons-md-s  .button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:currentColor;--color-activated:currentColor}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background-color, #f8f8f8);--color-activated:var(--ion-toolbar-background-color, #f8f8f8);--background:var(--ion-toolbar-text-color, #424242);--background-activated:var(--ion-toolbar-text-color, #424242)}.sc-ion-buttons-md-s  .button-outline {--color:currentColor;--color-activated:currentColor;--background:transparent;--background-activated:transparent;--border-color:currentColor}.sc-ion-buttons-md-s  .button-clear {--color:currentColor;--color-activated:currentColor;--background:transparent}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin:0 .3em 0 0;font-size:1.4em;pointer-events:none}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin:0 0 0 .4em;font-size:1.4em;pointer-events:none}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding:0;margin:0;font-size:1.8em;pointer-events:none}[slot=start].sc-ion-buttons-md-h{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[slot=secondary].sc-ion-buttons-md-h{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}[slot=primary].sc-ion-buttons-md-h{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5;text-align:end}[slot=end].sc-ion-buttons-md-h{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6;text-align:end}"}static get styleMode(){return"md"}}class c{constructor(){this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}onNavChanged(){this.resize()}componentWillLoad(){void 0===this.forceOverscroll&&(this.forceOverscroll="ios"===this.mode&&"ontouchstart"in this.win)}componentDidLoad(){this.resize()}componentDidUnload(){this.watchDog&&clearInterval(this.watchDog)}resize(){this.fullscreen?this.queue.read(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())}readDimensions(){const t=function(t){const e=t.closest("ion-tabs");if(e)return e;const o=t.closest("ion-app,ion-page,.ion-page,page-inner");return o||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)}(this.el),e=Math.max(this.el.offsetTop,0),o=Math.max(t.offsetHeight-e-this.el.offsetHeight,0);(e!==this.cTop||o!==this.cBottom)&&(this.cTop=e,this.cBottom=o,this.el.forceUpdate())}onScroll(t){const e=Date.now(),o=!this.isScrolling;this.lastScroll=e,o&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,this.queue.read(e=>{this.queued=!1,this.detail.event=t,function(t,e,o,s){const l=t.currentX,r=t.currentY,n=t.timeStamp,i=e.scrollLeft,c=e.scrollTop;s&&(t.startTimeStamp=o,t.startX=i,t.startY=c,t.velocityX=t.velocityY=0),t.timeStamp=o,t.currentX=t.scrollLeft=i,t.currentY=t.scrollTop=c,t.deltaX=i-t.startX,t.deltaY=c-t.startY;const a=o-n;if(a>0&&a<100){const e=(c-r)/a;t.velocityX=.7*((i-l)/a)+.3*t.velocityX,t.velocityY=.7*e+.3*t.velocityY}}(this.detail,this.scrollEl,e,o),this.ionScroll.emit(this.detail)}))}getScrollElement(){return Promise.resolve(this.scrollEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}scrollToBottom(t=0){return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}scrollByPoint(t,e,o){return this.scrollToPoint(t+this.scrollEl.scrollLeft,e+this.scrollEl.scrollTop,o)}async scrollToPoint(t,e,o=0){const s=this.scrollEl;if(o<32)return null!=e&&(s.scrollTop=e),void(null!=t&&(s.scrollLeft=t));let l,r=0;const n=new Promise(t=>l=t),i=s.scrollTop,c=s.scrollLeft,a=null!=e?e-i:0,h=null!=t?t-c:0,u=t=>{const e=Math.min(1,(t-r)/o)-1,n=Math.pow(e,3)+1;0!==a&&(s.scrollTop=Math.floor(n*a+i)),0!==h&&(s.scrollLeft=Math.floor(n*h+c)),n<1?requestAnimationFrame(u):l()};return requestAnimationFrame(t=>{r=t,u(t)}),n}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()},100)}onScrollEnd(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1})}hostData(){return{class:Object.assign({},s(this.color),{"content-sizing":l("ion-popover",this.el),overscroll:!!this.forceOverscroll}),style:{"--offset-top":`${this.cTop}px`,"--offset-bottom":`${this.cBottom}px`}}}render(){const{scrollX:e,scrollY:o,forceOverscroll:s}=this;return this.resize(),[t("div",{class:{"inner-scroll":!0,"scroll-x":e,"scroll-y":o,overscroll:(e||o)&&!!s},ref:t=>this.scrollEl=t,onScroll:t=>this.onScroll(t)},t("slot",null)),t("slot",{name:"fixed"})]}static get is(){return"ion-content"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},forceOverscroll:{type:Boolean,attr:"force-overscroll",mutable:!0},fullscreen:{type:Boolean,attr:"fullscreen"},getScrollElement:{method:!0},queue:{context:"queue"},scrollByPoint:{method:!0},scrollEvents:{type:Boolean,attr:"scroll-events"},scrollToBottom:{method:!0},scrollToPoint:{method:!0},scrollToTop:{method:!0},scrollX:{type:Boolean,attr:"scroll-x"},scrollY:{type:Boolean,attr:"scroll-y"},win:{context:"window"}}}static get events(){return[{name:"ionScrollStart",method:"ionScrollStart",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScroll",method:"ionScroll",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScrollEnd",method:"ionScrollEnd",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"body:ionNavDidChange",method:"onNavChanged"}]}static get style(){return".sc-ion-content-h{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0!important;padding:0!important;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);contain:layout size style}.ion-color.sc-ion-content-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.outer-content.sc-ion-content-h{--background:var(--ion-background-color-step-50, #f2f2f2)}.inner-scroll.sc-ion-content{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding:calc(var(--padding-top) + var(--offset-top)) var(--padding-end) calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom)) var(--padding-start);position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.scroll-x.sc-ion-content, .scroll-y.sc-ion-content{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y.sc-ion-content{overflow-y:auto}.scroll-x.sc-ion-content{overflow-x:auto}.overscroll.sc-ion-content::after, .overscroll.sc-ion-content::before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll.sc-ion-content::before{bottom:-1px}.overscroll.sc-ion-content::after{top:-1px}.content-sizing.sc-ion-content-h{contain:none}.content-sizing.sc-ion-content-h   .inner-scroll.sc-ion-content{position:relative}"}}class a{constructor(){this.translucent=!1}hostData(){const t=r(this.mode,"footer"),e=this.translucent?r(this.mode,"footer-translucent"):null;return{class:Object.assign({},t,e)}}static get is(){return"ion-footer"}static get properties(){return{mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}}static get style(){return"ion-footer{display:block;position:relative;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md::before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:\"\"}.footer-md[no-border]::before{display:none}"}static get styleMode(){return"md"}}class h{constructor(){this.translucent=!1}hostData(){const t=r(this.mode,"header"),e=this.translucent?r(this.mode,"header-translucent"):null;return{class:Object.assign({},t,e)}}static get is(){return"ion-header"}static get properties(){return{mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}}static get style(){return"ion-header{display:block;position:relative;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md::after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:\"\"}.header-md[no-border]::after{display:none}"}static get styleMode(){return"md"}}class u{getMode(){const t=this.el.closest("ion-toolbar");return t&&t.mode||this.mode}hostData(){const t=this.getMode();return{class:Object.assign({},s(this.color),{[`title-${t}`]:!0})}}render(){return[t("div",{class:"toolbar-title"},t("slot",null))]}static get is(){return"ion-title"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},el:{elementRef:!0}}}static get style(){return".sc-ion-title-h{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.title-ios.sc-ion-title-h{left:0;top:0;padding:0 90px;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}.title-md.sc-ion-title-h{padding:0 12px;font-size:20px;font-weight:500}.ion-color.sc-ion-title-h{color:var(--ion-color-base)}.toolbar-title.sc-ion-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"}}class d{hostData(){return{class:s(this.color)}}render(){return[t("div",{class:"toolbar-background"}),t("div",{class:"toolbar-container"},t("slot",{name:"start"}),t("slot",{name:"secondary"}),t("div",{class:"toolbar-content"},t("slot",null)),t("slot",{name:"primary"}),t("slot",{name:"end"}))]}static get is(){return"ion-toolbar"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},mode:{type:String,attr:"mode"}}}static get style(){return".sc-ion-toolbar-md-h{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box;--background:var(--ion-toolbar-background-color, #f8f8f8);--color:var(--ion-toolbar-text-color, #424242);--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, #c1c4cd));--padding-top:4px;--padding-bottom:4px;--padding-start:4px;--padding-end:4px;--min-height:56px}.ion-color.sc-ion-toolbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-toolbar-md-h   .toolbar-background.sc-ion-toolbar-md{background:var(--ion-color-base)}.toolbar-container.sc-ion-toolbar-md{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background.sc-ion-toolbar-md{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-content.sc-ion-toolbar-md{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;min-width:0;max-width:100%}"}static get styleMode(){return"md"}}export{n as IonApp,i as IonButtons,c as IonContent,a as IonFooter,h as IonHeader,u as IonTitle,d as IonToolbar};