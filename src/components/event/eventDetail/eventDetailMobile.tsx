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
import Button from "../../button/Button.tsx";
import { Pages } from "../../../constants/pages.ts";
import Football from "../../Icons/Football.tsx";
import { Heart, Share01 } from "@untitled-ui/icons-react";
import { LINK, TEXT } from "../../../constants/share.ts";
import WorkHours from "./WorkHours.tsx";
import OverallReview from "../../review/OverallReview.tsx";
import Reviews from "../../review/Reviews.tsx";
import { useEffect, useRef, useState } from "react";

export const EventDetailMobile = () => {
  const [event, eventLike, pageChanged] = useUnit([
    $eventDetail,
    $eventLike,
    $pageChanged,
  ]);

  const scrollDivRef = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState(0);
  const [isOnTop, setIsOnTop] = useState<boolean>(false);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (scrollDivRef.current) {
      const isAtTop = scrollDivRef.current.scrollTop === 0;

      // Detect if you're already at the top and scrolling upwards
      if (isAtTop && event.deltaY < 0) {
        console.log("Trying to scroll up, but already at the top!");
        setIsOnTop(false);
        // Add your action here when trying to scroll up from the top
      }
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setStartY(event.touches[0].clientY);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (scrollDivRef.current) {
      const currentY = event.touches[0].clientY;
      const isAtTop = scrollDivRef.current.scrollTop === 0;

      // Detect if you're at the top and trying to scroll down (swiping down)
      if (isAtTop && currentY > startY) {
        setIsOnTop(false);
        // Add your action here when touching and trying to scroll up from the top
      }
    }
  };

  return (
    <div
      className={"flex w-full flex-col  "}
    >
      <div className={"relative z-10 w-screen  "}>
        <Slides images={event.images} />
      </div>
      <div className={"relative z-20"}>
        <BaseDrawer
          activeSnapPoint={isOnTop ? 1 : 0.84}
          setActiveSnapPoint={(snap) => {
            setIsOnTop(snap === 1);
          }}
          snapPoints={[0.84, 1]}
        >
          <div
            ref={scrollDivRef}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className={`remove-scroll   h-full space-y-[1.5rem] ${isOnTop ? "overflow-y-scroll" : ""} p-[1rem]`}
          >
            <div className={"flex"}>
              <EventTitle event={event} />
              <CloseButton className={"!bg-[#1C1F24]"} />
            </div>

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
            <div className={"flex justify-between"}>
              <Button
                backgroundColor={"#ACEF03"}
                name={"Забронировать"}
                className={"w-[13.5rem] text-[#15171C]"}
                onClick={() => {
                  pageChanged(Pages.BOOK);
                }}
                icon={<Football />}
              />
              <Button
                backgroundColor={"#1C1F24"}
                className={"w-[2.5rem] text-white"}
                onClick={() => {
                  eventLike(event.id);
                }}
                icon={
                  <Heart
                    className={` ${event.isLiked ? "fill-[#ACEF03] text-[#ACEF03]" : "icon-stroke-1"}`}
                  />
                }
              />
              <Button
                backgroundColor={"#1C1F24"}
                className={"w-[2.5rem] text-white"}
                onClick={() => {
                  const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(LINK)}&text=${encodeURIComponent(TEXT)}`;
                  window.open(shareUrl, "_blank", "noopener,noreferrer");
                }}
                icon={<Share01 className={"icon-stroke-1"} />}
              />
            </div>
            <div className="border-b border-[#1C1F24]"></div>
            <WorkHours workHours={event?.workHours} />
            <div className="border-b border-[#1C1F24]"></div>
            <OverallReview />
            <div className={"mt-[2rem]"}>
              <Reviews />
            </div>
          </div>
        </BaseDrawer>
      </div>
    </div>
  );
};
