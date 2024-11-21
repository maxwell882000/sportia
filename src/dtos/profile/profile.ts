import { SlideButtonDto } from "../slide/slideButtonDto.ts";
import { Calendar, Heart, MessageCircle01 } from "@untitled-ui/icons-react";

export interface ProfileOptions extends SlideButtonDto {}

export enum ProfileTab {
  Book = "0",
  Liked = "1",
  Setting = "2",
}

export const defaultProfileOptions = [
  {
    id: ProfileTab.Book,
    icon: Calendar({
      className: "text-white h-[1.25rem] w-[1.25rem] icon-stroke-1",
    }),
    name: "Забронированные",
    bgColor: "#9E77ED1F",
    isActive: true,
  } as ProfileOptions,
  {
    id: ProfileTab.Liked,
    icon: Heart({
      className: "text-white h-[1.25rem] w-[1.25rem] icon-stroke-1",
    }),
    name: "Сохраненные",
    bgColor: "#F790091F",
    isActive: false,
  } as ProfileOptions,
  {
    id: ProfileTab.Setting,
    icon: MessageCircle01({
      className: "text-white h-[1.25rem] w-[1.25rem] icon-stroke-1",
    }),
    name: "Профиль",
    bgColor: "#F63D681F",
    isActive: false,
  } as ProfileOptions,
];
