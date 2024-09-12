import UserAvatar from "../auth/UserAvatar.tsx";
import Logo from "../Icons/Logo.tsx";
import AllPages from "../../pages/AllPages.tsx";
import SideBar from "../sidebar/SideBar.tsx";
import { useWindowSize } from "../../hooks/useWindowSize.ts";

function DesktopLayout() {
  const windowSize = useWindowSize();
  return (
    <>
      {windowSize.innerWidth >= 768 && (
        <div className={"hidden md:block"}>
          <div className={"absolute right-[1.5rem] top-[1.5rem] z-50"}>
            <UserAvatar />
          </div>
          <div className={"t-0 l-0 absolute z-10"}>
            <div className={"t-0 l-0 absolute z-20 flex h-screen flex-col"}>
              <div className="px-[1.5rem] pt-[1.5rem]">
                <Logo></Logo>
              </div>
              <AllPages />
            </div>
            <div className={"absolute z-10"}>
              <SideBar />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DesktopLayout;
