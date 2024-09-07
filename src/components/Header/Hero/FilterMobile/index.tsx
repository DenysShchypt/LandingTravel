import { FC } from 'react'



const FilterMobile:FC = ():JSX.Element => {
  return (
    <div className=' w-full h-full flex items-center justify-between bg-white px-4'>
      <h2 className="font-medium text-xl text-black"></h2>
      <button className="">
      <svg
          className=" stroke-black stroke-1 fill-white"
          width="24"
          height="24"
        >
          <use href="../../../../../icons.svg#icon-closed"></use>
        </svg>
      </button>
      
    </div>
  )
}

export default FilterMobile
