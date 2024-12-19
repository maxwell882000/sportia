import { app } from "./domain.ts";
import { Pages } from "../constants/pages.ts";
import { isAuth, middlewares } from "./middlewares.ts";
import { $previousPageSaved, $savePageChanged } from "./events.ts";
import { $currentPage } from "./store.ts";
import { $userPopUpChanged } from "./profile/events.ts";
import { UserPopUp } from "../dtos/users/userPopUp.ts";

export const $pageChangeFx = app.createEffect((page: Pages) => {
  if (page in middlewares && !middlewares[page]()) {
    $userPopUpChanged(UserPopUp.LOGIN);
    return;
  }
  if ($currentPage.getState() != page)
    $previousPageSaved($currentPage.getState());
  console.log("IS CHANGES", page as string);
  $savePageChanged(page);
});

export const $checkAuth = app.createEffect(() => {
  if (!isAuth()) $userPopUpChanged(UserPopUp.LOGIN);
});
