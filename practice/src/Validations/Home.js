import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Home extends Component {
  state = {
    out: false
  };
  render() {
    if (this.state.out === true) return <Redirect to={"/Logout"} />;
    return (
      <div>
        <h1>Dash board</h1>
        <button onClick={() => this.setState({ out: true })}>LogOut</button>
      </div>
    );
  }
}

export default Home;
