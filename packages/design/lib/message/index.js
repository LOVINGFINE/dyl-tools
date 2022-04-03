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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/*
 * Created by zhangq on 2021/11/26
 * message 组件
 */
import ReactDOM from "react-dom";
import Icon from "../Icon";
import "../styles/message.scss";
var setTop = function (name) {
    var body = document.getElementsByTagName("body")[0];
    var arr = [];
    ((body === null || body === void 0 ? void 0 : body.childNodes) || []).forEach(function (ele, i) {
        var className = (ele === null || ele === void 0 ? void 0 : ele.className) || "";
        if (!!className && className.indexOf(name) !== -1) {
            arr.push(ele);
        }
    });
    arr.forEach(function (ele, i) {
        ele.style.top = "".concat(i * 55 + 15, "px");
    });
    return (arr.length - 1) * 55 + 15;
};
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.success = function (title, options) {
        Message.render({ title: title, type: "success", duration: options === null || options === void 0 ? void 0 : options.duration });
    };
    Message.warning = function (title, options) {
        Message.render({ title: title, type: "warning", duration: options === null || options === void 0 ? void 0 : options.duration });
    };
    Message.error = function (title, options) {
        Message.render({ title: title, type: "error", duration: options === null || options === void 0 ? void 0 : options.duration });
    };
    Message.render = function (_a) {
        var title = _a.title, _b = _a.prefix, prefix = _b === void 0 ? "dyl" : _b, type = _a.type, _c = _a.duration, duration = _c === void 0 ? 2500 : _c;
        var div = document.createElement("div");
        div.className = "".concat(prefix, "-message");
        var getIcon = function () {
            switch (type) {
                case "success":
                    return "check-alt";
                case "error":
                    return "info-with-circle";
                case "warning":
                    return "help-with-circle";
            }
        };
        var content = (_jsxs("div", __assign({ className: "".concat(prefix, "-message-render"), style: {
                backgroundColor: "var(--bg-color-".concat(type, ")"),
            } }, { children: [_jsx(Icon, { name: getIcon(), color: "var(--tip-color-".concat(type, ")") }), _jsx("span", __assign({ className: "".concat(prefix, "-message-render-title") }, { children: title || "" }))] })));
        ReactDOM.render(content, div);
        document.body.appendChild(div);
        setTop("".concat(prefix, "-message"));
        setTimeout(function () {
            document.body.removeChild(div);
            setTop("".concat(prefix, "-message"));
        }, duration);
    };
    return Message;
}());
export var PropsTypes = function (_a) {
    var _b = _a.prefix, prefix = _b === void 0 ? "dyl" : _b;
    return _jsx(_Fragment, {});
};
export default Message;
