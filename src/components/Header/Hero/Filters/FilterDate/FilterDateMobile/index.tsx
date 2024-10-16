import { FC, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const FilterDateMobile: FC = (): JSX.Element => {
  const [value, onChange] = useState<Value>(new Date())

  return (
    <div className="mx-auto w-[324px]">
      <Calendar
        onChange={onChange}
        value={value}
        locale="en-US"
        className="custom-calendar"
      />
    </div>
  )
}

export default FilterDateMobile
