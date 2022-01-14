import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { lazy } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
export const DynamicRouteProvider = ({ routes, }) => {
    const render = (list) => {
        return list.map((ele, i) => {
            const LazyComponent = lazy(() => import(`@/${ele.component}`));
            return (_jsx(Route, Object.assign({ path: ele.path || "*", element: _jsx(_Fragment, { children: ele.routes ? (_jsx(LazyComponent, Object.assign({ routes: ele.routes, path: ele.path }, { children: _jsx(Outlet, {}, void 0) }), void 0)) : (_jsx(LazyComponent, {}, void 0)) }, void 0) }, { children: ele.routes ? render(ele.routes) : undefined }), ele.name || "key-" + i));
        });
    };
    return _jsx(Routes, { children: render(routes) }, void 0);
};
export default {
    DynamicRouteProvider,
};
