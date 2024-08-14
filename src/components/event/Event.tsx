import {EventDto} from "../../dtos/events/eventDto.ts";
import EventTitle from "./EventTitle.tsx";
import {useUnit} from "effector-react";
import {$eventDetailChanged} from "../../states/event/events.ts";
import {defaultEventDetailDto, EventDetailDto} from "../../dtos/events/eventDetailDto.ts";

interface Props {
    event: EventDto
}

function Event({event}: Props) {
    const [eventDetailChanged] = useUnit([$eventDetailChanged]);
    return <div>
        <button
            onClick={() => {
                eventDetailChanged({...event, ...defaultEventDetailDto} as EventDetailDto);
            }}
            className="w-full text-start fade-in-events flex flex-row p-[1.5rem] cursor-pointer hover:bg-[#1C1F24] justify-between items-center">
            <EventTitle event={event}/>
            <div>
                <img alt={"event-image-event"} className={"rounded-app w-[5rem] h-[5rem]"} src={event.image}/>
            </div>
        </button>
        <div className="border-b-[1px] ml-[4rem]  border-[#1C1F24]"></div>
    </div>
}

export default Event
