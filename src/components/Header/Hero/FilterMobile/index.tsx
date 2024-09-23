import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../../../utils/hooks";
import { closeMobileSelector } from "../../../../store/slice";
import FilterMobileComponents from "./FilterMobileComponents";

const FilterMobile: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const nameSelect = useAppSelector((state) => state.select.selectName);
  const isOpen = useAppSelector((state) => state.select.isOpenMobileSelector);

  const [isVisible, setIsVisible] = useState(isOpen);

  const handleCloseMobileSelect = () => {
    setIsVisible(false);
    setTimeout(() => {
      dispatch(closeMobileSelector());
    }, 500);
  };

  return (
<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 1, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.5, x: "100%" }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 h-screen w-screen bg-white px-8 pt-[72px] xl:hidden"
    >
      <div className="flex justify-between items-center py-4 mb-10">
        <h2 className="font-medium text-xl text-black">{nameSelect}</h2>
        <button
          onClick={handleCloseMobileSelect}
          className={`${
            nameSelect === ""
              ? "flex items-center justify-center rounded-full border-[1px] border-auxiliary w-12 h-12"
              : ""
          }`}
        >
          <svg
            className={`${
              nameSelect === "" ? "fill-auxiliary" : "fill-black"
            } stroke-1`}
            width="20"
            height="14"
          >
            <use href="./icons.svg#icon-closed"></use>
          </svg>
        </button>
      </div>
      <FilterMobileComponents />
    </motion.div>
  )}
</AnimatePresence>
  );
};

export default FilterMobile;
