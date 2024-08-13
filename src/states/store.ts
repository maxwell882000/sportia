import {app} from "./domain";
import {$isSideBarChanged} from "./events.ts";

export const $isSideBar = app.createStore<boolean>(false)
    .on($isSideBarChanged, (_, result) => result)