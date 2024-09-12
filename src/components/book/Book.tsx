import BookChoice from "./BookChoice.tsx";

import { useForm } from "effector-forms";
import { $bookForm } from "../../states/book/form.ts";
import BookPopUpDesktop from "./BookPopUp/BookPopUpDesktop.tsx";
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
      <BookPopUpDesktop />;
    </div>
  );
}

export default Book;
