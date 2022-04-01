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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*
 * Created by zhangq on 2022/03/10
 * tree list
 */
import { useEffect } from "react";
import "../styles/VirtualTree.scss";
import Icon from "../Icon";
var TreeList = function (_a) {
    var dataSource = _a.dataSource, children = _a.children, config = _a.config, prefix = _a.prefix, expand = _a.expand, nodeClick = _a.nodeClick;
    /** LifeCycle */
    useEffect(function () {
        // init
    }, []);
    /** render */
    return (_jsx("ul", __assign({ className: "".concat(prefix, "-vc-tree-list"), style: { height: dataSource.length * config.height } }, { children: dataSource
            .filter(function (ele) {
            return ele.translateY >= config.start &&
                config.end + config.start > ele.translateY;
        })
            .map(function (item) {
            return (_jsxs("li", __assign({ onClick: function (e) {
                    expand(item);
                    if (nodeClick) {
                        nodeClick(e, item);
                    }
                }, onDoubleClick: function (e) {
                    if (nodeClick) {
                        nodeClick(e, item);
                    }
                }, className: "".concat(prefix, "-vc-tree-list-node"), style: {
                    paddingLeft: item.level * 14 + 6,
                    height: config.height,
                    transform: "translateY(".concat(item.translateY, "px)"),
                } }, { children: [_jsx("span", __assign({ onClick: function () { return expand(item); }, className: "".concat(prefix, "-vc-tree-list-node-expand"), style: {
                            transform: "rotate(".concat(item.isExpand ? "90deg" : 0, ")"),
                        } }, { children: !item.isLeaf && (_jsx(Icon, { name: "chevron-right", fontSize: 18, color: "var(--font-color-sec)" })) })), _jsx("div", __assign({ className: "".concat(prefix, "-vc-tree-list-node-title") }, { children: children ? children({ record: item }) : item.nodeKey }))] }), item.nodeKey));
        }) })));
};
export default TreeList;
