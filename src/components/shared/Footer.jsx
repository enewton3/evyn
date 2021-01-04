import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Contact from "../../components/Contact/Contact";

export default function Footer() {
  return (
    <footer>
      <Contact />
      <div className="flex justify-center content-center bg-gray-400">
        <div className="text-sm">
          <FontAwesomeIcon icon={faCopyright} /> Evyn Newton 2021
        </div>
      </div>
    </footer>
  );
}
