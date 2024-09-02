import { FC } from "react";
import bgHeader from "../../assets/generalImg.jpg";

const Header: FC = (): JSX.Element => {
  const styles = {
    backgroundImage: `url(${bgHeader})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <header
      className="h-screen w-screen bg-#003C82 text-white flex"
      style={styles}
    >
<nav className="w-full lg:flex xl:max-w-[1162px] mx-52  mt-10 mb-auto">
<a href="../../../index.html" className="text-2xl font-bold mr-auto ">
  Turistoe
</a>
<ul className="hidden lg:flex items-center  justify-end text-white rounded-3xl border border-gray-300">
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
</nav>
    </header>
  );
};

export default Header;


<nav className="w-full lg:flex xl:max-w-[1162px] mx-52  mt-10 mb-auto">
<a href="../../../index.html" className="text-2xl font-bold mr-auto ">
  Turistoe
</a>
<ul className="hidden lg:flex items-center space-x-6 justify-end text-white rounded-3xl border border-white px-8 py-4 ">
  <li className="text-sm font-normal cursor-pointer hover:text-gray-300">
    About
  </li>
  <li className="text-sm font-normal cursor-pointer hover:text-gray-300">
    Trip
  </li>
  <li className="text-sm font-normal cursor-pointer hover:text-gray-300">
    Blog
  </li>
  <li className="text-sm font-normal cursor-pointer hover:text-gray-300">
    Reviews
  </li>
</ul>
</nav> 