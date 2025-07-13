export function renderEmojiList({ categoryId, emojis, onClickEmoji }) {
  const emojiList = document.getElementById("emoji-list");
  emojiList.innerHTML = "";

  emojis.forEach((emojiItem) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-emoji");
    button.textContent = emojiItem.emoji;

    button.addEventListener("click", () => onClickEmoji(categoryId, emojiItem));
    emojiList.appendChild(button);
  });
}
