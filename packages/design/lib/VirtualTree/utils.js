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
/*** @methods */
export function reduceTreeSource(dataSource, options) {
    var results = [];
    var _a = options.expandKeys, expandKeys = _a === void 0 ? [] : _a, _b = options.childrenKey, childrenKey = _b === void 0 ? "children" : _b, height = options.height;
    var flatten = function (data, props) {
        var length = data.length;
        var _a = props.level, level = _a === void 0 ? 0 : _a, _b = props.parentKey, parentKey = _b === void 0 ? null : _b;
        for (var index = 0; index < length; index++) {
            var translateY = results.length * height;
            var item = data[index];
            var nodeKey = "".concat(parentKey ? parentKey + "-" : "").concat(level, "-").concat(index);
            var isLeaf = !item[childrenKey];
            var treeNode = __assign({ nodeKey: nodeKey, level: level, isLeaf: isLeaf, isExpand: !isLeaf && expandKeys.includes(nodeKey), translateY: translateY, parentKey: parentKey }, item);
            results.push(treeNode);
            if (Array.isArray(item[childrenKey]) && expandKeys.includes(nodeKey)) {
                flatten(item[childrenKey], {
                    parentKey: nodeKey,
                    level: level + 1,
                });
            }
        }
    };
    flatten(dataSource, {});
    return results;
}
