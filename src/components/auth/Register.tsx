import { useUnit } from "effector-react";
import { $isRegisterPopUp } from "../../states/profile/store.ts";
import { $userPopUpChanged } from "../../states/profile/events.ts";
import { useForm } from "effector-forms";
import { $registerForm } from "../../states/users/form.ts";
import CustomModal from "../modal/CustomModal.tsx";
import { UserPopUp } from "../../dtos/users/userPopUp.ts";
import Input from "../input/Input.tsx";
import InputPhone from "../input/InputPhone.tsx";
import InputPassword from "../input/InputPassword.tsx";
import Button from "../button/Button.tsx";
import { $passwordNotMatched } from "../../states/users/events.ts";

function Register() {
  const [userPopUpChanged, passwordNotMatched] = useUnit([
    $userPopUpChanged,
    $passwordNotMatched,
  ]);
  const { fields, submit, values } = useForm($registerForm);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (values.password !== values.repeatPassword) passwordNotMatched();
          else submit();
        }}
        className={"flex flex-col space-y-[1.5rem]"}
      >
        <Input
          options={{
            field: fields.name,
          }}
          required
          placeholder={"Ф.И.О"}
        />
        <InputPhone
          required
          options={{
            field: fields.phone,
          }}
        />
        <InputPassword
          options={{
            field: fields.password,
          }}
          required
          placeholder={"Пароль"}
        />
        <InputPassword
          options={{
            field: fields.repeatPassword,
          }}
          required
          placeholder={"Подтвердить пароль"}
        />
        <div className={"space-y-[0.5rem]"}>
          <Button
            type={"submit"}
            backgroundColor={"#ACEF03"}
            name={"Зарегестрироваться"}
            className={"!h-[2.5rem] w-full text-[#15171C] hover:bg-[#ACEF03CC]"}
          />
          <Button
            type={"button"}
            onClick={() => {
              userPopUpChanged(UserPopUp.LOGIN);
            }}
            backgroundColor={"#1C1F24"}
            name={"Войти"}
            className={"!h-[2.5rem] w-full text-[#FFFFFFCC]"}
          />
        </div>
      </form>
    </div>
  );
}

export default Register;
