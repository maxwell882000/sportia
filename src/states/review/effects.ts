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

export const $saveReviewFx = reviewDomain.createEffect(
  async ({
    ownReview,
    eventId,
  }: {
    ownReview: OwnReviewDto;
    eventId: string;
  }) => {
    console.log("$saveReviewFx", ownReview);
    let response = null;
    if (ownReview.id) {
      response = await ReviewService.updateReview({
        ...ownReview,
        eventId,
      } as UpdateReviewRequest);
    } else {
      response = await ReviewService.createReview({
        ...ownReview,
        eventId,
      } as CreateReviewRequest);
      ownReview.id = response.id;
    }
    successNotification("Вы успешно оставили отзыв");
    $saveOwnReview(ownReview);
    $aggregateReviewChanged({
      reviewCount: response.reviewCount,
      mark: response.mark,
    });
  },
);

export const $getReviewsFx = reviewDomain.createEffect(
  async (eventId: string) => {
    const reviews = await ReviewService.getReviewsByEvent({
      eventId,
    } as UpdateReviewRequest);
    $reviewChanged({
      mark: reviews.mark,
      reviewCount: reviews.reviewCount,
      eventId: reviews.eventId,
      ownReview: reviews.ownReview,
      userReviews: reviews.userReviews.map((e) => ({
        avatar: e.avatar.path,
        name: e.name,
        mark: e.mark,
        reviewDate: e.reviewDate,
        comment: e.comment,
      })),
    });
  },
);

sample({
  source: $eventDetailChanged,
  fn: (r) => r.id,
  target: $getReviewsFx,
});
