/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

//Stateless Functional Components
const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

//we can also use class Components Its up to u
// class Navbar extends Component {
//   render() {
//   }
// }

export default Navbar;
