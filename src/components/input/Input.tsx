import {InputHTMLAttributes} from "react";

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return <>
        <input {...props} className={`w-full 
                    py-[0.75rem]
                    px-[1rem]
                    border bg-app-dark 
                    rounded placeholder-white 
                    border-white border-opacity-12
                    placeholder-opacity-80 
                    text-white text-opacity-80
                    focus-visible:outline-none`}/>
    </>
}

export default Input
