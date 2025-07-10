import { emojiCategories } from "./data/emojis.js";
import { renderCategories } from "./modules/render-categories.js";
import { renderEmojiList } from "./modules/render-emoji-list.js";

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderEmojiList({ data: emojiCategories[0].emojis });
});
