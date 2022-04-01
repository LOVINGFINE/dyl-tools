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
import { jsx as _jsx } from "react/jsx-runtime";
/*
 * Created by zhangq on 2022/03/09
 * 虚拟 滚动
 */
import { useEffect, useState, useRef } from "react";
import { reduceTreeSource } from "./utils";
import "../styles/VirtualTree.scss";
import TreeList from "./TreeList";
var VirtualTree = function (_a) {
    var children = _a.children, dataSource = _a.dataSource, _b = _a.prefix, prefix = _b === void 0 ? "dyl" : _b, nodeDbClick = _a.nodeDbClick, _c = _a.options, options = _c === void 0 ? {} : _c, nodeClick = _a.nodeClick;
    var _d = options.height, height = _d === void 0 ? 32 : _d, _e = options.extra, extra = _e === void 0 ? 10 : _e, _f = options.childrenKey, childrenKey = _f === void 0 ? "children" : _f;
    var _g = useState(0), offsetHeight = _g[0], setOffsetHeight = _g[1];
    var _h = useState([]), expandKeys = _h[0], setExpendKeys = _h[1];
    var _j = useState(0), scrollTop = _j[0], setScrollTop = _j[1];
    var wrapper = useRef(null);
    var getConfig = function () {
        var start = scrollTop > height * extra ? scrollTop - height * extra : 0;
        var end = offsetHeight + extra * height * 2;
        return {
            start: start,
            end: end,
            height: height,
        };
    };
    /** LifeCycle */
    useEffect(function () {
        // init
        if (wrapper.current) {
            var offsetHeight_1 = wrapper.current.offsetHeight;
            setOffsetHeight(offsetHeight_1);
        }
    }, [wrapper]);
    /**
     * @method
     */
    var onScroll = function (event) {
        var scrollTop = event.target.scrollTop;
        setScrollTop(Math.floor(scrollTop / height) * height);
    };
    var expand = function (record) {
        if (record.isExpand) {
            setExpendKeys(expandKeys.filter(function (ele) { return ele !== record.nodeKey; }));
        }
        else {
            setExpendKeys(__spreadArray(__spreadArray([], expandKeys, true), [record.nodeKey], false));
        }
    };
    /** render */
    return (_jsx("div", __assign({ className: "".concat(prefix, "-vc-tree-wrapper"), onScroll: onScroll, ref: wrapper }, { children: _jsx(TreeList, __assign({ dataSource: reduceTreeSource(dataSource, {
                height: height,
                extra: extra,
                expandKeys: expandKeys,
                childrenKey: childrenKey,
            }), config: getConfig(), prefix: prefix, expand: expand, nodeDbClick: nodeDbClick, nodeClick: nodeClick }, { children: children })) })));
};
export default VirtualTree;
