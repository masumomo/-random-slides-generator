import React, { useState, useEffect } from "react";
import "../declare_modules.d.ts";
import "../style.css";
import {
  TitleBar,
  Toolbar,
  ToolbarNav,
  ToolbarNavItem
} from "react-desktop/macOs";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTimer } from "react-timer-hook";

export const PresentationTimer = (props: any) => {
  const titleSlideDuration = 10;
  const conclusionSlideDuration = 15;
  const imageSlideDuration = Math.floor(
    (props.length - titleSlideDuration - conclusionSlideDuration) / 4
  );
  const slideChangeTiming = [titleSlideDuration];
  for (let i = 1; i <= 4; i++) {
    slideChangeTiming.push(titleSlideDuration + imageSlideDuration * i);
  }
  // console.log("slideChangeTiming :", slideChangeTiming);
  // console.log("slideChangeTiming :", slideChangeTiming);
  const { seconds, minutes, pause, resume } = useTimer({
    expiryTimestamp: props.expiryTimestamp,
    onExpire: () => {
      alert("TIME UP!!!!");
      props.goBackToMain();
    }
  });
  console.log("slideChangeTiming :", slideChangeTiming);
  console.log("currentSlidePage :", props.currentSlidePage);
  for (let i = 0; i <= props.currentSlidePage; i++) {
    const timer = props.length - (seconds + minutes * 60);
    console.log("timer:", timer);
    console.log(
      "slideChangeTiming[currentSlide] :",
      slideChangeTiming[props.currentSlidePage - 1]
    );
    if (
      props.isAutoRun &&
      slideChangeTiming[props.currentSlidePage - 1] < timer
    ) {
      console.log("changeSlide :", timer);
      props.moveNextSlide();
    }
  }
  return (
    <TitleBar
      height="40px"
      controls
      onCloseClick={() => console.info("onExpire called")}
      onMinimizeClick={() => console.log("Minimize window")}
      onMaximizeClick={() => console.log("Maximize window")}
    >
      <Toolbar>
        <ToolbarNav>
          <span>{`${minutes}:${seconds}`}</span>
          <ToolbarNavItem title="Pause" onClick={pause} />
          <ToolbarNavItem title="Resume" onClick={resume} />
          <ToolbarNavItem title="Previous" onClick={props.movePreviousSlide} />
          <ToolbarNavItem title="Next" onClick={props.moveNextSlide} />
          <ToolbarNavItem
            title="Stop"
            onClick={() => {
              alert("Stop presentation?");
              props.goBackToMain();
            }}
          />
        </ToolbarNav>
      </Toolbar>
    </TitleBar>
  );
};
