import { emojiCategories } from "./data/emojis.js";
import { renderCategories } from "./scripts/render-categories.js";
import { renderEmojiList } from "./scripts/render-emoji-list.js";

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderEmojiList({ data: emojiCategories[0].emojis });
});
