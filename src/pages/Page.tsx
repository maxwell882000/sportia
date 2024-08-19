import { ReactNode } from "react";

interface Props {
  className: string;
  children: ReactNode;
}

function Page({ className, children }) {
  return (
    <>
      <div className={"mb-[1rem] h-[5rem]"}></div>
      <div className={"mt-[1rem]"}></div>
      <div
        className={`relative order-4 w-[24rem] flex-1 overflow-y-auto ${className} `}
      >
        {children}
      </div>
    </>
  );
}

export default Page;
