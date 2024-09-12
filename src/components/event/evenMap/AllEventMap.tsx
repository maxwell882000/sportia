import { YMapListener, YMapMarker } from "ymap3-components";
import { useUnit } from "effector-react";
import { $eventDetail, $events } from "../../../states/event/store.ts";
import { $getEventDetailFx } from "../../../states/event/effects.ts";
import { useCallback, useState } from "react";
import EventMarker from "./EventMarker.tsx";

function AllEventMap() {
  const [events, eventDetail, getEventDetail] = useUnit([
    $events,
    $eventDetail,
    $getEventDetailFx,
  ]);
  const [zIndex, setZIndex] = useState(9.3);
  const onUpdate = useCallback(({ location, mapInAction }) => {
    console.log(location.zoom);
    setZIndex(location.zoom);
  }, []);

  return (
    <>
      <YMapListener onUpdate={onUpdate} />
      {events.map((e) => (
        <YMapMarker
          key={`ymap-events-${e.id}`}
          onClick={() => {
            getEventDetail(e);
          }}
          zIndex={zIndex}
          coordinates={e.coordinates}
        >
          <EventMarker currentEvent={eventDetail} event={e} />
        </YMapMarker>
      ))}
    </>
  );
}

export default AllEventMap;
