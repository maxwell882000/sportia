import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import Layout from "./components/layout/Layout.tsx";
import {useRef, useState} from "react";
// @ts-ignore
import Slider from "react-slick";
import {ChevronLeft} from "@untitled-ui/icons-react";
import Logo from "./components/Icons/Logo.tsx";
import SliderCategory from "./components/categories/SliderCategory.tsx";

var item = false;

function App() {

    const [isActive, setIsActive] = useState(false);
    const sliderRef = useRef(null);
    const isTransitioning = useRef(false); // Mutable ref to track transition state


    return (
        <Layout>
            <div className={"absolute z-10 bg-transparent flex space-x-4"}>
                <div className={` h-screen bg-app-dark w-[24rem]  relative
                    remove-bar left-0 ${isActive ? "" : "left-[-24rem]"}`}>
                    <div className="p-[1.5rem] ">
                        <Logo></Logo>
                    </div>

                    <SliderCategory></SliderCategory>

                </div>
                <div
                    className={`relative h-[2.5rem]  w-[2.5rem]  remove-bar left-0 ${isActive ? "" : "left-[-24rem]"}`}>
                    <button onClick={() => {
                        setIsActive(!isActive)
                    }}
                            className={` bg-app-dark  rounded-app h-[2.5rem] w-[2.5rem] flex justify-center items-center remove-bar  `}>
                        <div className={`${isActive ? "rotate-0" : "rotate-180"} `}>
                            <ChevronLeft className="text-white"></ChevronLeft>
                        </div>
                    </button>
                </div>


            </div>

            <div className="absolute z-0 w-screen h-screen">
                <YMaps query={{
                    apikey: "38d59efa-7b0d-4bf9-a68c-cba8704d6110"
                }}>
                    <Map
                        width="100%" height="100%"
                        defaultState={{
                            center: [41.2995, 69.2401],
                            zoom: 12.3,
                        }}
                    >
                        <div onClick={() => {
                            console.log("CLICKED !!!");
                        }}>
                            <Placemark
                                onClick={() => {
                                    alert("WORK BEITC")
                                }}
                                defaultGeometry={[41.29, 69.24]}/>
                        </div>

                    </Map>
                </YMaps>
            </div>

        </Layout>
    )
}

export default App
