import { FileDto } from "../../../common/dtos/fileDto.ts";

export interface GetReviewsByEventResponse {
  mark: number;
  eventId: string;
  reviewCount: number;
  ownReview?: UserReviewDto;
  userReviews: UserReviewDto[];
}

interface UserReviewDto {
  id:string;
  name: string;
  mark: number;
  avatar: FileDto;
  comment: string;
  reviewDate: Date;
}
