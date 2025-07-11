import { renderEmojiList } from "./render-emoji-list.js";
import { getCategoryById } from "./store.js";

export function handleChangeActiveTab(event) {
  const selectedButton = event.currentTarget;
  const allButtons = document.querySelectorAll(".btn-category");

  allButtons.forEach((btn) => btn.classList.remove("active"));
  selectedButton.classList.add("active");

  const categoryId = selectedButton.getAttribute("data-category");
  const category = getCategoryById(categoryId);

  if (category) {
    renderEmojiList({ data: category.emojis });
  }
}
