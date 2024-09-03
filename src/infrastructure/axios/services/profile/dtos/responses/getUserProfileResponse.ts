import { FileDto } from "../../../common/dtos/fileDto.ts";

export interface GetUserProfileResponse {
  name: string;
  avatar?: FileDto; // Optional property
}
