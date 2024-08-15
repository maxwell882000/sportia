import {app} from "./domain";
import {$isSideBarChanged, $pageChanged} from "./events.ts";
import {combine} from "effector";
import {Pages} from "../constants/pages.ts";

export const $isSideBar = app.createStore<boolean>(false)
    .on($isSideBarChanged, (_, result) => result);

export const $currentPage = app.createStore<Pages>(Pages.MAIN)
    .on($pageChanged, (_, result) => result);

export const $isAnimateSideBar = $isSideBar.map(e =>
    (openStyle: string, closeStyle: string) => ' animate-side-bar ' + (e ?
        `${openStyle} opacity-100 visible` : `${closeStyle}  opacity-0 invisible`));


export const $isCategoriesDisappeared = combine($isSideBar, $currentPage, (isSideBar, currentPage) => {
    return isSideBar == false || currentPage == Pages.BOOK;
})