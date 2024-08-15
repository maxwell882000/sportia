import {InputHTMLAttributes, useEffect, useRef, useState} from "react";

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    const inputRef = useRef(null);
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

    useEffect(() => {
        const inputElement = inputRef.current;

        const handleInput = () => {
            setIsPlaceholderVisible(inputElement.value === '');
        };

        // Add event listener for input change
        inputElement.addEventListener('input', handleInput);

        // Cleanup event listener on component unmount
        return () => {
            inputElement.removeEventListener('input', handleInput);
        };
    }, []);

    return <div className={"relative"}>
        <input
            {...props}
            ref={inputRef}
            className={`w-full 
                    py-[0.75rem]
                    px-[1rem]
                    border bg-app-dark 
                    rounded-[0.5rem] placeholder-white 
                    border-white border-opacity-12
                    placeholder-opacity-0
                    text-white text-opacity-80
                    focus-visible:outline-none`}/>
        {isPlaceholderVisible && (
            <div
                className="absolute inset-y-0 left-0 flex items-center px-[1.1rem] text-[#FFFFFF80]"
                style={{pointerEvents: 'none'}}
            >
                {props.placeholder}
                {props.required && <span className={"pl-0.5"} style={{color: '#ACEF03CC'}}>*</span>}
            </div>
        )}
    </div>
}

export default Input
