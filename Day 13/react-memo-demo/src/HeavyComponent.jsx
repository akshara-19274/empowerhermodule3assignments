import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered");

  // Simulate heavy UI
  const items = Array.from({ length: 1000 }, (_, i) => (
    <div key={i}>Heavy Item {i}</div>
  ));

  return (
    <div style={{ marginTop: "20px", border: "1px solid gray", padding: "10px" }}>
      <h2>Heavy Component</h2>
      {items}
    </div>
  );
}

export default React.memo(HeavyComponent);