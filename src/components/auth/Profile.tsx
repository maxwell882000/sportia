import { User01 } from "@untitled-ui/icons-react";
import Login from "./Login.tsx";
import Register from "./Register.tsx";
import { $userPopUpChanged } from "../../states/users/events.ts";
import { useUnit } from "effector-react";
import { UserPopUp } from "../../dtos/users/userPopUp.ts";

function Profile() {
  const [userPopUpChanged] = useUnit([$userPopUpChanged]);
  return (
    <>
      <button
        onClick={() => {
          userPopUpChanged(UserPopUp.DECIDE);
        }}
        className={
          "z-30 flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-app bg-app-dark text-[#ACEF03]"
        }
      >
        <User01 className={"h-[2rem] w-[2rem]"} />
      </button>
      <Login />
      <Register />
    </>
  );
}

export default Profile;
