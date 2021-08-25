import React, { useContext } from "react";
import "./Nav.css";
import { empContext } from "./EmpContext";
const Nav = () => {
  const [emp, setEmp] = useContext(empContext);
  return (
    <div className="nav">
      <h1>Regnent</h1>
      <p>List of Employee: {emp.length}</p>
    </div>
  );
};

export default Nav;
