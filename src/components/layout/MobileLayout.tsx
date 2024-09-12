import UserAvatar from "../auth/UserAvatar.tsx";
import MobileSideBar from "../sidebar/MobileSideBar.tsx";
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
import AllMobilePages from "../../pages/AllMobilePages.tsx";

function MobileLayout() {
  const [isSideBar, searchPlaceholder] = useUnit([
    $isMobileSideBar,
    $searchPlaceholder,
  ]);
  return (
    <div className={"block text-[0.875rem] md:hidden"}>
      {!isSideBar && (
        <div className={"absolute left-[1rem] top-[4rem] z-10"}>
          <UserAvatar />
        </div>
      )}
      <div className={"absolute"}>
        <AllMobilePages />
      </div>
    </div>
  );
}

export default MobileLayout;
