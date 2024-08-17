import Layout from "./components/layout/Layout.tsx";
import {YMap, YMapDefaultFeaturesLayer, YMapDefaultMarker, YMapDefaultSchemeLayer, YMapMarker} from "ymap3-components";
import Logo from "./components/Icons/Logo.tsx";
import SideBar from "./components/layout/SideBar.tsx";
import Football from "./components/Icons/Football.tsx";
import {AppStartGate} from "./states/gate.ts";
import AllPages from "./pages/AllPages.tsx";
import {User01} from "@untitled-ui/icons-react";
import Login from "./components/auth/Login.tsx";
import Modal from "react-modal";

function App() {
    return (
        <Layout>
            <div id="modal"></div>
            <AppStartGate/>
            <div className={"absolute top-[1.5rem]  right-[1.5rem] z-50 "}>
                <div
                    className={"flex justify-center items-center z-30 text-[#ACEF03] bg-app-dark h-[3.5rem] w-[3.5rem] rounded-app"}>
                    <User01 className={"w-[2rem] h-[2rem]"}/>
                </div>
                <Login/>
            </div>
            <div className={"absolute t-0 l-0 z-10"}>


                <div className={"flex h-screen flex-col t-0 l-0 absolute z-20"}>
                    <div className="pt-[1.5rem] px-[1.5rem]">
                        <Logo></Logo>
                    </div>
                    <AllPages/>
                </div>
                <div className={"absolute z-10"}>
                    <SideBar/>
                </div>

            </div>
            <div className="absolute z-0 w-screen h-screen">
                <YMap
                    key="map"
                    location={{center: [69.2401, 41.2995], zoom: 9.3}}
                    mode="vector"
                    theme="dark"
                >
                    <YMapDefaultSchemeLayer/>
                    <YMapDefaultFeaturesLayer/>
                    <YMapDefaultMarker
                        color={"#12B76A"}
                        onClick={() => {
                            alert("BITCH WORKING !!!")
                        }}
                        coordinates={[69.2, 41.2]}>
                    </YMapDefaultMarker>

                    <YMapMarker
                        onClick={() => {
                            alert("BITCH WORKING !!!")
                        }}
                        coordinates={[69.2, 41.2]}>
                        <div className={"flex flex-row items-center relative"}>
                            <div>
                                <div className={"left-[50%] bg-green-600 relative min-w-min p-1 rounded-[50%]"}>
                                    <Football></Football>
                                </div>
                            </div>

                            <div className={"h-10 bg-white  flex justify-center items-center p-2"}>
                                <span>asasfaffsasf afasf as</span>
                                <span>asfsafasa asf s</span>
                            </div>
                        </div>
                    </YMapMarker>
                </YMap>
            </div>

        </Layout>
    )
}

export default App
