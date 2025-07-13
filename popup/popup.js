import { store } from "./scripts/store.js";
import { copyEmojiToClipboard } from "./scripts/copy-emoji-to-clipboard.js";

import { renderCategories } from "./scripts/ui/render-categories.js";
import { renderEmojiList } from "./scripts/ui/render-emoji-list.js";
import { showMessage } from "./scripts/ui/show-message.js";
import { hideCategories } from "./scripts/ui/hide-categories.js";
import { debounce } from "./scripts/debounce.js";

const handleChangeCategory = (event) => {
  const selectedButton = event.currentTarget;
  const categoryId = selectedButton.getAttribute("data-category");
  store.setActiveCategory(categoryId);
};

const handleEmojiClick = (categoryId, emojiItem) => {
  copyEmojiToClipboard(emojiItem.emoji).then(() => {
    showMessage(`${emojiItem.emoji} copiado para a área de transferência!`);
    store.addEmojiToRecents(categoryId, emojiItem);
  });
};

const handleSearchEmojis = debounce((event) => {
  const searchTerm = event.target.value.trim().toLowerCase();
  store.searchEmojis(searchTerm);
}, 300);

const updateUI = (state) => {
  if (state.isSearching) {
    hideCategories();
  } else {
    renderCategories({
      categories: state.categories,
      activeIndex: state.activeCategoryIndex,
      onChangeCategory: handleChangeCategory,
    });
  }

  const category = state.categories[state.activeCategoryIndex];

  renderEmojiList({
    categoryId: category.id,
    emojis: state.isSearching ? state.filteredEmojis : category.emojis,
    onClickEmoji: handleEmojiClick,
  });
};

document.addEventListener("DOMContentLoaded", () => {
  store.emitter.subscribe(updateUI);
  store.init();
});

document
  .getElementById("emoji-search")
  .addEventListener("input", handleSearchEmojis);
