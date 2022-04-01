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
import { jsx as _jsx } from "react/jsx-runtime";
import "../styles/button.scss";
var Button = function (_a) {
    var children = _a.children, type = _a.type, size = _a.size, onClick = _a.onClick, style = _a.style, disabled = _a.disabled, _b = _a.prefix, prefix = _b === void 0 ? "dyl" : _b;
    var classNames = [
        "button",
        "button-".concat(type || "default"),
        "button-".concat(size || "middle"),
        "".concat(!!disabled ? "button-disabled" : ""),
    ]
        .filter(function (ele) { return !!ele; })
        .map(function (ele) {
        return "".concat(prefix, "-").concat(ele);
    });
    /** render */
    return (_jsx("div", __assign({ onClick: onClick, className: classNames.join(" "), style: style }, { children: children })));
};
export default Button;
