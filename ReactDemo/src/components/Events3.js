import React from "react";

const EventSystem3 = () => {
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

export default EventSystem3;
