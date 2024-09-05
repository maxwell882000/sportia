import { sample, Store, StoreWritable } from "effector";
import { userDomain } from "./domain.ts";
import { UserDto } from "../../dtos/users/userDto.ts";
import { $userChanged, $userPopUpChanged } from "./events.ts";
import { UserPopUp } from "../../dtos/users/userPopUp.ts";
import { AppStartGate } from "../gate.ts";
import { $initProfileFx, $loginFx, $registerFx } from "./effects.ts";
import { $loginForm, $registerForm } from "./form.ts";

export const $user: StoreWritable<UserDto> = userDomain
  .createStore<UserDto>(null)
  .on($userChanged, (_, result) => {
    return result;
  });

export const $initials: Store<string | null> = $user.map((e) =>
  e?.name
    ?.split(" ")
    .slice(0, 2)
    .reduce((letter, e) => letter + (e[0]?.toUpperCase() ?? ""), ""),
);

export const $isLoggedIn: Store<boolean> = $user.map((u) => !!u);

export const $userPopUp: StoreWritable<UserPopUp> = userDomain
  .createStore<UserPopUp>(UserPopUp.NONE)
  .on($userPopUpChanged, (_, result) => result);

export const $isLoginPopUp = $userPopUp.map((e) => e === UserPopUp.LOGIN);
export const $isRegisterPopUp = $userPopUp.map((e) => e === UserPopUp.REGISTER);

sample({
  source: $userChanged,
  fn: () => UserPopUp.SUCCESS,
  target: $userPopUpChanged,
});

sample({
  source: AppStartGate.open,
  target: $initProfileFx,
});

sample({
  source: $loginForm.formValidated,
  target: $loginFx,
});
sample({
  source: $registerForm.formValidated,
  target: $registerFx,
});
