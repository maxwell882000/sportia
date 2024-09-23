import BookedEvent from "./BookedEvent.tsx";
import {
  $activeProfile,
  $bookedEvents,
  $likedEvents,
} from "../../states/profile/store.ts";
import { useUnit } from "effector-react";
import LikedEvent from "./LikedEvent.tsx";
import BookCancelPopUp from "./ProfilePopUp/BookCancelPopUp.tsx";
import BookCancelAcceptPopUp from "./ProfilePopUp/BookCancelAcceptPopUp.tsx";

function Profile() {
  const [activeProfile, bookedEvents, likedEvents] = useUnit([
    $activeProfile,
    $bookedEvents,
    $likedEvents,
  ]);
  return (
    <>
      <BookCancelPopUp />
      <BookCancelAcceptPopUp />
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
