import { InputHTMLAttributes, ReactNode } from "react";

interface Props {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

function InputPrefix({ prefix, inputProps, suffix }: Props) {
  return (
    <div className={"relative w-full"}>
      {prefix && (
        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
          {prefix}
        </div>
      )}

      <input
        {...inputProps}
        type="text"
        id="input-group-1"
        className={`text-14 block h-[3rem] w-full rounded-app bg-[#1C1F24] pe-11 ps-11 text-white text-opacity-80 placeholder-white placeholder-opacity-80 focus:border-none focus-visible:outline-none focus-visible:ring-0 md:h-[3.5rem] md:text-[1.25rem] ${inputProps?.className}`}
      />

      {suffix && (
        <div className="absolute inset-y-0 end-0 flex items-center pe-3">
          {suffix}
        </div>
      )}
    </div>
  );
}

export default InputPrefix;
