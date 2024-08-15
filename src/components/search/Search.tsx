import {ChevronLeft, ChevronRight} from "@untitled-ui/icons-react";
import {useUnit} from "effector-react/effector-react.umd";
import {$isSideBarChanged, $pageChanged} from "../../states/events.ts";
import {$currentPage, $isSideBar} from "../../states/store.ts";
import InputSearch from "../input/InputSearch.tsx";
import {$activeCategory} from "../../states/category/store.ts";
import {Pages} from "../../constants/pages.ts";

function Search() {
    const [isSideBar, isSideBarChanged, activeCategory, pageChanged, page] = useUnit([$isSideBar, $isSideBarChanged, $activeCategory, $pageChanged, $currentPage]);
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

                <button onClick={() => {
                    pageChanged(Pages.BOOK == page ? Pages.MAIN : Pages.BOOK);
                }}
                        className={` bg-app-dark  rounded-app h-[2.5rem] w-[2.5rem] flex justify-center items-center animate-side-bar  `}>
                    <div className={`${isSideBar ? "rotate-0" : "rotate-180"} `}>
                        <ChevronRight className="text-white"></ChevronRight>
                    </div>
                </button>
            </div>
        </div>
    </>

}

export default Search
