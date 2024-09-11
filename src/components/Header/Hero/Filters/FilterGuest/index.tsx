import { FC, useEffect, useRef, useState } from "react";
import { ISelectItem } from "../../../../../types";

interface IFilterGuestProps {
  handleSelect: (selectItem: ISelectItem | null, selectName: string) => void;
  handleOpenSelector: (selectName: string) => void;
  isMdOrLarger: boolean;
}

const FilterGuest: FC<IFilterGuestProps> = ({
  handleOpenSelector,
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [countKids, setCountKids] = useState<number>(0);
  const [countAdult, setCountAdult] = useState<number>(0);
  const countRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleClick = () => {
    setIsOpen(!isOpen);
    handleOpenSelector("Guest");
  };

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
    if (countKids > 0) setCountAdult((prevCount) => prevCount - 1);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      countRef.current &&
      !countRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <div className="relative" >
      <button
      onClick={handleClick}
        ref={buttonRef}
        type="button"
        className="appearance-none w-full font-medium px-5 md:m-0 text-xl md:w-[186px] py-5 md:py-2  text-black bg-lightgray focus:outline-none focus:border-none flex items-center justify-between md:justify-center "
      >
        <div>Guest</div>

        <svg
          className=" stroke-black md:ml-2.5 stroke-1 fill-white transition-transform duration-300"
          width="16"
          height="10"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <use href="../../../../../../icons.svg#icon-arrow"></use>
        </svg>
      </button>

      {isOpen && (
        <div
          ref={countRef}

          className="absolute w-[239px] bg-white border-slate-200 p-5 rounded-[20px] shadow-lg left-1/2 transform -translate-x-[95px] translate-y-[10px]"
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
      )}
    </div>
  );
};

export default FilterGuest;
