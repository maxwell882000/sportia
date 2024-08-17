import { categoryDomain } from "./domain";
import {
  CategoryDto,
  defaultCategories,
} from "../../dtos/categories/categoryDto.ts";
import { $categoriesChanged, $categoryActivated } from "./events.ts";
import { StoreWritable } from "effector";

export const $categories: StoreWritable<CategoryDto[]> = categoryDomain
  .createStore<CategoryDto[]>(defaultCategories)
  .on($categoriesChanged, (_, result) => {
    return result;
  })
  .on($categoryActivated, (state, clicked) => {
    state.forEach((cat) => (cat.isActive = false));
    clicked.isActive = true;
    return [...state];
  });

export const $activeCategory = $categories.map<CategoryDto>(
  (e) => e.filter((c) => c.isActive)[0],
);
