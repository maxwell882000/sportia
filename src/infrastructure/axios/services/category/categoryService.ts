import { axiosInstance } from "../../axiosInstance.ts";
import { GetAllCategoriesResponse } from "./dtos/responses/getAllCategoriesResponse.ts";

export class CategoryService {
  static async getAllCategories() {
    const response = await axiosInstance.get<GetAllCategoriesResponse[]>(
      "categories/get-all-categories",
    );
    return response.data;
  }
}
