import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel } from "swiper/modules";
import French from "../../assets/experience/French.jpg";
import Canada from "../../assets/experience/Canada.jpg";
import Greece from "../../assets/experience/Greece.jpg";
import Venice from "../../assets/experience/Venice.jpg";

const SwipeExperience: FC = (): JSX.Element => {
  return (
    <Swiper
      slidesPerView="auto"
      centeredSlides={false}
      spaceBetween={20}
      grabCursor={true}
      mousewheel={true}
      modules={[Mousewheel]}
    >
      <SwiperSlide style={{ width: "327px" }}>
        <div className="relative ">
          <img
            className="object-cover w-full h-[660px] rounded-[20px]"
            src={French}
            alt="Best Way to Travel"
          />
          <div className="absolute top-[33px] left-[20px] bg-black bg-opacity-5 flex items-center">
            <svg
              className="mr-[10px] fill-white"
              width="16"
              height="20"
            >
              <use href="../../../public/icons.svg#icon-local"></use>
            </svg>
            <h3 className="font-medium text-white text-4xl">Canada</h3>
          </div>
          <div className="absolute bottom-[50px] left-[20px] right-[43px] bg-black bg-opacity-5 text-white">
            <p className="font-normal text-sm/3 mb-3">10 days trip</p>
            <h3 className="font-medium text-4xl/10 mb-10">
              Banff National Park
            </h3>
            <div className="flex items-center">
              <button className="flex items-center w-[178px] h-[54px] mr-4 px-[40px] py-[15px] border-[1px] border-solid rounded-3xl font-medium text-xl text-center ">
                Book Now
              </button>
              <div className="font-medium text-xl">$ 3000</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ width: "327px" }}>
        <div className="relative">
          <img
            className="object-cover w-full h-[660px] rounded-[20px]"
            src={Canada}
            alt="Best Way to Travel"
          />
          <div className="absolute top-[33px] left-[20px] bg-black bg-opacity-5 flex items-center">
            <svg
              className="mr-[10px] fill-white"
              width="16"
              height="20"
            >
              <use href="../../../public/icons.svg#icon-local"></use>
            </svg>
            <h3 className="font-medium text-white text-4xl">Canada</h3>
          </div>
          <div className="absolute bottom-[50px] left-[20px] right-[43px] bg-black bg-opacity-5 text-white">
            <p className="font-normal text-sm/3 mb-3">10 days trip</p>
            <h3 className="font-medium text-4xl/10 mb-10">
              Banff National Park
            </h3>
            <div className="flex items-center">
              <button className="flex items-center w-[178px] h-[54px] mr-4 px-[40px] py-[15px] border-[1px] border-solid rounded-3xl font-medium text-xl text-center ">
                Book Now
              </button>
              <div className="font-medium text-xl">$ 3000</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ width: "327px" }}>
        <img
          className="object-cover w-full h-[660px] rounded-[20px]"
          src={Greece}
          alt="Best Way to Travel"
        />
      </SwiperSlide>
      <SwiperSlide style={{ width: "327px" }}>
        <img
          className="object-cover w-full h-[660px] rounded-[20px]"
          src={Venice}
          alt="Best Way to Travel"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwipeExperience;
