export function Footer() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <p style="text-align:center; margin-top:2rem;">
      © 2025 My Todos App
    </p>
  `;
  return footer;
}