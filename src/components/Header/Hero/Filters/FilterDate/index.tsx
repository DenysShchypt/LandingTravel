import { FC, useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";

interface IFilterDateProps {
  handleOpenSelector: (selectName: string) => void;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const FilterDate: FC<IFilterDateProps> = ({
  handleOpenSelector,
}): JSX.Element => {
  const [value, onChange] = useState<Value>(new Date());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement | null>(null); 
  const buttonRef = useRef<HTMLButtonElement | null>(null); 

  const handleClick = () => {
    handleOpenSelector("Date");
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
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
    <div className="relative">
      <button
        type="button"
        ref={buttonRef}
        onClick={handleClick}
        className="appearance-none w-full font-medium px-5 md:m-0 text-xl md:w-[138px] py-5 md:py-2 text-black bg-lightgray focus:outline-none focus:border-none flex items-center justify-between md:justify-center"
      >
        Date
        <svg
          className="stroke-black ml-[220px] md:ml-2.5 stroke-1 fill-white transition-transform duration-300"
          width="16"
          height="10"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <use href="../../../../../../icons.svg#icon-arrow"></use>
        </svg>
      </button>

      {isOpen && (
        <div
          ref={calendarRef}
          className="absolute w-[300px] bg-white border-slate-200 mt-2 rounded-[20px] shadow-lg left-1/2 transform -translate-x-1/2 translate-y-[10px]"
        >
          <Calendar
            onChange={onChange}
            value={value}
            locale="en-US"
            className="custom-calendar"
          />
        </div>
      )}
    </div>
  );
};

export default FilterDate;


