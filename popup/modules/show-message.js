export function showMessage(message) {
  const messageElement = document.getElementById("copy-message");
  messageElement.textContent = message;
  messageElement.classList.remove("hidden");

  // Hide the message after 2 seconds
  setTimeout(() => messageElement.classList.add("hidden"), 2000);
}
