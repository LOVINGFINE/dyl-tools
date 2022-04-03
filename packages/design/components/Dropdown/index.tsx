/*
 * Created by zhangq on 2022/04/03
 * Dropdown 组件
 */
import { ReactElement, FC, useEffect, useState } from "react";
import "../styles/dropdown.scss";

const Dropdown: FC<DropdownProps> = ({
  prefix,
  children,
}: DropdownProps): ReactElement => {
  /**
   * @method
   */
  const onClick = (e: any) => {
    console.log(e);
  };
  const onMouseEnter = (e: any) => {
    console.log(e);
  };

  /** render */
  return (
    <div
      className={`${prefix}-dropdown`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

/**
 * @interface props
 */
export interface DropdownProps {
  prefix?: string;
  children: string | ReactElement;
}

export default Dropdown;
