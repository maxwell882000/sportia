import { User01 } from "@untitled-ui/icons-react";
import { useUnit } from "effector-react";
import { $initials } from "../../states/profile/store.ts";
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
          "z-30 flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-app bg-app-dark text-[#ACEF03] md:h-[3.5rem] md:w-[3.5rem]"
        }
      >
        {initials ? (
          <span
            className={
              "text-[1.25rem] leading-[1.25rem] md:text-[2rem] md:leading-[2rem]"
            }
          >
            {initials}
          </span>
        ) : (
          <User01
            className={"h-[1.25rem] w-[1.25rem] md:h-[2rem] md:w-[2rem]"}
          />
        )}
      </button>
    </>
  );
}

export default UserAvatar;
