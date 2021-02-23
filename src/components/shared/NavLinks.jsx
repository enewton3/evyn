import { Link } from "react-router-dom";

export default function NavLinks(props) {
  const { toggleBurger, setToggleBurger } = props;

  const handleLinkClick = () => {
    if (!toggleBurger) {
      setToggleBurger(true);
    }
  };

  return (
    <div className="nav-links">
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/dev" onClick={handleLinkClick}>
        Software Development
      </Link>
      <Link className="nav-link" to="/theater" onClick={handleLinkClick}>
        Theater and Lighting
      </Link>
      {/* <Link className="nav-link" to="/other" onClick={handleLinkClick}>
        Other Projects
      </Link> */}
      <Link className="nav-link" to={"/contact"} onClick={handleLinkClick}>
        Contact
      </Link>
    </div>
  );
}
