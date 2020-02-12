import React, { useState, useEffect } from "react";
import "../declare_modules.d.ts";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TitleSlide } from "./TitleSlide";
import { ImageSlide } from "./ImageSlide";
import { ConclusionSlide } from "./ConclusionSlide";
import { PresentationTimer } from "./PresentationTimer";

export const Presentation = (props: any) => {
  const screenWidthSite = window.innerWidth;
  const screenHeightSite = window.innerHeight - 40;
  console.log("screenWidthSite :", screenWidthSite);
  const whileScreenSize = window.innerWidth * 6;
  console.log("whileScreenSize :", whileScreenSize);
  const [currentSlidePage, setCurrentSlidePage] = useState(1);
  const [positionSlide, setPositionSlide] = useState({
    width: `${whileScreenSize}px`,
    transform: `translateX(0px)`
  });
  const time = new Date();
  console.log("time0 :", props.length);
  console.log("time1 :", time.getSeconds());
  time.setSeconds(time.getSeconds() + props.length);
  console.log("time2 :", time.getSeconds());
  const moveNextSlide = () => {
    console.log("BEFORE IF currentSlidePage :", currentSlidePage);
    if (currentSlidePage < 1 || currentSlidePage > 6) return;
    setCurrentSlidePage(currentSlidePage + 1);
    console.log("AFTER IF currentSlidePage :", currentSlidePage);
    setPositionSlide({
      width: `${whileScreenSize}px`,
      transform: `translateX(-${currentSlidePage * screenWidthSite}px)`
    });
    console.log("currentSlidePage :", currentSlidePage);
  };

  const movePreviousSlide = () => {
    if (currentSlidePage < 1 || currentSlidePage > 6) return;
    setCurrentSlidePage(currentSlidePage - 1);
    console.log("currentSlidePage :", currentSlidePage);
    setPositionSlide({
      width: `${whileScreenSize}px`,
      transform: `translateX(-${(currentSlidePage - 1) * screenWidthSite}px)`
    });
  };
  // useEffect(() => {
  // document.body.addEventListener(
  //   "click",
  //   e => {
  //     e.preventDefault();
  //     console.log("click :");
  //     moveNextSlide();
  //   },
  //   false
  // );
  //  Promise.all([
  //   fetch("https://source.unsplash.com/random?sig=1"),
  //   fetch("https://source.unsplash.com/random?sig=2"),
  //   fetch("https://source.unsplash.com/random?sig=3"),
  //   fetch("https://source.unsplash.com/random?sig=4")
  // ]).then(result => {
  //   setImages(result);
  //   console.log("images1 :", images);
  // });
  // }, [currentSlidePage]);

  return (
    <>
      <div className="presentation">
        <PresentationTimer
          goBackToMain={props.goBackToMain}
          expiryTimestamp={time}
          length={props.length}
          isAutoRun={props.isAutoRun}
          moveNextSlide={moveNextSlide}
          movePreviousSlide={movePreviousSlide}
          currentSlidePage={currentSlidePage}
        />
      </div>
      <div className="slides" style={positionSlide}>
        <TitleSlide
          title={props.title}
          width={screenWidthSite}
          height={screenHeightSite}
        />
        <ImageSlide width={screenWidthSite} height={screenHeightSite} />
        <ImageSlide width={screenWidthSite} height={screenHeightSite} />
        <ImageSlide width={screenWidthSite} height={screenHeightSite} />
        <ConclusionSlide width={screenWidthSite} height={screenHeightSite} />
        <ImageSlide width={screenWidthSite} height={screenHeightSite} />
      </div>
    </>
  );
};
