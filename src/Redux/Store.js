import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Reducer from "./Reducer ";

const middleware = [thunk];
const store = createStore(Reducer, applyMiddleware(...middleware));

export default store;
