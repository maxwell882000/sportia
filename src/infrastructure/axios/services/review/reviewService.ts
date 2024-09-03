import { GetReviewsByEventResponse } from "./dtos/responses/getReviewsByEventResponse.ts";
import { GetReviewsByEventRequest } from "./dtos/requests/getReviewsByEventRequest.ts";
import { axiosInstance } from "../../axiosInstance.ts";
import { CreateReviewRequest } from "./dtos/requests/createReviewRequest.ts";
import { CreateReviewResponse } from "./dtos/responses/createReviewResponse.ts";
import { UpdateReviewResponse } from "./dtos/responses/updateReviewResponse.ts";
import { UpdateReviewRequest } from "./dtos/requests/updateReviewRequest.ts";

export class ReviewService {
  static async getReviewsByEvent(
    request: GetReviewsByEventRequest,
  ): Promise<GetReviewsByEventResponse> {
    const response = await axiosInstance.get<GetReviewsByEventResponse>(
      "review/get-review-by-event",
      { params: request },
    );
    return response.data;
  }

  static async createReview(
    request: CreateReviewRequest,
  ): Promise<CreateReviewResponse> {
    const response = await axiosInstance.post<CreateReviewResponse>(
      "review",
      request,
    );
    return response.data;
  }

  static async updateReview(
    request: UpdateReviewRequest,
  ): Promise<UpdateReviewResponse> {
    const response = await axiosInstance.put<UpdateReviewResponse>(
      "review",
      request,
    );
    return response.data;
  }
}
