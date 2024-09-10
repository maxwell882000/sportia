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
import { isAuth } from "../middlewares.ts";

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
  filter: () => isAuth(),
  target: $ownReviewForm.setInitialForm,
});
sample({
  source: $commentCanceled,
  target: $ownReviewForm.reset,
});
sample({
  source: $eventDetailOpened,
  target: $ownReviewForm.reset,
});