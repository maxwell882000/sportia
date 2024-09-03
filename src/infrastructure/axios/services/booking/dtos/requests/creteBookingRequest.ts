import { BookingUserOptionDto } from "../bookingUserOptionDto.ts";
import { PaymentOption } from "../paymentOption.ts";

export interface CreateBookingRequest {
  eventId: string; // UUID string
  bookingTypeId: string; // UUID string
  bookingOptions: BookingUserOptionDto[];
  payment: PaymentOption;
}
