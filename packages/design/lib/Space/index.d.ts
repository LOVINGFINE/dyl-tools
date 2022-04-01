import React, { ReactElement, FC } from "react";
import "../styles/space.scss";
declare const Space: FC<SpaceProps>;
export interface SpaceProps {
    children?: ReactElement | ReactElement[];
    style?: React.CSSProperties;
    direction?: "row" | "column";
    prefix?: string;
}
export default Space;
