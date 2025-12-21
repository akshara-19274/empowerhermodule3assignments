import React from "react";
import Component2 from "./Component2";

export default function Component1() {
  const props = {
    a: "10",
    b: "72",
    c: "5",
    d: "58",
    e: "67",
    f: "24"
  };

  return (
    <div>
      <h2>Component1 (Root)</h2>
      <Component2 {...props} />
    </div>
  );
}