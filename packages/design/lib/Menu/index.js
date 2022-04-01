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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*
 * Created by zhangq on 2021/11/25
 *
 */
import { useEffect, useState } from "react";
import "../styles/menu.scss";
export var Menu = function (_a) {
    var dataSource = _a.dataSource, selectKeys = _a.selectKeys, onClick = _a.onClick, _b = _a.prefix, prefix = _b === void 0 ? "dyl" : _b;
    var _c = useState([]), expendKeys = _c[0], setExpendKeys = _c[1];
    /** LifeCycle */
    useEffect(function () {
        // init
    }, []);
    /**
     * @method
     */
    // 获取item 类名
    var getTypeClass = function (item) {
        if (selectKeys.includes(item.key)) {
            return "selected";
        }
        if (item === null || item === void 0 ? void 0 : item.disibled) {
            return "disibled";
        }
        return "default";
    };
    // 是否展开
    var isExpend = function (key) {
        return expendKeys.includes(key);
    };
    var change = function (item) {
        if (item.children && !expendKeys.includes(item.key)) {
            setExpendKeys(__spreadArray(__spreadArray([], expendKeys, true), [item.key], false));
        }
        else {
            // 选中
            if (!!onClick) {
                onClick(item);
            }
        }
    };
    /** render */
    return (_jsx("div", __assign({ className: "".concat(prefix, "-menu") }, { children: dataSource.map(function (ele) {
            return (_jsxs("div", __assign({ className: "".concat(prefix, "-menu-item") }, { children: [_jsxs("div", __assign({ className: "".concat(prefix, "-menu-item-box ").concat(prefix, "-menu-item-").concat(getTypeClass(ele)), onClick: function () { return change(ele); } }, { children: [ele.icon, _jsx("span", { children: ele.title || ele.key }), _jsx("span", { children: "g" })] })), isExpend(ele.key) && ele.children && (_jsx(Menu, { dataSource: ele.children, selectKeys: selectKeys }))] }), ele.key));
        }) })));
};
export default Menu;
