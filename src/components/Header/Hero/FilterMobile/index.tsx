import { FC, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks'
import { closeMobileSelector } from '../../../../store/slice'
import FilterMobileComponents from './FilterMobileComponents'

const FilterMobile: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const nameSelect = useAppSelector((state) => state.select.selectName)
  const isOpen = useAppSelector((state) => state.select.isOpenMobileSelector)

  const [isVisible, setIsVisible] = useState(isOpen)

  useEffect(() => {
    setIsVisible(isOpen)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleCloseMobileSelect = () => {
    setIsVisible(false)
    setTimeout(() => {
      dispatch(closeMobileSelector())
    }, 300)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={handleCloseMobileSelect}
          />
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full bg-white z-50 overflow-y-auto"
          >
            <div className="px-8 pt-[72px]">
              <div className="flex justify-between items-center py-4 mb-10">
                <h2 className="font-medium text-xl text-black">{nameSelect}</h2>
                <button
                  onClick={handleCloseMobileSelect}
                  className={`${
                    nameSelect === ''
                      ? 'flex items-center justify-center rounded-full border-[1px] border-auxiliary w-12 h-12'
                      : ''
                  }`}
                >
                  <svg
                    className={`${
                      nameSelect === '' ? 'fill-auxiliary' : 'fill-black'
                    } stroke-1`}
                    width="20"
                    height="14"
                  >
                    <use href="./icons.svg#icon-closed"></use>
                  </svg>
                </button>
              </div>
              <FilterMobileComponents />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default FilterMobile
