import { userDomain } from "./domain.ts";
import { $userChanged } from "./events.ts";
import { UserDto } from "../../dtos/users/userDto.ts";
import { LoginDto } from "../../dtos/users/loginDto.ts";
import { RegisterDto } from "../../dtos/users/registerDto.ts";

export const $loginFx = userDomain.createEffect((result: LoginDto) => {
  $userChanged({
    phone: result.phone,
    name: "Shokhzod Murodov",
  } as UserDto);
});

export const $registerFx = userDomain.createEffect((result: RegisterDto) => {
  $userChanged({
    phone: result.phone,
    name: result.name,
  } as UserDto);
});
