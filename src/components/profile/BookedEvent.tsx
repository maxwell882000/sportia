import { BookedEventDto } from "../../dtos/profile/bookedEventDto.ts";
import Button from "../button/Button.tsx";
import { useUnit } from "effector-react";
import { $bookingIdCancelChanged } from "../../states/book/events.ts";
import { BookingStatus } from "../../dtos/profile/bookingStatus.ts";
import { BookingGroupStatus } from "../../dtos/profile/bookingGroupStatus.ts";
import BookedStatus from "./BookedStatus.tsx";
import { bookDomain } from "../../states/book/domain.ts";

interface Props {
  bookedEventDto: BookedEventDto;
}

function BookedEvent({ bookedEventDto }: Props) {
  let color = {
    [BookingStatus.Paid]: "#12B76A",
    [BookingStatus.Canceled]: "#8A8B8D",
    [BookingStatus.Waiting]: "#F79009",
    [BookingStatus.PreparingToPay]: "#F79009",
  };
  let groupColor = {
    [BookingGroupStatus.Filling]: "#0BA5EC",
    [BookingGroupStatus.Filled]: "#12B76A",
    [BookingGroupStatus.Started]: "#12B76A",
    [BookingGroupStatus.Finished]: "#12B76A",
    [BookingGroupStatus.NoStatus]: "",
  };

  let groupText = {
    [BookingGroupStatus.Filling]: "Набор людей",
    [BookingGroupStatus.Filled]: "Люди собраны",
    [BookingGroupStatus.Started]: "Активно",
    [BookingGroupStatus.Finished]: "Завершено",
    [BookingGroupStatus.NoStatus]: "",
  };
  let text = {
    [BookingStatus.Paid]: "Оплачено",
    [BookingStatus.Canceled]: "Отменено",
    [BookingStatus.Waiting]: "Ожидание оплаты",
    [BookingStatus.PreparingToPay]: "Ожидание оплаты",
  };

  const [bookingIdCancelChanged] = useUnit([$bookingIdCancelChanged]);
  return (
    <div className={"space-y-[1rem]"}>
      <div>
        <div className={"flex flex-wrap space-x-[0.5rem] pb-[1rem]"}>
          <BookedStatus
            color={color[bookedEventDto.status]}
            text={text[bookedEventDto.status]}
          ></BookedStatus>
          <BookedStatus
            color={groupColor[bookedEventDto.groupStatus]}
            text={groupText[bookedEventDto.groupStatus]}
          ></BookedStatus>
        </div>

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
      <div className={"flex space-x-[0.5rem]"}>
        {bookedEventDto.paymentUrl &&
          bookedEventDto.status !== BookingStatus.Canceled && (
            <Button
              onClick={() => {
                window.open(bookedEventDto.paymentUrl, "_blank");
              }}
              backgroundColor={"#ACEF03"}
              name={"Оплатить"}
              className={"!h-[2.5rem] w-full"}
            />
          )}
        {bookedEventDto.status !== BookingStatus.Canceled &&
        bookedEventDto.groupStatus !== BookingGroupStatus.Started &&
        bookedEventDto.groupStatus !== BookingGroupStatus.Finished ? (
          <Button
            onClick={() => {
              bookingIdCancelChanged(bookedEventDto.id);
            }}
            backgroundColor={"#1C1F24"}
            name={
              bookedEventDto.paymentUrl ? "Отменить" : "Отменить бронирование"
            }
            className={"!h-[2.5rem] w-full text-[#FFFFFFCC]"}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default BookedEvent;
