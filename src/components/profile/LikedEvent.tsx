import Event from "../event/Event.tsx";
import { EventDto } from "../../dtos/events/eventDto.ts";

interface Props {
  event: EventDto;
}

function LikedEvent({ event }: Props) {
  return (
    <>
      <Event event={event} key={`event-liked-${event.id}`}></Event>
    </>
  );
}

export default LikedEvent;
