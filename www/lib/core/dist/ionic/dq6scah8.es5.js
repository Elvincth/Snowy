/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("dq6scah8",["exports","./chunk-d80d899f.js","./chunk-7e353637.js"],function(e,t,i){var n=window.Ionic.h,o=function(){function e(){this.inputId="ion-rb-"+a++,this.keyFocus=!1,this.name=this.inputId,this.disabled=!1,this.checked=!1}return e.prototype.componentWillLoad=function(){this.ionSelect=t.d(this.ionSelect),this.ionStyle=t.d(this.ionStyle),null==this.value&&(this.value=this.inputId),this.emitStyle()},e.prototype.componentDidLoad=function(){this.ionRadioDidLoad.emit(),this.nativeInput.checked=this.checked;var e=this.nativeInput.closest("ion-item");if(e){var t=e.querySelector("ion-label");t&&(t.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",t.id))}},e.prototype.componentDidUnload=function(){this.ionRadioDidUnload.emit()},e.prototype.colorChanged=function(){this.emitStyle()},e.prototype.checkedChanged=function(e){this.nativeInput.checked!==e&&(this.nativeInput.checked=e),e&&this.ionSelect.emit({checked:!0,value:this.value}),this.emitStyle()},e.prototype.disabledChanged=function(e){this.nativeInput.disabled=e,this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})},e.prototype.onClick=function(){this.checkedChanged(!0)},e.prototype.onChange=function(){this.checked=!0,this.nativeInput.focus()},e.prototype.onKeyUp=function(){this.keyFocus=!0},e.prototype.onFocus=function(){this.ionFocus.emit()},e.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},e.prototype.hostData=function(){return{class:Object.assign({},i.k(this.color),{"in-item":i.n(".item",this.el),interactive:!0,"radio-checked":this.checked,"radio-disabled":this.disabled,"radio-key":this.keyFocus})}},e.prototype.render=function(){var e=this;return[n("div",{class:"radio-icon"},n("div",{class:"radio-inner"})),n("input",{type:"radio",onClick:this.onClick.bind(this),onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:function(t){return e.nativeInput=t}})]},Object.defineProperty(e,"is",{get:function(){return"ion-radio"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color",watchCallbacks:["colorChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:"Any",attr:"value",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionRadioDidLoad",method:"ionRadioDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRadioDidUnload",method:"ionRadioDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--color-checked:var(--ion-color-primary, #3880ff);--width:16px;--height:21px}:host(.radio-disabled){pointer-events:none;opacity:.3}.radio-icon{display:block;position:relative;width:var(--width);height:var(--height);contain:layout size style}input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}:host(.radio-checked) .radio-inner{left:7px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0 2px 2px 0;border-style:solid;border-color:var(--color-checked)}:host(.radio-key) .radio-icon::after{border-radius:50%;left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host(.in-item){margin:8px 11px 8px 8px;display:block;position:static}:host(.in-item[slot=start]){margin:8px 21px 8px 3px}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),a=0,d=function(){function e(){this.inputId="ion-rg-"+l++,this.labelId=this.inputId+"-lbl",this.radios=[],this.allowEmptySelection=!1,this.name=this.inputId,this.disabled=!1}return e.prototype.disabledChanged=function(){for(var e=0,t=this.radios;e<t.length;e++)t[e].disabled=this.disabled},e.prototype.valueChanged=function(e){this.updateRadios(),this.ionChange.emit({value:e})},e.prototype.onRadioDidLoad=function(e){var t=e.target;t.name=this.name,this.radios.push(t),null==this.value&&t.checked?this.value=t.value:this.updateRadios()},e.prototype.onRadioDidUnload=function(e){var t=this.radios.indexOf(e.target);t>-1&&this.radios.splice(t,1)},e.prototype.onRadioSelect=function(e){var t=e.target;t&&(this.value=t.value)},e.prototype.componentDidLoad=function(){var e=this.el.querySelector("ion-list-header");if(e||(e=this.el.querySelector("ion-item-divider")),e){var t=e.querySelector("ion-label");t&&(this.labelId=t.id=this.name+"-lbl")}this.disabledChanged(),this.updateRadios()},e.prototype.updateRadios=function(){for(var e=this.value,t=!1,i=0,n=this.radios;i<n.length;i++){var o=n[i];t||o.value!==e?o.checked=!1:(t=!0,o.checked=!0)}},e.prototype.hostData=function(){return{role:"radiogroup","aria-labelledby":this.labelId}},Object.defineProperty(e,"is",{get:function(){return"ion-radio-group"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{allowEmptySelection:{type:Boolean,attr:"allow-empty-selection"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},name:{type:String,attr:"name"},value:{type:"Any",attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionRadioDidLoad",method:"onRadioDidLoad"},{name:"ionRadioDidUnload",method:"onRadioDidUnload"},{name:"ionSelect",method:"onRadioSelect"}]},enumerable:!0,configurable:!0}),e}(),l=0;e.IonRadio=o,e.IonRadioGroup=d,Object.defineProperty(e,"__esModule",{value:!0})});