/* eslint-disable no-eval */
/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import "./cal.css";
class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleClick = e => {
    const value = e.target.value;
    switch (value) {
      case "C": {
        this.setState({ value: "" });
        break;
      }
      case "=": {
        this.setState({
          value: String(eval(this.state.value))
        });

        break;
      }
      case "<": {
        this.setState({
          value: this.state.value.slice(0, -1)
        });
        break;
      }

      default: {
        this.setState({
          value: (this.state.value += value)
        });
      }
    }
  };
  render() {
    return (
      <div className="container">
        <h2>Calculator</h2>
        <input
          className="screen"
          name="screen"
          value={this.state.value}
          readOnly
        />
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  className="op badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="C"
                />
              </td>
              <td>
                <input
                  className="op badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="<"
                />
              </td>
              <td>
                <input
                  className="op badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="%"
                />
              </td>
              <td>
                <input
                  className="op badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="/"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="num badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="7"
                />
              </td>
              <td>
                <input
                  className="num badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="8"
                />
              </td>
              <td>
                <input
                  className="num badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="9"
                />
              </td>
              <td>
                <input
                  className="op badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="*"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="num badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="4"
                />
              </td>
              <td>
                <input
                  className="num badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="5"
                />
              </td>
              <td>
                <input
                  className="num badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="6"
                />
              </td>
              <td>
                <input
                  className="op badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="-"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="num badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="1"
                />
              </td>
              <td>
                <input
                  className="num badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="2"
                />
              </td>
              <td>
                <input
                  className="num badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="3"
                />
              </td>
              <td rowSpan="2">
                <input
                  className="op badge-secondary"
                  style={{ height: "116px" }}
                  onClick={this.handleClick}
                  type="button"
                  value="+"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="num badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="0"
                />
              </td>
              <td>
                <input
                  className="num badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="."
                />
              </td>
              <td>
                <input
                  className="op badge-secondary"
                  onClick={this.handleClick}
                  type="button"
                  value="="
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calc;
