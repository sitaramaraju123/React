import React, { useState } from "react";
import { connect } from "react-redux";
import { InAction } from "./action";
const Home = ({ InAction }) => {
  const [user, setName] = useState("");
  return (
    <div>
      <center>
        <input
          type="text"
          placeholder="Enter any Thing"
          onChange={e => setName(e.target.value)}
        />
        <button onClick={() => InAction(user)}>Submit</button>
      </center>
    </div>
  );
};
export default connect(null, { InAction })(Home);
