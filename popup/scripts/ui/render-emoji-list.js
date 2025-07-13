export function renderEmojiList({ categoryId, emojis, onClickEmoji }) {
  const emptyMessage = document.querySelector(".empty-message");
  const emojiList = document.getElementById("emoji-list");

  emojiList.innerHTML = "";

  if (emojis.length === 0) {
    emptyMessage.classList.add("visible");
    return;
  }

  emptyMessage.classList.remove("visible");

  emojis.forEach((emojiItem) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-emoji");
    button.textContent = emojiItem.emoji;

    button.addEventListener("click", () => onClickEmoji(categoryId, emojiItem));
    emojiList.appendChild(button);
  });
}
