// Todos.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div>
      <h1>Todos</h1>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;