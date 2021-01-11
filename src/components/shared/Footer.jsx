import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Contact from "../../components/Contact/Contact";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <Contact />
      <div className="footer">
        <div className="footer-text">
          <FontAwesomeIcon icon={faCopyright} /> Evyn Newton 2021
        </div>
      </div>
    </footer>
  );
}
