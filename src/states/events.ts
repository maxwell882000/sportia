import { app } from "./domain";
import { Pages } from "../constants/pages.ts";

export const $isSideBarChanged = app.createEvent<boolean>();

export const $searchChanged = app.createEvent<string>();

export const $pageChanged = app.createEvent<Pages>();
