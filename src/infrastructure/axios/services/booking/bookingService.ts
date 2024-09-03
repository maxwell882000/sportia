import { CreateBookingResponse } from "./dtos/responses/createBookingResponse.ts";
import { axiosInstance } from "../../axiosInstance.ts";
import { CreateBookingRequest } from "./dtos/requests/creteBookingRequest.ts";
import { GetSameBookingsCountResponse } from "./dtos/responses/getSameBookingsCountResponse.ts";
import { GetSameBookingsCountRequest } from "./dtos/requests/getSameBookingsCountRequest.ts";

export class BookingService {
  static async createBooking(
    request: CreateBookingRequest,
  ): Promise<CreateBookingResponse> {
    const response = await axiosInstance.post<CreateBookingResponse>(
      "booking",
      request,
    );
    return response.data;
  }

  static async getSameBookingCount(
    request: GetSameBookingsCountRequest,
  ): Promise<GetSameBookingsCountResponse> {
    const response = await axiosInstance.get<GetSameBookingsCountResponse>(
      "booking/get-same-booking-count",
      { params: request },
    );
    return response.data;
  }
}
