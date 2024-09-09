import { createForm } from "effector-forms";
import { rules } from "../../utils/rules.ts";
import { sample } from "effector";
import { $loginFx, $registerFx } from "./effects.ts";
import { LoginDto } from "../../dtos/users/loginDto.ts";
import { RegisterDto } from "../../dtos/users/registerDto.ts";
import { $passwordNotMatched } from "./events.ts";

export const $loginForm = createForm<LoginDto>({
  fields: {
    phone: {
      init: "" as string,
      rules: [rules.required(), rules.phone()],
    },
    password: {
      init: "" as string,
      rules: [rules.required()],
    },
  },
  validateOn: ["submit"],
});

export const $registerForm = createForm<RegisterDto>({
  fields: {
    phone: {
      init: "" as string,
      rules: [rules.required(), rules.phone()],
    },
    password: {
      init: "" as string,
      rules: [rules.required()],
    },
    name: {
      init: "",
      rules: [rules.required()],
    },
    repeatPassword: {
      init: "",
      rules: [rules.required()],
    },
  },
  validateOn: ["submit"],
});

sample({
  source: $passwordNotMatched,
  fn: () => ({
    rule: "passwordMatched",
    errorText: "Пароли не совпадают",
  }),
  target: [
    $registerForm.fields.password.addError,
    $registerForm.fields.repeatPassword.addError,
  ],
});

sample({
  source: $loginForm.formValidated,
  target: $loginFx,
});
sample({
  source: $registerForm.formValidated,
  target: $registerFx,
});
