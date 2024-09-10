import { Drawer } from "vaul";
import { useWindowWidth } from "../../hooks/useWindowWidth.ts";

interface BaseDrawerProps {
  children?: React.ReactNode;
  activeSnapPoint?: number;
  setActiveSnapPoint?: (activeSnapPoint: number | string | null) => void;
  snapPoints: (string | number)[];
  className?: string;
}

function BaseDrawer({
  children,
  activeSnapPoint,
  setActiveSnapPoint,
  snapPoints,
  className,
}: BaseDrawerProps) {
  const windowWidth = useWindowWidth();

  return (
    <Drawer.Root
      modal={false}
      dismissible={false}
      open={windowWidth < 768}
      snapPoints={snapPoints}
      activeSnapPoint={activeSnapPoint}
      setActiveSnapPoint={(snap) => {
        setActiveSnapPoint && setActiveSnapPoint(snap);
      }}
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-app-dar fixed bottom-0 left-0 right-0 z-10 mt-24 flex h-[96%] flex-col rounded-t-[1.5rem]">
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
