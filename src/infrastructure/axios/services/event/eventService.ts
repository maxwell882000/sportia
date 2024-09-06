import { GetAllEventsResponse } from "./dtos/responses/getAllEventsResponse.ts";
import { axiosInstance } from "../../axiosInstance.ts";
import { GetEventDetailRequest } from "./dtos/requests/getEventDetailRequest.ts";
import { GetEventDetailResponse } from "./dtos/responses/getEventDetailResponse.ts";
import { LikeEventRequest } from "./dtos/requests/likeEventRequest.ts";

export class EventService {
  static async getAllEvents(): Promise<GetAllEventsResponse[]> {
    const response = await axiosInstance.get<GetAllEventsResponse[]>(
      "event/get-all-events",
    );
    return response.data;
  }

  static async getEventDetail(
    request: GetEventDetailRequest,
  ): Promise<GetEventDetailResponse> {
    const response = await axiosInstance.get<GetEventDetailResponse>(
      "event/get-event-detail",
      { params: request },
    );
    return response.data;
  }

  static async likeEvent(
    request: LikeEventRequest,
  ): Promise<LikeEventResponse> {
    const response = await axiosInstance.put<LikeEventResponse>(
      "event/like",
      request,
    );
    return response.data;
  }
}
