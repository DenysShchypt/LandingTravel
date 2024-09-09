import { FC } from "react"
import { useAppSelector } from "../../../../../utils/hooks"
import NavigateMobile from "../../../Navigate/NavigateMobile"
import FilterLocationMobile from "../../Filters/FilterLocation/FilterLocationMobile"
import FilterDateMobile from "../../Filters/FilterDate/FilterDateMobile"


const FilterMobileComponents:FC = ():JSX.Element => {

    const dataContent = useAppSelector(state=>state.select.selectName)

    switch (dataContent) {
        case '':
             return <NavigateMobile/>
        case "Location":
             return <FilterLocationMobile/>
        case "Date":
             return <FilterDateMobile/>
            

    
             default:
                return <div>Welcome! Please select an option.</div>;
    }
}

export default FilterMobileComponents
