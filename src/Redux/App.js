import React from "react";
import { connect } from "react-redux";
import { InAction } from "./Action";
import { DecAction } from "./Action";
const App = ({ local_variable, InAction, DecAction }) => {
  return (
    <div>
      <h1>
        <center>
          <h1>{local_variable}</h1>
          {/* We can create a arrow function inside of the onClick to send the user data to Action */}
          <button onClick={InAction}>Increment</button>
          <button
            disabled={local_variable === 0 ? "disabled" : ""}
            onClick={DecAction}
          >
            Decrement
          </button>
        </center>
      </h1>
    </div>
  );
};

const mapStateToProps = state => ({
  local_variable: state
});

export default connect(mapStateToProps, { InAction, DecAction })(App);
