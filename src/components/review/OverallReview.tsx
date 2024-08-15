import ReviewStar from "./ReviewStar.tsx";
import CommentCount from "./CommentCount.tsx";
import {EventDetailDto} from "../../dtos/events/eventDetailDto.ts";

interface Props {
    event: EventDetailDto
}

function OverallReview({event}: Props) {
    return <div className={"bg-[#1C1F24] flex flex-col rounded-app py-2.5 px-4"}>
        <div className={"flex items-center justify-start space-x-4 pb-2 border-b border-[#15171C]"}>
            <div className={'h-[3.563rem]'}>
                <span
                    className={"tracking-[0.009rem] leading-[2.869rem] text-[3rem] text-opacity-80 text-white"}>5.0</span>
            </div>
            <div>
                <ReviewStar review={event.review}/>
                <CommentCount commentCount={event.commentCount}/>
            </div>

        </div>
        <div className={"mt-2 py-2 flex flex-col justify-center items-center"}>
            <span className={"text-white text-opacity-50 text-[0.875rem]"}>Оцените и оставьте отзыв</span>
            <div>
                <ReviewStar
                    onClick={(review: number) => {
                        console.log("ReviewStar", review)
                    }}
                    startClass={"!w-[2.5rem] !h-[2.5rem] cursor-pointer"}
                    review={event?.ownReview?.review ?? 0}/>
            </div>
        </div>
    </div>
}

export default OverallReview
