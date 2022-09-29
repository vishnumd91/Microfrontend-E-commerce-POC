import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import globalStore from "globalStore/Store";

import "./index.css";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";

const HomePage = React.lazy(() => import("./components/homepage/HomePage"));
const LoginHome = React.lazy(() => import("login/LoginHome"));
const CartHome = React.lazy(() => import("cart/CartHome"));
const PaymentHome = React.lazy(() => import("cart/PaymentHome"));

const App = () => (
  <div>
    <Suspense fallback={<ErrorComponent />}>
      <Routes>
        <Route exact path="/" element={<LoginHome />} />
        <Route path="/login" element={<LoginHome />} />
        <Route path="/cart" element={<CartHome />} />
        <Route path="/payment" element={<PaymentHome />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </Suspense>
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
