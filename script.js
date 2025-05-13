// Function to trigger animation
document.getElementById("animateBtn").addEventListener("click", function () {
  const box = document.getElementById("box");
  box.classList.toggle("animate");
});

// Save name to localStorage
document.getElementById("saveBtn").addEventListener("click", function () {
  const name = document.getElementById("username").value;
  localStorage.setItem("userName", name);
  showGreeting();
});

// Function to show greeting
function showGreeting() {
  const name = localStorage.getItem("userName");
  if (name) {
    document.getElementById("greeting").textContent = `Hello, ${name}!`;
  }
}

// Load greeting on page load
window.onload = showGreeting;
