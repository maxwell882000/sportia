import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactNode } from "react";
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
    <Swiper
      spaceBetween={10} // Adjust space between slides
      slidesPerView="auto" // Show several slides with auto width
      freeMode={{
        enabled: true, // Allow free scrolling
      }}
      simulateTouch={false}
      noSwiping={true}
      mousewheel={{
        enabled: true,
        sensitivity: 1, // Adjust sensitivity for smooth scrolling
        releaseOnEdges: false, // Ensure scrolling continues through edges
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
  );
}

export default SlideButton;
