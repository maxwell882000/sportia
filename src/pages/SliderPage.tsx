import EventDetailPopUp from "../components/event/eventDetail/EventDetailPopUp.tsx";
import { ReactNode } from "react";

interface Props {
  className?: string;
  choice: ReactNode;
  content: ReactNode;
}

function SliderPage({ className, choice, content }: Props) {
  return (
    <>
      <EventDetailPopUp />
      <div
        className={`relative w-[24rem] pb-[1rem] pt-[2.469rem] ${className}`}
      >
        {choice}
      </div>
      <div className={"h-[3.5rem]"}></div>
      <div
        className={`relative mt-[1rem] w-[24rem] flex-1 overflow-y-scroll ${className}`}
      >
        {content}
      </div>
    </>
  );
}

export default SliderPage;
