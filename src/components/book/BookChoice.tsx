import Button from "../button/Button.tsx";
import { User01, Users01 } from "@untitled-ui/icons-react";
import { ConnectedField } from "effector-forms";
import { BookTypeDto } from "../../dtos/book/bookTypeDto.ts";

interface Props {
  bookType: ConnectedField<BookTypeDto>;
  cost: ConnectedField<number>;
}

function BookChoice({ bookType, cost }: Props) {
  return (
    <div className={"flex space-x-[0.5rem]"}>
      <Button
        backgroundColor={
          bookType.value === BookTypeDto.SINGLE ? "#ACEF03" : "#1C1F24"
        }
        name={"На одного"}
        className={
          (bookType.value === BookTypeDto.SINGLE
            ? "text-[#15171C] "
            : "text-[#ACEF03] ") + " text-[0.875rem] leading-[1.25rem]"
        }
        onClick={() => {
          bookType.onChange(BookTypeDto.SINGLE);
          cost.onChange(300000);
        }}
        icon={<User01 className={"icon-stroke-1 h-[1.25rem] w-[1.25rem]"} />}
      ></Button>
      <Button
        backgroundColor={
          bookType.value === BookTypeDto.TEAM ? "#ACEF03" : "#1C1F24"
        }
        name={"На команду"}
        className={
          (bookType.value === BookTypeDto.TEAM
            ? "text-[#15171C] "
            : "text-[#ACEF03] ") + " text-[0.875rem] leading-[1.25rem]"
        }
        onClick={() => {
          bookType.onChange(BookTypeDto.TEAM);
          cost.onChange(500000);
        }}
        icon={<Users01 className={"icon-stroke-1 h-[1.25rem] w-[1.25rem]"} />}
      ></Button>
    </div>
  );
}

export default BookChoice;
