import { createForm } from "effector-forms";
import { BookTypeDto } from "../../dtos/book/bookTypeDto.ts";
import { BookDto } from "../../dtos/book/bookDto.ts";
import { forward } from "effector";
import { $paymentRequired } from "./events.ts";

export const $bookForm = createForm<BookDto>({
  fields: {
    bookType: {
      init: BookTypeDto.SINGLE,
    },
    days: {
      init: null,
      rules: []
    },
    date: {
      init: "" as string,
    },
    time: {
      init: null,
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
  },
  validateOn: ["submit"],
});
//
// sample({
//   source: $paymentRequired,
//   fn: () => [
//     {
//       field: "isPayme",
//       rule: "required",
//       errorText: "",
//     },
//     {
//       field: "isClick",
//       rule: "required",
//       errorText: "",
//     },
//   ],
//   target: $bookForm.fields.isClick.addError,
// });
forward({
  from: $paymentRequired.map(() => ({
    rule: "paymentRequired",
    errorText: "Вы должны выбрать способ платежа.",
  })),
  to: [$bookForm.fields.isClick.addError, $bookForm.fields.isPayme.addError],
});
