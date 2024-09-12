import { createForm } from "effector-forms";
import { OwnReviewDto } from "../../dtos/review/ownReviewDto.ts";
import { rules } from "../../utils/rules.ts";
import { sample } from "effector";
import { $commentCanceled, $commentMade } from "./events.ts";
import { $eventDetailOpened } from "../event/events.ts";

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
  target: $ownReviewForm.setForm,
});
sample({
  source: $commentCanceled,
  target: $ownReviewForm.reset,
});
sample({
  source: $eventDetailOpened,
  target: $ownReviewForm.reset,
});
