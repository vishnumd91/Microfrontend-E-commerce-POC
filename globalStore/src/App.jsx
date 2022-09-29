import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "./actions";
import "./index.css";

const App = () => {
  const states = useSelector((state) => state.incrementCount);
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch(action.incrementAction());
  };
  console.log(states);

  return (
    <div className="container">
      <div>Name: globalStore</div>
      <div>Framework:{states}</div>
      <button onClick={addCount}>Increment</button>
    </div>
  );
};

export default App;
