import  { FC } from 'react'
import SwipeExperience from '../../../utils/swiper'

const Experience:FC = ():JSX.Element => {
  return (
    <section className=' pb-[150px] '>
        <div className="container mb-[80px]">
        <h2 className="mb-[60px] xl:mb-[80px] font-semibold text-3xl xl:text-5xl text-center xl:text-start text-black">Ultimate Travel Experience</h2>
        <p className="px-[14px] xl:px-0 mb-[14px] font-normal text-sm text-center xl:text-start text-black">We offer a wide range of services, including flight booking, hotel booking, car rental, visa assistance, insurance, and tours and activities. We work with leading global service providers to ensure you have the best possible travel experience. We also offer customized solutions for our clients that can be adapted to their specific needs and budget.</p>
        </div>
        <div className="pl-5">
        <SwipeExperience/>
        </div>
    </section>
  )
}

export default Experience
