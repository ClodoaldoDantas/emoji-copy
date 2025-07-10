import { emojiCategories } from "./data/emojis.js";
import { renderCategories } from "./scripts/render-categories.js";
import { renderEmojiList } from "./scripts/render-emoji-list.js";
import { searchEmoji } from "./scripts/search-emoji.js";

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderEmojiList({ data: emojiCategories[0].emojis });
});

document.getElementById("emoji-search").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const searchTerm = event.target.value.trim().toLowerCase();
    searchEmoji(searchTerm);
  }
});
