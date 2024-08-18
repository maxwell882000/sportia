import { sample, Store, StoreWritable } from "effector";
import { userDomain } from "./domain.ts";
import { UserDto } from "../../dtos/users/userDto.ts";
import { $userChanged, $userPopUpChanged } from "./events.ts";
import { UserPopUp } from "../../dtos/users/userPopUp.ts";

export const $user: StoreWritable<UserDto> = userDomain
  .createStore<UserDto>(null)
  .on($userChanged, (_, result) => {
    return result;
  });

export const $isLoggedIn: Store<boolean> = $user.map((u) => !!u);

export const $userPopUp: StoreWritable<UserPopUp> = userDomain
  .createStore<UserPopUp>(UserPopUp.NONE)
  .on($userPopUpChanged, (_, result) => {
    if (result === UserPopUp.DECIDE && $isLoggedIn.getState())
      return UserPopUp.PROFILE;
    else if (result === UserPopUp.DECIDE && !$isLoggedIn.getState())
      return UserPopUp.LOGIN;
    return result;
  });

export const $isLoginPopUp = $userPopUp.map((e) => e === UserPopUp.LOGIN);
export const $isRegisterPopUp = $userPopUp.map((e) => e === UserPopUp.REGISTER);

sample({
  source: $userChanged,
  fn: () => UserPopUp.SUCCESS,
  target: $userPopUpChanged,
});
