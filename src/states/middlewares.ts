import { Pages } from "../constants/pages.ts";
import { $isLoggedIn } from "./profile/store.ts";
import { $userPopUpChanged } from "./profile/events.ts";
import { UserPopUp } from "../dtos/users/userPopUp.ts";

export const isAuth = () => {
  return $isLoggedIn.getState();
};

export const middlewares = {
  [Pages.BOOK]: isAuth,
};
