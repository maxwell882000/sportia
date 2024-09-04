import CustomModal from "./CustomModal.tsx";
import { MutatingDots } from "react-loader-spinner";
import { useUnit } from "effector-react";
import { $isLoading } from "../../states/store.ts";
import Modal from "react-modal";

function Loader() {
  const [isLoading] = useUnit([$isLoading]);
  return (
    <Modal
      style={{
        overlay: {
          backgroundColor: "#00000099",
          zIndex: 999999,
        },
        content: {
          backgroundColor: "transparent",
          border: "none",
        },
      }}
      isOpen={isLoading}
      onRequestClose={() => {}}
      contentLabel="Example Modal"
    >
      <div className={"h-full w-full flex items-center justify-center"}>
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#ACEF03"
          secondaryColor="#ACEF03"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </Modal>
  );
}

export default Loader;
