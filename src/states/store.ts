import {app} from "./domain";
import {$isSideBarChanged} from "./events.ts";

export const $isSideBar = app.createStore<boolean>(false)
    .on($isSideBarChanged, (_, result) => result);

export const $isAnimateSideBar = $isSideBar.map(e =>
    (openStyle: string, closeStyle: string) => ' animate-side-bar ' + (e ?
        `${openStyle} opacity-100 visible` : `${closeStyle}  opacity-0 invisible`))