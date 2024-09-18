import { FC } from "react";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwipeHappyClients: FC = (): JSX.Element => {
  return (
    <>
      <Swiper
        speed={1000}
        slidesPerView="auto"
        centeredSlides={false}
        spaceBetween={20}
        grabCursor={true}
        mousewheel={true}
        loop={true}
        modules={[Mousewheel]}
      >
        <SwiperSlide>
            <div className="slide-content flex items-center justify-center w-full h-full">
          <div className="w-[366px] p-5">
            <div className="relative bg-comments mb-9 pt-6 pr-7 pb-9 pl-5">
              <p className="font-normal text-sm text-black">
                Affordable and reliable! I was looking for a budget-friendly
                vacation and I found a great deal through the travel agency. The
                agent I worked with was very helpful and she was able to find me
                a great flight and hotel at a price that fit my budget.
              </p>
              <svg className="absolute bottom-[-6%] left-[50%]  fill-comments" width="33" height="28">
                <use href="./icons.svg#icon-polygon"></use>
              </svg>
            </div>
          </div>
          </div>
          <div className="flex justify-between items-center">
          <svg className="fill-black" width="18" height="14">
                <use href="./icons.svg#icon-left"></use>
              </svg>
              <h3 className="">Alex</h3>
              <svg className="fill-black" width="18" height="14">
                <use href="./icons.svg#icon-right"></use>
              </svg>
          </div>

        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwipeHappyClients;
