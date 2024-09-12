import Button from "../../button/Button.tsx";
import { Pages } from "../../../constants/pages.ts";
import Football from "../../Icons/Football.tsx";
import { Heart, Share01 } from "@untitled-ui/icons-react";
import { LINK, TEXT } from "../../../constants/share.ts";
import { useUnit } from "effector-react";
import { $eventLike } from "../../../states/event/events.ts";
import { $pageChanged } from "../../../states/events.ts";
import { EventDto } from "../../../dtos/events/eventDto.ts";
import { EventDetailDto } from "../../../dtos/events/eventDetailDto.ts";

interface Props {
  event: EventDetailDto;
}

function EventBooking({ event }: Props) {
  const [eventLike, pageChanged] = useUnit([$eventLike, $pageChanged]);
  return (
    <div className={"flex justify-between"}>
      <Button
        backgroundColor={"#ACEF03"}
        name={"Забронировать"}
        className={"!h-[2.5rem] w-[12rem] text-[#15171C] md:w-[13.5rem]"}
        onClick={() => {
          pageChanged(Pages.BOOK);
        }}
        icon={<Football />}
      />
      <Button
        backgroundColor={"#1C1F24"}
        className={"!h-[2.5rem] w-[2.5rem] text-white"}
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
        className={"!h-[2.5rem] w-[2.5rem] text-white"}
        onClick={() => {
          const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(LINK)}&text=${encodeURIComponent(TEXT)}`;
          window.open(shareUrl, "_blank", "noopener,noreferrer");
        }}
        icon={<Share01 className={"icon-stroke-1"} />}
      />
    </div>
  );
}

export default EventBooking;
