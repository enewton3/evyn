import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import "./Nav.css";

export default function Nav() {
  const [toggleBurger, setToggleBurger] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setToggleBurger(true);
    } else if (window.innerWidth < 1024) {
      setToggleBurger(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <nav className="nav">
      <Logo />
      {window.innerWidth >= 1024 ? (
        <NavLinks
          setToggleBurger={setToggleBurger}
          toggleBurger={toggleBurger}
        />
      ) : (
        <CSSTransition
          in={toggleBurger}
          timeout={300}
          classNames={"nav-links"}
          unmountOnExit
        >
          <NavLinks
            setToggleBurger={setToggleBurger}
            toggleBurger={toggleBurger}
          />
        </CSSTransition>
      )}
      <div
        className="hamburger"
        onClick={() => setToggleBurger((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
    </nav>
  );
}
