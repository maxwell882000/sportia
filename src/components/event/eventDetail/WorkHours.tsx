import {Clock} from "@untitled-ui/icons-react";
import {WorkHoursDto} from "../../../dtos/events/workHoursDto.ts";

interface Props {
    workHours: WorkHoursDto[]
}

function WorkHours({workHours}: Props) {
    return <div className={"flex space-x-2"}>
        <div>
            <Clock className={"text-[#ACEF03]"}/>
        </div>
        <div className={"flex-1"}>
            <span className={"text-white pb-2 text-opacity-80"}>Часы работы</span>
            <div className={"w-full flex flex-col text-white text-opacity-50"}>
                {workHours?.map(w => <div className={"text-[0.875rem] w-full flex justify-between"}>
                    <span>{w.day}</span>
                    <span>{w.fromHour} – {w.toHour}</span>
                </div>)}

            </div>
        </div>
    </div>
}

export default WorkHours
