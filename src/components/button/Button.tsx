import {MouseEventHandler, ReactNode} from "react";

interface Props {
    backgroundColor: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    icon: ReactNode,
    name?: string,
    className?: string
}

function Button({backgroundColor, name, icon, onClick, className = ""}: Props) {
    return <button
        style={{
            // @ts-ignore
            '--background-color-dynamic': backgroundColor,
            transition: 'background-color 0.5s ease',
        }}
        onClick={onClick}
        className={`bg-[var(--background-color-dynamic)] px-4 h-[2.5rem] flex  rounded-app justify-center items-center space-x-2 ${className}`}>
        <div>
            {icon}
        </div>
        {name && <div>
            {name}
        </div>}
    </button>
}

export default Button
