import UserAvatar from "../auth/UserAvatar.tsx";
import MobileSideBar from "./MobileSideBar.tsx";

function MobileLayout() {
  return (
    <div className={"block md:hidden"}>
      <div className={"absolute left-[1.4rem] top-[5.599rem] z-50"}>
        <UserAvatar />
      </div>
      {/*<div className={"absolute"}>*/}
      <MobileSideBar />
      {/*</div>*/}
    </div>
  );
}

export default MobileLayout;
