import { FileDto } from "../../../common/dtos/fileDto.ts";

export interface GetAllCategoriesResponse {
  id:string;
  icon: FileDto;
  bgColor: string;
  name: string;
  isDefault: boolean;
}
