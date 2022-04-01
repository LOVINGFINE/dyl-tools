/*
 * Created by zhangq on 2021/07/02
 * Spaning
 */
import React, { ReactElement } from "react";
import "./loading.scss";
const Spaning = (): ReactElement => {
  /** render */
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={"loading-spaning"}>
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
export default Spaning;
