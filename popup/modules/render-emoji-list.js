import { copyToClipboard } from "./copy-to-clipboard.js";

export function renderEmojiList({ data }) {
  const emojiList = document.getElementById("emoji-list");
  emojiList.innerHTML = "";

  data.forEach((item) => {
    const button = document.createElement("button");
    button.classList.add("emoji-btn");
    button.textContent = item.emoji;
    button.addEventListener("click", () => copyToClipboard(item.emoji));

    emojiList.appendChild(button);
  });
}
