import { createForm } from "effector-forms";
import { rules } from "../../utils/rules.ts";
import { UserChangeDto } from "../../dtos/profile/userChangeDto.ts";
import { sample } from "effector";
import { $user } from "./store.ts";
import { $loginFx } from "../users/effects.ts";
import { $changeProfileFx } from "./effects.ts";

export const $profileForm = createForm<UserChangeDto>({
  fields: {
    phone: {
      init: "" as string,
      rules: [rules.phone()],
    },
    name: {
      init: "" as string,
    },
    password: {
      init: "" as string,
    },
    oldPassword: {
      init: "" as string,
    },
    repeatPassword: {
      init: "" as string,
    },
  },
  validateOn: ["submit"],
});

sample({
  source: $user,
  target: $profileForm.setForm,
});

sample({
  source: $profileForm.formValidated,
  target: [
    $changeProfileFx,
    $profileForm.fields.oldPassword.resetValue,
    $profileForm.fields.password.resetValue,
    $profileForm.fields.repeatPassword.resetValue,
  ],
});
