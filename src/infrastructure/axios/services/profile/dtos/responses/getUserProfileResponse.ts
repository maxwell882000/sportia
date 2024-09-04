import { FileDto } from "../../../common/dtos/fileDto.ts";

export interface GetUserProfileResponse {
  name: string;
  phone:string;
  avatar?: FileDto; // Optional property
}
