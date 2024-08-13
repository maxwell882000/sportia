import {Swiper, SwiperSlide} from "swiper/react";
import {defaultCategories} from "../../dtos/categories/categoryDto.ts";
import Category from "./Category.tsx";
import {Mousewheel} from "swiper/modules";

function Categories() {
    return <Swiper
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
            releaseOnEdges: false // Ensure scrolling continues through edges
        }}
        modules={[Mousewheel]}
    >
        {defaultCategories.map((cat, index) =>
            <SwiperSlide
                key={`category-${cat.id}`}
                className={`${
                    index === 0 ? 'ml-[1.5rem]' : (index === defaultCategories.length - 1 ? 'mr-[1.5rem]' : '')
                }`}
                style={{display: 'inline-block', width: "auto"}}>
                <Category category={cat}/>
            </SwiperSlide>)}
    </Swiper>
}

export default Categories
