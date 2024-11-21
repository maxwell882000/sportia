import Input, { InputProps } from "./Input.tsx";

function InputPassword(props: InputProps) {
  return (
    <Input
      placeholder={props.placeholder ?? "Пароль"}
      type={"password"}
      {...props}
    />
  );
}

export default InputPassword;
