import { Drawer } from "vaul";
import { useWindowWidth } from "../../hooks/useWindowWidth.ts";
import { useUnit } from "effector-react";
import {
  $isMobileSideBarChanged,
  $isSideBarChanged,
} from "../../states/events.ts";
import { useState } from "react";
import { $categoriesChanged } from "../../states/category/store.ts";
import { $isMobileSideBar } from "../../states/store.ts";

interface MobileSideBarProps {
  children: React.ReactNode;
}

function MobileSideBar({ children }: MobileSideBarProps) {
  const windowWidth = useWindowWidth();
  const [isSideBarChanged, isMobileSideBar] = useUnit([
    $isMobileSideBarChanged,
    $isMobileSideBar,
  ]);
  return (
    <div>
      <Drawer.Root
        modal={false}
        dismissible={false}
        open={windowWidth < 768}
        snapPoints={[0.3, 1]}
        closeThreshold={0}
        activeSnapPoint={isMobileSideBar ? 1 : 0.3}
        setActiveSnapPoint={(snap) => {
          console.log("SAP CHANGED !!!!", snap);
          isSideBarChanged(snap === 1);
        }}
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-app-dar fixed bottom-0 left-0 right-0 mt-24 flex h-[96%] flex-col rounded-t-[1.5rem]">
            <div className="flex-1 space-y-[1rem] rounded-t-[1.5rem] bg-app-dark">
              {children}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}

export default MobileSideBar;
