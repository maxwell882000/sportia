import { useUnit } from "effector-react";
import { $eventDetail } from "../../../states/event/store.ts";
import { $eventLike } from "../../../states/event/events.ts";
import { $pageChanged } from "../../../states/events.ts";
import Slides from "../../slide/Slides.tsx";
import BaseDrawer from "../../drawer/BaseDrawer.tsx";
import EventTitle from "../EventTitle.tsx";
import CloseButton from "./CloseButton.tsx";
import PayInfo from "./PayInfo.tsx";
import { ReactSVG } from "react-svg";
import WorkHours from "./WorkHours.tsx";
import OverallReview from "../../review/OverallReview.tsx";
import Reviews from "../../review/Reviews.tsx";
import { useRef, useState } from "react";
import EventCard from "../EventCard.tsx";
import { useWindowSize } from "../../../hooks/useWindowSize.ts";
import { useElementSize } from "../../../hooks/useElementSize.ts";
import useScrollToFix from "../../../hooks/useScrollToFix.ts";
import EventBooking from "./EventBooking.tsx";
import ScrollDrawer from "../../drawer/ScrollDrawer.tsx";

export const EventDetailMobile = () => {
  const [event] = useUnit([$eventDetail]);
  const scrollDivRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const slidesRef = useRef<HTMLDivElement>(null);
  const slidesSize = useElementSize(slidesRef);
  const drawerSize = `${windowSize.innerHeight - slidesSize.height * 0.75}px`;
  const title = useScrollToFix<HTMLDivElement, HTMLDivElement>(scrollDivRef);
  const book = useScrollToFix<HTMLDivElement, HTMLDivElement>(scrollDivRef, 16);
  return (
    <div className={"flex w-full flex-col"}>
      <div ref={slidesRef} className={"relative z-10 w-screen"}>
        <Slides images={event?.images} />
      </div>
      <div className={"relative z-20"}>
        <ScrollDrawer
          ref={scrollDivRef}
          drawerSize={drawerSize}
          fixedClassName={`${title.isFixed && "shadow-custom"} ${title.isFixed && book.isFixed ? "pb-[0.25rem]" : title.isFixed && "pb-[1rem]"}`}
          fixedChildren={
            <>
              <h1
                className={
                  "pb-1 text-[0.875rem] font-light leading-[0.875rem] text-white md:text-[1.25rem] md:leading-[1.5rem]"
                }
              >
                {event?.name}
              </h1>
              <CloseButton className={"!bg-[#1C1F24]"} />
              <div className={`mt-[1.25rem] ${!book.isFixed && "hidden"}`}>
                <EventBooking event={event} />
              </div>
            </>
          }
        >
          <div ref={title.elementRef}>
            <EventCard event={event} />
          </div>
          <div>
            {event.bookingDetails.map((bookingDetail) => (
              <PayInfo
                key={`pay-info-${bookingDetail.label}`}
                icon={
                  <ReactSVG
                    className={"pay-info icon-stroke-2"}
                    src={bookingDetail.icon}
                  />
                }
                paymentType={bookingDetail.label}
                payment={`${bookingDetail.cost} сум`}
              />
            ))}
          </div>
          <div
            ref={book.elementRef}
            className={book.isFixed && "invisible h-0"}
          >
            <EventBooking event={event} />
          </div>
          <div className="border-b border-[#1C1F24]"></div>
          <WorkHours workHours={event?.workHours} />
          <div className="border-b border-[#1C1F24]"></div>
          <OverallReview />
          <div className={"mt-[2rem]"}>
            <Reviews />
          </div>
        </ScrollDrawer>
      </div>
    </div>
  );
};
