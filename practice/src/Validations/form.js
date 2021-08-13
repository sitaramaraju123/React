import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import PracticeValidation from "./PracticeValidation";
const Form = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Register" component={PracticeValidation} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </Router>
  );
};

export default Form;
