import { createForm } from "effector-forms";
import { OwnReviewDto } from "../../dtos/review/ownReviewDto.ts";
import { rules } from "../../utils/rules.ts";
import { createEvent, sample } from "effector";
import { $commentCanceled, $commentMade } from "./events.ts";
import { $saveReviewFx } from "./effects.ts";
import { $eventDetail } from "../event/store.ts";
import { EventDetailDto } from "../../dtos/events/eventDetailDto.ts";
import { $eventDetailOpened } from "../event/events.ts";
import { reviewDomain } from "./domain.ts";

export const $ownReviewForm = createForm<OwnReviewDto>({
  fields: {
    id: {
      init: "",
    },
    mark: {
      init: 0,
      rules: [rules.required()],
    },
    comment: {
      init: "",
      rules: [rules.required()],
    },
  },
  validateOn: ["submit"],
});

sample({
  source: $commentMade,
  target: $ownReviewForm.setInitialForm,
});
sample({
  source: $commentCanceled,
  // fn: () => ({
  //   id: "",
  //   mark: 0,
  //   comment: "",
  // }),
  target: $ownReviewForm.reset,
});
sample({
  source: $eventDetailOpened,
  // fn: () => ({
  //   id: "",
  //   mark: 0,
  //   comment: "",
  // }),
  target: $ownReviewForm.reset,
});

// $commentCanceled.watch(() => {
//   // $ownReviewForm.reset();
//   setTimeout(() => {
//     console.log("RESET $commentCanceled", $ownReviewForm.$values.getState());
//   }, 300);
// });
// $eventDetailOpened.watch(() => {
//   // $ownReviewForm.reset();
//   setTimeout(() => {
//     console.log("RESET $eventDetailOpened", $ownReviewForm.$values.getState());
//   }, 300);
// });
