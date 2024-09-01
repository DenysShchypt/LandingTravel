import { FC } from "react";
import bgHeader from "../../assets/generalImg.jpg";

const Header: FC = (): JSX.Element => {
  const styles = {
    backgroundImage: `url(${bgHeader})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

  }
  return <header className=" h-screen w-screen bg-#003C82 text-white flex items-center"style={styles}>
    <nav className="w-full xl:max-w-[1600px] mx-auto px-146">
    <ul className="hidden w-full lg:flex items-center space-x-6 justify-end">
      <li className="text-sm font-normal">About</li>
      <li className="text-sm font-normal">Trip</li>
      <li className="text-sm font-normal">Blog</li>
      <li className="text-sm font-normal">Reviews</li>
    </ul>
    </nav>

  </header>;
};

export default Header;
