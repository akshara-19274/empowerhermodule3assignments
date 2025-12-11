export function Navbar() {
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <ul style="display:flex; gap:1rem; list-style:none;">
      <li><a href="index.html">Home</a></li>
      <li><a href="signup.html">Signup</a></li>
      <li><a href="login.html">Login</a></li>
      <li><a href="todos.html">Todos</a></li>
    </ul>
  `;
  return nav;
}