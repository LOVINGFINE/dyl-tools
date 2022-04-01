import { Component, ReactElement } from "react";
export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    /**
     * @constructor state
     */
    private constructor();
    /**
     * @public hooks
     */
    componentDidCatch(): void;
    render(): JSX.Element;
}
/**
 * @interface props
 */
export interface ErrorBoundaryProps {
    children?: Component | ReactElement | string;
}
/**
 * @interface state
 */
export interface ErrorBoundaryState {
    error: boolean;
    message: string;
}
