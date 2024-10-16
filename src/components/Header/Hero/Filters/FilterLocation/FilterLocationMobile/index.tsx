import { FC } from 'react'
import { items } from '../../../../../../mock'

const FilterLocationMobile: FC = (): JSX.Element => {
  return (
    <ul className="text-black font-normal text-base">
      {items.map((item) => (
        <li className="mb-5 cursor-pointer" key={item.value}>
          {item.label}
        </li>
      ))}
    </ul>
  )
}

export default FilterLocationMobile
