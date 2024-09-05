import { hexToRgba } from "../../utils/hexToRgba.ts";
import Button from "../button/Button.tsx";
import { SlideButtonDto } from "../../dtos/slide/slideButtonDto.ts";
import { string } from "prop-types";
import { ReactSVG } from "react-svg";

interface Props<T extends SlideButtonDto> {
  item: T;
  onClick?: (item: T) => void;
}

function SlideButton<T extends SlideButtonDto>({ item, onClick }: Props<T>) {
  return (
    <Button
      backgroundColor={hexToRgba(item.bgColor, Number(item.isActive))}
      backgroundColorHover={hexToRgba(item.bgColor, 100)}
      className={"text-white"}
      onClick={() => onClick && onClick(item)}
      icon={
        typeof item.icon == "string" ? (
          <ReactSVG src={item.icon} className={"w-[1.25rem]"} />
        ) : (
          item.icon
        )
      }
      name={item.name}
    />
  );
}

export default SlideButton;
