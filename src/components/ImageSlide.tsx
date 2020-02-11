import React, { useState } from "react";
import "../declare_modules.d.ts";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const ImageSlide = (props: any) => {
  const [imageSrc, setImageSrc] = useState(
    `https://source.unsplash.com/random?sig=${Math.floor(Math.random() * 100)}`
  );

  const style = { width: `${props.width}px`, height: `${props.height}px` };
  return (
    <div className="slide" style={style}>
      <img src={imageSrc} alt="slide" />
    </div>
  );
};
