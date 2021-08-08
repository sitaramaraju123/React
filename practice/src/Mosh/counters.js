import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, Counters, onDelete, onIncrement, onDecrement } =
      this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {Counters.map(Count => (
          <Counter
            key={Count.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={Count}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
