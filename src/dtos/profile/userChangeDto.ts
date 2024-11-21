export interface UserChangeDto {
  phone?: string;
  name?: string;
  password?: string;
  repeatPassword?: string | null;
  oldPassword?: string | null;
}
