import { EventDto } from "../../dtos/events/eventDto.ts";
import ReviewStar from "../review/ReviewStar.tsx";
import ReviewCount from "../review/ReviewCount.tsx";

interface Props {
  event: EventDto;
}

function EventTitle({ event }: Props) {
  return (
    <>
      <div>
        <h1
          className={
            "pb-1 text-[1.25rem] font-light leading-[1.5rem] text-white"
          }
        >
          {event.name}
        </h1>
        <div
          className={"my-0.5 flex items-center space-x-[0.5rem] text-center"}
        >
          <ReviewStar review={event.review} />
          <span className={"text-white"}>{event.review}</span>
          <ReviewCount reviewCount={event.reviewCount} />
        </div>
        <div className={"mt-0.5 space-y-0.5 text-[0.875rem]"}>
          <p
            className={`${event.isOpen ? "text-[#ACEF03]" : "text-[#F63D68]"}`}
          >
            {event.workTime}
          </p>
          <p className={"text-white"}>{event.address}</p>
        </div>
      </div>
    </>
  );
}

export default EventTitle;
