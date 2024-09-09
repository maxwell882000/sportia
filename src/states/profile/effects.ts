import { userDomain } from "../users/domain.ts";
import { AuthStorage } from "../../infrastructure/localStorage/authStorage.ts";
import { requestHandler } from "../handler.ts";
import { GetUserProfileResponse } from "../../infrastructure/axios/services/profile/dtos/responses/getUserProfileResponse.ts";
import { ProfileService } from "../../infrastructure/axios/services/profile/profileService.ts";
import {
  $bookedEventsChanged,
  $likedEventsChanged,
  $userChanged,
} from "./events.ts";
import { UserDto } from "../../dtos/users/userDto.ts";
import { GetUserBookedEventsResponse } from "../../infrastructure/axios/services/profile/dtos/responses/getUserBookedEventsResponse.ts";
import { BookedEventDto } from "../../dtos/profile/bookedEventDto.ts";
import { GetUserLikedEventsResponse } from "../../infrastructure/axios/services/profile/dtos/responses/getUserLikedEventsResponse.ts";
import { EventDto } from "../../dtos/events/eventDto.ts";
import { $likedEvents } from "./store.ts";

export const $getUserProfileFx = userDomain.createEffect(async () => {
  if (AuthStorage.isToken()) {
    const userResponse = await requestHandler<GetUserProfileResponse>(
      ProfileService.getUserProfile(),
    );
    $userChanged({
      phone: userResponse.phone,
      name: userResponse.name,
      avatar: userResponse?.avatar?.path,
    } as UserDto);
  }
});

export const $getUserBookedEventsFx = userDomain.createEffect(async () => {
  const response = await requestHandler<GetUserBookedEventsResponse[]>(
    ProfileService.getUserBookedEvents(),
  );
  $bookedEventsChanged([
    ...response.map<BookedEventDto>((e) => ({ ...e }) as BookedEventDto),
  ]);
});

export const $getUserLikedEventsFx = userDomain.createEffect(async () => {
  const response = await requestHandler<GetUserLikedEventsResponse[]>(
    ProfileService.getUserLikedEvents(),
  );
  console.log("$getUserLikedEventsFx", response);
  $likedEventsChanged([
    ...response.map<EventDto>(
      (e) =>
        ({
          ...e,
          image: e.image.path,
          coordinates: [e.coordinates.longitude, e.coordinates.latitude],
        }) as EventDto,
    ),
  ]);

  console.log("sdadsad ", $likedEvents.getState());
});
