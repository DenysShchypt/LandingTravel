import { FC } from "react"
import FilterLocation from "./FilterLocation"


const Filters:FC = ():JSX.Element => {
  return (
    <form className="mx-auto flex justify-end p-1 w-[549px] rounded-3xl border border-auxiliary bg-white">
     <FilterLocation/>
      <button className="flex justify-center items-center w-12 h-12 rounded-full bg-auxiliary" type="submit">
        <svg className="stroke-current fill-auxiliary stroke-1 " width="24" height="24">
            <use href="../../../../../icons.svg#icon-search"></use>
        </svg>
      </button>
    </form>
  )
}

export default Filters
