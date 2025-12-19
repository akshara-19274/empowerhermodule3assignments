import React from "react";

function TodoCard({ userId, title, completed }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px auto",
        padding: "10px",
        width: "60%",
        borderRadius: "6px",
        backgroundColor: completed ? "#d4edda" : "#f8d7da",
      }}
    >
      <h3>{title}</h3>
      <p>User ID: {userId}</p>
      <p>Status: {completed ? "Completed ✅" : "Not Completed ❌"}</p>
    </div>
  );
}

export default TodoCard;