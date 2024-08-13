import {useUnit} from "effector-react";
import {$isSideBar} from "../../states/store.ts";
import Categories from "../categories/Categories.tsx";
import Cards from "../cards/Cards.tsx";

function SideBar() {
    const [isSideBar] = useUnit([$isSideBar])
    return <div className={` flex flex-col h-screen bg-app-dark w-[24rem] relative
                    remove-bar z-10 left-0 ${isSideBar ? "" : "left-[-24rem]"}`}>
        <div className={"pt-[6rem]"}></div>
        <div>
            <Categories></Categories>
        </div>
        <div className={"pt-[6rem]"}></div>
        <Cards/>
    </div>
}

export default SideBar
