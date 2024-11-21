import { axiosInstance } from "../../axiosInstance.ts";
import { GetUserProfileResponse } from "./dtos/responses/getUserProfileResponse.ts";
import { GetUserLikedEventsResponse } from "./dtos/responses/getUserLikedEventsResponse.ts";
import { GetUserBookedEventsResponse } from "./dtos/responses/getUserBookedEventsResponse.ts";
import { ChangeProfileRequest } from "./dtos/requests/changeProfileRequest.ts";
import { ChangeAvatarRequest } from "./dtos/requests/changeAvatarRequest.ts";
import { ChangeAvatarResponse } from "./dtos/responses/changeAvatarResponse.ts";

export class ProfileService {

  static async changeProfile(request: ChangeProfileRequest): Promise<void> {
    await axiosInstance.put("profile/change-profile", request);
  }

  static async changeAvatar(
    request: ChangeAvatarRequest,
  ): Promise<ChangeAvatarResponse> {
    const form = new FormData();
    form.append("avatar", request.avatar);
    const response = await axiosInstance.put<ChangeAvatarResponse>(
      "profile/change-avatar",
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return response.data;
  }

  static async getUserProfile(): Promise<GetUserProfileResponse> {
    const response = await axiosInstance.get<GetUserProfileResponse>(
      "profile/get-user-profile",
    );
    return response.data;
  }

  static async getUserBookedEvents(): Promise<GetUserBookedEventsResponse[]> {
    const response = await axiosInstance.get<GetUserBookedEventsResponse[]>(
      "profile/get-user-booked-events",
    );
    return response.data;
  }

  static async getUserLikedEvents(): Promise<GetUserLikedEventsResponse[]> {
    const response = await axiosInstance.get<GetUserLikedEventsResponse[]>(
      "profile/get-user-liked-events",
    );
    return response.data;
  }
}
