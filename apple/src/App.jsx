import React from "react";
import ReactDOM from "react-dom";
import Apple from "./components/Apple";
import { Provider } from "react-redux";
import globalStore from "globalStore/Store";

const App = () => (
  <div>
    <Apple />
  </div>
);
ReactDOM.render(
  <Provider store={globalStore}>
    <App />
  </Provider>,
  document.getElementById("app")
);
