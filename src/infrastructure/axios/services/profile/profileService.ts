import { axiosInstance } from "../../axiosInstance.ts";
import { GetUserProfileResponse } from "./dtos/responses/getUserProfileResponse.ts";

export class ProfileService {
  static async getUserProfile(): Promise<GetUserProfileResponse> {
    const response = await axiosInstance.get<GetUserProfileResponse>(
      "profile/get-user-profile",
    );
    return response.data;
  }
}
