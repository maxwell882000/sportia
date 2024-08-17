import {useSelect} from 'downshift';
import {ChevronDown} from "@untitled-ui/icons-react";
import {ReactNode, useEffect, useRef, useState} from "react";

export interface SelectItem {
    label: string,
    value: any
}

interface Props {
    options: SelectItem[],
    required: boolean,
    placeholder: string,
    onClick: (item: SelectItem) => void,
    customValueElement?: (index: number, item: SelectItem) => ReactNode
}

export const Selector = ({options, required, placeholder, onClick, customValueElement}: Props) => {
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
    } = useSelect({items: options});

    useEffect(() => {
        const updateSize = () => {
            if (selectorRef.current) {
                setWidthChoice(selectorRef.current.getBoundingClientRect().width);
                setHeightChoice(selectorRef.current.getBoundingClientRect().height);
            }
        };
        requestAnimationFrame(updateSize);
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, [selectorRef.current]);

    useEffect(() => {
        onClick(selectedItem);
    }, [selectedItem]);

    return (
        <div className="relative w-full">
            <div ref={selectorRef}>
                <button
                    {...getToggleButtonProps()}
                    className={`
                    text-start
                    w-full 
                    py-[0.75rem]
                    px-[1rem]
                    border bg-app-dark 
                    rounded-[0.5rem] placeholder-white 
                    border-white border-opacity-12
                    placeholder-opacity-0
                    text-white text-opacity-80
                    focus-visible:outline-none`}>
                    <div className="flex justify-between items-center">
                    <span>
                        {selectedItem?.label ||
                            <>
                            <span className={"text-[#FFFFFF80]"}>
                             {placeholder}
                            </span>
                                {required && <span className={"pl-0.5"} style={{color: '#ACEF03CC'}}>*</span>}
                            </>
                        }
                    </span>
                        <span className={`${!isOpen ? "rotate-0" : "rotate-180"} `}>
                        <ChevronDown className={"text-[#FFFFFF80] w-[1.25rem] h-[1.25rem]"}/>
                          </span>
                    </div>
                </button>
            </div>

            <ul {...getMenuProps()}
                style={{
                    width: `${widthChoice}px`,
                    top: `${heightChoice + 5}px`,
                    maxHeight: "10.5rem",
                    maxWidth: '100%', // Ensure it doesn't exceed the container
                }}
                className={`
                    absolute z-10
                    overflow-y-auto
                   transition-opacity duration-200 ease-in-out ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }   cursor-pointer
                    border border-white border-opacity-12 
                    px-[1rem]
                    bg-[#1C1F24] text-white text-opacity-50 rounded-app`}>
                {options.map((item, index) => (
                    <li
                        key={item.label}
                        {...getItemProps({
                            item,
                            index,
                            className: `${highlightedIndex === index && 'text-[white] text-opacity-70'} 
                            ${index !== options.length - 1 && 'border-b border-white border-opacity-12'} py-[0.5rem]`
                        })}
                    >
                        {customValueElement ? customValueElement(index, item) : <span>
                            {item.label}
                        </span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};
