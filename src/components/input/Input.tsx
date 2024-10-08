import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { ConnectedField } from "effector-forms";

export interface InputProps extends InputHTMLAttributes<any> {
  options?: {
    initValue?: string;
    initRequired?: boolean;
    field?: ConnectedField<any>;
    isArea?: boolean;
    onChange?: (value: string) => void;
  };
  rows?: number;
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

    props?.options?.onChange && props?.options?.onChange(e.target.value);
  };

  useEffect(() => {
    if (props.options?.initValue) {
      inputRef.current.value = props.options?.initValue;
    }
    if (props.options?.field?.value) {
      inputRef.current.value = props.options?.field?.value;
    }
    setValue(inputRef?.current?.value);
  }, []);

  const borderColor = () => {
    return props.options?.field?.hasError()
      ? "border-red-500"
      : "border-white  border-opacity-12";
  };
  const inputClass = `peer w-full rounded-[0.5rem] border ${borderColor()} bg-app-dark px-[1rem] ${props.type == "date" ? "py-[0.625rem]" : "py-[0.688rem]"} text-white text-opacity-80 placeholder-white placeholder-opacity-0 focus-visible:outline-none`;

  return (
    <div className={"relative text-[1rem]"}>
      {props.options?.isArea ? (
        <textarea
          {...props}
          onInput={handleChange}
          ref={inputRef}
          className={inputClass}
        />
      ) : (
        <input
          {...props}
          onInput={handleChange}
          ref={inputRef}
          className={inputClass}
        />
      )}

      {props.placeholder?.length && (
        <div
          className={`absolute left-[1rem] top-1 transform bg-app-dark text-[#FFFFFF80] transition-transform duration-200 peer-placeholder-shown:translate-y-2 peer-focus:-translate-y-[1.125rem] peer-focus:px-0.5 peer-focus:text-[0.75rem] ${
            inputRef?.current?.value
              ? "-translate-y-[1.125rem] px-0.5 text-[0.75rem]"
              : "translate-y-2"
          }`}
          style={{ pointerEvents: "none" }}
        >
          {props?.placeholder}
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
