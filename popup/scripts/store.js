import { emojiCategories } from "../data/emojis.js";
import { Observable } from "./observable.js";

class Store {
  constructor() {
    this.state = {
      activeCategoryIndex: 0,
      categories: [...emojiCategories],
      isSearching: false,
      filteredEmojis: [],
    };

    this.emitter = new Observable();
  }

  #createRecentsCategory(emojis) {
    const recentsCategory = {
      id: "recents",
      icon: "clock",
      name: "Recentes",
      emojis,
    };

    this.state.categories.unshift(recentsCategory);
  }

  #getCategoryIndexById(categoryId) {
    return this.state.categories.findIndex((cat) => cat.id === categoryId);
  }

  init() {
    const recentsEmojisStorage = localStorage.getItem("@emoji-copy:recents");
    const recentsEmojis = recentsEmojisStorage
      ? JSON.parse(recentsEmojisStorage)
      : [];

    if (recentsEmojis.length > 0) {
      this.#createRecentsCategory(recentsEmojis);
    }

    this.emitter.notify(this.state);
  }

  setActiveCategory(categoryId) {
    const categoryIndex = this.#getCategoryIndexById(categoryId);

    if (
      categoryIndex !== -1 &&
      categoryIndex !== this.state.activeCategoryIndex
    ) {
      this.state.activeCategoryIndex = categoryIndex;
      this.emitter.notify(this.state);
    }
  }

  addEmojiToRecents(currentCategoryId, emojiItem) {
    const recentsCategoryIndex = this.#getCategoryIndexById("recents");

    if (recentsCategoryIndex !== -1) {
      const emojiExists = this.state.categories[
        recentsCategoryIndex
      ].emojis.some((item) => item.name === emojiItem.name);

      if (!emojiExists) {
        this.state.categories[recentsCategoryIndex].emojis.unshift(emojiItem);
      }
    } else {
      this.#createRecentsCategory([emojiItem]);
    }

    const currentCategoryIndex = this.#getCategoryIndexById(currentCategoryId);
    this.state.activeCategoryIndex = currentCategoryIndex;

    this.emitter.notify(this.state);
  }

  searchEmojis(term) {
    if (!term) {
      this.state.isSearching = false;
      this.state.filteredEmojis = [];
      this.emitter.notify(this.state);
      return;
    }

    const allEmojis = this.state.categories
      .filter((category) => category.id !== "recents")
      .flatMap((category) => category.emojis);

    const filteredEmojis = allEmojis.filter((item) => {
      return (
        item.name.toLowerCase().includes(term) ||
        item.keywords.some((keyword) => keyword.toLowerCase().includes(term))
      );
    });

    this.state.isSearching = true;
    this.state.filteredEmojis = filteredEmojis;
    this.emitter.notify(this.state);
  }
}

export const store = new Store();
