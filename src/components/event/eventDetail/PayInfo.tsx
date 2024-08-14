import {ReactNode} from "react";

interface Props {
    icon: ReactNode,
    paymentType: string,
    payment: string,
}

function PayInfo({icon, paymentType, payment}: Props) {
    return <div className={"mt-[0.5rem] flex justify-start items-center "}>
        <div className={"text-[#ACEF03] pr-[0.5rem]"}>
            {icon}
        </div>
        <div>
            <p className={"text-white text-opacity-50 text-[0.875rem] leading-[1.035rem] tracking-[0.009rem]"}>
                {paymentType}
            </p>
            <p className={"text-white leading-[1.183rem] tracking-[0.009rem]"}>
                {payment}
            </p>
        </div>
    </div>
}

export default PayInfo
