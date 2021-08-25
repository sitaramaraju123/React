import React, { useState, useContext } from "react";
import { empContext } from "./EmpContext";

const Addemp = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [emp, setEmp] = useContext(empContext);

  const onSubmit = e => {
    e.preventDefault();
    setEmp(prevEmp => [...prevEmp, { name: name, age: age }]);
  };
  return (
    <center>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          name="age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </center>
  );
};

export default Addemp;
