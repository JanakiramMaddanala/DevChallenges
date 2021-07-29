import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const EventSystem1 = () => {
  document.getElementById("root").addEventListener("click", function Click1(e) {
    console.log(`[${e.eventPhase.toString()}] [DOM] Root Clicked 1`);
  });

  useEffect(() => {
    document
      .getElementById("innerDiv")
      .addEventListener("click", function b(e) {
        console.log(`[${e.eventPhase.toString()}] [DOM] InnerDIV Clicked`);
      });

    // document.getElementById("innerDiv").onclick = (e) => {
    //   console.log(`[${e.eventPhase.toString()}] [DOM] InnerDIV Clicked`);
    //   return false;
    // };

    document.getElementById("outerDiv").addEventListener("click", (e) => {
      console.log(`[${e.eventPhase.toString()}] [DOM] OuterDIV Clicked`);
    });

    document
      .getElementById("root")
      .addEventListener("click", function Click2(e) {
        console.log(`[${e.eventPhase.toString()}] [DOM] Root Clicked 2`);
      });

    document.addEventListener("click", (e) => {
      console.log(`[${e.eventPhase.toString()}] [DOM] Document Clicked`);
    });
  }, []);

  const buttonClick = (e) => {
    return console.log(
      `${e.nativeEvent.eventPhase} [SYNTHETIC] Button Clicked`
    );
  };

  return (
    <div
      id="outerDiv"
      onClick={(e) => {
        console.log("[SYNTHETIC] OuterDiv Clicked");
        // e.stopPropagation();
      }}
    >
      <div
        id="innerDiv"
        onClick={function a() {
          console.log("[SYNTHETIC] InnerDiv Clicked");
        }}
      >
        <div>
          <button onClick={buttonClick}>Click 1</button>
          <TestPortal />
        </div>
      </div>
    </div>
  );
};

export default EventSystem1;

const TestPortal = function () {
  return ReactDOM.createPortal(
    <button onClick={() => console.log("Inside Portal")}>
      Hello World Portal
    </button>,
    document.querySelector("#portal")
  );
};
