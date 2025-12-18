import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`);
    }
  }, [count]); // ✅ runs only when count changes

  return (
    <div>
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;