/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var e=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,l){function r(e){try{a(i.next(e))}catch(e){l(e)}}function s(e){try{a(i.throw(e))}catch(e){l(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(r,s)}a((i=i.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,i,o,l,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function s(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=2&l[0]?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(6===l[0]&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(e){l=[6,e],i=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}};Ionic.loadBundle("pze0hfsv",["exports","./chunk-7e46fca4.js","./chunk-5aecd090.js"],function(n,i,o){var l=window.Ionic.h,r=function(){function n(){this.childOpts=[],this.inputId="ion-sel-"+s++,this.isExpanded=!1,this.keyFocus=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={}}return n.prototype.disabledChanged=function(){this.emitStyle()},n.prototype.valueChanged=function(){var e=this;if(void 0===this.value)this.childOpts.filter(function(e){return e.selected}).forEach(function(e){e.selected=!1}),this.text="";else{var t=!1,n=[];this.childOpts.forEach(function(i){Array.isArray(e.value)&&e.value.includes(i.value)||i.value===e.value?(i.selected||!e.multiple&&t?!e.multiple&&t&&i.selected&&(i.selected=!1):i.selected=!0,t=!0):i.selected&&(i.selected=!1),i.selected&&n.push(i.textContent||"")}),this.text=n.join(", ")}this.ionChange.emit({value:this.value,text:this.text}),this.emitStyle()},n.prototype.optLoad=function(e){var t=e.target;this.childOpts=Array.from(this.el.querySelectorAll("ion-select-option")),null!=this.value&&Array.isArray(this.value)&&this.value.includes(t.value)||t.value===this.value?t.selected=!0:Array.isArray(this.value)&&this.multiple&&t.selected?this.value.push(t.value):void 0===this.value&&t.selected?this.value=t.value:t.selected&&(t.selected=!1)},n.prototype.optUnload=function(e){var t=this.childOpts.indexOf(e.target);t>-1&&this.childOpts.splice(t,1)},n.prototype.onSelect=function(e){var t=this;this.childOpts.forEach(function(n){n===e.target?t.value=n.value:n.selected=!1})},n.prototype.componentWillLoad=function(){this.value||(this.value=this.multiple?[]:void 0)},n.prototype.componentDidLoad=function(){var e=this;this.ionStyle=i.deferEvent(this.ionStyle);var t=this.getLabel();if(t&&(this.labelId=t.id=this.name+"-lbl"),this.multiple){var n=this.childOpts.filter(function(e){return e.selected});this.value.length=0,n.forEach(function(t){e.value.push(t.value)}),this.text=n.map(function(e){return e.textContent}).join(", ")}else(n=this.childOpts.find(function(e){return e.selected}))&&(this.value=n.value,this.text=n.textContent||"");this.emitStyle()},n.prototype.open=function(e){var t=this.interface;return"action-sheet"!==t&&"popover"!==t||!this.multiple||(console.warn('Select interface cannot be "'+t+'" with a multi-value select. Using the "alert" interface instead.'),t="alert"),"popover"!==t||e||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),t="alert"),"popover"===t?this.openPopover(e):"action-sheet"===t?this.openActionSheet():this.openAlert()},n.prototype.getLabel=function(){var e=this.el.closest("ion-item");return e?e.querySelector("ion-label"):null},n.prototype.openPopover=function(n){return e(this,void 0,void 0,function(){var e,i,o,l,r=this;return t(this,function(t){switch(t.label){case 0:return e=this.interfaceOptions,i=Object.assign({},e,{component:"ion-select-popover",cssClass:["select-popover",e.cssClass],event:n,componentProps:{header:e.header,subHeader:e.subHeader,message:e.message,value:this.value,options:this.childOpts.map(function(e){return{text:e.textContent,value:e.value,checked:e.selected,disabled:e.disabled,handler:function(){r.value=e.value,r.close()}}})}}),l=this,[4,this.popoverCtrl.create(i)];case 1:return[4,(o=l.overlay=t.sent()).present()];case 2:return t.sent(),this.isExpanded=!0,[2,o]}})})},n.prototype.openActionSheet=function(){return e(this,void 0,void 0,function(){var e,n,i,o,l,r=this;return t(this,function(t){switch(t.label){case 0:return(e=this.childOpts.map(function(e){return{role:e.selected?"selected":"",text:e.textContent,handler:function(){r.value=e.value}}})).push({text:this.cancelText,role:"cancel",handler:function(){r.ionCancel.emit()}}),n=this.interfaceOptions,i=Object.assign({},n,{buttons:e,cssClass:["select-action-sheet",n.cssClass]}),l=this,[4,this.actionSheetCtrl.create(i)];case 1:return[4,(o=l.overlay=t.sent()).present()];case 2:return t.sent(),this.isExpanded=!0,[2,o]}})})},n.prototype.openAlert=function(){return e(this,void 0,void 0,function(){var e,n,i,o,l,r,s,a=this;return t(this,function(t){switch(t.label){case 0:return e=this.getLabel(),n=e?e.textContent:null,i=this.interfaceOptions,o=this.multiple?"checkbox":"radio",l=Object.assign({},i,{header:i.header?i.header:n,inputs:this.childOpts.map(function(e){return{type:o,label:e.textContent,value:e.value,checked:e.selected,disabled:e.disabled}}),buttons:[{text:this.cancelText,role:"cancel",handler:function(){a.ionCancel.emit()}},{text:this.okText,handler:function(e){a.value=e}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]}),s=this,[4,this.alertCtrl.create(l)];case 1:return[4,(r=s.overlay=t.sent()).present()];case 2:return t.sent(),this.isExpanded=!0,[2,r]}})})},n.prototype.close=function(){if(!this.overlay)return Promise.resolve(!1);var e=this.overlay;return this.overlay=void 0,this.isExpanded=!1,e.dismiss()},n.prototype.onKeyUp=function(){this.keyFocus=!0},n.prototype.onFocus=function(){this.ionFocus.emit()},n.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},n.prototype.hasValue=function(){return Array.isArray(this.value)?this.value.length>0:null!=this.value&&void 0!==this.value&&""!==this.value},n.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,select:!0,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})},n.prototype.hostData=function(){return{class:{"in-item":o.hostContext("ion-item",this.el),"select-disabled":this.disabled,"select-key":this.keyFocus}}},n.prototype.render=function(){i.renderHiddenInput(this.el,this.name,function(e){if(null!=e)return Array.isArray(e)?e.join(","):e.toString()}(this.value),this.disabled);var e=!1,t=this.selectedText||this.text;return void 0===t&&void 0!==this.placeholder&&(t=this.placeholder,e=!0),[l("div",{role:"textbox","aria-multiline":"false",class:{"select-text":!0,"select-placeholder":e}},t),l("div",{class:"select-icon",role:"presentation"},l("div",{class:"select-icon-inner"})),l("button",{type:"button",role:"combobox","aria-haspopup":"dialog","aria-labelledby":this.labelId,"aria-expanded":this.isExpanded?"true":null,"aria-disabled":this.disabled?"true":null,onClick:this.open.bind(this),onKeyUp:this.onKeyUp.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),class:"select-cover"},l("slot",null),"md"===this.mode&&l("ion-ripple-effect",null))]},Object.defineProperty(n,"is",{get:function(){return"ion-select"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{actionSheetCtrl:{connect:"ion-action-sheet-controller"},alertCtrl:{connect:"ion-alert-controller"},cancelText:{type:String,attr:"cancel-text"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},interface:{type:String,attr:"interface"},interfaceOptions:{type:"Any",attr:"interface-options"},isExpanded:{state:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},multiple:{type:Boolean,attr:"multiple"},name:{type:String,attr:"name"},okText:{type:String,attr:"ok-text"},open:{method:!0},placeholder:{type:String,attr:"placeholder"},popoverCtrl:{connect:"ion-popover-controller"},selectedText:{type:String,attr:"selected-text"},text:{state:!0},value:{type:"Any",attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"listeners",{get:function(){return[{name:"ionSelectOptionDidLoad",method:"optLoad"},{name:"ionSelectOptionDidUnload",method:"optUnload"},{name:"ionSelect",method:"onSelect"}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".sc-ion-select-ios-h{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden;--color:var(--ion-text-color, #000);--icon-color:var(--ion-text-color-step-650, #a6a6a6);--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px;--placeholder-color:var(--ion-text-color-step-650, #a6a6a6)}.in-item.sc-ion-select-ios-h{max-width:45%}.select-disabled.sc-ion-select-ios-h{opacity:.4;pointer-events:none}.select-key.sc-ion-select-ios-h   button.sc-ion-select-ios{border:2px solid #5e9ed6}.select-placeholder.sc-ion-select-ios{color:var(--placeholder-color)}.select-cover.sc-ion-select-ios{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.select-icon.sc-ion-select-ios{position:relative}.select-text.sc-ion-select-ios{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner.sc-ion-select-ios{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:var(--icon-color);pointer-events:none}.sc-ion-select-ios-s > ion-select-option{display:none}button.sc-ion-select-ios:focus{outline:0}.select-icon.sc-ion-select-ios{width:12px;height:18px}"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),n}(),s=0,a=function(){function e(){this.inputId="ion-selopt-"+c++,this.disabled=!1,this.selected=!1}return e.prototype.componentWillLoad=function(){null==this.value&&(this.value=this.el.textContent||"")},e.prototype.componentDidLoad=function(){this.ionSelectOptionDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionSelectOptionDidUnload.emit()},e.prototype.hostData=function(){return{role:"option",id:this.inputId}},Object.defineProperty(e,"is",{get:function(){return"ion-select-option"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},selected:{type:Boolean,attr:"selected"},value:{type:"Any",attr:"value",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionSelectOptionDidLoad",method:"ionSelectOptionDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionSelectOptionDidUnload",method:"ionSelectOptionDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),e}(),c=0,u=function(){function e(){this.options=[]}return e.prototype.onSelect=function(e){var t=this.options.find(function(t){return t.value===e.target.value});t&&t.handler&&t.handler()},e.prototype.hostData=function(){return{class:o.createThemedClasses(this.mode,"select-popover")}},e.prototype.render=function(){return l("ion-list",null,void 0!==this.header&&l("ion-list-header",null,this.header),(void 0!==this.subHeader||void 0!==this.message)&&l("ion-item",null,l("ion-label",{"text-wrap":!0},void 0!==this.subHeader&&l("h3",null,this.subHeader),void 0!==this.message&&l("p",null,this.message))),l("ion-radio-group",null,this.options.map(function(e){return l("ion-item",null,l("ion-label",null,e.text),l("ion-radio",{checked:e.checked,value:e.value,disabled:e.disabled}))})))},Object.defineProperty(e,"is",{get:function(){return"ion-select-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{header:{type:String,attr:"header"},message:{type:String,attr:"message"},options:{type:"Any",attr:"options"},subHeader:{type:String,attr:"sub-header"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionSelect",method:"onSelect"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host ::slotted(ion-list){margin:-1px 0}"},enumerable:!0,configurable:!0}),e}();n.IonSelect=r,n.IonSelectOption=a,n.IonSelectPopover=u,Object.defineProperty(n,"__esModule",{value:!0})});