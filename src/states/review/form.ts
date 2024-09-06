import { createForm } from "effector-forms";
import { OwnReviewDto } from "../../dtos/review/ownReviewDto.ts";
import { rules } from "../../utils/rules.ts";
import { sample } from "effector";
import { $commentCanceled, $commentMade } from "./events.ts";
import { $saveReviewFx } from "./effects.ts";
import { $eventDetail } from "../event/store.ts";
import { EventDetailDto } from "../../dtos/events/eventDetailDto.ts";
import {
  $eventDetailChanged,
  $eventDetailClose,
  $eventDetailOpened,
} from "../event/events.ts";

export const $ownReviewForm = createForm<OwnReviewDto>({
  fields: {
    id: {
      init: "" as string,
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

sample({
  clock: $ownReviewForm.formValidated,
  source: $eventDetail,
  fn: (source: EventDetailDto, clock: OwnReviewDto) => ({
    ownReview: clock,
    eventId: source.id,
  }),
  target: $saveReviewFx,
});
