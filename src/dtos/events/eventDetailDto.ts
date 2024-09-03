import { EventDto } from "./eventDto.ts";
import image from "../../assets/test/img.png";
import { WorkHoursDto } from "./workHoursDto.ts";
import { OwnReviewDto } from "../review/ownReviewDto.ts";
import { UserReviewDto } from "../review/userReviewDto.ts";

export interface EventDetailDto extends EventDto {
  images: string[];
  workHours: WorkHoursDto[];
  isLiked: boolean;
}

export const defaultEventDetailDto: EventDetailDto = {
  id: 1,
  name: "Футбольное поле 1",
  nextTime: "Открыто до 23:00",
  address: "ул.Мирзо-Улугбек, 82A",
  isOpen: true,
  image,
  reviewCount: 23,
  images: [image, image, image],
  isLiked: false,
  workHours: [
    {
      day: "Понедельник",
      fromHour: "07:00",
      toHour: "23:00",
    } as WorkHoursDto,
    {
      day: "Вторник",
      fromHour: "07:00",
      toHour: "23:00",
    } as WorkHoursDto,
    {
      day: "Среда",
      fromHour: "07:00",
      toHour: "23:00",
    } as WorkHoursDto,
    {
      day: "Четверг",
      fromHour: "07:00",
      toHour: "23:00",
    } as WorkHoursDto,
    {
      day: "Пятница",
      fromHour: "07:00",
      toHour: "23:00",
    } as WorkHoursDto,
    {
      day: "Суббота",
      fromHour: "07:00",
      toHour: "23:00",
    } as WorkHoursDto,
    {
      day: "Воскресенье",
      fromHour: "07:00",
      toHour: "23:00",
    } as WorkHoursDto,
  ] as WorkHoursDto[],
} as EventDetailDto;
