import { BookingUserOptionDto } from "../bookingUserOptionDto.ts";

export interface GetSameBookingsCountRequest {
  eventId: string;
  bookingTypeId: string;
  bookingOptions: BookingUserOptionDto[];
}
