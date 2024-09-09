import { userDomain } from "./domain.ts";
import { LoginDto } from "../../dtos/users/loginDto.ts";
import { RegisterDto } from "../../dtos/users/registerDto.ts";
import { UserDto } from "../../dtos/users/userDto.ts";
import { UserPopUp } from "../../dtos/users/userPopUp.ts";


export const $passwordNotMatched = userDomain.createEvent();
