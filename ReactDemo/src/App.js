import React from "react";
import CreateUser from "./CreateUser";
import { ErrorBoundary } from "./ErrorBoundary";
import { Lable } from "./Lable";
import Users from "./User";

function App() {
  return (
    <ErrorBoundary>
      <Lable />
      <div>
        ABC <span>Hi</span> 9230932
      </div>
      <Users />
      <CreateUser />
    </ErrorBoundary>
  );
}

export default App;
