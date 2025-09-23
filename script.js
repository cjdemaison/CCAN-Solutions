// Simple interactivity for the collaborative website

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("clickMe");
  const output = document.getElementById("output");

  if (button && output) {
    button.addEventListener("click", () => {
      output.textContent = "Button clicked! 🚀";
    });
  }

  // Footer dynamic year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
