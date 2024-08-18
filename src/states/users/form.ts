import { createForm } from "effector-forms";
import { rules } from "../../utils/rules.ts";
import { sample } from "effector";
import { $loginFx } from "./effects.ts";

export const $loginForm = createForm({
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

sample({
  source: $loginForm.formValidated,
  target: $loginFx,
});
