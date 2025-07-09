import { emojiCategories } from "./data/emojis-categories.js";

function renderEmojiList({ categoryIndex }) {
  const data = emojiCategories[categoryIndex].emojis;
  const emojiList = document.getElementById("emoji-list");

  emojiList.innerHTML = "";

  data.forEach((item) => {
    const button = document.createElement("button");
    button.classList.add("emoji-btn");
    button.textContent = item.emoji;

    emojiList.appendChild(button);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderEmojiList({ categoryIndex: 0 });
});
