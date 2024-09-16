import { FC } from "react";
// import bgHeader from "../../assets/generalImg.jpg";
import Navigate from "./Navigate";
import Hero from "./Hero";
import { useAppSelector } from "../../utils/hooks";
import FilterMobile from "./Hero/FilterMobile";

const Header: FC = (): JSX.Element => {
  // const styles = {
  //   backgroundImage: `url(${bgHeader})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };
  const isOpenMobileSelect = useAppSelector(
    (state) => state.select.isOpenMobileSelector
  );

  return (
    <header
      className="pb-[80px] md:pb-[343px] pt-[60px] md:pt-[40px] w-screen bg-#003C82 text-white flex "
      // style={styles}
    >
      {isOpenMobileSelect ? (

          <FilterMobile />

      ) : (
        <div className="container">
          <Navigate />
          <Hero />
        </div>
      )}
    </header>
  );
};

export default Header;
