import { app } from "./domain";
import {
  $isSideBarChanged,
  $pageChanged,
  $pageRestored,
  $previousPageSaved,
  $searchChanged,
} from "./events.ts";
import { createStore, sample } from "effector";
import { Pages } from "../constants/pages.ts";
import { $eventDetailChanged } from "./event/events.ts";
import { $userPopUpChanged } from "./users/events.ts";
import { UserPopUp } from "../dtos/users/userPopUp.ts";
import { middlewares } from "./middlewares.ts";

export const $isSideBar = app
  .createStore<boolean>(false)
  .on($isSideBarChanged, (_, result) => result);

const $previousPage = app
  .createStore<Pages>(Pages.MAIN)
  .on($previousPageSaved, (_, result) => result);

export const $currentPage = app
  .createStore<Pages>(Pages.MAIN)
  .on($pageChanged, (_, result) => {
    $previousPageSaved(result);
    if (result in middlewares) return middlewares[result]() ? result : _;
    return result;
  });

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

export const $isCategoriesDisappeared = createStore<boolean>(true)
  .on(
    $isSideBarChanged,
    (_, result) => result == false || $currentPage.getState() === Pages.BOOK,
  )
  .on($currentPage, (_, page) => page === Pages.BOOK);

sample({
  source: $eventDetailChanged,
  fn: (source) => source.name,
  target: $search,
});

sample({
  clock: $pageRestored,
  source: $previousPage,
  target: $currentPage,
});

sample({
  source: $userPopUpChanged,
  filter: (result) => result === UserPopUp.SUCCESS,
  target: $pageRestored,
});
