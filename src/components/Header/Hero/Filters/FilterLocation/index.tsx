import  { FC } from 'react'

const FilterLocation:FC = ():JSX.Element => {
  return (
    <label>
      <span className='text-black  text-center font-medium text-xl'>Location</span>
      <select className="appearance-none w-3 h-2 bg-[url('/icons.svg#icon-arrow')] ">
  </select>
  <svg className="stroke-black stroke-1 fill-white" width='12' height='8'>
    <use href='../../../../../../icons.svg#icon-arrow'></use>
  </svg>
    </label>
    
  )
}

export default FilterLocation
