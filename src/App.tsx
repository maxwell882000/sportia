import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import Layout from "./components/layout/Layout.tsx";
import {useEffect, useRef, useState} from "react";
// @ts-ignore
import Slider from "react-slick";
import {ChevronLeft} from "@untitled-ui/icons-react";

var item = false;

function App() {

    const [isActive, setIsActive] = useState(false);
    const sliderRef = useRef(null);
    const isTransitioning = useRef(false); // Mutable ref to track transition state

    // Function to handle mouse wheel events
    const handleWheel = (event) => {
        if (item) {
            return; // Ignore events while transitioning
        }

        const sliderElement = sliderRef.current?.innerSlider?.list;
        if (sliderElement && sliderElement.contains(event.target)) {
            const {deltaX} = event;
            console.log(`handleWheel ${deltaX}`, sliderElement);

            if (deltaX > 0) {
                // Scroll right (move to the next slide)
                if (sliderRef.current) {
                    item = true
                    sliderRef.current.slickNext();
                }
            } else if (deltaX < 0) {
                // Scroll left (move to the previous slide)
                if (sliderRef.current) {
                    item = true;
                    sliderRef.current.slickPrev();
                }
            }
        }
    };

    // Function to handle transition end
    const handleAfterChange = () => {
        console.log("handleAfterChange is worked !!!", isTransitioning.current);
        item = false;
        console.log("handleAfterChange is worked  after !!!", isTransitioning.current);

    };

    // Set up and clean up the wheel event listener
    useEffect(() => {
        // const sliderElement = sliderRef.current?.innerSlider?.list;
        // if (sliderElement) {
        //     sliderElement.addEventListener('wheel', handleWheel, {passive: true});
        // }
        //
        // return () => {
        //     if (sliderElement) {
        //         sliderElement.removeEventListener('wheel', handleWheel);
        //     }
        // };
    }, []);


    return (
        <Layout>
            <div className={"absolute z-10 bg-transparent flex space-x-4"}>
                <div className=" p-[24px] h-screen bg-app-dark w-[24rem]  relative
                    transform ">
                    <div className="slider-container">

                    </div>
                </div>
                <div>
                    <button className="bg-app-dark rounded-app h-[2.5rem] w-[2.5rem] flex justify-center items-center">
                        <ChevronLeft className="text-white"></ChevronLeft>
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
