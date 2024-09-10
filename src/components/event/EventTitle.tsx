import { EventDto } from "../../dtos/events/eventDto.ts";
import ReviewStar from "../review/ReviewStar.tsx";
import ReviewCount from "../review/ReviewCount.tsx";
import EventCard from "./EventCard.tsx";

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
        <EventCard event={event} />
      </div>
    </>
  );
}

export default EventTitle;
