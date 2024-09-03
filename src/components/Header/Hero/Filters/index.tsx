import { FC } from "react"


const Filters:FC = ():JSX.Element => {
  return (
    <form className="flex p-1 w-[549px] rounded-3xl border border-auxiliary bg-white">
      <button className="decoration-white w-12 h-12 rounded-full bg-auxiliary" type="submit">
        <svg className="fill-current" width="24" height="24">
            <use href="../../../../assets/icons.svg#icon-search"></use>
        </svg>
      </button>
    </form>
  )
}

export default Filters
