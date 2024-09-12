import EventTitle from "../EventTitle.tsx";
import { EventDetailDto } from "../../../dtos/events/eventDetailDto.ts";
import { useUnit } from "effector-react";
import { $eventDetail } from "../../../states/event/store.ts";
import { Heart, Share01, User01, Users01 } from "@untitled-ui/icons-react";
import Slides from "../../slide/Slides.tsx";
import CloseButton from "./CloseButton.tsx";
import PayInfo from "./PayInfo.tsx";
import Button from "../../button/Button.tsx";
import Football from "../../Icons/Football.tsx";
import WorkHours from "./WorkHours.tsx";
import SimpleBar from "simplebar-react";
import "../../../styles/event.css";
import OverallReview from "../../review/OverallReview.tsx";
import Reviews from "../../review/Reviews.tsx";
import { $eventLike, $eventLiked } from "../../../states/event/events.ts";
import { $pageChanged } from "../../../states/events.ts";
import { ReactSVG } from "react-svg";
import EventBooking from "./EventBooking.tsx";

interface Props {
  event: EventDetailDto;
}

function EventDetail() {
  const [event] = useUnit([$eventDetail]);
  return (
    event && (
      <div className={`event-detail`}>
        <SimpleBar
          className={
            "fade-in-event-detail relative h-[calc(100vh-15rem)] w-[22.75rem] rounded-info bg-[#15171C]"
          }
        >
          <CloseButton />
          <Slides images={event.images} />
          <div className={"p-[1.5rem]"}>
            <div className={"space-y-6"}>
              <EventTitle event={event} />
              <div>
                {event.bookingDetails.map((bookingDetail) => (
                  <PayInfo
                    key={`pay-info-${bookingDetail.label}`}
                    icon={<ReactSVG src={bookingDetail.icon} />}
                    paymentType={bookingDetail.label}
                    payment={`${bookingDetail.cost} сум`}
                  />
                ))}
              </div>
              <EventBooking event={event} />
              <div className="border-b border-[#1C1F24]"></div>
              <WorkHours workHours={event?.workHours} />
              <div className="border-b border-[#1C1F24]"></div>
              <OverallReview />
            </div>
            <div className={"mt-[2rem]"}>
              <Reviews />
            </div>
          </div>
        </SimpleBar>
      </div>
    )
  );
}

export default EventDetail;
