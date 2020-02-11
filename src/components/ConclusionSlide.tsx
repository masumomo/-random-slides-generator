import React from "react";
import "../declare_modules.d.ts";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const ConclusionSlide = (props: any) => {
  const style = { width: `${props.width}px`, height: `${props.height}px` };
  return (
    <div className="slide conclusion-slide" style={style}>
      <h2>In conclusion...</h2>
    </div>
  );
};
