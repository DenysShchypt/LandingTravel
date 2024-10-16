import { FC, useState } from 'react'
import { Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperClass } from 'swiper'
import { clients } from '../../mock'

const SwipeHappyClients: FC = (): JSX.Element => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null)

  return (
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
          <SwiperSlide
            key={index}
            style={{ maxWidth: '366px' }}
            className="relative"
          >
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
              <img
                src={slide.avatar as string}
                alt="chan"
                className="rounded-full mx-auto"
              />
            </div>
            <div className="flex justify-center items-center">
              <h3 className="font-semibold text-4xl">{slide.name}</h3>
            </div>
            <button
              className="absolute left-0 
                 bottom-0 cursor-pointer z-10 p-3 pl-0"
              type="button"
              onClick={() => swiperInstance?.slidePrev()}
            >
              <svg className="slide-arrow" width="18" height="14">
                <use href="./icons.svg#icon-left"></use>
              </svg>
            </button>
            <button
              className="absolute
                 right-0
                 bottom-0 cursor-pointer z-10 p-3 pr-0"
              type="button"
              onClick={() => swiperInstance?.slideNext()}
            >
              <svg className="slide-arrow" width="18" height="14">
                <use href="./icons.svg#icon-right"></use>
              </svg>
            </button>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default SwipeHappyClients
