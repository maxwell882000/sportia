import {InputHTMLAttributes, ReactNode} from "react";

interface Props {
    inputProps?: InputHTMLAttributes<HTMLInputElement>,
    prefix?: ReactNode,
    suffix?: ReactNode
}

function InputPrefix({prefix, inputProps, suffix}: Props) {

    return <div className={"relative w-full  "}>
        {prefix && <div className=" absolute inset-y-0 start-0 flex items-center ps-3">
            {prefix}
        </div>}

        <input
            {...inputProps}
            type="text" id="input-group-1"
            className={`  ps-11 pe-11
            text-[1.25rem] rounded-app  block w-full h-[3.5rem]
             bg-[#1C1F24] placeholder-white placeholder-opacity-80  
             focus-visible:ring-0 focus-visible:outline-none 
              text-white text-opacity-80 focus:border-none  ${inputProps?.className}`}
        />

        {suffix && <div className=" absolute inset-y-0 end-0 flex items-center pe-3">
            {suffix}
        </div>}

    </div>
}

export default InputPrefix
