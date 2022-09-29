import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartHome from "./components/cartHome/CartHome";
import globalStore from "globalStore/Store";
import { Provider } from "react-redux";
import PaymentHome from "./components/cartHome/PaymentHome";

import "./index.css";

const App = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<CartHome />} />
      <Route path="/payment" element={<PaymentHome />} />
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
