import { MouseEventHandler, ReactNode } from "react";

interface Props {
  backgroundColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
  name?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

function Button({
  backgroundColor,
  name,
  icon,
  onClick,
  className = "",
  type = "button",
}: Props) {
  return (
    <button
      style={{
        // @ts-ignore
        "--background-color-dynamic": backgroundColor,
        transition: "background-color 0.5s ease",
      }}
      type={type}
      onClick={onClick}
      className={`flex h-[2.5rem] items-center justify-center space-x-2 rounded-app bg-[var(--background-color-dynamic)] px-4 ${className}`}
    >
      {icon && <div>{icon}</div>}
      {name && <div>{name}</div>}
    </button>
  );
}

export default Button;
