import { useState, useEffect } from "react";
import { getTheatreProjects } from "../../services/airtable";
import Layout from "../../components/shared/Layout";
import SectionLine from "../../components/SectionLine/SectionLine";
import Carousel from "../../components/Carousel/Carousel";
import "./Theater.css";

export default function Theater() {
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    try {
      const response = await getTheatreProjects();
      setProjects(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  // console.log(projects);

  return (
    <Layout>
      <div className="theater-portfolio">
        <div className="theater-header">Lighting Design Projects</div>
        <SectionLine />
        <div className="theater-projects-container">
          {projects &&
            projects.map((item) => {
              return (
                <div key={item.id}>
                  <Carousel
                    source={item.fields.photos}
                    type={"theater"}
                    // imageChange={true}
                    // intervalTime={5000}
                  />
                  {/* <SectionLine /> */}
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
}
