import { eventDomain } from "./domain";
import {
  $eventDetailChanged,
  $eventDetailClose,
  $eventLiked,
  $eventsChanged,
} from "./events.ts";
import { defaultEventsDto, EventDto } from "../../dtos/events/eventDto.ts";
import { EventDetailDto } from "../../dtos/events/eventDetailDto.ts";
import { $activeCategory } from "../category/store.ts";
import { isAuth } from "../middlewares.ts";

export const $events = eventDomain
  .createStore<EventDto[]>(defaultEventsDto)
  .on($eventsChanged, (_, result) => result);

export const $eventDetail = eventDomain
  .createStore<EventDetailDto>(null)
  .on($eventDetailChanged, (_, result) => result)
  .on($eventDetailClose, () => null)
  .on($eventLiked, (_) => {
    if (isAuth()) return { ..._, isLiked: !_.isLiked };
    return _;
  });

export const $activeEvents = eventDomain
  .createStore<EventDto[]>(defaultEventsDto)
  .on($activeCategory, (_, category) => {
    return [
      ...$events
        .getState()
        .filter((e) => e.categoryId === category.id || category.id === 0)
        .map((e) => ({ ...e })),
    ];
  });
