import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <div className="logo">Evyn Newton</div>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dev">Software Development</Link>
        <Link to="/theater">Theater and Lighting</Link>
      </div>
    </div>
  );
}
