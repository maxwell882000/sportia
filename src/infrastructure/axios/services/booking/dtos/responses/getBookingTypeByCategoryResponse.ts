import { BookingOptionDto } from "../bookingOptionDto.ts";
import { FileDto } from "../../../common/dtos/fileDto.ts";

export interface GetBookingTypeByCategoryResponse {
  id: string;
  label: string;
  categoryId: string; // UUID string
  icon: FileDto;
  isShowLimit: boolean;
  cost: number;
  bookingOptions: BookingOptionDto[];
}
