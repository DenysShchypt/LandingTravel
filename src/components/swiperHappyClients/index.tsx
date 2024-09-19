import { FC, useState } from "react";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { clients } from "../../mock";
import { useMediaQuery } from "react-responsive";

const SwipeHappyClients: FC = (): JSX.Element => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  const isMdOrLarger = useMediaQuery({ minWidth: 768 });
  return (
    <div className="relative">
      <button
        className={`absolute ${isMdOrLarger?'left-[33%]':'left-0'} bottom-0 cursor-pointer z-10 p-3`}
        type="button"
        onClick={() => swiperInstance?.slidePrev()}
      >
        <svg
          className="  transform -translate-y-1/2 fill-black "
          width="18"
          height="14"
        >
          <use href="./icons.svg#icon-left"></use>
        </svg>
      </button>
      <button
        className={`absolute ${isMdOrLarger?'right-[33%]':'right-0'} bottom-0 cursor-pointer z-10 p-3`}
        type="button"
        onClick={() => swiperInstance?.slideNext()}
      >
        <svg
          className=" transform -translate-y-1/2 fill-black"
          width="18"
          height="14"
        >
          <use href="./icons.svg#icon-right"></use>
        </svg>
      </button>

      <Swiper
        speed={1000}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={31}
        grabCursor={true}
        mousewheel={true}
        loop={true}
        modules={[Mousewheel]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {clients &&
          clients.map((slide, index) => (
            <SwiperSlide key={index} style={{ maxWidth: "366px" }}>
              <div className="slide-content p-5 mb-5 ">
                <div className="relative bg-comments h-[185px] mb-9 pt-6 pr-7 pb-9 pl-5 rounded-xl">
                  <p className="font-normal text-sm text-black">
                    {slide.comment}
                  </p>
                  <svg
                    className="absolute bottom-[-6%] left-[45%]  fill-comments"
                    width="33"
                    height="28"
                  >
                    <use href="./icons.svg#icon-polygon"></use>
                  </svg>
                  
                </div>
                <img src={slide.avatar as string} alt="chan" className="rounded-full mx-auto" />
              </div>
              <div className="flex justify-center items-center">
                <h3 className="font-semibold text-4xl">{slide.name}</h3>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SwipeHappyClients;
