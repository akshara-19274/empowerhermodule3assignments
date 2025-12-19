import React, { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function App() {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus((prev) => !prev);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleClick}>Toggle Status</button>
      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default App;