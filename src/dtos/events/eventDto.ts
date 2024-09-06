import image from "../../assets/test/img.png";

export interface EventDto {
  id: string;
  name: string;
  mark: number;
  reviewCount: number;
  nextTime: string;
  address: string;
  image: string;
  isOpen: boolean;
  categoryId: string;
  coordinates: [number, number];
  isReservable: boolean;
}

export const defaultEventsDto = [
  {
    id: "1",
    name: "Футбольное поле 1",
    mark: 4.5,
    nextTime: "Открыто до 23:00",
    address: "ул.Мирзо-Улугбек, 82A",
    isOpen: true,
    image,
    reviewCount: 23,
    categoryId: "3",
    coordinates: [69.255338, 41.347556],
  } as EventDto,
  {
    id: "2",
    name: "Футбольное поле 1",
    mark: 5,
    nextTime: "Открыто до 23:00",
    address: "ул.Мирзо-Улугбек, 82A",
    isOpen: true,
    image,
    reviewCount: 23,
    categoryId: "3",
    coordinates: [69.260829, 41.330368],
  } as EventDto,
  {
    id: "3",
    name: "Футбольное поле 1",
    mark: 4,
    nextTime: "Открыто до 23:00",
    address: "ул.Мирзо-Улугбек, 82A",
    isOpen: true,
    reviewCount: 23,
    image,
    categoryId: "2",
    coordinates: [69.260829, 41.343418],
  } as EventDto,
  {
    id: "4",
    name: "Футбольное поле 1",
    mark: 3,
    nextTime: "Открыто до 23:00",
    address: "ул.Мирзо-Улугбек, 82A",
    isOpen: true,
    reviewCount: 23,
    image,
    categoryId: "2",
    coordinates: [69.285007, 41.314464],
  } as EventDto,
  {
    id: "5",
    name: "Футбольное поле 1",
    mark: 2.3,
    nextTime: "Открыто до 23:00",
    address: "ул.Мирзо-Улугбек, 82A",
    isOpen: false,
    reviewCount: 23,
    image,
    categoryId: "3",
    coordinates: [69.264925, 41.314464],
  } as EventDto,
  {
    id: "6",
    name: "Футбольное поле 1",
    mark: 4.5,
    nextTime: "Открыто до 23:00",
    address: "ул.Мирзо-Улугбек, 82A",
    isOpen: false,
    reviewCount: 23,
    image,
    categoryId: "2",
    coordinates: [69.237855, 41.293259],
  } as EventDto,
] as EventDto[];
