import { bookDomain } from "./domain.ts";
import { BookDto } from "../../dtos/book/bookDto.ts";
import { BookingTypeDto } from "../../dtos/book/bookingTypeDto.ts";
import { BookingCountDto } from "../../dtos/book/bookingCountDto.ts";
import book from "../../components/book/Book.tsx";

export const $bookAcceptChanged = bookDomain.createEvent<BookDto>();

export const $bookingIdCancelChanged = bookDomain.createEvent<string>();

export const $isBookingCanceledPopUpChanged = bookDomain.createEvent<boolean>();

export const $bookAccepted = bookDomain.createEvent();

export const $bookAcceptClose = bookDomain.createEvent();

export const $paymentRequired = bookDomain.createEvent();

export const $bookingReset = bookDomain.createEvent();

export const $bookingTypeChanged = bookDomain.createEvent<BookingTypeDto[]>();

export const $sameBookingCountChanged =
  bookDomain.createEvent<BookingCountDto>();
