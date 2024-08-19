import { reviewDomain } from "./domain.ts";
import { ReviewDto } from "../../dtos/review/reviewDto.ts";
import { OwnReviewDto } from "../../dtos/review/ownReviewDto.ts";

export const $reviewChanged = reviewDomain.createEvent<ReviewDto>();

export const $commentMade = reviewDomain.createEvent<OwnReviewDto>();

export const $commentCanceled = reviewDomain.createEvent();