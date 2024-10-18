import { FC } from 'react'
import SwipeExperience from '../../swiperExperience'

const Experience: FC = (): JSX.Element => {
  return (
    <section
      className=" pb-[150px] xl:pb-[300px] xl:pl-[220px] xl:flex xl:items-end"
      id="trip"
    >
      <div className="container xl:max-w-[456px] xl:mr-[40px] mb-[80px] xl:mb-0 xl:px-0">
        <h2 className=" mb-[60px] xl:mb-[80px] font-semibold text-4xl xl:text-6xl text-center xl:text-start text-black">
          Ultimate Travel Experience
        </h2>
        <p className="px-[14px] xl:px-0 mb-[14px] font-normal text-sm text-center xl:text-start text-black">
          We offer a wide range of services, including flight booking, hotel
          booking, car rental, visa assistance, insurance, and tours and
          activities. We work with leading global service providers to ensure
          you have the best possible travel experience. We also offer customized
          solutions for our clients that can be adapted to their specific needs
          and budget.
        </p>
      </div>
      <div className="overflow-hidden w-full pl-5 xl:pl-0">
        <SwipeExperience />
      </div>
    </section>
  )
}

export default Experience
