import { InputHTMLAttributes, useEffect, useRef, useState } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  options?: {
    initValue?: string;
    initRequired?: boolean;
  };
}

function Input(props: InputProps) {
  const inputRef = useRef(null);
  const [value, setValue] = useState();

  const handleChange = (e) => {
    if (
      props.options?.initRequired &&
      e.target.value.length < props.options?.initValue.length
    ) {
      e.target.value = props.options?.initValue;
    }

    const currentValue = e.target.value;

    if (props.pattern && currentValue) {
      const regEx = new RegExp(props.pattern);
      if (regEx.test(currentValue)) {
        setValue(currentValue);
      } else {
        e.target.value = value;
      }
    } else {
      setValue(currentValue);
    }
  };

  useEffect(() => {
    if (props.options?.initValue) {
      inputRef.current.value = props.options?.initValue;
      setValue(inputRef.current.value);
    }
  }, []);

  const propArgs = () => {
    const temp = { ...props };
    delete temp["options"];
    return temp;
  };
  return (
    <div className={"relative text-[1rem]"}>
      <input
        {...propArgs}
        onInput={handleChange}
        ref={inputRef}
        className={`peer w-full rounded-[0.5rem] border border-white border-opacity-12 bg-app-dark px-[1rem] py-[0.75rem] text-white text-opacity-80 placeholder-white placeholder-opacity-0 focus-visible:outline-none`}
      />

      {props.placeholder.length && (
        <div
          className={`absolute left-[1rem] top-1 transform bg-app-dark text-[#FFFFFF80] transition-transform duration-200 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-focus:-translate-y-[1.125rem] peer-focus:px-0.5 peer-focus:text-[0.75rem] ${
            inputRef?.current?.value
              ? "-translate-y-[1.125rem] px-0.5 text-[0.75rem]"
              : "translate-y-2"
          }`}
          style={{ pointerEvents: "none" }}
        >
          {props.placeholder}
          {props.required && (
            <span className={"pl-0.5"} style={{ color: "#ACEF03CC" }}>
              *
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default Input;
