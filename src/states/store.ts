import { app } from "./domain";
import {
  $isMobileSideBarChanged,
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
import { combine, sample } from "effector";
import { Pages, sliderPages } from "../constants/pages.ts";
import { $eventDetailChanged, $eventDetailClose } from "./event/events.ts";
import { $userPopUpChanged } from "./profile/events.ts";
import { UserPopUp } from "../dtos/users/userPopUp.ts";
import { middlewares } from "./middlewares.ts";
import { $profileActivated, _search } from "./profile/store.ts";
import { $categoryActivated } from "./category/store.ts";

export const $isSideBar = app
  .createStore<boolean>(false)
  .on($isSideBarChanged, (_, result) => result);

export const $isMobileSideBar = app
  .createStore<boolean>(false)
  .on($isMobileSideBarChanged, (_, result) => result);

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
  .reset(
    $searchRestore,
    $profileActivated,
    $categoryActivated,
    $eventDetailClose,
  );

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
  source: $eventDetailChanged,
  fn: () => Pages.DETAIL,
  target: $pageChanged,
});

sample({
  clock: $eventDetailClose,
  source: $currentPage,
  filter: (source) => source === Pages.DETAIL,
  fn: () => Pages.MAIN,
  target: $pageChanged,
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

sample({
  source: $categoryActivated,
  fn: () => true,
  target: $isMobileSideBarChanged,
});

sample({
  source: $profileActivated,
  fn: () => true,
  target: $isMobileSideBarChanged,
});

sample({
  source: $search,
  target: _search,
});
