import { categoryDomain } from "./domain.ts";
import { CategoryService } from "../../infrastructure/axios/services/category/categoryService.ts";
import { $categoriesChanged } from "./store.ts";
import { CategoryDto } from "../../dtos/categories/categoryDto.ts";

export const $getAllCategoriesFx = categoryDomain.createEffect(async () => {
  const categories = await CategoryService.getAllCategories();
  $categoriesChanged(
    categories.map<CategoryDto>((category) => ({
      id: category.id,
      name: category.name,
      icon: category?.icon?.path,
      bgColor: category?.bgColor,
      isDefault: category?.isDefault,
      isActive: category?.isDefault,
    })),
  );
});
