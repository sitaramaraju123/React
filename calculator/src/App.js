import React from "react";
// import reactDom from "react-dom";
import "./App.css";

function App() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h2", null, "Calculator"),
    React.createElement("input", { className: "screen", name: "screen" }),
    React.createElement(
      "table",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button",
            type: "button",
            value: "C"
          })
        ),
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button",
            type: "button",
            value: "<"
          })
        ),
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button operator",
            type: "button",
            value: "%"
          })
        ),
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button operator",
            type: "button",
            value: "/"
          })
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button",
            type: "button",
            value: "7"
          })
        ),
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button",
            type: "button",
            value: "8"
          })
        ),
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button",
            type: "button",
            value: "9"
          })
        ),
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button operator",
            type: "button",
            value: "*"
          })
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button",
            type: "button",
            value: "4"
          })
        ),
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button",
            type: "button",
            value: "5"
          })
        ),
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button",
            type: "button",
            value: "6"
          })
        ),
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button operator",
            type: "button",
            value: "-"
          })
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button",
            type: "button",
            value: "1"
          })
        ),
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button",
            type: "button",
            value: "2"
          })
        ),
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button",
            type: "button",
            value: "3"
          })
        ),
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button operator",
            type: "button",
            value: "+"
          })
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          {
            colSpan: "2"
          },
          React.createElement("input", {
            className: "button",
            id: "zero",
            type: "button",
            value: "0"
          })
        ),
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button",
            type: "button",
            value: "."
          })
        ),
        React.createElement(
          "td",
          null,
          React.createElement("input", {
            className: "button operator",
            type: "button",
            value: "="
          })
        )
      )
    )
  );
}

export default App;
