import { AuthError } from "../infrastructure/axios/exceptions/authError.ts";
import { $userPopUpChanged } from "./users/events.ts";
import { UserPopUp } from "../dtos/users/userPopUp.ts";

export async function requestHandler<T>(request: Promise): T {
  try {
    return await request;
  } catch (e) {
    console.log("ERROR HAPPENED ", e, e instanceof AuthError);
    if (e instanceof AuthError) {
      $userPopUpChanged(UserPopUp.LOGIN);
    }
    console.error(e);
    throw e;
  }
}
