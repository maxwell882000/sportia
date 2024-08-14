import {categoryDomain} from "./domain";
import {CategoryDto} from "../../dtos/categories/categoryDto.ts";


export const $categoriesChanged = categoryDomain.createEvent<CategoryDto[]>();

export const $categoryActivated = categoryDomain.createEvent<CategoryDto>();
