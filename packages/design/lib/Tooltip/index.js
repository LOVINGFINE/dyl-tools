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
import "../styles/tooltip.scss";
var Tooltip = function (_a) {
    var children = _a.children, _b = _a.prefix, prefix = _b === void 0 ? "dyl" : _b;
    /** render */
    return _jsx("div", __assign({ className: "".concat(prefix, "-tooltip") }, { children: children }));
};
export default Tooltip;
