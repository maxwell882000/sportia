import React, {useState} from 'react';
import Check from "../Icons/Check.tsx";

interface Props {
    placeholder: string,
    onClick: (check: boolean) => void
}

const Checkbox = ({placeholder, onClick}: Props) => {
    // Declare a state variable for the checkbox
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
        onClick(!checked);
    };

    return (
        <div className={"w-max flex space-x-[0.5rem]"}>
            <label className="relative flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckboxChange}
                    className="sr-only"
                />
                <span
                    className={`w-5 h-5 border rounded-[6px] flex items-center justify-center ${
                        checked ? 'bg-[#ACEF03] border-none ' : 'border-[#FFFFFF1F]'
                    } transition-colors duration-200 ease-in-out`}
                >
        {checked && (
            <Check/>
        )}
          </span>
            </label>
            <span className={"text-white text-opacity-80  cursor-default"}>{placeholder}</span>
        </div>
    );
};

export default Checkbox;
