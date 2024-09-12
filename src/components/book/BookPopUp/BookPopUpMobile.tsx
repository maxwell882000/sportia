import BaseDrawer from "../../drawer/BaseDrawer.tsx";
import BookPopUp from "./BookPopUp.tsx";
import Logo from "../../Icons/Logo.tsx";
import { X } from "@untitled-ui/icons-react";
import { useUnit } from "effector-react";
import { $isBookAcceptOpen } from "../../../states/book/store.ts";
import { $bookAcceptClose } from "../../../states/book/events.ts";

function BookPopUpMobile() {
  const [isBookAccept, close] = useUnit([$isBookAcceptOpen, $bookAcceptClose]);
  return (
    isBookAccept && (
      <BaseDrawer snapPoints={[1]}>
        <div className={"flex flex-col h-full"}>
          <div
            className={"flex items-center justify-between px-[1rem] pt-[1rem]"}
          >
            <Logo />
            <button className={"h-[2rem] w-[2rem]"} onClick={close}>
              <X className={"text-[#FFFFFF80]"} />
            </button>
          </div>
          <div className={"h-full overflow-y-auto pb-[1rem]"}>
            <BookPopUp />
          </div>
        </div>
      </BaseDrawer>
    )
  );
}

export default BookPopUpMobile;
