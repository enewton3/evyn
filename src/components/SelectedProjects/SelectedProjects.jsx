import { useState, useEffect } from "react";
import { getDevProjects } from "../../services/airtable";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import SectionLine from "../SectionLine/SectionLine";
import "./SelectedProjects.css";

export default function SelectedProjects() {
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    try {
      const response = await getDevProjects();
      setProjects(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="selected-projects-all" id="selected-projects">
      <div className="selected-projects-head">Projects</div>
      <SectionLine />
      <div className="selected-projects">
        {projects.map((item, index) =>
          index < 5 ? (
            <PortfolioCard key={item.id} project={item.fields} />
          ) : null
        )}
      </div>
    </div>
  );
}
