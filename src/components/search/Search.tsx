import { ChevronLeft } from "@untitled-ui/icons-react";
import { useUnit } from "effector-react/effector-react.umd";
import { $isSideBarChanged } from "../../states/events.ts";
import { $isSideBar } from "../../states/store.ts";
import InputSearch from "../input/InputSearch.tsx";
import { $activeCategory } from "../../states/category/store.ts";

function Search() {
  const [isSideBar, isSideBarChanged, activeCategory] = useUnit([
    $isSideBar,
    $isSideBarChanged,
    $activeCategory,
  ]);
  return (
    <>
      <div className={"flex items-center"}>
        <div className="box-border w-[24rem] px-[1.5rem]">
          <InputSearch
            className={"w-full"}
            placeholder={activeCategory?.name}
          />
        </div>
        <div className={`animate-side-bar ml-[0.5rem] h-[2.5rem] w-[2.5rem]`}>
          <button
            onClick={() => {
              isSideBarChanged(!isSideBar);
            }}
            className={`animate-side-bar flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-app bg-app-dark`}
          >
            <div className={`${isSideBar ? "rotate-0" : "rotate-180"} `}>
              <ChevronLeft className="text-white"></ChevronLeft>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;
