import { createForm } from "effector-forms";
import { rules } from "../../utils/rules.ts";

export const $singleBookForm = createForm({
  fields: {
    name: {
      init: "" as string,
      rules: [rules.required()],
    },
    phone: {
      init: "" as string,
      rules: [rules.required()],
    },
    gameDays: {
      init: "" as string,
      rules: [rules.required()],
    },
  },
  validateOn: ["submit"],
});
