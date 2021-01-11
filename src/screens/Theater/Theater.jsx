import { useState, useEffect } from "react";
import { baseURL, config } from "../../services";
import axios from "axios";
import Layout from "../../components/shared/Layout";
import SectionLine from "../../components/SectionLine/SectionLine";
import "./Theater.css";

export default function Theater() {
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    const devURL = `${baseURL}/lightingProjects`;
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
    <Layout>
      <div className="theater-portfolio">
        <div className="theater-header">Lighting Design Projects</div>
        <SectionLine />
        <div className="theater-projects-container">
          {projects.map((item) => {
            return <div key={item.id}>{item.fields.name}</div>;
          })}
        </div>
      </div>
    </Layout>
  );
}
