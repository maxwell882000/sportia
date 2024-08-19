import { SlideButtonDto } from "../slide/slideButtonDto.ts";
import { Calendar, Heart, MessageCircle01 } from "@untitled-ui/icons-react";

export interface ProfileOptions extends SlideButtonDto {}

export const defaultProfileOptions = [
  {
    id: 0,
    icon: Calendar({ className: "text-white h-[1.25rem] w-[1.25rem] icon-stroke-1" }),
    name: "Бронирование",
    bgColor: "#9E77ED1F",
    isActive: true,
  } as ProfileOptions,
  {
    id: 0,
    icon: MessageCircle01({ className: "text-white h-[1.25rem] w-[1.25rem] icon-stroke-1" }),
    name: "Отзывы",
    bgColor: "#12B76A1F",
    isActive: false,
  } as ProfileOptions,
  {
    id: 0,
    icon: Heart({ className: "text-white h-[1.25rem] w-[1.25rem] icon-stroke-1" }),
    name: "Сохраненные",
    bgColor: "#F790091F",
    isActive: false,
  } as ProfileOptions,
];
