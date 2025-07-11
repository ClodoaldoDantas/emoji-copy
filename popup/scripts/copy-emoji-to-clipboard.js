export async function copyEmojiToClipboard(value) {
  try {
    await navigator.clipboard.writeText(value);
  } catch (error) {
    console.error("Failed to copy emoji to clipboard:", error);
  }
}
