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
import "../styles/dropdown.scss";
var Dropdown = function (_a) {
    var prefix = _a.prefix, children = _a.children;
    /**
     * @method
     */
    var onClick = function (e) {
        console.log(e);
    };
    var onMouseEnter = function (e) {
        console.log(e);
    };
    /** render */
    return (_jsx("div", __assign({ className: "".concat(prefix, "-dropdown"), onMouseEnter: onMouseEnter, onClick: onClick }, { children: children })));
};
export default Dropdown;
