import {EventDto} from "./eventDto.ts";
import image from "../../assets/test/img.png";
import {WorkHoursDto} from "./workHoursDto.ts";
import {OwnReviewDto} from "../review/ownReviewDto.ts";
import {UserReviewDto} from "../review/userReviewDto.ts";

export interface EventDetailDto extends EventDto {
    images: string[],
    workHours: WorkHoursDto[],
    ownReview: OwnReviewDto,
    userReviews: UserReviewDto[],
    isLiked: boolean
}

export const defaultEventDetailDto: EventDetailDto = {
    id: 1,
    name: "Футбольное поле 1",
    review: 4.5,
    workTime: "Открыто до 23:00",
    address: "ул.Мирзо-Улугбек, 82A",
    isOpen: true,
    image,
    commentCount: 23,
    images: [image, image, image],
    ownReview: {
        review: 3
    },
    isLiked: false,
    userReviews: [
        {
            avatar: 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3',
            name: 'Марина Морозова',
            review: 4,
            reviewDate: new Date(),
            comment: `      Оба сына тренируются в секции водные лыжи. Тренеры профессионалы. Всегда в наличии
                                    оборудование, гидрокостюмы. Тренировки всё лето. Есть спортивный лагерь с питанием.
                                    Дети физически развиваются и закалка.`
        } as UserReviewDto,
        {
            avatar: 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3',
            name: 'Марина Морозова',
            review: 2,
            reviewDate: new Date(),
            comment: `      Оба сына тренируются в секции водные лыжи. Тренеры профессионалы. Всегда в наличии
                                    оборудование, гидрокостюмы. Тренировки всё лето. Есть спортивный лагерь с питанием.
                                    Дети физически развиваются и закалка.`
        } as UserReviewDto,
        {
            avatar: 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3',
            name: 'Марина Морозова',
            review: 5,
            reviewDate: new Date(),
            comment: `      Оба сына тренируются в секции водные лыжи. Тренеры профессионалы. Всегда в наличии
                                    оборудование, гидрокостюмы. Тренировки всё лето. Есть спортивный лагерь с питанием.
                                    Дети физически развиваются и закалка.`
        } as UserReviewDto,
    ] as UserReviewDto[],
    workHours: [
        {
            day: "Понедельник",
            fromHour: "07:00",
            toHour: "23:00"
        } as WorkHoursDto,
        {
            day: "Вторник",
            fromHour: "07:00",
            toHour: "23:00"
        } as WorkHoursDto,
        {
            day: "Среда",
            fromHour: "07:00",
            toHour: "23:00"
        } as WorkHoursDto,
        {
            day: "Четверг",
            fromHour: "07:00",
            toHour: "23:00"
        } as WorkHoursDto,
        {
            day: "Пятница",
            fromHour: "07:00",
            toHour: "23:00"
        } as WorkHoursDto,
        {
            day: "Суббота",
            fromHour: "07:00",
            toHour: "23:00"
        } as WorkHoursDto,
        {
            day: "Воскресенье",
            fromHour: "07:00",
            toHour: "23:00"
        } as WorkHoursDto,
    ] as WorkHoursDto[]
} as EventDetailDto;