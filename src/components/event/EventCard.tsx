import ReviewStar from "../review/ReviewStar.tsx";
import ReviewCount from "../review/ReviewCount.tsx";
import { EventDto } from "../../dtos/events/eventDto.ts";

interface Props {
  event: EventDto;
}

function EventCard({ event }: Props) {
  return (
    <>
      <div className={"my-0.5 flex items-center space-x-[0.5rem] text-center"}>
        <ReviewStar review={event.mark} />
        <span className={"text-white"}>{event.mark}</span>
        <ReviewCount reviewCount={event.reviewCount} />
      </div>
      <div className={"mt-0.5 space-y-0.5 text-[0.875rem]"}>
        <p className={`${event.isOpen ? "text-[#ACEF03]" : "text-[#F63D68]"}`}>
          {event.nextTime}
        </p>
        <p className={"one-lines text-[#D2D2D3] text-opacity-70"}>
          {event.address}
        </p>
      </div>
    </>
  );
}

export default EventCard;
