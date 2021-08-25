import React from "react";
const EmpDetails = ({ name, age }) => {
  return (
    <div>
      <center>
        <h3>Name:- {name}</h3>
        <h3>Age:-{age}</h3>
      </center>
    </div>
  );
};
export default EmpDetails;
