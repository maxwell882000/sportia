import {X} from "@untitled-ui/icons-react";
import {useUnit} from "effector-react";
import {$eventDetailClose} from "../../../states/event/events.ts";

function CloseButton() {
    const [eventDetailClose] = useUnit([$eventDetailClose]);
    return <button
        onClick={eventDetailClose}
        className={`rounded-app hover:bg-opacity-90 h-[2rem] w-[2rem] flex justify-center 
                            items-center text-white text-opacity-50 bg-app-dark top-[1rem] 
                            right-[1rem] absolute z-10`}>
        <X/>
    </button>
}

export default CloseButton
