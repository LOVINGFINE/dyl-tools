var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { jsx as _jsx } from "react/jsx-runtime";
import { Component, Fragment } from "react";
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    /**
     * @constructor state
     */
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            error: false,
            message: "",
        };
        return _this;
    }
    /**
     * @public hooks
     */
    ErrorBoundary.prototype.componentDidCatch = function () {
        this.setState({
            error: true,
            message: "当前内容渲染错误",
        });
    };
    ErrorBoundary.prototype.render = function () {
        var _a = this.state, error = _a.error, message = _a.message;
        var children = this.props.children;
        return _jsx(Fragment, { children: error ? _jsx("p", { children: message }) : children });
    };
    return ErrorBoundary;
}(Component));
export default ErrorBoundary;
