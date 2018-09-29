/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { g as debounceEvent } from './chunk-e7816c0b.js';
import { d as createColorClasses } from './chunk-50fe9317.js';
var Searchbar = /** @class */ (function () {
    function Searchbar() {
        this.isCancelVisible = false;
        this.shouldAlignLeft = true;
        this.focused = false;
        this.animated = false;
        this.autocomplete = 'off';
        this.autocorrect = 'off';
        this.cancelButtonIcon = 'md-arrow-back';
        this.cancelButtonText = 'Cancel';
        this.debounce = 250;
        this.placeholder = 'Search';
        this.showCancelButton = false;
        this.spellcheck = false;
        this.type = 'search';
        this.value = '';
    }
    Searchbar.prototype.debounceChanged = function () {
        this.ionChange = debounceEvent(this.ionChange, this.debounce);
    };
    Searchbar.prototype.valueChanged = function () {
        var inputEl = this.nativeInput;
        var value = this.value;
        if (inputEl.value !== value) {
            inputEl.value = value;
        }
        this.ionChange.emit({ value: value });
    };
    Searchbar.prototype.componentDidLoad = function () {
        this.positionElements();
        this.debounceChanged();
    };
    Searchbar.prototype.focus = function () {
        this.nativeInput.focus();
    };
    Searchbar.prototype.clearInput = function (ev) {
        var _this = this;
        this.ionClear.emit();
        if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        setTimeout(function () {
            var value = _this.value;
            if (value !== '') {
                _this.value = '';
                _this.ionInput.emit();
            }
        }, 16 * 4);
    };
    Searchbar.prototype.cancelSearchbar = function (ev) {
        if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        this.ionCancel.emit();
        this.clearInput();
        this.nativeInput.blur();
    };
    Searchbar.prototype.onInput = function (ev) {
        var input = ev.target;
        if (input) {
            this.value = input.value;
        }
        this.ionInput.emit(ev);
    };
    Searchbar.prototype.onBlur = function () {
        this.focused = false;
        this.ionBlur.emit();
        this.positionElements();
    };
    Searchbar.prototype.onFocus = function () {
        this.focused = true;
        this.ionFocus.emit();
        this.positionElements();
    };
    Searchbar.prototype.positionElements = function () {
        var prevAlignLeft = this.shouldAlignLeft;
        var shouldAlignLeft = (!this.animated || (this.value && this.value.toString().trim() !== '') || !!this.focused);
        this.shouldAlignLeft = shouldAlignLeft;
        if (this.mode !== 'ios') {
            return;
        }
        if (prevAlignLeft !== shouldAlignLeft) {
            this.positionPlaceholder();
        }
        if (this.animated) {
            this.positionCancelButton();
        }
    };
    Searchbar.prototype.positionPlaceholder = function () {
        var isRTL = this.doc.dir === 'rtl';
        var inputEl = this.nativeInput;
        var iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');
        if (this.shouldAlignLeft) {
            inputEl.removeAttribute('style');
            iconEl.removeAttribute('style');
        }
        else {
            var doc = this.doc;
            var tempSpan = doc.createElement('span');
            tempSpan.innerHTML = this.placeholder;
            doc.body.appendChild(tempSpan);
            var textWidth = tempSpan.offsetWidth;
            tempSpan.remove();
            var inputLeft = 'calc(50% - ' + (textWidth / 2) + 'px)';
            var iconLeft = 'calc(50% - ' + ((textWidth / 2) + 30) + 'px)';
            if (isRTL) {
                inputEl.style.paddingRight = inputLeft;
                iconEl.style.marginRight = iconLeft;
            }
            else {
                inputEl.style.paddingLeft = inputLeft;
                iconEl.style.marginLeft = iconLeft;
            }
        }
    };
    Searchbar.prototype.positionCancelButton = function () {
        var isRTL = this.doc.dir === 'rtl';
        var cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button');
        var shouldShowCancel = this.focused;
        if (cancelButton && shouldShowCancel !== this.isCancelVisible) {
            var cancelStyle = cancelButton.style;
            this.isCancelVisible = shouldShowCancel;
            if (shouldShowCancel) {
                if (isRTL) {
                    cancelStyle.marginLeft = '0';
                }
                else {
                    cancelStyle.marginRight = '0';
                }
            }
            else {
                var offset = cancelButton.offsetWidth;
                if (offset > 0) {
                    if (isRTL) {
                        cancelStyle.marginLeft = -offset + 'px';
                    }
                    else {
                        cancelStyle.marginRight = -offset + 'px';
                    }
                }
            }
        }
    };
    Searchbar.prototype.hostData = function () {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'searchbar-animated': this.animated, 'searchbar-has-value': (this.value !== ''), 'searchbar-show-cancel': this.showCancelButton, 'searchbar-left-aligned': this.shouldAlignLeft, 'searchbar-has-focus': this.focused })
        };
    };
    Searchbar.prototype.render = function () {
        var _this = this;
        var clearIcon = this.clearIcon || (this.mode === 'ios' ? 'ios-close-circle' : 'md-close');
        var searchIcon = this.searchIcon || 'search';
        var cancelButton = this.showCancelButton && (h("button", { type: "button", tabIndex: this.mode === 'ios' && !this.focused ? -1 : undefined, onMouseDown: this.cancelSearchbar.bind(this), onTouchStart: this.cancelSearchbar.bind(this), class: "searchbar-cancel-button" }, this.mode === 'md'
            ? h("ion-icon", { mode: this.mode, icon: this.cancelButtonIcon, lazy: false })
            : this.cancelButtonText));
        return [
            h("div", { class: "searchbar-input-container" }, h("input", { ref: function (el) { return _this.nativeInput = el; }, class: "searchbar-input", onInput: this.onInput.bind(this), onBlur: this.onBlur.bind(this), onFocus: this.onFocus.bind(this), placeholder: this.placeholder, type: this.type, value: this.value, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, spellCheck: this.spellcheck }), this.mode === 'md' && cancelButton, h("ion-icon", { mode: this.mode, icon: searchIcon, lazy: false, class: "searchbar-search-icon" }), h("button", { type: "button", "no-blur": true, class: "searchbar-clear-button", onMouseDown: this.clearInput.bind(this), onTouchStart: this.clearInput.bind(this) }, h("ion-icon", { mode: this.mode, icon: clearIcon, lazy: false, class: "searchbar-clear-icon" }))),
            this.mode === 'ios' && cancelButton
        ];
    };
    Object.defineProperty(Searchbar, "is", {
        get: function () { return "ion-searchbar"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Searchbar, "encapsulation", {
        get: function () { return "scoped"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Searchbar, "properties", {
        get: function () {
            return {
                "animated": {
                    "type": Boolean,
                    "attr": "animated"
                },
                "autocomplete": {
                    "type": String,
                    "attr": "autocomplete"
                },
                "autocorrect": {
                    "type": String,
                    "attr": "autocorrect"
                },
                "cancelButtonIcon": {
                    "type": String,
                    "attr": "cancel-button-icon"
                },
                "cancelButtonText": {
                    "type": String,
                    "attr": "cancel-button-text"
                },
                "clearIcon": {
                    "type": String,
                    "attr": "clear-icon"
                },
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "debounce": {
                    "type": Number,
                    "attr": "debounce",
                    "watchCallbacks": ["debounceChanged"]
                },
                "doc": {
                    "context": "document"
                },
                "el": {
                    "elementRef": true
                },
                "focus": {
                    "method": true
                },
                "focused": {
                    "state": true
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "placeholder": {
                    "type": String,
                    "attr": "placeholder"
                },
                "searchIcon": {
                    "type": String,
                    "attr": "search-icon"
                },
                "showCancelButton": {
                    "type": Boolean,
                    "attr": "show-cancel-button"
                },
                "spellcheck": {
                    "type": Boolean,
                    "attr": "spellcheck"
                },
                "type": {
                    "type": String,
                    "attr": "type"
                },
                "value": {
                    "type": String,
                    "attr": "value",
                    "mutable": true,
                    "watchCallbacks": ["valueChanged"]
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Searchbar, "events", {
        get: function () {
            return [{
                    "name": "ionInput",
                    "method": "ionInput",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionChange",
                    "method": "ionChange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionCancel",
                    "method": "ionCancel",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionClear",
                    "method": "ionClear",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionBlur",
                    "method": "ionBlur",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionFocus",
                    "method": "ionFocus",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Searchbar, "style", {
        get: function () { return ".sc-ion-searchbar-ios-h{--placeholder-color:currentColor;--placeholder-font-style:inherit;--placeholder-font-weight:inherit;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-family:inherit;font-style:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:0;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--cancel-button-color)}.searchbar-clear-button.sc-ion-searchbar-ios{margin:0;padding:0;display:none;min-height:0;outline:0;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.sc-ion-searchbar-ios-h{--clear-button-color:var(--ion-text-color-step-400, #666666);--cancel-button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-text-color, #000);--icon-color:var(--ion-text-color-step-400, #666666);--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);padding:12px;height:60px;contain:strict}.searchbar-input-container.sc-ion-searchbar-ios{height:36px;contain:strict}.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:calc(50% - 60px);left:8px;top:0;position:absolute;width:16px;height:100%;contain:strict}.searchbar-input.sc-ion-searchbar-ios{padding:0 28px;border-radius:10px;height:100%;font-size:14px;font-weight:400;contain:strict}.searchbar-clear-button.sc-ion-searchbar-ios{right:0;top:0;background-position:center;position:absolute;width:30px;height:100%;border:0;background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-ios{width:18px;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{padding:0 0 0 8px;display:none;-ms-flex-negative:0;flex-shrink:0;border:0;outline:0;background-color:transparent;font-size:16px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-left-aligned.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:0}.searchbar-left-aligned.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios{padding-left:30px}.searchbar-show-cancel.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-show-cancel.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios, .searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-transition:all .3s ease;transition:all .3s ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:-100%;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:all .3s ease;transition:all .3s ease;opacity:0;pointer-events:none}.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}ion-toolbar.ion-color.sc-ion-searchbar-ios-h, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h{color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb),.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:.5}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Searchbar, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Searchbar;
}());
export { Searchbar as IonSearchbar };
