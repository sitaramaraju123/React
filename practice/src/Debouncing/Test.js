import React, { useState } from "react";

function Test() {
  const [state, setState] = useState("");
  //   let [count, setCount] = useState(0);

  let Debounce = e => {
    setState(e.target.value);
    // setCount(PrevCount => PrevCount + 1);
    console.log("Fetching data...", state);
  };

  const deBouncecheck = function (fn, d) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        Debounce.apply(this, arguments);
      }, d);
    };
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter any thinks"
        onKeyUp={deBouncecheck(Debounce, 500)}
      />
    </div>
  );
}

export default Test;
