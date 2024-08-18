import { Pages } from "../constants/pages.ts";
import { $isLoggedIn } from "./users/store.ts";
import { $userPopUpChanged } from "./users/events.ts";
import { UserPopUp } from "../dtos/users/userPopUp.ts";

export const isAuth = () => {
  if ($isLoggedIn.getState()) {
    return true;
  }
  $userPopUpChanged(UserPopUp.LOGIN);
  return false;
};

export const middlewares = {
  [Pages.BOOK]: isAuth,
};
