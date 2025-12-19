import React, { useState } from "react";

function App() {
  // store color state, initial: red
  const [isRed, setIsRed] = useState(true);

  const handleToggle = () => {
    setIsRed((prev) => !prev);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          backgroundColor: isRed ? "red" : "blue",
          color: "white",
          padding: "20px",
          borderRadius: "8px",
          display: "inline-block",
        }}
      >
        This is a colored div
      </div>
      <br />
      <button
        onClick={handleToggle}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Toggle Color
      </button>
    </div>
  );
}

export default App;