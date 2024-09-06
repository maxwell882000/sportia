import { reviewDomain } from "./domain.ts";
import { ReviewDto } from "../../dtos/review/reviewDto.ts";
import { OwnReviewDto } from "../../dtos/review/ownReviewDto.ts";
import { AggregateReviewDto } from "../../dtos/review/aggregateReviewDto.ts";

export const $reviewChanged = reviewDomain.createEvent<ReviewDto>();
export const $saveOwnReview = reviewDomain.createEvent<OwnReviewDto>();

export const $aggregateReviewChanged = reviewDomain.createEvent<AggregateReviewDto>();

export const $commentMade = reviewDomain.createEvent<OwnReviewDto>();

export const $commentCanceled = reviewDomain.createEvent();
