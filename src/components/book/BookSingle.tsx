import Input from "../input/Input.tsx";
import {useForm} from "effector-forms";
import {$singleBookForm} from "../../states/book/form.ts";

function BookSingle() {
    const form = useForm($singleBookForm);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return <>
        <Input required placeholder={"Ф.И.О"}/>
        <Input required placeholder={"Контактный номер"}/>
        <Input required placeholder={"Дни игры"}/>
        <Input/>
    </>
}

export default BookSingle
