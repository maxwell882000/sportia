import { categoryDomain } from "./domain";
import { slideButtonFactory } from "../factories/slideButton/slideButtonFactory.ts";
import { defaultCategories } from "../../dtos/categories/categoryDto.ts";
import { sample } from "effector";
import { $searchPlaceholderChanged } from "../events.ts";

export const {
  $slides: $categories,
  $activeSlide: $activeCategory,
  $slidesChanged: $categoriesChanged,
  $slideActivated: $categoryActivated,
} = slideButtonFactory(categoryDomain, defaultCategories);

sample({
  source: $activeCategory,
  fn: (result) => result.name,
  target: $searchPlaceholderChanged,
});
