import { Drawer } from "vaul";
import { useWindowWidth } from "../../hooks/useWindowWidth.ts";

interface BaseDrawerProps {
  children?: React.ReactNode;
  activeSnapPoint?: number;
  setActiveSnapPoint?: (activeSnapPoint: number | string | null) => void;
  snapPoints: (string | number)[];
}

function BaseDrawer({
  children,
  activeSnapPoint,
  setActiveSnapPoint,
  snapPoints,
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
        <Drawer.Content className="bg-app-dar fixed bottom-0 left-0 right-0 mt-24 flex h-[96%] flex-col rounded-t-[1.5rem] z-10">
          <div className="flex h-full flex-1 flex-col space-y-[1rem] rounded-t-[1.5rem] bg-app-dark">
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default BaseDrawer;
