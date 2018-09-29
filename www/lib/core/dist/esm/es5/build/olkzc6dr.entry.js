import * as tslib_1 from '../polyfills/tslib.js';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
import { h } from '../ionic.core.js';
import { j as clamp, e as deferEvent } from './chunk-e7816c0b.js';
import { g as createThemedClasses, c as getClassMap } from './chunk-50fe9317.js';
import { b as dismiss, c as eventMethod, e as present, f as createOverlay, g as dismissOverlay, h as getOverlay, i as hapticSelectionChanged } from './chunk-12e0f551.js';
import './chunk-5f438245.js';
function renderDatetime(template, value, locale) {
    if (value === undefined) {
        return undefined;
    }
    var tokens = [];
    var hasText = false;
    FORMAT_KEYS.forEach(function (format, index) {
        if (template.indexOf(format.f) > -1) {
            var token = '{' + index + '}';
            var text = renderTextFormat(format.f, value[format.k], value, locale);
            if (!hasText && text !== undefined && value[format.k] != null) {
                hasText = true;
            }
            tokens.push(token, text || '');
            template = template.replace(format.f, token);
        }
    });
    if (!hasText) {
        return undefined;
    }
    for (var i = 0; i < tokens.length; i += 2) {
        template = template.replace(tokens[i], tokens[i + 1]);
    }
    return template;
}
function renderTextFormat(format, value, date, locale) {
    if ((format === FORMAT_DDDD || format === FORMAT_DDD)) {
        try {
            value = (new Date(date.year, date.month - 1, date.day)).getDay();
            if (format === FORMAT_DDDD) {
                return (locale.dayNames ? locale.dayNames : DAY_NAMES)[value];
            }
            return (locale.dayShortNames ? locale.dayShortNames : DAY_SHORT_NAMES)[value];
        }
        catch (e) {
        }
        return undefined;
    }
    if (format === FORMAT_A) {
        return date !== undefined && date.hour !== undefined
            ? (date.hour < 12 ? 'AM' : 'PM')
            : value ? value.toUpperCase() : '';
    }
    if (format === FORMAT_a) {
        return date !== undefined && date.hour !== undefined
            ? (date.hour < 12 ? 'am' : 'pm')
            : value || '';
    }
    if (value == null) {
        return '';
    }
    if (format === FORMAT_YY || format === FORMAT_MM ||
        format === FORMAT_DD || format === FORMAT_HH ||
        format === FORMAT_mm || format === FORMAT_ss) {
        return twoDigit(value);
    }
    if (format === FORMAT_YYYY) {
        return fourDigit(value);
    }
    if (format === FORMAT_MMMM) {
        return (locale.monthNames ? locale.monthNames : MONTH_NAMES)[value - 1];
    }
    if (format === FORMAT_MMM) {
        return (locale.monthShortNames ? locale.monthShortNames : MONTH_SHORT_NAMES)[value - 1];
    }
    if (format === FORMAT_hh || format === FORMAT_h) {
        if (value === 0) {
            return '12';
        }
        if (value > 12) {
            value -= 12;
        }
        if (format === FORMAT_hh && value < 10) {
            return ('0' + value);
        }
    }
    return value.toString();
}
function dateValueRange(format, min, max) {
    var opts = [];
    if (format === FORMAT_YYYY || format === FORMAT_YY) {
        if (max.year === undefined || min.year === undefined) {
            throw new Error('min and max year is undefined');
        }
        for (var i = max.year; i >= min.year; i--) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_MMMM || format === FORMAT_MMM ||
        format === FORMAT_MM || format === FORMAT_M ||
        format === FORMAT_hh || format === FORMAT_h) {
        for (var i = 1; i < 13; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_DDDD || format === FORMAT_DDD ||
        format === FORMAT_DD || format === FORMAT_D) {
        for (var i = 1; i < 32; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_HH || format === FORMAT_H) {
        for (var i = 0; i < 24; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_mm || format === FORMAT_m) {
        for (var i = 0; i < 60; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_ss || format === FORMAT_s) {
        for (var i = 0; i < 60; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_A || format === FORMAT_a) {
        opts.push('am', 'pm');
    }
    return opts;
}
function dateSortValue(year, month, day, hour, minute) {
    if (hour === void 0) { hour = 0; }
    if (minute === void 0) { minute = 0; }
    return parseInt("1" + fourDigit(year) + twoDigit(month) + twoDigit(day) + twoDigit(hour) + twoDigit(minute), 10);
}
function dateDataSortValue(data) {
    return dateSortValue(data.year, data.month, data.day, data.hour, data.minute);
}
function daysInMonth(month, year) {
    return (month === 4 || month === 6 || month === 9 || month === 11) ? 30 : (month === 2) ? isLeapYear(year) ? 29 : 28 : 31;
}
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
var ISO_8601_REGEXP = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
var TIME_REGEXP = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
function parseDate(val) {
    var parse = null;
    if (val != null) {
        parse = TIME_REGEXP.exec(val);
        if (parse) {
            parse.unshift(undefined, undefined);
            parse[2] = parse[3] = undefined;
        }
        else {
            parse = ISO_8601_REGEXP.exec(val);
        }
    }
    if (parse === null) {
        return undefined;
    }
    for (var i = 1; i < 8; i++) {
        parse[i] = parse[i] !== undefined ? parseInt(parse[i], 10) : undefined;
    }
    var tzOffset = 0;
    if (parse[9] && parse[10]) {
        tzOffset = parseInt(parse[10], 10) * 60;
        if (parse[11]) {
            tzOffset += parseInt(parse[11], 10);
        }
        if (parse[9] === '-') {
            tzOffset *= -1;
        }
    }
    return {
        year: parse[1],
        month: parse[2],
        day: parse[3],
        hour: parse[4],
        minute: parse[5],
        second: parse[6],
        millisecond: parse[7],
        tzOffset: tzOffset,
    };
}
function updateDate(existingData, newData) {
    if (newData && newData !== '') {
        if (typeof newData === 'string') {
            newData = parseDate(newData);
            if (newData) {
                Object.assign(existingData, newData);
                return true;
            }
        }
        else if ((newData.year || newData.hour || newData.month || newData.day || newData.minute || newData.second)) {
            if (newData.ampm && newData.hour) {
                newData.hour.value = (newData.ampm.value === 'pm')
                    ? (newData.hour.value === 12 ? 12 : newData.hour.value + 12)
                    : (newData.hour.value === 12 ? 0 : newData.hour.value);
            }
            for (var _i = 0, _a = Object.keys(newData); _i < _a.length; _i++) {
                var key = _a[_i];
                existingData[key] = newData[key].value;
            }
            return true;
        }
        console.warn("Error parsing date: \"" + newData + "\". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime");
    }
    else {
        for (var k in existingData) {
            if (existingData.hasOwnProperty(k)) {
                delete existingData[k];
            }
        }
    }
    return false;
}
function parseTemplate(template) {
    var formats = [];
    template = template.replace(/[^\w\s]/gi, ' ');
    FORMAT_KEYS.forEach(function (format) {
        if (format.f.length > 1 && template.indexOf(format.f) > -1 && template.indexOf(format.f + format.f.charAt(0)) < 0) {
            template = template.replace(format.f, ' ' + format.f + ' ');
        }
    });
    var words = template.split(' ').filter(function (w) { return w.length > 0; });
    words.forEach(function (word, i) {
        FORMAT_KEYS.forEach(function (format) {
            if (word === format.f) {
                if (word === FORMAT_A || word === FORMAT_a) {
                    if ((formats.indexOf(FORMAT_h) < 0 && formats.indexOf(FORMAT_hh) < 0) ||
                        VALID_AMPM_PREFIX.indexOf(words[i - 1]) === -1) {
                        return;
                    }
                }
                formats.push(word);
            }
        });
    });
    return formats;
}
function getValueFromFormat(date, format) {
    if (format === FORMAT_A || format === FORMAT_a) {
        return (date.hour < 12 ? 'am' : 'pm');
    }
    if (format === FORMAT_hh || format === FORMAT_h) {
        return (date.hour > 12 ? date.hour - 12 : date.hour);
    }
    return date[convertFormatToKey(format)];
}
function convertFormatToKey(format) {
    for (var k in FORMAT_KEYS) {
        if (FORMAT_KEYS[k].f === format) {
            return FORMAT_KEYS[k].k;
        }
    }
    return undefined;
}
function convertToArrayOfStrings(input, type) {
    if (input == null) {
        return undefined;
    }
    if (typeof input === 'string') {
        input = input.replace(/\[|\]/g, '').split(',');
    }
    var values;
    if (Array.isArray(input)) {
        values = input.map(function (val) { return val.toString().trim(); });
    }
    if (values === undefined || values.length === 0) {
        console.warn("Invalid \"" + type + "Names\". Must be an array of strings, or a comma separated string.");
    }
    return values;
}
function convertToArrayOfNumbers(input, type) {
    if (typeof input === 'string') {
        input = input.replace(/\[|\]|\s/g, '').split(',');
    }
    var values;
    if (Array.isArray(input)) {
        values = input
            .map(function (num) { return parseInt(num, 10); })
            .filter(isFinite);
    }
    else {
        values = [input];
    }
    if (values.length === 0) {
        console.warn("Invalid \"" + type + "Values\". Must be an array of numbers, or a comma separated string of numbers.");
    }
    return values;
}
function twoDigit(val) {
    return ('0' + (val !== undefined ? Math.abs(val) : '0')).slice(-2);
}
function fourDigit(val) {
    return ('000' + (val !== undefined ? Math.abs(val) : '0')).slice(-4);
}
var FORMAT_YYYY = 'YYYY';
var FORMAT_YY = 'YY';
var FORMAT_MMMM = 'MMMM';
var FORMAT_MMM = 'MMM';
var FORMAT_MM = 'MM';
var FORMAT_M = 'M';
var FORMAT_DDDD = 'DDDD';
var FORMAT_DDD = 'DDD';
var FORMAT_DD = 'DD';
var FORMAT_D = 'D';
var FORMAT_HH = 'HH';
var FORMAT_H = 'H';
var FORMAT_hh = 'hh';
var FORMAT_h = 'h';
var FORMAT_mm = 'mm';
var FORMAT_m = 'm';
var FORMAT_ss = 'ss';
var FORMAT_s = 's';
var FORMAT_A = 'A';
var FORMAT_a = 'a';
var FORMAT_KEYS = [
    { f: FORMAT_YYYY, k: 'year' },
    { f: FORMAT_MMMM, k: 'month' },
    { f: FORMAT_DDDD, k: 'day' },
    { f: FORMAT_MMM, k: 'month' },
    { f: FORMAT_DDD, k: 'day' },
    { f: FORMAT_YY, k: 'year' },
    { f: FORMAT_MM, k: 'month' },
    { f: FORMAT_DD, k: 'day' },
    { f: FORMAT_HH, k: 'hour' },
    { f: FORMAT_hh, k: 'hour' },
    { f: FORMAT_mm, k: 'minute' },
    { f: FORMAT_ss, k: 'second' },
    { f: FORMAT_M, k: 'month' },
    { f: FORMAT_D, k: 'day' },
    { f: FORMAT_H, k: 'hour' },
    { f: FORMAT_h, k: 'hour' },
    { f: FORMAT_m, k: 'minute' },
    { f: FORMAT_s, k: 'second' },
    { f: FORMAT_A, k: 'ampm' },
    { f: FORMAT_a, k: 'ampm' },
];
var DAY_NAMES = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
var DAY_SHORT_NAMES = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
];
var MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
var MONTH_SHORT_NAMES = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
var VALID_AMPM_PREFIX = [
    FORMAT_hh, FORMAT_h, FORMAT_mm, FORMAT_m, FORMAT_ss, FORMAT_s
];
var Datetime = /** @class */ (function () {
    function Datetime() {
        this.inputId = "ion-dt-" + datetimeIds++;
        this.labelId = this.inputId + "-lbl";
        this.locale = {};
        this.datetimeMin = {};
        this.datetimeMax = {};
        this.datetimeValue = {};
        this.disabled = false;
        this.displayFormat = 'MMM D, YYYY';
        this.cancelText = 'Cancel';
        this.doneText = 'Done';
    }
    Datetime.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    Datetime.prototype.valueChanged = function () {
        this.updateValue();
        this.emitStyle();
        this.ionChange.emit({
            value: this.value
        });
    };
    Datetime.prototype.componentWillLoad = function () {
        this.ionStyle = deferEvent(this.ionStyle);
        this.locale = {
            monthNames: convertToArrayOfStrings(this.monthNames, 'monthNames'),
            monthShortNames: convertToArrayOfStrings(this.monthShortNames, 'monthShortNames'),
            dayNames: convertToArrayOfStrings(this.dayNames, 'dayNames'),
            dayShortNames: convertToArrayOfStrings(this.dayShortNames, 'dayShortNames')
        };
        this.updateValue();
    };
    Datetime.prototype.componentDidLoad = function () {
        this.emitStyle();
    };
    Datetime.prototype.open = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var pickerOptions, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.disabled) {
                            return [2 /*return*/];
                        }
                        pickerOptions = this.generatePickerOptions();
                        _a = this;
                        return [4 /*yield*/, this.pickerCtrl.create(pickerOptions)];
                    case 1:
                        _a.picker = _b.sent();
                        return [4 /*yield*/, this.validate()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.picker.present()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Datetime.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'interactive': true,
            'datetime': true,
            'has-value': this.hasValue(),
            'interactive-disabled': this.disabled,
        });
    };
    Datetime.prototype.updateValue = function () {
        updateDate(this.datetimeValue, this.value);
        this.updateText();
    };
    Datetime.prototype.generatePickerOptions = function () {
        var _this = this;
        var pickerOptions = Object.assign({}, this.pickerOptions, { columns: this.generateColumns() });
        var buttons = pickerOptions.buttons;
        if (!buttons || buttons.length === 0) {
            pickerOptions.buttons = [
                {
                    text: this.cancelText,
                    role: 'cancel',
                    handler: function () { return _this.ionCancel.emit(); }
                },
                {
                    text: this.doneText,
                    handler: function (data) {
                        _this.value = data;
                    }
                }
            ];
        }
        return pickerOptions;
    };
    Datetime.prototype.generateColumns = function () {
        var _this = this;
        var template = this.pickerFormat || this.displayFormat || DEFAULT_FORMAT;
        if (template.length === 0) {
            return [];
        }
        this.calcMinMax();
        template = template.replace('DDDD', '{~}').replace('DDD', '{~}');
        if (template.indexOf('D') === -1) {
            template = template.replace('{~}', 'D');
        }
        template = template.replace(/{~}/g, '');
        var columns = parseTemplate(template).map(function (format) {
            var key = convertFormatToKey(format);
            var values;
            var self = _this;
            values = self[key + 'Values']
                ? convertToArrayOfNumbers(self[key + 'Values'], key)
                : dateValueRange(format, _this.datetimeMin, _this.datetimeMax);
            var colOptions = values.map(function (val) {
                return {
                    value: val,
                    text: renderTextFormat(format, val, undefined, _this.locale),
                };
            });
            var optValue = getValueFromFormat(_this.datetimeValue, format);
            var selectedIndex = colOptions.findIndex(function (opt) { return opt.value === optValue; });
            return {
                name: key,
                selectedIndex: selectedIndex >= 0 ? selectedIndex : 0,
                options: colOptions
            };
        });
        var min = this.datetimeMin;
        var max = this.datetimeMax;
        ['month', 'day', 'hour', 'minute']
            .filter(function (name) { return !columns.find(function (column) { return column.name === name; }); })
            .forEach(function (name) {
            min[name] = 0;
            max[name] = 0;
        });
        return divyColumns(columns);
    };
    Datetime.prototype.validate = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var today, minCompareVal, maxCompareVal, yearCol, selectedYear, selectedIndex, yearOpt, selectedMonth, numDaysInMonth, selectedDay, selectedHour;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        today = new Date();
                        minCompareVal = dateDataSortValue(this.datetimeMin);
                        maxCompareVal = dateDataSortValue(this.datetimeMax);
                        return [4 /*yield*/, this.picker.getColumn('year')];
                    case 1:
                        yearCol = _a.sent();
                        selectedYear = today.getFullYear();
                        if (yearCol) {
                            if (!yearCol.options.find(function (col) { return col.value === today.getFullYear(); })) {
                                selectedYear = yearCol.options[0].value;
                            }
                            selectedIndex = yearCol.selectedIndex;
                            if (selectedIndex !== undefined) {
                                yearOpt = yearCol.options[selectedIndex];
                                if (yearOpt) {
                                    selectedYear = yearOpt.value;
                                }
                            }
                        }
                        return [4 /*yield*/, this.validateColumn('month', 1, minCompareVal, maxCompareVal, [selectedYear, 0, 0, 0, 0], [selectedYear, 12, 31, 23, 59])];
                    case 2:
                        selectedMonth = _a.sent();
                        numDaysInMonth = daysInMonth(selectedMonth, selectedYear);
                        return [4 /*yield*/, this.validateColumn('day', 2, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, 0, 0, 0], [selectedYear, selectedMonth, numDaysInMonth, 23, 59])];
                    case 3:
                        selectedDay = _a.sent();
                        return [4 /*yield*/, this.validateColumn('hour', 3, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, 0, 0], [selectedYear, selectedMonth, selectedDay, 23, 59])];
                    case 4:
                        selectedHour = _a.sent();
                        return [4 /*yield*/, this.validateColumn('minute', 4, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, selectedHour, 0], [selectedYear, selectedMonth, selectedDay, selectedHour, 59])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Datetime.prototype.calcMinMax = function (now) {
        var todaysYear = (now || new Date()).getFullYear();
        if (this.yearValues !== undefined) {
            var years = convertToArrayOfNumbers(this.yearValues, 'year');
            if (this.min === undefined) {
                this.min = Math.min.apply(Math, years);
            }
            if (this.max === undefined) {
                this.max = Math.max.apply(Math, years);
            }
        }
        else {
            if (this.min === undefined) {
                this.min = (todaysYear - 100).toString();
            }
            if (this.max === undefined) {
                this.max = todaysYear.toString();
            }
        }
        var min = this.datetimeMin = parseDate(this.min);
        var max = this.datetimeMax = parseDate(this.max);
        min.year = min.year || todaysYear;
        max.year = max.year || todaysYear;
        min.month = min.month || 1;
        max.month = max.month || 12;
        min.day = min.day || 1;
        max.day = max.day || 31;
        min.hour = min.hour || 0;
        max.hour = max.hour || 23;
        min.minute = min.minute || 0;
        max.minute = max.minute || 59;
        min.second = min.second || 0;
        max.second = max.second || 59;
        if (min.year > max.year) {
            console.error('min.year > max.year');
            min.year = max.year - 100;
        }
        if (min.year === max.year) {
            if (min.month > max.month) {
                console.error('min.month > max.month');
                min.month = 1;
            }
            else if (min.month === max.month && min.day > max.day) {
                console.error('min.day > max.day');
                min.day = 1;
            }
        }
    };
    Datetime.prototype.validateColumn = function (name, index, min, max, lowerBounds, upperBounds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var column, lb, ub, options, indexMin, indexMax, i, opts, value, disabled, selectedIndex, opt;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.picker.getColumn(name)];
                    case 1:
                        column = _a.sent();
                        if (!column) {
                            return [2 /*return*/, 0];
                        }
                        lb = lowerBounds.slice();
                        ub = upperBounds.slice();
                        options = column.options;
                        indexMin = options.length - 1;
                        indexMax = 0;
                        for (i = 0; i < options.length; i++) {
                            opts = options[i];
                            value = opts.value;
                            lb[index] = opts.value;
                            ub[index] = opts.value;
                            disabled = opts.disabled = (value < lowerBounds[index] ||
                                value > upperBounds[index] ||
                                dateSortValue(ub[0], ub[1], ub[2], ub[3], ub[4]) < min ||
                                dateSortValue(lb[0], lb[1], lb[2], lb[3], lb[4]) > max);
                            if (!disabled) {
                                indexMin = Math.min(indexMin, i);
                                indexMax = Math.max(indexMax, i);
                            }
                        }
                        selectedIndex = column.selectedIndex = clamp(indexMin, column.selectedIndex, indexMax);
                        opt = column.options[selectedIndex];
                        if (opt) {
                            return [2 /*return*/, opt.value];
                        }
                        return [2 /*return*/, 0];
                }
            });
        });
    };
    Datetime.prototype.updateText = function () {
        var template = this.displayFormat || this.pickerFormat || DEFAULT_FORMAT;
        this.text = renderDatetime(template, this.datetimeValue, this.locale);
    };
    Datetime.prototype.hasValue = function () {
        var val = this.datetimeValue;
        return Object.keys(val).length > 0;
    };
    Datetime.prototype.hostData = function () {
        return {
            class: Object.assign({}, createThemedClasses(this.mode, 'datetime'), { 'datetime-disabled': this.disabled })
        };
    };
    Datetime.prototype.render = function () {
        var addPlaceholderClass = false;
        var datetimeText = this.text;
        if (datetimeText === undefined) {
            if (this.placeholder !== undefined) {
                datetimeText = this.placeholder;
                addPlaceholderClass = true;
            }
            else {
                datetimeText = '';
            }
        }
        var datetimeTextClasses = {
            'datetime-text': true,
            'datetime-placeholder': addPlaceholderClass
        };
        return [
            h("div", { class: datetimeTextClasses }, datetimeText),
            h("button", { type: "button", "aria-haspopup": "true", "aria-labelledby": this.labelId, "aria-disabled": this.disabled ? 'true' : null, onClick: this.open.bind(this), class: "datetime-cover" }, this.mode === 'md' && h("ion-ripple-effect", null))
        ];
    };
    Object.defineProperty(Datetime, "is", {
        get: function () { return "ion-datetime"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Datetime, "properties", {
        get: function () {
            return {
                "cancelText": {
                    "type": String,
                    "attr": "cancel-text"
                },
                "dayNames": {
                    "type": String,
                    "attr": "day-names"
                },
                "dayShortNames": {
                    "type": String,
                    "attr": "day-short-names"
                },
                "dayValues": {
                    "type": "Any",
                    "attr": "day-values"
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled",
                    "watchCallbacks": ["disabledChanged"]
                },
                "displayFormat": {
                    "type": String,
                    "attr": "display-format"
                },
                "doneText": {
                    "type": String,
                    "attr": "done-text"
                },
                "hourValues": {
                    "type": "Any",
                    "attr": "hour-values"
                },
                "max": {
                    "type": String,
                    "attr": "max",
                    "mutable": true
                },
                "min": {
                    "type": String,
                    "attr": "min",
                    "mutable": true
                },
                "minuteValues": {
                    "type": "Any",
                    "attr": "minute-values"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "monthNames": {
                    "type": String,
                    "attr": "month-names"
                },
                "monthShortNames": {
                    "type": String,
                    "attr": "month-short-names"
                },
                "monthValues": {
                    "type": "Any",
                    "attr": "month-values"
                },
                "open": {
                    "method": true
                },
                "pickerCtrl": {
                    "connect": "ion-picker-controller"
                },
                "pickerFormat": {
                    "type": String,
                    "attr": "picker-format"
                },
                "pickerOptions": {
                    "type": "Any",
                    "attr": "picker-options"
                },
                "placeholder": {
                    "type": String,
                    "attr": "placeholder"
                },
                "text": {
                    "state": true
                },
                "value": {
                    "type": "Any",
                    "attr": "value",
                    "mutable": true,
                    "watchCallbacks": ["valueChanged"]
                },
                "yearValues": {
                    "type": "Any",
                    "attr": "year-values"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Datetime, "events", {
        get: function () {
            return [{
                    "name": "ionCancel",
                    "method": "ionCancel",
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
                    "name": "ionStyle",
                    "method": "ionStyle",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Datetime, "style", {
        get: function () { return "ion-datetime{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden}.datetime-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.datetime-text{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:16px;min-height:1.2em;font-size:inherit;line-height:1.2;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.datetime-disabled,.item-datetime-disabled ion-label{opacity:.4;pointer-events:none}.item-label-floating ion-datetime,.item-label-stacked ion-datetime{padding-left:0;width:100%}.item .datetime{position:static}.datetime-ios{padding:10px 8px 10px 16px}.datetime-ios .datetime-placeholder{color:var(--ion-text-color-step-600,#999)}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Datetime, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Datetime;
}());
function divyColumns(columns) {
    var columnsWidth = [];
    var col;
    var width;
    for (var i = 0; i < columns.length; i++) {
        col = columns[i];
        columnsWidth.push(0);
        for (var _i = 0, _a = col.options; _i < _a.length; _i++) {
            var option = _a[_i];
            width = option.text.length;
            if (width > columnsWidth[i]) {
                columnsWidth[i] = width;
            }
        }
    }
    if (columnsWidth.length === 2) {
        width = Math.max(columnsWidth[0], columnsWidth[1]);
        columns[0].align = 'right';
        columns[1].align = 'left';
        columns[0].optionsWidth = columns[1].optionsWidth = width * 17 + "px";
    }
    else if (columnsWidth.length === 3) {
        width = Math.max(columnsWidth[0], columnsWidth[2]);
        columns[0].align = 'right';
        columns[1].columnWidth = columnsWidth[1] * 17 + "px";
        columns[0].optionsWidth = columns[2].optionsWidth = width * 17 + "px";
        columns[2].align = 'left';
    }
    return columns;
}
var datetimeIds = 0;
var DEFAULT_FORMAT = 'MMM D, YYYY';
function iosEnterAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.picker-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.26);
    wrapperAnimation.fromTo('translateY', '100%', '0%');
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
function iosLeaveAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.picker-wrapper'));
    backdropAnimation.fromTo('opacity', 0.26, 0.01);
    wrapperAnimation.fromTo('translateY', '0%', '100%');
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
var Picker = /** @class */ (function () {
    function Picker() {
        this.presented = false;
        this.keyboardClose = true;
        this.buttons = [];
        this.columns = [];
        this.duration = 0;
        this.showBackdrop = true;
        this.backdropDismiss = true;
        this.animated = true;
    }
    Picker.prototype.componentDidLoad = function () {
        this.ionPickerDidLoad.emit();
    };
    Picker.prototype.componentDidUnload = function () {
        this.ionPickerDidUnload.emit();
    };
    Picker.prototype.onBackdropTap = function () {
        var cancelBtn = this.buttons.find(function (b) { return b.role === 'cancel'; });
        if (cancelBtn) {
            this.buttonClick(cancelBtn);
        }
        else {
            this.dismiss();
        }
    };
    Picker.prototype.present = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, present(this, 'pickerEnter', iosEnterAnimation, iosEnterAnimation, undefined)];
                    case 1:
                        _a.sent();
                        if (this.duration > 0) {
                            this.durationTimeout = setTimeout(function () { return _this.dismiss(); }, this.duration);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Picker.prototype.dismiss = function (data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return dismiss(this, data, role, 'pickerLeave', iosLeaveAnimation, iosLeaveAnimation);
    };
    Picker.prototype.onDidDismiss = function () {
        return eventMethod(this.el, 'ionPickerDidDismiss');
    };
    Picker.prototype.onWillDismiss = function () {
        return eventMethod(this.el, 'ionPickerWillDismiss');
    };
    Picker.prototype.getColumn = function (name) {
        return Promise.resolve(this.columns.find(function (column) { return column.name === name; }));
    };
    Picker.prototype.buttonClick = function (button) {
        var shouldDismiss = true;
        if (button.handler) {
            if (button.handler(this.getSelected()) === false) {
                shouldDismiss = false;
            }
        }
        if (shouldDismiss) {
            return this.dismiss();
        }
        return Promise.resolve(false);
    };
    Picker.prototype.getSelected = function () {
        var selected = {};
        this.columns.forEach(function (col, index) {
            var selectedColumn = col.selectedIndex !== undefined
                ? col.options[col.selectedIndex]
                : undefined;
            selected[col.name] = {
                text: selectedColumn ? selectedColumn.text : undefined,
                value: selectedColumn ? selectedColumn.value : undefined,
                columnIndex: index
            };
        });
        return selected;
    };
    Picker.prototype.hostData = function () {
        return {
            class: Object.assign({}, createThemedClasses(this.mode, 'picker'), getClassMap(this.cssClass)),
            style: {
                zIndex: 20000 + this.overlayIndex
            }
        };
    };
    Picker.prototype.render = function () {
        var _this = this;
        return [
            h("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }),
            h("div", { class: "picker-wrapper", role: "dialog" }, h("div", { class: "picker-toolbar" }, this.buttons.map(function (b) { return (h("div", { class: buttonWrapperClass(b) }, h("button", { type: "button", "ion-activatable": true, onClick: function () { return _this.buttonClick(b); }, class: buttonClass(b) }, b.text))); })), h("div", { class: "picker-columns" }, h("div", { class: "picker-above-highlight" }), this.columns.map(function (c) { return h("ion-picker-column", { col: c }); }), h("div", { class: "picker-below-highlight" })))
        ];
    };
    Object.defineProperty(Picker, "is", {
        get: function () { return "ion-picker"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picker, "properties", {
        get: function () {
            return {
                "animated": {
                    "type": Boolean,
                    "attr": "animated"
                },
                "animationCtrl": {
                    "connect": "ion-animation-controller"
                },
                "backdropDismiss": {
                    "type": Boolean,
                    "attr": "backdrop-dismiss"
                },
                "buttons": {
                    "type": "Any",
                    "attr": "buttons"
                },
                "columns": {
                    "type": "Any",
                    "attr": "columns"
                },
                "config": {
                    "context": "config"
                },
                "cssClass": {
                    "type": String,
                    "attr": "css-class"
                },
                "dismiss": {
                    "method": true
                },
                "duration": {
                    "type": Number,
                    "attr": "duration"
                },
                "el": {
                    "elementRef": true
                },
                "enterAnimation": {
                    "type": "Any",
                    "attr": "enter-animation"
                },
                "getColumn": {
                    "method": true
                },
                "keyboardClose": {
                    "type": Boolean,
                    "attr": "keyboard-close"
                },
                "leaveAnimation": {
                    "type": "Any",
                    "attr": "leave-animation"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "onDidDismiss": {
                    "method": true
                },
                "onWillDismiss": {
                    "method": true
                },
                "overlayIndex": {
                    "type": Number,
                    "attr": "overlay-index"
                },
                "present": {
                    "method": true
                },
                "showBackdrop": {
                    "type": Boolean,
                    "attr": "show-backdrop"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picker, "events", {
        get: function () {
            return [{
                    "name": "ionPickerDidLoad",
                    "method": "ionPickerDidLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPickerDidPresent",
                    "method": "didPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPickerWillPresent",
                    "method": "willPresent",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPickerWillDismiss",
                    "method": "willDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPickerDidDismiss",
                    "method": "didDismiss",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionPickerDidUnload",
                    "method": "ionPickerDidUnload",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picker, "listeners", {
        get: function () {
            return [{
                    "name": "ionBackdropTap",
                    "method": "onBackdropTap"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picker, "style", {
        get: function () { return "ion-picker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.picker-toolbar{width:100%;contain:strict;z-index:1}.picker-wrapper{left:0;right:0;bottom:0;margin:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;max-width:500px;contain:strict;overflow:hidden;z-index:10}.picker-columns{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;overflow:hidden}.picker-col{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;max-width:100%}.picker-prefix{position:relative;-webkit-box-flex:2;-ms-flex:2;flex:2;min-width:45%;max-width:50%;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-webkit-box-flex:2;-ms-flex:2;flex:2;min-width:45%;max-width:50%;text-align:start;white-space:nowrap}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.picker-above-highlight,.picker-below-highlight{display:none;pointer-events:none}.picker-button{border:0;font-family:inherit}.picker-button:active,.picker-button:focus,.picker-opt:active,.picker-opt:focus{outline:0}.picker-ios .picker-wrapper{height:260px;border-top:1px solid var(--ion-item-border-color,#c8c7cc);background:var(--ion-background-color,#fff)}.picker-ios .picker-toolbar{display:-webkit-box;display:-ms-flexbox;display:flex;height:44px;border-bottom:.55px solid var(--ion-item-border-color,#c8c7cc);background:var(--ion-background-color,#fff)}.picker-ios .picker-toolbar-button{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:end}.picker-ios .picker-toolbar-button:last-child .picker-button{font-weight:600}.picker-ios .picker-toolbar-button:first-child{font-weight:400;text-align:start}.picker-ios .picker-button,.picker-ios .picker-button.activated{margin:0;padding:0 1em;height:44px;background:0 0;color:var(--ion-color-primary,#3880ff);font-size:16px}.picker-columns{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-ios .picker-col{padding:0 4px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-ios .picker-opts,.picker-ios .picker-prefix,.picker-ios .picker-suffix{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:var(--ion-item-text-color,var(--ion-text-color,#000));font-size:20px;line-height:42px;pointer-events:none}.picker-ios .picker-opt{padding:0;margin:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:0 0;color:var(--ion-item-text-color,var(--ion-text-color,#000));font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-ios .picker-above-highlight{left:0;top:0;-webkit-transform:translate3d(0,0,90px);transform:translate3d(0,0,90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color,#c8c7cc);background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(to bottom,var(--ion-background-color,#fff) 20%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%);z-index:10}.picker-ios .picker-below-highlight{left:0;top:115px;-webkit-transform:translate3d(0,0,90px);transform:translate3d(0,0,90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color,#c8c7cc);background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(to top,var(--ion-background-color,#fff) 30%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%);z-index:11}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picker, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Picker;
}());
function buttonWrapperClass(button) {
    var _a;
    return _a = {},
        _a["picker-toolbar-" + button.role] = button.role !== undefined,
        _a['picker-toolbar-button'] = true,
        _a;
}
function buttonClass(button) {
    return Object.assign({ 'picker-button': true }, getClassMap(button.cssClass));
}
var PickerColumnCmp = /** @class */ (function () {
    function PickerColumnCmp() {
        this.optHeight = 0;
        this.rotateFactor = 0;
        this.scaleFactor = 1;
        this.velocity = 0;
        this.y = 0;
    }
    PickerColumnCmp.prototype.componentWillLoad = function () {
        var pickerRotateFactor = 0;
        var pickerScaleFactor = 0.81;
        if (this.mode === 'ios') {
            pickerRotateFactor = -0.46;
            pickerScaleFactor = 1;
        }
        this.rotateFactor = pickerRotateFactor;
        this.scaleFactor = pickerScaleFactor;
    };
    PickerColumnCmp.prototype.componentDidLoad = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var colEl, _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        colEl = this.optsEl;
                        this.optHeight = (colEl.firstElementChild ? colEl.firstElementChild.clientHeight : 0);
                        this.refresh();
                        _a = this;
                        return [4 /*yield*/, import("./gesture.js")];
                    case 1:
                        _a.gesture = (_b.sent()).createGesture({
                            el: this.el,
                            queue: this.queue,
                            gestureName: 'picker-swipe',
                            gesturePriority: 100,
                            threshold: 0,
                            onStart: function (ev) { return _this.onStart(ev); },
                            onMove: function (ev) { return _this.onMove(ev); },
                            onEnd: function (ev) { return _this.onEnd(ev); },
                        });
                        this.gesture.setDisabled(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    PickerColumnCmp.prototype.setSelected = function (selectedIndex, duration) {
        var y = (selectedIndex > -1) ? -(selectedIndex * this.optHeight) : 0;
        this.velocity = 0;
        cancelAnimationFrame(this.rafId);
        this.update(y, duration, true);
    };
    PickerColumnCmp.prototype.update = function (y, duration, saveY) {
        var translateY = 0;
        var translateZ = 0;
        var _a = this, col = _a.col, rotateFactor = _a.rotateFactor;
        var selectedIndex = col.selectedIndex = this.indexForY(-y);
        var durationStr = (duration === 0) ? null : duration + 'ms';
        var scaleStr = "scale(" + this.scaleFactor + ")";
        var children = this.optsEl.children;
        for (var i = 0; i < children.length; i++) {
            var button = children[i];
            var opt = col.options[i];
            var optOffset = (i * this.optHeight) + y;
            var visible = true;
            var transform = '';
            if (rotateFactor !== 0) {
                var rotateX = optOffset * rotateFactor;
                if (Math.abs(rotateX) > 90) {
                    visible = false;
                }
                else {
                    translateY = 0;
                    translateZ = 90;
                    transform = "rotateX(" + rotateX + "deg) ";
                }
            }
            else {
                translateZ = 0;
                translateY = optOffset;
                if (Math.abs(translateY) > 170) {
                    visible = false;
                }
            }
            var selected = selectedIndex === i;
            if (visible) {
                transform += "translate3d(0px," + translateY + "px," + translateZ + "px) ";
                if (this.scaleFactor !== 1 && !selected) {
                    transform += scaleStr;
                }
            }
            else {
                transform = 'translate3d(-9999px,0px,0px)';
            }
            if (duration !== opt.duration) {
                opt.duration = duration;
                button.style.transitionDuration = durationStr;
            }
            if (transform !== opt.transform) {
                opt.transform = transform;
                button.style.transform = transform;
            }
            if (selected !== opt.selected) {
                opt.selected = selected;
                if (selected) {
                    button.classList.add(PICKER_OPT_SELECTED);
                }
                else {
                    button.classList.remove(PICKER_OPT_SELECTED);
                }
            }
        }
        this.col.prevSelected = selectedIndex;
        if (saveY) {
            this.y = y;
        }
        if (this.lastIndex !== selectedIndex) {
            hapticSelectionChanged();
            this.lastIndex = selectedIndex;
        }
    };
    PickerColumnCmp.prototype.decelerate = function () {
        var _this = this;
        if (this.velocity !== 0) {
            this.velocity *= DECELERATION_FRICTION;
            this.velocity = (this.velocity > 0)
                ? Math.max(this.velocity, 1)
                : Math.min(this.velocity, -1);
            var y = this.y + this.velocity;
            if (y > this.minY) {
                y = this.minY;
                this.velocity = 0;
            }
            else if (y < this.maxY) {
                y = this.maxY;
                this.velocity = 0;
            }
            this.update(y, 0, true);
            var notLockedIn = (Math.round(y) % this.optHeight !== 0) || (Math.abs(this.velocity) > 1);
            if (notLockedIn) {
                this.rafId = requestAnimationFrame(function () { return _this.decelerate(); });
            }
        }
        else if (this.y % this.optHeight !== 0) {
            var currentPos = Math.abs(this.y % this.optHeight);
            this.velocity = (currentPos > (this.optHeight / 2) ? 1 : -1);
            this.decelerate();
        }
    };
    PickerColumnCmp.prototype.indexForY = function (y) {
        return Math.min(Math.max(Math.abs(Math.round(y / this.optHeight)), 0), this.col.options.length - 1);
    };
    PickerColumnCmp.prototype.onStart = function (detail) {
        detail.event.preventDefault();
        detail.event.stopPropagation();
        cancelAnimationFrame(this.rafId);
        var options = this.col.options;
        var minY = (options.length - 1);
        var maxY = 0;
        for (var i = 0; i < options.length; i++) {
            if (!options[i].disabled) {
                minY = Math.min(minY, i);
                maxY = Math.max(maxY, i);
            }
        }
        this.minY = -(minY * this.optHeight);
        this.maxY = -(maxY * this.optHeight);
    };
    PickerColumnCmp.prototype.onMove = function (detail) {
        detail.event.preventDefault();
        detail.event.stopPropagation();
        var y = this.y + detail.deltaY;
        if (y > this.minY) {
            y = Math.pow(y, 0.8);
            this.bounceFrom = y;
        }
        else if (y < this.maxY) {
            y += Math.pow(this.maxY - y, 0.9);
            this.bounceFrom = y;
        }
        else {
            this.bounceFrom = 0;
        }
        this.update(y, 0, false);
    };
    PickerColumnCmp.prototype.onEnd = function (detail) {
        if (this.bounceFrom > 0) {
            this.update(this.minY, 100, true);
            return;
        }
        else if (this.bounceFrom < 0) {
            this.update(this.maxY, 100, true);
            return;
        }
        this.velocity = clamp(-MAX_PICKER_SPEED, detail.velocityY * 23, MAX_PICKER_SPEED);
        if (this.velocity === 0 && detail.deltaY === 0) {
            var opt = detail.event.target.closest('.picker-opt');
            if (opt && opt.hasAttribute('opt-index')) {
                this.setSelected(parseInt(opt.getAttribute('opt-index'), 10), 150);
            }
        }
        else {
            this.y += detail.deltaY;
            this.decelerate();
        }
    };
    PickerColumnCmp.prototype.refresh = function () {
        var min = this.col.options.length - 1;
        var max = 0;
        var options = this.col.options;
        for (var i = 0; i < options.length; i++) {
            if (!options[i].disabled) {
                min = Math.min(min, i);
                max = Math.max(max, i);
            }
        }
        var selectedIndex = clamp(min, this.col.selectedIndex, max);
        if (this.col.prevSelected !== selectedIndex) {
            var y = (selectedIndex * this.optHeight) * -1;
            this.velocity = 0;
            this.update(y, 150, true);
        }
    };
    PickerColumnCmp.prototype.hostData = function () {
        return {
            class: {
                'picker-col': true,
                'picker-opts-left': this.col.align === 'left',
                'picker-opts-right': this.col.align === 'right'
            },
            style: {
                'max-width': this.col.columnWidth
            }
        };
    };
    PickerColumnCmp.prototype.render = function () {
        var _this = this;
        var col = this.col;
        var Button = 'button';
        return [
            col.prefix && (h("div", { class: "picker-prefix", style: { width: col.prefixWidth } }, col.prefix)),
            h("div", { class: "picker-opts", style: { maxWidth: col.optionsWidth }, ref: function (el) { return _this.optsEl = el; } }, col.options.map(function (o, index) { return h(Button, { type: "button", class: { 'picker-opt': true, 'picker-opt-disabled': !!o.disabled }, "opt-index": index }, o.text); })),
            col.suffix && (h("div", { class: "picker-suffix", style: { width: col.suffixWidth } }, col.suffix))
        ];
    };
    Object.defineProperty(PickerColumnCmp, "is", {
        get: function () { return "ion-picker-column"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PickerColumnCmp, "properties", {
        get: function () {
            return {
                "col": {
                    "type": "Any",
                    "attr": "col"
                },
                "el": {
                    "elementRef": true
                },
                "queue": {
                    "context": "queue"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return PickerColumnCmp;
}());
var PICKER_OPT_SELECTED = 'picker-opt-selected';
var DECELERATION_FRICTION = 0.97;
var MAX_PICKER_SPEED = 90;
var PickerController = /** @class */ (function () {
    function PickerController() {
    }
    PickerController.prototype.create = function (opts) {
        return createOverlay(this.doc.createElement('ion-picker'), opts);
    };
    PickerController.prototype.dismiss = function (data, role, id) {
        return dismissOverlay(this.doc, data, role, 'ion-picker', id);
    };
    PickerController.prototype.getTop = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, getOverlay(this.doc, 'ion-picker')];
            });
        });
    };
    Object.defineProperty(PickerController, "is", {
        get: function () { return "ion-picker-controller"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PickerController, "properties", {
        get: function () {
            return {
                "create": {
                    "method": true
                },
                "dismiss": {
                    "method": true
                },
                "doc": {
                    "context": "document"
                },
                "getTop": {
                    "method": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return PickerController;
}());
export { Datetime as IonDatetime, Picker as IonPicker, PickerColumnCmp as IonPickerColumn, PickerController as IonPickerController };
