import { AddErrorPayload, Form } from "effector-forms";

export function fillFormError<T>(errors: object, form: Form<T>) {
  const errorPayload: AddErrorPayload[] = [];
  for (const key in errors) {
    errorPayload.push({
      field: key,
      rule: "error",
      errorText: errors[key],
    });
  }
  form.addErrors(errorPayload);
}
