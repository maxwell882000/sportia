import { reviewDomain } from "./domain.ts";
import { OwnReviewDto } from "../../dtos/review/ownReviewDto.ts";
import {
  $aggregateReviewChanged,
  $reviewChanged,
  $saveOwnReview,
} from "./events.ts";
import { ReviewService } from "../../infrastructure/axios/services/review/reviewService.ts";
import { UpdateReviewRequest } from "../../infrastructure/axios/services/review/dtos/requests/updateReviewRequest.ts";
import { CreateReviewRequest } from "../../infrastructure/axios/services/review/dtos/requests/createReviewRequest.ts";
import { sample } from "effector";
import { $eventDetailChanged } from "../event/events.ts";
import { successNotification } from "../../utils/notifications/successNotification.ts";
import { AggregateReviewDto } from "../../dtos/review/aggregateReviewDto.ts";
import { requestHandler } from "../handler.ts";
import { GetReviewsByEventResponse } from "../../infrastructure/axios/services/review/dtos/responses/getReviewsByEventResponse.ts";

export const $saveReviewFx = reviewDomain.createEffect(
  async ({
    ownReview,
    eventId,
  }: {
    ownReview: OwnReviewDto;
    eventId: string;
  }) => {
    let response = null;
    let review = { ...ownReview };
    if (review.id) {
      response = await requestHandler(
        ReviewService.updateReview({
          ...review,
          eventId,
        } as UpdateReviewRequest),
      );
    } else {
      response = await requestHandler(
        ReviewService.createReview({
          ...review,
          eventId,
        } as CreateReviewRequest),
      );
      review.id = response.id;
    }
    successNotification("Вы успешно оставили отзыв");
    $saveOwnReview({ ...review });
    $aggregateReviewChanged({
      reviewCount: response.reviewCount,
      mark: response.mark,
    });
  },
);

export const $getReviewsFx = reviewDomain.createEffect(
  async (eventId: string) => {
    const reviews = await requestHandler<GetReviewsByEventResponse>(
      ReviewService.getReviewsByEvent({
        eventId,
      } as UpdateReviewRequest),
    );

    $reviewChanged({
      mark: reviews.mark,
      reviewCount: reviews.reviewCount,
      eventId: reviews.eventId,
      ownReview: reviews.ownReview,
      userReviews: reviews.userReviews.map((e) => ({
        avatar: e?.avatar?.path,
        name: e.name,
        mark: e.mark,
        reviewDate: e.reviewDate,
        comment: e.comment,
      })),
    });
  },
);
