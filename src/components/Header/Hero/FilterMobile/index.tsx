import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../utils/hooks";
import { closeMobileSelector } from "../../../../store/slice";
import { motion } from "framer-motion";

const FilterMobile: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const nameSelect = useAppSelector((state) => state.select.selectName);
  const handleCloseMobileSelect = () => dispatch(closeMobileSelector());
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.75 }}
      transition={{ duration: 0.75 }}
      className=" w-full  place-content-start  bg-white px-8 pt-[72px] xl:hidden"
    >
      <div className=" flex justify-between items-center py-4 mb-10">
        <h2 className="font-medium text-xl text-black">{nameSelect}</h2>
        <button className="" onClick={handleCloseMobileSelect}>
          <svg className=" stroke-black stroke-1" width="20" height="14">
            <use href="../../../../../icons.svg#icon-closed"></use>
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default FilterMobile;
