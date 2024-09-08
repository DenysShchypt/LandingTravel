import { useSelect } from "downshift";
import { FC } from "react";
import { ISelectItem } from "../../../../../types";

interface IFilterGuestProps {
  handleSelect: (selectItem: ISelectItem | null, selectName: string) => void;
  handleOpenSelector: (selectName: string) => void;
  isMdOrLarger: boolean;
}

const items = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "FR", label: "France" },
  { value: "DE", label: "Germany" },
];

const FilterGuest: FC<IFilterGuestProps> = ({
  handleSelect,
  handleOpenSelector,
  isMdOrLarger,
}): JSX.Element => {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    selectedItem,
  } = useSelect({
    items,
    itemToString: (item) => (item ? item.label : ""),
    onSelectedItemChange: ({ selectedItem }) => {
      handleSelect(selectedItem, "guest");
    },
  });

  return (
    <div className="relative" onClick={() => handleOpenSelector("Guest")}>
      <button
        type="button"
        {...getToggleButtonProps()}
        className="appearance-none w-full font-medium px-5 md:m-0 text-xl md:w-[186px] py-5 md:py-2  text-black bg-lightgray focus:outline-none focus:border-none flex items-center justify-between md:justify-center "
      >
        <div>{selectedItem ? selectedItem.label : "Guest"}</div>

        <svg
          className=" stroke-black md:ml-2.5 stroke-1 fill-white transition-transform duration-300"
          width="16"
          height="10"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <use href="../../../../../../icons.svg#icon-arrow"></use>
        </svg>
      </button>

      <ul
        {...getMenuProps()}
        className="absolute w-full bg-white border-0 border-slate-200 mt-2 rounded-[20px] shadow-lg"
      >
        {isMdOrLarger &&
          isOpen &&
          items.map((item, index) => (
            <li
              {...getItemProps({ item, index })}
              key={item.value}
              className={`py-2 px-2  text-black cursor-pointer ${
                highlightedIndex === index ? "bg-slate-200" : ""
              }`}
            >
              {item.label}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FilterGuest;
