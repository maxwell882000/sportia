import { bookDomain } from "./domain";
import { BookDto } from "../../dtos/book/bookDto.ts";
import {
  $bookAcceptChanged,
  $bookAcceptClose,
  $bookAccepted,
  $bookingReset,
  $bookingTypeChanged,
  $isBookingCanceledPopUpChanged,
  $bookingIdCancelChanged,
  $sameBookingCountChanged,
} from "./events.ts";
import { sample, Store, StoreWritable } from "effector";
import { $bookForm } from "./form.ts";
import { BookingTypeDto } from "../../dtos/book/bookingTypeDto.ts";
import { BookingCountDto } from "../../dtos/book/bookingCountDto.ts";
import {
  $cancelBookingFx,
  $createBookingFx,
  $getBookingTypesByCategoryFx,
} from "./effects.ts";
import { $eventDetailChanged, $eventDetailOpened } from "../event/events.ts";
import { EventDetailDto } from "../../dtos/events/eventDetailDto.ts";
import { $eventDetail } from "../event/store.ts";
import { $pageChanged } from "../events.ts";
import { Pages } from "../../constants/pages.ts";

export const $bookingType = bookDomain
  .createStore<BookingTypeDto[]>([])
  .on($bookingTypeChanged, (_, bookingType) => bookingType);

export const $bookingIdCancel = bookDomain
  .createStore<string>("")
  .on($bookingIdCancelChanged, (_, result) => result);

export const $isBookingCanceledPopUp = bookDomain
  .createStore<boolean>(false)
  .on($isBookingCanceledPopUpChanged, (_, result) => result);

export const $bookAccept: StoreWritable<BookDto> = bookDomain
  .createStore<BookDto>(null)
  .on($bookAcceptChanged, (_, result) => result)
  .on($bookAcceptClose, () => null)
  .reset($bookingReset);

export const $sameBookingCount = bookDomain
  .createStore<BookingCountDto>({
    totalCount: 0,
    count: 0,
  })
  .on($sameBookingCountChanged, (_, result) => result)
  .reset($bookingReset, $bookForm.fields.bookingType.onChange);

export const $isBookAcceptOpen: Store<boolean> = $bookAccept.map((b) => !!b);

sample({
  source: $bookForm.formValidated,
  target: $bookAcceptChanged,
});

sample({
  clock: $bookAccepted,
  source: $bookAccept,
  fn: (source) => ({ bookDto: source, eventId: $eventDetail.getState().id }),
  target: [$bookAcceptClose, $createBookingFx], // here write next logic,
});

sample({
  source: $eventDetailChanged,
  fn: (eventDetail: EventDetailDto) => ({
    categoryId: eventDetail.categoryId,
    eventId: eventDetail.id,
  }),
  target: $getBookingTypesByCategoryFx,
});

sample({
  source: $cancelBookingFx,
  fn: () => "",
  target: $bookingIdCancel,
});

sample({
  clock: $pageChanged,
  source: $bookingType,
  filter: (s, c) => c === Pages.BOOK,
  fn: (bookingType: BookingTypeDto[]) => {
    return {
      bookingType: bookingType[0],
      bookingOptions: [],
      isClick: false,
      isPayme: false,
    } as BookDto;
  },
  target: [$bookForm.setForm, $bookingReset],
});
