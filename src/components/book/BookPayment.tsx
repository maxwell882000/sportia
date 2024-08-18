import BookLabel from "./BookLabel.tsx";
import Checkbox from "../input/CheckBox.tsx";
import { ConnectedField } from "effector-forms";

interface Props {
  cost: number;
  isPayme: ConnectedField<boolean>;
  isClick: ConnectedField<boolean>;
}

function BookPayment({ cost, isPayme, isClick }: Props) {
  return (
    <>
      <BookLabel label={"Вид Оплаты"}>
        <div className={"flex space-x-[1.5rem]"}>
          <Checkbox
            field={isPayme}
            placeholder={"Payme"}
            onClick={(check) => {
              if (isClick.value == true && check) isClick.onChange(!check);
              isClick.resetErrors();
            }}
          />
          <Checkbox
            field={isClick}
            placeholder={"Click"}
            onClick={(check) => {
              if (isPayme.value == true && check) isPayme.onChange(!check);
              isPayme.resetErrors();
            }}
          />
        </div>
      </BookLabel>
      <BookLabel label={"Стоимость"}>
        <div className={"m-0 text-[1.25rem] leading-[1.25rem] text-[#ACEF03]"}>
          {cost} сум
        </div>
      </BookLabel>
    </>
  );
}

export default BookPayment;
