import {EventDto} from "../../dtos/events/eventDto.ts";
import ReviewStar from "../review/ReviewStar.tsx";
import CommentCount from "../review/CommentCount.tsx";

interface Props {
    event: EventDto
}

function EventTitle({event}: Props) {
    return <>
        <div>
            <h1 className={"text-white text-[1.25rem] font-light pb-1 leading-[1.5rem]"}>{event.name}</h1>
            <div className={"my-0.5 flex space-x-[0.5rem] items-center text-center"}>
                <ReviewStar review={event.review}/>
                <span className={"text-white"}>{event.review}</span>
                <CommentCount commentCount={event.commentCount}/>
            </div>
            <div className={"text-[0.875rem] mt-0.5 space-y-0.5"}>
                <p className={`${event.isOpen ? 'text-[#ACEF03]' : 'text-[#F63D68]'}`}>{event.workTime}</p>
                <p className={"text-white"}>{event.address}</p>
            </div>
        </div>
    </>
}

export default EventTitle
