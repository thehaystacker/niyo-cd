import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import app from "./App";
const rootReducer = combineReducers({
  app,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
