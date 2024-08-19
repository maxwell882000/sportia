import { useUnit } from "effector-react";
import { $isLoginPopUp } from "../../../states/users/store.ts";
import { useForm } from "effector-forms";
import { $loginForm } from "../../../states/users/form.ts";
import CustomModal from "../../modal/CustomModal.tsx";
import { UserPopUp } from "../../../dtos/users/userPopUp.ts";
import { $userPopUpChanged } from "../../../states/users/events.ts";
import InputPassword from "../../input/InputPassword.tsx";
import InputPhone from "../../input/InputPhone.tsx";
import Button from "../../button/Button.tsx";

function Login() {
  const [isLogin, userPopUpChanged] = useUnit([
    $isLoginPopUp,
    $userPopUpChanged,
  ]);
  const { fields, submit } = useForm($loginForm);
  return (
    <div>
      <CustomModal
        isOpen={isLogin}
        close={() => {
          userPopUpChanged(UserPopUp.NONE);
        }}
      >
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
              className={"w-full text-[#15171C] hover:bg-[#ACEF03CC]"}
            />
            <Button
              type={"button"}
              onClick={() => {
                userPopUpChanged(UserPopUp.REGISTER);
              }}
              backgroundColor={"#1C1F24"}
              name={"Зарегестрироваться"}
              className={"w-full text-[#FFFFFFCC]"}
            />
          </div>
        </form>
      </CustomModal>
    </div>
  );
}

export default Login;
