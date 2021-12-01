"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const DynamicRouteProvider = ({ routes, }) => {
    const render = (list) => {
        return list.map((ele, i) => {
            const LazyComponent = react_1.lazy(() => Promise.resolve().then(() => __importStar(require(`@/${ele.component}`))));
            return (jsx_runtime_1.jsx(react_router_dom_1.Route, Object.assign({ path: ele.path || "*", element: jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: ele.routes ? (jsx_runtime_1.jsx(LazyComponent, Object.assign({ routes: ele.routes, path: ele.path }, { children: jsx_runtime_1.jsx(react_router_dom_1.Outlet, {}, void 0) }), void 0)) : (jsx_runtime_1.jsx(LazyComponent, {}, void 0)) }, void 0) }, { children: ele.routes ? render(ele.routes) : undefined }), ele.name || "key-" + i));
        });
    };
    return jsx_runtime_1.jsx(react_router_dom_1.Routes, { children: render(routes) }, void 0);
};
exports.default = DynamicRouteProvider;
