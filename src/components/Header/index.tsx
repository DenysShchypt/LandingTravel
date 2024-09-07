import { FC } from "react";
import bgHeader from "../../assets/generalImg.jpg";
import Navigate from "./Navigate";
import Hero from "./Hero";


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
      <div className="container">
        <Navigate />
        <Hero />
      </div>
    </header>
  );
};

export default Header;
