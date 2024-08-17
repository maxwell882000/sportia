import {SelectItem, Selector} from "./Selector.tsx";

interface Props {
    onClick: (item: SelectItem) => void
}

function SelectorDay(props: Props) {
    const options = [
        {value: 0, label: 'Понедельник - Среда'},
        {value: 1, label: 'Вторник - Четверг'},
        {value: 2, label: 'Среда - Пятница'},
        {value: 3, label: 'Суббота - Воскресенье'},
    ]
    return <Selector {...props} options={options} required={true} placeholder={"Дни игры"}/>
}

export default SelectorDay
