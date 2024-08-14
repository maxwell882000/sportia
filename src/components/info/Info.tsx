import {Swiper, SwiperSlide} from "swiper/react"
import {Mousewheel, Scrollbar} from "swiper/modules";

function Info() {
    return <div className=" rounded-info h-[29.625rem] bg-white w-[22.75rem]">
        <Swiper
            slidesPerView={1}
            mousewheel={{
                enabled: true,
                sensitivity: 1,
                thresholdDelta: 25,
                releaseOnEdges: false,
                thresholdTime: 100
            }}
            centeredSlides={true}
            scrollbar={true}
            watchSlidesProgress={true}
            onSlideChange={(swiper) => {
                if (swiper.progress === 0 || swiper.progress === 1) {
                    swiper.mousewheel.disable();
                    setTimeout(() => swiper.mousewheel.enable(), 500);
                }
            }}
            modules={[Mousewheel, Scrollbar]}
            className="rounded-tr-info rounded-tl-info h-[11.75rem]"
        >
            <SwiperSlide>
                <img className="w-full h-full object-cover"
                     src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg"/>
            </SwiperSlide>
        </Swiper>
    </div>
}

export default Info
