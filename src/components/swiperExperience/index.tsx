import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Mousewheel } from 'swiper/modules'
import French from '../../assets/experience/French.jpg'
import Canada from '../../assets/experience/Canada.jpg'
import Greece from '../../assets/experience/Greece.jpg'
import Venice from '../../assets/experience/Venice.jpg'
import { useMediaQuery } from 'react-responsive'

const SwipeExperience: FC = (): JSX.Element => {
  const isMdOrLarger = useMediaQuery({ minWidth: 768 })
  return (
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
      <SwiperSlide
        style={!isMdOrLarger ? { maxWidth: '327px' } : { maxWidth: '367px' }}
      >
        <div className="relative xl:p-5 xl:border-[1px] xl:border-solid xl:border-auxiliary xl:rounded-[20px] ">
          <img
            className="object-cover w-full h-[660px] rounded-[20px]"
            src={French}
            alt="Best Way to Travel French"
          />
          <div className="absolute top-[33px] xl:top-[53px] left-[20px] xl:left-[40px] flex items-center">
            <svg className="mr-[10px] fill-white" width="16" height="20">
              <use href="./icons.svg#icon-local"></use>
            </svg>
            <h3 className="font-medium text-white text-4xl">Paris</h3>
          </div>
          <div className="absolute bottom-[50px] xl:bottom-[70px] left-[20px] xl:left-[40px] right-[43px] bg-black bg-opacity-5 text-white">
            <p className="font-normal text-sm/3 mb-3">5 days trip</p>
            <h3 className="font-medium text-4xl/10 mb-10">
              Sightseeing fo the city
            </h3>
            <div className="flex items-center">
              <button className="flex items-center w-[178px] h-[54px] mr-4 px-[40px] py-[15px] border-[1px] border-solid rounded-3xl font-medium text-xl text-center ">
                Book Now
              </button>
              <div className="font-medium text-xl">$ 2250</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={!isMdOrLarger ? { maxWidth: '327px' } : { maxWidth: '367px' }}
      >
        <div className="relative xl:p-5 xl:border-[1px] xl:border-solid xl:border-auxiliary xl:rounded-[20px] ">
          <img
            className="object-cover w-full h-[660px] rounded-[20px]"
            src={Canada}
            alt="Best Way to Travel"
          />
          <div className="absolute top-[33px] xl:top-[53px] left-[20px] xl:left-[40px] flex items-center">
            <svg className="mr-[10px] fill-white" width="16" height="20">
              <use href="./icons.svg#icon-local"></use>
            </svg>
            <h3 className="font-medium text-white text-4xl">Canada</h3>
          </div>
          <div className="absolute bottom-[50px] xl:bottom-[70px] left-[20px] xl:left-[40px] right-[43px] bg-black bg-opacity-5 text-white">
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
      <SwiperSlide
        style={!isMdOrLarger ? { maxWidth: '327px' } : { maxWidth: '367px' }}
      >
        <div className="relative  xl:p-5 xl:border-[1px] xl:border-solid xl:border-auxiliary xl:rounded-[20px] ">
          <img
            className="object-cover w-full h-[660px] rounded-[20px]"
            src={Greece}
            alt="Best Way to Travel"
          />
          <div className="absolute top-[33px] xl:top-[53px] left-[20px] xl:left-[40px] flex items-center">
            <svg className="mr-[10px] fill-white" width="16" height="20">
              <use href="./icons.svg#icon-local"></use>
            </svg>
            <h3 className="font-medium text-white text-4xl">Greece</h3>
          </div>
          <div className="absolute bottom-[50px] xl:bottom-[70px] left-[20px] xl:left-[40px] right-[43px] bg-black bg-opacity-5 text-white">
            <p className="font-normal text-sm/3 mb-3">14 days trip</p>
            <h3 className="font-medium text-4xl/10 mb-10">Amazing vacation</h3>
            <div className="flex items-center">
              <button className="flex items-center w-[178px] h-[54px] mr-4 px-[40px] py-[15px] border-[1px] border-solid rounded-3xl font-medium text-xl text-center ">
                Book Now
              </button>
              <div className="font-medium text-xl">$ 5100</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={!isMdOrLarger ? { maxWidth: '327px' } : { maxWidth: '367px' }}
      >
        <div className="relative xl:p-5 xl:border-[1px] xl:border-solid xl:border-auxiliary xl:rounded-[20px] ">
          <img
            className="object-cover w-full h-[660px] rounded-[20px]"
            src={Venice}
            alt="Best Way to Travel"
          />
          <div className="absolute top-[33px] xl:top-[53px] left-[20px] xl:left-[40px] flex items-center">
            <svg className="mr-[10px] fill-white" width="16" height="20">
              <use href="./icons.svg#icon-local"></use>
            </svg>
            <h3 className="font-medium text-white text-4xl">Venice</h3>
          </div>
          <div className="absolute bottom-[50px] xl:bottom-[70px] left-[20px] xl:left-[40px] right-[43px] bg-black bg-opacity-5 text-white">
            <p className="font-normal text-sm/3 mb-3">4 days trip</p>
            <h3 className="font-medium text-4xl/10 mb-10">Love story</h3>
            <div className="flex items-center">
              <button className="flex items-center w-[178px] h-[54px] mr-4 px-[40px] py-[15px] border-[1px] border-solid rounded-3xl font-medium text-xl text-center ">
                Book Now
              </button>
              <div className="font-medium text-xl">$ 2450</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SwipeExperience
