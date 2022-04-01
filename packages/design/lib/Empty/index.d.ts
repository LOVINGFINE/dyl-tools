import { ReactElement, FC, CSSProperties } from "react";
import "../styles/empty.scss";
declare const Empty: FC<EmptyProps>;
/**
 * @interface props
 */
export interface EmptyProps {
    children?: ReactElement;
    style?: CSSProperties;
}
export default Empty;
