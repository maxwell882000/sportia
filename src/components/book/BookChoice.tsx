import Button from "../button/Button.tsx";
import {User01, Users01} from "@untitled-ui/icons-react";

interface Props {
    isSingle: boolean,
    setSingle: (single: boolean) => void
}

function BookChoice({isSingle, setSingle}: Props) {
    return <div className={"flex space-x-[0.5rem]"}>
        <Button backgroundColor={isSingle ? '#ACEF03' : '#1C1F24'}
                name={"На одного"}
                className={(isSingle ? ' text-[#15171C] ' : ' text-[#ACEF03] ') + " text-[0.875rem] leading-[1.25rem] "}
                onClick={() => {
                    setSingle(true);
                }} icon={<User01/>}>
        </Button>
        <Button backgroundColor={!isSingle ? '#ACEF03' : '#1C1F24'}
                name={"На команду"}
                className={(!isSingle ? ' text-[#15171C] ' : ' text-[#ACEF03] ') + " text-[0.875rem] leading-[1.25rem] "}
                onClick={() => {
                    setSingle(false);
                }} icon={<Users01/>}>
        </Button>
    </div>
}

export default BookChoice
