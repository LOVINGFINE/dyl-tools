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
/*
 * Created by zhangq on 2021/11/26
 * 抽屉组件
 */
import { useEffect, useState } from "react";
import "../styles/drawer.scss";
import ReactDOM from "react-dom";
var Render = function (_a) {
    var _b = _a.placement, placement = _b === void 0 ? "left" : _b, children = _a.children, _c = _a.visible, visible = _c === void 0 ? false : _c, _d = _a.style, style = _d === void 0 ? {} : _d, _e = _a.width, width = _e === void 0 ? 375 : _e, _f = _a.zIndex, zIndex = _f === void 0 ? 1001 : _f, _g = _a.close, close = _g === void 0 ? true : _g, _h = _a.maskClose, maskClose = _h === void 0 ? true : _h, _j = _a.mask, mask = _j === void 0 ? true : _j, onClose = _a.onClose, _k = _a.prefix, prefix = _k === void 0 ? "dyl" : _k;
    var handleClose = function () {
        if (onClose) {
            onClose();
        }
    };
    var renderClose = function () {
        if (typeof close === "boolean") {
            return close ? (_jsx("div", __assign({ className: "".concat(prefix, "-drawer-close"), onClick: handleClose }, { children: _jsx("span", { children: "X" }) }))) : (_jsx(_Fragment, {}));
        }
        if (typeof close === "function")
            return close;
    };
    var bodyStyle = function () {
        var show = visible ? width : 0;
        if (placement === "left") {
            return __assign(__assign({}, style), { width: show, height: "100vh", top: 0, left: 0 });
        }
        if (placement === "right") {
            return __assign(__assign({}, style), { width: show, height: "100vh", top: 0, right: 0 });
        }
        if (placement === "bottom") {
            return __assign(__assign({}, style), { height: show, width: "100vw", bottom: 0, left: 0 });
        }
        if (placement === "top") {
            return __assign(__assign({}, style), { height: show, width: "100vw", top: 0, left: 0 });
        }
    };
    return (_jsxs("div", __assign({ className: "".concat(prefix, "-drawer"), style: { zIndex: zIndex } }, { children: [mask && visible && (_jsx("div", { className: "".concat(prefix, "-drawer-mask"), onClick: function () {
                    if (maskClose) {
                        handleClose();
                    }
                } })), _jsxs("div", __assign({ className: "".concat(prefix, "-drawer-body"), style: bodyStyle() }, { children: [renderClose(), children] }))] })));
};
var Drawer = function (props) {
    var prefix = props.prefix || "dyl";
    var currentId = useState("".concat(prefix, "-drawer-").concat(new Date().getTime()))[0];
    useEffect(function () {
        var div = document.createElement("div");
        div.id = currentId;
        ReactDOM.render(_jsx(Render, __assign({}, props)), div);
        document.body.appendChild(div);
    }, []);
    useEffect(function () {
        var div = document.getElementById(currentId);
        if (div) {
            ReactDOM.render(_jsx(Render, __assign({}, props)), div);
        }
    }, [props]);
    /** render */
    return _jsx(_Fragment, {});
};
export default Drawer;
