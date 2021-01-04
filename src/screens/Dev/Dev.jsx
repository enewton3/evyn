import { useState, useEffect } from "react";
import { baseURL, config } from "../../services";
import axios from "axios";
import Layout from "../../components/shared/Layout";

export default function Dev() {
  const [projects, setProjects] = useState([]);
  const pastProjects = projects.filter((item) => {
    item.fields.done ? item : false;
  });
  const currentProjects = projects.filter((item) => {
    !item.fields.done ? item : false;
  });
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
      <div>Current Projects</div>

      <div>Past Projects</div>
      {}
    </Layout>
  );
}
