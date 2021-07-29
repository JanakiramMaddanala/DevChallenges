import React, { useEffect } from "react";

const EventSystem = () => {
  useEffect(() => {
    document.getElementById("innerDiv").addEventListener(
      "click",
      (e) => {
        console.log(
          `[${e.eventPhase.toString()}] [DOM] InnerDIV Clicked capture: true`
        );
      },
      { capture: true }
    );

    document.getElementById("innerDiv").addEventListener("click", (e) => {
      console.log(`[${e.eventPhase.toString()}] [DOM] InnerDIV Clicked`);
    });

    document.getElementById("outerDiv").addEventListener(
      "click",
      (e) => {
        console.log(
          `[${e.eventPhase.toString()}] [DOM] OuterDIV Clicked capture: true`
        );
      },
      {
        capture: true,
      }
    );

    document.getElementById("outerDiv").addEventListener("click", (e) => {
      console.log(`[${e.eventPhase.toString()}] [DOM] OuterDIV Clicked`);
    });

    document.addEventListener(
      "click",
      (e) => {
        console.log(
          `[${e.eventPhase.toString()}] [DOM] Document Clicked capture: true`
        );
      },
      { capture: true }
    );

    document.addEventListener("click", (e) => {
      console.log(`[${e.eventPhase.toString()}] [DOM] Document Clicked`);
    });
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
        INNER
        <div style={{ border: "15px solid red" }}>
          ButtonWrapper
          <button
            onClick={(e) =>
              console.log(
                `${e.nativeEvent.eventPhase} [SYNTHETIC] Button Clicked`
              )
            }
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

export default EventSystem;
