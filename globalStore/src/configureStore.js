import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // composeWithDevTools(),
  composeEnhancer(applyMiddleware(logger))
);

export default configureStore;
