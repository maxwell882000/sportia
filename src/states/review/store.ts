import { sample, Store, StoreWritable } from "effector";
import { defaultReview, ReviewDto } from "../../dtos/review/reviewDto.ts";
import { reviewDomain } from "./domain.ts";
import {
  $commentCanceled,
  $commentMade,
  $reviewChanged,
  $saveOwnReview,
} from "./events.ts";
import { $ownReviewForm } from "./form.ts";
import { $eventDetailChanged } from "../event/events.ts";
import { UserReviewDto } from "../../dtos/review/userReviewDto.ts";
import { isAuth } from "../middlewares.ts";
import { OwnReviewDto } from "../../dtos/review/ownReviewDto.ts";
import { $getReviewsFx } from "./effects.ts";
import { $bookForm } from "../book/form.ts";

export const $review: StoreWritable<ReviewDto> = reviewDomain
  .createStore<ReviewDto>(null)
  .on($reviewChanged, (_, result) => result)
  .on($saveOwnReview, (_, ownReview) => {
    return { ..._, ownReview: ownReview };
  });

export const $userReviews: Store<UserReviewDto[]> = $review.map(
  (r) => r?.userReviews ?? [],
);

export const $ownReview: Store<OwnReviewDto | null> = $review.map(
  (r) => r?.ownReview,
);

export const $isCommenting = reviewDomain
  .createStore<boolean>(false)
  .on($commentMade, () => isAuth())
  .reset($ownReviewForm.formValidated, $commentCanceled);