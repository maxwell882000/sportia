import React, { useEffect, useState } from "react";
import Check from "../Icons/Check.tsx";
import { ConnectedField } from "effector-forms";

interface Props {
  placeholder: string;
  field?: ConnectedField<boolean>;
  onClick?: (check: boolean) => void;
}

const Checkbox = ({ placeholder, onClick, field }: Props) => {
  // Declare a state variable for the checkbox
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    onClick && onClick(!checked);
    field?.onChange(!checked);
  };

  useEffect(() => {
    if (field && field.value !== null && checked !== field?.value)
      setChecked(field?.value);
  }, [field?.value]);

  const borderColor = () => {
    return field?.hasError()
      ? "border-red-500"
      : checked
        ? "border-none bg-[#ACEF03]"
        : "border-[#FFFFFF1F]";
  };

  return (
    <div className={"flex w-max space-x-[0.5rem]"}>
      <label className="relative flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <span
          className={`flex h-5 w-5 items-center justify-center rounded-[6px] border ${borderColor()} transition-colors duration-200 ease-in-out`}
        >
          {checked && <Check />}
        </span>
        <span
          className={
            "cursor-default select-none pl-2 text-white text-opacity-80"
          }
        >
          {placeholder}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
