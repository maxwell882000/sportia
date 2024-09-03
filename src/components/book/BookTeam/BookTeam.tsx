import SelectorTime from "../../selector/SelectorTime.tsx";
import Input from "../../input/Input.tsx";
import BookPayment from "../BookPayment.tsx";
import { ConnectedFields } from "effector-forms";
import { BookDto } from "../../../dtos/book/bookDto.ts";

interface Props {
  fields: ConnectedFields<BookDto>;
}

function  BookTeam({ fields }: Props) {
  return (
    <>
      <Input
        // options={{
        //   field: fields.date,
        // }}
        type={"date"}
        required
        placeholder={"Выберите день"}
      />
      {/*<SelectorTime field={fields.time} />*/}
    </>
  );
}

export default BookTeam;
