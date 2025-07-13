let timeoutId;

export function showMessage(message) {
  const messageElement = document.getElementById("copy-message");
  messageElement.textContent = message;
  messageElement.classList.remove("hidden");

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    messageElement.classList.add("hidden");
    timeoutId = null;
  }, 2000);
}
