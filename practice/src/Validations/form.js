import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login";
import PracticeValidation from "./PracticeValidation";
const Form = () => {
  return (
    <Router>
      <div>
        <Route path="/Register" component={PracticeValidation} />
        <Route path="/Login" component={Login} />
      </div>
    </Router>
  );
};

export default Form;
