import Football from "../../Icons/Football.tsx";
import { MarkerPin01 } from "@untitled-ui/icons-react";
import { EventDto } from "../../../dtos/events/eventDto.ts";

interface Props {
  event: EventDto;
  currentEvent: EventDto;
}

function EventMarker({ event, currentEvent }: Props) {
  return (
    <div
      className={`icon-marker ${currentEvent?.id == event?.id && "bottom-[18px] left-[50%]"}`}
    >
      <div className={"flex cursor-pointer flex-row items-center"}>
        <div>
          {currentEvent?.id !== event.id ? (
            <div
              className={
                "relative left-[50%] min-w-min rounded-[50%] border-2 border-[#FFFFFFCC] bg-green-600 p-1 text-white"
              }
            >
              <Football></Football>
            </div>
          ) : (
            <MarkerPin01
              className={
                "h-[3.208rem] w-[2.625rem] fill-[#12B76A] text-[#12B76A]"
              }
            />
          )}
        </div>

        <div
          className={
            "h-[3rem] w-[11.25rem] rounded-app bg-[#FFFFFFE5] p-2 px-[1rem] py-[0.5rem] leading-[1.035rem] text-[#15171C]"
          }
        >
          <p>{event.name}</p>
          <p className={`${event.isOpen ? "" : "text-[#F63D68]"}`}>
            {event.nextTime}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventMarker;
