import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Scrollbar} from "swiper/modules";

interface Props {
    images: string[]
}

function Slides({images}: Props) {
    return <Swiper
        slidesPerView={1}
        mousewheel={{
            enabled: true,
            sensitivity: 1,
            thresholdDelta: 25,
            releaseOnEdges: false,
            thresholdTime: 10
        }}
        centeredSlides={true}
        scrollbar={true}
        modules={[Mousewheel, Scrollbar]}
        className="rounded-tr-info rounded-tl-info h-[11.75rem]"
    >
        {
            images.map((img, index) =>
                <SwiperSlide key={`event-img-${index}`}>
                    <img alt={`event-img-${index}`} className="w-full h-full object-cover"
                         src={`${img}`}/>
                </SwiperSlide>)
        }
    </Swiper>
}

export default Slides
