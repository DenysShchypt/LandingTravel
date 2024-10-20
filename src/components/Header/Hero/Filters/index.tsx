import { FC, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import FilterLocation from './FilterLocation'
import FilterDate from './FilterDate'
import FilterGuest from './FilterGuest'
import { ISelectItem, ISelectValue } from '../../../../types'
import { useAppDispatch } from '../../../../utils/hooks'
import { openMobileSelector } from '../../../../store/slice'

const Filters: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const isMdOrLarger = useMediaQuery({ minWidth: 768 })

  const [choseOfCountry, setChoseOfCountry] = useState<ISelectValue>({
    location: '',
    date: '',
    guest: '',
  })

  const handleOpenSelector = (selectName: string) => {
    if (!isMdOrLarger) {
      dispatch(
        openMobileSelector({
          isOpenMobileSelector: true,
          selectName,
        })
      )
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Form Submitted with values:', choseOfCountry)
  }

  const handleSelect = (selectItem: ISelectItem | null, selectName: string) => {
    setChoseOfCountry((prevValue) => ({
      ...prevValue,
      [selectName]: selectItem ? selectItem.label : '',
    }))
  }

  return (
    <form
      className="mx-auto  md:flex  justify-end pb-6 md:py-1 md:pr-1 w-[353px] md:w-[549px] rounded-[20px] md:rounded-3xl border border-auxiliary bg-white hover:bg-gray-200"
      onSubmit={handleSubmit}
    >
      <FilterLocation
        handleSelect={handleSelect}
        handleOpenSelector={handleOpenSelector}
        isMdOrLarger={isMdOrLarger}
      />
      <div className="flex items-center">
        <span className="w-full md:w-px h-[1px] md:h-7 md:rounded-lg bg-auxiliary md:bg-customBlue"></span>
      </div>
      <FilterDate handleOpenSelector={handleOpenSelector} />
      <div className="flex items-center ">
        <span className="w-full md:w-px h-[1px] md:h-7 md:rounded-lg bg-auxiliary md:bg-customBlue"></span>
      </div>
      <FilterGuest
        handleSelect={handleSelect}
        handleOpenSelector={handleOpenSelector}
        isMdOrLarger={isMdOrLarger}
      />
      <div className="flex items-center mb-[25px]">
        <span className="w-full md:w-0 h-[1px] md:h-0 md:rounded-0 bg-auxiliary"></span>
      </div>
      <button
        className="flex justify-center items-center w-[310px] mx-auto md:m-0 py-[15px] md:py-0 px-10 md:px-0  md:w-12 md:h-12 border-[1px] md:border-0 border-auxiliary rounded-3xl md:rounded-full md:bg-auxiliary "
        type="submit"
      >
        <span className="font-medium text-xl text-center text-auxiliary md:hidden">
          Search
        </span>
        <svg
          className=" stroke-current  fill-transparent  stroke-1 hidden md:block "
          width="24"
          height="24"
        >
          <use href="./icons.svg#icon-search"></use>
        </svg>
      </button>
    </form>
  )
}

export default Filters
