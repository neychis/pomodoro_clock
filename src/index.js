import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import Main from "./components/Main";

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
