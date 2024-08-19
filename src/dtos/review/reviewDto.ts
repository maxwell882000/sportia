import { OwnReviewDto } from "./ownReviewDto.ts";
import { UserReviewDto } from "./userReviewDto.ts";

export interface ReviewDto {
  review: number;
  eventId: number;
  ownReview?: OwnReviewDto;
  userReviews: UserReviewDto[];
  reviewCount: number;
}

export const defaultReview = {
  eventId: 1,
  review: 4,
  ownReview: null,
  userReviews: [
    {
      avatar: "http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3",
      name: "Марина Морозова",
      review: 4,
      reviewDate: new Date(),
      comment: `      Оба сына тренируются в секции водные лыжи. Тренеры профессионалы. Всегда в наличии
                                    оборудование, гидрокостюмы. Тренировки всё лето. Есть спортивный лагерь с питанием.
                                    Дети физически развиваются и закалка.`,
    } as UserReviewDto,
    {
      avatar: "http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3",
      name: "Марина Морозова",
      review: 2,
      reviewDate: new Date(),
      comment: `      Оба сына тренируются в секции водные лыжи. Тренеры профессионалы. Всегда в наличии
                                    оборудование, гидрокостюмы. Тренировки всё лето. Есть спортивный лагерь с питанием.
                                    Дети физически развиваются и закалка.`,
    } as UserReviewDto,
    {
      avatar: "http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3",
      name: "Марина Морозова",
      review: 5,
      reviewDate: new Date(),
      comment: `      Оба сына тренируются в секции водные лыжи. Тренеры профессионалы. Всегда в наличии
                                    оборудование, гидрокостюмы. Тренировки всё лето. Есть спортивный лагерь с питанием.
                                    Дети физически развиваются и закалка.`,
    } as UserReviewDto,
  ] as UserReviewDto[],
} as ReviewDto;
