import { AuthError } from "../infrastructure/axios/exceptions/authError.ts";
import { $userPopUpChanged } from "./profile/events.ts";
import { UserPopUp } from "../dtos/users/userPopUp.ts";

export async function requestHandler<T>(request: Promise<any>): Promise<T> {
  try {
    return await request;
  } catch (e) {
    if (e instanceof AuthError) {
      $userPopUpChanged(UserPopUp.LOGIN);
    }
    console.error(e);
    throw e;
  }
}
