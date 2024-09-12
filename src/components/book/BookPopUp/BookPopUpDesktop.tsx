import CustomModal from "../../modal/CustomModal.tsx";
import { useUnit } from "effector-react";
import { $bookAccept, $isBookAcceptOpen } from "../../../states/book/store.ts";
import {
  $bookAcceptClose,
  $bookAccepted,
} from "../../../states/book/events.ts";
import Button from "../../button/Button.tsx";
import { $user } from "../../../states/profile/store.ts";
import { BookTypeDto } from "../../../dtos/book/bookTypeDto.ts";
import BookInfo from "./BookInfo.tsx";
import BookPopUp from "./BookPopUp.tsx";

function BookPopUpDesktop() {
  const [isBookAccept, close, user, bookAccept, bookAccepted] = useUnit([
    $isBookAcceptOpen,
    $bookAcceptClose,
    $user,
    $bookAccept,
    $bookAccepted,
  ]);

  return (
    <CustomModal isOpen={isBookAccept} close={close}>
      {bookAccept && <BookPopUp />}
    </CustomModal>
  );
}

export default BookPopUpDesktop;
