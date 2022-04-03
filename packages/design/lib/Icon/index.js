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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import unicodes from "./font-unicode.json";
import "../styles/icon.scss";
var types = unicodes;
var Icon = function (_a) {
    var fontSize = _a.fontSize, color = _a.color, name = _a.name, className = _a.className, onClick = _a.onClick, _b = _a.prefix, prefix = _b === void 0 ? "dyl" : _b;
    var getStyle = function () {
        var temp = {};
        if (fontSize) {
            temp[""] = fontSize;
        }
        if (color) {
            temp["color"] = color;
        }
        return temp;
    };
    var getClassName = function () {
        if (className) {
            return "".concat(prefix, "-icon-font ").concat(className);
        }
        return "".concat(prefix, "-icon-font");
    };
    return name && types[name] ? (_jsx("i", __assign({ className: getClassName(), onClick: function (e) {
            if (onClick) {
                onClick(e);
            }
        }, style: getStyle() }, { children: types[name] }))) : (_jsx(_Fragment, {}));
};
export default Icon;
