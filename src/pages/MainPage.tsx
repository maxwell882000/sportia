import Categories from "../components/category/Categories.tsx";
import Events from "../components/event/Events.tsx";
import EventDetailPopUp from "../components/event/eventDetail/EventDetailPopUp.tsx";

interface Props {
  className?: string;
}

function MainPage({ className }: Props) {
  return (
    <>
      <EventDetailPopUp />
      <div
        className={`relative w-[24rem] pb-[1rem] pt-[2.469rem] ${className}`}
      >
        <Categories />
      </div>
      <div className={"h-[3.5rem]"}></div>
      <div
        className={`relative mt-[2rem] w-[24rem] flex-1 overflow-y-scroll ${className}`}
      >
        <Events />
      </div>
    </>
  );
}

export default MainPage;
