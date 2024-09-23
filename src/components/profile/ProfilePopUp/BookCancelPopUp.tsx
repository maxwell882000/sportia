import CustomModal from "../../modal/CustomModal.tsx";
import Button from "../../button/Button.tsx";
import { $bookingIdCancel } from "../../../states/book/store.ts";
import { useUnit } from "effector-react";
import { $bookingIdCancelChanged } from "../../../states/book/events.ts";
import { $cancelBookingFx } from "../../../states/book/effects.ts";

function BookCancelPopUp() {
  const [bookingIdCancel, bookingIdCancelChanged, cancelBookingFx] = useUnit([
    $bookingIdCancel,
    $bookingIdCancelChanged,
    $cancelBookingFx,
  ]);

  return (
    <CustomModal
      isOpen={!!bookingIdCancel}
      close={() => bookingIdCancelChanged("")}
    >
      <div className={"text-center space-y-[1rem]"}>
        <span className={"text-white text-[1rem] leading-[1.5rem] text-center"}>
          Вы уверены что хотите отменить бронирование?
        </span>
        <div className={"flex items-center justify-between"}>
          <Button
            onClick={() => {
              cancelBookingFx(bookingIdCancel);
            }}
            name={"Да"}
            className={"w-[7.75rem] md:w-[10.25rem]"}
            backgroundColor={"#ACEF03"}
          />
          <Button
            onClick={() => {
              bookingIdCancelChanged("");
            }}
            className={'w-[7.75rem] md:w-[10.25rem] text-white text-opacity-80'}
            name={"Нет"}
            backgroundColor={"#1C1F24"}
          />
        </div>
      </div>
    </CustomModal>
  );
}

export default BookCancelPopUp;
