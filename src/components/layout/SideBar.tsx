import {useUnit} from "effector-react";
import {$isAnimateSideBar} from "../../states/store.ts";
import Categories from "../categories/Categories.tsx";
import Events from "../event/Events.tsx";

function SideBar() {
    const [isAnimateSideBar] = useUnit([$isAnimateSideBar]);
    return <div className={`flex flex-col h-screen bg-app-dark w-[24rem] relative
                   ${isAnimateSideBar('left-0', 'left-[-24.5rem]')} z-10`}>
        <div className={"pt-[6rem]"}></div>
        <div>
            <Categories></Categories>
        </div>
        <div className={"pt-[6rem]"}></div>
        <Events/>
    </div>
}

export default SideBar
