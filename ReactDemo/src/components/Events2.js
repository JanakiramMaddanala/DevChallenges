import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const listeners = [
  (e) => {
    console.log(
      `[${e.eventPhase.toString()}] [DOM] InnerDIV Clicked capture: true`
    );
  },
  (e) => {
    console.log(`[${e.eventPhase.toString()}] [DOM] InnerDIV Clicked`);
  },
  (e) => {
    console.log(
      `[${e.eventPhase.toString()}] [DOM] OuterDIV Clicked capture: true`
    );
  },
  (e) => {
    console.log(`[${e.eventPhase.toString()}] [DOM] OuterDIV Clicked`);
  },
  (e) => {
    console.log(
      `[${e.eventPhase.toString()}] [DOM] Document Clicked capture: true`
    );
  },
  (e) => {
    console.log(`[${e.eventPhase.toString()}] [DOM] Document Clicked`);
  },
];

const EventSystem2 = () => {
  document.getElementById("root").addEventListener("click", (e) => {
    console.log(`[${e.eventPhase.toString()}] [DOM] Root Clicked 1`);
  });
  useEffect(() => {
    document
      .getElementById("innerDiv")
      .addEventListener("click", listeners[0], { capture: true });

    document.getElementById("innerDiv").addEventListener("click", listeners[1]);

    document
      .getElementById("outerDiv")
      .addEventListener("click", listeners[2], {
        capture: true,
      });

    document.getElementById("outerDiv").addEventListener("click", listeners[3]);

    document.addEventListener("click", listeners[4], { capture: true });

    document.addEventListener("click", listeners[5]);

    document.getElementById("root").addEventListener("click", (e) => {
      console.log(`[${e.eventPhase.toString()}] [DOM] Root Clicked 2 `);
    });

    document.getElementById("root").addEventListener(
      "click",
      (e) => {
        console.log(`[${e.eventPhase.toString()}] [DOM] Root Clicked 3`);
      },
      true
    );
    return () => {
      document.getElementById("innerDiv").removeEventListener(listeners[0]);
      document.getElementById("innerDiv").removeEventListener(listeners[1]);

      document.getElementById("outerDiv").removeEventListener(listeners[2]);
      document.getElementById("outerDiv").removeEventListener(listeners[3]);
      document.removeEventListener(listeners[4]);
      document.removeEventListener(listeners[5]);
    };
  }, []);

  return (
    <div
      id="outerDiv"
      onClick={() => console.log("[SYNTHETIC] OuterDiv Clicked")}
      onClickCapture={() =>
        console.log("[Capture][SYNTHETIC] OuterDiv Clicked")
      }
      style={{ border: "15px solid green" }}
    >
      Outer
      <div
        id="innerDiv"
        onClick={() => console.log("[SYNTHETIC] InnerDiv Clicked")}
        onClickCapture={() =>
          console.log("[Capture][SYNTHETIC] InnerDiv Clicked")
        }
        style={{ border: "15px solid blue" }}
      >
        <TestPortal />
        INNER
        <div style={{ border: "15px solid red" }}>
          ButtonWrapper
          <button
            onClick={(e) => {
              // e.stopPropagation();
              console.log(
                `${e.nativeEvent.eventPhase} [SYNTHETIC] Button Clicked`
              );
            }}
            onClickCapture={(e) =>
              console.log(
                `${e.nativeEvent.eventPhase} [Capture] [SYNTHETIC] Button Clicked`
              )
            }
          >
            Click
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventSystem2;

const TestPortal = function () {
  return ReactDOM.createPortal(
    <button onClick={() => console.log("Inside Portal")}>
      Hello World Portal
    </button>,
    document.querySelector("#portal")
  );
};
