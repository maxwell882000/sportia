import ReviewStar from "./ReviewStar.tsx";
import CommentCount from "./CommentCount.tsx";
import { EventDetailDto } from "../../dtos/events/eventDetailDto.ts";

interface Props {
  event: EventDetailDto;
}

function OverallReview({ event }: Props) {
  return (
    <div className={"flex flex-col rounded-app bg-[#1C1F24] px-4 py-2.5"}>
      <div
        className={
          "flex items-center justify-start space-x-4 border-b border-[#15171C] pb-2"
        }
      >
        <div className={"h-[3.563rem]"}>
          <span
            className={
              "text-[3rem] leading-[2.869rem] tracking-[0.009rem] text-white text-opacity-80"
            }
          >
            5.0
          </span>
        </div>
        <div>
          <ReviewStar review={event.review} />
          <CommentCount commentCount={event.commentCount} />
        </div>
      </div>
      <div className={"mt-2 flex flex-col items-center justify-center py-2"}>
        <span className={"text-[0.875rem] text-white text-opacity-50"}>
          Оцените и оставьте отзыв
        </span>
        <div>
          <ReviewStar
            onClick={(review: number) => {
              console.log("ReviewStar", review);
            }}
            startClass={"!w-[2.5rem] !h-[2.5rem] cursor-pointer"}
            review={event?.ownReview?.review ?? 0}
          />
        </div>
      </div>
    </div>
  );
}

export default OverallReview;
