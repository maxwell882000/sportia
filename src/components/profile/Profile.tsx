import BookedEvent from "./BookedEvent.tsx";
import { BookTypeDto } from "../../dtos/book/bookTypeDto.ts";
import { useState } from "react";
import { useForm } from "effector-forms";
import {
  $activeProfile,
  $bookedEvents,
  $likedEvents,
} from "../../states/profile/store.ts";
import { useUnit } from "effector-react";
import { map } from "../../../types";
import LikedEvent from "./LikedEvent.tsx";

function Profile() {
  const [activeProfile, bookedEvents, likedEvents] = useUnit([
    $activeProfile,
    $bookedEvents,
    $likedEvents,
  ]);
  return (
    <>
      {activeProfile.id === "0" &&
        bookedEvents.map((e) => (
          <div key={`booked-event-${e.id}`} className={"px-[1.5rem] py-[1rem]"}>
            <BookedEvent bookedEventDto={e} />
          </div>
        ))}
      {activeProfile.id === "1" &&
        likedEvents.map((e) => (
          <LikedEvent key={`liked-event-${e.id}`} event={e} />
        ))}
    </>
  );
}

export default Profile;
