import React, { Component } from "react";

class Like extends Component {
  render() {
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        className={!this.props.liked ? "far fa-heart" : "fas fa-heart"}
      ></i>
    );
  }
}

export default Like;
