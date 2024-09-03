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
    const userResponse = await ProfileService.getUserProfile();
    $userChanged({
      phone: result.phone,
      name: userResponse.name,
      avatar: userResponse.avatar.path,
    } as UserDto);
  },
);
