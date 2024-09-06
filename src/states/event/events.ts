import { eventDomain } from "./domain";
import { EventDto } from "../../dtos/events/eventDto.ts";
import { EventDetailDto } from "../../dtos/events/eventDetailDto.ts";

export const $eventsChanged = eventDomain.createEvent<EventDto[]>();
export const $eventChanged = eventDomain.createEvent<EventDto>();
export const $eventDetailChanged = eventDomain.createEvent<EventDetailDto>();
export const $eventDetailClose = eventDomain.createEvent();
export const $eventLike = eventDomain.createEvent<string>();
export const $eventLiked = eventDomain.createEvent();
export const $eventDetailOpened = eventDomain.createEvent<EventDto>();
