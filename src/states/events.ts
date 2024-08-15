import {app} from "./domain";
import {Pages} from "../constants/pages.ts";


export const $isSideBarChanged = app.createEvent<boolean>();

export const $pageChanged = app.createEvent<Pages>();
