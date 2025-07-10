import { showMessage } from "./show-message.js";

export async function copyToClipboard(value) {
  try {
    await navigator.clipboard.writeText(value);
    showMessage(`${value} copiado para a área de transferência!`);
  } catch (error) {
    console.error("Failed to copy emoji to clipboard:", error);
  }
}
