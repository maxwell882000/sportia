import { axiosInstance } from "../../axiosInstance.ts";
import { GetUserProfileResponse } from "./dtos/responses/getUserProfileResponse.ts";
import { GetUserLikedEventsResponse } from "./dtos/responses/getUserLikedEventsResponse.ts";
import { GetUserBookedEventsResponse } from "./dtos/responses/getUserBookedEventsResponse.ts";

export class ProfileService {
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
