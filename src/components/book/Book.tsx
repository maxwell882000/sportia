import BookChoice from "./BookChoice.tsx";
import BookSingle from "./BookSingle/BookSingle.tsx";
import BookTeam from "./BookTeam/BookTeam.tsx";
import { useForm } from "effector-forms";
import { $bookForm } from "../../states/book/form.ts";
import { BookTypeDto } from "../../dtos/book/bookTypeDto.ts";
import Button from "../button/Button.tsx";
import Football from "../Icons/Football.tsx";
import BookPayment from "./BookPayment.tsx";
import { $paymentRequired } from "../../states/book/events.ts";
import { useUnit } from "effector-react";
import BookPopUp from "./BookPopUp/BookPopUp.tsx";

function Book() {
  const { fields, submit } = useForm($bookForm);
  const [paymentRequired] = useUnit([$paymentRequired]);
  return (
    <div className={"space-y-[1rem] px-[1.5rem] pb-[1rem]"}>
      <BookChoice cost={fields.cost} bookType={fields.bookType} />
      {fields.bookType.value === BookTypeDto.SINGLE && (
        <BookSingle fields={fields} />
      )}
      {fields.bookType.value === BookTypeDto.TEAM && (
        <BookTeam fields={fields} />
      )}
      <BookPayment
        isClick={fields.isClick}
        isPayme={fields.isPayme}
        cost={fields.cost.value}
      />
      <div>
        <Button
          backgroundColor={"#ACEF03"}
          name={"Забронировать"}
          className={"w-full text-[#15171C] hover:bg-[#ACEF03CC]"}
          onClick={() => {
            if (
              fields.isClick.value === false &&
              fields.isPayme.value === false
            ) {
              paymentRequired();
            } else {
              submit();
            }
          }}
          icon={<Football />}
        />
        <p className={"text-[0.75rem] leading-[1rem] text-[#FFFFFF80]"}>
          Нажимая на кнопку, я соглашаюсь с{" "}
          <span className={"text-[0.75rem] text-[#ACEF03]"}>
            условиями бронирования
          </span>
        </p>
      </div>
      <BookPopUp />
    </div>
  );
}

export default Book;
