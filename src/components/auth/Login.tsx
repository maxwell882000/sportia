import { useUnit } from "effector-react";
import { useForm } from "effector-forms";
import { $loginForm } from "../../states/users/form.ts";
import { UserPopUp } from "../../dtos/users/userPopUp.ts";
import { $userPopUpChanged } from "../../states/profile/events.ts";
import InputPassword from "../input/InputPassword.tsx";
import InputPhone from "../input/InputPhone.tsx";
import Button from "../button/Button.tsx";

function Login() {
  const [userPopUpChanged] = useUnit([$userPopUpChanged]);
  const { fields, submit } = useForm($loginForm);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className={"flex flex-col space-y-[1.5rem]"}
      >
        <InputPhone
          required
          options={{
            field: fields.phone,
          }}
        />
        <InputPassword
          required
          options={{
            field: fields.password,
          }}
        />
        <div className={"space-y-[0.5rem]"}>
          <Button
            type={"submit"}
            backgroundColor={"#ACEF03"}
            name={"Войти"}
            className={"!h-[2.5rem] w-full text-[#15171C] hover:bg-[#ACEF03CC]"}
          />
          <Button
            type={"button"}
            onClick={() => {
              userPopUpChanged(UserPopUp.REGISTER);
            }}
            backgroundColor={"#1C1F24"}
            name={"Зарегестрироваться"}
            className={"!h-[2.5rem] w-full text-[#FFFFFFCC]"}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
