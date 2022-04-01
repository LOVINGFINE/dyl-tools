import React, { FC, ReactNode } from "react";
import "../styles/drawer.scss";
declare const Drawer: FC<DrawerProps>;
export interface DrawerProps {
    children?: React.ReactElement | React.ReactElement[] | string;
    placement?: "left" | "top" | "right" | "bottom";
    style?: React.CSSProperties;
    visible?: boolean;
    zIndex?: number;
    width?: number;
    height?: number;
    close?: boolean | ReactNode;
    onClose?(): void;
    maskClose?: boolean;
    mask?: boolean;
    prefix?: string;
}
export default Drawer;
