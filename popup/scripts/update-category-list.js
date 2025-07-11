import { renderCategories } from "./render-categories.js";
import { getCategoryIndexById } from "./store.js";

export function updateCategoryList({ categories }) {
  const activeCategoryId = document
    .querySelector(".btn-category.active")
    ?.getAttribute("data-category");

  if (!activeCategoryId) return;

  const activeCategoryIndex = getCategoryIndexById(activeCategoryId);

  if (activeCategoryIndex === -1) return;

  renderCategories({
    data: categories,
    activeIndex: activeCategoryIndex,
  });
}
