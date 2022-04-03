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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import "../styles/button.scss";
import Icon from "../Icon";
var Button = function (_a) {
    var children = _a.children, type = _a.type, size = _a.size, onClick = _a.onClick, style = _a.style, disabled = _a.disabled, _b = _a.loading, loading = _b === void 0 ? false : _b, icon = _a.icon, _c = _a.prefix, prefix = _c === void 0 ? "dyl" : _c;
    var classNames = [
        "button",
        "button-".concat(type || "default"),
        "button-".concat(size || "middle"),
        "button-loading-".concat(loading),
        "".concat(!!disabled ? "button-disabled" : ""),
    ]
        .filter(function (ele) { return !!ele; })
        .map(function (ele) {
        return "".concat(prefix, "-").concat(ele);
    });
    var getChildren = function () {
        if (typeof children === "string" && children.length === 2) {
            return children.split("").join("  ");
        }
        return children;
    };
    /** render */
    return (_jsxs("div", __assign({ onClick: function (e) {
            if (onClick && !loading) {
                onClick(e);
            }
        }, className: classNames.join(" "), style: style }, { children: [loading || !!icon ? (_jsx("div", __assign({ className: "".concat(prefix, "-button-").concat(size || "middle", "-icon") }, { children: loading ? (_jsx(Icon, { name: "spinner8", className: "".concat(prefix, "-button-icon-loading") })) : (_jsx(Icon, { name: icon })) }))) : (_jsx(_Fragment, {})), getChildren()] })));
};
export default Button;
