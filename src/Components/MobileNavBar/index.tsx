import "./style.css";
import logo from "../../Icons/hero-logo.svg";
import { Link as Links } from "react-scroll";

const MobileNavBar = ({ isHidden }: { isHidden: boolean }) => {
  return (
    <div
      className={
        isHidden
          ? "mobile nav bar base container-inactive"
          : "mobile nav bar base container"
      }
    >
      <Links smooth={true} duration={500} spy={true} offset={-80} to="home">
        <img src={logo} alt="" />
      </Links>
    </div>
  );
};

export default MobileNavBar;
