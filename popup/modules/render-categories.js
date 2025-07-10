import { changeActiveTab } from "./change-active-tab.js";
import { emojiCategories } from "../data/emojis.js";

export function renderCategories() {
  const categories = document.getElementById("emoji-categories");

  emojiCategories.forEach((category, index) => {
    const button = document.createElement("button");
    button.classList.add("category-item");

    if (index === 0) {
      button.classList.add("active");
    }

    button.setAttribute("data-category", category.id);
    button.setAttribute("aria-label", category.name);

    const image = document.createElement("img");
    image.src = `./images/${category.icon}.svg`;

    button.appendChild(image);
    button.addEventListener("click", changeActiveTab);

    categories.appendChild(button);
  });
}
