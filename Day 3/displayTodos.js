export function displayTodos(data) {
  const container = document.getElementById("todosContainer");
  container.innerHTML = "";

  data.slice(0, 20).forEach(todo => {
    const item = document.createElement("div");
    item.style.margin = "0.5rem 0";
    item.innerHTML = `
      <strong>${todo.title}</strong> - 
      ${todo.completed ? "✅ Completed" : "❌ Not Completed"}
    `;
    container.appendChild(item);
  });
}