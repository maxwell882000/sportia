import { BookedEventDto } from "../../dtos/profile/bookedEventDto.ts";
import Button from "../button/Button.tsx";
import { useUnit } from "effector-react";
import { $bookingIdCancelChanged } from "../../states/book/events.ts";

interface Props {
  bookedEventDto: BookedEventDto;
}

function BookedEvent({ bookedEventDto }: Props) {
  const [bookingIdCancelChanged] = useUnit([$bookingIdCancelChanged]);
  return (
    <div className={"space-y-[1rem]"}>
      <div>
        <p
          className={
            "text-14 text-[#ACEF03] md:text-[1rem] md:leading-[1.183rem]"
          }
        >
          {bookedEventDto.options}
        </p>
        <p
          className={
            "mt-[0.25rem] text-[1.25rem] leading-[1.25rem] text-[#FFFFFFCC] md:text-[1.5rem] md:leading-[1.5rem]"
          }
        >
          {bookedEventDto.name}
        </p>
      </div>
      <div>
        <p
          className={
            "text-14 text-[#ACEF03] md:text-[1rem] md:leading-[1.183rem]"
          }
        >
          {bookedEventDto.type}
        </p>
        <p
          className={
            "mt-[0.5rem] text-[1.5rem] leading-[1.5rem] text-[#FFFFFFCC] md:text-[2rem] md:leading-[2rem]"
          }
        >
          {bookedEventDto.cost} сум
        </p>
      </div>
      <Button
        onClick={() => {
          bookingIdCancelChanged(bookedEventDto.id);
        }}
        backgroundColor={"#1C1F24"}
        name={"Отменить бронирование"}
        className={"!h-[2.5rem] w-full text-[#FFFFFFCC]"}
      />
    </div>
  );
}

export default BookedEvent;
