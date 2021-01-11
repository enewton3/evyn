import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../../services";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./SelectedProjects.css";

export default function SelectedProjects() {
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    const devURL = `${baseURL}/devProjects`;
    try {
      const response = await axios.get(devURL, config);
      setProjects(response.data.records);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="selected-projects-all">
      <div className="selected-projects-head">Projects</div>
      <div className="selected-projects">
        {projects.map((item) => (
          <PortfolioCard key={item.id} project={item.fields} />
        ))}
      </div>
    </div>
  );
}
