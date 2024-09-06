import { app } from "./domain";
import {
  $isLoadingChanged,
  $isSideBarChanged,
  $pageChanged,
  $pageRestored,
  $previousPageSaved,
  $searchChanged,
  $searchPlaceholderChanged,
  $searchPlaceholderRestore,
  $searchRestore,
} from "./events.ts";
import { combine, createStore, sample } from "effector";
import { Pages, sliderPages } from "../constants/pages.ts";
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
    if (result in middlewares) return middlewares[result]() ? result : _;
    return result;
  });

export const $isLoading = app
  .createStore<boolean>(false)
  .on($isLoadingChanged, (_, result) => result);

export const $isAnimateSideBar = $isSideBar.map(
  (e) => (openStyle: string, closeStyle: string) =>
    " animate-side-bar " +
    (e
      ? `${openStyle} opacity-100 visible`
      : `${closeStyle}  opacity-0 invisible`),
);

export const $search = app
  .createStore<string>("")
  .on($searchChanged, (_, result) => result)
  .reset($searchRestore);

export const $searchPlaceholder = app
  .createStore<string>("Поиск")
  .on($searchPlaceholderChanged, (_, result) => result)
  .reset($searchPlaceholderRestore);

export const $isSliderDisappeared = combine(
  $isSideBar,
  $currentPage,
  (isSideBar, currentPage) => {
    return isSideBar == false || !sliderPages.has(currentPage);
  },
);

sample({
  source: $pageChanged,
  target: $previousPageSaved,
});

sample({
  source: $eventDetailChanged,
  fn: (source) => source.name,
  target: [$search, $isSideBarChanged],
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