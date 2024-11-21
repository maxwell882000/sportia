import { userDomain } from "./domain.ts";
import { LoginDto } from "../../dtos/users/loginDto.ts";
import { RegisterDto } from "../../dtos/users/registerDto.ts";
import { AuthService } from "../../infrastructure/axios/services/auth/authService.ts";
import { AuthLoginRequest } from "../../infrastructure/axios/services/auth/dtos/requests/authLoginRequest.ts";
import { AuthStorage } from "../../infrastructure/localStorage/authStorage.ts";
import { AuthToken } from "../../infrastructure/localStorage/dtos/auth/authToken.ts";
import { AuthRegisterRequest } from "../../infrastructure/axios/services/auth/dtos/requests/authRegisterRequest.ts";
import { sample } from "effector";
import { $isLoadingChanged, $pageChanged } from "../events.ts";
import { ValidationError } from "../../infrastructure/axios/exceptions/validationError.ts";
import { fillFormError } from "../errors/fillFormError.ts";
import { $loginForm, $registerForm } from "./form.ts";
import { $getUserProfileFx } from "../profile/effects.ts";
import { Pages } from "../../constants/pages.ts";
import { $userChanged, $userPopUpChanged } from "../profile/events.ts";
import { UserPopUp } from "../../dtos/users/userPopUp.ts";

export const $loginFx = userDomain.createEffect(async (result: LoginDto) => {
  try {
    const authTokenResponse = await AuthService.login(
      result as AuthLoginRequest,
    );
    AuthStorage.setToken(authTokenResponse as AuthToken);
  } catch (e) {
    if (e instanceof ValidationError) {
      fillFormError(e.getErrors(), $loginForm);
    } else {
      throw e;
    }
  }
});

export const $logoutFx = userDomain.createEffect(async () => {
  try {
    await AuthService.logout();
    AuthStorage.deleteToken();
    $userPopUpChanged(UserPopUp.NONE);
    $pageChanged(Pages.MAIN);
    $userChanged({
      avatar: null,
      name: null,
      phone: null,
    });
  } catch (e) {}
});

export const $registerFx = userDomain.createEffect(
  async (result: RegisterDto) => {
    try {
      const authTokenResponse = await AuthService.register(
        result as AuthRegisterRequest,
      );
      AuthStorage.setToken(authTokenResponse as AuthToken);
    } catch (e) {
      if (e instanceof ValidationError) {
        fillFormError(e.getErrors(), $loginForm);
      } else {
        throw e;
      }
    }
  },
);

sample({
  source: $registerFx.doneData,
  target: $getUserProfileFx,
});
sample({
  source: $loginFx.doneData,
  target: $getUserProfileFx,
});

sample({
  source: [$registerFx.pending, $loginFx.pending],
  fn: (result) => result.filter((e) => e).length > 0,
  target: $isLoadingChanged,
});

sample({
  source: $loginForm.formValidated,
  target: $loginFx,
});
sample({
  source: $registerForm.formValidated,
  target: $registerFx,
});
