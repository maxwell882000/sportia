import { SelectItem, Selector } from "./Selector.tsx";
import { ConnectedField } from "effector-forms";

interface Props {
  field?: ConnectedField<any>;
}

function SelectorTime(props: Props) {
  const options = [
    { value: 0, label: "17:00 - 19:00" },
    { value: 1, label: "19:00 - 21:00" },
    { value: 2, label: "21:00 - 23:00" },
  ];
  return (
    <Selector
      {...props}
      options={options}
      required={true}
      placeholder={"Время игры"}
    />
  );
}

export default SelectorTime;
