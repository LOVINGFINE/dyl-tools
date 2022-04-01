import { ReactElement, FC, MouseEvent } from "react";
import "../styles/event.scss";
/**
 * @interface props
 */
export interface EventHighLightProps {
    children?: ReactElement;
    perfix?: string;
    onClick?(e: MouseEvent): void;
}
declare const EventHighLight: FC<EventHighLightProps>;
export default EventHighLight;
