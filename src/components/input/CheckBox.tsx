import React, { useState } from "react";
import Check from "../Icons/Check.tsx";

interface Props {
  placeholder: string;
  onClick: (check: boolean) => void;
}

const Checkbox = ({ placeholder, onClick }: Props) => {
  // Declare a state variable for the checkbox
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    onClick(!checked);
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
          className={`flex h-5 w-5 items-center justify-center rounded-[6px] border ${
            checked ? "border-none bg-[#ACEF03]" : "border-[#FFFFFF1F]"
          } transition-colors duration-200 ease-in-out`}
        >
          {checked && <Check />}
        </span>
      </label>
      <span className={"cursor-default text-white text-opacity-80"}>
        {placeholder}
      </span>
    </div>
  );
};

export default Checkbox;
