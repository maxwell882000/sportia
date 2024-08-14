import Star from "../Icons/Star.tsx";
import {EventDto} from "../../dtos/events/eventDto.ts";

interface Props {
    event: EventDto
}

function EventTitle({event}: Props) {
    return <>
        <div>
            <h1 className={"text-white text-[1.25rem] font-light pb-1 leading-[1.5rem]"}>{event.name}</h1>
            <div className={"my-0.5 flex space-x-[0.5rem] items-center text-center"}>
                <div className={"flex"}>
                    {Array.from({length: 5}).map((_, index) => {
                        const progress = Math.max(0, Math.min(event.review - index, 1));
                        return <Star key={index} progress={progress}/>;
                    })}
                </div>
                <span className={"text-white"}>{event.review}</span>
                <span className={"text-white text-opacity-50"}>{event.commentCount} отзывов</span>
            </div>
            <div className={"text-[0.875rem] mt-0.5 space-y-0.5"}>
                <p className={`${event.isOpen ? 'text-[#ACEF03]' : 'text-[#F63D68]'}`}>{event.workTime}</p>
                <p className={"text-white"}>{event.address}</p>
            </div>
        </div>
    </>
}

export default EventTitle
