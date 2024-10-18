import { FC } from 'react'
import { useAppDispatch } from '../../../../utils/hooks'
import { openMobileSelector } from '../../../../store/slice'

const NavigateMobile: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleOpenSelector = () => {
    dispatch(
      openMobileSelector({
        isOpenMobileSelector: false,
        selectName: '',
      })
    )
  }

  return (
    <ul className="w-[229px] mx-auto grid grid-cols-1 text-auxiliary text-center font-medium text-xl space-y-5">
      <li
        className="border-auxiliary border-[1px] py-[15px] rounded-3xl cursor-pointer"
        onClick={() => {
          scrollToSection('about')
          handleOpenSelector()
        }}
      >
        About
      </li>
      <li
        className="border-auxiliary border-[1px] py-[15px] rounded-3xl cursor-pointer"
        onClick={() => {
          scrollToSection('trip')
          handleOpenSelector()
        }}
      >
        Trip
      </li>
      <li
        className="border-auxiliary border-[1px] py-[15px] rounded-3xl cursor-pointer"
        onClick={() => {
          scrollToSection('blog')
          handleOpenSelector()
        }}
      >
        Blog
      </li>
      <li
        className="border-auxiliary border-[1px] py-[15px] rounded-3xl cursor-pointer"
        onClick={() => {
          scrollToSection('reviews')
          handleOpenSelector()
        }}
      >
        Reviews
      </li>
    </ul>
  )
}

export default NavigateMobile
