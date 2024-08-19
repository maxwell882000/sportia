import { User01 } from "@untitled-ui/icons-react";
import Login from "./auth/Login.tsx";
import Register from "./auth/Register.tsx";
import { useUnit } from "effector-react";
import { $initials } from "../../states/users/store.ts";
import { $profileOpened } from "../../states/profile/events.ts";

function UserAvatar() {
  const [profileOpened, initials] = useUnit([$profileOpened, $initials]);
  return (
    <>
      <button
        onClick={() => {
          profileOpened();
        }}
        className={
          "z-30 flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-app bg-app-dark text-[#ACEF03]"
        }
      >
        {initials ? (
          <span className={"text-[2rem] leading-[2rem]"}>{initials}</span>
        ) : (
          <User01 className={"h-[2rem] w-[2rem]"} />
        )}
      </button>
      <Login />
      <Register />
    </>
  );
}

export default UserAvatar;
