import { combineReducers } from "redux";
import incrementReducer from "./incrementreducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  incrementCount: incrementReducer,
  cartReducer,
});

export default rootReducer;
