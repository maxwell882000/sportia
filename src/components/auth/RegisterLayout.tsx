import CustomModal from "../modal/CustomModal.tsx";
import { UserPopUp } from "../../dtos/users/userPopUp.ts";
import BaseDrawer from "../drawer/BaseDrawer.tsx";
import Logo from "../Icons/Logo.tsx";
import { X } from "@untitled-ui/icons-react";
import { useUnit } from "effector-react";
import { $isRegisterPopUp } from "../../states/profile/store.ts";
import { $userPopUpChanged } from "../../states/profile/events.ts";
import { useWindowSize } from "../../hooks/useWindowSize.ts";
import Register from "./Register.tsx";

function RegisterLayout() {
  const [isRegister, userPopUpChanged] = useUnit([
    $isRegisterPopUp,
    $userPopUpChanged,
  ]);
  const windowSize = useWindowSize();
  return (
    <>
      {windowSize.innerWidth >= 768 ? (
        <CustomModal
          isOpen={isRegister}
          close={() => {
            userPopUpChanged(UserPopUp.NONE);
          }}
        >
          <Register />
        </CustomModal>
      ) : (
        <BaseDrawer open={isRegister} activeSnapPoint={1} snapPoints={[0.3, 1]}>
          <div className={"p-[1rem]"}>
            <div className={"pb-[1.5rem]"}>
              <div className={"flex items-center justify-between"}>
                <Logo />
                <button
                  className={"h-[2rem] w-[2rem]"}
                  onClick={() => {
                    userPopUpChanged(UserPopUp.NONE);
                  }}
                >
                  <X className={"text-[#FFFFFF80]"} />
                </button>
              </div>
            </div>
            <Register />
          </div>
        </BaseDrawer>
      )}
    </>
  );
}

export default RegisterLayout;
