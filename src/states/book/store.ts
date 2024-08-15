import {bookDomain} from "./domain";
import {$isSideBarChanged} from "./events.ts";
import {createForm} from "effector-forms";
import {rules} from "../../utils/rules.ts";

export const $isSideBar = bookDomain.createStore<boolean>(false)
    .on($isSideBarChanged, (_, result) => result);
