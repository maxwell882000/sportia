import ReviewStar from "../review/ReviewStar.tsx";
import ReviewCount from "../review/ReviewCount.tsx";
import { EventDto } from "../../dtos/events/eventDto.ts";

interface Props {
  event: EventDto;
}

function EventCard({ event }: Props) {
  return (
    <>
      <div
        className={
          "my-0.5 flex items-center space-x-[0.5rem] text-center text-[0.75rem] leading-[0.875rem] md:text-[0.875rem] md:leading-[1rem]"
        }
      >
        <ReviewStar
          startClass={"w-[0.875rem] h-[0.875rem] text-white text-opacity-30"}
          review={event.mark}
        />
        <span
          className={
            "text-[0.75rem] leading-[0.875rem] text-[#FFFFFFCC] md:text-[0.875rem] md:leading-[1rem]"
          }
        >
          {event.mark}
        </span>
        <ReviewCount reviewCount={event.reviewCount} />
      </div>
      <div
        className={
          "mt-0.5 space-y-0.5 text-[0.75rem] leading-[0.875rem] md:text-[0.875rem] md:leading-[1rem]"
        }
      >
        <p
          className={`text-[0.75rem] md:text-[0.875rem] md:leading-[1rem] ${event.isOpen ? "text-[#ACEF03]" : "text-[#F63D68]"}`}
        >
          {event.nextTime}
        </p>
        <p
          className={
            "one-lines text-[0.75rem] text-[#D2D2D3] text-opacity-70 md:text-[0.875rem] md:leading-[1rem]"
          }
        >
          {event.address}
        </p>
      </div>
    </>
  );
}

export default EventCard;
