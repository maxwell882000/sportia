import { profileDomain } from "./domain.ts";
import { UserPopUp } from "../../dtos/users/userPopUp.ts";
import { UserDto } from "../../dtos/users/userDto.ts";
import { EventDto } from "../../dtos/events/eventDto.ts";
import { BookedEventDto } from "../../dtos/profile/bookedEventDto.ts";

export const $profileOpened = profileDomain.createEvent();

export const $likedEventsChanged = profileDomain.createEvent<EventDto[]>();

export const $bookedEventsChanged =
  profileDomain.createEvent<BookedEventDto[]>();

export const $userPopUpChanged = profileDomain.createEvent<UserPopUp>();

export const $userChanged = profileDomain.createEvent<UserDto>();
export const $avatarChanged = profileDomain.createEvent<string>();

export const $bookedEventCanceled = profileDomain.createEvent<string>();
