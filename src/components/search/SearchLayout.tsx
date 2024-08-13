import {ChevronLeft} from "@untitled-ui/icons-react";
import {useUnit} from "effector-react/effector-react.umd";
import {$isSideBarChanged} from "../../states/events.ts";
import {$isSideBar} from "../../states/store.ts";
import InputSearch from "../inputs/InputSearch.tsx";

function SearchLayout() {
    const [isSideBar, isSideBarChanged] = useUnit([$isSideBar, $isSideBarChanged]);
    return <>
        <div className={"top-[9.5rem] absolute z-20 flex items-center"}>
            <div className="px-[1.5rem] w-[24rem] box-border">
                <InputSearch className={"w-full"} placeholder={"Футбол"}/>
            </div>
            <div
                className={`ml-[0.5rem] h-[2.5rem]  w-[2.5rem]  remove-bar"}`}>
                <button onClick={() => {
                    isSideBarChanged(!isSideBar)
                }}
                        className={` bg-app-dark  rounded-app h-[2.5rem] w-[2.5rem] flex justify-center items-center remove-bar  `}>
                    <div className={`${isSideBar ? "rotate-0" : "rotate-180"} `}>
                        <ChevronLeft className="text-white"></ChevronLeft>
                    </div>
                </button>
            </div>
        </div>
    </>

}

export default SearchLayout
