import { ConnectedFields } from "effector-forms";
import SelectorDay from "../../selector/SelectorDay.tsx";
import SelectorTime from "../../selector/SelectorTime.tsx";
import RoundMan from "../../Icons/RoundMan.tsx";
import BookLabel from "../BookLabel.tsx";
import BookPayment from "../BookPayment.tsx";
import { BookDto } from "../../../dtos/book/bookDto.ts";

interface Props {
  fields: ConnectedFields<BookDto>;
}

function BookSingle({ fields }: Props) {
  return (
    <>
      <SelectorDay field={fields.days} />
      <SelectorTime field={fields.time} />
      <BookLabel label={"4/10 мест свободно"}>
        <div className={"flex"}>
          {Array.from({ length: 10 }).map((_, index) => (
            <RoundMan
              key={`rounded-man-${index}`}
              className={"h-[2rem] w-[2rem] text-[#ACEF03] text-[#FFFFFF1F]"}
            />
          ))}
        </div>
      </BookLabel>
    </>
  );
}

export default BookSingle;
