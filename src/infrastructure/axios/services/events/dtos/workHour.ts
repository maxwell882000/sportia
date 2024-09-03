import { DayOfWeek } from "./dayOfWeek.ts";

export interface WorkHour {
  day: DayOfWeek;
  fromHour: number;
  toHour: number;
}
