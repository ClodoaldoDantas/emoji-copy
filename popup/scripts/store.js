import { emojiCategories } from "../data/emojis.js";
import { Observable } from "./observable.js";
import { Storage } from "./storage.js";

const RECENTS_STORAGE_KEY = "@emoji-copy:recents";
const MAX_RECENT_ITEMS = 10;

class Store {
  #allEmojisCache = null;

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
    this.state.categories.unshift({
      id: "recents",
      icon: "clock",
      name: "Recentes",
      emojis,
    });
  }

  #getCategoryIndexById(categoryId) {
    return this.state.categories.findIndex((cat) => cat.id === categoryId);
  }

  #getAllEmojis() {
    if (!this.#allEmojisCache) {
      this.#allEmojisCache = this.state.categories
        .filter((category) => category.id !== "recents")
        .flatMap((category) => category.emojis);
    }

    return this.#allEmojisCache;
  }

  async init() {
    const recentsEmojis = await Storage.getItem(RECENTS_STORAGE_KEY, []);

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

  async addEmojiToRecents(currentCategoryId, emojiItem) {
    const recentsCategoryIndex = this.#getCategoryIndexById("recents");

    if (recentsCategoryIndex !== -1) {
      const recentsCategory = this.state.categories[recentsCategoryIndex];

      const emojiExists = recentsCategory.emojis.some(
        (item) => item.name === emojiItem.name
      );

      if (!emojiExists) {
        recentsCategory.emojis.unshift(emojiItem);

        if (recentsCategory.emojis.length > MAX_RECENT_ITEMS) {
          recentsCategory.emojis.pop();
        }

        await Storage.setItem(RECENTS_STORAGE_KEY, recentsCategory.emojis);
      }
    } else {
      this.#createRecentsCategory([emojiItem]);
      await Storage.setItem(RECENTS_STORAGE_KEY, [emojiItem]);
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

    const allEmojis = this.#getAllEmojis();

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
