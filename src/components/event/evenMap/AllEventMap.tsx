import { YMapMarker } from "ymap3-components";
import Football from "../../Icons/Football.tsx";
import { useUnit } from "effector-react";
import { $eventDetail, $events } from "../../../states/event/store.ts";
import { $eventDetailChanged } from "../../../states/event/events.ts";
import {
  defaultEventDetailDto,
  EventDetailDto,
} from "../../../dtos/events/eventDetailDto.ts";
import { MarkerPin01 } from "@untitled-ui/icons-react";

function AllEventMap() {
  const [events, eventDetailChanged, eventDetail] = useUnit([
    $events,
    $eventDetailChanged,
    $eventDetail,
  ]);
  return (
    <>
      {events.map((e) => (
        <YMapMarker
          key={`ymap-events-${e.id}`}
          onClick={() => {
            eventDetailChanged({
              ...defaultEventDetailDto,
              ...e,
            } as EventDetailDto);
          }}
          coordinates={e.coordinates}
        >
          <div className={"relative flex cursor-pointer flex-row items-center"}>
            <div>
              {eventDetail?.id !== e.id ? (
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
                "h-[48px] w-[180px] rounded-app bg-[#FFFFFFE5] p-2 px-[1rem] py-[0.5rem] leading-[16.56px] text-[#15171C]"
              }
            >
              <p>{e.name}</p>
              <p className={`${e.isOpen ? "" : "text-[#F63D68]"}`}>
                {e.workTime}
              </p>
            </div>
          </div>
        </YMapMarker>
      ))}
    </>
  );
}

export default AllEventMap;
