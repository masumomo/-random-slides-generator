import React, { useState } from "react";
import "../declare_modules.d.ts";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const TitleSlide = (props: any) => {
  const style = { width: `${props.width}px`, height: `${props.height}px` };
  return (
    <div className="slide title-slide" style={style}>
      <h2>{props.title}</h2>
    </div>
  );
};
