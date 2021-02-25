"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.span = exports.img = exports.a = exports.div = exports.element = exports.appendChildren = exports.addClasses = exports.get = void 0;
var constants_1 = require("./constants");
var lodash_1 = require("lodash");
var prepareUrl = function (postFix) { return "" + constants_1.apiUrl + postFix; };
var responseToJson = function (response) { return response.json(); };
var get = function (url) {
    if (url === void 0) { url = '/'; }
    return fetch(prepareUrl(url), constants_1.fetchOptions('get')).then(responseToJson);
};
exports.get = get;
var addClasses = function (el, classes) {
    var _a;
    if (classes === void 0) { classes = []; }
    var newElement = el.cloneNode();
    (_a = newElement.classList).add.apply(_a, classes);
    return newElement;
};
exports.addClasses = addClasses;
var appendChildren = function (el, children) {
    if (children === void 0) { children = []; }
    var newElement = el.cloneNode();
    children.forEach(function (child) {
        if (child !== null && typeof child !== 'object') {
            newElement.append(document.createTextNode(child));
        }
        else if (child !== null) {
            newElement.append(child);
        }
    });
    return newElement;
};
exports.appendChildren = appendChildren;
var element = function (tagName, _a) {
    var _b = _a.children, children = _b === void 0 ? [] : _b, _c = _a.classNames, classNames = _c === void 0 ? [] : _c, _d = _a.listeners, listeners = _d === void 0 ? {} : _d, additionalProps = __rest(_a, ["children", "classNames", "listeners"]);
    return lodash_1.chain(document.createElement(tagName))
        .thru(function (el) { return exports.addClasses(el, classNames); })
        .thru(function (el) { return exports.appendChildren(el, children); })
        .tap(function (el) {
        Object.entries(listeners).forEach(function (_a) {
            var listener = _a[0], callback = _a[1];
            el.addEventListener(listener, callback);
        });
    })
        .value();
};
exports.element = element;
var div = function (props) { return exports.element('div', props); };
exports.div = div;
var a = function (props) { return exports.element('a', props); };
exports.a = a;
var img = function (props) { return exports.element('img', props); };
exports.img = img;
var span = function (props) { return exports.element('span', props); };
exports.span = span;
