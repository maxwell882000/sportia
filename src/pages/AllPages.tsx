import Search from "../components/search/Search.tsx";
import { useUnit } from "effector-react";
import {
  $currentPage,
  $isAnimateSideBar,
  $isSliderDisappeared,
  $previousPage,
} from "../states/store.ts";
import SliderPage from "./SliderPage.tsx";
import { Pages } from "../constants/pages.ts";
import Page from "./Page.tsx";
import Book from "../components/book/Book.tsx";
import Categories from "../components/category/Categories.tsx";
import Events from "../components/event/Events.tsx";
import ProfileOptions from "../components/profile/ProfileOptions.tsx";
import Profile from "../components/profile/Profile.tsx";

function AllPages() {
  const [isCategoriesDisappeared, isAnimateSideBar, currentPage, previousPage] =
    useUnit([
      $isSliderDisappeared,
      $isAnimateSideBar,
      $currentPage,
      $previousPage,
    ]);
  const animateCloseOpenSideBar = isAnimateSideBar("left-0", "left-[-24.5rem]");
  return (
    <>
      <div
        className={`animate-search absolute z-50 ${!isCategoriesDisappeared ? "top-[9.5rem]" : "top-[6rem]"}`}
      >
        <Search />
      </div>
      {(currentPage === Pages.MAIN ||
        (currentPage === Pages.DETAIL && previousPage === Pages.MAIN)) && (
        <SliderPage
          choice={<Categories />}
          content={<Events />}
          className={animateCloseOpenSideBar}
        />
      )}
      {currentPage === Pages.BOOK && (
        <Page className={animateCloseOpenSideBar}>
          <Book />
        </Page>
      )}
      {(currentPage === Pages.PROFILE ||
        (currentPage === Pages.DETAIL && previousPage === Pages.PROFILE)) && (
        <SliderPage
          choice={<ProfileOptions />}
          content={<Profile />}
          className={animateCloseOpenSideBar}
        ></SliderPage>
      )}
    </>
  );
}

export default AllPages;
