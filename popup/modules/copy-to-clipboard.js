export async function copyToClipboard(value) {
  try {
    await navigator.clipboard.writeText(value);
    console.log("Emoji copied to clipboard:", value);
  } catch (error) {
    console.error("Failed to copy emoji to clipboard:", error);
  }
}
