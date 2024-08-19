import { hexToRgba } from "../../utils/hexToRgba.ts";
import Button from "../button/Button.tsx";
import { SlideButtonDto } from "../../dtos/slide/slideButtonDto.ts";

interface Props<T extends SlideButtonDto> {
  item: T;
  onClick?: (item: T) => void;
}

function SlideButton<T extends SlideButtonDto>({ item, onClick }: Props<T>) {
  return (
    <Button
      backgroundColor={hexToRgba(item.bgColor, Number(item.isActive))}
      className={"text-white"}
      onClick={() => onClick && onClick(item)}
      icon={item.icon}
      name={item.name}
    />
  );
}

export default SlideButton;
