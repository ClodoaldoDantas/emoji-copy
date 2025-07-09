import { emojiCategories } from "./modules/emojis.js";
import { renderEmojiList } from "./modules/dom.js";

document.addEventListener("DOMContentLoaded", () => {
  renderEmojiList({ data: emojiCategories[0].emojis });
});
