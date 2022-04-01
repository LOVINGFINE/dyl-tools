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
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*
 * Created by zhangq on 2021/11/26
 * modal 组件
 */
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import "../styles/modal.scss";
import { Icon } from "../index";
var Render = function (_a) {
    var children = _a.children, _b = _a.visible, visible = _b === void 0 ? false : _b, _c = _a.width, width = _c === void 0 ? 425 : _c, _d = _a.height, height = _d === void 0 ? 550 : _d, _e = _a.zIndex, zIndex = _e === void 0 ? 1000 : _e, _f = _a.close, close = _f === void 0 ? true : _f, _g = _a.maskClose, maskClose = _g === void 0 ? true : _g, _h = _a.mask, mask = _h === void 0 ? true : _h, onClose = _a.onClose, _j = _a.prefix, prefix = _j === void 0 ? "dyl" : _j, footer = _a.footer, _k = _a.placement, placement = _k === void 0 ? "bottom-left" : _k;
    var renderFooter = function () {
        if (footer === null) {
            return _jsx(_Fragment, {});
        }
        if (footer) {
            return footer;
        }
        return _jsx("div", { className: "".concat(prefix, "-modal-footer") });
    };
    var renderClose = function () {
        if (typeof close === "boolean" && close) {
            return (_jsx("div", __assign({ className: "".concat(prefix, "-modal-close"), onClick: function () {
                    if (maskClose && onClose) {
                        onClose();
                    }
                } }, { children: _jsx(Icon, { name: "cross", fontSize: 20, color: "var(--font-color-sec)" }) })));
        }
        if (typeof close === "function")
            return close;
        return _jsx(_Fragment, {});
    };
    var bodyStyle = function () {
        var over = -15;
        var x = "calc(100vw / 2 - ".concat(width / 2, "px)");
        var y = "calc(100vh / 2 - ".concat(height / 2, "px)");
        var w = visible ? width : 0;
        var h = visible ? height : 0;
        switch (placement) {
            case "bottom-left":
                return {
                    left: visible ? x : over,
                    bottom: visible ? y : over,
                    width: w,
                    height: h,
                };
            case "bottom-right":
                return {
                    right: visible ? x : over,
                    bottom: visible ? y : over,
                    width: w,
                    height: h,
                };
            case "top-right":
                return {
                    right: visible ? x : over,
                    top: visible ? y : over,
                    width: w,
                    height: h,
                };
            case "top-left":
                return {
                    left: visible ? x : over,
                    top: visible ? y : over,
                    width: w,
                    height: h,
                };
            case "bottom":
                return {
                    left: x,
                    bottom: visible ? y : over,
                    width: width,
                    height: h,
                };
            case "top":
                return {
                    left: x,
                    top: visible ? y : over,
                    width: width,
                    height: h,
                };
            case "left":
                return {
                    top: y,
                    left: visible ? x : over,
                    width: w,
                    height: height,
                };
            case "right":
                return {
                    top: y,
                    right: visible ? x : over,
                    width: w,
                    height: height,
                };
        }
    };
    return (_jsxs("div", __assign({ className: "".concat(prefix, "-modal"), style: { zIndex: zIndex } }, { children: [mask && visible && (_jsx("div", { className: "".concat(prefix, "-modal-mask"), onClick: function () {
                    if (maskClose && onClose) {
                        onClose();
                    }
                } })), _jsxs("div", __assign({ className: "".concat(prefix, "-modal-content"), style: bodyStyle() }, { children: [renderClose(), _jsx("div", __assign({ className: "".concat(prefix, "-modal-body") }, { children: children })), renderFooter()] }))] })));
};
var Modal = function (props) {
    var prefix = props.prefix || "dyl";
    var currentId = useState("".concat(prefix, "-modal-").concat(new Date().getTime()))[0];
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
export default Modal;
