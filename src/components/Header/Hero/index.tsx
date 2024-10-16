import { FC } from 'react'
import Filters from './Filters'

const Hero: FC = (): JSX.Element => {
  return (
    <>
      <h1 className="mb-24 mx-auto font-bold text-5xl md:text-8xl xl:text-9xl text-center leading-tight">
        Explore Our Delightful World
      </h1>
      <Filters />
    </>
  )
}

export default Hero
