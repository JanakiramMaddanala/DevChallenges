import React from "react";

const Props = (props) => {
  //   props.name = "Janakiram";
  return <div>{props.name}</div>;
};

export default Props;

export class PropsClass extends React.Component {
  onInputClick = () => {};

  render = () => {
    return <div>PropsClass</div>;
  };
}
