import BookInfo from "./BookInfo.tsx";
import Button from "../../button/Button.tsx";
import { useUnit } from "effector-react";
import { $bookAccept, $isBookAcceptOpen } from "../../../states/book/store.ts";
import {
  $bookAcceptClose,
  $bookAccepted,
} from "../../../states/book/events.ts";
import { $user } from "../../../states/profile/store.ts";

function BookPopUp() {
  const [user, bookAccept, bookAccepted] = useUnit([
    $user,
    $bookAccept,
    $bookAccepted,
  ]);
  return (
    <div className={"mt-[2.5rem] space-y-[1rem] px-[1rem]"}>
      <div className={"space-y-[0.5rem]"}>
        <BookInfo label={"Имя"} value={user.name} />
        <BookInfo label={"Тип брони"} value={bookAccept.bookingType.label} />
        <BookInfo label={"Контактный номер"} value={user.phone} />
        {bookAccept.bookingOptions.map((e) => (
          <BookInfo
            key={`book-info-${e.optionId}-${e.bookingOptionValue}`}
            label={e.label}
            value={e.bookingOptionValue}
          />
        ))}
      </div>
      <div className={"rounded-app bg-[#1C1F24] px-[1rem] py-[0.625rem]"}>
        <p className={"text-[1rem] text-[#ACEF03]"}>Цена</p>
        <p
          className={
            "py-[0.5rem] text-[2rem] leading-[1.5rem] text-[#FFFFFFCC]"
          }
        >
          {bookAccept.bookingType.cost} сум
        </p>
        <p className={"text-[1rem] text-[#FFFFFF80]"}>
          Пожалуйста, оплатите через {bookAccept.isClick ? "Click" : "Payme"}
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
  );
}

export default BookPopUp;
