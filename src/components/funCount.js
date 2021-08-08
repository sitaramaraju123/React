import React, { useState } from "react";

function FunCount() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <div>Count - {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default FunCount;
