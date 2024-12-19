import { useUnit } from "effector-react";
import { $isBookingCanceledPopUp } from "../../../states/book/store.ts";
import { $isBookingCanceledPopUpChanged } from "../../../states/book/events.ts";
import CustomModal from "../../modal/CustomModal.tsx";
import Button from "../../button/Button.tsx";
import { $isLogoutPopUp } from "../../../states/profile/store.ts";
import { $logoutFx } from "../../../states/users/effects.ts";
import {
  $userChanged,
  $userPopUpChanged,
} from "../../../states/profile/events.ts";
import { UserPopUp } from "../../../dtos/users/userPopUp.ts";
import { $pageChanged } from "../../../states/events.ts";
import { Pages } from "../../../constants/pages.ts";

function LogoutPopUp() {
  const [isLogoutPopUp, logout, userPopUpChanged, pageChanged, userChanged] =
    useUnit([
      $isLogoutPopUp,
      $logoutFx,
      $userPopUpChanged,
      $pageChanged,
      $userChanged,
    ]);

  return (
    <CustomModal
      isOpen={isLogoutPopUp}
      close={() => userPopUpChanged(UserPopUp.NONE)}
    >
      <div className={"space-y-[1rem] text-center"}>
        <span className={"text-[1rem] leading-[1.5rem] text-white"}>
          Вы уверены что хотите выйти из профиля ?
        </span>
        <div className={"flex space-x-10"}>
          <Button
            onClick={async () => {
              await logout();
            }}
            className={"w-full text-[#FFFFFFCC]"}
            name={"Да"}
            backgroundColor={"#F63D68"}
          />{" "}
          <Button
            onClick={() => {
              userPopUpChanged(UserPopUp.NONE);
            }}
            className={"w-full text-[#FFFFFFCC]"}
            name={"Нет"}
            backgroundColor={"#1C1F24"}
          />
        </div>
      </div>
    </CustomModal>
  );
}

export default LogoutPopUp;
