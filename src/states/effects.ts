import { app } from "./domain.ts";
import { Pages } from "../constants/pages.ts";
import { middlewares } from "./middlewares.ts";
import { $previousPageSaved, $savePageChanged } from "./events.ts";
import { $currentPage } from "./store.ts";

export const $pageChangeFx = app.createEffect((page: Pages) => {
  if (page in middlewares && !middlewares[page]()) {
    return;
  }
  if ($currentPage.getState() != page)
    $previousPageSaved($currentPage.getState());
  console.log("IS CHANGES", page as string);
  $savePageChanged(page);
});
