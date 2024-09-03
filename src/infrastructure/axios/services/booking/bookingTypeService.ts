import { GetSameBookingsCountRequest } from "./dtos/requests/getSameBookingsCountRequest.ts";
import { GetSameBookingsCountResponse } from "./dtos/responses/getSameBookingsCountResponse.ts";
import { axiosInstance } from "../../axiosInstance.ts";
import { GetBookingTypeByCategoryRequest } from "./dtos/requests/getBookingTypeByCategoryRequest.ts";
import { GetBookingTypeByCategoryResponse } from "./dtos/responses/getBookingTypeByCategoryResponse.ts";

export class BookingTypeService {
  static async getBookingType(
    request: GetBookingTypeByCategoryRequest,
  ): Promise<GetBookingTypeByCategoryResponse[]> {
    const response = await axiosInstance.get<
      GetBookingTypeByCategoryResponse[]
    >("booking-type", { params: request });
    return response.data;
  }
}
