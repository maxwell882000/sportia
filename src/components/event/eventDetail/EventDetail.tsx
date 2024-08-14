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

interface Props {
    event: EventDetailDto
}

function EventDetail() {
    const [event] = useUnit([$eventDetail]);
    return event && (
        <div
            // key={`detail-${event.id + Math.random()}`}
            className={` fade-in-event-detail   
              rounded-info h-[calc(100vh-15rem)] bg-[#15171C] w-[22.75rem]`}>
            <div className={"overflow-y-scroll relative h-full "}>
                <CloseButton/>
                <Slides images={event.images}/>
                <div className={"p-[1.5rem]"}>
                    <EventTitle event={event}/>
                    <div className={"mt-1"}></div>
                    <PayInfo icon={<User01/>}
                             paymentType={`Ежемесячная оплата`}
                             payment={`300 000 сум с человека`}/>
                    <PayInfo icon={<Users01/>}
                             paymentType={`Ежемесячная оплата`}
                             payment={`300 000 сум с человека`}/>
                    <div className={"py-[1.5rem] flex justify-between border-b border-[#1C1F24]"}>
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
                            }} icon={<Heart className={"icon-stroke-1"}/>}/>
                        <Button
                            backgroundColor={'#1C1F24'}
                            className={"w-[2.5rem] text-white"}
                            onClick={() => {
                            }} icon={<Share01 className={"icon-stroke-1"}/>}/>
                    </div>
                    <WorkHours workHours={event?.workHours}/>
                </div>
            </div>

        </div>
    )
}

export default EventDetail
