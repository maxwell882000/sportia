import CustomModal from "../../modal/CustomModal.tsx";
import { useUnit } from "effector-react";
import { $bookAccept, $isBookAcceptOpen } from "../../../states/book/store.ts";
import {
  $bookAcceptClose,
  $bookAccepted,
} from "../../../states/book/events.ts";
import Button from "../../button/Button.tsx";
import { $user } from "../../../states/users/store.ts";
import { BookTypeDto } from "../../../dtos/book/bookTypeDto.ts";
import BookInfo from "./BookInfo.tsx";

function BookPopUp() {
  const [isBookAccept, close, user, bookAccept, bookAccepted] = useUnit([
    $isBookAcceptOpen,
    $bookAcceptClose,
    $user,
    $bookAccept,
    $bookAccepted,
  ]);
  return (
    <CustomModal isOpen={isBookAccept} close={close}>
      {bookAccept && (
        <div className={"mt-[2.5rem] space-y-[1rem] px-[1rem]"}>
          <div className={"space-y-[0.5rem]"}>
            <BookInfo label={"Имя"} value={user.name} />
            <BookInfo
              label={"Тип брони"}
              value={
                bookAccept.bookType === BookTypeDto.SINGLE
                  ? "На одного"
                  : "На команду"
              }
            />
            <BookInfo label={"Контактный номер"} value={user.phone} />

            {bookAccept.bookType === BookTypeDto.TEAM && (
              <BookInfo label={"Дата игры"} value={bookAccept.date} />
            )}

            {bookAccept.bookType === BookTypeDto.SINGLE && (
              <BookInfo label={"Дни игры"} value={bookAccept.days.label} />
            )}

            <BookInfo label={"Время игры"} value={bookAccept.time.label} />
          </div>
          <div className={"bg-[#1C1F24] rounded-app px-[1rem] py-[0.625rem]"}>
            <p className={"text-[1rem] text-[#ACEF03]"}>Цена</p>
            <p className={"text-[2rem] leading-[1.5rem] py-[0.5rem] text-[#FFFFFFCC]"}>
              {bookAccept.cost} сум
            </p>
            <p className={"text-[1rem] text-[#FFFFFF80]"}>
              Пожалуйста, оплатите через{" "}
              {bookAccept.isClick ? "Click" : "Payme"}
            </p>
          </div>
          <Button
            backgroundColor={"#ACEF03"}
            name={"Подтвердить"}
            className={"w-full text-[#15171C] hover:bg-[#ACEF03CC]"}
            onClick={() => {
              bookAccepted();
            }}
          />
        </div>
      )}
    </CustomModal>
  );
}

export default BookPopUp;
