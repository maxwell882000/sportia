import { useUnit } from "effector-react";
import { $isRegisterPopUp } from "../../../states/users/store.ts";
import {
  $passwordNotMatched,
  $userPopUpChanged,
} from "../../../states/users/events.ts";
import { useForm } from "effector-forms";
import { $registerForm } from "../../../states/users/form.ts";
import CustomModal from "../../modal/CustomModal.tsx";
import { UserPopUp } from "../../../dtos/users/userPopUp.ts";
import Input from "../../input/Input.tsx";
import InputPhone from "../../input/InputPhone.tsx";
import InputPassword from "../../input/InputPassword.tsx";
import Button from "../../button/Button.tsx";

function Register() {
  const [isRegister, userPopUpChanged, passwordNotMatched] = useUnit([
    $isRegisterPopUp,
    $userPopUpChanged,
    $passwordNotMatched,
  ]);
  const { fields, submit, values } = useForm($registerForm);
  return (
    <div>
      <CustomModal
        isOpen={isRegister}
        close={() => {
          userPopUpChanged(UserPopUp.NONE);
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(values);
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
              className={"w-full text-[#15171C] hover:bg-[#ACEF03CC]"}
            />
            <Button
              type={"button"}
              onClick={() => {
                userPopUpChanged(UserPopUp.LOGIN);
              }}
              backgroundColor={"#1C1F24"}
              name={"Войти"}
              className={"w-full text-[#FFFFFFCC]"}
            />
          </div>
        </form>
      </CustomModal>
    </div>
  );
}

export default Register;
