import { app } from "./domain";
import { Pages } from "../constants/pages.ts";

export const $isSideBarChanged = app.createEvent<boolean>();

export const $searchRestore = app.createEvent();

export const $searchPlaceholderRestore = app.createEvent();

export const $searchChanged = app.createEvent<string>();

export const $searchPlaceholderChanged = app.createEvent<string>();

export const $pageChanged = app.createEvent<Pages>();

export const $previousPageSaved = app.createEvent<Pages>();

export const $pageRestored = app.createEvent();
