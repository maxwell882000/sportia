import { createForm } from "effector-forms";
import { BookTypeDto } from "../../dtos/book/bookTypeDto.ts";
import { BookDto } from "../../dtos/book/bookDto.ts";
import { forward, sample } from "effector";
import { $bookingTypeChanged, $paymentRequired } from "./events.ts";
import { UserPopUp } from "../../dtos/users/userPopUp.ts";
import { $bookingType } from "./store.ts";
import { getSameBookingCountFx } from "./effects.ts";
import { $eventDetail } from "../event/store.ts";

export const $bookForm = createForm<BookDto>({
  fields: {
    bookingTypeId: {
      init: "" as string,
    },
    bookType: {
      init: BookTypeDto.SINGLE,
    },
    cost: {
      init: 300000,
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
  source: $bookForm.$values,
  filter: (result: BookDto) =>
    result.cost &&
    result.bookingTypeId &&
    result.bookingOptions.filter((e) => e.bookingOptionValue).length ==
      $bookingType
        .getState()
        .filter((e) => e.id === result.bookingTypeId)
        .flatMap((e) => e.bookingOptions).length,
  fn: (bookDto) => ({
    bookDto,
    eventId: $eventDetail.getState().id,
  }),
  target: getSameBookingCountFx,
});
