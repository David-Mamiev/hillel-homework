"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchOptions = exports.apiUrl = void 0;
exports.apiUrl = "http://localhost:3000";
var fetchOptions = function (method) { return ({
    method: method,
    headers: {
        "Content-Type": "application/json",
    },
}); };
exports.fetchOptions = fetchOptions;
