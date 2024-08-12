import Slider from "react-slick";

function SliderCategory() {
    const settings = {
        className: "slider variable-width",
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true
    };

    return <Slider {...settings}>
        <div>
            <div className={"bg-white m-2 w-[30px]"} style={{width: 100}}>
                <p>100</p>
            </div>
        </div>


        <div>
            <div className={"bg-white m-2 w-[30px]"} style={{width: 200}}>
                <p>200</p>
            </div>
        </div>

        <div className={"bg-white m-2 w-[30px]"} style={{width: 75}}>
            <p>75</p>
        </div>
        <div className={"bg-white m-2 w-[30px]"} style={{width: 300}}>
            <p>300</p>
        </div>
        <div>
            <div className={"bg-white m-2 w-[30px]"} style={{width: 225}}>
                <p>225</p>
            </div>
        </div>

        <div>
            <div className={"bg-white m-2 w-[30px]"} style={{width: 175}}>
                <p>175</p>
            </div>
        </div>

    </Slider>
}

export default SliderCategory
