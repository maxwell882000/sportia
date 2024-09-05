import { categoryDomain } from "./domain";
import { slideButtonFactory } from "../factories/slideButton/slideButtonFactory.ts";
import { defaultCategories } from "../../dtos/categories/categoryDto.ts";
import { sample } from "effector";
import { $searchPlaceholderChanged } from "../events.ts";
import { AppStartGate } from "../gate.ts";
import { $getAllCategoriesFx } from "./effects.ts";

export const {
  $slides: $categories,
  $activeSlide: $activeCategory,
  $slidesChanged: $categoriesChanged,
  $slideActivated: $categoryActivated,
} = slideButtonFactory(categoryDomain, []);

sample({
  source: $activeCategory,
  fn: (result) => result.name,
  target: $searchPlaceholderChanged,
});

sample({
  source: AppStartGate.open,
  target: $getAllCategoriesFx,
});
