import { emojiCategories } from "../data/emojis.js";
import { renderEmojiList } from "./render-emoji-list.js";

export function searchEmoji(searchTerm) {
  const categoriesList = document.getElementById("emoji-categories");

  if (!searchTerm) {
    const activeElement = categoriesList.querySelector(".btn-category.active");
    const categoryId = activeElement.getAttribute("data-category");
    const category = emojiCategories.find((cat) => cat.id === categoryId);

    categoriesList.classList.remove("hidden");
    renderEmojiList({ data: category.emojis });
  } else {
    const allEmojis = emojiCategories.flatMap((category) => category.emojis);
    const filteredEmojis = allEmojis.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm)
        )
      );
    });

    categoriesList.classList.add("hidden");
    renderEmojiList({ data: filteredEmojis });
  }
}
