import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      hidden: true,
      formError: {}
    };
  }

  handleFormValidation() {
    const { email, password } = this.state;
    let formError = {};
    let formIsValid = true;
    var userData = JSON.parse(localStorage.getItem("signUp"));
    let user = "";
    let pwd = "";
    if (!email && !password) {
      formIsValid = false;
      formError["email"] = `Email is Required`;
      formError["password"] = `Password is required`;
    } else {
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].email === email || userData[i].password === password) {
          user = userData[i].email;
          pwd = userData[i].password;
        }
      }
      if (email !== user) {
        formIsValid = false;
        formError["email"] = `Email doesn't Exist create your account`;
      } else if (!password) {
        formIsValid = false;
        formError["password"] = `Password is required`;
      } else if (pwd !== password) {
        formIsValid = false;
        formError["password"] = `Invalid creditionals`;
      }
    }
    this.setState({ formError: formError });
    return formIsValid;
  }
  onChange = (field, value) => {
    this.setState({ [field]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.handleFormValidation()) {
      alert("Login Success");
    }
  };

  passwordVisible = e => {
    e.preventDefault();
    this.setState({
      hidden: !this.state.hidden
    });
  };

  render() {
    const { email, password } = this.state.formError;
    return (
      <div className="ComponentC2" style={{ fontSize: "1rem" }}>
        <form className="form-box" onSubmit={this.onSubmit}>
          <h2 className="form-header center">Login</h2>
          <div className="form-row center">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={this.state.email}
              onChange={e => this.onChange("email", e.target.value)}
              className={email ? "showError" : ""}
            />
            {email && <small>{email}</small>}
          </div>
          <div className="form-row center">
            <label htmlFor="password">Password:</label>
            <input
              type={this.state.hidden ? "password" : "text"}
              id="password"
              value={this.state.password}
              onChange={e => this.onChange("password", e.target.value)}
              className={password ? "showError" : ""}
            />
            <span className="p-viewer">
              <i
                className={
                  this.state.hidden ? "far fa-eye-slash" : "far fa-eye"
                }
                onClick={this.passwordVisible}
              ></i>
            </span>
            {password && <small>{password}</small>}
          </div>

          <div className="form-row">
            <button type="submit">Submit</button>
          </div>
          <p>
            Create Account here <Link to="/Register">Sign up</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
