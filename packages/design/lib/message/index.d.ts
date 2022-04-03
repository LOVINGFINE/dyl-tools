/// <reference types="react" />
import "../styles/message.scss";
export interface MessageSuccessProps {
    zIndex?: number;
    prefix?: string;
    duration?: number;
}
export interface MessageRenderProps {
    prefix?: string;
    title?: string;
    type: "success" | "warning" | "error";
    duration?: number;
}
declare class Message {
    static success(title: string, options?: MessageSuccessProps): void;
    static warning(title: string, options?: MessageSuccessProps): void;
    static error(title: string, options?: MessageSuccessProps): void;
    static render({ title, prefix, type, duration, }: MessageRenderProps): void;
}
export declare const PropsTypes: ({ prefix }: MessageRenderProps) => JSX.Element;
export default Message;
