import React, { useState } from "react";
import { connect } from "react-redux";
import { Request, Success, Failure } from "./action";

const Login = ({ Request, Success, Failure }) => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!name && !email && !password) {
      Request();
      Failure(error);
    } else {
      Success(name, email, password);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setpassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default connect(null, { Request, Success, Failure })(Login);
