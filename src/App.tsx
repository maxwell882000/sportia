import Layout from "./components/layout/Layout.tsx";
import {
  YMap,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
} from "ymap3-components";
import Logo from "./components/Icons/Logo.tsx";
import SideBar from "./components/layout/SideBar.tsx";
import { AppStartGate } from "./states/gate.ts";
import AllPages from "./pages/AllPages.tsx";
import Profile from "./components/auth/Profile.tsx";
import CurrentEventMap from "./components/event/evenMap/CurrentEventMap.tsx";
import AllEventMap from "./components/event/evenMap/AllEventMap.tsx";

function App() {
  return (
    <Layout>
      <div id="modal"></div>
      <AppStartGate />
      <div className={"absolute right-[1.5rem] top-[1.5rem] z-50"}>
        <Profile />
      </div>
      <div className={"t-0 l-0 absolute z-10"}>
        <div className={"t-0 l-0 absolute z-20 flex h-screen flex-col"}>
          <div className="px-[1.5rem] pt-[1.5rem]">
            <Logo></Logo>
          </div>
          <AllPages />
        </div>
        <div className={"absolute z-10"}>
          <SideBar />
        </div>
      </div>
      <div className="absolute z-0 h-screen w-screen">
        <YMap
          key="map"
          location={{ center: [69.2401, 41.2995], zoom: 9.3 }}
          mode="vector"
          theme="dark"
        >
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />
          <CurrentEventMap />
          <AllEventMap />
        </YMap>
      </div>
    </Layout>
  );
}

export default App;
