import { ReactElement, FC } from "react";
import "../styles/menu.scss";
/**
 * @interface props
 */
export interface MenuProps {
    dataSource: MenuItemType[];
    selectKeys: string[];
    onClick?(e: MenuItemType): void;
    prefix?: string;
}
export interface MenuItemType {
    key: string;
    title?: string;
    icon?: string | ReactElement;
    disibled?: boolean;
    children?: MenuItemType[];
    prefix?: string;
}
export declare const Menu: FC<MenuProps>;
export default Menu;
