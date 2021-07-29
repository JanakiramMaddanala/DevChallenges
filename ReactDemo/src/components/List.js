import React, { useState, useEffect, Component, PureComponent } from "react";

// import "../module2";
// import "../module2";
// import "../module2";

const List = React.memo((props) => {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <div>
      <div>Hello</div>
      <button onClick={() => props.setValues([1, 2, 3])}>Change List</button>
    </div>
  );
});

export default List;

// import { Component } from "react";

// export default class List extends Component {
//   render() {
//     console.log(this);
//     if (true) {
//     }
//     return <div>Hello List</div>;
//   }
// }

export class LifeCycle extends PureComponent {
  constructor(props) {
    super(props);
    console.log("in constructor");
  }

  componentDidMount() {
    console.log("in componentDidMount");
  }

  getSnapshotBeforeUpdate() {
    console.log("in getSnapshotBeforeUpdate");
    return { snap: 1 };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("in componentDidUpdate");
    console.log(prevProps, prevState, snapshot);
    console.log(this.props.onClick === prevProps.onClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, this.props, nextState);
    console.log("in shouldComponentUpdate");
    console.log(this.props.onClick === nextProps.onClick);

    return true;
  }

  componentWillReceiveProps(nextProps) {
    console.log("in componentWillReceiveProps", nextProps);
  }

  static getDerivedStateFromProps(props) {
    // console.log(props);
    console.log("in getDerivedStateFromProps", props);
    return { s: props };
  }

  render() {
    console.log("in render", this.props);
    console.log(<this.props.component />);
    return (
      <div>
        <button onClick={this.props.onClick}>Click</button>
        LifeCycle {String(this.props.value)}
        {{
          $$typeof: Symbol.for("react.element"),
          type: "p",
          ref: null,
          props: {
            dangerouslySetInnerHTML: {
              __html: `<span>Hello dangerouslySetInnerHTML</span>
          "<h1>Arbitrary HTML</h1>
          `,
            },
          },
        }}
        {<this.props.component />}
      </div>
    );
  }
}
