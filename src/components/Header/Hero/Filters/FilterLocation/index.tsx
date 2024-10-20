import { useSelect } from 'downshift'
import { FC } from 'react'
import { ISelectItem } from '../../../../../types'
import { items } from '../../../../../mock'

interface IFilterLocationProps {
  handleSelect: (selectItem: ISelectItem | null, selectName: string) => void
  handleOpenSelector: (selectName: string) => void
  isMdOrLarger: boolean
}

const FilterLocation: FC<IFilterLocationProps> = ({
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
    itemToString: (item) => (item ? item.label : ''),
    onSelectedItemChange: ({ selectedItem }) => {
      handleSelect(selectedItem, 'location')
    },
  })

  return (
    <div className="relative " onClick={() => handleOpenSelector('Location')}>
      <button
        type="button"
        {...getToggleButtonProps()}
        className="appearance-none w-full font-medium px-5 md:m-0 text-xl md:w-[170px] py-5 md:py-2  text-black bg-lightgray focus:outline-none focus:border-none flex items-center justify-between md:justify-center transition duration-300 hover:text-blue-600
        "
      >
        {selectedItem ? selectedItem.label : 'Location'}
        <svg
          className=" stroke-black  ml-[220px] md:ml-2.5 stroke-1 fill-white transition-transform duration-300 "
          width="16"
          height="10"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <use href="./icons.svg#icon-arrow"></use>
        </svg>
      </button>

      <ul
        {...getMenuProps()}
        className="absolute border-0 w-full bg-white rounded-[20px] border-[#003c82] shadow-lg translate-y-[10px]"
      >
        {isMdOrLarger &&
          isOpen &&
          items.map((item, index) => (
            <li
              {...getItemProps({ item, index })}
              key={item.value}
              className={`py-2 px-2  text-black cursor-pointer ${
                highlightedIndex === index ? 'bg-slate-200' : ''
              }`}
            >
              {item.label}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default FilterLocation
