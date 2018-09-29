/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{c as o}from"./chunk-e7816c0b.js";class e{constructor(){this.lastClick=-1e4,this.visible=!0,this.tappable=!0,this.stopPropagation=!0}componentDidLoad(){var t;t=this.doc,s.add(this),t.body.classList.add(a)}componentDidUnload(){var t;t=this.doc,s.delete(this),0===s.size&&t.body.classList.remove(a)}onTouchStart(t){this.lastClick=o(t),this.emitTap(t)}onMouseDown(t){this.lastClick<o(t)-2500&&this.emitTap(t)}emitTap(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}hostData(){return{tabindex:"-1",class:{"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}}}static get is(){return"ion-backdrop"}static get encapsulation(){return"shadow"}static get properties(){return{doc:{context:"document"},stopPropagation:{type:Boolean,attr:"stop-propagation"},tappable:{type:Boolean,attr:"tappable"},visible:{type:Boolean,attr:"visible"}}}static get events(){return[{name:"ionBackdropTap",method:"ionBackdropTap",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"touchstart",method:"onTouchStart",capture:!0},{name:"mousedown",method:"onMouseDown",capture:!0}]}static get style(){return":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:0 0}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"}static get styleMode(){return"ios"}}const a="backdrop-no-scroll",s=new Set;export{e as IonBackdrop};