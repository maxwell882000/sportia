import All from "../../components/Icons/All.tsx";
import Football from "../../components/Icons/Football.tsx";
import Basketball from "../../components/Icons/Basketball.tsx";
import Tennis from "../../components/Icons/Tennis.tsx";
import PingPong from "../../components/Icons/PingPong.tsx";
import { SlideButtonDto } from "../slide/slideButtonDto.ts";

export interface CategoryDto extends SlideButtonDto {
  isDefault?: boolean;
}

export const defaultCategories = [
  {
    id: "0",
    icon: All(),
    name: "Все",
    bgColor: "#9E77ED1F",
    isActive: true,
  } as CategoryDto,
  {
    id: "2",
    icon: Football(),
    name: "Футбол",
    bgColor: "#12B76A1F",
    isActive: false,
  } as CategoryDto,
  {
    id: "3",
    icon: Basketball(),
    name: "Баскетбол",
    bgColor: "#F790091F",
    isActive: false,
  } as CategoryDto,
  {
    id: "4",
    icon: Tennis(),
    name: "Теннис",
    bgColor: "#F63D681F",
    isActive: false,
  } as CategoryDto,
  {
    id: "5",
    icon: PingPong(),
    name: "Пинг понг",
    bgColor: "#0BA5EC1F",
    isActive: false,
  } as CategoryDto,
] as CategoryDto[];
