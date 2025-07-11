import { handleChangeActiveTab } from "./handle-change-active-tab.js";

export function renderCategories({ data, activeIndex = 0 }) {
  const categories = document.getElementById("emoji-categories");

  categories.innerHTML = "";

  data.forEach((category, index) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-category");

    if (index === activeIndex) {
      button.classList.add("active");
    }

    button.setAttribute("data-category", category.id);
    button.setAttribute("aria-label", category.name);

    const image = document.createElement("img");
    image.src = `./images/${category.icon}.svg`;

    button.appendChild(image);
    button.addEventListener("click", handleChangeActiveTab);

    categories.appendChild(button);
  });
}
