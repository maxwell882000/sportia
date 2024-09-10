import UserAvatar from "../auth/UserAvatar.tsx";
import MobileSideBar from "./MobileSideBar.tsx";
import { useUnit } from "effector-react";
import {
  $isMobileSideBar,
  $isSideBar,
  $searchPlaceholder,
} from "../../states/store.ts";
import InputSearch from "../input/InputSearch.tsx";
import { $isSideBarChanged } from "../../states/events.ts";
import Categories from "../category/Categories.tsx";
import Events from "../event/Events.tsx";

function MobileLayout() {
  const [isSideBar, searchPlaceholder] = useUnit([
    $isMobileSideBar,
    $searchPlaceholder,
  ]);
  return (
    <div className={"block md:hidden"}>
      {!isSideBar && (
        <div className={"absolute left-[1rem] top-[4rem] z-10"}>
          <UserAvatar />
        </div>
      )}
      <div className={"absolute"}>
        <MobileSideBar>
          <Categories />
          <div className={"px-[1rem]"}>
            <InputSearch className={"w-full"} placeholder={searchPlaceholder} />
          </div>
          <div className={"overflow-y-scroll"}>
            <Events />
            asfasfasf
            fasfsa
            fas
            asfasf
            <Events />
          </div>
        </MobileSideBar>
      </div>
    </div>
  );
}

export default MobileLayout;
