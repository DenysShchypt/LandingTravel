import { FC } from 'react'

const NavigateMobile:FC = ():JSX.Element => {
  return (
<ul className=" w-[229px] mx-auto grid grid-cols-1 text-auxiliary text-center font-medium text-xl space-y-5">
<li className='border-auxiliary border-[1px]  py-[15px] rounded-3xl cursor-pointer'>About</li>
<li className='border-auxiliary border-[1px]  py-[15px] rounded-3xl cursor-pointer'>Trip</li>
<li className='border-auxiliary border-[1px]  py-[15px] rounded-3xl cursor-pointer'>Blog</li>
<li className='border-auxiliary border-[1px]  py-[15px] rounded-3xl cursor-pointer'>Reviews</li>
</ul>
  )
}

export default NavigateMobile
 