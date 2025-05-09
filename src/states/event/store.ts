import { eventDomain } from "./domain";
import {
  $eventChanged,
  $eventDetailChanged,
  $eventDetailClose,
  $eventDetailOpened,
  $eventLike,
  $eventLiked,
  $eventReset,
  $eventsChanged,
} from "./events.ts";
import { defaultEventsDto, EventDto } from "../../dtos/events/eventDto.ts";
import { EventDetailDto } from "../../dtos/events/eventDetailDto.ts";
import { $activeCategory } from "../category/store.ts";
import { combine, sample } from "effector";
import { $pageChanged, $previousPageSaved } from "../events.ts";
import { Pages } from "../../constants/pages.ts";
import { AppStartGate } from "../gate.ts";
import { $getAllEventsFx, $getEventDetailFx, $likeEventFx } from "./effects.ts";
import { $aggregateReviewChanged } from "../review/events.ts";
import { $currentPage, $search } from "../store.ts";
import { $loginFx } from "../users/effects.ts";
import Page from "../../pages/Page.tsx";

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
  })
  .reset($eventReset);

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

sample({
  clock: $loginFx.doneData,
  source: $currentPage,
  filter: (page) => page === Pages.DETAIL,
  fn: () => $eventDetail.getState() as EventDto,
  target: [$getEventDetailFx],
});
