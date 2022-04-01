import React, { ReactElement, FC, ReactNode } from "react";
import "../styles/modal.scss";
declare const Modal: FC<ModalProps>;
export interface ModalProps {
    children?: React.ReactElement | React.ReactElement[] | string;
    center?: boolean;
    footer?: null | ReactElement;
    visible?: boolean;
    zIndex?: number;
    width?: number;
    height?: number;
    close?: boolean | ReactNode;
    onClose?(): void;
    maskClose?: boolean;
    mask?: boolean;
    prefix?: string;
    placement?: "left" | "top" | "right" | "bottom" | "bottom-right" | "bottom-left" | "top-left" | "top-right";
}
export default Modal;
