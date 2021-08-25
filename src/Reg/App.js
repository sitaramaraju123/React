import React from "react";
import Addemp from "./Addemp";
import Emp from "./Emp";
import { EmpContext } from "./EmpContext";
import Nav from "./Nav";
export default function App() {
  return (
    <EmpContext>
      <div>
        <Nav />
        <Addemp />
        <Emp />
      </div>
    </EmpContext>
  );
}
