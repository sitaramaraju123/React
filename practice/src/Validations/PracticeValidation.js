import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./p.scss";

export const UseContext = React.createContext();
class PracticeValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      contact: "",
      hidden: true,
      formError: {}
    };
    // this.initialState = this.state;
  }

  handleFormValidation() {
    const { firstName, lastName, email, password, confirmPassword, contact } =
      this.state;
    let formError = {};
    let formIsValid = true;
    if (!firstName) {
      formIsValid = false;
      formError["firstName"] = `FirstName is Required`;
    } else if (!firstName.match("[A-Z][a-z]*")) {
      formIsValid = false;
      formError["firstName"] = `First Character should be Capital`;
    }
    if (!lastName) {
      formIsValid = false;
      formError["lastName"] = `LastName is Required`;
    } else if (!lastName.match("[A-Z][a-z]*")) {
      formIsValid = false;
      formError["lastName"] = `Last Character should be Capital`;
    }
    if (!email) {
      formIsValid = false;
      formError["email"] = `Email is Required`;
    } else if (!email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
      formIsValid = false;
      formError["email"] = `Email is Invalid`;
    }

    if (!password) {
      formIsValid = false;
      formError["password"] = `Password is required`;
    } else if (!password.match("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8}")) {
      formIsValid = false;
      formError["password"] =
        "Password must be with 1 Upper-case and atleast 1 number and min 8 letters";
    }
    if (!confirmPassword) {
      formIsValid = false;
      formError["confirmPassword"] = `ConfirmPassword is required`;
    } else if (confirmPassword !== password) {
      formIsValid = false;
      formError["confirmPassword"] = "Password Doesn't Match";
    }
    if (!contact) {
      formIsValid = false;
      formError["contact"] = `Contact is Required`;
    } else if (!contact.match("^\\d{10}$")) {
      formIsValid = false;
      formError["contact"] = `Contact should be numbers and 10 digits`;
    }
    this.setState({ formError: formError });
    return formIsValid;
  }

  onChange = (field, value) => {
    this.setState({ [field]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword, contact } =
      this.state;
    if (this.handleFormValidation()) {
      if (localStorage.getItem("signUp") == null) {
        localStorage.setItem("signUp", "[]");
      }
      let items = JSON.parse(localStorage.getItem("signUp"));
      items.push({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        contact
      });
      localStorage.setItem("signUp", JSON.stringify(items));
      alert("Registration success go to login");
      this.setState(Prevstate => {
        Prevstate.firstName = "";
        Prevstate.lastName = "";
        Prevstate.email = "";
        Prevstate.password = "";
        Prevstate.confirmPassword = "";
        Prevstate.contact = "";
      });
    }
  };

  passwordVisible = e => {
    e.preventDefault();
    this.setState({
      hidden: !this.state.hidden
    });
  };

  render() {
    const { firstName, lastName, email, password, confirmPassword, contact } =
      this.state.formError;
    console.log(this.state.firstName);

    return (
      <div className="ComponentC2" style={{ fontSize: "1rem" }}>
        <form className="form-box" onSubmit={this.onSubmit}>
          <h2 className="form-header center">Registration</h2>
          <div className="form-row">
            <label htmlFor="first-name" className="a-label">
              First Name:
            </label>
            <input
              type="text"
              id="first-name"
              value={this.state.firstName}
              onChange={e => this.onChange("firstName", e.target.value)}
              className={firstName ? "showError" : ""}
            />
            {firstName && <small>{firstName}</small>}
          </div>
          <div className="form-row center">
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              id="last-name"
              value={this.state.lastName}
              onChange={e => this.onChange("lastName", e.target.value)}
              className={lastName ? "showError" : ""}
            />
            {lastName && <small>{lastName}</small>}
          </div>
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
          <div className="form-row center">
            <label htmlFor="confirmPassword">confirmPassword:</label>
            <input
              type="password"
              id="confirmPassword"
              value={this.state.confirmPassword}
              onChange={e => this.onChange("confirmPassword", e.target.value)}
              className={confirmPassword ? "showError" : ""}
            />
            {confirmPassword && <small>{confirmPassword}</small>}
          </div>
          <div className="form-row center">
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              value={this.state.contact}
              onChange={e => this.onChange("contact", e.target.value)}
              className={contact ? "showError" : ""}
            />
            {contact && <small>{contact}</small>}
          </div>
          <div className="form-row">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div>
          <p>
            Already having account go to <Link to="/Login">Login</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default PracticeValidation;
//   return (
//     <div className="container">
//       <form onSubmit={this.onSubmit}>
//         <div className="form-control">
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={this.state.username}
//             onChange={this.onChange}
//             className={username ? " showError" : ""}
//           />
//           {username && (
//             <small style={{ color: "red", paddingBottom: 10 }}>
//               {username}
//             </small>
//           )}
//         </div>
//         <div className="form-control">
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={this.state.password}
//             onChange={this.onChange}
//             className={password ? "showError" : ""}
//           />
//           {password && (
//             <small style={{ color: "red", paddingBottom: 10 }}>
//               {password}
//             </small>
//           )}
//         </div>
//         <div className="form-control">
//           <input
//             type="password"
//             name="confirmpwd"
//             placeholder="Conform Password"
//             value={this.state.confirmpwd}
//             onChange={this.onChange}
//             className={confirmpwd ? "showError" : ""}
//           />
//           {confirmpwd && (
//             <small style={{ color: "red", paddingBottom: 10 }}>
//               {confirmpwd}
//             </small>
//           )}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
