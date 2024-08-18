import CustomModal from "../modal/CustomModal.tsx";
import Button from "../button/Button.tsx";
import InputPhone from "../input/InputPhone.tsx";
import { useUnit } from "effector-react";
import { $isLoginPopUp } from "../../states/users/store.ts";
import { $userPopUpChanged } from "../../states/users/events.ts";
import { UserPopUp } from "../../dtos/users/userPopUp.ts";
import InputPassword from "../input/InputPassword.tsx";
import { useForm } from "effector-forms";
import { $loginForm } from "../../states/users/form.ts";

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
          <Button
            type={"submit"}
            backgroundColor={"#ACEF03"}
            name={"Войти"}
            className={"w-full text-[#15171C] hover:bg-[#ACEF03CC]"}
          />
        </form>
      </CustomModal>
    </div>
  );
}

export default Login;
