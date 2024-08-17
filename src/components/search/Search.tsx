import {ChevronLeft} from "@untitled-ui/icons-react";
import {useUnit} from "effector-react/effector-react.umd";
import {$isSideBarChanged} from "../../states/events.ts";
import {$isSideBar} from "../../states/store.ts";
import InputSearch from "../input/InputSearch.tsx";
import {$activeCategory} from "../../states/category/store.ts";

function Search() {
    const [isSideBar, isSideBarChanged, activeCategory] = useUnit([$isSideBar, $isSideBarChanged, $activeCategory]);
    return <>
        <div className={"flex items-center"}>
            <div className="px-[1.5rem] w-[24rem] box-border">
                <InputSearch className={"w-full"} placeholder={activeCategory?.name}/>
            </div>
            <div
                className={`ml-[0.5rem] h-[2.5rem]  w-[2.5rem]  animate-side-bar"}`}>
                <button onClick={() => {
                    isSideBarChanged(!isSideBar)
                }}
                        className={` bg-app-dark  rounded-app h-[2.5rem] w-[2.5rem] flex justify-center items-center animate-side-bar  `}>
                    <div className={`${isSideBar ? "rotate-0" : "rotate-180"} `}>
                        <ChevronLeft className="text-white"></ChevronLeft>
                    </div>
                </button>
            </div>
        </div>
    </>

}

export default Search
