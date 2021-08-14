import React, { useState } from "react";
import { connect } from "react-redux";
import { InAction } from "./action";
const Home = ({ InAction }) => {
  const [user, setName] = useState("");
  const [email, setemail] = useState("");
  return (
    <div>
      <center>
        <input
          type="text"
          placeholder="Username"
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={e => setemail(e.target.value)}
        />
        <button onClick={() => InAction(user, email)}>Submit</button>
      </center>
    </div>
  );
};
export default connect(null, { InAction })(Home);
