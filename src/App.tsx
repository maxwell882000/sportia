import Layout from "./components/layout/Layout.tsx";
import {
  YMap,
  YMapDefaultFeaturesLayer,
  YMapDefaultMarker,
  YMapDefaultSchemeLayer,
  YMapMarker,
} from "ymap3-components";
import Logo from "./components/Icons/Logo.tsx";
import SideBar from "./components/layout/SideBar.tsx";
import Football from "./components/Icons/Football.tsx";
import { AppStartGate } from "./states/gate.ts";
import AllPages from "./pages/AllPages.tsx";
import { User01 } from "@untitled-ui/icons-react";
import Login from "./components/auth/Login.tsx";
import Modal from "react-modal";

function App() {
  return (
    <Layout>
      <div id="modal"></div>
      <AppStartGate />
      <div className={"absolute right-[1.5rem] top-[1.5rem] z-50"}>
        <div
          className={
            "z-30 flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-app bg-app-dark text-[#ACEF03]"
          }
        >
          <User01 className={"h-[2rem] w-[2rem]"} />
        </div>
        <Login />
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
          <YMapDefaultMarker
            color={"#12B76A"}
            onClick={() => {
              alert("BITCH WORKING !!!");
            }}
            coordinates={[69.2, 41.2]}
          ></YMapDefaultMarker>

          <YMapMarker
            onClick={() => {
              alert("BITCH WORKING !!!");
            }}
            coordinates={[69.2, 41.2]}
          >
            <div className={"relative flex flex-row items-center"}>
              <div>
                <div
                  className={
                    "relative left-[50%] min-w-min rounded-[50%] bg-green-600 p-1"
                  }
                >
                  <Football></Football>
                </div>
              </div>

              <div
                className={"flex h-10 items-center justify-center bg-white p-2"}
              >
                <span>asasfaffsasf afasf as</span>
                <span>asfsafasa asf s</span>
              </div>
            </div>
          </YMapMarker>
        </YMap>
      </div>
    </Layout>
  );
}

export default App;
