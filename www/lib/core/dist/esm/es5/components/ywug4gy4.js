/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import{h}from"../ionic.core.js";import{k as createColorClasses}from"./chunk-a4253575.js";var Chip=function(){function e(){}return e.prototype.hostData=function(){return{class:createColorClasses(this.color)}},Object.defineProperty(e,"is",{get:function(){return"ion-chip"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-chip-ios-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-item-align:center;align-self:center;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-weight:400;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--color:var(--ion-text-color-step-150, #262626);--label-margin-top:0;--label-margin-end:10px;--label-margin-bottom:0;--label-margin-start:10px;--avatar-width:24px;--avatar-height:24px;--avatar-margin-top:0;--avatar-margin-end:4px;--avatar-margin-bottom:0;--avatar-margin-start:4px;border-radius:16px;margin:2px 0;height:32px;font-size:13px}.ion-color.sc-ion-chip-ios-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-chip-ios-h.ion-color.sc-ion-chip-ios-s  ion-chip-button , .sc-ion-chip-ios-h.ion-color.sc-ion-chip-ios-s  ion-chip-icon {--color:currentColor}.sc-ion-chip-ios-s  ion-label {margin:var(--label-margin-top) var(--label-margin-end) var(--label-margin-bottom) var(--label-margin-start)}.sc-ion-chip-ios-s  ion-avatar {margin:var(--avatar-margin-top) var(--avatar-margin-end) var(--avatar-margin-bottom) var(--avatar-margin-start);width:var(--avatar-width);height:var(--avatar-height)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),ChipButton=function(){function e(){this.disabled=!1,this.fill="clear"}return e.prototype.hostData=function(){var e;return{class:Object.assign({},createColorClasses(this.color),(e={},e["chip-button-"+this.fill]=!0,e))}},e.prototype.render=function(){var e=void 0===this.href?"button":"a";return h(e,{type:"button",class:"chip-button-native",disabled:this.disabled,href:this.href},h("span",{class:"chip-button-inner"},h("slot",null)),"md"===this.mode&&h("ion-ripple-effect",null))},Object.defineProperty(e,"is",{get:function(){return"ion-chip-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},fill:{type:String,attr:"fill"},href:{type:String,attr:"href"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--border-radius:50%;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--width:32px;--height:100%;width:var(--width);height:var(--height);font-size:32px}:host(.chip-button-clear){--background:transparent;--color:var(--ion-text-color-step-400, #666666)}:host(.chip-button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.chip-button-solid.ion-color) .chip-button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.chip-button-clear.ion-color) .chip-button-native{background:0 0;color:var(--ion-color-base)}.chip-button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);position:relative;width:var(--width);height:var(--height);border:0;outline:0;background:var(--background);color:var(--color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.chip-button-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}"},enumerable:!0,configurable:!0}),e}(),ChipIcon=function(){function e(){this.fill="clear"}return e.prototype.hostData=function(){var e;return{class:Object.assign({},createColorClasses(this.color),(e={},e["chip-icon-"+this.fill]=!0,e))}},e.prototype.render=function(){return h("ion-icon",{name:this.name,src:this.src,mode:this.mode})},Object.defineProperty(e,"is",{get:function(){return"ion-chip-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},fill:{type:String,attr:"fill"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},src:{type:String,attr:"src"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{border-radius:50%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:var(--width,32px);height:var(--height,32px);background:var(--background);color:var(--color);font-size:18px}:host(.chip-icon-clear){--background:transparent;--color:var(--ion-text-color-step-400, #666666)}:host(.chip-icon-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.chip-icon-solid.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.chip-icon-clear.ion-color){background:0 0;color:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),e}();export{Chip as IonChip,ChipButton as IonChipButton,ChipIcon as IonChipIcon};