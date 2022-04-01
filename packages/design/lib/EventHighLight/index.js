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
 * Created by zhangq on 2022/02/24
 * 点击高亮
 */
import { useRef } from "react";
import "../styles/event.scss";
var EventHighLight = function (_a) {
    var children = _a.children, _b = _a.perfix, perfix = _b === void 0 ? "dyl" : _b, onClick = _a.onClick;
    var ref = useRef(null);
    /**
     * @method
     */
    var start = function (_a) {
        var _b, _c;
        var x = _a.x, y = _a.y;
        // 开始点击
        console.log(ref, x, y);
        var div = document.createElement("div");
        div.style.width = "10px";
        div.style.height = "10px";
        document.body.appendChild;
        if ((_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.appendChild) {
            (_c = ref === null || ref === void 0 ? void 0 : ref.current) === null || _c === void 0 ? void 0 : _c.appendChild(div);
        }
    };
    var handleClick = function (event) {
        var nativeEvent = event.nativeEvent;
        if (onClick) {
            onClick(event);
        }
        var x = nativeEvent.offsetX;
        var y = nativeEvent.offsetY;
        start({
            x: x,
            y: y,
        });
    };
    /** render */
    return (_jsx("div", __assign({ className: "".concat(perfix, "-touch-highlight"), ref: ref, onClick: function (e) { return handleClick(e); } }, { children: children })));
};
export default EventHighLight;
