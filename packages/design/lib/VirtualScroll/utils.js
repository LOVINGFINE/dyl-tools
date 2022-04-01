import { cloneElement } from "react";
/*** @methods */
export function reduceChildrenSource(dataSource, options) {
    var className = options.className, scrollHeight = options.scrollHeight, scrollTop = options.scrollTop, extra = options.extra;
    var start = scrollTop - extra > 0 ? scrollTop - extra : 0;
    var end = start + scrollHeight + extra * 2;
    var targets = [];
    for (var index = 0; index < dataSource.length; index++) {
        var _a = dataSource[index], child = _a.child, offset = _a.offset;
        var y = offset.y, height = offset.height;
        var displayY = y + height;
        if (!(displayY < start || y > end)) {
            targets.push(cloneElement(child, {
                className: className,
                style: {
                    transform: "translate(".concat(offset.x, "px,").concat(offset.y, "px)"),
                },
            }));
        }
    }
    return targets;
}
