import { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import "./Nav.css";

export default function Nav() {
  const [toggleBurger, setToggleBurger] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setToggleBurger(true);
      } else {
        setToggleBurger(false);
      }
    };
    window.addEventListener("resize", handleResize);
    // Set initial state
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="nav">
      <Logo />
      {windowWidth >= 1024 ? (
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
          nodeRef={navLinksRef}
        >
          <NavLinks
            setToggleBurger={setToggleBurger}
            toggleBurger={toggleBurger}
            ref={navLinksRef}
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
