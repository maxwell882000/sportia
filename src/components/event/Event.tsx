import { EventDto } from "../../dtos/events/eventDto.ts";
import EventTitle from "./EventTitle.tsx";
import { useUnit } from "effector-react";
import { $eventDetailChanged } from "../../states/event/events.ts";
import {
  defaultEventDetailDto,
  EventDetailDto,
} from "../../dtos/events/eventDetailDto.ts";

interface Props {
  event: EventDto;
}

function Event({ event }: Props) {
  const [eventDetailChanged] = useUnit([$eventDetailChanged]);
  return (
    <div>
      <div
        onClick={() => {
          eventDetailChanged({
            ...defaultEventDetailDto,
            ...event,
          } as EventDetailDto);
        }}
        className="fade-in-events flex w-full cursor-pointer flex-row items-center justify-between p-[1.5rem] text-start hover:bg-[#1C1F24]"
      >
        <EventTitle event={event} />
        <div className={"w-[5rem] h-[5rem] flex-shrink-0"}>
          <img
            alt={"event-image-event"}
            className={"h-[5rem] w-[5rem]  object-cover  rounded-app"}
            src={event.image}
          />
        </div>
      </div>
      <div className="ml-[4rem] border-b-[1px] border-[#1C1F24]"></div>
    </div>
  );
}

export default Event;
