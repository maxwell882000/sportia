import Input, { InputProps } from "./Input.tsx";

function InputPhone(props: InputProps) {
  return (
    <Input
      {...props}
      options={{
        initValue: "+998",
        initRequired: true,
      }}
      pattern={"^(?:\\+|\\+9|\\+99|\\+998\\d{0,9})$"}
      required
      placeholder={"Контактный номер"}
    />
  );
}

export default InputPhone;
