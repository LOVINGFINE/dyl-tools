import { ReactElement, FC } from "react";
import "../styles/dropdown.scss";
declare const Dropdown: FC<DropdownProps>;
/**
 * @interface props
 */
export interface DropdownProps {
    prefix?: string;
    children: string | ReactElement;
}
export default Dropdown;
