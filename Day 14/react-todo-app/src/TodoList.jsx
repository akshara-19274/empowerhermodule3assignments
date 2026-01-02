import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "./todoService";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.slice(0, 20).map((todo) => ( // limit for readability
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>
              {todo.title} - {todo.completed ? "✅ Completed" : "❌ Pending"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;