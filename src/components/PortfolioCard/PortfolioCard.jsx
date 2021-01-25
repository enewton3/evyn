import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./PortfolioCard.css";

export default function PortfolioCard(props) {
  const { project } = props;

  return (
    <div className="portfolio-card">
      <img
        className="project-photo"
        src={project.photo ? project.photo[0].url : null}
        alt={project.name}
      />
      <div className="project-name">{project.name}</div>
      <div className="project-notes">{project.notes}</div>
      <a
        className="gh-icon"
        href={project.githubLink}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className="external-icon"
        href={project.URL}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
      </a>
    </div>
  );
}
