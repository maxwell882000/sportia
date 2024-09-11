import { useUnit } from "effector-react";
import { $isAnimateSideBar } from "../../states/store.ts";

function SideBar() {
    const [isAnimateSideBar] = useUnit([$isAnimateSideBar]);
    return (
      <div
        className={`relative flex h-screen w-[24rem] flex-col bg-app-dark ${isAnimateSideBar("left-0", "left-[-24.5rem]")} z-10`}
      ></div>
  );
}

export default SideBar;
