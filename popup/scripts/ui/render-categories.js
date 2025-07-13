export function renderCategories({
  categories,
  activeIndex = 0,
  onChangeCategory,
}) {
  const categoriesEl = document.getElementById("emoji-categories");
  categoriesEl.classList.remove("hidden");
  categoriesEl.innerHTML = "";

  categories.forEach((category, index) => {
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
    button.addEventListener("click", onChangeCategory);

    categoriesEl.appendChild(button);
  });
}
