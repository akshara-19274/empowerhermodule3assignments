import React, { useState } from "react";
import TodosList from "./TodosList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todos Cleanup Demo</h1>
      <button onClick={() => setShowTodos(false)}>Unmount Todos</button>
      {showTodos && <TodosList />}
    </div>
  );
}

export default App;