import React from "react";
import Login from "login/Login";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const cartState = useSelector((state) => state.cartReducer);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" style={{ fontSize: "25px" }} href="/">
          <i
            className="fa fa-mobile fa-2x"
            style={{ color: "gold", position: "relative", top: "7px" }}
            aria-hidden="true"
          ></i>{" "}
       Apple Store
        </a>
        <div className="ml-auto">
          <i
            className="fa fa-shopping-cart"
            onClick={() => navigate("/cart")}
            style={{
              color: "white",
              fontSize: "30px",
              position: "relative",
              top: "10px",
              cursor: "pointer",
            }}
            id="cart"
          ></i>
          <span
            id="cart-badge"
            className="badge"
            style={{
              background: "gold",
              position: "relative",
              right: "15px",
              bottom: "10px",
              cursor: "pointer",
            }}
          >
            {cartState.length}
          </span>
          <button className="btn btn-dark" id="back-button" hidden>
            Back
          </button>
          <button
            className="btn btn-dark"
            id="login-button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button className="btn btn-dark" id="logout-button" hidden>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
