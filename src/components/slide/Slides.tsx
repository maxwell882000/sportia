import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper/modules";

interface Props {
  images: string[];
}

function Slides({ images }: Props) {
  return (
    <Swiper
      slidesPerView={1}
      mousewheel={{
        enabled: true,
        sensitivity: 1,
        thresholdDelta: 25,
        releaseOnEdges: false,
        thresholdTime: 10,
      }}
      centeredSlides={true}
      scrollbar={true}
      modules={[Mousewheel, Scrollbar]}
      className="h-[11.75rem] rounded-tl-info rounded-tr-info"
    >
      {images.map((img, index) => (
        <SwiperSlide key={`event-img-${index}`}>
          <img
            alt={`event-img-${index}`}
            className="h-full w-full object-cover"
            src={`${img}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slides;
