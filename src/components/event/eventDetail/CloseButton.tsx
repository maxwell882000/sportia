import { X } from "@untitled-ui/icons-react";
import { useUnit } from "effector-react";
import { $eventDetailClose } from "../../../states/event/events.ts";
import { ButtonHTMLAttributes } from "react";

function CloseButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const [eventDetailClose] = useUnit([$eventDetailClose]);
  return (
    <button
      onClick={eventDetailClose}
      className={`absolute right-[1rem] top-[1rem] z-10 flex h-[2rem] w-[2rem] 
      items-center justify-center rounded-app
       bg-app-dark text-white text-opacity-50 hover:bg-opacity-90 ` + props.className}
    >
      <X />
    </button>
  );
}

export default CloseButton;
