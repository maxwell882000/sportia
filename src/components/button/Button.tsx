import { MouseEventHandler, ReactNode } from "react";
import { hexToRgba } from "../../utils/hexToRgba.ts";

interface Props {
  backgroundColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
  name?: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  backgroundColorHover?: string;
}

function Button({
  backgroundColor,
  name,
  icon,
  onClick,
  className = "",
  type = "button",
  backgroundColorHover = null,
}: Props) {
  return (
    <button
      style={{
        // @ts-ignore
        "--background-color-dynamic": backgroundColor,
        "--background-color-hover":
          backgroundColorHover ?? hexToRgba(backgroundColor, 0.6),
        transition: "background-color 0.5s ease",
      }}
      type={type}
      onClick={onClick}
      className={`button flex h-[2rem] items-center justify-center space-x-[0.625rem] rounded-app bg-[var(--background-color-dynamic)] px-4 hover:bg-[var(--background-color-hover)] md:h-[2.5rem] md:space-x-[0.5rem] ${className}`}
    >
      {icon && <div>{icon}</div>}
      {name && <div>{name}</div>}
    </button>
  );
}

export default Button;
