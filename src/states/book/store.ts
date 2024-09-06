import { bookDomain } from "./domain";
import { BookDto } from "../../dtos/book/bookDto.ts";
import {
  $bookAcceptChanged,
  $bookAcceptClose,
  $bookAccepted,
  $bookingTypeChanged,
  $sameBookingCountChanged,
} from "./events.ts";
import { sample, Store, StoreWritable } from "effector";
import { $bookForm } from "./form.ts";
import { BookingTypeDto } from "../../dtos/book/bookingTypeDto.ts";
import { BookingCountDto } from "../../dtos/book/bookingCountDto.ts";
import { $getBookingTypesByCategoryFx } from "./effects.ts";
import { $eventDetailChanged, $eventDetailOpened } from "../event/events.ts";

export const $bookAccept: StoreWritable<BookDto> = bookDomain
  .createStore<BookDto>(null)
  .on($bookAcceptChanged, (_, result) => result)
  .on($bookAcceptClose, () => null);

export const $bookingType = bookDomain
  .createStore<BookingTypeDto[]>([])
  .on($bookingTypeChanged, (_, bookingType) => bookingType);

export const $sameBookingCount = bookDomain
  .createStore<BookingCountDto>(null)
  .on($sameBookingCountChanged, (_, result) => result);

export const $isBookAcceptOpen: Store<boolean> = $bookAccept.map((b) => !!b);

sample({
  source: $bookForm.formValidated,
  target: $bookAcceptChanged,
});

$bookAcceptChanged.watch((e) => {
  console.log("$bookAcceptChanged", e);
});
sample({
  clock: $bookAccepted,
  source: $bookAccept,
  target: [$bookAcceptClose], // here write next logic,
});

sample({
  source: $eventDetailChanged,
  fn: (category) => category.id,
  target: $getBookingTypesByCategoryFx,
});