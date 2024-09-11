import { useUnit } from "effector-react";
import { $isMobileSideBarChanged } from "../../states/events.ts";
import { $isMobileSideBar } from "../../states/store.ts";
import BaseDrawer from "../drawer/BaseDrawer.tsx";

interface MobileSideBarProps {
  children: React.ReactNode;
  closeSnap?: string | number;
}

function MobileSideBar({ children, closeSnap = 0.3 }: MobileSideBarProps) {
  const [isSideBarChanged, isMobileSideBar] = useUnit([
    $isMobileSideBarChanged,
    $isMobileSideBar,
  ]);
  console.log("CURRENT SNAP ", closeSnap);
  return (
    <div>
      <BaseDrawer
        activeSnapPoint={isMobileSideBar ? 1 : closeSnap}
        snapPoints={[closeSnap, 1]}
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
