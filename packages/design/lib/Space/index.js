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
import "../styles/space.scss";
var Space = function (_a) {
    var children = _a.children, style = _a.style, _b = _a.prefix, prefix = _b === void 0 ? "dyl" : _b, _c = _a.direction, direction = _c === void 0 ? "row" : _c;
    /** render */
    return (_jsx("div", __assign({ className: "".concat(prefix, "-space ").concat(prefix, "-space-").concat(direction), style: style }, { children: children })));
};
export default Space;
