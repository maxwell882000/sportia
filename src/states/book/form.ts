import { createForm } from "effector-forms";
import { BookDto } from "../../dtos/book/bookDto.ts";
import { forward, sample } from "effector";
import {
  $bookAcceptChanged,
  $bookingTypeChanged,
  $paymentRequired,
} from "./events.ts";
import { UserPopUp } from "../../dtos/users/userPopUp.ts";
import { $bookingType } from "./store.ts";
import { $createBookingFx, $getSameBookingCountFx } from "./effects.ts";
import { $eventDetail } from "../event/store.ts";
import { BookingTypeDto } from "../../dtos/book/bookingTypeDto.ts";

export const $bookForm = createForm<BookDto>({
  fields: {
    bookingType: {
      init: null,
    },

    isClick: {
      init: false,
    },
    isPayme: {
      init: false,
    },
    bookingOptions: {
      init: [],
    },
  },
  validateOn: ["submit"],
});

forward({
  from: $paymentRequired.map(() => ({
    rule: "paymentRequired",
    errorText: "Вы должны выбрать способ платежа.",
  })),
  to: [$bookForm.fields.isClick.addError, $bookForm.fields.isPayme.addError],
});
sample({
  source: $bookForm.formValidated,
  target: $bookAcceptChanged,
});

sample({
  source: $bookForm.$values,
  filter: (result: BookDto) => {
    return (
      $bookingType.getState() &&
      $bookingType
        .getState()
        .filter((e) => e.id === result?.bookingType?.id)
        .map((e) => e.isShowLimit)[0] &&
      result.bookingOptions.filter((e) => e.bookingOptionValue).length ==
        $bookingType
          .getState()
          .filter((e) => e.id === result.bookingType?.id)
          .flatMap((e) => e.bookingOptions).length
    );
  },
  fn: (bookDto) => ({
    bookDto,
    eventId: $eventDetail.getState().id,
  }),
  target: $getSameBookingCountFx,
});
