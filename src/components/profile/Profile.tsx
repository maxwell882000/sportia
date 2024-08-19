import BookedEvent from "./BookedEvent.tsx";
import { BookTypeDto } from "../../dtos/book/bookTypeDto.ts";

function Profile() {
  return (
    <div className={"px-[1.5rem] py-[1rem]"}>
      <BookedEvent
        bookedEventDto={{
          id: 1,
          name: "Футбольное поле 1",
          date: "Август 15",
          time: "19:00-21:00",
          bookType: BookTypeDto.TEAM,
          cost: 500000,
        }}
      />
    </div>
  );
}

export default Profile;
