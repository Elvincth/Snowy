/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{a as t,b as o,m as n,j as s}from"./chunk-a4253575.js";import{a as i,b as r,c as a,e as l,f as p,g as d,h as c}from"./chunk-ca273e40.js";import{a as m}from"./chunk-5f438245.js";function h(e,t,o){let n="top",s="left";const i=t.querySelector(".popover-content"),r=i.getBoundingClientRect(),a=r.width,l=r.height,p=window.innerWidth,d=window.innerHeight,c=o&&o.target&&o.target.getBoundingClientRect(),m=null!=c&&"top"in c?c.top:d/2-l/2,h=null!=c&&"left"in c?c.left:p/2,y=c&&c.width||0,v=c&&c.height||0,f=t.querySelector(".popover-arrow"),g=f.getBoundingClientRect(),b=g.width,w=g.height;null!=c&&(f.style.display="none");const D={top:m+v,left:h+y/2-b/2},P={top:m+v+(w-1),left:h+y/2-a/2};let E=!1,k=!1;P.left<u+25?(E=!0,P.left=u):a+u+P.left+25>p&&(k=!0,P.left=p-a-u,s="right"),m+v+l>d&&m-l>0?(D.top=m-(w+1),console.log(D),console.log(m),console.log(l),P.top=m-l-(w-1),t.className=t.className+" popover-bottom",n="bottom"):m+v+l>d&&(i.style.bottom=u+"%"),f.style.top=D.top+"px",f.style.left=D.left+"px",i.style.top=P.top+"px",i.style.left=P.left+"px",E&&(i.style.left=`calc(${P.left}px + var(--ion-safe-area-left, 0px)`),k&&(i.style.left=`calc(${P.left}px + var(--ion-safe-area-right, 0px)`),i.style.transformOrigin=n+" "+s;const x=new e,S=new e;S.addElement(t.querySelector("ion-backdrop")),S.fromTo("opacity",.01,.08);const B=new e;return B.addElement(t.querySelector(".popover-wrapper")),B.fromTo("opacity",.01,1),Promise.resolve(x.addElement(t).easing("ease").duration(100).add(S).add(B))}const u=5;function y(e,t){const o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));const s=new e;return s.addElement(t.querySelector(".popover-wrapper")),s.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(s))}function v(e,t,o){let n="top",s="left";const i=t.querySelector(".popover-content"),r=i.getBoundingClientRect(),a=r.width,l=r.height,p=window.innerWidth,d=window.innerHeight,c=o&&o.target&&o.target.getBoundingClientRect(),m=null!=c&&"top"in c?c.top:d/2-l/2,h=null!=c&&"left"in c?c.left:p/2-a/2,u=c&&c.height||0,y={top:m,left:h};y.left<f?y.left=f:a+f+y.left>p&&(y.left=p-a-f,s="right"),m+u+l>d&&m-l>0?(y.top=m-l,t.className=t.className+" popover-bottom",n="bottom"):m+u+l>d&&(i.style.bottom=f+"px"),i.style.top=y.top+"px",i.style.left=y.left+"px",i.style.transformOrigin=n+" "+s;const v=new e,g=new e;g.addElement(t.querySelector("ion-backdrop")),g.fromTo("opacity",.01,.08);const b=new e;b.addElement(t.querySelector(".popover-wrapper")),b.fromTo("opacity",.01,1);const w=new e;w.addElement(t.querySelector(".popover-content")),w.fromTo("scale",.001,1);const D=new e;return D.addElement(t.querySelector(".popover-viewport")),D.fromTo("opacity",.01,1),Promise.resolve(v.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(g).add(b).add(w).add(D))}const f=12;function g(e,t){const o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));const s=new e;return s.addElement(t.querySelector(".popover-wrapper")),s.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(s))}class b{constructor(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}componentDidLoad(){this.ionPopoverDidLoad.emit()}componentDidUnload(){this.ionPopoverDidUnload.emit()}onDismiss(e){return e.stopPropagation(),e.preventDefault(),this.dismiss()}onBackdropTap(){return this.dismiss(null,i)}lifecycle(e){const t=this.usersElement,o=w[e.type];if(t&&o){const n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}}async present(){if(this.presented)return;const e=this.el.querySelector(".popover-content");if(!e)throw new Error("container is undefined");const o=Object.assign({},this.componentProps,{popover:this.el});return this.usersElement=await t(this.delegate,e,this.component,["popover-viewport"],o),await m(this.usersElement),l(this,"popoverEnter",h,v,this.event)}async dismiss(e,t){const n=await r(this,e,t,"popoverLeave",y,g,this.event);return n&&await o(this.delegate,this.usersElement),n}onDidDismiss(){return a(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return a(this.el,"ionPopoverWillDismiss")}hostData(){const e=this.translucent?n(this.mode,"popover-translucent"):{};return{style:{zIndex:2e4+this.overlayIndex},"no-router":!0,class:Object.assign({},n(this.mode,"popover"),s(this.cssClass),e)}}render(){const t=n(this.mode,"popover-wrapper");return[e("ion-backdrop",{tappable:this.backdropDismiss}),e("div",{class:t},e("div",{class:"popover-arrow"}),e("div",{class:"popover-content"}))]}static get is(){return"ion-popover"}static get properties(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},event:{type:"Any",attr:"event"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"}}}static get events(){return[{name:"ionPopoverDidLoad",method:"ionPopoverDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidUnload",method:"ionPopoverDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]}static get style(){return"ion-popover{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1000}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;z-index:10}.popover-content ion-content{position:relative;contain:none}.popover-md .popover-content{border-radius:2px;-webkit-transform-origin:left top;transform-origin:left top;width:250px;min-width:0;min-height:0;max-height:90%;background:var(--ion-background-color,#fff);color:var(--ion-text-color,#000);-webkit-box-shadow:0 3px 12px 2px rgba(0,0,0,.3);box-shadow:0 3px 12px 2px rgba(0,0,0,.3)}.popover-md .popover-viewport{-webkit-transition-delay:.1s;transition-delay:.1s}"}static get styleMode(){return"md"}}const w={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillDismiss",ionPopoverDidDismiss:"ionViewDidDismiss"};class D{create(e){return p(this.doc.createElement("ion-popover"),e)}dismiss(e,t,o){return d(this.doc,e,t,"ion-popover",o)}async getTop(){return c(this.doc,"ion-popover")}static get is(){return"ion-popover-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}}}export{b as IonPopover,D as IonPopoverController};