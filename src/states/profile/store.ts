import { slideButtonFactory } from "../factories/slideButton/slideButtonFactory.ts";
import {
  defaultProfileOptions,
  ProfileOptions,
} from "../../dtos/profile/profile.ts";
import { combine, createStore, sample, Store, StoreWritable } from "effector";
import {
  $bookedEventsChanged,
  $likedEventsChanged,
  $profileOpened,
  $userChanged,
  $userPopUpChanged,
} from "./events.ts";
import { isAuth } from "../middlewares.ts";
import { Pages } from "../../constants/pages.ts";
import {
  $isSideBarChanged,
  $pageChanged,
  $searchPlaceholderRestore,
  $searchRestore,
} from "../events.ts";
import { delay } from "patronum";
import { UserDto } from "../../dtos/users/userDto.ts";
import { UserPopUp } from "../../dtos/users/userPopUp.ts";
import { AppStartGate } from "../gate.ts";
import {
  $getUserBookedEventsFx,
  $getUserLikedEventsFx,
  $getUserProfileFx,
} from "./effects.ts";
import { profileDomain } from "./domain.ts";
import { EventDto } from "../../dtos/events/eventDto.ts";
import { BookedEventDto } from "../../dtos/profile/bookedEventDto.ts";

export const {
  $slides: $profilesOption,
  $activeSlide: $activeProfile,
  $slideActivated: $profileActivated,
} = slideButtonFactory<ProfileOptions>(profileDomain, defaultProfileOptions);

export const $user: StoreWritable<UserDto> = profileDomain
  .createStore<UserDto>(null)
  .on($userChanged, (_, result) => {
    return result;
  });

export const _search = profileDomain.createStore<string>("");

const _likedEvents: StoreWritable<EventDto[]> = profileDomain
  .createStore<EventDto[]>([])
  .on($likedEventsChanged, (_, result) => {
    return result;
  });

export const $likedEvents = combine(
  _search,
  _likedEvents,
  (search, likedEvent) =>
    likedEvent.filter(
      (e) =>
        e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        !search,
    ),
);
const _bookedEvents: StoreWritable<BookedEventDto[]> = profileDomain
  .createStore<BookedEventDto[]>([])
  .on($bookedEventsChanged, (_, result) => {
    return result;
  });
export const $bookedEvents = combine(
  _search,
  _bookedEvents,
  (search, bookedEvents) =>
    bookedEvents.filter(
      (e) =>
        e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        !search,
    ),
);

export const $initials: Store<string | null> = $user.map((e) =>
  e?.name
    ?.split(" ")
    .slice(0, 2)
    .reduce((letter, e) => letter + (e[0]?.toUpperCase() ?? ""), ""),
);

export const $isLoggedIn: Store<boolean> = $user.map((u) => !!u);

export const $userPopUp: StoreWritable<UserPopUp> = profileDomain
  .createStore<UserPopUp>(UserPopUp.NONE)
  .on($userPopUpChanged, (_, result) => result);

export const $isLoginPopUp = $userPopUp.map((e) => e === UserPopUp.LOGIN);
export const $isRegisterPopUp = $userPopUp.map((e) => e === UserPopUp.REGISTER);

sample({
  source: $userChanged,
  fn: () => UserPopUp.SUCCESS,
  target: $userPopUpChanged,
});

sample({
  source: AppStartGate.open,
  target: $getUserProfileFx,
});

sample({
  source: $profileOpened,
  filter: () => isAuth(),
  fn: () => Pages.PROFILE,
  target: [
    $pageChanged,
    $searchPlaceholderRestore,
    $searchRestore,
    $getUserBookedEventsFx,
    $getUserLikedEventsFx,
  ],
});

sample({
  source: delay({ source: $profileOpened, timeout: 200 }),
  filter: () => isAuth(),
  fn: () => true,
  target: [$isSideBarChanged],
});
