import { bookDomain } from "./domain.ts";
import { BookDto } from "../../dtos/book/bookDto.ts";

export const $bookAcceptChanged = bookDomain.createEvent<BookDto>();

export const $bookAccepted = bookDomain.createEvent();

export const $bookAcceptClose = bookDomain.createEvent();

export const $paymentRequired = bookDomain.createEvent();