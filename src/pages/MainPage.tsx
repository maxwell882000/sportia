import Categories from "../components/category/Categories.tsx";
import Events from "../components/event/Events.tsx";
import EventDetailPopUp from "../components/event/eventDetail/EventDetailPopUp.tsx";

interface Props {
    className?: string
}

function MainPage({className}: Props) {
    return <>
        <EventDetailPopUp/>
        <div className={`w-[24rem] pt-[2.469rem] pb-[1rem] relative 
        ${className}`}>
            <Categories/>
        </div>
        <div className={"h-[3.5rem]"}>

        </div>
        <div
            className={`mt-[2rem] flex-1 overflow-y-scroll w-[24rem]  relative 
            ${className}`}>
            <Events/>
        </div>
    </>
}

export default MainPage
