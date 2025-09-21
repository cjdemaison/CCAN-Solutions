// Simple interactivity for the collaborative website

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("clickMe");
  const output = document.getElementById("output");

  button.addEventListener("click", () => {
    output.textContent = "Button clicked! 🚀";
  });
});
