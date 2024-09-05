import { eventDomain } from "./domain.ts";
import { EventService } from "../../infrastructure/axios/services/event/eventService.ts";
import { $eventsChanged } from "./events.ts";
import { EventDto } from "../../dtos/events/eventDto.ts";

export const $getAllEventsFx = eventDomain.createEffect(async () => {
  const allEvents = await EventService.getAllEvents();
  $eventsChanged(
    allEvents.map<EventDto>(
      (e) =>
        ({
          ...e,
          image: e.image.path,
          coordinates: [e.coordinates.latitude, e.coordinates.longitude],
        }) as EventDto,
    ),
  );
});
