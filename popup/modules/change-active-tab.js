import { emojiCategories } from "../data/emojis.js";
import { renderEmojiList } from "./render-emoji-list.js";

export function changeActiveTab(event) {
  const selectedButton = event.currentTarget;
  const allButtons = document.querySelectorAll(".category-item");

  allButtons.forEach((btn) => btn.classList.remove("active"));
  selectedButton.classList.add("active");

  const categoryId = selectedButton.getAttribute("data-category");
  const category = emojiCategories.find(
    (category) => category.id === categoryId
  );

  if (category) {
    renderEmojiList({ data: category.emojis });
  }
}
