import React, { useImperativeHandle, useRef } from "react";

export let Button = ({ text, handleClick }, ref) => {
  //   const inputRef = useRef();
  //   useImperativeHandle(ref, () => ({
  //     focus: () => {
  //       inputRef.current.focus();
  //     },
  //   }));
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
      <input type="text" ref={ref} />
    </div>
  );
};

Button = React.forwardRef(Button);
