import {ReactNode} from "react";

interface Props {
    inputProps?: any,
    prefix?: ReactNode
}

function InputPrefix({prefix, inputProps}: Props) {

    return <div className={"relative w-full"}>
        {prefix && <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            {prefix}
        </div>}

        <input
            {...inputProps}
            type="text" id="input-group-1"
            className={`
            text-[1.25rem] rounded-app  block w-full h-[3.5rem] ps-11
             bg-[#1C1F24] placeholder-white placeholder-opacity-80  
             focus-visible:ring-0 focus-visible:outline-none
              text-white text-opacity-80 focus:border-none  ${inputProps?.className}`}
        />

    </div>
}

export default InputPrefix
