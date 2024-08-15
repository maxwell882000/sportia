import Search from "../components/search/Search.tsx";
import Categories from "../components/categories/Categories.tsx";
import Events from "../components/event/Events.tsx";
import {useUnit} from "effector-react";
import {$isAnimateSideBar} from "../states/store.ts";

function Main() {
    const [isAnimateSideBar] = useUnit([$isAnimateSideBar]);

    return <>
        <div className={"order-3"}>
            <Search/>
        </div>
        <div className={`order-2 w-[24rem] pb-[1rem] relative 
         ${isAnimateSideBar('left-0', 'left-[-24.5rem]')}`}>
            <Categories/>
        </div>
        <div
            className={`order-4 mt-[2rem] flex-1 overflow-y-scroll w-[24rem]  relative 
            ${isAnimateSideBar('left-0', 'left-[-24.5rem]')}`}>
            <Events/>
        </div>
    </>
}

export default Main
