import CircleAvatar from "../avatar/CircleAvatar.tsx";
import Edit from "../Icons/Edit.tsx";
import InputPassword from "../input/InputPassword.tsx";
import Button from "../button/Button.tsx";
import { UserPopUp } from "../../dtos/users/userPopUp.ts";
import Input from "../input/Input.tsx";
import { useRef } from "react";
import { useForm } from "effector-forms";
import { $profileForm } from "../../states/profile/form.ts";
import { useUnit } from "effector-react";
import { $initials, $user } from "../../states/profile/store.ts";
import { $changeAvatarFx } from "../../states/profile/effects.ts";
import InputPhone from "../input/InputPhone.tsx";

function Setting() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [user, initials, changeAvatar] = useUnit([
    $user,
    $initials,
    $changeAvatarFx,
  ]);
  const { fields, submit } = useForm($profileForm);
  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    changeAvatar(file);
  };

  return (
    <div className={"mx-[1.5rem] my-[1rem]"}>
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
      <CircleAvatar
        onClick={handleIconClick}
        initials={initials}
        imageUrl={user.avatar}
        size={120}
        icon={<Edit />}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className={"mt-[1.5rem] flex flex-col space-y-[1.5rem]"}
      >
        <Input
          options={{
            field: fields.name,
          }}
          required
          placeholder={"Ф.И.О"}
        />
        <InputPhone
          options={{
            field: fields.phone,
          }}
          required
        />
        <InputPassword
          options={{
            field: fields.oldPassword,
          }}
        />
        <InputPassword
          placeholder={"Новый пароль"}
          options={{
            field: fields.password,
          }}
        />
        <InputPassword
          placeholder={"Подтвердить пароль"}
          options={{
            field: fields.repeatPassword,
          }}
        />
        <div className={"space-y-[0.5rem]"}>
          <Button
            type={"submit"}
            backgroundColor={"#1C1F24"}
            name={"Сохранить изменения"}
            className={"!h-[2.5rem] w-full text-[#FFFFFFCC]"}
          />
        </div>
      </form>
    </div>
  );
}

export default Setting;
