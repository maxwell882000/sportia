export interface ChangeProfileRequest {
  name?: string | null;
  phone?: string | null;
  password?: string | null;
  repeatPassword?: string | null;
  oldPassword?: string | null;
}
