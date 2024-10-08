import EventDetail from "./EventDetail.tsx";
import { useUnit } from "effector-react";
import { $isAnimateSideBar } from "../../../states/store.ts";

function EventDetailPopUp() {
  const [isAnimateSideBar] = useUnit([$isAnimateSideBar]);

  return (
    <div
      className={`absolute top-[14rem] ${isAnimateSideBar("left-[24.5rem]", "left-[-1rem]")} z-60`}
    >
      <EventDetail></EventDetail>
    </div>
  );
}

export default EventDetailPopUp;
