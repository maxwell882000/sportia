import BaseDrawer, { BaseDrawerProps } from "./BaseDrawer.tsx";
import {
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";

interface ScrollDrawerProps {
  fixedClassName?: string;
  fixedChildren?: React.ReactNode;
  children?: React.ReactNode;
  drawerSize?: string;
  ref: MutableRefObject<HTMLDivElement>;
}

const ScrollDrawer = forwardRef<HTMLDivElement, ScrollDrawerProps>(
  (props, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);

    const [startY, setStartY] = useState(0);
    const [isOnTop, setIsOnTop] = useState<boolean>(false);

    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
      if (internalRef.current) {
        const isAtTop = internalRef.current.scrollTop === 0;

        if (isAtTop && event.deltaY < 0) {
          console.log("Trying to scroll up, but already at the top!");
          setIsOnTop(false);
        }
      }
    };

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
      setStartY(event.touches[0].clientY);
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
      if (internalRef.current) {
        const currentY = event.touches[0].clientY;
        const isAtTop = internalRef.current.scrollTop === 0;

        if (isAtTop && currentY > startY) {
          setIsOnTop(false);
        }
      }
    };
    return (
      <BaseDrawer
        activeSnapPoint={isOnTop ? 1 : props.drawerSize}
        setActiveSnapPoint={(snap) => {
          setIsOnTop(snap === 1);
        }}
        snapPoints={[props.drawerSize, 1]}
      >
        <div
          className={`z-50 px-[1rem] pb-[0.25rem] pt-[1rem] ${props.fixedClassName}`}
        >
          {props.fixedChildren}
        </div>
        <div
          ref={(node) => {
            internalRef.current = node;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              (ref as MutableRefObject<HTMLDivElement | null>).current = node;
            }
          }}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className={`remove-scroll h-full space-y-[1.5rem] px-[1rem] pb-[1rem] ${isOnTop ? "overflow-y-scroll" : ""}`}
        >
          {props.children}
        </div>
      </BaseDrawer>
    );
  },
);

export default ScrollDrawer;
