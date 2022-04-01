/*
 * Created by zhangq on 2022/02/24
 * 点击高亮
 */
import React, { ReactElement, FC, MouseEvent, useRef } from "react";
import "../styles/event.scss";

/**
 * @interface props
 */
export interface EventHighLightProps {
  children?: ReactElement;
  perfix?: string;
  onClick?(e: MouseEvent): void;
}

const EventHighLight: FC<EventHighLightProps> = ({
  children,
  perfix = "dyl",
  onClick,
}: EventHighLightProps): ReactElement => {
  const ref: any = useRef(null);
  /**
   * @method
   */
  const start = ({ x, y }: { x: number; y: number }) => {
    // 开始点击
    console.log(ref, x, y);
    const div = document.createElement("div");
    div.style.width = "10px";
    div.style.height = "10px";
    document.body.appendChild;

    if (ref?.current?.appendChild) {
      ref?.current?.appendChild(div);
    }
  };
  const handleClick = (event: MouseEvent) => {
    const { nativeEvent } = event;
    if (onClick) {
      onClick(event);
    }
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;
    start({
      x,
      y,
    });
  };

  /** render */
  return (
    <div
      className={`${perfix}-touch-highlight`}
      ref={ref}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </div>
  );
};

export default EventHighLight;
