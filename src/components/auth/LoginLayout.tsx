import { UserPopUp } from "../../dtos/users/userPopUp.ts";
import CustomModal from "../modal/CustomModal.tsx";
import { useUnit } from "effector-react";
import { $isLoginPopUp, $userPopUp } from "../../states/profile/store.ts";
import { $userPopUpChanged } from "../../states/profile/events.ts";
import Login from "./Login.tsx";
import { useWindowSize } from "../../hooks/useWindowSize.ts";
import BaseDrawer from "../drawer/BaseDrawer.tsx";
import Logo from "../Icons/Logo.tsx";
import { X } from "@untitled-ui/icons-react";

function LoginLayout() {
  const [isLogin, userPopUpChanged] = useUnit([$userPopUp, $userPopUpChanged]);
  const windowSize = useWindowSize();
  return (
    <>
      {windowSize.innerWidth >= 768 ? (
        <CustomModal
          isOpen={isLogin}
          close={() => {
            userPopUpChanged(UserPopUp.NONE);
          }}
        >
          <Login />
        </CustomModal>
      ) : (
        <BaseDrawer open={isLogin} activeSnapPoint={1} snapPoints={[0.3, 1]}>
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
            <Login />
          </div>
        </BaseDrawer>
      )}
    </>
  );
}

export default LoginLayout;
