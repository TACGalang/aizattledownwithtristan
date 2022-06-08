import "./style.css";
import { Link as Links } from "react-scroll";

interface NavBarProps {
  isNavBarActive: boolean;
  callHandleClick?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isNavBarActive, callHandleClick }) => {
  return (
    <>
      <nav className={isNavBarActive ? "navbar-active" : "navbar"}>
        <ul className="nav-menu-list">
          <li
            className="nav-menu-item"
            onClick={isNavBarActive ? callHandleClick : undefined}
          >
            <Links
              smooth={true}
              duration={500}
              spy={true}
              offset={-60}
              to="our-story"
              activeClass="nav-links-active"
              className="nav-links"
              onClick={isNavBarActive ? callHandleClick : undefined}
            >
              Our Story
            </Links>
          </li>
          <li
            className="nav-menu-item"
            onClick={isNavBarActive ? callHandleClick : undefined}
          >
            <Links
              smooth={true}
              duration={500}
              spy={true}
              offset={-60}
              to="when-and-where"
              activeClass="nav-links-active"
              className="nav-links"
              onClick={isNavBarActive ? callHandleClick : undefined}
            >
              When & Where
            </Links>
          </li>
          <li
            className="nav-menu-item"
            onClick={isNavBarActive ? callHandleClick : undefined}
          >
            <Links
              smooth={true}
              duration={500}
              spy={true}
              offset={-60}
              to="attires-and-gift"
              activeClass="nav-links-active"
              className="nav-links"
              onClick={isNavBarActive ? callHandleClick : undefined}
            >
              Attires & Gift
            </Links>
          </li>
          <li
            className="nav-menu-item"
            onClick={isNavBarActive ? callHandleClick : undefined}
          >
            <Links
              smooth={true}
              duration={500}
              spy={true}
              offset={-60}
              to="faq"
              activeClass="nav-links-active"
              className="nav-links"
              onClick={isNavBarActive ? callHandleClick : undefined}
            >
              FAQ
            </Links>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
