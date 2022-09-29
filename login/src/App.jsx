import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginHome from "./components/loginHome/LoginHome";
import globalStore from "globalStore/Store";
import { Provider } from "react-redux";

import "./index.css";

const App = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<LoginHome />} />
    </Routes>
  </div>
);
ReactDOM.render(
  <Provider store={globalStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
