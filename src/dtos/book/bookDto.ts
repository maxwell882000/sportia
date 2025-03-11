import { BookingUserOptionDto } from "./bookingUserOptionDto.ts";
import { BookingTypeDto } from "./bookingTypeDto.ts";

export interface BookDto {
  bookingType: BookingTypeDto;
  bookingOptions: BookingUserOptionDto[];
  isClick: boolean;
  isPayme: boolean;
}
