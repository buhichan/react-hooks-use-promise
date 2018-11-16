"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
function usePromise(fn) {
    var initialState = {
        value: undefined,
        loading: false,
        error: null
    };
    var _a = React.useState(initialState), state = _a[0], setState = _a[1];
    var loadValue = function () {
        setState(__assign({}, state, { loading: true }));
        fn().then(function (res) {
            setState({
                loading: false,
                value: res,
                error: null
            });
        }, function (err) {
            setState({
                loading: false,
                value: null,
                error: err
            });
        });
    };
    if (state.value === undefined && !state.loading) {
        loadValue();
    }
    return __assign({}, state, { setState: setState, loadValue: loadValue });
}
exports["default"] = usePromise;
//# sourceMappingURL=index.js.map