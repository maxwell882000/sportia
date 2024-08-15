import Layout from "./components/layout/Layout.tsx";
import {YMap, YMapDefaultFeaturesLayer, YMapDefaultMarker, YMapDefaultSchemeLayer, YMapMarker} from "ymap3-components";
import Logo from "./components/Icons/Logo.tsx";
import SideBar from "./components/layout/SideBar.tsx";
import Football from "./components/Icons/Football.tsx";
import {AppStartGate} from "./states/gate.ts";
import EventDetailPopUp from "./components/event/eventDetail/EventDetailPopUp.tsx";
import AllPages from "./pages/AllPages.tsx";

function App() {
    return (
        <Layout>
            <AppStartGate/>
            <div className={"absolute t-0 l-0 z-10"}>
                <div className={"flex h-screen flex-col t-0 l-0 absolute z-20"}>
                    <div className="order-1 p-[1.5rem]">
                        <Logo></Logo>
                    </div>
                    <EventDetailPopUp/>
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
