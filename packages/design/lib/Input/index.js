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
import "../styles/input.scss";
var Input = function (_a) {
    var _b = _a.value, value = _b === void 0 ? "" : _b, _c = _a.size, size = _c === void 0 ? "default" : _c, change = _a.change, onBlur = _a.onBlur, _d = _a.perfix, perfix = _d === void 0 ? "dyl" : _d, placeholder = _a.placeholder, width = _a.width, _e = _a.style, style = _e === void 0 ? {} : _e, onEnter = _a.onEnter;
    var getStyle = function () {
        var obj = __assign({}, style);
        if (width) {
            obj["width"] = width;
        }
        return obj;
    };
    var onKeyDown = function (e) {
        var key = e.key;
        if (key === "Enter" && onEnter) {
            onEnter(e);
        }
    };
    /** render */
    return (_jsx("input", { type: "text", className: "".concat(perfix, "-input ").concat(perfix, "-input-").concat(size), placeholder: placeholder, style: getStyle(), value: value, onBlur: onBlur, onKeyDown: function (e) { return onKeyDown(e); }, onChange: function (e) {
            var input = e.target.value || "";
            if (change) {
                change(input);
            }
        } }));
};
export default Input;
