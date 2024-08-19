import Input, { InputProps } from "./Input.tsx";

function TextArea(props: InputProps) {
  return (
    <Input
      {...props}
      rows={4}
      options={{
        isArea: true,
        ...props?.options,
      }}
    />
  );
}

export default TextArea;
