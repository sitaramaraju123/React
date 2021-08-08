// import { react } from "@babel/types";
import React from "react";

const HelloJava = () => {
  return React.createElement(
    "div",
    { id: "name" },
    React.createElement("h1", null, "Hello Ramaraju")
  );
};

export default HelloJava;
