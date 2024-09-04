import { userDomain } from "./domain.ts";
import { $userChanged } from "./events.ts";
import { UserDto } from "../../dtos/users/userDto.ts";
import { LoginDto } from "../../dtos/users/loginDto.ts";
import { RegisterDto } from "../../dtos/users/registerDto.ts";
import { AuthService } from "../../infrastructure/axios/services/auth/authService.ts";
import { AuthLoginRequest } from "../../infrastructure/axios/services/auth/dtos/requests/authLoginRequest.ts";
import { AuthStorage } from "../../infrastructure/localStorage/authStorage.ts";
import { AuthToken } from "../../infrastructure/localStorage/dtos/auth/authToken.ts";
import { ProfileService } from "../../infrastructure/axios/services/profile/profileService.ts";
import { AuthRegisterRequest } from "../../infrastructure/axios/services/auth/dtos/requests/authRegisterRequest.ts";
import { sample } from "effector";
import { AppStartGate } from "../gate.ts";
import { $eventDetailChanged } from "../event/events.ts";
import { $isLoadingChanged } from "../events.ts";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const $loginFx = userDomain.createEffect(async (result: LoginDto) => {
  const authTokenResponse = await AuthService.login(result as AuthLoginRequest);
  AuthStorage.setToken(authTokenResponse as AuthToken);
  const userResponse = await ProfileService.getUserProfile();

  $userChanged({
    phone: result.phone,
    name: userResponse.name,
    avatar: userResponse.avatar.path,
  } as UserDto);
});

export const $registerFx = userDomain.createEffect(
  async (result: RegisterDto) => {
    const authTokenResponse = await AuthService.register(
      result as AuthRegisterRequest,
    );
    AuthStorage.setToken(authTokenResponse as AuthToken);
  },
);

export const $initProfileFx = userDomain.createEffect(async () => {
  if (AuthStorage.isToken()) {
    const userResponse = await ProfileService.getUserProfile();
    $userChanged({
      phone: userResponse.phone,
      name: userResponse.name,
      avatar: userResponse.avatar.path,
    } as UserDto);
  }
});

sample({
  source: $registerFx.doneData,
  target: $initProfileFx,
});
sample({
  source: $loginFx.doneData,
  target: $initProfileFx,
});
sample({
  source: AppStartGate.open,
  target: $initProfileFx,
});

sample({
  source: [$registerFx.pending, $loginFx.pending],
  fn: (result) => result.filter((e) => e).length > 0,
  target: $isLoadingChanged,
});
