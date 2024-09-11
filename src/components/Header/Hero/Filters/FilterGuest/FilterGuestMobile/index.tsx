import  { FC, useState } from 'react'

const FilterGuestMobile:FC = ():JSX.Element => {
  const [countKids, setCountKids] = useState<number>(0);
  const [countAdult, setCountAdult] = useState<number>(0);

  const handleIncrementChildren = () => {
    setCountKids((prevCount) => prevCount + 1);
  }
  const handleDecrementChildren = () => {
    if (countKids > 0) setCountKids((prevCount) => prevCount - 1);
  }
  const handleIncrementAdult = () => {
    setCountAdult((prevCount) => prevCount + 1);
  }
  const handleDecrementAdult= () => {
    if (countKids > 0) setCountAdult((prevCount) => prevCount - 1);}

  return (
    <div


    className=" w-full bg-white border-slate-200 p-5 rounded-[20px] shadow-lg "
  >
    <div className="flex items-center justify-between mb-4">
      <div className="">
        <h4 className="font-normal text-black text-sm">Adults </h4>
        <p className="font-normal text-[#999] text-xs">
          after 12 years old
        </p>
      </div>
      <div className="flex items-center justify-between">
        <button onClick={handleDecrementAdult} className="rounded-[100px] bg-black  w-[14px] h-[2px]"></button>
        <p className=" rounded-[5px] border-solid border-auxiliary border-[1px] w-7 h-6  mx-[6px] font-normal text-black text-sm text-center">
          {countAdult}
        </p>
        <button onClick={handleIncrementAdult} className="rounded-[100px] text-black w-[14px] h-[14px]">
          <svg className=" fill-black" width="14" height="14">
            <use href="../../../../../../public/icons.svg#icon-pros"></use>
          </svg>
        </button>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <div className="">
        <h4 className="font-normal text-black text-sm">Children </h4>
        <p className="font-normal text-[#999] text-xs">
          up to 12 years old
        </p>
      </div>
      <div className="flex items-center justify-between">
        <button onClick={handleDecrementChildren} className="rounded-[100px] bg-black  w-[14px] h-[2px]"></button>
        <p className=" rounded-[5px] border-solid border-auxiliary border-[1px] w-7 h-6  mx-[6px] font-normal text-black text-sm text-center">
          {countKids}
        </p>
        <button onClick={handleIncrementChildren} className="rounded-[100px] text-black w-[14px] h-[14px]">
          <svg className=" fill-black" width="14" height="14">
            <use href="../../../../../../public/icons.svg#icon-pros"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
  )
}

export default FilterGuestMobile
