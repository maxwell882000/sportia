import Input from "../input/Input.tsx";
import {useForm} from "effector-forms";
import {$singleBookForm} from "../../states/book/form.ts";
import SelectorDay from "../selector/SelectorDay.tsx";
import SelectorHour from "../selector/SelectorHour.tsx";
import RoundMan from "../Icons/RoundMan.tsx";
import Checkbox from "../input/CheckBox.tsx";
import BookLabel from "./BookLabel.tsx";
import Button from "../button/Button.tsx";
import Football from "../Icons/Football.tsx";

function BookSingle() {
    const form = useForm($singleBookForm);

    return <>
        <Input required placeholder={"Ф.И.О"}/>
        <Input required placeholder={"Контактный номер"}/>
        <SelectorDay onClick={(item) => {
        }}/>
        <SelectorHour onClick={(item) => {
        }}/>
        <BookLabel label={"4/10 мест свободно"}>
            <div className={"flex"}>
                {Array.from({length: 10}).map((_, index) => <RoundMan key={`rounded-man-${index}`}
                                                                      className={"text-[#FFFFFF1F] w-[2rem] h-[2rem] text-[#ACEF03]"}/>)}
            </div>
        </BookLabel>

        <BookLabel label={"Вид Оплаты"}>
            <div className={"flex space-x-[1.5rem]"}>
                <Checkbox placeholder={"Payme"} onClick={(check) => {
                }}/>
                <Checkbox placeholder={"Click"} onClick={(check) => {
                }}/>
            </div>
        </BookLabel>
        <BookLabel label={"Стоимость"}>
            <div className={"text-[#ACEF03] text-[1.25rem] leading-[1.875rem] m-0"}>300.000 сум</div>
        </BookLabel>
        <div>
            <Button
                backgroundColor={'#ACEF03'}
                name={"Забронировать"}
                className={"w-full text-[#15171C] hover:bg-[#ACEF03CC]"}
                onClick={() => {
                }} icon={<Football/>}/>
            <p className={"text-[0.75rem] leading-[1rem] text-[#FFFFFF80]"}>
                Нажимая на кнопку, я соглашаюсь с <span className={"text-[0.75rem] text-[#ACEF03]"}>условиями
            бронирования</span></p>
        </div>

    </>
}

export default BookSingle
