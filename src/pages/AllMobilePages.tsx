import MobileSideBar from "../components/layout/MobileSideBar.tsx";
import Categories from "../components/category/Categories.tsx";
import InputSearch from "../components/input/InputSearch.tsx";
import Events from "../components/event/Events.tsx";
import { useUnit } from "effector-react";
import { $currentPage, $searchPlaceholder } from "../states/store.ts";
import { Pages } from "../constants/pages.ts";
import { EventDetailMobile } from "../components/event/eventDetail/eventDetailMobile.tsx";

function AllMobilePages() {
  const [currentPage, searchPlaceholder] = useUnit([
    $currentPage,
    $searchPlaceholder,
  ]);
  return (
    <>
      {currentPage == Pages.MAIN && (
        <MobileSideBar>
          <Categories />
          <div className={"px-[1rem]"}>
            <InputSearch className={"w-full"} placeholder={searchPlaceholder} />
          </div>
          <div className={"flex-1 overflow-y-scroll"}>
            <Events />
          </div>
        </MobileSideBar>
      )}
      {currentPage == Pages.DETAIL && <EventDetailMobile />}
    </>
  );
}

export default AllMobilePages;
