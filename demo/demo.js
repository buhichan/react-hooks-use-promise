"use strict";
exports.__esModule = true;
var React = require("react");
var react_dom_1 = require("react-dom");
var index_1 = require("../index");
var n = 0;
var p = function () {
    console.log("resolving");
    return new Promise(function (resolve) { return setTimeout(function () { return resolve(n++); }, 1000); });
};
function Root() {
    var _a = index_1["default"](p), value = _a.value, loading = _a.loading, loadValue = _a.loadValue;
    return React.createElement("div", null,
        React.createElement("span", null, value),
        React.createElement("span", null, loading ? "..." : ""),
        React.createElement("button", { onClick: loadValue }, "load"));
}
react_dom_1.render(React.createElement(Root, null), document.querySelector("#root"));
//# sourceMappingURL=demo.js.map