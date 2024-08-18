import CustomModal from "../modal/CustomModal.tsx";
import Input from "../input/Input.tsx";
import Button from "../button/Button.tsx";
import InputPhone from "../input/InputPhone.tsx";
import { useUnit } from "effector-react";
import { $isRegisterPopUp } from "../../states/users/store.ts";
import { $userPopUpChanged } from "../../states/users/events.ts";
import { UserPopUp } from "../../dtos/users/userPopUp.ts";
import InputPassword from "../input/InputPassword.tsx";

function Register() {
  const [isRegister, userPopUpChanged] = useUnit([
    $isRegisterPopUp,
    $userPopUpChanged,
  ]);

  return (
    <div>
      <CustomModal
        isOpen={isRegister}
        close={() => {
          userPopUpChanged(UserPopUp.NONE);
        }}
      >
        <div className={"flex flex-col space-y-[1.5rem]"}>
          <Input required placeholder={"Ф.И.О"} />
          <InputPhone />
          <InputPassword required placeholder={"Пароль"} />
          <InputPassword required placeholder={"Подтвердить пароль"} />
          <Button
            backgroundColor={"#ACEF03"}
            name={"Зарегестрироваться"}
            className={"w-full text-[#15171C] hover:bg-[#ACEF03CC]"}
            onClick={() => {}}
          />
        </div>
      </CustomModal>
    </div>
  );
}

export default Register;
