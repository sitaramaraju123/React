import React, { useState, useContext, createContext } from "react";
import Emp from "./Emp";
import Nav from "./Nav";

export const empContext = createContext();

export const EmpContext = props => {
  const [emp, setEmp] = useState([
    {
      id: 2143,
      name: "Sitaramaraju",
      age: 25
    },
    {
      id: 1245,
      name: "Madhu",
      age: 26
    },
    {
      id: 21365,
      name: "Ashfaaq",
      age: 25
    }
  ]);
  return (
    <empContext.Provider value={[emp, setEmp]}>
      {props.children}
    </empContext.Provider>
  );
};
