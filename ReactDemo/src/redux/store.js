import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { userFormReducer, usersReducer } from "./reducers";
import { logMiddleware } from "./logger";

const rootReducer = combineReducers({
  users: usersReducer,
  userForm: userFormReducer,
});

// const a = () => {
//   return 1;
// };

// const b = (i) => {
//   return i + 1;
// };

// const output = compose(b, a);

// console.log(output());

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logMiddleware))
);
