import EventTitle from "../EventTitle.tsx";
import {EventDetailDto} from "../../../dtos/events/eventDetailDto.ts";
import {useUnit} from "effector-react";
import {$eventDetail} from "../../../states/event/store.ts";
import {Heart, Share01, User01, Users01} from "@untitled-ui/icons-react";
import Slides from "../../slide/Slides.tsx";
import CloseButton from "./CloseButton.tsx";
import PayInfo from "./PayInfo.tsx";
import Button from "../../button/Button.tsx";
import Football from "../../Icons/Football.tsx";
import WorkHours from "./WorkHours.tsx";
import SimpleBar from "simplebar-react";
import '../../../styles/event.css';
import OverallReview from "../../review/OverallReview.tsx";
import Reviews from "../../review/Reviews.tsx";
import {$eventLiked} from "../../../states/event/events.ts";
import {LINK, TEXT} from "../../../constants/share.ts";

interface Props {
    event: EventDetailDto
}

function EventDetail() {
    const [event, eventLiked] = useUnit([$eventDetail, $eventLiked]);
    return event && (
        <div
            className={`event-detail`}>
            <SimpleBar
                className={"relative fade-in-event-detail rounded-info h-[calc(100vh-15rem)] bg-[#15171C] w-[22.75rem] "}>
                <CloseButton/>
                <Slides images={event.images}/>
                <div className={"p-[1.5rem] "}>
                    <div className={"space-y-6"}>
                        <EventTitle event={event}/>
                        <div>
                            <PayInfo icon={<User01/>}
                                     paymentType={`Ежемесячная оплата`}
                                     payment={`300 000 сум с человека`}/>
                            <PayInfo icon={<Users01/>}
                                     paymentType={`Ежемесячная оплата`}
                                     payment={`300 000 сум с человека`}/>
                        </div>

                        <div className={" flex justify-between"}>
                            <Button
                                backgroundColor={'#ACEF03'}
                                name={"Забронировать"}
                                className={"w-[13.5rem] text-[#15171C] hover:bg-[#ACEF03CC]"}
                                onClick={() => {
                                }} icon={<Football/>}/>
                            <Button
                                backgroundColor={'#1C1F24'}
                                className={"w-[2.5rem] text-white"}
                                onClick={() => {
                                    eventLiked();
                                }}
                                icon={<Heart
                                    className={` ${event.isLiked ? 'fill-[#ACEF03] text-[#ACEF03]' : "icon-stroke-1 "}`}/>}/>
                            <Button
                                backgroundColor={'#1C1F24'}
                                className={"w-[2.5rem] text-white"}
                                onClick={() => {
                                    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(LINK)}&text=${encodeURIComponent(TEXT)}`;
                                    window.open(shareUrl, '_blank', 'noopener,noreferrer');
                                }} icon={<Share01 className={"icon-stroke-1"}/>}/>
                        </div>
                        <div className="border-b border-[#1C1F24]"></div>
                        <WorkHours workHours={event?.workHours}/>
                        <div className="border-b border-[#1C1F24]"></div>
                        <OverallReview event={event}/>
                    </div>
                    <div className={"mt-[2rem]"}>
                        <Reviews event={event}/>
                    </div>
                </div>
            </SimpleBar>

        </div>
    )
}

export default EventDetail
