import React, { useState, useContext } from "react";
import EmpDetails from "./EmpDetails";
import { empContext } from "./EmpContext";

const Emp = () => {
  const [emp, setEmp] = useContext(empContext);
  return (
    <div>
      {emp.map(details => (
        <EmpDetails name={details.name} age={details.age} key={details.id} />
      ))}
    </div>
  );
};
export default Emp;
