import CustomModal from "../../modal/CustomModal.tsx";
import Button from "../../button/Button.tsx";
import { useUnit } from "effector-react";
import { $isBookingCanceledPopUpChanged } from "../../../states/book/events.ts";
import { $isBookingCanceledPopUp } from "../../../states/book/store.ts";

function BookCancelAcceptPopUp() {
  const [isbookingIdCancelAcceptPopUp, isbookingIdCancelAcceptPopUpChanged] = useUnit([
    $isBookingCanceledPopUp,
    $isBookingCanceledPopUpChanged,
  ]);

  return (
    <CustomModal
      isOpen={isbookingIdCancelAcceptPopUp}
      close={() => isbookingIdCancelAcceptPopUpChanged(false)}
    >
      <div className={"space-y-[1rem] text-center"}>
        <span className={"text-white text-[1rem] leading-[1.5rem]"}>
          Ваше бронирование успешно отменено.
        </span>
        <Button
          onClick={() => {
            isbookingIdCancelAcceptPopUpChanged(false);
          }}
          className={"w-full"}
          name={"Закрыть"}
          backgroundColor={"#ACEF03"}
        />
      </div>
    </CustomModal>
  );
}

export default BookCancelAcceptPopUp;
