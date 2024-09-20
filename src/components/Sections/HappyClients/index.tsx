import { FC } from "react"
import SwipeHappyClients from "../../swiperHappyClients"


const HappyClients:FC = ():JSX.Element => {
  return (
    <section className=" pb-[150px] xl:pb-[300px]">
        <h2 className="mb-[60px] xl:mb-[80px] font-semibold text-4xl xl:text-6xl text-center text-black">Our Happy Clients</h2>
        <SwipeHappyClients/>
      
    </section>
  )
}

export default HappyClients
