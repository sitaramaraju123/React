import React from "react";
import ReactDOM from "react-dom";
import Fav from "./Fav/fav";
import store from "./Fav/store";
import "./index.css";
// import store from "./Login/store";
import { Provider } from "react-redux";
// import App from "./Reg/App";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <App /> */}
    {/* </Provider> */}
    <Provider store={store}>
      <Fav />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
