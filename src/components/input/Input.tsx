import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { ConnectedField } from "effector-forms";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  options?: {
    initValue?: string;
    initRequired?: boolean;
    field?: ConnectedField<any>;
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

    props?.options?.field?.onChange(e.target.value);
  };

  useEffect(() => {
    if (props.options?.initValue) {
      inputRef.current.value = props.options?.initValue;
      setValue(inputRef.current.value);
    }
  }, []);

  const borderColor = () => {
    return props.options?.field.hasError()
      ? "border-red-500"
      : "border-white  border-opacity-12";
  };

  return (
    <div className={"relative text-[1rem]"}>
      <input
        {...props}
        onInput={handleChange}
        ref={inputRef}
        className={`peer w-full rounded-[0.5rem] border ${borderColor()} bg-app-dark px-[1rem] py-[0.75rem] text-white text-opacity-80 placeholder-white placeholder-opacity-0 focus-visible:outline-none`}
      />
      {props.placeholder.length && (
        <div
          className={`absolute left-[1rem] top-1 transform bg-app-dark text-[#FFFFFF80] transition-transform duration-200 peer-placeholder-shown:translate-y-2 peer-focus:-translate-y-[1.125rem] peer-focus:px-0.5 peer-focus:text-[0.75rem] ${
            inputRef?.current?.value
              ? "-translate-y-[1.125rem] px-0.5 text-[0.75rem]"
              : "translate-y-2"
          }`}
          style={{ pointerEvents: "none" }}
        >
          {props.placeholder}
          <span
            className={`w-0 pl-0.5 opacity-0 ${props.required && "opacity-100"} `}
            style={{ color: "#ACEF03CC" }}
          >
            *
          </span>
        </div>
      )}
    </div>
  );
}

export default Input;
