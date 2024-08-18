import { useSelect } from "downshift";
import { ChevronDown } from "@untitled-ui/icons-react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { ConnectedField } from "effector-forms";

export interface SelectItem {
  label: string;
  value: any;
}

export interface SelectorProps {
  options: SelectItem[];
  required: boolean;
  placeholder: string;
  onClick?: (item: SelectItem) => void;
  customValueElement?: (index: number, item: SelectItem) => ReactNode;
  field?: ConnectedField<any>;
}

export const Selector = ({
  options,
  required,
  placeholder,
  onClick,
  customValueElement,
  field,
}: SelectorProps) => {
  const selectorRef = useRef<HTMLDivElement | null>(null);
  const [widthChoice, setWidthChoice] = useState<number>(0);
  const [heightChoice, setHeightChoice] = useState<number>(0);
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    selectedItem,
  } = useSelect({ items: options });

  useEffect(() => {
    const updateSize = () => {
      if (selectorRef.current) {
        setWidthChoice(selectorRef.current.getBoundingClientRect().width);
        setHeightChoice(selectorRef.current.getBoundingClientRect().height);
      }
    };
    requestAnimationFrame(updateSize);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [selectorRef.current]);

  useEffect(() => {
    onClick && onClick(selectedItem);
    if (selectedItem) field?.onChange(selectedItem);
  }, [selectedItem]);

  const borderColor = () => {
    return field?.hasError()
      ? "border-red-500"
      : "border-white  border-opacity-12";
  };

  return (
    <div className="relative w-full">
      <div ref={selectorRef} className={"h-[3rem]"}>
        <button
          {...getToggleButtonProps()}
          className={`peer h-full w-full rounded-[0.5rem] border ${borderColor()} bg-app-dark px-[1rem] py-[0.75rem] text-start text-white text-opacity-80 placeholder-white placeholder-opacity-0 focus-visible:outline-none`}
        >
          <div className="flex items-center justify-between">
            <span>{selectedItem?.label}</span>
            <div
              className={`absolute left-[1rem] top-1 transform bg-app-dark text-[#FFFFFF80] transition-transform duration-200 ${
                selectedItem?.label
                  ? "-translate-y-[1.125rem] px-0.5 text-[0.75rem]"
                  : "translate-y-2"
              }`}
            >
              {placeholder}
              {required && (
                <span className={"pl-0.5"} style={{ color: "#ACEF03CC" }}>
                  *
                </span>
              )}
            </div>
            <span className={`${!isOpen ? "rotate-0" : "rotate-180"} `}>
              <ChevronDown
                className={"h-[1.25rem] w-[1.25rem] text-[#FFFFFF80]"}
              />
            </span>
          </div>
        </button>
      </div>

      <ul
        {...getMenuProps()}
        style={{
          width: `${widthChoice}px`,
          top: `${heightChoice + 5}px`,
          maxHeight: "10.5rem",
          maxWidth: "100%", // Ensure it doesn't exceed the container
        }}
        className={`absolute z-10 overflow-y-auto transition-opacity duration-200 ease-in-out ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        } cursor-pointer rounded-app border border-white border-opacity-12 bg-[#1C1F24] px-[1rem] text-white text-opacity-50`}
      >
        {options.map((item, index) => (
          <li
            key={item.label}
            {...getItemProps({
              item,
              index,
              className: `${highlightedIndex === index && "text-[white] text-opacity-70"} 
                            ${index !== options.length - 1 && "border-b border-white border-opacity-12"} py-[0.5rem]`,
            })}
          >
            {customValueElement ? (
              customValueElement(index, item)
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
