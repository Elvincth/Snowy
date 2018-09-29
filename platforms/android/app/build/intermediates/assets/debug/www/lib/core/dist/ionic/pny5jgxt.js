/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{k as t,n}from"./chunk-a4253575.js";class s{constructor(){this.disabled=!1}valueChanged(e){this.updateButtons(),this.ionChange.emit({value:e})}segmentClick(e){const t=e.target;this.value=t.value}componentDidLoad(){if(null==this.value){const e=this.getButtons().find(e=>e.checked);e&&(this.value=e.value)}this.updateButtons()}updateButtons(){const e=this.value;for(const t of this.getButtons())t.checked=t.value===e}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}hostData(){return{class:Object.assign({},t(this.color),{"segment-disabled":this.disabled,"in-toolbar":n("ion-toolbar",this.el),"in-color-toolbar":n("ion-toolbar.ion-color",this.el)})}}render(){return e("slot",null)}static get is(){return"ion-segment"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},mode:{type:String,attr:"mode"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionSelect",method:"segmentClick"}]}static get style(){return":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit);text-align:center;--background:transparent;--background-checked:var(--ion-color-primary, #3880ff);--border-color:currentColor;--border-color-checked:var(--ion-color-primary, #3880ff);--border-color-disabled:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary, #3880ff);--color-checked:var(--ion-color-primary-contrast, #fff);--color-disabled:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.3)}:host(.segment-disabled){pointer-events:none;opacity:.4}::slotted(ion-segment-button){--color:inherit;--background:inherit;--border-color:inherit;--border-radius:4px;--border-width:1px;--border-style:solid;--transition:100ms all linear;--icon-size:26px;height:32px;font-size:13px;line-height:37px}:host(.ion-color) ::slotted(ion-segment-button){--color:var(--ion-color-base)}::slotted(.segment-button-checked){--color:var(--color-checked);--background:var(--background-checked);--border-color:var(--border-color-checked)}:host(.ion-color) ::slotted(.segment-button-checked){--background:var(--ion-color-base);--border-color:var(--ion-color-base);--color:var(--ion-color-contrast)}::slotted(.segment-button-disabled){pointer-events:none;--border-color:var(--border-color-disabled);--color:var(--color-disabled)}:host(.ion-color) ::slotted(.segment-button-disabled){--border-color:var(--ion-color-base);--color:rgba(var(--ion-color-base-rgb), 0.5)}:host(.in-toolbar){left:0;right:0;top:0;bottom:0;position:absolute}:host(.in-toolbar) ::slotted(ion-segment-button){max-width:100px;height:30px;font-size:12px;line-height:22px}:host(.in-color-toolbar:not(.ion-color)){--color:var(--ion-color-contrast);--color-checked:var(--ion-color-base);--color-disabled:rgba(var(--ion-color-contrast-rgb), 0.3);--background-checked:var(--ion-color-contrast);--border-color-checked:var(--ion-color-contrast);--border-color-disabled:var(--ion-color-contrast)}"}static get styleMode(){return"ios"}}let o=0;class a{constructor(){this.checked=!1,this.disabled=!1,this.value="ion-sb-"+o++}checkedChanged(e,t){e&&!t&&this.ionSelect.emit()}hostData(){const{disabled:e,checked:n,color:s}=this;return{class:Object.assign({},t(s),{"segment-button-disabled":e,"segment-button-checked":n}),"ion-activable":!0}}render(){return[e("button",{type:"button","aria-pressed":this.checked?"true":null,class:"segment-button-native",disabled:this.disabled,onClick:()=>this.checked=!0},e("slot",null),"md"===this.mode&&e("ion-ripple-effect",null))]}static get is(){return"ion-segment-button"}static get encapsulation(){return"shadow"}static get properties(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},mode:{type:String,attr:"mode"},value:{type:String,attr:"value"}}}static get events(){return[{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;--icon-size:1em;-webkit-box-flex:1;-ms-flex:1;flex:1;color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}:host(:first-of-type) .segment-button-native{--padding-end:0;border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}:host(:not(:first-of-type)) .segment-button-native{border-left-width:0}:host(:last-of-type) .segment-button-native{--padding-start:0;border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}.segment-button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:inherit;contain:content;cursor:pointer;overflow:hidden}.segment-button-native:active,.segment-button-native:focus{outline:0}::slotted(ion-icon){font-size:var(--icon-size)}"}}export{s as IonSegment,a as IonSegmentButton};