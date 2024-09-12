import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  paymentType: string;
  payment: string;
}

function PayInfo({ icon, paymentType, payment }: Props) {
  return (
    <div className={"mt-[0.5rem] flex items-center justify-start"}>
      <div className={"pr-[0.5rem] text-[#ACEF03]"}>{icon}</div>
      <div>
        <p
          className={
            "text-12 tracking-[0.009rem] text-white text-opacity-50 md:text-[0.875rem] md:leading-[1.035rem]"
          }
        >
          {paymentType}
        </p>
        <p
          className={
            "text-14 leading-[1.183rem] tracking-[0.009rem] text-white"
          }
        >
          {payment}
        </p>
      </div>
    </div>
  );
}

export default PayInfo;
