import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

export default function Nav() {
  const [toggleBurger, setToggleBurger] = useState(false);
  const [navClasses, setNavClasses] = useState(
    "flex justify-evenly nav-links lg:flex-row lg:px-2 lg:py-1 lg:w-2/3 xl:w-1/2 md:bg-gray-400  bg-gray-400"
  );

  const handleToggle = () => {
    setToggleBurger((prev) => !prev);
    toggleBurger
      ? setNavClasses((prev) => prev.replace(" nav-links-hide", ""))
      : setNavClasses((prev) => prev.concat(" nav-links-hide"));
  };
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setNavClasses((prev) => prev.concat(" nav-links-hide"));
      setToggleBurger(true);
    }
  }, []);

  return (
    <nav className="bg-gray-400 flex items-center justify-between shadow-md">
      <div className="logo m-3 rounded hover:text-white hover:bg-gray-700 py-2">
        <Link className="w-full h-full px-3" to="/">
          Evyn Newton
        </Link>
      </div>
      <div className={navClasses}>
        <Link className="nav-link" to="/about">
          About
        </Link>
        {/* <Link className="nav-link" to={{ pathname: "/evyn", hash: "#contact" }}>
          Contact
        </Link> */}
        <Link className="nav-link" to="/dev">
          Software Development
        </Link>
        <Link className="nav-link" to="/theater">
          Theater and Lighting
        </Link>
        <Link className="nav-link" to="/other">
          Other Projects
        </Link>
      </div>
      <div className="hamburger" onClick={handleToggle}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
    </nav>
  );
}
