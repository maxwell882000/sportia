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
import UserAvatar from "./components/auth/UserAvatar.tsx";
import AllEventMap from "./components/event/evenMap/AllEventMap.tsx";
import Modal from "react-modal";
import Loader from "./components/modal/Loader.tsx";
import { ToastContainer } from "react-toastify";
import DesktopLayout from "./components/layout/DesktopLayout.tsx";
import MobileLayout from "./components/layout/MobileLayout.tsx";

Modal.setAppElement("#root");

function App() {
  return (
    <Layout>
      <div id="modal"></div>
      <Loader />
      <ToastContainer />
      <AppStartGate />
      <DesktopLayout />
      <MobileLayout />

      <div className="absolute z-0 h-screen w-screen">
        <YMap
          key="map"
          location={{ center: [69.2401, 41.2995], zoom: 9.3 }}
          mode="vector"
          theme="dark"
        >
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />
          <AllEventMap />
        </YMap>
      </div>
    </Layout>
  );
}

export default App;
