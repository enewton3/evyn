import Layout from "../../components/shared/Layout";
import HomeImg from "../../images/home.jpg";
import AboutComponent from "../../components/AboutComponent/AboutComponent";
import SelectedProjects from "../../components/SelectedProjects/SelectedProjects";
import "./Home.css";

export default function Home() {
  return (
    <Layout>
      <div
        className="main-home-photo"
        style={{
          backgroundImage: `url(${HomeImg})`,
          backgroundPosition: "left",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="me">
          <div className="name">Evyn Newton</div>
          <div className="blurb ">
            Software Developer and Theatrical Lighting Designer
          </div>
        </div>
      </div>
      <AboutComponent />
      <SelectedProjects />
    </Layout>
  );
}
