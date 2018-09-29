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
        get: function () { return ".sc-ion-searchbar-md-h{--placeholder-color:currentColor;--placeholder-font-style:inherit;--placeholder-font-weight:inherit;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h   .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h   .searchbar-cancel-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h   .searchbar-clear-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h   .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-family:inherit;font-style:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:0;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{color:var(--cancel-button-color)}.searchbar-clear-button.sc-ion-searchbar-md{margin:0;display:none;min-height:0;outline:0;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-md-h   .searchbar-clear-button.sc-ion-searchbar-md{display:block}.sc-ion-searchbar-md-h{--clear-button-color:currentColor;--cancel-button-color:var(--ion-text-color-step-100, #1a1a1a);--color:var(--ion-text-color-step-150, #262626);--icon-color:var(--ion-text-color-step-400, #666666);--background:var(--ion-background-color, #fff);padding:8px;background:inherit}.searchbar-search-icon.sc-ion-searchbar-md{left:16px;top:11px;width:21px;height:21px}.searchbar-cancel-button.sc-ion-searchbar-md{left:10px;top:0;margin:0;display:none;height:100%;border:0;background-color:transparent;font-size:1.8em}.searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-search-icon.sc-ion-searchbar-md{position:absolute}.searchbar-cancel-button.activated.sc-ion-searchbar-md, .searchbar-search-icon.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{padding:6px 55px;border-radius:2px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.searchbar-clear-button.sc-ion-searchbar-md{right:13px;top:0;padding:0;position:absolute;height:100%;border:0;background-color:transparent}.searchbar-clear-button.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.searchbar-show-cancel.sc-ion-searchbar-md-h   .searchbar-search-icon.sc-ion-searchbar-md{display:none}.searchbar-has-focus.searchbar-show-cancel.sc-ion-searchbar-md-h   .searchbar-cancel-button.sc-ion-searchbar-md{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar   .sc-ion-searchbar-md-h{padding:3px}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Searchbar, "styleMode", {
        get: function () { return "md"; },
        enumerable: true,
        configurable: true
    });
    return Searchbar;
}());
export { Searchbar as IonSearchbar };
