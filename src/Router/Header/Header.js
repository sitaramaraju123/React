import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <div className="head">
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/About">About</Link>
      </div>
    );
  }
}

export default Header;
