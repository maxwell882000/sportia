import { BookingUserOptionDto } from "../bookingUserOptionDto.ts";

export interface GetSameBookingsCountRequest {
  eventId: string | null;
  bookingTypeId: string | null;
  bookingOptions: BookingUserOptionDto[] | null;
}
