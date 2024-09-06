import { eventDomain } from "./domain.ts";
import { EventService } from "../../infrastructure/axios/services/event/eventService.ts";
import { $eventDetailChanged, $eventsChanged } from "./events.ts";
import { EventDto } from "../../dtos/events/eventDto.ts";
import { FileDto } from "../../infrastructure/axios/services/common/dtos/fileDto.ts";
import { EventDetailDto } from "../../dtos/events/eventDetailDto.ts";
import { WorkHoursDto } from "../../dtos/events/workHoursDto.ts";
import { AggregateReviewDto } from "../../dtos/review/aggregateReviewDto.ts";

export const $getAllEventsFx = eventDomain.createEffect(async () => {
  const allEvents = await EventService.getAllEvents();
  $eventsChanged(
    allEvents.map<EventDto>(
      (e) =>
        ({
          ...e,
          image: e.image.path,
          coordinates: [e.coordinates.longitude, e.coordinates.latitude],
        }) as EventDto,
    ),
  );
});

export const $getEventDetailFx = eventDomain.createEffect(
  async (event: EventDto) => {
    const eventDetail = await EventService.getEventDetail({
      id: event.id,
    });
    $eventDetailChanged({
      ...eventDetail,
      image: eventDetail.image.path,
      workHours: eventDetail.workHours.map<WorkHoursDto>((e) => ({
        ...e,
        day: e.day,
        fromHour: e.fromHour,
        toHour: e.toHour,
      })),
      images: eventDetail.images.map<string>((e: FileDto) => e.path),
      coordinates: [
        eventDetail.coordinates.longitude,
        eventDetail.coordinates.latitude,
      ],
      bookingDetails: eventDetail.bookingDetails.map((b) => ({
        ...b,
        icon: b?.icon?.path,
      })),
    } as EventDetailDto);
  },
);

