import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-header">Get In Touch!</div>
      <div className="contact-icons">
        <div className="email">
          <a href="mailto: newton.evyn@gmail.com">
            <FontAwesomeIcon icon={faAt} />
          </a>
        </div>
        <div className="insta">
          <a href="https://www.instagram.com/fade.time/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="facebook">
          <a href="https://www.facebook.com/evynnewton/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/evyn-newton/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/enewton3">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </section>
  );
}
