/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{k as e,l as n}from"./chunk-a4253575.js";class o{hostData(){return{class:e(this.color)}}render(){return t("a",{href:this.href,onClick:t=>n(this.win,this.href,t,this.routerDirection)},t("slot",null))}static get is(){return"ion-anchor"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},href:{type:String,attr:"href"},routerDirection:{type:String,attr:"router-direction"},win:{context:"window"}}}static get style(){return":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}class r{async onClick(t){const e=this.el.closest("ion-nav");return t.preventDefault(),e&&await e.canGoBack()?e.pop({skipIfBusy:!0}):n(this.win,this.defaultHref,t,"back")}hostData(){const t=void 0!==this.defaultHref;return{class:Object.assign({},e(this.color),{button:!0,"show-back-button":t}),"ion-activable":!0}}render(){const e=this.icon||this.config.get("backButtonIcon","arrow-back"),n=void 0!==this.text?this.text:this.config.get("backButtonText","Back");return t("button",{type:"button",class:"back-button-native",onClick:t=>this.onClick(t)},t("span",{class:"back-button-inner"},e&&t("ion-icon",{icon:e,lazy:!1}),"ios"===this.mode&&n&&t("span",{class:"button-text"},n),"md"===this.mode&&t("ion-ripple-effect",null)))}static get is(){return"ion-back-button"}static get encapsulation(){return"scoped"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:String,attr:"mode"},text:{type:String,attr:"text"},win:{context:"window"}}}static get style(){return".sc-ion-back-button-md-h{display:none;color:var(--ion-color-base);pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none;--ion-color-base:currentColor}.show-back-button.sc-ion-back-button-md-h, .can-go-back.sc-ion-back-button-md-h > ion-header.sc-ion-back-button-md, .can-go-back > ion-header   .sc-ion-back-button-md-h{display:block}.back-button-native.sc-ion-back-button-md{font-family:inherit;font-style:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;outline:0;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.back-button-inner.sc-ion-back-button-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.back-button-text.sc-ion-back-button-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.back-button-native.sc-ion-back-button-md{margin:1px 6px 0 0;padding:0 5px;min-width:44px;height:32px;border:0;background-color:transparent;font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}.back-button-native.activated.sc-ion-back-button-md{opacity:.4}ion-icon.sc-ion-back-button-md{padding-right:.3em;margin:0 6px;font-size:24px;font-weight:400;line-height:.67;text-align:start;pointer-events:none}"}static get styleMode(){return"md"}}export{o as IonAnchor,r as IonBackButton};