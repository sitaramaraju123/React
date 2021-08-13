import React, { Component } from "react";
import { connect } from "react-redux";
import { InAction } from "./action";
const About = ({ name }) => {
  return (
    <div>
      <center>
        <h1>
          About{" "}
          {name.map(e => (
            <div>{e}</div>
          ))}
        </h1>
      </center>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state
});
export default connect(mapStateToProps, { InAction })(About);
