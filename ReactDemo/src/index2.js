import React, { useState, useEffect, useDebugValue, useRef } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Redirect,
  Route,
  Link,
  useRouteMatch,
  useLocation,
  withRouter,
  useParams,
  Switch,
} from "react-router-dom";
import { Button } from "./Button";

const About = (props) => {
  console.log("about", props);
  return <div>About US</div>;
};

const Contact = (props) => {
  console.log("contact", props);
  return (
    <div>
      Contact US
      <Header />
    </div>
  );
};

const ContactDetail = (props) => {
  const params = useParams();
  console.log(`contact${params.id}`, props);
  return <div>Contact Detail {params.id}</div>;
};
const Home = (props) => {
  const pageName = useHomePage();
  const ref = useRef();
  useDebugValue("ram");
  return (
    <div>
      {pageName || "Home"}{" "}
      <Button
        text="HOME"
        ref={ref}
        handleClick={() => {
          console.log(ref.current);
          ref.current.focus();
        }}
      />
    </div>
  );
};

const NotFound = () => {
  return <div>Page not found</div>;
};

let Header = (props) => {
  //   const location = useLocation();
  //   console.log(location);
  console.log("header", props);
  return (
    <div>
      Header
      <span>Span here</span> Doing good Hellow <Link to="/about"> About</Link>
    </div>
  );
};

Header = withRouter(Header);

const App = () => {
  console.log(
    "validReactElement",
    React.isValidElement({
      $$typeof: Symbol.for("react.element"),
      // type: "div",
      // ref: null,
    })
  );
  return (
    <div>
      <Switch>
        {/* <Header /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contact/:id" component={ContactDetail} />
        <Route component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Route path="/contact" component={ContactDetail} />
    </div>
  );
};

export default App;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

function useHomePage() {
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    setPageName("My Home");
  }, []);

  useDebugValue(pageName);

  return pageName;
}
