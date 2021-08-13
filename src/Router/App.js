import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./About";
import Header from "./Header/Header";
import Home from "./Home";
import Products from "./Products";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Products" component={Products} />
            <Route path="/About" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
