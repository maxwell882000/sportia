import Search from "../components/search/Search.tsx";
import { useUnit } from "effector-react";
import {
  $currentPage,
  $isAnimateSideBar,
  $isCategoriesDisappeared,
} from "../states/store.ts";
import MainPage from "./MainPage.tsx";
import BookPage from "./BookPage.tsx";
import { Pages } from "../constants/pages.ts";

function AllPages() {
  const [isCategoriesDisappeared, isAnimateSideBar, currentPage] = useUnit([
    $isCategoriesDisappeared,
    $isAnimateSideBar,
    $currentPage,
  ]);
  const animateCloseOpenSideBar = isAnimateSideBar("left-0", "left-[-24.5rem]");
  return (
    <>
      <div
        className={`animate-search absolute z-50 ${!isCategoriesDisappeared ? "top-[9.5rem]" : "top-[6rem]"}`}
      >
        <Search />
      </div>
      {currentPage === Pages.MAIN && (
        <MainPage className={animateCloseOpenSideBar} />
      )}
      {currentPage === Pages.BOOK && (
        <BookPage className={animateCloseOpenSideBar} />
      )}
    </>
  );
}

export default AllPages;
