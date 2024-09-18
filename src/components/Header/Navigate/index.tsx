import { FC } from "react";
import { useAppDispatch } from "../../../utils/hooks";
import { openMobileSelector } from "../../../store/slice";

const Navigate: FC = (): JSX.Element => {

  const dispatch = useAppDispatch()

  const handleOpenSelector = () => {

      dispatch(openMobileSelector({
        isOpenMobileSelector: true,
        selectName:'',
      }))

  };
  return (
    <nav className="w-full flex justify-between mt-10 mb-24">
      <a href="../../../index.html" className="text-2xl font-bold mr-auto ">
        Turistoe
      </a>
      <ul className="hidden md:flex items-center  text-white rounded-3xl border border-gray-300">
        <li className="text-sm font-normal cursor-pointer px-10 py-4 rounded-3xl hover:text-black hover:bg-gray-300">
          About
        </li>
        <li className="text-sm font-normal cursor-pointer px-10 py-4 rounded-3xl hover:text-black hover:bg-gray-300">
          Trip
        </li>
        <li className="text-sm font-normal cursor-pointer px-10 py-4 rounded-3xl hover:text-black hover:bg-gray-300">
          Blog
        </li>
        <li className="text-sm font-normal cursor-pointer px-10 py-4 rounded-3xl hover:text-black hover:bg-gray-300">
          Reviews
        </li>
      </ul>
      <button className="flex items-center justify-center rounded-full border-[1px] border-white  w-12 h-12  md:hidden"
      onClick={handleOpenSelector}>
        <svg className="fill-white stroke-white stroke-2" width="24" height="18">
          <use href="./icons.svg#icon-menu"></use>
        </svg>
      </button>
    </nav>
  );
};

export default Navigate;
