import Button from "../button/Button.tsx";
import { ConnectedField } from "effector-forms";
import { useUnit } from "effector-react";
import { $bookingType } from "../../states/book/store.ts";
import { ReactSVG } from "react-svg";
import { BookingTypeDto } from "../../dtos/book/bookingTypeDto.ts";
import { BookingUserOptionDto } from "../../dtos/book/bookingUserOptionDto.ts";

interface Props {
  bookTypeField: ConnectedField<BookingTypeDto>;
  bookingTypeOptionField: ConnectedField<BookingUserOptionDto[]>;
}

function BookChoice({ bookTypeField, bookingTypeOptionField }: Props) {
  const [bookingType] = useUnit([$bookingType]);
  return (
    <div className={"flex space-x-[0.5rem]"}>
      {bookingType.map((b) => (
        <Button
          key={`booking-type-${b.id}`}
          backgroundColor={
            bookTypeField?.value?.id === b.id ? "#ACEF03" : "#1C1F24"
          }
          name={b.label}
          className={
            (bookTypeField.value?.id === b.id
              ? "text-[#15171C] "
              : "text-[#ACEF03] ") + " text-[0.875rem] leading-[1.25rem]"
          }
          onClick={() => {
            bookTypeField.onChange(b);
            bookingTypeOptionField.onChange([]);
          }}
          icon={
            <ReactSVG
              src={b.icon.path}
              className={"icon-stroke-1 h-[1.25rem] w-[1.25rem]"}
            />
          }
        ></Button>
      ))}
    </div>
  );
}

export default BookChoice;
