import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Mousewheel } from 'swiper/modules'
import { countries } from '../../mock'
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
      {countries.map((country, index) => (
        <SwiperSlide
          key={index}
          style={!isMdOrLarger ? { maxWidth: '327px' } : { maxWidth: '367px' }}
        >
          <div className="relative xl:p-5 xl:border-[1px] xl:border-solid xl:border-auxiliary xl:rounded-[20px] group overflow-hidden hover:xl:border-white transition-all duration-300">
            <div className="relative w-full h-[660px] group-hover:xl:w-[calc(100%+40px)] group-hover:xl:h-[700px] group-hover:xl:-m-5 transition-all duration-300">
              <img
                className="object-cover w-full h-full rounded-[20px]"
                src={country.img}
                alt={`Best Way to Travel ${index + 1}`}
              />
            </div>
            <div className="absolute top-[33px] xl:top-[53px] left-[20px] xl:left-[40px] flex items-center">
              <svg className="mr-[10px] fill-white" width="16" height="20">
                <use href="./icons.svg#icon-local"></use>
              </svg>
              <h3 className="font-medium text-white text-4xl">
                {country.country}
              </h3>
            </div>
            <div className="absolute bottom-[50px] xl:bottom-[70px] left-[20px] xl:left-[40px] right-[43px] bg-black bg-opacity-5 text-white">
              <p className="font-normal text-sm/3 mb-3">{country.days}</p>
              <h3 className="font-medium text-4xl/10 mb-10">{country.title}</h3>
              <div className="flex items-center">
                <button className="flex items-center w-[179px] h-[54px] mr-4 px-[40px] py-[15px] border-[1px] border-solid border-white rounded-3xl font-medium text-xl text-center transition-colors duration-300 hover:bg-white hover:text-black">
                  Book Now
                </button>
                <div className="font-medium text-xl">$ {country.price}</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwipeExperience
