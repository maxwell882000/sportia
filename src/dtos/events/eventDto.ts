import image from "../../assets/test/img.png";

export interface EventDto {
  id: number;
  name: string;
  review: number;
  workTime: string;
  address: string;
  image: string;
  isOpen: boolean;
  commentCount: number;
  categoryId: number;
}

export const defaultEventsDto = [
  {
    id: 1,
    name: "Футбольное поле 1",
    review: 4.5,
    workTime: "Открыто до 23:00",
    address: "ул.Мирзо-Улугбек, 82A",
    isOpen: true,
    image,
    commentCount: 23,
    categoryId: 3,
  } as EventDto,
  {
    id: 2,
    name: "Футбольное поле 1",
    review: 5,
    workTime: "Открыто до 23:00",
    address: "ул.Мирзо-Улугбек, 82A",
    isOpen: true,
    image,
    commentCount: 23,
    categoryId: 3,
  } as EventDto,
  {
    id: 3,
    name: "Футбольное поле 1",
    review: 4,
    workTime: "Открыто до 23:00",
    address: "ул.Мирзо-Улугбек, 82A",
    isOpen: true,
    commentCount: 23,
    image,
    categoryId: 2,
  } as EventDto,
  {
    id: 4,
    name: "Футбольное поле 1",
    review: 3,
    workTime: "Открыто до 23:00",
    address: "ул.Мирзо-Улугбек, 82A",
    isOpen: true,
    commentCount: 23,
    image,
    categoryId: 2,
  } as EventDto,
  {
    id: 5,
    name: "Футбольное поле 1",
    review: 2.3,
    workTime: "Открыто до 23:00",
    address: "ул.Мирзо-Улугбек, 82A",
    isOpen: false,
    commentCount: 23,
    image,
    categoryId: 3,
  } as EventDto,
  {
    id: 6,
    name: "Футбольное поле 1",
    review: 4.5,
    workTime: "Открыто до 23:00",
    address: "ул.Мирзо-Улугбек, 82A",
    isOpen: false,
    commentCount: 23,
    image,
    categoryId: 2,
  } as EventDto,
] as EventDto[];
