import { Drawer } from "vaul";
import { useWindowSize } from "../../hooks/useWindowSize.ts";
import { useEffect, useMemo, useState } from "react";

export interface BaseDrawerProps {
  children?: React.ReactNode;
  activeSnapPoint?: number | string;
  setActiveSnapPoint?: (activeSnapPoint: number | string | null) => void;
  snapPoints: (string | number)[];
  className?: string;
  dismissible?: boolean;
  open?: boolean;
  onClose?: () => void;
}

function BaseDrawer({
  children,
  activeSnapPoint,
  setActiveSnapPoint,
  snapPoints,
  className,
  dismissible = false,
  open = true,
  onClose,
}: BaseDrawerProps) {
  const windowSize = useWindowSize();

  const snapPointsOffset = useMemo(
    () =>
      snapPoints?.map((snapPoint) => {
        const isPx = typeof snapPoint === "string";
        let snapPointAsNumber = 0;

        if (isPx) {
          snapPointAsNumber = parseInt(snapPoint, 10);
        }

        const height = isPx
          ? snapPointAsNumber
          : windowSize
            ? snapPoint * windowSize.innerHeight
            : 0;

        if (windowSize) {
          return windowSize.innerHeight - height;
        }

        return height;
      }) ?? [],
    [snapPoints, windowSize],
  );

  return (
    <Drawer.Root
      modal={false}
      onClose={() => onClose && onClose()}
      dismissible={dismissible}
      open={open && windowSize.innerWidth < 768}
      snapPoints={snapPoints}
      activeSnapPoint={activeSnapPoint}
      setActiveSnapPoint={(snap) => {
        setActiveSnapPoint && setActiveSnapPoint(snap);
      }}
      fadeFromIndex={snapPoints.length ? snapPoints.length - 1 : 0}
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          style={{
            transform: `translate3d(0px, ${snapPointsOffset[0]}px, 0px)`,
          }}
          className="fixed bottom-0 left-0 right-0 z-10 mt-24 flex h-[96%] flex-col rounded-t-[1.5rem] bg-app-dark"
        >
          <Drawer.Title />
          <div
            className={`flex h-full flex-1 flex-col rounded-t-[1.5rem] bg-app-dark ${className} `}
          >
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default BaseDrawer;
