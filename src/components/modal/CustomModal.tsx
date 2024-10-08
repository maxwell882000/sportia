import Modal from "react-modal";
import Logo from "../Icons/Logo.tsx";
import { X } from "@untitled-ui/icons-react";
import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  close: () => void;
  width?: number;
  height?: number;
  children: ReactNode;
}

function CustomModal({ isOpen, close, width = 24, height, children }: Props) {
  return (
    <Modal
      style={{
        overlay: {
          backgroundColor: "#00000099",
          zIndex: 1000,
        },
        content: {
          backgroundColor: "transparent",
          border: "none",
          inset: 0,
          padding: "1rem",
        },
      }}
      isOpen={isOpen}
      onRequestClose={close}
      contentLabel="Example Modal"
    >
      <div className={"flex h-full w-full items-center justify-center"}>
        <div
          style={{
            width: `${width}rem`,
            maxHeight: height,
          }}
          className={
            "overflow-y-auto rounded-info bg-app-dark p-[1rem] md:space-y-[1.5rem] md:p-[1.5rem]"
          }
        >
          <div className={"hidden items-center justify-between md:flex"}>
            <Logo />
            <button className={"h-[2rem] w-[2rem]"} onClick={close}>
              <X className={"text-[#FFFFFF80]"} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </Modal>
  );
}

export default CustomModal;
