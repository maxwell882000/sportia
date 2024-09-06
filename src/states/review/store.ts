import { sample, Store, StoreWritable } from "effector";
import { defaultReview, ReviewDto } from "../../dtos/review/reviewDto.ts";
import { reviewDomain } from "./domain.ts";
import {
  $aggregateReviewChanged,
  $commentCanceled,
  $commentMade,
  $reviewChanged,
  $saveOwnReview,
} from "./events.ts";
import { $ownReviewForm } from "./form.ts";
import {
  $eventDetailChanged,
  $eventDetailClose,
  $eventDetailOpened,
} from "../event/events.ts";
import { UserReviewDto } from "../../dtos/review/userReviewDto.ts";
import { isAuth } from "../middlewares.ts";
import { OwnReviewDto } from "../../dtos/review/ownReviewDto.ts";
import { $getReviewsFx } from "./effects.ts";
import { $bookForm } from "../book/form.ts";
import { AggregateReviewDto } from "../../dtos/review/aggregateReviewDto.ts";

export const $review: StoreWritable<ReviewDto> = reviewDomain
  .createStore<ReviewDto>(null)
  .on($reviewChanged, (_, result) => result)
  .on(
    $aggregateReviewChanged,
    (_, result: AggregateReviewDto): ReviewDto => ({
      ..._,
      ...result,
    }),
  )
  .on($saveOwnReview, (_, ownReview: OwnReviewDto): ReviewDto => {
    return { ..._, ownReview: ownReview };
  })
  .reset($eventDetailOpened);

export const $userReviews: Store<UserReviewDto[]> = $review.map(
  (r) => r?.userReviews ?? [],
);

export const $ownReview: Store<OwnReviewDto | null> = $review.map(
  (r) => r?.ownReview,
);

export const $isCommenting = reviewDomain
  .createStore<boolean>(false)
  .on($commentMade, () => isAuth())
  .reset($ownReviewForm.formValidated, $commentCanceled, $eventDetailOpened);
