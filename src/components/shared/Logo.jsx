import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Logo.css";

export default function Logo() {
  return (
    <>
      <Link className="logo" to="/">
        <FontAwesomeIcon className="chev-left" icon={faChevronLeft} />
        <div className="evyn-name">&nbsp;evyn{" /"}</div>
        <FontAwesomeIcon className="chev-right" icon={faChevronRight} />
      </Link>
    </>
  );
}
