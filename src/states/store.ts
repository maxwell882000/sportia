import { app } from "./domain";
import { $isSideBarChanged, $pageChanged, $searchChanged } from "./events.ts";
import { combine, sample } from "effector";
import { Pages } from "../constants/pages.ts";
import { $eventDetailChanged } from "./event/events.ts";

export const $isSideBar = app
  .createStore<boolean>(false)
  .on($isSideBarChanged, (_, result) => result);

export const $currentPage = app
  .createStore<Pages>(Pages.MAIN)
  .on($pageChanged, (_, result) => result);

export const $isAnimateSideBar = $isSideBar.map(
  (e) => (openStyle: string, closeStyle: string) =>
    " animate-side-bar " +
    (e
      ? `${openStyle} opacity-100 visible`
      : `${closeStyle}  opacity-0 invisible`),
);

export const $search = app
  .createStore<string>("")
  .on($searchChanged, (_, result) => result);

export const $isCategoriesDisappeared = combine(
  $isSideBar,
  $currentPage,
  (isSideBar, currentPage) => {
    return isSideBar == false || currentPage == Pages.BOOK;
  },
);

sample({
  source: $eventDetailChanged,
  fn: (source) => source.name,
  target: $search,
});
