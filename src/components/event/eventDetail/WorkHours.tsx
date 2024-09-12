import { Clock } from "@untitled-ui/icons-react";
import { WorkHoursDto } from "../../../dtos/events/workHoursDto.ts";

interface Props {
  workHours: WorkHoursDto[];
}

function WorkHours({ workHours }: Props) {
  return (
    <div className={"flex space-x-2"}>
      <div>
        <Clock className={"icon-stroke-2 text-[#ACEF03]"} />
      </div>
      <div className={"flex-1"}>
        <span
          className={"text-14 pb-2 text-white text-opacity-80 md:text-[1rem]"}
        >
          Часы работы
        </span>
        <div className={"flex w-full flex-col text-white text-opacity-50"}>
          {workHours?.map((w, index) => (
            <div
              key={`work-hours-${index}`}
              className={"mt-[0.25rem] w-full text-[0.875rem]"}
            >
              <div className={"flex w-full justify-between"}>
                <span
                  className={"text-12 md:text-[0.875rem] md:leading-[1.035rem]"}
                >
                  {w.day}
                </span>
                <span
                  className={"text-12 md:text-[0.875rem] md:leading-[1.035rem]"}
                >
                  {w.fromHour} – {w.toHour}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkHours;
