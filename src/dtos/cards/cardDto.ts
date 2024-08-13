import image from "../../assets/test/img.png";

export interface CardDto {
    id: number,
    name: string,
    review: number,
    workTime: string
    address: string,
    image: string,
    isOpen: boolean
}

export const defaultCardsDto = [
    {
        id: 1,
        name: "Футбольное поле 1",
        review: 4.5,
        workTime: "Открыто до 23:00",
        address: "ул.Мирзо-Улугбек, 82A",
        isOpen: true,
        image
    } as CardDto,
    {
        id: 1,
        name: "Футбольное поле 1",
        review: 5,
        workTime: "Открыто до 23:00",
        address: "ул.Мирзо-Улугбек, 82A",
        isOpen: true,
        image
    } as CardDto,
    {
        id: 1,
        name: "Футбольное поле 1",
        review: 4,
        workTime: "Открыто до 23:00",
        address: "ул.Мирзо-Улугбек, 82A",
        isOpen: true,
        image
    } as CardDto,
    {
        id: 1,
        name: "Футбольное поле 1",
        review: 3,
        workTime: "Открыто до 23:00",
        address: "ул.Мирзо-Улугбек, 82A",
        isOpen: true,
        image
    } as CardDto,
    {
        id: 1,
        name: "Футбольное поле 1",
        review: 2.3,
        workTime: "Открыто до 23:00",
        address: "ул.Мирзо-Улугбек, 82A",
        isOpen: false,
        image
    } as CardDto,
    {
        id: 1,
        name: "Футбольное поле 1",
        review: 4.5,
        workTime: "Открыто до 23:00",
        address: "ул.Мирзо-Улугбек, 82A",
        isOpen: false,
        image
    } as CardDto
] as CardDto[]
