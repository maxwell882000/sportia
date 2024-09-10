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
import BaseDrawer from "../drawer/BaseDrawer.tsx";

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
      <BaseDrawer
        activeSnapPoint={isMobileSideBar ? 1 : 0.3}
        snapPoints={[0.3, 1]}
        setActiveSnapPoint={(snap) => {
          isSideBarChanged(snap === 1);
        }}
        className={"space-y-[1rem]"}
      >
        {children}
      </BaseDrawer>
    </div>
  );
}

export default MobileSideBar;
