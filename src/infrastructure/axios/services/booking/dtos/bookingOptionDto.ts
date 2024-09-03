import { BookingOptionValueDto } from "./bookingOptionValueDto.ts";
import { BookingOptionType } from "./bookingOptionType.ts";

export interface BookingOptionDto {
  label: string;
  type: BookingOptionType;
  bookingOptionValues?: BookingOptionValueDto[];
}
