import {ReactNode} from "react";

interface Props {
    label: string
    children: ReactNode
}

function BookLabel({children, label}: Props) {
    return <div className={"space-y-[0.5rem]"}>
        <span className={"text-[0.75rem] text-[#FFFFFFCC] leading-[1rem]"}>{label}</span>
        {children}
    </div>
}

export default BookLabel
