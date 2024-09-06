import { eventDomain } from "./domain.ts";
import { EventService } from "../../infrastructure/axios/services/event/eventService.ts";
import { $eventDetailChanged, $eventLiked, $eventsChanged } from "./events.ts";
import { EventDto } from "../../dtos/events/eventDto.ts";
import { FileDto } from "../../infrastructure/axios/services/common/dtos/fileDto.ts";
import { EventDetailDto } from "../../dtos/events/eventDetailDto.ts";
import { WorkHoursDto } from "../../dtos/events/workHoursDto.ts";
import { requestHandler } from "../handler.ts";
import { successNotification } from "../../utils/notifications/successNotification.ts";

export const $getAllEventsFx = eventDomain.createEffect(async () => {
  const allEvents = await requestHandler(EventService.getAllEvents());
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

export const $likeEventFx = eventDomain.createEffect(
  async (eventId: string) => {
    const response = await requestHandler<LikeEventResponse>(
      EventService.likeEvent({ eventId }),
    );
    if (response.isLiked) successNotification("Успешно добавлено в избранное");
    else successNotification("Успешно удаленно из избранного");
    $eventLiked();
  },
);

export const $getEventDetailFx = eventDomain.createEffect(
  async (event: EventDto) => {
    const eventDetail = await requestHandler(
      EventService.getEventDetail({
        id: event.id,
      }),
    );
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
