import Event from "./Event.tsx";
import {useUnit} from "effector-react";
import {$activeEvents} from "../../states/event/store.ts";

function Events() {
    const [events] = useUnit([$activeEvents]);
    return <div className={"flex-1 overflow-y-scroll"}>
        {events.map((event) => <Event event={event} key={`event-${event.id + Math.random()}`}></Event>)}
    </div>
}

export default Events
