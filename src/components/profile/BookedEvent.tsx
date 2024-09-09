import { BookedEventDto } from "../../dtos/profile/bookedEventDto.ts";
import { BookTypeDto } from "../../dtos/book/bookTypeDto.ts";
import Button from "../button/Button.tsx";

interface Props {
  bookedEventDto: BookedEventDto;
}

function BookedEvent({ bookedEventDto }: Props) {
  return (
    <div className={"space-y-[1rem]"}>
      <div>
        <p className={"text-[1rem] leading-[1.183rem] text-[#ACEF03]"}>
          {bookedEventDto.options}
        </p>
        <p
          className={
            "mt-[0.25rem] text-[1.5rem] leading-[1.5rem] text-[#FFFFFFCC]"
          }
        >
          {bookedEventDto.name}
        </p>
      </div>
      <div>
        <p className={"text-[1rem] leading-[1.183rem] text-[#ACEF03]"}>
          {bookedEventDto.type}
        </p>
        <p
          className={"mt-[0.5rem] text-[2rem] leading-[2rem] text-[#FFFFFFCC]"}
        >
          {bookedEventDto.cost} сум
        </p>
      </div>
      <Button
        backgroundColor={"#1C1F24"}
        name={"Отменить бронирование"}
        className={"w-full text-[#FFFFFFCC]"}
      />
    </div>
  );
}

export default BookedEvent;
