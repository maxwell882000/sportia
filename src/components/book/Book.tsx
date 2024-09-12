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
import { $bookingType, $sameBookingCount } from "../../states/book/store.ts";
import { BookingOptionType } from "../../infrastructure/axios/services/booking/dtos/bookingOptionType.ts";
import { Selector } from "../selector/Selector.tsx";
import Input from "../input/Input.tsx";
import BookLabel from "./BookLabel.tsx";
import RoundMan from "../Icons/RoundMan.tsx";
import { BookingUserOptionDto } from "../../dtos/book/bookingUserOptionDto.ts";
import { errorNotification } from "../../utils/notifications/errorNotification.ts";
import BookForm from "./BookForm.tsx";

function Book() {
  const { fields } = useForm($bookForm);

  return (
    <div className={"space-y-[1rem] px-[1.5rem] pb-[1rem]"}>
      <BookChoice
        bookingTypeOptionField={fields.bookingOptions}
        bookTypeField={fields.bookingType}
      />
      <BookForm />
      <BookPopUp />;
    </div>
  );
}

export default Book;
