import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import EventSystem from "./components/Events";
import EventSystem1 from "./components/Events1";
import EventSystem2 from "./components/Events2";
import EventSystem3 from "./components/Events3";
import Props, { PropsClass } from "./components/Props";
import Form from "./components/Form";
import Element from "./components/Element";
import CreateUser from "./CreateUser";
import Singup from "./components/Signup";
import List, { LifeCycle } from "./components/List";

// import { makeAdder } from "./module1";
// console.log(App());
// console.log(Lable());
// console.log(Text());
const userProps = {
  dangerouslySetInnerHTML: {
    __html: "<img src=x/ onerror='alert(document.cookie)'>",
  },
};

// makeAdder(3);

// let promise = fetch("https://www.abc.com");

// promise.then((r) => console.log(r)).catch((a) => console.log(a));

// let action = { payload: promise };

// action.payload.then(console.log).catch((e) => {
//   console.log(e);
//   return Promise.reject(e);
// });

const linkProps = "javascript: alert('hi')";
// ReactDOM.render(<a href={linkProps}>Link</a>, document.getElementById("root"));
// ReactDOM.render(<Props name="Janakiram" />, document.getElementById("root"));
// ReactDOM.render(<PropsClass />, document.getElementById("portal"));

const ListContainer = () => {
  const [values, setValues] = useState(["a", "b"]);

  return <List setValues={setValues} />;
};

class LifeCycleParent extends Component {
  state = { value: false };

  componentDidMount() {
    // setInterval(() => this.forceUpdate(), 100);
  }

  onClick = () => {
    this.setState({ value: !this.state.value });
  };

  onClick1() {
    console.log("onclick 1");
  }

  render() {
    return (
      <LifeCycle
        value={this.state.value}
        onClick={this.onClick}
        component={() => <Test />}
      />
    );
  }
}

class Test extends React.Component {
  componentDidMount() {
    console.log("test cdm");
  }
  componentWillUnmount() {
    console.log("test cwun");
  }

  render() {
    console.log("render test");
    return "test";
  }
}

// ReactDOM.render(
//   <Provider store={store}>
//     {/* <Singup
//       class="hell"
//       onerror={() => console.log("oops")}
//       nan={0 / 0}
//       bool={false}
//       obj={{}}
//     /> */}
//     {/* <EventSystem2 /> */}
//     <ListContainer />
//   </Provider>,
//   document.getElementById("root")
// );

const message = null;
const element = React.createElement(
  "div",
  { className: "container", id: 1, name: "ram" },
  [
    {
      $$typeof: Symbol.for("react.element"),
      type: "p",
      ref: null,
      props: {
        dangerouslySetInnerHTML: {
          __html: `<span>Hello dangerouslySetInnerHTML</span>
          "<h1>Arbitrary HTML</h1>
          <script>alert('No CSP Support :(')</script>
          <img onerror="alert(document.cookie)" src="/" />
          `,
        },
      },
    },
    {
      $$typeof: Symbol.for("react.element"),
      type: "p",
      ref: null,
      props: {
        dangerouslySetInnerHTML: {
          __html: `<span>Hello dangerouslySetInnerHTML</span>
          "<h1>Arbitrary HTML</h1>
          <script>alert('No CSP Support :(')</script>
          <img onerror="alert(document.cookie)" src="/" />
          `,
        },
      },
    },
  ]
);

// console.log(element);

const EL = (
  <div>
    <em>Hello DIV</em>
    <span>
      <p>Hello</p>
      {{
        $$typeof: Symbol.for("react.element"),
        type: "p",
        ref: null,
        props: {
          dangerouslySetInnerHTML: {
            __html: `<span>Hello dangerouslySetInnerHTML</span>
      "<h1>Arbitrary HTML</h1>
      <img onerror="console.log('malicious' + document.cookie)" src="/" />
      `,
          },
        },
      }}
    </span>
  </div>
);

const A = {
  $$typeof: Symbol.for("react.element"),
  type: "p",
  ref: null,
  props: {
    dangerouslySetInnerHTML: {
      __html: `<span>Hello dangerouslySetInnerHTML</span>
  "<h1>Arbitrary HTML</h1>
  <script>alert('No CSP Support :(')</script>
  <img onerror="console.log(document.cookie)" src="/" />
  `,
    },
  },
};

const b = {
  // $$typeof: Symbol.for("react.element"),
  type: "p",
  ref: null,
  props: {
    dangerouslySetInnerHTML: {
      __html: `<span>Hello dangerouslySetInnerHTML</span>
"<h1>Arbitrary HTML</h1>
<script>alert('No CSP Support :(')</script>
<img onerror="console.log(document.cookie)" src="/" />
`,
    },
  },
};
// console.log(new LifeCycleParent());
// console.log(<LifeCycleParent />);
// console.log("<EL/>", <EL />);
// console.log("EL", EL);

// console.log(ReactDOM.version);

const dom = {
  type: "span",
};

const SPAN = <dom.type>Hello span</dom.type>;
// console.log(SPAN);
// console.log(<SPAN />); // React.createElement(SPAN)
// const renderOutput = ReactDOM.render(
//   dom.type,
//   document.getElementById("root"),
//   () => console.log("rendered DOM")
// );
// console.log(renderOutput);

const Checkbox = (
  <div>
    <input type="checkbox" id="input-1" disabled />
    <label htmlFor="input-1" disabled style={{ cursor: "not-allowed" }}>
      INPUT CHECKBOX
    </label>
  </div>
);

const ElementsArray = [1, 2, 3, 4].map((e) => <li key={e}>{e}</li>);

console.log("ElementsArray", <ElementsArray />);
ReactDOM.render(<LifeCycleParent />, document.getElementById("root")); // React.createElement(EL)

// ReactDOM.render(
//   <div>
//     <input key="input-1" />
//   </div>,
//   document.getElementById("root")
// );

// setTimeout(
//   () =>
//     ReactDOM.render(
//       <div>
//         <p>Hello</p>
//         <input key="input-1" />
//       </div>,
//       document.getElementById("root")
//     ),
//   5000
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PropsClass />
//       {/* <PropsClass /> */}
//       {/* <Props name="Ram" /> */}
//       {/* <EventSystem /> */}
//       {/* <EventSystem1 /> */}
//       {/* <EventSystem2 /> */}
//       {/* <EventSystem3 /> */}
//       {/* <iframe title="sample">IFrame</iframe> */}
//       {/* {React.createElement(
//         "div",
//         null,
//         React.createElement("p", null, "Hello World")
//       )} */}
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// ReactDOM.render(<div>Render 1</div>, document.getElementById("root"));

// const TestPortal = function () {
//   return ReactDOM.createPortal(
//     <button>Hello World Portal</button>,
//     document.querySelector("#portal")
//   );
// };

// const inner = (
//   <div
//     dangerouslySetInnerHTML={{
//       __html: `<img src="#" onerror="alert('Hacked')"/>`,
//     }}
//   ></div>
// );

// const jsxElements = <div>This is valid HTML &amp; JSX at the same time.</div>;

// const element = (
//   <React.Fragment key={1}>
//     <button>Hello World</button>
//     <button>Hello World1</button>
//     <TestPortal />
//   </React.Fragment>
// );

// const stringDiv = (
//   <div>{`<script>console.log('hey')</script><img src="#" onerror="alert('Hacked')"/>`}</div>
// );

// ReactDOM.render(jsxElements, document.querySelector("#root"));
