import { renderEmojiList } from "./render-emoji-list.js";
import { getCategoryById, searchEmojis } from "./store.js";

export function handleSearchEmojis(event) {
  if (event.key !== "Enter") return;

  const searchTerm = event.target.value.trim().toLowerCase();
  const categoriesList = document.getElementById("emoji-categories");

  if (!searchTerm) {
    const activeElement = categoriesList.querySelector(".btn-category.active");
    const categoryId = activeElement.getAttribute("data-category");
    const category = getCategoryById(categoryId);

    categoriesList.classList.remove("hidden");
    renderEmojiList({ data: category.emojis });
  } else {
    const filteredEmojis = searchEmojis(searchTerm);

    categoriesList.classList.add("hidden");
    renderEmojiList({ data: filteredEmojis });
  }
}
