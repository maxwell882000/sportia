import MobileSideBar from "../components/sidebar/MobileSideBar.tsx";
import Categories from "../components/category/Categories.tsx";
import InputSearch from "../components/input/InputSearch.tsx";
import Events from "../components/event/Events.tsx";
import { useUnit } from "effector-react";
import { $currentPage, $searchPlaceholder } from "../states/store.ts";
import { Pages } from "../constants/pages.ts";
import { EventDetailMobile } from "../components/event/eventDetail/EventDetailMobile.tsx";
import { useRef } from "react";
import { useElementSize } from "../hooks/useElementSize.ts";
import { SearchWithPlaceholder } from "../components/search/SearchWithPlaceholder.tsx";
import BookMobile from "../components/book/BookMobile.tsx";

function AllMobilePages() {
  const [currentPage, searchPlaceholder] = useUnit([
    $currentPage,
    $searchPlaceholder,
  ]);
  const categoryAndSearchRef = useRef<HTMLDivElement>(null);
  const categoryAndSearchSize = useElementSize(categoryAndSearchRef);
  return (
    <>
      {currentPage == Pages.MAIN && (
        <MobileSideBar closeSnap={categoryAndSearchSize.height + 32 + "px"}>
          <div
            ref={categoryAndSearchRef}
            className={
              "z-10 w-full space-y-[1rem] overflow-hidden rounded rounded-t-[1.5rem]"
            }
          >
            <Categories />
            <div className={"px-[1rem]"}>
              <SearchWithPlaceholder />
            </div>
          </div>
          <div className={"flex-1 overflow-y-scroll"}>
            <Events />
          </div>
        </MobileSideBar>
      )}
      {currentPage == Pages.DETAIL && <EventDetailMobile />}
      {currentPage == Pages.BOOK && <BookMobile />}
    </>
  );
}

export default AllMobilePages;
