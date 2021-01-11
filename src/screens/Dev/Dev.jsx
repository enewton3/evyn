import { useState, useEffect } from "react";
import { baseURL, config } from "../../services";
import axios from "axios";
import Layout from "../../components/shared/Layout";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import "./Dev.css";

export default function Dev() {
  const [projects, setProjects] = useState([]);
  // const pastProjects = projects.filter((item) => {
  //   item.fields.done ? item : false;
  // });
  // const currentProjects = projects.filter((item) => {
  //   !item.fields.done ? item : false;
  // });
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
    <Layout>
      <div className="dev-all">
        <div className="dev-head">Software Development Projects</div>
        <div className="dev-portfolio">
          {projects.map((item) => (
            <PortfolioCard key={item.id} project={item.fields} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
