import { copyEmojiToClipboard } from "./copy-emoji-to-clipboard.js";
import { showMessage } from "./show-message.js";
import { addRecentEmoji } from "./store.js";

export function renderEmojiList({ data }) {
  const emojiList = document.getElementById("emoji-list");
  emojiList.innerHTML = "";

  data.forEach((item) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-emoji");
    button.textContent = item.emoji;

    button.addEventListener("click", () => {
      copyEmojiToClipboard(item.emoji);
      showMessage(`${item.emoji} copiado para a área de transferência!`);
      addRecentEmoji(item);
    });

    emojiList.appendChild(button);
  });
}
