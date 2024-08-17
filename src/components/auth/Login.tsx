import { useState } from "react";
import CustomModal from "../modal/CustomModal.tsx";
import Input from "../input/Input.tsx";
import Button from "../button/Button.tsx";
import InputPhone from "../input/InputPhone.tsx";

function Login() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>asdasd</button>
      <CustomModal isOpen={modalIsOpen} close={closeModal}>
        <div className={"flex flex-col space-y-[1.5rem]"}>
          <InputPhone />
          <Input required placeholder={"Пароль"} />
          <Button
            backgroundColor={"#ACEF03"}
            name={"Войти"}
            className={"w-full text-[#15171C] hover:bg-[#ACEF03CC]"}
            onClick={() => {}}
          />
        </div>
      </CustomModal>
    </div>
  );
}

export default Login;
