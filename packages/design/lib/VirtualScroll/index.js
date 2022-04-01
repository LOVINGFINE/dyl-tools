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
/*
 * Created by zhangq on 2022/03/09
 * 虚拟 滚动
 */
import { useEffect, useState, useRef } from "react";
import { reduceChildrenSource } from "./utils";
import "../styles/VirtualScroll.scss";
var VirtualScroll = function (_a) {
    var children = _a.children, _b = _a.prefix, prefix = _b === void 0 ? "dyl" : _b, _c = _a.options, options = _c === void 0 ? {} : _c;
    var _d = options.extra, extra = _d === void 0 ? 100 : _d;
    var _e = useState(true), loading = _e[0], setLoading = _e[1];
    var _f = useState(0), scrollHeight = _f[0], setScrollHeight = _f[1];
    var _g = useState(0), total = _g[0], setTotal = _g[1];
    var _h = useState(0), scrollTop = _h[0], setScrollTop = _h[1];
    var _j = useState([]), childrenElement = _j[0], setChildrenElement = _j[1];
    var wrapper = useRef(null);
    var content = useRef(null);
    /** LifeCycle */
    useEffect(function () {
        // init
        if (wrapper.current) {
            var offsetHeight = wrapper.current.offsetHeight;
            setScrollHeight(offsetHeight);
        }
    }, [wrapper]);
    /** LifeCycle */
    useEffect(function () {
        if (content.current) {
            setDataSource(content.current);
        }
    }, [content]);
    /**
     * @method
     */
    var setDataSource = function (node) {
        setTimeout(function () {
            var offsetHeight = node.offsetHeight, _a = node.childNodes, childNodes = _a === void 0 ? [] : _a;
            setTotal(offsetHeight);
            var targets = [];
            var origins = [];
            if (children) {
                if (Array.isArray(children)) {
                    origins = children;
                }
                else {
                    origins = [children];
                }
            }
            childNodes.forEach(function (ele, i) {
                var _a = ele.offsetHeight, offsetHeight = _a === void 0 ? 0 : _a, _b = ele.offsetWidth, offsetWidth = _b === void 0 ? 0 : _b, _c = ele.offsetTop, offsetTop = _c === void 0 ? 0 : _c, _d = ele.offsetLeft, offsetLeft = _d === void 0 ? 0 : _d;
                targets.push({
                    offset: {
                        x: offsetLeft,
                        y: offsetTop,
                        height: offsetHeight,
                        width: offsetWidth,
                    },
                    child: origins[i],
                });
            });
            setChildrenElement(targets);
            setLoading(false);
        });
    };
    var onScroll = function (event) {
        var scrollTop = event.target.scrollTop;
        setScrollTop(scrollTop);
    };
    /** render */
    return (_jsx("div", __assign({ className: "".concat(prefix, "-virtual-scroll-wrapper"), onScroll: onScroll, ref: wrapper }, { children: _jsx("div", __assign({ ref: content, style: loading ? { opacity: 0 } : { height: total }, className: "".concat(prefix, "-virtual-scroll") }, { children: loading
                ? children
                : reduceChildrenSource(childrenElement, {
                    scrollHeight: scrollHeight,
                    scrollTop: scrollTop,
                    extra: extra,
                    className: "".concat(prefix, "-virtual-scroll-item"),
                }) })) })));
};
export default VirtualScroll;
