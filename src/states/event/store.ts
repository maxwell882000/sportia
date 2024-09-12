import { eventDomain } from "./domain";
import {
  $eventChanged,
  $eventDetailChanged,
  $eventDetailClose,
  $eventDetailOpened,
  $eventLike,
  $eventLiked,
  $eventsChanged,
} from "./events.ts";
import { defaultEventsDto, EventDto } from "../../dtos/events/eventDto.ts";
import { EventDetailDto } from "../../dtos/events/eventDetailDto.ts";
import { $activeCategory } from "../category/store.ts";
import { combine, sample } from "effector";
import { $pageChanged } from "../events.ts";
import { Pages } from "../../constants/pages.ts";
import { AppStartGate } from "../gate.ts";
import { $getAllEventsFx, $getEventDetailFx, $likeEventFx } from "./effects.ts";
import { $aggregateReviewChanged } from "../review/events.ts";
import { $search } from "../store.ts";

export const $events = eventDomain
  .createStore<EventDto[]>(defaultEventsDto)
  .on($eventChanged, (_: EventDto[], result: EventDto) => {
    return [..._.map((e) => (e.id === result.id ? { ...result } : e))];
  })
  .on($eventsChanged, (_, result) => result);

export const $eventDetail = eventDomain
  .createStore<EventDetailDto>(null)
  .on($eventDetailChanged, (_, result) => result)
  .on($eventDetailClose, () => null)
  .on($aggregateReviewChanged, (_, result) => ({ ..._, ...result }))
  .on($eventLiked, (_) => {
    return { ..._, isLiked: !_.isLiked };
  });

export const $activeEvents = combine(
  $activeCategory,
  $events,
  $search,
  (category, events, search) => {
    return (events ?? [])
      .filter(
        (e) =>
          (e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            !search) &&
          (e.categoryId === category?.id || category?.isDefault),
      )
      .map((e) => ({ ...e }));
  },
);

sample({
  source: $pageChanged,
  filter: (page) => page === Pages.PROFILE,
  target: $eventDetailClose,
});

sample({
  source: AppStartGate.open,
  target: $getAllEventsFx,
});

sample({
  source: $eventDetail,
  fn: (source: EventDetailDto) =>
    ({
      ...source,
    }) as EventDto,
  target: $eventChanged,
});

sample({
  source: $eventDetailOpened,
  target: [$getEventDetailFx],
});

sample({
  source: $eventLike,
  target: $likeEventFx,
});
