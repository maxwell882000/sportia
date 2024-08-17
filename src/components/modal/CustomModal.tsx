import Modal from "react-modal";
import Logo from "../Icons/Logo.tsx";
import {X} from "@untitled-ui/icons-react";
import {ReactNode} from "react";

interface Props {
    isOpen: boolean
    close: () => void,
    width?: number,
    height?: number,
    children: ReactNode
}

function CustomModal({isOpen, close, width = 24, height, children}: Props) {
    return <Modal
        style={{
            overlay: {
                backgroundColor: "#00000099",
                zIndex: 999999,
            },
            content: {
                backgroundColor: "transparent",
                border: 'none'
            }
        }}
        isOpen={isOpen}
        onRequestClose={close}
        contentLabel="Example Modal"
    >
        <div className={'w-full h-full flex justify-center items-center'}>
            <div style={{
                width: `${width}rem`,
                maxHeight: height
            }} className={"bg-app-dark overflow-y-auto p-[1.5rem] space-y-[1.5rem]"}>
                <div className={"flex justify-between items-center"}>
                    <Logo/>
                    <button className={"w-[2rem] h-[2rem]"} onClick={close}>
                        <X className={"text-[#FFFFFF80]"}/>
                    </button>
                </div>
                {children}
            </div>

        </div>

    </Modal>
}

export default CustomModal
