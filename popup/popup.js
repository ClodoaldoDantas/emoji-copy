import { getEmojiCategories } from "./scripts/store.js";
import { renderCategories } from "./scripts/render-categories.js";
import { renderEmojiList } from "./scripts/render-emoji-list.js";
import { handleSearchEmojis } from "./scripts/handle-search-emojis.js";

document.addEventListener("DOMContentLoaded", () => {
  const categories = getEmojiCategories();

  renderCategories({ data: categories });
  renderEmojiList({ data: categories[0].emojis });
});

document
  .getElementById("emoji-search")
  .addEventListener("keydown", handleSearchEmojis);
