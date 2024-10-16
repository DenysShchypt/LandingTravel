import { FC } from 'react'
import { useAppSelector } from '../../../../../utils/hooks'
import NavigateMobile from '../../../Navigate/NavigateMobile'
import FilterLocationMobile from '../../Filters/FilterLocation/FilterLocationMobile'
import FilterDateMobile from '../../Filters/FilterDate/FilterDateMobile'
import FilterGuestMobile from '../../Filters/FilterGuest/FilterGuestMobile'

const FilterMobileComponents: FC = (): JSX.Element => {
  const dataContent = useAppSelector((state) => state.select.selectName)

  switch (dataContent) {
    case '':
      return <NavigateMobile />
    case 'Location':
      return <FilterLocationMobile />
    case 'Date':
      return <FilterDateMobile />
    case 'Guest':
      return <FilterGuestMobile />
    default:
      return <div>Error!</div>
  }
}

export default FilterMobileComponents
