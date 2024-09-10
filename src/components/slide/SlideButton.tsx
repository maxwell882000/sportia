import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactNode, useEffect, useRef } from "react";
import { SlideButtonDto } from "../../dtos/slide/slideButtonDto.ts";
import SlideButtonItem from "./SlideButtonItem.tsx";

interface Props<T extends SlideButtonDto> {
  items: T[];
  children?: (item: T) => ReactNode;
  onClick?: (item: T) => void;
}

function SlideButton<T extends SlideButtonDto>({
  items,
  children,
  onClick,
}: Props<T>) {
  return (
    <>
      <div className="hidden md:block">
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          freeMode={{ enabled: true }}
          simulateTouch={false}
          noSwiping={true}
          mousewheel={{
            enabled: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          modules={[Mousewheel]}
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={`item-${item.name}-${item.id}`}
              className={`${
                index === 0
                  ? "ml-[1.5rem]"
                  : index === items.length - 1
                    ? "mr-[1.5rem]"
                    : ""
              }`}
              style={{ display: "inline-block", width: "auto" }}
            >
              {children ? (
                children(item)
              ) : (
                <SlideButtonItem item={item} onClick={onClick} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block md:hidden">
        <Swiper spaceBetween={10} slidesPerView="auto" simulateTouch={true}>
          {items.map((item, index) => (
            <SwiperSlide
              key={`item-${item.name}-${item.id}`}
              className={`${
                index === 0
                  ? "ml-[1rem]"
                  : index === items.length - 1
                    ? "mr-[1rem]"
                    : ""
              }`}
              style={{ display: "inline-block", width: "auto" }}
            >
              {children ? (
                children(item)
              ) : (
                <SlideButtonItem item={item} onClick={onClick} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default SlideButton;
